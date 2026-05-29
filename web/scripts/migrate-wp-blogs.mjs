/**
 * WordPress → MongoDB blog migration script.
 *
 * READ-ONLY on WordPress — only fetches data via the public REST API and
 * scrapes rendered HTML for content. Does NOT modify WordPress in any way.
 *
 * Usage:  node scripts/migrate-wp-blogs.mjs
 *
 * Env vars (reads from .env.local automatically):
 *   MONGODB_URI   – e.g. mongodb://localhost:27017/local
 *   MONGODB_DB    – e.g. wan-buffer-blogs
 */

import { MongoClient } from "mongodb";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// ── Load .env.local ──
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");
try {
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
} catch {
  console.error("Could not read .env.local — set MONGODB_URI and MONGODB_DB manually.");
  process.exit(1);
}

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;
if (!MONGODB_URI || !MONGODB_DB) {
  console.error("MONGODB_URI and MONGODB_DB are required.");
  process.exit(1);
}

// ── Config ──
const WP_BASE = "https://wanbuffer.com/blogs";
const WP_API = `${WP_BASE}/wp-json/wp/v2`;
const PER_PAGE = 20; // keep requests small to avoid timeouts
const CONCURRENCY = 5; // parallel scrape workers
const DELAY_MS = 300; // polite delay between scrape batches

// ── Category mapping: WP blog_category ID → our category ──
const CATEGORY_MAP = {
  // Direct matches
  47: "ERP",
  57: "Odoo",
  90: "Manufacturing",
  45: "E-Commerce",
  441: "Oil & Gas",
  421: "3PL & Logistics",
  120: "Supply Chain",
  // Odoo-related
  60: "Odoo", 61: "Odoo", 66: "Odoo", 69: "Odoo", 113: "Odoo",
  82: "Odoo", 107: "Odoo", 68: "Odoo", 95: "Odoo", 59: "Odoo",
  // ERP-related
  48: "ERP", 63: "ERP", 85: "ERP", 84: "ERP", 46: "ERP",
  // Tech
  78: "AI & ML", 79: "AI & ML",
  44: "CRM",
  38: "Accounting",
  124: "Inventory",
  121: "Point of Sale",
  128: "HR & Workforce", 312: "HR & Workforce",
  112: "Project Management",
  // App / Web Dev
  55: "App Development", 56: "App Development", 83: "App Development",
  346: "App Development", 106: "App Development", 65: "App Development",
  62: "Web Development", 109: "Web Development", 110: "Web Development",
  64: "Web Development", 67: "Web Development", 70: "Web Development",
  94: "Web Development", 80: "Web Development", 39: "Web Development",
  40: "Web Development",
  // Business / Strategy
  127: "Business", 87: "Business", 96: "Industry",
  93: "Digital Transformation", 89: "Digital Transformation",
  86: "IT Services", 54: "Marketing", 58: "Marketing", 74: "Marketing",
  // Hiring / Outsourcing
  52: "Hiring & Outsourcing", 76: "Hiring & Outsourcing",
  91: "Hiring & Outsourcing", 92: "Hiring & Outsourcing",
  75: "Hiring & Outsourcing", 81: "Hiring & Outsourcing",
  77: "IT Services",
  // Niche
  73: "SaaS", 71: "UI/UX",
  53: "E-Commerce", // Magento
  337: "Inventory", // SmartStock
  343: "Industry", // FitPro
  341: "Industry", // Yacht
  122: "Digital Transformation", // Digital Payments
  42: "Odoo", // Community
  43: "ERP", // Comparison
  51: "Web Development", // Github
  88: "Web Development", // website
  97: "Business", // Insights
  98: "Business", // Trends
  99: "AI & ML", // Metaverse
  101: "AI & ML", // 3D visual
  102: "IT Services", // Cloud computing
  103: "AI & ML", // Quantum computing
  104: "Web Development", // Developer automation
  108: "IT Services", // Architecture
  50: "Business", // Gevenhount
  72: "App Development", // Gaming apps
};

const DEFAULT_CATEGORY = "ERP";

function mapCategory(wpCategoryIds) {
  for (const id of wpCategoryIds) {
    if (CATEGORY_MAP[id]) return CATEGORY_MAP[id];
  }
  return DEFAULT_CATEGORY;
}

// ── Helpers ──

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "WanBuffer-Migration/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const total = res.headers.get("x-wp-total");
  const data = await res.json();
  return { data, total: total ? parseInt(total, 10) : null };
}

async function fetchHtml(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "WanBuffer-Migration/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function extractContentByDepth(html) {
  const marker = '<div class="blog_content">';
  const startIdx = html.indexOf(marker);
  if (startIdx === -1) return "";

  const inner = html.slice(startIdx + marker.length);
  let depth = 1;
  let pos = 0;
  while (depth > 0 && pos < inner.length) {
    const nextOpen = inner.indexOf("<div", pos);
    const nextClose = inner.indexOf("</div>", pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) return inner.slice(0, nextClose).trim();
      pos = nextClose + 6;
    }
  }
  return "";
}

function extractFromHtml(html) {
  const result = { content: "", author: "", authorRole: "", imageSrc: "", excerpt: "" };

  // Blog content — extract by counting div depth
  result.content = extractContentByDepth(html);

  // Author name
  const authorMatch = html.match(/class="author_name"[^>]*>([^<]+)/);
  if (authorMatch) result.author = authorMatch[1].trim();

  // Author role — <span> right after author_name link
  const roleMatch = html.match(/author_name[^>]*>[^<]*<\/a>\s*<span[^>]*>([^<]+)/);
  if (roleMatch) {
    const role = roleMatch[1].trim();
    if (!role.toLowerCase().startsWith("last updated")) {
      result.authorRole = role;
    }
  }

  // OG image
  const ogMatch = html.match(/property="og:image"[^>]*content="([^"]+)"/);
  if (ogMatch) result.imageSrc = ogMatch[1];

  // Meta description → excerpt
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/);
  if (descMatch) result.excerpt = descMatch[1].trim();

  return result;
}

