import "server-only";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { BlogDocument, BlogFormData, PaginatedResult } from "./definitions";

function col() {
  return getDb().then((db) => db.collection<BlogDocument>("blogs"));
}

export async function ensureIndexes() {
  const c = await col();
  await c.createIndex({ slug: 1 }, { unique: true });
  await c.createIndex({ sortDate: -1 });
  await c.createIndex({ category: 1 });
}

export async function getAllBlogs(options?: {
  search?: string;
  category?: string;
  published?: boolean;
}): Promise<BlogDocument[]> {
  const c = await col();
  const filter: Record<string, unknown> = {};

  if (options?.search) {
    filter.$or = [
      { title: { $regex: options.search, $options: "i" } },
      { excerpt: { $regex: options.search, $options: "i" } },
      { author: { $regex: options.search, $options: "i" } },
    ];
  }
  if (options?.category && options.category !== "All") {
    filter.category = options.category;
  }
  if (options?.published !== undefined) {
    filter.isPublished = options.published;
  }

  const docs = await c.find(filter).sort({ sortDate: -1 }).toArray();
  return docs.map(serializeBlog);
}

export async function getBlogById(id: string): Promise<BlogDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serializeBlog(doc) : null;
}

export async function createBlog(data: BlogFormData): Promise<BlogDocument> {
  const c = await col();
  const now = new Date();
  const doc = {
    ...data,
    faqs: data.faqs || [],
    isPublished: data.isPublished ?? false,
    createdAt: now,
    updatedAt: now,
  };
  const result = await c.insertOne(doc as unknown as BlogDocument);
  return serializeBlog({ ...doc, _id: result.insertedId } as unknown as BlogDocument);
}

export async function updateBlog(
  id: string,
  data: Partial<BlogFormData>
): Promise<BlogDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;

  const result = await c.findOneAndUpdate(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: { ...data, updatedAt: new Date() } },
    { returnDocument: "after" }
  );

  return result ? serializeBlog(result as unknown as BlogDocument) : null;
}

export async function deleteBlog(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.deleteOne({ _id: new ObjectId(id) as unknown as undefined });
  return result.deletedCount === 1;
}

export async function getBlogStats() {
  const c = await col();
  const [total, published, draft] = await Promise.all([
    c.countDocuments(),
    c.countDocuments({ isPublished: true }),
    c.countDocuments({ isPublished: false }),
  ]);

  const categoryStats = await c
    .aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }])
    .toArray();

  return {
    total,
    published,
    draft,
    byCategory: categoryStats.map((s) => ({
      category: s._id as string,
      count: s.count as number,
    })),
  };
}

// ── Paginated queries ──

export async function getPaginatedBlogs(options: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  published?: boolean;
}): Promise<PaginatedResult> {
  const c = await col();
  const page = Math.max(1, options.page ?? 1);
  const limit = Math.min(100, Math.max(1, options.limit ?? 10));
  const filter: Record<string, unknown> = {};

  if (options.search) {
    const escaped = options.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    filter.$or = [
      { title: { $regex: escaped, $options: "i" } },
      { excerpt: { $regex: escaped, $options: "i" } },
      { author: { $regex: escaped, $options: "i" } },
    ];
  }
  if (options.category && options.category !== "All") {
    filter.category = options.category;
  }
  if (options.published !== undefined) {
    filter.isPublished = options.published;
  }

  const [docs, total] = await Promise.all([
    c.find(filter).sort({ sortDate: -1 }).skip((page - 1) * limit).limit(limit).toArray(),
    c.countDocuments(filter),
  ]);

  return {
    blogs: docs.map(serializeBlog),
    total,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}

// ── Public helpers ──

export async function getPublishedBlogs(): Promise<BlogDocument[]> {
  const c = await col();
  const docs = await c
    .find({ isPublished: true })
    .sort({ sortDate: -1 })
    .toArray();
  return docs.map(serializeBlog);
}

export async function getPublishedBlogBySlug(slug: string): Promise<BlogDocument | null> {
  const c = await col();
  const doc = await c.findOne({ slug, isPublished: true });
  return doc ? serializeBlog(doc) : null;
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const c = await col();
  const docs = await c
    .find({ isPublished: true, content: { $ne: "" } })
    .project({ slug: 1 })
    .toArray();
  return docs.map((d) => d.slug as string);
}

export async function getRelatedBlogs(slug: string, category: string, limit = 3): Promise<BlogDocument[]> {
  const c = await col();
  const docs = await c
    .find({ slug: { $ne: slug }, category, isPublished: true })
    .sort({ updatedAt: -1 })
    .limit(limit)
    .toArray();
  return docs.map(serializeBlog);
}

function serializeBlog(doc: BlogDocument & { _id?: unknown }): BlogDocument {
  return {
    ...doc,
    _id: doc._id?.toString() ?? "",
  } as BlogDocument;
}
