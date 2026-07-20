import "server-only";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type {
  BlogDocument,
  BlogFormData,
  BlogStatus,
  PaginatedResult,
} from "./definitions";

function col() {
  return getDb().then((db) => db.collection<BlogDocument>("blogs"));
}

export async function ensureIndexes() {
  const c = await col();
  await c.createIndex({ slug: 1 }, { unique: true });
  await c.createIndex({ sortDate: -1 });
  await c.createIndex({ category: 1 });
  await c.createIndex({ status: 1 });
  await c.createIndex({ deletedAt: 1 });
}

/**
 * Conditions for a post that should be publicly visible right now. Covers both
 * new docs (`status`) and legacy docs (only `isPublished`, no `status`). A
 * `scheduled` post becomes visible once `scheduledAt <= now`. Hidden and
 * soft-deleted posts are excluded. `{ field: null }` also matches missing
 * fields in MongoDB, so legacy docs (no deletedAt/hidden) still pass.
 */
function publiclyVisibleConditions(now: Date): Record<string, unknown> {
  return {
    deletedAt: null,
    hidden: { $ne: true },
    $or: [
      { status: "published" },
      { status: "scheduled", scheduledAt: { $lte: now } },
      { status: { $exists: false }, isPublished: true },
    ],
  };
}

/** Conditions for a post that is NOT publicly published (drafts + future scheduled). */
function notPublishedConditions(now: Date): Record<string, unknown> {
  return {
    deletedAt: null,
    $nor: [
      { status: "published" },
      { status: "scheduled", scheduledAt: { $lte: now } },
      { status: { $exists: false }, isPublished: true },
    ],
  };
}

function searchOr(search: string): Record<string, unknown> {
  const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return {
    $or: [
      { title: { $regex: escaped, $options: "i" } },
      { excerpt: { $regex: escaped, $options: "i" } },
      { author: { $regex: escaped, $options: "i" } },
    ],
  };
}

interface QueryOptions {
  search?: string;
  category?: string;
  status?: BlogStatus;
  published?: boolean;
}

/** Build a `$and`-combined filter that always excludes soft-deleted docs. */
function buildFilter(options: QueryOptions): Record<string, unknown> {
  const now = new Date();
  const and: Record<string, unknown>[] = [{ deletedAt: null }];

  if (options.search) and.push(searchOr(options.search));
  if (options.category && options.category !== "All") {
    and.push({ category: options.category });
  }
  if (options.status) and.push({ status: options.status });
  if (options.published === true) and.push(publiclyVisibleConditions(now));
  else if (options.published === false) and.push(notPublishedConditions(now));

  return and.length === 1 ? and[0] : { $and: and };
}

export async function getAllBlogs(options?: QueryOptions): Promise<BlogDocument[]> {
  const c = await col();
  const filter = buildFilter(options ?? {});
  const docs = await c.find(filter).sort({ sortDate: -1 }).toArray();
  return docs.map(serializeBlog);
}

export async function getBlogById(id: string): Promise<BlogDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serializeBlog(doc) : null;
}

/** Prepare a form payload into the persisted document shape. */
function toDocFields(data: Partial<BlogFormData>): Record<string, unknown> {
  const out: Record<string, unknown> = { ...data };

  if (data.faqs !== undefined) out.faqs = data.faqs || [];
  if (data.tags !== undefined) out.tags = data.tags || [];

  if (data.scheduledAt !== undefined) {
    out.scheduledAt = data.scheduledAt ? new Date(data.scheduledAt) : null;
  }

  // Keep the legacy isPublished flag in sync with status for backward-compat.
  if (data.status !== undefined) {
    out.isPublished = data.status === "published";
  }

  return out;
}

export async function createBlog(data: BlogFormData): Promise<BlogDocument> {
  const c = await col();
  const now = new Date();
  const doc = {
    ...toDocFields(data),
    faqs: data.faqs || [],
    tags: data.tags || [],
    status: data.status ?? "draft",
    isPublished: (data.status ?? "draft") === "published",
    hidden: data.hidden ?? false,
    deletedAt: null,
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
    { $set: { ...toDocFields(data), updatedAt: new Date() } },
    { returnDocument: "after" }
  );

  return result ? serializeBlog(result as unknown as BlogDocument) : null;
}

