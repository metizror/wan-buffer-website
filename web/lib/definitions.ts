import { z } from "zod";

// ── Blog ──

export const BLOG_CATEGORIES = [
  "ERP",
  "Odoo",
  "Manufacturing",
  "E-Commerce",
  "AI & ML",
  "CRM",
  "Web Development",
  "App Development",
  "Digital Transformation",
  "3PL & Logistics",
  "Supply Chain",
  "Inventory",
  "HR & Workforce",
  "Hiring & Outsourcing",
  "IT Services",
  "Business",
  "Industry",
  "Marketing",
  "Accounting",
  "Project Management",
  "UI/UX",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const BLOG_STATUSES = ["draft", "scheduled", "published"] as const;
export type BlogStatus = (typeof BLOG_STATUSES)[number];

export const BLOG_STATUS_LABELS: Record<BlogStatus, string> = {
  draft: "Draft",
  scheduled: "Scheduled",
  published: "Published",
};

export interface PaginatedResult {
  blogs: BlogDocument[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogDocument {
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  sortDate: string;
  author: string;
  authorRole?: string;
  readTime: string;
  imageSrc: string;
  category: string;
  externalUrl: string;
  content: string;
  faqs: BlogFaq[];
  tags: string[];
  keywords?: string[];
  isPublished: boolean;
  status: BlogStatus;
  scheduledAt: Date | null;
  hidden: boolean;
  deletedAt: Date | null;
  // Per-post SEO
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  canonical: string;
  noIndex: boolean;
  focusKeyphrase: string;
  createdAt: Date;
  updatedAt: Date;
}

export const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  date: z.string().min(1, "Date is required"),
  sortDate: z.string().min(1, "Sort date is required"),
  author: z.string().min(1, "Author is required"),
  authorRole: z.string().optional().default(""),
  readTime: z.string().min(1, "Read time is required"),
  // Accepts an absolute URL or a root-relative upload path (e.g. /uploads/...).
  imageSrc: z.string().optional().default(""),
  category: z.string().min(1, "Category is required"),
  externalUrl: z.string().optional().default(""),
  content: z.string().min(1, "Content is required"),
  faqs: z
    .array(z.object({ q: z.string(), a: z.string() }))
    .optional()
    .default([]),
  tags: z.array(z.string()).optional().default([]),
  isPublished: z.boolean().optional().default(false),
  status: z.enum(BLOG_STATUSES).optional().default("draft"),
  // ISO string (from a date/datetime input) or null when not scheduled.
  scheduledAt: z.string().nullable().optional().default(null),
  hidden: z.boolean().optional().default(false),
  // Per-post SEO
  metaTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),
  ogImage: z.string().optional().default(""),
  canonical: z.string().optional().default(""),
  noIndex: z.boolean().optional().default(false),
  focusKeyphrase: z.string().optional().default(""),
});

export type BlogFormData = z.infer<typeof blogFormSchema>;

// ── SEO Pages ──

export const PAGE_CATEGORIES = [
  "blog",
  "work",
  "policy",
  "product",
  "static",
] as const;
export type PageCategory = (typeof PAGE_CATEGORIES)[number];

export const PAGE_CATEGORY_LABELS: Record<PageCategory, string> = {
  blog: "Blog",
  work: "Work",
  policy: "Policy",
  product: "Product",
  static: "Static",
};

export const SEO_SCHEMA_TYPES = [
  "WebPage",
  "AboutPage",
  "ContactPage",
  "CollectionPage",
  "ItemPage",
  "FAQPage",
] as const;
export type SeoSchemaType = (typeof SEO_SCHEMA_TYPES)[number];

export const ADVANCED_ROBOTS = [
  "noarchive",
  "nosnippet",
  "noimageindex",
  "notranslate",
] as const;
export type AdvancedRobot = (typeof ADVANCED_ROBOTS)[number];

export interface SeoPage {
  _id?: string;
  slug: string;
  title: string;
  category: PageCategory;
  isActive: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  noIndex: boolean;
  noFollow: boolean;
  advancedRobots: AdvancedRobot[];
  breadcrumbTitle: string;
  focusKeyphrase: string;
  schemaType: SeoSchemaType;
  schemaJsonld: string;
  includeInSitemap: boolean;
  lastSeoScore: number;
  createdAt: Date;
  updatedAt: Date;
}

export const seoPageUpdateSchema = z.object({
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
  canonical: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImageAlt: z.string().optional(),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().optional(),
  noIndex: z.boolean().optional(),
  noFollow: z.boolean().optional(),
  advancedRobots: z.array(z.enum(ADVANCED_ROBOTS)).optional(),
  breadcrumbTitle: z.string().optional(),
  focusKeyphrase: z.string().optional(),
  schemaType: z.enum(SEO_SCHEMA_TYPES).optional(),
  schemaJsonld: z.string().optional(),
  includeInSitemap: z.boolean().optional(),
  isActive: z.boolean().optional(),
});

