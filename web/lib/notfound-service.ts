import "server-only";
import { getDb } from "./mongodb";

export interface NotFoundLog {
  _id?: string;
  url: string;
  referrer: string | null;
  userAgent: string | null;
  ip: string | null;
  createdAt: Date;
}

function col() {
  return getDb().then((db) => db.collection<NotFoundLog>("notfound_logs"));
}

export async function ensureNotFoundIndexes() {
  const c = await col();
  await c.createIndex({ createdAt: -1 });
}

export async function logNotFound(data: {
  url: string;
  referrer?: string | null;
  userAgent?: string | null;
  ip?: string | null;
}) {
  const c = await col();
  await c.insertOne({
    url: data.url,
    referrer: data.referrer ?? null,
    userAgent: data.userAgent ?? null,
    ip: data.ip ?? null,
    createdAt: new Date(),
  });
}

export async function getPaginatedNotFoundLogs(options: {
  page?: number;
  limit?: number;
  search?: string;
}) {
  const c = await col();
  const page = Math.max(1, options.page ?? 1);
  const limit = Math.min(100, Math.max(1, options.limit ?? 20));
  const filter: Record<string, unknown> = {};

  if (options.search) {
    const escaped = options.search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    filter.url = { $regex: escaped, $options: "i" };
  }

  const [docs, total] = await Promise.all([
    c.find(filter).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).toArray(),
    c.countDocuments(filter),
  ]);

  return {
    logs: docs.map((d) => ({ ...d, _id: d._id?.toString() ?? "" })),
    total,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}

export async function getNotFoundStats() {
  const c = await col();
  const total = await c.countDocuments();

  const topUrls = await c
    .aggregate([
      { $group: { _id: "$url", count: { $sum: 1 }, lastHit: { $max: "$createdAt" } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
    ])
    .toArray();

  return {
    total,
    topUrls: topUrls.map((u) => ({
      url: u._id as string,
      count: u.count as number,
      lastHit: u.lastHit as Date,
    })),
  };
}

export async function clearNotFoundLogs() {
  const c = await col();
  await c.deleteMany({});
}