/** Soft delete — sets deletedAt so the post is hidden everywhere but recoverable. */
export async function deleteBlog(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined, deletedAt: null },
    { $set: { deletedAt: new Date(), updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

/** Soft-deleted posts (in the trash), newest-deleted first. */
export async function listDeletedBlogs(): Promise<BlogDocument[]> {
  const c = await col();
  const docs = await c
    .find({ deletedAt: { $ne: null } })
    .sort({ deletedAt: -1 })
    .toArray();
  return docs.map(serializeBlog);
}

/** Restore a soft-deleted post — clears deletedAt so it becomes visible again. */
export async function restoreBlog(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: { deletedAt: null, updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

/** Hard delete — permanent removal. Reserved for a future trash module. */
export async function hardDeleteBlog(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.deleteOne({ _id: new ObjectId(id) as unknown as undefined });
  return result.deletedCount === 1;
}

// ── Bulk admin operations ──

function toObjectIds(ids: string[]): ObjectId[] {
  return ids.filter((id) => ObjectId.isValid(id)).map((id) => new ObjectId(id));
}

export async function bulkSetStatus(
  ids: string[],
  status: BlogStatus
): Promise<number> {
  const c = await col();
  const objectIds = toObjectIds(ids);
  if (objectIds.length === 0) return 0;
  const result = await c.updateMany(
    { _id: { $in: objectIds } as unknown as undefined, deletedAt: null },
    { $set: { status, isPublished: status === "published", updatedAt: new Date() } }
  );
  return result.modifiedCount;
}

export async function bulkSoftDelete(ids: string[]): Promise<number> {
  const c = await col();
  const objectIds = toObjectIds(ids);
  if (objectIds.length === 0) return 0;
  const result = await c.updateMany(
    { _id: { $in: objectIds } as unknown as undefined, deletedAt: null },
    { $set: { deletedAt: new Date(), updatedAt: new Date() } }
  );
  return result.modifiedCount;
}

export async function getBlogStats() {
  const c = await col();
  const now = new Date();
  const [total, published, draft] = await Promise.all([
    c.countDocuments({ deletedAt: null }),
    c.countDocuments(publiclyVisibleConditions(now)),
    c.countDocuments(notPublishedConditions(now)),
  ]);

  const categoryStats = await c
    .aggregate([
      { $match: { deletedAt: null } },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ])
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
  status?: BlogStatus;
  published?: boolean;
}): Promise<PaginatedResult> {
  const c = await col();
  const page = Math.max(1, options.page ?? 1);
  const limit = Math.min(100, Math.max(1, options.limit ?? 10));
  const filter = buildFilter(options);

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
    .find(publiclyVisibleConditions(new Date()))
    .sort({ sortDate: -1 })
    .toArray();
  return docs.map(serializeBlog);
}

export async function getPublishedBlogBySlug(slug: string): Promise<BlogDocument | null> {
  const c = await col();
  const doc = await c.findOne({ slug, ...publiclyVisibleConditions(new Date()) });
  return doc ? serializeBlog(doc) : null;
}

/** Load a post by slug bypassing the published check (admin preview only). */
export async function getBlogBySlugForPreview(slug: string): Promise<BlogDocument | null> {
  const c = await col();
  const doc = await c.findOne({ slug, deletedAt: null });
  return doc ? serializeBlog(doc) : null;
}

export async function getAllPublishedSlugs(): Promise<string[]> {
  const c = await col();
  const docs = await c
    .find({ ...publiclyVisibleConditions(new Date()), content: { $ne: "" } })
    .project({ slug: 1 })
    .toArray();
  return docs.map((d) => d.slug as string);
}

export async function getRelatedBlogs(slug: string, category: string, limit = 3): Promise<BlogDocument[]> {
  const c = await col();
  const docs = await c
    .find({
      slug: { $ne: slug },
      category,
      ...publiclyVisibleConditions(new Date()),
    })
    .sort({ updatedAt: -1 })
    .limit(limit)
    .toArray();
  return docs.map(serializeBlog);
}

function serializeBlog(doc: BlogDocument & { _id?: unknown }): BlogDocument {
  // Normalize legacy docs (missing status/tags/flags) to the current shape.
  const status: BlogStatus =
    doc.status ?? (doc.isPublished ? "published" : "draft");
  return {
    ...doc,
    _id: doc._id?.toString() ?? "",
    status,
    tags: doc.tags ?? [],
    scheduledAt: doc.scheduledAt ?? null,
    hidden: doc.hidden ?? false,
    deletedAt: doc.deletedAt ?? null,
    metaTitle: doc.metaTitle ?? "",
    metaDescription: doc.metaDescription ?? "",
    ogImage: doc.ogImage ?? "",
    canonical: doc.canonical ?? "",
    noIndex: doc.noIndex ?? false,
    focusKeyphrase: doc.focusKeyphrase ?? "",
  } as BlogDocument;
}
