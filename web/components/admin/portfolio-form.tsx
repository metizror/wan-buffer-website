"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "./image-upload";
import { FormField, FormTextArea, FormSelect, FormActions } from "./form-fields";
import {
  PORTFOLIO_TYPES,
  PORTFOLIO_TYPE_LABELS,
  type PortfolioItem,
  type PortfolioType,
  type PortfolioMetric,
} from "@/lib/definitions";

interface PortfolioFormProps {
  initialData?: PortfolioItem;
  categories: string[];
  mode: "create" | "edit";
}

const TYPE_OPTIONS = PORTFOLIO_TYPES.map((t) => ({
  value: t,
  label: PORTFOLIO_TYPE_LABELS[t],
}));

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const linesToArr = (text: string) =>
  text.split("\n").map((l) => l.trim()).filter(Boolean);
const arrToLines = (arr?: string[]) => (arr ?? []).join("\n");
const csvToArr = (text: string) =>
  text.split(",").map((t) => t.trim()).filter(Boolean);
const arrToCsv = (arr?: string[]) => (arr ?? []).join(", ");

interface ChallengeEdit {
  title: string;
  description: string;
}
interface SolutionEdit {
  title: string;
  intro: string;
  bulletsText: string;
}

export function PortfolioForm({ initialData, categories, mode }: PortfolioFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const cs = initialData?.caseStudy ?? null;

  // ── Base fields ──
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [type, setType] = useState<PortfolioType>(initialData?.type ?? "work");
  const [nestUnderType, setNestUnderType] = useState(
    initialData?.nestUnderType ?? true
  );
  const [category, setCategory] = useState(initialData?.category ?? "");
  const [client, setClient] = useState(initialData?.client ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [projectUrl, setProjectUrl] = useState(initialData?.projectUrl ?? "");
  const [images, setImages] = useState<string[]>(initialData?.images ?? []);
  const [techStack, setTechStack] = useState(arrToCsv(initialData?.techStack));
  const [order, setOrder] = useState(String(initialData?.order ?? 0));
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle ?? "");
  const [metaDescription, setMetaDescription] = useState(
    initialData?.metaDescription ?? ""
  );

  // ── Case-study editor fields ──
  const [csPageHeading, setCsPageHeading] = useState(cs?.pageHeading ?? "");
  const [csClientLabel, setCsClientLabel] = useState(cs?.clientLabel ?? "");
  const [csExcerpt, setCsExcerpt] = useState(cs?.excerpt ?? "");
  const [csBusinessType, setCsBusinessType] = useState(cs?.businessType ?? "");
  const [csLocation, setCsLocation] = useState(cs?.location ?? "");
  const [csGoal, setCsGoal] = useState(cs?.goalParagraph ?? "");
  const [csIndustries, setCsIndustries] = useState(arrToCsv(cs?.industries));
  const [csRegions, setCsRegions] = useState(arrToCsv(cs?.regions));
  const [csTechnologies, setCsTechnologies] = useState(arrToCsv(cs?.technologies));
  const [csAbout, setCsAbout] = useState(arrToLines(cs?.aboutParagraphs));
  const [csHighlights, setCsHighlights] = useState(arrToLines(cs?.highlights));
  const [csScreenshots, setCsScreenshots] = useState(
    (cs?.screenshots ?? []).map((s) => `${s.src} | ${s.alt}`).join("\n")
  );
  const [challenges, setChallenges] = useState<ChallengeEdit[]>(
    cs?.challenges ?? []
  );
  const [solutions, setSolutions] = useState<SolutionEdit[]>(
    (cs?.solutions ?? []).map((s) => ({
      title: s.title,
      intro: s.intro ?? "",
      bulletsText: arrToLines(s.bullets),
    }))
  );
  const [metrics, setMetrics] = useState<PortfolioMetric[]>(cs?.metrics ?? []);
  const [results, setResults] = useState<PortfolioMetric[]>(cs?.results ?? []);
  const [tCompany, setTCompany] = useState(cs?.testimonial?.company ?? "");
  const [tRole, setTRole] = useState(cs?.testimonial?.role ?? "");
  const [tQuote, setTQuote] = useState(cs?.testimonial?.quote ?? "");

  function handleTitleChange(val: string) {
    setTitle(val);
    if (mode === "create") setSlug(generateSlug(val));
  }

  function updateImage(index: number, url: string) {
    setImages((prev) => prev.map((v, i) => (i === index ? url : v)));
  }
  function moveImage(index: number, dir: -1 | 1) {
    setImages((prev) => {
      const next = [...prev];
      const target = index + dir;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }
  function removeImage(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  function buildCaseStudy() {
    if (type !== "case-study") return null;
    return {
      // preserve fields the simple editor does not expose (solutionRows,
      // approach, techStackLogos, imageW/H) so edits stay lossless.
      ...(cs ?? {}),
      pageHeading: csPageHeading,
      clientLabel: csClientLabel,
      excerpt: csExcerpt,
      imageSrc: images[0] || cs?.imageSrc || "",
      imageW: cs?.imageW ?? 800,
      imageH: cs?.imageH ?? 500,
      industries: csvToArr(csIndustries),
      regions: csvToArr(csRegions),
      technologies: csvToArr(csTechnologies),
      aboutParagraphs: linesToArr(csAbout),
      businessType: csBusinessType,
      location: csLocation,
      goalParagraph: csGoal,
      highlights: linesToArr(csHighlights),
      challenges: challenges.filter((c) => c.title.trim()),
      solutions: solutions
        .filter((s) => s.title.trim())
        .map((s) => ({
          title: s.title,
          intro: s.intro || undefined,
          bullets: linesToArr(s.bulletsText),
        })),
      screenshots: linesToArr(csScreenshots).map((line) => {
        const [src, ...rest] = line.split("|");
        return { src: src.trim(), alt: rest.join("|").trim() };
      }),
      approach: cs?.approach ?? [],
      results: results.filter((r) => r.value.trim() || r.label.trim()),
      metrics: metrics.filter((m) => m.value.trim() || m.label.trim()),
      testimonial: { company: tCompany, role: tRole, quote: tQuote },
    };
  }

  function buildBody() {
    return {
      title,
      slug,
      type,
      nestUnderType,
      category,
      client,
      description,
      projectUrl,
      images: images.filter((v) => v.trim()),
      techStack: csvToArr(techStack),
      caseStudy: buildCaseStudy(),
      order: Number(order) || 0,
      metaTitle,
      metaDescription,
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const url =
        mode === "edit"
          ? `/api/admin/portfolio/${initialData?._id}`
          : "/api/admin/portfolio";
      const method = mode === "edit" ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildBody()),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save");
        return;
      }
      router.push("/admin/portfolio");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  function previewUrl() {
    if (!slug) return "";
    if (type === "case-study") return `/case-study/${slug}`;
    return nestUnderType ? `/work/${slug}` : "";
  }
  function handlePreview() {
    const u = previewUrl();
    if (u) window.open(u, "_blank");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="adm-login-error">{error}</div>}

      {/* Basic info */}
      <div className="adm-form-card">
        <h2>Basic Information</h2>
        <div className="adm-form-grid">
          <FormField
            label="Title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Project title"
            required
            fullWidth
          />
          <FormField
            label="Slug"
            name="slug"
            value={slug}
            onChange={setSlug}
            placeholder="url-friendly-slug"
            required
          />
          <FormSelect
            label="Type"
            name="type"
            value={type}
            onChange={(v) => setType(v as PortfolioType)}
            options={TYPE_OPTIONS}
          />
          <div className="adm-field">
            <label htmlFor="category">Category</label>
            <input
              id="category"
              list="portfolio-categories"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Odoo ERP, eCommerce"
            />
            <datalist id="portfolio-categories">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </div>
          <FormField
            label="Client"
            name="client"
            value={client}
            onChange={setClient}
            placeholder="Client name / label"
          />
          <FormField
            label="Project URL"
            name="projectUrl"
            value={projectUrl}
            onChange={setProjectUrl}
            placeholder="https://..."
          />
          <FormField
            label="Order"
            name="order"
            type="number"
            value={order}
            onChange={setOrder}
            hint="Lower numbers appear first"
          />
          <FormTextArea
            label="Description"
            name="description"
            value={description}
            onChange={setDescription}
            placeholder="Short summary shown on cards"
            rows={3}
          />
          <FormField
            label="Tech stack"
            name="techStack"
            value={techStack}
            onChange={setTechStack}
            placeholder="Odoo, Python, PostgreSQL"
            hint="Comma-separated list"
            fullWidth
          />
        </div>
        <div className="adm-toggle">
          <button
            type="button"
            className={`adm-toggle-switch ${nestUnderType ? "active" : ""}`}
            onClick={() => setNestUnderType(!nestUnderType)}
          />
          <label onClick={() => setNestUnderType(!nestUnderType)}>
            {nestUnderType
              ? "Nested route under its type (e.g. /case-study/slug)"
              : "Flat route (deferred — no public route yet)"}
          </label>
        </div>
      </div>

      {/* Images */}
      <div className="adm-form-card">
        <h2>Images</h2>
        {images.map((img, i) => (
          <div key={i} className="adm-faq-item">
            <div className="adm-faq-header">
              <span>Image #{i + 1}{i === 0 ? " (cover)" : ""}</span>
              <div className="adm-actions">
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => moveImage(i, -1)}
                  disabled={i === 0}
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => moveImage(i, 1)}
                  disabled={i === images.length - 1}
                >
                  ↓
                </button>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => removeImage(i)}
                >
                  Remove
                </button>
              </div>
            </div>
            <ImageUpload
              label=""
              value={img}
              onChange={(url) => updateImage(i, url)}
            />
          </div>
        ))}
        <button
          type="button"
          className="adm-btn adm-btn-secondary adm-btn-sm"
          onClick={() => setImages([...images, ""])}
        >
          + Add image
        </button>
      </div>

      {/* Case study content (collapsible) */}
      {type === "case-study" && (
        <details className="adm-form-card" open>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>
            Case study content
          </summary>

          <div className="adm-form-grid" style={{ marginTop: "1rem" }}>
            <FormField
              label="Page heading"
              value={csPageHeading}
              onChange={setCsPageHeading}
              placeholder="Defaults to title"
              fullWidth
            />
            <FormField
              label="Client label (hero)"
              value={csClientLabel}
              onChange={setCsClientLabel}
            />
            <FormField
              label="Business type"
              value={csBusinessType}
              onChange={setCsBusinessType}
            />
            <FormField label="Location" value={csLocation} onChange={setCsLocation} />
            <FormTextArea
              label="Excerpt / lead"
              value={csExcerpt}
              onChange={setCsExcerpt}
              rows={3}
            />
            <FormField
              label="Industries"
              value={csIndustries}
              onChange={setCsIndustries}
              hint="Comma-separated (list filters)"
            />
            <FormField
              label="Regions"
              value={csRegions}
              onChange={setCsRegions}
              hint="Comma-separated (list filters)"
            />
            <FormField
              label="Technologies"
              value={csTechnologies}
              onChange={setCsTechnologies}
              hint="Comma-separated (list filters)"
            />
            <FormTextArea
              label="About paragraphs"
              value={csAbout}
              onChange={setCsAbout}
              rows={4}
              hint="One paragraph per line"
            />
            <FormTextArea
              label="Goal"
              value={csGoal}
              onChange={setCsGoal}
              rows={3}
            />
            <FormTextArea
              label="Highlights"
              value={csHighlights}
              onChange={setCsHighlights}
              rows={4}
              hint="One highlight per line"
            />
            <FormTextArea
              label="Gallery / screenshots"
              value={csScreenshots}
              onChange={setCsScreenshots}
              rows={4}
              hint="One per line as: /path/img.webp | alt text"
            />
          </div>

          {/* Challenges */}
          <h3 style={{ marginTop: "1.25rem" }}>Challenges</h3>
          {challenges.map((c, i) => (
            <div key={i} className="adm-faq-item">
              <div className="adm-faq-header">
                <span>Challenge #{i + 1}</span>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => setChallenges(challenges.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="adm-field">
                <label>Title</label>
                <input
                  value={c.title}
                  onChange={(e) =>
                    setChallenges(
                      challenges.map((x, j) =>
                        j === i ? { ...x, title: e.target.value } : x
                      )
                    )
                  }
                />
              </div>
              <div className="adm-field">
                <label>Description</label>
                <textarea
                  rows={2}
                  value={c.description}
                  onChange={(e) =>
                    setChallenges(
                      challenges.map((x, j) =>
                        j === i ? { ...x, description: e.target.value } : x
                      )
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() => setChallenges([...challenges, { title: "", description: "" }])}
          >
            + Add challenge
          </button>

          {/* Solutions */}
          <h3 style={{ marginTop: "1.25rem" }}>Solutions</h3>
          {solutions.map((s, i) => (
            <div key={i} className="adm-faq-item">
              <div className="adm-faq-header">
                <span>Solution #{i + 1}</span>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => setSolutions(solutions.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="adm-field">
                <label>Title</label>
                <input
                  value={s.title}
                  onChange={(e) =>
                    setSolutions(
                      solutions.map((x, j) =>
                        j === i ? { ...x, title: e.target.value } : x
                      )
                    )
                  }
                />
              </div>
              <div className="adm-field">
                <label>Intro (optional)</label>
                <textarea
                  rows={2}
                  value={s.intro}
                  onChange={(e) =>
                    setSolutions(
                      solutions.map((x, j) =>
                        j === i ? { ...x, intro: e.target.value } : x
                      )
                    )
                  }
                />
              </div>
              <div className="adm-field">
                <label>Bullets (one per line)</label>
                <textarea
                  rows={3}
                  value={s.bulletsText}
                  onChange={(e) =>
                    setSolutions(
                      solutions.map((x, j) =>
                        j === i ? { ...x, bulletsText: e.target.value } : x
                      )
                    )
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() =>
              setSolutions([...solutions, { title: "", intro: "", bulletsText: "" }])
            }
          >
            + Add solution
          </button>

          {/* Metrics */}
          <h3 style={{ marginTop: "1.25rem" }}>Metrics (card stats)</h3>
          {metrics.map((m, i) => (
            <div key={i} className="adm-faq-item">
              <div className="adm-faq-header">
                <span>Metric #{i + 1}</span>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => setMetrics(metrics.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="adm-form-grid">
                <FormField
                  label="Value"
                  value={m.value}
                  onChange={(v) =>
                    setMetrics(metrics.map((x, j) => (j === i ? { ...x, value: v } : x)))
                  }
                />
                <FormField
                  label="Label"
                  value={m.label}
                  onChange={(v) =>
                    setMetrics(metrics.map((x, j) => (j === i ? { ...x, label: v } : x)))
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() => setMetrics([...metrics, { value: "", label: "" }])}
          >
            + Add metric
          </button>

          {/* Results */}
          <h3 style={{ marginTop: "1.25rem" }}>Key results</h3>
          {results.map((r, i) => (
            <div key={i} className="adm-faq-item">
              <div className="adm-faq-header">
                <span>Result #{i + 1}</span>
                <button
                  type="button"
                  className="adm-btn adm-btn-ghost adm-btn-sm"
                  onClick={() => setResults(results.filter((_, j) => j !== i))}
                >
                  Remove
                </button>
              </div>
              <div className="adm-form-grid">
                <FormField
                  label="Value"
                  value={r.value}
                  onChange={(v) =>
                    setResults(results.map((x, j) => (j === i ? { ...x, value: v } : x)))
                  }
                />
                <FormField
                  label="Label"
                  value={r.label}
                  onChange={(v) =>
                    setResults(results.map((x, j) => (j === i ? { ...x, label: v } : x)))
                  }
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() => setResults([...results, { value: "", label: "" }])}
          >
            + Add result
          </button>

          {/* Testimonial */}
          <h3 style={{ marginTop: "1.25rem" }}>Testimonial</h3>
          <div className="adm-form-grid">
            <FormField label="Company" value={tCompany} onChange={setTCompany} />
            <FormField label="Role" value={tRole} onChange={setTRole} />
            <FormTextArea label="Quote" value={tQuote} onChange={setTQuote} rows={3} />
          </div>
        </details>
      )}

      {/* SEO */}
      <div className="adm-form-card">
        <h2>SEO</h2>
        <div className="adm-form-grid">
          <FormTextArea
            label="Meta Title"
            value={metaTitle}
            onChange={setMetaTitle}
            placeholder="Defaults to the title"
            rows={2}
            maxCount={60}
          />
          <FormTextArea
            label="Meta Description"
            value={metaDescription}
            onChange={setMetaDescription}
            placeholder="Defaults to the description"
            rows={3}
            maxCount={160}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="adm-form-card">
        <FormActions
          saving={saving}
          submitLabel={mode === "create" ? "Create item" : "Update item"}
          onCancel={() => router.push("/admin/portfolio")}
          secondary={
            previewUrl()
              ? { label: "Preview", onClick: handlePreview, disabled: saving }
              : undefined
          }
        />
      </div>
    </form>
  );
}
