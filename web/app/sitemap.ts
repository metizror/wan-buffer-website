import type { MetadataRoute } from "next";
import { getSitemapEntries, syncSeoPages } from "@/lib/seo-service";

// Built from the SEO `pages` catalogue at request time (DB-backed).
export const dynamic = "force-dynamic";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://wanbuffer.metizcloud.com"
).replace(/\/$/, "");

function toAbsolute(slug: string): string {
  return slug === "/" ? SITE_URL : `${SITE_URL}${slug}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Seed rows for any new content so the sitemap is never stale/empty.
  await syncSeoPages();
  const entries = await getSitemapEntries();
  return entries.map((entry) => ({
    url: toAbsolute(entry.slug),
    lastModified: entry.updatedAt,
    changeFrequency: "weekly",
    priority: entry.slug === "/" ? 1 : 0.7,
  }));
}
