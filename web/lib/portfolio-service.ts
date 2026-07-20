import "server-only";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { PortfolioFormData, PortfolioItem, PortfolioType } from "./definitions";
import {
  CASE_STUDY_DETAILS,
} from "./case-study-details";
import { CASE_STUDY_DETAIL_MEDIA } from "./case-study-detail-media";
import {
  WAN_BUFFER_CASE_STUDIES,
  getCaseStudyBySlug as getStaticCaseStudyBySlug,
  type CaseStudy,
  type CaseStudyIndustry,
  type CaseStudyRegion,
  type CaseStudyTechnology,
  type CaseStudyWithDetail,
} from "./case-study-data";

function col() {
  return getDb().then((db) => db.collection<PortfolioItem>("portfolio"));
}

export async function ensureIndexes() {
  const c = await col();
  await c.createIndex({ slug: 1 }, { unique: true });
  await c.createIndex({ type: 1 });
  await c.createIndex({ order: 1 });
  await c.createIndex({ deletedAt: 1 });
}

function serialize(doc: PortfolioItem & { _id?: unknown }): PortfolioItem {
  return {
    ...doc,
    _id: doc._id?.toString() ?? "",
    nestUnderType: doc.nestUnderType ?? true,
    category: doc.category ?? "",
    client: doc.client ?? "",
    description: doc.description ?? "",
    projectUrl: doc.projectUrl ?? "",
    images: doc.images ?? [],
    techStack: doc.techStack ?? [],
    caseStudy: doc.caseStudy ?? null,
    order: doc.order ?? 0,
    metaTitle: doc.metaTitle ?? "",
    metaDescription: doc.metaDescription ?? "",
    deletedAt: doc.deletedAt ?? null,
  } as PortfolioItem;
}

// ── CRUD ──

interface ListOptions {
  type?: PortfolioType;
  category?: string;
}

export async function listPortfolio(options: ListOptions = {}): Promise<PortfolioItem[]> {
  const c = await col();
  const filter: Record<string, unknown> = { deletedAt: null };
  if (options.type) filter.type = options.type;
  if (options.category && options.category !== "All") filter.category = options.category;
  const docs = await c.find(filter).sort({ order: 1, createdAt: 1 }).toArray();
  return docs.map(serialize);
}

export async function getPortfolioById(id: string): Promise<PortfolioItem | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;
  const doc = await c.findOne({ _id: new ObjectId(id) as unknown as undefined });
  return doc ? serialize(doc) : null;
}

export async function getPortfolioBySlug(slug: string): Promise<PortfolioItem | null> {
  const c = await col();
  const doc = await c.findOne({ slug, deletedAt: null });
  return doc ? serialize(doc) : null;
}

/** Distinct category values currently in use (for the form's datalist combobox). */
export async function getPortfolioCategories(): Promise<string[]> {
  const c = await col();
  const values = await c.distinct("category", { deletedAt: null });
  return (values as string[]).filter(Boolean).sort();
}

async function nextOrder(type: PortfolioType): Promise<number> {
  const c = await col();
  const top = await c
    .find({ type, deletedAt: null })
    .sort({ order: -1 })
    .limit(1)
    .next();
  return top ? (top.order ?? 0) + 1 : 0;
}

export async function createPortfolioItem(data: PortfolioFormData): Promise<PortfolioItem> {
  const c = await col();
  const now = new Date();
  const doc = {
    slug: data.slug,
    title: data.title,
    type: data.type,
    nestUnderType: data.nestUnderType ?? true,
    category: data.category ?? "",
    client: data.client ?? "",
    description: data.description ?? "",
    projectUrl: data.projectUrl ?? "",
    images: data.images ?? [],
    techStack: data.techStack ?? [],
    caseStudy: data.type === "case-study" ? data.caseStudy ?? null : null,
    order: data.order ?? (await nextOrder(data.type)),
    metaTitle: data.metaTitle ?? "",
    metaDescription: data.metaDescription ?? "",
    deletedAt: null,
    createdAt: now,
    updatedAt: now,
  };
  const result = await c.insertOne(doc as unknown as PortfolioItem);
  return serialize({ ...doc, _id: result.insertedId } as unknown as PortfolioItem);
}

export async function updatePortfolioItem(
  id: string,
  data: Partial<PortfolioFormData>
): Promise<PortfolioItem | null> {
  const c = await col();
  if (!ObjectId.isValid(id)) return null;

  const set: Record<string, unknown> = { ...data, updatedAt: new Date() };
  // A work item never carries a case-study blob.
  if (data.type === "work") set.caseStudy = null;

  const result = await c.findOneAndUpdate(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: set },
    { returnDocument: "after" }
  );
  return result ? serialize(result as unknown as PortfolioItem) : null;
}