function slugify(wpSlug) {
  // WordPress slugs can have trailing slashes or encoded chars; clean up
  return wpSlug.replace(/\/$/, "").trim();
}

function formatDate(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function formatSortDate(isoDate) {
  return isoDate.slice(0, 10); // YYYY-MM-DD
}

function estimateReadTime(html) {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const words = text.split(" ").filter(Boolean).length;
  const mins = Math.max(1, Math.ceil(words / 200));
  return `${mins} min`;
}

function decodeHtmlEntities(str) {
  return str
    .replace(/&#038;/g, "&")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}

// ── Parallel scrape with concurrency limit ──
async function scrapeInBatches(posts) {
  const results = [];
  for (let i = 0; i < posts.length; i += CONCURRENCY) {
    const batch = posts.slice(i, i + CONCURRENCY);
    const batchResults = await Promise.allSettled(
      batch.map(async (post) => {
        const url = post.link.replace(/\/$/, "") + "/";
        try {
          const html = await fetchHtml(url);
          const extracted = extractFromHtml(html);
          return { post, extracted };
        } catch (err) {
          console.warn(`  [WARN] Failed to scrape ${url}: ${err.message}`);
          return { post, extracted: null };
        }
      })
    );
    for (const r of batchResults) {
      if (r.status === "fulfilled") results.push(r.value);
    }
    if (i + CONCURRENCY < posts.length) {
      await new Promise((r) => setTimeout(r, DELAY_MS));
    }
  }
  return results;
}

// ── Main ──
async function main() {
  console.log("=== WordPress → MongoDB Blog Migration ===\n");
  console.log("READ-ONLY on WordPress. Only blog collection in MongoDB will be modified.\n");

  // Step 1: Fetch all posts from WP API (paginated)
  console.log("1. Fetching post list from WordPress API...");
  const allPosts = [];
  let page = 1;
  let totalPosts = null;

  while (true) {
    const url = `${WP_API}/blog-post?per_page=${PER_PAGE}&page=${page}&_embed`;
    try {
      const { data, total } = await fetchJson(url);
      if (totalPosts === null) {
        totalPosts = total;
        console.log(`   Total posts: ${totalPosts}`);
      }
      if (!data.length) break;
      allPosts.push(...data);
      process.stdout.write(`   Fetched page ${page} (${allPosts.length}/${totalPosts})\r`);
      page++;
    } catch (err) {
      if (err.message.includes("400")) break; // past last page
      throw err;
    }
  }
  console.log(`\n   Fetched ${allPosts.length} posts from API.\n`);

  // Step 2: Scrape each blog page for content
  console.log("2. Scraping blog pages for content (this will take a few minutes)...");
  const scraped = await scrapeInBatches(allPosts);
  const successful = scraped.filter((s) => s.extracted && s.extracted.content);
  const failed = scraped.filter((s) => !s.extracted || !s.extracted.content);
  console.log(`   Scraped: ${successful.length} with content, ${failed.length} without content.\n`);

  // Step 3: Build blog documents
  console.log("3. Building blog documents...");
  const now = new Date();
  const blogDocs = [];
  const seenSlugs = new Set();

  for (const { post, extracted } of scraped) {
    const slug = slugify(post.slug);
    if (seenSlugs.has(slug)) {
      console.warn(`   [SKIP] Duplicate slug: ${slug}`);
      continue;
    }
    seenSlugs.add(slug);

    const title = decodeHtmlEntities(post.title.rendered);
    const wpCategories = post.blog_category || [];
    const category = mapCategory(wpCategories);

    const content = extracted?.content || "";
    const excerpt = extracted?.excerpt || title;
    const author = extracted?.author || "Wan Buffer";
    const authorRole = extracted?.authorRole || "";
    const imageSrc = extracted?.imageSrc || "";

    blogDocs.push({
      slug,
      title,
      excerpt,
      date: formatDate(post.date),
      sortDate: formatSortDate(post.date),
      author,
      authorRole,
      readTime: content ? estimateReadTime(content) : "3 min",
      imageSrc,
      category,
      externalUrl: post.link,
      content,
      faqs: [],
      isPublished: true,
      createdAt: new Date(post.date),
      updatedAt: now,
    });
  }

  console.log(`   Built ${blogDocs.length} blog documents.\n`);

  // Step 4: Insert into MongoDB
  console.log("4. Connecting to MongoDB...");
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db(MONGODB_DB);
    const col = db.collection("blogs");

    // Clear existing blogs
    const deleteResult = await col.deleteMany({});
    console.log(`   Deleted ${deleteResult.deletedCount} existing blogs.`);

    // Insert new blogs
    if (blogDocs.length > 0) {
      const insertResult = await col.insertMany(blogDocs);
      console.log(`   Inserted ${insertResult.insertedCount} blogs.`);
    }

    // Create indexes
    await col.createIndex({ slug: 1 }, { unique: true });
    await col.createIndex({ sortDate: -1 });
    await col.createIndex({ category: 1 });
    await col.createIndex({ isPublished: 1 });
    console.log("   Indexes created.");

    // Summary
    const total = await col.countDocuments();
    const withContent = await col.countDocuments({ content: { $ne: "" } });
    console.log(`\n=== Migration Complete ===`);
    console.log(`   Total blogs in DB: ${total}`);
    console.log(`   With content: ${withContent}`);
    console.log(`   Without content: ${total - withContent}`);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
