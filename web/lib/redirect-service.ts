import "server-only";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";

export interface RedirectDocument {
  _id?: string;
  oldUrl: string;
  newUrl: string;
  isPermanent: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

function col() {
  return getDb().then((db) => db.collection<RedirectDocument>("redirects"));
}

export async function ensureRedirectIndexes() {
  const c = await col();
  await c.createIndex({ oldUrl: 1 }, { unique: true });
  await c.createIndex({ isActive: 1 });
}

export async function getAllRedirects(options?: {
  search?: string;
}): Promise<RedirectDocument[]> {
  const c = await col();
  const filter: Record<string, unknown> = {};

  if (options?.search) {
    const escaped = options.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    filter.$or = [
      { oldUrl: { $regex: escaped, $options: "i" } },
      { newUrl: { $regex: escaped, $options: "i" } },
    ];
  }

  const docs = await c.find(filter).sort({ createdAt: -1 }).toArray();
  return docs.map(serialize);
}

export async function getRedirectById(id: string): Promise<RedirectDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serialize(doc) : null;
}

export async function createRedirect(data: {
  oldUrl: string;
  newUrl: string;
  isPermanent?: boolean;
  isActive?: boolean;
}): Promise<RedirectDocument> {
  const c = await col();
  const now = new Date();
  const doc = {
    oldUrl: normalizeUrl(data.oldUrl),
    newUrl: normalizeNewUrl(data.newUrl),
    isPermanent: data.isPermanent ?? true,
    isActive: data.isActive ?? true,
    createdAt: now,
    updatedAt: now,
  };
  const result = await c.insertOne(doc as unknown as RedirectDocument);
  return serialize({ ...doc, _id: result.insertedId } as unknown as RedirectDocument);
}

export async function updateRedirect(
  id: string,
  data: Partial<{ oldUrl: string; newUrl: string; isPermanent: boolean; isActive: boolean }>
): Promise<RedirectDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;

  const update: Record<string, unknown> = { ...data, updatedAt: new Date() };
  if (update.oldUrl) update.oldUrl = normalizeUrl(update.oldUrl as string);
  if (update.newUrl) update.newUrl = normalizeNewUrl(update.newUrl as string);

  const result = await c.findOneAndUpdate(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: update },
    { returnDocument: "after" }
  );

  return result ? serialize(result as unknown as RedirectDocument) : null;
}

export async function deleteRedirect(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.deleteOne({ _id: new ObjectId(id) as unknown as undefined });
  return result.deletedCount === 1;
}

export async function findRedirectByUrl(url: string): Promise<RedirectDocument | null> {
  const c = await col();
  const normalized = normalizeUrl(url);
  const doc = await c.findOne({ oldUrl: normalized, isActive: true });
  return doc ? serialize(doc) : null;
}

export async function getActiveRedirectsMap(): Promise<
  Map<string, { newUrl: string; isPermanent: boolean }>
> {
  const c = await col();
  const docs = await c.find({ isActive: true }).toArray();
  const map = new Map<string, { newUrl: string; isPermanent: boolean }>();
  for (const doc of docs) {
    map.set(doc.oldUrl, { newUrl: doc.newUrl, isPermanent: doc.isPermanent });
  }
  return map;
}

function normalizeUrl(url: string): string {
  let u = url.trim();
  // Strip origin if user pasted a full URL (e.g. http://localhost:3000/odoo/test → /odoo/test)
  try {
    const parsed = new URL(u, "http://placeholder");
    if (u.startsWith("http://") || u.startsWith("https://")) {
      u = parsed.pathname;
    }
  } catch {
    // not a valid URL, treat as path
  }
  if (!u.startsWith("/")) u = "/" + u;
  if (u.length > 1 && u.endsWith("/")) u = u.slice(0, -1);
  return u;
}

function normalizeNewUrl(url: string): string {
  let u = url.trim();
  // If it's a full URL to the same site, extract the path
  try {
    if (u.startsWith("http://") || u.startsWith("https://")) {
      const parsed = new URL(u);
      // Check if it's a localhost or same-site URL — extract path only
      if (
        parsed.hostname === "localhost" ||
        parsed.hostname === "127.0.0.1" ||
        parsed.hostname.includes("wanbuffer")
      ) {
        u = parsed.pathname;
      }
    }
  } catch {
    // not a valid URL, treat as-is
  }
  if (!u.startsWith("http") && !u.startsWith("/")) u = "/" + u;
  return u;
}

function serialize(doc: RedirectDocument & { _id?: unknown }): RedirectDocument {
  return { ...doc, _id: doc._id?.toString() ?? "" } as RedirectDocument;
}
