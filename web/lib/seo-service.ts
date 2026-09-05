import "server-only";
import { readdirSync, existsSync } from "fs";
import path from "path";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import { getPublishedBlogs } from "./blog-service";
import { BLOG_POSTS } from "./blogs-data";
import { getActiveRedirectsMap } from "./redirect-service";
import { WAN_BUFFER_CASE_STUDIES } from "./case-study-data";
import { getAllOdooApps } from "./odoo-apps-data";
import { getPublicEvents } from "./events-service";
import { computeSeoScore } from "./seo-score";
import type {
  PageCategory,
  SeoPage,
  SeoPageUpdateData,
} from "./definitions";

function col() {
  return getDb().then((db) => db.collection<SeoPage>("pages"));
}

export async function ensureSeoIndexes() {
  const c = await col();
  await c.createIndex({ slug: 1 }, { unique: true });
  await c.createIndex({ category: 1 });
  await c.createIndex({ isActive: 1 });
}

// ── Slug normalization ──

/** Leading slash, no trailing slash (except the root "/"). */
function normalizeSlug(slug: string): string {
  let s = slug.trim();
  if (!s.startsWith("/")) s = "/" + s;
  if (s.length > 1 && s.endsWith("/")) s = s.slice(0, -1);
  return s;
}

// ── Source gathering (for auto-seed) ──

interface SourceEntry {
  slug: string;
  title: string;
  category: PageCategory;
  metaDescription: string;
  ogImage: string;
}

const POLICY_SLUGS = new Set([
  "privacy-policy",
  "terms-of-use",
  "cookie-policy",
  "gdpr",
  "cancellation-and-refund-policy",
]);

const STATIC_SKIP = new Set(["admin", "api", "contact"]);

/** Paths that 301/308 elsewhere, never list these in the public sitemap. */
const REDIRECT_SLUGS = new Set([
  "/contact",
  "/events",
  "/engagement-models",
  "/hosting",
  "/odoo/odoo-customization-and-installation",
]);

