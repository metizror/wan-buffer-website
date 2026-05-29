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
  isPublished: boolean;
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
  imageSrc: z.string().url("Must be a valid URL").or(z.literal("")),
  category: z.string().min(1, "Category is required"),
  externalUrl: z.string().optional().default(""),
  content: z.string().min(1, "Content is required"),
  faqs: z
    .array(z.object({ q: z.string(), a: z.string() }))
    .optional()
    .default([]),
  isPublished: z.boolean().optional().default(false),
});

export type BlogFormData = z.infer<typeof blogFormSchema>;

// ── Auth ──

export interface AdminUser {
  _id?: string;
  displayName: string;
  email: string;
  passwordHash: string;
  role: "admin";
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
});

export interface SessionPayload {
  userId: string;
  displayName: string;
}
