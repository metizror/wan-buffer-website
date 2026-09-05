import type { MetadataRoute } from "next";
import { getSitemapEntries, syncSeoPages } from "@/lib/seo-service";

export const dynamic = "force-dynamic";

/** Canonical origin for Search Console. Staging env must not leak into the submitted map. */
const SITE_URL = "https://wanbuffer.com";

const HUBS = new Set([
  "/blogs",
  "/case-studies",
  "/case-study",
  "/services",
  "/odoo",
  "/ai-services",
  "/ecommerce",
  "/industries",
  "/engagement",
  "/event",
  "/contact-us",
]);

const POLICIES = new Set([
  "/privacy-policy",
  "/terms-of-use",
  "/cookie-policy",
  "/gdpr",
  "/cancellation-and-refund-policy",
]);

function toAbsolute(slug: string): string {
  return slug === "/" ? SITE_URL : `${SITE_URL}${slug}`;
}

function priorityFor(slug: string): number {
  if (slug === "/") return 1;
  if (HUBS.has(slug)) return 0.9;
  if (POLICIES.has(slug)) return 0.3;
  if (slug.startsWith("/blogs/")) return 0.65;
  if (slug.startsWith("/case-study/")) return 0.7;
  if (slug.startsWith("/event/")) return 0.6;
  if (slug.startsWith("/odoo/apps/")) return 0.5;
  return 0.8;
}

function changeFrequencyFor(
  slug: string
): NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]> {
  if (slug === "/" || slug === "/blogs" || slug === "/event") return "weekly";
  if (POLICIES.has(slug)) return "yearly";
  if (slug.startsWith("/blogs/")) return "monthly";
  return "weekly";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    await syncSeoPages();
  } catch {
    // Mongo optional, entries still come from routes + seed content.
  }

  const entries = await getSitemapEntries();
  return entries.map((entry) => ({
    url: toAbsolute(entry.slug),
    lastModified: entry.updatedAt,
    changeFrequency: changeFrequencyFor(entry.slug),
    priority: priorityFor(entry.slug),
  }));
}