function titleCase(segment: string): string {
  return segment
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Nested static routes the top-level scan below cannot see. Add a route here
 * when it lives under a folder that also holds a dynamic `[slug]` segment.
 */
const NESTED_STATIC_ENTRIES: SourceEntry[] = [
  {
    slug: "/event/odoo-experience-2026-india",
    title: "Odoo Experience 2026 India",
    category: "static",
    metaDescription:
      "Meet Wan Buffer at Odoo Experience 2026 India, 11-12 September 2026 at Mahatma Mandir, Gandhinagar.",
    ogImage: "",
  },
];

/** Discover top-level marketing/policy routes by scanning the `app/` dir. */
function getStaticSourceEntries(): SourceEntry[] {
  const entries: SourceEntry[] = [
    {
      slug: "/",
      title: "Home",
      category: "static",
      metaDescription: "",
      ogImage: "",
    },
  ];

  try {
    const appDir = path.join(process.cwd(), "app");
    for (const name of readdirSync(appDir, { withFileTypes: true })) {
      if (!name.isDirectory()) continue;
      const dir = name.name;
      // Skip admin/api, route groups "(...)", dynamic "[...]", and private "_".
      if (
        STATIC_SKIP.has(dir) ||
        dir.startsWith("(") ||
        dir.startsWith("[") ||
        dir.startsWith("_")
      ) {
        continue;
      }
      const topPage = existsSync(path.join(appDir, dir, "page.tsx"));
      if (topPage) {
        entries.push({
          slug: `/${dir}`,
          title: titleCase(dir),
          category: POLICY_SLUGS.has(dir) ? "policy" : "static",
          metaDescription: "",
          ogImage: "",
        });
      }

      try {
        for (const nested of readdirSync(path.join(appDir, dir), { withFileTypes: true })) {
          if (!nested.isDirectory()) continue;
          const nestedName = nested.name;
          if (nestedName.startsWith("[") || nestedName.startsWith("(") || nestedName.startsWith("_")) {
            continue;
          }
          if (!existsSync(path.join(appDir, dir, nestedName, "page.tsx"))) continue;
          entries.push({
            slug: `/${dir}/${nestedName}`,
            title: titleCase(nestedName),
            category: "static",
            metaDescription: "",
            ogImage: "",
          });
        }
      } catch {
        // ignore unreadable nested dirs
      }
    }
  } catch {
    // Filesystem not available, fall back to just the home route.
  }

  entries.push(...NESTED_STATIC_ENTRIES);

  return entries;
}

async function gatherSourceEntries(): Promise<SourceEntry[]> {
  const blogs = await getPublishedBlogs();
  const blogBySlug = new Map(
    blogs.map((b) => [
      b.slug,
      {
        slug: b.slug,
        title: b.title,
        excerpt: b.excerpt,
        metaDescription: b.metaDescription,
        ogImage: b.ogImage,
        imageSrc: b.imageSrc,
      },
    ])
  );
  for (const post of BLOG_POSTS) {
    if (!blogBySlug.has(post.slug)) {
      blogBySlug.set(post.slug, {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        metaDescription: post.excerpt,
        ogImage: post.imageSrc,
        imageSrc: post.imageSrc,
      });
    }
  }

  const blogEntries: SourceEntry[] = [...blogBySlug.values()].map((b) => ({
    slug: `/blogs/${b.slug}`,
    title: b.title,
    category: "blog",
    metaDescription: b.metaDescription || b.excerpt || "",
    ogImage: b.ogImage || b.imageSrc || "",
  }));

  const workEntries: SourceEntry[] = WAN_BUFFER_CASE_STUDIES.map((c) => ({
    slug: `/case-study/${c.slug}`,
    title: c.title,
    category: "work",
    metaDescription: c.excerpt || "",
    ogImage: c.imageSrc || "",
  }));

  const productEntries: SourceEntry[] = getAllOdooApps().map((a) => ({
    slug: `/odoo/apps/${a.slug}`,
    title: a.name,
    category: "product",
    metaDescription: a.summary || "",
    ogImage: a.cardImageSrc || a.iconSrc || "",
  }));

  let eventEntries: SourceEntry[] = [];
  try {
    const events = await getPublicEvents();
    eventEntries = events.map((e) => ({
      slug: `/event/${e.slug}`,
      title: e.title,
      category: "static",
      metaDescription: e.excerpt || "",
      ogImage: e.imageSrc || "",
    }));
  } catch {
    // listing page still covers /event
  }

  const staticEntries = getStaticSourceEntries();

  return [
    ...blogEntries,
    ...workEntries,
    ...productEntries,
    ...eventEntries,
    ...staticEntries,
  ];
}

// ── Seed ──

function defaultsFromSource(source: SourceEntry, now: Date): SeoPage {
  const seed: Omit<SeoPage, "lastSeoScore"> = {
    slug: normalizeSlug(source.slug),
    title: source.title,
    category: source.category,
    isActive: true,
    metaTitle: source.title,
    metaDescription: source.metaDescription,
    keywords: [],
    ogImage: source.ogImage,
    canonical: "",
    ogTitle: "",
    ogDescription: "",
    ogImageAlt: "",
    twitterTitle: "",
    twitterDescription: "",
    twitterImage: "",
    noIndex: false,
    noFollow: false,
    advancedRobots: [],
    breadcrumbTitle: "",
    focusKeyphrase: "",
    schemaType: "WebPage",
    schemaJsonld: "",
    includeInSitemap: true,
    createdAt: now,
    updatedAt: now,
  };
  const lastSeoScore = computeSeoScore(seed).score;
  return { ...seed, lastSeoScore };
}

/**
 * Idempotent auto-seed. Inserts a `pages` row for every source entry that does
 * not already have one (matched by slug). Never overwrites an existing row.
 */
export async function syncSeoPages(): Promise<{
  inserted: number;
  total: number;
}> {
  const c = await col();
  await ensureSeoIndexes();

  const sources = await gatherSourceEntries();

  // De-dupe sources by slug (keep first occurrence).
  const bySlug = new Map<string, SourceEntry>();
  for (const s of sources) {
    const slug = normalizeSlug(s.slug);
    if (!bySlug.has(slug)) bySlug.set(slug, s);
  }

  const existing = await c
    .find({}, { projection: { slug: 1 } })
    .toArray();
  const existingSlugs = new Set(existing.map((d) => d.slug));

  const now = new Date();
  const toInsert: SeoPage[] = [];
  for (const [slug, source] of bySlug) {
    if (existingSlugs.has(slug)) continue;
    toInsert.push(defaultsFromSource(source, now));
  }

  let inserted = 0;
  if (toInsert.length > 0) {
    try {
      const res = await c.insertMany(
        toInsert as unknown as SeoPage[],
        { ordered: false }
      );
      inserted = res.insertedCount;
    } catch {
      // Ignore duplicate-key races; the rows that mattered are in place.
    }
  }

  const total = await c.countDocuments({});
  return { inserted, total };
}

// ── Queries ──

function serialize(doc: SeoPage & { _id?: unknown }): SeoPage {
  return { ...doc, _id: doc._id?.toString() ?? "" } as SeoPage;
}

export async function listSeoPages(options?: {
  category?: string;
  search?: string;
}): Promise<SeoPage[]> {
  const c = await col();
  const filter: Record<string, unknown> = {};

  if (options?.category && options.category !== "all") {
    filter.category = options.category;
  }
  if (options?.search) {
    const escaped = options.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    filter.$or = [
      { slug: { $regex: escaped, $options: "i" } },
      { title: { $regex: escaped, $options: "i" } },
      { metaTitle: { $regex: escaped, $options: "i" } },
    ];
  }

  const docs = await c.find(filter).sort({ category: 1, slug: 1 }).toArray();
  return docs.map(serialize);
}

export async function getSeoPageById(id: string): Promise<SeoPage | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serialize(doc) : null;
}

