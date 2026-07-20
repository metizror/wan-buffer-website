/**
 * SEO score — deterministic, dependency-free. Safe to import on both the
 * server (to persist `lastSeoScore`) and the client (live Analysis preview).
 */

export interface SeoScoreInput {
  metaTitle?: string;
  metaDescription?: string;
  focusKeyphrase?: string;
  canonical?: string;
  noIndex?: boolean;
  schemaType?: string;
  keywords?: string[];
  ogTitle?: string;
  ogImage?: string;
}

export interface SeoCheck {
  label: string;
  pass: boolean;
}

export interface SeoScoreResult {
  score: number;
  breakdown: SeoCheck[];
}

function contains(haystack: string, needle: string): boolean {
  if (!needle.trim()) return false;
  return haystack.toLowerCase().includes(needle.trim().toLowerCase());
}

/**
 * Compute a 0–100 SEO score plus a per-check breakdown. Each check contributes
 * an equal weight, so the score is `passed / total * 100` rounded.
 */
export function computeSeoScore(page: SeoScoreInput): SeoScoreResult {
  const metaTitle = (page.metaTitle ?? "").trim();
  const metaDescription = (page.metaDescription ?? "").trim();
  const focusKeyphrase = (page.focusKeyphrase ?? "").trim();
  const canonical = (page.canonical ?? "").trim();
  const schemaType = (page.schemaType ?? "").trim();
  const keywords = page.keywords ?? [];
  const ogTitle = (page.ogTitle ?? "").trim();
  const ogImage = (page.ogImage ?? "").trim();

  const breakdown: SeoCheck[] = [
    {
      label: "Meta title is 30–60 characters",
      pass: metaTitle.length >= 30 && metaTitle.length <= 60,
    },
    {
      label: "Meta description is 120–160 characters",
      pass: metaDescription.length >= 120 && metaDescription.length <= 160,
    },
    {
      label: "Focus keyphrase is set",
      pass: focusKeyphrase.length > 0,
    },
    {
      label: "Focus keyphrase appears in meta title",
      pass: contains(metaTitle, focusKeyphrase),
    },
    {
      label: "Focus keyphrase appears in meta description",
      pass: contains(metaDescription, focusKeyphrase),
    },
    {
      label: "Canonical URL is set",
      pass: canonical.length > 0,
    },
    {
      label: "Page is indexable (not noindex)",
      pass: !page.noIndex,
    },
    {
      label: "Schema type is set",
      pass: schemaType.length > 0,
    },
    {
      label: "At least one keyword is set",
      pass: keywords.some((k) => k.trim().length > 0),
    },
    {
      label: "Social image and title are set",
      pass: ogImage.length > 0 && (ogTitle.length > 0 || metaTitle.length > 0),
    },
  ];

  const passed = breakdown.filter((c) => c.pass).length;
  const score = Math.round((passed / breakdown.length) * 100);

  return { score, breakdown };
}
