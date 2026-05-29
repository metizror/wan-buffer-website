import { NextResponse } from "next/server";
import { BLOG_POSTS, type BlogSection } from "@/lib/blogs-data";
import { getDb } from "@/lib/mongodb";
import { createAdmin } from "@/lib/admin-service";
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

export async function POST() {
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

    // Create default admin user
    const defaultPassword = process.env.ADMIN_DEFAULT_PASSWORD || "admin@123";
    await createAdmin("Admin", "admin@wanbuffer.com", defaultPassword);

    return NextResponse.json({
      success: true,
      blogsInserted: docs.length,
      message: "Seeded successfully. Default admin: email=admin@wanbuffer.com",
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Seed failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