/** Soft delete — sets deletedAt so the item is hidden everywhere but recoverable. */
export async function softDeletePortfolioItem(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined, deletedAt: null },
    { $set: { deletedAt: new Date(), updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

/** Soft-deleted items (in the trash), newest-deleted first. */
export async function listDeletedPortfolio(): Promise<PortfolioItem[]> {
  const c = await col();
  const docs = await c
    .find({ deletedAt: { $ne: null } })
    .sort({ deletedAt: -1 })
    .toArray();
  return docs.map(serialize);
}

/** Restore a soft-deleted item — clears deletedAt so it becomes visible again. */
export async function restorePortfolioItem(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.updateOne(
    { _id: new ObjectId(id) as unknown as undefined },
    { $set: { deletedAt: null, updatedAt: new Date() } }
  );
  return result.matchedCount === 1;
}

/** Hard delete — permanent removal from the collection. */
export async function hardDeletePortfolioItem(id: string): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const result = await c.deleteOne({
    _id: new ObjectId(id) as unknown as undefined,
  });
  return result.deletedCount === 1;
}

/** Move an item up/down within its type by swapping `order` with its neighbor. */
export async function reorderPortfolio(
  id: string,
  direction: "up" | "down"
): Promise<boolean> {
  const c = await col();
  if (!ObjectId.isValid(id)) return false;
  const current = await c.findOne({
    _id: new ObjectId(id) as unknown as undefined,
    deletedAt: null,
  });
  if (!current) return false;

  const neighbor = await c
    .find({
      deletedAt: null,
      type: current.type,
      _id: { $ne: current._id } as unknown as undefined,
      order:
        direction === "up"
          ? { $lte: current.order ?? 0 }
          : { $gte: current.order ?? 0 },
    })
    .sort({ order: direction === "up" ? -1 : 1 })
    .limit(1)
    .next();

  if (!neighbor) return false;

  const now = new Date();
  await c.updateOne(
    { _id: current._id },
    { $set: { order: neighbor.order ?? 0, updatedAt: now } }
  );
  await c.updateOne(
    { _id: neighbor._id },
    { $set: { order: current.order ?? 0, updatedAt: now } }
  );
  return true;
}

// ── Seed: import the static case studies into the collection (idempotent) ──

export async function seedPortfolioFromStatic(): Promise<{
  inserted: number;
  skipped: number;
  total: number;
}> {
  const c = await col();
  await ensureIndexes();

  let inserted = 0;
  let skipped = 0;
  const now = new Date();

  for (let i = 0; i < WAN_BUFFER_CASE_STUDIES.length; i++) {
    const base = WAN_BUFFER_CASE_STUDIES[i];
    const existing = await c.findOne({ slug: base.slug });
    if (existing) {
      skipped++;
      continue;
    }

    const detail = CASE_STUDY_DETAILS[base.slug];
    const media = CASE_STUDY_DETAIL_MEDIA[base.slug];

    const caseStudy: PortfolioItem["caseStudy"] = {
      pageHeading: base.pageHeading,
      clientLabel: base.clientLabel,
      excerpt: base.excerpt,
      imageSrc: base.imageSrc,
      imageW: base.imageW,
      imageH: base.imageH,
      industries: [...base.industries],
      regions: [...base.regions],
      technologies: [...base.technologies],
      aboutParagraphs: detail?.aboutParagraphs ?? [],
      businessType: detail?.businessType ?? "",
      location: detail?.location ?? "",
      goalParagraph: detail?.goalParagraph ?? "",
      highlights: detail?.highlights ?? [],
      challenges: detail?.challenges ?? [],
      solutions: detail?.solutions ?? [],
      solutionsIntro: media?.solutionsIntro,
      solutionRows: media?.solutionRows,
      screenshots: media?.screenshots,
      approach: detail?.approach ?? [],
      approachIntro: media?.approachIntro,
      results: detail?.results ?? [],
      metrics: base.metrics,
      testimonial: detail?.testimonial ?? { company: "", role: "", quote: "" },
      techStackLogos: media?.techStackLogos,
    };

    const doc = {
      slug: base.slug,
      title: base.title,
      type: "case-study" as PortfolioType,
      nestUnderType: true,
      category: detail?.businessType ?? "Case Study",
      client: base.clientLabel,
      description: base.excerpt,
      projectUrl: "",
      images: [base.imageSrc],
      techStack: detail?.techStack ?? [],
      caseStudy,
      order: i,
      metaTitle: base.title,
      metaDescription: base.excerpt,
      deletedAt: null,
      createdAt: now,
      updatedAt: now,
    };

    await c.insertOne(doc as unknown as PortfolioItem);
    inserted++;
  }

  return { inserted, skipped, total: WAN_BUFFER_CASE_STUDIES.length };
}

// ── Public accessors (DB with static fallback) ──

function dbToCaseStudy(item: PortfolioItem): CaseStudy {
  const cs = item.caseStudy;
  return {
    slug: item.slug,
    title: item.title,
    pageHeading: cs?.pageHeading || item.title,
    clientLabel: cs?.clientLabel || item.client,
    excerpt: cs?.excerpt || item.description,
    imageSrc: item.images[0] || cs?.imageSrc || "",
    imageW: cs?.imageW ?? 800,
    imageH: cs?.imageH ?? 500,
    metrics: cs?.metrics ?? [],
    industries: (cs?.industries ?? []) as CaseStudyIndustry[],
    regions: (cs?.regions ?? []) as CaseStudyRegion[],
    technologies: (cs?.technologies ?? []) as CaseStudyTechnology[],
  };
}

function dbToCaseStudyWithDetail(item: PortfolioItem): CaseStudyWithDetail {
  const cs = item.caseStudy;
  return {
    ...dbToCaseStudy(item),
    aboutParagraphs: cs?.aboutParagraphs ?? [],
    businessType: cs?.businessType ?? "",
    location: cs?.location ?? "",
    goalParagraph: cs?.goalParagraph ?? "",
    highlights: cs?.highlights ?? [],
    challenges: cs?.challenges ?? [],
    solutions: cs?.solutions ?? [],
    solutionsIntro: cs?.solutionsIntro,
    solutionRows: cs?.solutionRows as CaseStudyWithDetail["solutionRows"],
    screenshots: cs?.screenshots,
    approach: (cs?.approach ?? []) as CaseStudyWithDetail["approach"],
    approachIntro: cs?.approachIntro,
    results: cs?.results ?? [],
    testimonial: cs?.testimonial ?? { company: "", role: "", quote: "" },
    techStack: item.techStack,
    techStackLogos: cs?.techStackLogos,
  };
}

/**
 * Public list of case studies. Reads the `portfolio` collection (case-study
 * items). Falls back to the static array when the collection is empty or an
 * error occurs, so the live `/case-study` page never breaks.
 */
export async function getPublicCaseStudies(): Promise<CaseStudy[]> {
  try {
    const c = await col();
    const docs = await c
      .find({ type: "case-study", deletedAt: null })
      .sort({ order: 1, createdAt: 1 })
      .toArray();
    if (docs.length === 0) return WAN_BUFFER_CASE_STUDIES;
    return docs.map((d) => dbToCaseStudy(serialize(d)));
  } catch {
    return WAN_BUFFER_CASE_STUDIES;
  }
}

/**
 * Public case-study detail by slug. Falls back to the static data when the slug
 * is missing from the DB or an error occurs.
 */
export async function getPublicCaseStudyBySlug(
  slug: string
): Promise<CaseStudyWithDetail | undefined> {
  try {
    const c = await col();
    const doc = await c.findOne({ slug, type: "case-study", deletedAt: null });
    if (doc) return dbToCaseStudyWithDetail(serialize(doc));
  } catch {
    // fall through to static
  }
  return getStaticCaseStudyBySlug(slug);
}

/**
 * Public work item by slug (DB only — work items are new, no static source).
 * Only returns items flagged `nestUnderType` so they resolve at /work/{slug}.
 */
export async function getPublicWorkBySlug(
  slug: string
): Promise<PortfolioItem | null> {
  try {
    const c = await col();
    const doc = await c.findOne({
      slug,
      type: "work",
      nestUnderType: true,
      deletedAt: null,
    });
    return doc ? serialize(doc) : null;
  } catch {
    return null;
  }
}

/** Slugs of nested work items for generateStaticParams. */
export async function getAllPublicWorkSlugs(): Promise<string[]> {
  try {
    const c = await col();
    const docs = await c
      .find({ type: "work", nestUnderType: true, deletedAt: null })
      .project({ slug: 1 })
      .toArray();
    return docs.map((d) => d.slug as string);
  } catch {
    return [];
  }
}

/** All public case-study slugs (DB ∪ static) for generateStaticParams. */
export async function getAllPublicCaseStudySlugs(): Promise<string[]> {
  const staticSlugs = WAN_BUFFER_CASE_STUDIES.map((c) => c.slug);
  try {
    const c = await col();
    const docs = await c
      .find({ type: "case-study", deletedAt: null })
      .project({ slug: 1 })
      .toArray();
    const dbSlugs = docs.map((d) => d.slug as string);
    return Array.from(new Set([...dbSlugs, ...staticSlugs]));
  } catch {
    return staticSlugs;
  }
}
