import { NextResponse } from "next/server";
import { BLOG_POSTS, type BlogSection } from "@/lib/blogs-data";
import { getDb } from "@/lib/mongodb";
import { verifySession } from "@/lib/dal";
import { logAudit } from "@/lib/audit-service";
import { ensureIndexes } from "@/lib/blog-service";

function sectionsToHtml(sections: BlogSection[]): string {
  return sections
    .map((sec) => {
      let html = `<h2>${sec.heading}</h2>`;
      if (sec.paragraphs) {
        html += sec.paragraphs.map((p) => `<p>${p}</p>`).join("");
      }
      if (sec.bullets) {
        html += `<ul>${sec.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`;
      }
      return html;
    })
    .join("");
}

/**
 * One-off import of the static seed in `lib/blogs-data` into Mongo.
 *
 * Admin-only: it writes to the blogs collection, so it is guarded like every
 * other route under /api/admin. It no longer provisions an admin account —
 * reaching this handler already requires one.
 */
export async function POST() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const db = await getDb();
    const blogsCol = db.collection("blogs");

    // Check if already seeded
    const count = await blogsCol.countDocuments();
    if (count > 0) {
      return NextResponse.json(
        { message: `Already seeded (${count} blogs exist)` },
        { status: 200 }
      );
    }

    // Migrate blogs
    const docs = BLOG_POSTS.map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      sortDate: post.sortDate,
      author: post.author,
      authorRole: post.authorRole || "",
      readTime: post.readTime,
      imageSrc: post.imageSrc,
      category: post.category,
      externalUrl: post.externalUrl,
      content: post.detail ? sectionsToHtml(post.detail.sections) : "",
      faqs: post.detail?.faqs || [],
      isPublished: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await blogsCol.insertMany(docs);
    await ensureIndexes();

    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "bulk",
      entityType: "blog",
      entityId: "",
      entityName: `Seeded ${docs.length} blogs`,
    });

    return NextResponse.json({
      success: true,
      blogsInserted: docs.length,
      message: `Seeded ${docs.length} blogs.`,
    });
  } catch (err) {
    console.error("Blog seed failed:", err);
    return NextResponse.json({ error: "Seed failed" }, { status: 500 });
  }
}
