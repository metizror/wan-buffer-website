"use client";

import { useState } from "react";
import {
  ADVANCED_ROBOTS,
  SEO_SCHEMA_TYPES,
  type AdvancedRobot,
  type PageCategory,
  type SeoSchemaType,
} from "@/lib/definitions";
import { computeSeoScore } from "@/lib/seo-score";
import { FormField, FormTextArea, FormSelect } from "./form-fields";
import { ImageUpload } from "./image-upload";

export interface SeoPageClient {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
}

interface Props {
  page: SeoPageClient;
  onClose: () => void;
  onSaved: (page: SeoPageClient) => void;
}

type TabKey = "general" | "social" | "advanced" | "analysis";

const TABS: { key: TabKey; label: string }[] = [
  { key: "general", label: "General" },
  { key: "social", label: "Social" },
  { key: "advanced", label: "Advanced" },
  { key: "analysis", label: "Analysis" },
];

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="adm-toggle" style={{ margin: "0.5rem 0" }}>
      <button
        type="button"
        className={`adm-toggle-switch${value ? " active" : ""}`}
        onClick={() => onChange(!value)}
      />
      <label onClick={() => onChange(!value)}>{label}</label>
    </div>
  );
}

export function SeoEditModal({ page, onClose, onSaved }: Props) {
  const [tab, setTab] = useState<TabKey>("general");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState<SeoPageClient>(page);
  const [keywordsText, setKeywordsText] = useState(
    (page.keywords ?? []).join(", ")
  );

  function set<K extends keyof SeoPageClient>(key: K, value: SeoPageClient[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleRobot(robot: AdvancedRobot) {
    setForm((prev) => {
      const has = prev.advancedRobots.includes(robot);
      return {
        ...prev,
        advancedRobots: has
          ? prev.advancedRobots.filter((r) => r !== robot)
          : [...prev.advancedRobots, robot],
      };
    });
  }

  const keywords = keywordsText
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  const { score, breakdown } = computeSeoScore({ ...form, keywords });

  async function handleSave() {
    setError("");

    const jsonld = form.schemaJsonld.trim();
    if (jsonld) {
      try {
        JSON.parse(jsonld);
      } catch {
        setError("Custom JSON-LD is not valid JSON");
        setTab("advanced");
        return;
      }
    }

    setSaving(true);
    try {
      const res = await fetch(`/api/admin/seo/${page._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          metaTitle: form.metaTitle,
          metaDescription: form.metaDescription,
          keywords,
          ogImage: form.ogImage,
          canonical: form.canonical,
          ogTitle: form.ogTitle,
          ogDescription: form.ogDescription,
          ogImageAlt: form.ogImageAlt,
          twitterTitle: form.twitterTitle,
          twitterDescription: form.twitterDescription,
          twitterImage: form.twitterImage,
          noIndex: form.noIndex,
          noFollow: form.noFollow,
          advancedRobots: form.advancedRobots,
          breadcrumbTitle: form.breadcrumbTitle,
          focusKeyphrase: form.focusKeyphrase,
          schemaType: form.schemaType,
          schemaJsonld: form.schemaJsonld,
          includeInSitemap: form.includeInSitemap,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save");
        return;
      }
      onSaved(data.page);
    } catch {
      setError("Failed to save SEO page");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="adm-overlay" onClick={onClose}>
      <div
        className="adm-dialog adm-seo-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Edit SEO — {form.slug}</h3>

        <div className="adm-tabs">
          {TABS.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`adm-tab${tab === t.key ? " active" : ""}`}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {error && <div className="adm-login-error">{error}</div>}

        <div className="adm-seo-modal-body">
          {tab === "general" && (
            <>
              <FormField
                label="Meta Title"
                value={form.metaTitle}
                onChange={(v) => set("metaTitle", v)}
                hint={`${form.metaTitle.length} / 60 characters`}
                fullWidth
              />
              <FormTextArea
                label="Meta Description"
                value={form.metaDescription}
                onChange={(v) => set("metaDescription", v)}
                maxCount={160}
                rows={3}
              />
              <FormField
                label="Focus Keyphrase"
                value={form.focusKeyphrase}
                onChange={(v) => set("focusKeyphrase", v)}
                fullWidth
              />
              <FormField
                label="Breadcrumb Title"
                value={form.breadcrumbTitle}
                onChange={(v) => set("breadcrumbTitle", v)}
                fullWidth
              />
            </>
          )}

          {tab === "social" && (
            <>
              <FormField
                label="OG Title"
                value={form.ogTitle}
                onChange={(v) => set("ogTitle", v)}
                placeholder="defaults to meta title"
                fullWidth
              />
              <FormTextArea
                label="OG Description"
                value={form.ogDescription}
                onChange={(v) => set("ogDescription", v)}
                rows={2}
              />
              <ImageUpload
                label="OG Image"
                value={form.ogImage}
                onChange={(v) => set("ogImage", v)}
              />
              <FormField
                label="OG Image Alt"
                value={form.ogImageAlt}
                onChange={(v) => set("ogImageAlt", v)}
                fullWidth
              />
              <FormField
                label="Twitter Title"
                value={form.twitterTitle}
                onChange={(v) => set("twitterTitle", v)}
                placeholder="defaults to meta title"
                fullWidth
              />
              <FormTextArea
                label="Twitter Description"
                value={form.twitterDescription}
                onChange={(v) => set("twitterDescription", v)}
                rows={2}
              />
              <ImageUpload
                label="Twitter Image"
                value={form.twitterImage}
                onChange={(v) => set("twitterImage", v)}
              />
            </>
          )}

          {tab === "advanced" && (
            <>
              <FormField
                label="Canonical URL"
                value={form.canonical}
                onChange={(v) => set("canonical", v)}
                type="url"
                placeholder="https://..."
                fullWidth
              />
              <FormField
                label="Keywords (comma separated)"
                value={keywordsText}
                onChange={setKeywordsText}
                fullWidth
              />
              <Toggle
                label="noindex (hide from search engines)"
                value={form.noIndex}
                onChange={(v) => set("noIndex", v)}
              />
              <Toggle
                label="nofollow (don't follow links)"
                value={form.noFollow}
                onChange={(v) => set("noFollow", v)}
              />

              <div className="adm-field adm-form-full">
                <label>Advanced robots directives</label>
                <div className="adm-checkbox-grid">
                  {ADVANCED_ROBOTS.map((robot) => (
                    <label key={robot} className="adm-checkbox-item">
                      <input
                        type="checkbox"
                        checked={form.advancedRobots.includes(robot)}
                        onChange={() => toggleRobot(robot)}
                      />
                      {robot}
                    </label>
                  ))}
                </div>
              </div>

              <FormSelect
                label="Schema Type"
                value={form.schemaType}
                onChange={(v) => set("schemaType", v as SeoSchemaType)}
                options={SEO_SCHEMA_TYPES as unknown as string[]}
                fullWidth
              />
              <FormTextArea
                label="Custom JSON-LD"
                value={form.schemaJsonld}
                onChange={(v) => set("schemaJsonld", v)}
                rows={5}
                hint="Must be valid JSON. Leave blank to skip."
              />
              <Toggle
                label="Include in sitemap"
                value={form.includeInSitemap}
                onChange={(v) => set("includeInSitemap", v)}
              />
            </>
          )}

          {tab === "analysis" && (
            <div className="adm-seo-analysis">
              <div className="adm-seo-analysis-head">
                <span
                  className={`adm-seo-score adm-seo-score-lg ${
                    score >= 80
                      ? "adm-seo-score-good"
                      : score >= 50
                        ? "adm-seo-score-mid"
                        : "adm-seo-score-bad"
                  }`}
                >
                  {score}
                </span>
                <span>SEO score (live)</span>
              </div>
              <ul className="adm-seo-checklist">
                {breakdown.map((check) => (
                  <li
                    key={check.label}
                    className={check.pass ? "pass" : "fail"}
                  >
                    <span className="adm-seo-check-icon">
                      {check.pass ? "✓" : "✕"}
                    </span>
                    {check.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="adm-dialog-actions">
          <button
            type="button"
            className="adm-btn adm-btn-secondary"
            onClick={onClose}
            disabled={saving}
          >
            Cancel
          </button>
          <button
            type="button"
            className="adm-btn adm-btn-primary"
            onClick={handleSave}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
