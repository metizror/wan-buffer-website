import "server-only";
import { getDb } from "./mongodb";
import type { Collection } from "mongodb";
import {
  AUDIT_ACTIONS,
  type AuditAction,
  type AuditDiffEntry,
  type AuditLog,
} from "./definitions";

function col(): Promise<Collection<AuditLog>> {
  return getDb().then((db) => db.collection<AuditLog>("audit_logs"));
}

let indexesEnsured = false;
async function ensureIndexes(c: Collection<AuditLog>): Promise<void> {
  if (indexesEnsured) return;
  try {
    await c.createIndex({ timestamp: -1 });
    await c.createIndex({ entityType: 1 });
    await c.createIndex({ action: 1 });
    indexesEnsured = true;
  } catch {
    // Non-fatal: logging must never break the primary operation.
  }
}

export interface LogAuditInput {
  userId: string;
  userEmail: string;
  action: AuditAction;
  entityType: string;
  entityId: string;
  entityName: string;
  diff?: Record<string, AuditDiffEntry> | null;
}

/**
 * Append an audit row. Resilient by design — a logging failure NEVER throws
 * into the caller, so wrapping every write route is safe.
 */
export async function logAudit(input: LogAuditInput): Promise<void> {
  try {
    const c = await col();
    await ensureIndexes(c);
    await c.insertOne({
      userId: input.userId,
      userEmail: input.userEmail,
      action: input.action,
      entityType: input.entityType,
      entityId: input.entityId ?? "",
      entityName: input.entityName ?? "",
      diff: input.diff ?? null,
      timestamp: new Date(),
    } as unknown as AuditLog);
  } catch (err) {
    console.error("logAudit failed:", err);
  }
}

/**
 * Shallow field-level diff of two documents. Returns only changed top-level
 * fields as `{ field: { from, to } }`. Ignores bookkeeping fields.
 */
export function shallowDiff(
  before: Record<string, unknown> | null | undefined,
  after: Record<string, unknown> | null | undefined
): Record<string, AuditDiffEntry> {
  const IGNORED = new Set(["updatedAt", "_id", "createdAt"]);
  const b = before ?? {};
  const a = after ?? {};
  const diff: Record<string, AuditDiffEntry> = {};
  const keys = new Set([...Object.keys(b), ...Object.keys(a)]);
  for (const key of keys) {
    if (IGNORED.has(key)) continue;
    const from = b[key];
    const to = a[key];
    if (JSON.stringify(from) !== JSON.stringify(to)) {
      diff[key] = { from, to };
    }
  }
  return diff;
}

function serialize(doc: AuditLog & { _id?: unknown }): AuditLog {
  return { ...doc, _id: doc._id?.toString() } as AuditLog;
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export interface ListAuditOptions {
  entityType?: string;
  action?: AuditAction;
  search?: string;
  page?: number;
  limit?: number;
}

export interface AuditLogPage {
  logs: AuditLog[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** Paginated audit history, newest first. */
export async function listAuditLogs(
  options: ListAuditOptions = {}
): Promise<AuditLogPage> {
  const c = await col();
  const page = Math.max(1, options.page ?? 1);
  const limit = Math.min(100, Math.max(1, options.limit ?? 20));

  const filter: Record<string, unknown> = {};
  if (options.entityType) filter.entityType = options.entityType;
  if (options.action && AUDIT_ACTIONS.includes(options.action)) {
    filter.action = options.action;
  }
  if (options.search?.trim()) {
    const escaped = escapeRegex(options.search.trim());
    filter.$or = [
      { userEmail: { $regex: escaped, $options: "i" } },
      { entityName: { $regex: escaped, $options: "i" } },
      { entityType: { $regex: escaped, $options: "i" } },
    ];
  }

  const [docs, total] = await Promise.all([
    c
      .find(filter)
      .sort({ timestamp: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray(),
    c.countDocuments(filter),
  ]);

  return {
    logs: docs.map(serialize),
    total,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}
