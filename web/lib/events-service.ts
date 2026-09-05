import "server-only";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { EventDocument, EventFormData, EventStatus } from "./definitions";
import {
  EVENT_CATEGORIES,
  EVENT_LOCATIONS,
  WAN_BUFFER_EVENTS,
  getEventBySlug as getStaticEventBySlug,
  type WanBufferEvent,
} from "./events-data";

function col() {
  return getDb().then((db) => db.collection<EventDocument>("events"));
}

export async function ensureIndexes() {
  const c = await col();
  await c.createIndex({ slug: 1 }, { unique: true });
  await c.createIndex({ status: 1 });
  await c.createIndex({ sortDate: -1 });
  await c.createIndex({ deletedAt: 1 });
}

function serialize(doc: EventDocument & { _id?: unknown }): EventDocument {
  return {
    ...doc,
    _id: doc._id?.toString() ?? "",
    pageHeading: doc.pageHeading ?? "",
    excerpt: doc.excerpt ?? "",
    dateLabel: doc.dateLabel ?? "",
    sortDate: doc.sortDate ?? "",
    time: doc.time ?? "",
    location: doc.location ?? "Online",
    categories: doc.categories ?? [],
    imageSrc: doc.imageSrc ?? "",
    imageW: doc.imageW ?? 750,
    imageH: doc.imageH ?? 385,
    priceLabel: doc.priceLabel ?? "Free",
    introParagraphs: doc.introParagraphs ?? [],
    hosts: doc.hosts ?? [],
    highlights: doc.highlights ?? [],
    highlightsHeading: doc.highlightsHeading ?? "",
    sections: doc.sections ?? [],
    learnItems: doc.learnItems ?? [],
    audienceItems: doc.audienceItems ?? [],
    closingParagraphs: doc.closingParagraphs ?? [],
    youtubeUrl: doc.youtubeUrl ?? "",
    hashtags: doc.hashtags ?? "",
    status: doc.status ?? "draft",
    order: doc.order ?? 0,
    deletedAt: doc.deletedAt ?? null,
  } as EventDocument;
}

/** Newest event first; `order` only breaks ties between identical dates. */
const LIST_SORT = { sortDate: -1, order: 1 } as const;

// ── CRUD ──

interface ListOptions {
  status?: EventStatus;
  category?: string;
}

export async function listEvents(options: ListOptions = {}): Promise<EventDocument[]> {
  const c = await col();
  const filter: Record<string, unknown> = { deletedAt: null };
  if (options.status) filter.status = options.status;
  if (options.category && options.category !== "All") {
    filter.categories = options.category;
  }
  const docs = await c.find(filter).sort(LIST_SORT).toArray();
  return docs.map(serialize);
}

export async function getEventById(id: string): Promise<EventDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serialize(doc) : null;
}

/** Distinct category values currently in use (for the admin filter + datalist). */
export async function getEventCategories(): Promise<string[]> {
  try {
    const c = await col();
    const values = await c.distinct("categories", { deletedAt: null });
    const merged = new Set<string>([
      ...(values as string[]).filter(Boolean),
      ...EVENT_CATEGORIES,
    ]);
    return Array.from(merged).sort();
  } catch {
    return [...EVENT_CATEGORIES];
  }
}

/** Distinct location values currently in use (for the admin datalist). */
export async function getEventLocations(): Promise<string[]> {
  try {
    const c = await col();
    const values = await c.distinct("location", { deletedAt: null });
    const merged = new Set<string>([
      ...(values as string[]).filter(Boolean),
      ...EVENT_LOCATIONS,
    ]);
    return Array.from(merged).sort();
  } catch {
    return [...EVENT_LOCATIONS];
  }
}

async function nextOrder(): Promise<number> {
  const c = await col();
  const top = await c.find({ deletedAt: null }).sort({ order: -1 }).limit(1).next();
  return top ? (top.order ?? 0) + 1 : 0;
}

export async function createEvent(data: EventFormData): Promise<EventDocument> {
  const c = await col();
  const now = new Date();
  const doc = {
    ...data,
    pageHeading: data.pageHeading || data.title,
    order: data.order ?? (await nextOrder()),
    deletedAt: null,
    createdAt: now,
    updatedAt: now,
  };
  const result = await c.insertOne(doc as unknown as EventDocument);
  return serialize({ ...doc, _id: result.insertedId } as unknown as EventDocument);
}

export async function updateEvent(
  id: string,
  data: Partial<EventFormData>
): Promise<EventDocument | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;

  const set: Record<string, unknown> = { ...data, updatedAt: new Date() };
  const result = await c.findOneAndUpdate(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: set },
    { returnDocument: "after" }
  );
  return result ? serialize(result as unknown as EventDocument) : null;
}