export type SeoPageUpdateData = z.infer<typeof seoPageUpdateSchema>;

// ── Auth ──

export const ROLES = ["super-admin", "admin", "editor"] as const;
export type Role = (typeof ROLES)[number];

export const ROLE_LABELS: Record<Role, string> = {
  "super-admin": "Super Admin",
  admin: "Admin",
  editor: "Editor",
};

export interface AdminUser {
  _id?: string;
  displayName: string;
  email: string;
  passwordHash: string;
  role: Role;
  isActive: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export const loginSchema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(1, "Password is required"),
});

export const registerSchema = z.object({
  displayName: z.string().min(3, "Display name must be at least 3 characters"),
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(ROLES).optional().default("admin"),
});

export interface SessionPayload {
  userId: string;
  displayName: string;
  email: string;
  role: Role;
}

// ── Users (admin_users management) ──

/** An admin user with the password hash stripped — safe to send to clients. */
export type SafeAdminUser = Omit<AdminUser, "passwordHash">;

export const userCreateSchema = z.object({
  displayName: z.string().min(1, "Display name is required"),
  email: z.string().email("Valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(ROLES),
  isActive: z.boolean().optional().default(true),
});

export type UserCreateData = z.infer<typeof userCreateSchema>;

export const userUpdateSchema = z.object({
  displayName: z.string().min(1, "Display name is required").optional(),
  email: z.string().email("Valid email is required").optional(),
  // Blank/omitted password means "keep the current one".
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  role: z.enum(ROLES).optional(),
  isActive: z.boolean().optional(),
});

export type UserUpdateData = z.infer<typeof userUpdateSchema>;

export const passwordResetSchema = z.object({
  // Optional: when absent the server generates a strong random password.
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
});

// ── Portfolio (Work + Case Study) ──

export const PORTFOLIO_TYPES = ["work", "case-study"] as const;
export type PortfolioType = (typeof PORTFOLIO_TYPES)[number];

export const PORTFOLIO_TYPE_LABELS: Record<PortfolioType, string> = {
  work: "Work",
  "case-study": "Case Study",
};

/** A single value/label statistic used in metrics and results grids. */
export interface PortfolioMetric {
  value: string;
  label: string;
}

export interface PortfolioCaseStudyChallenge {
  title: string;
  description: string;
}

export interface PortfolioCaseStudySolution {
  title: string;
  intro?: string;
  bullets: string[];
}

export interface PortfolioCaseStudyImage {
  src: string;
  alt: string;
}

export interface PortfolioCaseStudySolutionRow {
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  solutions: PortfolioCaseStudySolution[];
}

export interface PortfolioCaseStudyApproach {
  title: string;
  description: string;
  icon?: string;
}

export interface PortfolioCaseStudyTestimonial {
  company: string;
  role: string;
  quote: string;
}

/**
 * The multi-section case-study blob. Modeled on the static `CaseStudyWithDetail`
 * shape (hero + detail + media) so migrating the existing static case studies
 * into the DB is lossless and the public pages can reconstruct their props.
 */
export interface PortfolioCaseStudy {
  // hero / listing meta
  pageHeading: string;
  clientLabel: string;
  excerpt: string;
  imageSrc: string;
  imageW: number;
  imageH: number;
  industries: string[];
  regions: string[];
  technologies: string[];
  // about + goal
  aboutParagraphs: string[];
  businessType: string;
  location: string;
  goalParagraph: string;
  highlights: string[];
  // challenge
  challenges: PortfolioCaseStudyChallenge[];
  // solution
  solutions: PortfolioCaseStudySolution[];
  solutionsIntro?: string;
  solutionRows?: PortfolioCaseStudySolutionRow[];
  // gallery
  screenshots?: PortfolioCaseStudyImage[];
  // approach
  approach: PortfolioCaseStudyApproach[];
  approachIntro?: string;
  // results + metrics
  results: PortfolioMetric[];
  metrics: PortfolioMetric[];
  // testimonials
  testimonial: PortfolioCaseStudyTestimonial;
  techStackLogos?: PortfolioCaseStudyImage[];
}

export interface PortfolioItem {
  _id?: string;
  slug: string;
  title: string;
  type: PortfolioType;
  /** When true a public route nests under its type (e.g. /case-study/{slug}). */
  nestUnderType: boolean;
  category: string;
  client: string;
  description: string;
  projectUrl: string;
  /** Ordered image URLs; images[0] is the hero/cover. */
  images: string[];
  techStack: string[];
  /** Present for case-study items; null for plain work items. */
  caseStudy: PortfolioCaseStudy | null;
  order: number;
  metaTitle: string;
  metaDescription: string;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const portfolioMetricSchema = z.object({
  value: z.string().default(""),
  label: z.string().default(""),
});

const portfolioCsChallengeSchema = z.object({
  title: z.string().default(""),
  description: z.string().default(""),
});

const portfolioCsSolutionSchema = z.object({
  title: z.string().default(""),
  intro: z.string().optional(),
  bullets: z.array(z.string()).optional().default([]),
});

const portfolioCsImageSchema = z.object({
  src: z.string().default(""),
  alt: z.string().default(""),
});

const portfolioCsSolutionRowSchema = z.object({
  imageSrc: z.string().default(""),
  imageAlt: z.string().default(""),
  imagePosition: z.enum(["left", "right"]).optional().default("left"),
  solutions: z.array(portfolioCsSolutionSchema).optional().default([]),
});

const portfolioCsApproachSchema = z.object({
  title: z.string().default(""),
  description: z.string().default(""),
  icon: z.string().optional(),
});

const portfolioCsTestimonialSchema = z.object({
  company: z.string().default(""),
  role: z.string().default(""),
  quote: z.string().default(""),
});

export const portfolioCaseStudySchema = z.object({
  pageHeading: z.string().optional().default(""),
  clientLabel: z.string().optional().default(""),
  excerpt: z.string().optional().default(""),
  imageSrc: z.string().optional().default(""),
  imageW: z.number().optional().default(800),
  imageH: z.number().optional().default(500),
  industries: z.array(z.string()).optional().default([]),
  regions: z.array(z.string()).optional().default([]),
  technologies: z.array(z.string()).optional().default([]),
  aboutParagraphs: z.array(z.string()).optional().default([]),
  businessType: z.string().optional().default(""),
  location: z.string().optional().default(""),
  goalParagraph: z.string().optional().default(""),
  highlights: z.array(z.string()).optional().default([]),
  challenges: z.array(portfolioCsChallengeSchema).optional().default([]),
  solutions: z.array(portfolioCsSolutionSchema).optional().default([]),
  solutionsIntro: z.string().optional(),
  solutionRows: z.array(portfolioCsSolutionRowSchema).optional(),
  screenshots: z.array(portfolioCsImageSchema).optional(),
  approach: z.array(portfolioCsApproachSchema).optional().default([]),
  approachIntro: z.string().optional(),
  results: z.array(portfolioMetricSchema).optional().default([]),
  metrics: z.array(portfolioMetricSchema).optional().default([]),
  testimonial: portfolioCsTestimonialSchema.optional().default({
    company: "",
    role: "",
    quote: "",
  }),
  techStackLogos: z.array(portfolioCsImageSchema).optional(),
});

// ── Audit Log ──

export const AUDIT_ACTIONS = [
  "create",
  "update",
  "delete",
  "restore",
  "bulk",
] as const;
export type AuditAction = (typeof AUDIT_ACTIONS)[number];

export const AUDIT_ACTION_LABELS: Record<AuditAction, string> = {
  create: "Create",
  update: "Update",
  delete: "Delete",
  restore: "Restore",
  bulk: "Bulk",
};

/** One changed top-level field: its value before and after the change. */
export interface AuditDiffEntry {
  from: unknown;
  to: unknown;
}

export interface AuditLog {
  _id?: string;
  userId: string;
  userEmail: string;
  action: AuditAction;
  /** Logical collection touched, e.g. "blog" | "portfolio" | "user" | "seo". */
  entityType: string;
  /** Document id, or "" for bulk operations spanning many docs. */
  entityId: string;
  entityName: string;
  /** Best-effort field-level diff for updates; null when not captured. */
  diff?: Record<string, AuditDiffEntry> | null;
  timestamp: Date;
}

// ── Portfolio form schema ──

export const portfolioFormSchema = z.object({
  slug: z.string().min(1, "Slug is required"),
  title: z.string().min(1, "Title is required"),
  type: z.enum(PORTFOLIO_TYPES),
  nestUnderType: z.boolean().optional().default(true),
  category: z.string().optional().default(""),
  client: z.string().optional().default(""),
  description: z.string().optional().default(""),
  projectUrl: z.string().optional().default(""),
  images: z.array(z.string()).optional().default([]),
  techStack: z.array(z.string()).optional().default([]),
  caseStudy: portfolioCaseStudySchema.nullable().optional().default(null),
  order: z.number().optional().default(0),
  metaTitle: z.string().optional().default(""),
  metaDescription: z.string().optional().default(""),
});

export type PortfolioFormData = z.infer<typeof portfolioFormSchema>;