export async function getSeoPageBySlug(slug: string): Promise<SeoPage | null> {
  const c = await col();
  const doc = await c.findOne({ slug: normalizeSlug(slug) });
  return doc ? serialize(doc) : null;
}

export async function updateSeoPage(
  id: string,
  data: SeoPageUpdateData
): Promise<SeoPage | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;

  const current = await c.findOne({
    _id: new ObjectId(id) as unknown as undefined,
  });
  if (!current) return null;

  const merged = { ...current, ...data } as SeoPage;
  const lastSeoScore = computeSeoScore(merged).score;

  const result = await c.findOneAndUpdate(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: { ...data, lastSeoScore, updatedAt: new Date() } },
    { returnDocument: "after" }
  );

  return result ? serialize(result as unknown as SeoPage) : null;
}

export async function setSeoActive(
  ids: string[],
  isActive: boolean
): Promise<number> {
  const c = await col();
  const objectIds = ids
    .filter((id) => ObjectId.isValid(id))
    .map((id) => new ObjectId(id));
  if (objectIds.length === 0) return 0;
  const result = await c.updateMany(
    { _id: { $in: objectIds } as unknown as undefined },
    { $set: { isActive, updatedAt: new Date() } }
  );
  return result.modifiedCount;
}

export async function getSeoStats(): Promise<{
  total: number;
  active: number;
  inactive: number;
}> {
  const c = await col();
  const [total, active] = await Promise.all([
    c.countDocuments({}),
    c.countDocuments({ isActive: true }),
  ]);
  return { total, active, inactive: total - active };
}

// ── Sitemap ──

export interface SitemapEntry {
  slug: string;
  updatedAt: Date;
}

/**
 * Public sitemap: filesystem + blogs + case studies + apps + events, merged
 * with any extra SEO catalogue rows. Redirect sources and noindex pages are
 * dropped so Search Console only sees live URLs.
 */
export async function getSitemapEntries(): Promise<SitemapEntry[]> {
  const now = new Date();
  const bySlug = new Map<string, Date>();

  const sources = await gatherSourceEntries();
  for (const source of sources) {
    const slug = normalizeSlug(source.slug);
    if (REDIRECT_SLUGS.has(slug)) continue;
    bySlug.set(slug, now);
  }

  try {
    const c = await col();
    const [docs, redirects] = await Promise.all([
      c
        .find({ isActive: true, includeInSitemap: true, noIndex: { $ne: true } })
        .project({ slug: 1, updatedAt: 1 })
        .toArray(),
      getActiveRedirectsMap(),
    ]);

    for (const doc of docs) {
      const slug = normalizeSlug(doc.slug as string);
      if (REDIRECT_SLUGS.has(slug) || redirects.has(slug)) continue;
      bySlug.set(slug, (doc.updatedAt as Date) ?? now);
    }
    for (const oldUrl of redirects.keys()) {
      bySlug.delete(normalizeSlug(oldUrl));
    }
  } catch {
    // Mongo optional
  }

  return [...bySlug.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([slug, updatedAt]) => ({ slug, updatedAt }));
}