/** Soft delete: hidden everywhere but recoverable from the trash. */
export async function softDeleteEvent(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined, deletedAt: null },
    { $set: { deletedAt: new Date(), updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

export async function listDeletedEvents(): Promise<EventDocument[]> {
  const c = await col();
  const docs = await c
    .find({ deletedAt: { $ne: null } })
    .sort({ deletedAt: -1 })
    .toArray();
  return docs.map(serialize);
}

export async function restoreEvent(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: { deletedAt: null, updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

export async function hardDeleteEvent(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.deleteOne({
    _id: new ObjectId(id) as unknown as undefined,
  });
  return result.deletedCount === 1;
}

// ── Seed: import the static events into the collection (idempotent) ──

export async function seedEventsFromStatic(): Promise<{
  inserted: number;
  skipped: number;
  total: number;
}> {
  const c = await col();
  await ensureIndexes();

  let inserted = 0;
  let skipped = 0;
  const now = new Date();

  for (let i = 0; i < WAN_BUFFER_EVENTS.length; i++) {
    const base = WAN_BUFFER_EVENTS[i];
    const existing = await c.findOne({ slug: base.slug });
    if (existing) {
      skipped++;
      continue;
    }

    const doc = {
      slug: base.slug,
      title: base.title,
      pageHeading: base.pageHeading,
      excerpt: base.excerpt,
      dateLabel: base.dateLabel,
      sortDate: base.sortDate,
      time: base.time ?? "",
      location: base.location,
      categories: [...base.categories],
      imageSrc: base.imageSrc,
      imageW: base.imageW,
      imageH: base.imageH,
      priceLabel: base.priceLabel,
      introParagraphs: [...base.introParagraphs],
      hosts: base.hosts ?? [],
      highlights: base.highlights ?? [],
      highlightsHeading: base.highlightsHeading ?? "",
      sections: base.sections ?? [],
      learnItems: base.learnItems ?? [],
      audienceItems: base.audienceItems ?? [],
      closingParagraphs: base.closingParagraphs ?? [],
      youtubeUrl: base.youtubeUrl ?? "",
      hashtags: base.hashtags ?? "",
      status: "published" as EventStatus,
      order: i,
      deletedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    await c.insertOne(doc as unknown as EventDocument);
    inserted++;
  }

  return { inserted, skipped, total: WAN_BUFFER_EVENTS.length };
}

// ── Public accessors (DB with static fallback) ──

function dbToEvent(doc: EventDocument): WanBufferEvent {
  return {
    slug: doc.slug,
    title: doc.title,
    pageHeading: doc.pageHeading || doc.title,
    excerpt: doc.excerpt,
    dateLabel: doc.dateLabel,
    sortDate: doc.sortDate,
    time: doc.time || undefined,
    location: doc.location,
    categories: doc.categories,
    imageSrc: doc.imageSrc,
    imageW: doc.imageW,
    imageH: doc.imageH,
    priceLabel: doc.priceLabel,
    introParagraphs: doc.introParagraphs,
    hosts: doc.hosts,
    highlights: doc.highlights,
    highlightsHeading: doc.highlightsHeading || undefined,
    sections: doc.sections,
    learnItems: doc.learnItems,
    audienceItems: doc.audienceItems,
    closingParagraphs: doc.closingParagraphs,
    youtubeUrl: doc.youtubeUrl || undefined,
    hashtags: doc.hashtags || undefined,
  };
}

/**
 * Published events for the public listing. Falls back to the static array while
 * the collection is empty (pre-seed) or when Mongo is unreachable, so `/event`
 * never renders blank.
 */
export async function getPublicEvents(): Promise<WanBufferEvent[]> {
  try {
    const c = await col();
    const docs = await c
      .find({ status: "published", deletedAt: null })
      .sort(LIST_SORT)
      .toArray();
    if (docs.length === 0) return WAN_BUFFER_EVENTS;
    return docs.map((d) => dbToEvent(serialize(d)));
  } catch {
    return WAN_BUFFER_EVENTS;
  }
}

/**
 * Published event by slug. Only falls back to the static data when the slug is
 * absent from the DB entirely, an event unpublished or deleted in the admin
 * panel that also exists in the static seed must stay hidden.
 */
export async function getPublicEventBySlug(
  slug: string
): Promise<WanBufferEvent | undefined> {
  try {
    const c = await col();
    const doc = await c.findOne({ slug, status: "published", deletedAt: null });
    if (doc) return dbToEvent(serialize(doc));
    // Present in the DB but not published (or trashed) → genuinely hidden.
    const anyDoc = await c.findOne({ slug });
    if (anyDoc) return undefined;
  } catch {
    // fall through to static
  }
  return getStaticEventBySlug(slug);
}

/** Published slugs (DB, or static before the seed) for generateStaticParams. */
export async function getAllPublicEventSlugs(): Promise<string[]> {
  try {
    const c = await col();
    const docs = await c
      .find({ status: "published", deletedAt: null })
      .project({ slug: 1 })
      .toArray();
    if (docs.length === 0) return WAN_BUFFER_EVENTS.map((e) => e.slug);
    return docs.map((d) => d.slug as string);
  } catch {
    return WAN_BUFFER_EVENTS.map((e) => e.slug);
  }
}
