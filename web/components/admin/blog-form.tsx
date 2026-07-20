"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TipTapEditor } from "./tiptap-editor";
import { ImageUpload } from "./image-upload";
import {
  FieldWrapper,
  FormField,
  FormTextArea,
  FormSelect,
  FormActions,
} from "./form-fields";
import {
  BLOG_CATEGORIES,
  BLOG_STATUSES,
  BLOG_STATUS_LABELS,
  type BlogStatus,
} from "@/lib/definitions";

interface BlogFormProps {
  initialData?: {
    _id?: string;
    title: string;
    slug: string;
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
    faqs: { q: string; a: string }[];
    tags?: string[];
    isPublished: boolean;
    status?: BlogStatus;
    scheduledAt?: string | null;
    hidden?: boolean;
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: string;
    canonical?: string;
    noIndex?: boolean;
    focusKeyphrase?: string;
  };
  mode: "create" | "edit";
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Convert a stored ISO/Date string to a `datetime-local` input value. */
function toDatetimeLocal(value?: string | null): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

const STATUS_OPTIONS = BLOG_STATUSES.map((s) => ({
  value: s,
  label: BLOG_STATUS_LABELS[s],
}));

export function BlogForm({ initialData, mode }: BlogFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [sortDate, setSortDate] = useState(initialData?.sortDate || "");
  const [author, setAuthor] = useState(initialData?.author || "");
  const [authorRole, setAuthorRole] = useState(initialData?.authorRole || "");
  const [readTime, setReadTime] = useState(initialData?.readTime || "");
  const [imageSrc, setImageSrc] = useState(initialData?.imageSrc || "");
  const [category, setCategory] = useState(initialData?.category || "");
  const [externalUrl, setExternalUrl] = useState(initialData?.externalUrl || "");
  const [content, setContent] = useState(initialData?.content || "");
  const [faqs, setFaqs] = useState<{ q: string; a: string }[]>(
    initialData?.faqs || []
  );
  const [tags, setTags] = useState((initialData?.tags || []).join(", "));

  // Publishing
  const [status, setStatus] = useState<BlogStatus>(
    initialData?.status ?? (initialData?.isPublished ? "published" : "draft")
  );
  const [scheduledAt, setScheduledAt] = useState(
    toDatetimeLocal(initialData?.scheduledAt)
  );
  const [hidden, setHidden] = useState(initialData?.hidden ?? false);

  // SEO
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    initialData?.metaDescription || ""
  );
  const [ogImage, setOgImage] = useState(initialData?.ogImage || "");
  const [canonical, setCanonical] = useState(initialData?.canonical || "");
  const [noIndex, setNoIndex] = useState(initialData?.noIndex ?? false);
  const [focusKeyphrase, setFocusKeyphrase] = useState(
    initialData?.focusKeyphrase || ""
  );

  function handleTitleChange(val: string) {
    setTitle(val);
    if (mode === "create") {
      setSlug(generateSlug(val));
    }
  }

  function addFaq() {
    setFaqs([...faqs, { q: "", a: "" }]);
  }

  function updateFaq(index: number, field: "q" | "a", value: string) {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  }

  function removeFaq(index: number) {
    setFaqs(faqs.filter((_, i) => i !== index));
  }

  function buildBody() {
    const displayDate = sortDate ? formatDate(sortDate) : "";
    const filteredFaqs = faqs.filter((f) => f.q.trim() && f.a.trim());
    const tagList = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    return {
      title,
      slug,
      excerpt,
      date: displayDate,
      sortDate,
      author,
      authorRole,
      readTime,
      imageSrc,
      category,
      externalUrl,
      content,
      faqs: filteredFaqs,
      tags: tagList,
      status,
      isPublished: status === "published",
      scheduledAt: status === "scheduled" && scheduledAt ? scheduledAt : null,
      hidden,
      metaTitle,
      metaDescription,
      ogImage,
      canonical,
      noIndex,
      focusKeyphrase,
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const url =
        mode === "edit"
          ? `/api/admin/blogs/${initialData?._id}`
          : "/api/admin/blogs";
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

      router.push("/admin/blogs");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  function handlePreview() {
    if (slug) window.open(`/blogs/${slug}?preview=1`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="adm-login-error">{error}</div>}

      {/* Basic Info */}
      <div className="adm-form-card">
        <h2>Basic Information</h2>
        <div className="adm-form-grid">
          <FormField
            label="Title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Blog title"
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
            label="Category"
            name="category"
            value={category}
            onChange={setCategory}
            options={[...BLOG_CATEGORIES]}
            placeholder="Select category"
            required
          />
          <FormTextArea
            label="Excerpt"
            name="excerpt"
            value={excerpt}
            onChange={setExcerpt}
            placeholder="Short description of the blog"
            rows={3}
            required
          />
          <FormField
            label="Tags"
            name="tags"
            value={tags}
            onChange={setTags}
            placeholder="odoo, erp, automation"
            hint="Comma-separated list of tags"
            fullWidth
          />
        </div>
      </div>

      {/* Meta Info */}
      <div className="adm-form-card">
        <h2>Meta Information</h2>
        <div className="adm-form-grid">
          <FormField
            label="Author"
            name="author"
            value={author}
            onChange={setAuthor}
            placeholder="Author name"
            required
          />
          <FormField
            label="Author Role"
            name="authorRole"
            value={authorRole}
            onChange={setAuthorRole}
            placeholder="e.g. Flutter Developer"
          />
          <FormField
            label="Publish Date"
            name="sortDate"
            type="date"
            value={sortDate}
            onChange={setSortDate}
            required
          />
          <FormField
            label="Read Time"
            name="readTime"
            value={readTime}
            onChange={setReadTime}
            placeholder="e.g. 4 min"
            required
          />
          <FormField
            label="External URL"
            name="externalUrl"
            value={externalUrl}
            onChange={setExternalUrl}
            placeholder="https://..."
          />
        </div>
        <ImageUpload
          label="Featured Image"
          value={imageSrc}
          onChange={setImageSrc}
          hint="Shown on cards and the article hero"
        />
      </div>

      {/* Content */}
      <div className="adm-form-card">
        <h2>Content</h2>
        <TipTapEditor value={content} onChange={setContent} />
      </div>

      {/* Publishing */}
      <div className="adm-form-card">
        <h2>Publishing</h2>
        <div className="adm-form-grid">
          <FormSelect
            label="Status"
            name="status"
            value={status}
            onChange={(v) => setStatus(v as BlogStatus)}
            options={STATUS_OPTIONS}
          />
          {status === "scheduled" && (
            <FieldWrapper
              label="Scheduled For"
              htmlFor="scheduledAt"
              hint="Goes live automatically once this time passes"
            >
              <input
                id="scheduledAt"
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
              />
            </FieldWrapper>
          )}
        </div>
        <div className="adm-toggle">
          <button
            type="button"
            className={`adm-toggle-switch ${hidden ? "active" : ""}`}
            onClick={() => setHidden(!hidden)}
          />
          <label onClick={() => setHidden(!hidden)}>
            {hidden ? "Hidden from public lists" : "Visible"}
          </label>
        </div>
      </div>

      {/* SEO */}
      <div className="adm-form-card">
        <h2>SEO</h2>
        <div className="adm-form-grid">
          <FormTextArea
            label="Meta Title"
            name="metaTitle"
            value={metaTitle}
            onChange={setMetaTitle}
            placeholder="Defaults to the blog title"
            rows={2}
            maxCount={60}
          />
          <FormTextArea
            label="Meta Description"
            name="metaDescription"
            value={metaDescription}
            onChange={setMetaDescription}
            placeholder="Defaults to the excerpt"
            rows={3}
            maxCount={160}
          />
          <FormField
            label="Canonical URL"
            name="canonical"
            value={canonical}
            onChange={setCanonical}
            placeholder="https://wanbuffer.com/blogs/..."
          />
          <FormField
            label="Focus Keyphrase"
            name="focusKeyphrase"
            value={focusKeyphrase}
            onChange={setFocusKeyphrase}
            placeholder="e.g. odoo erp implementation"
          />
        </div>
        <ImageUpload
          label="OG Image"
          value={ogImage}
          onChange={setOgImage}
          hint="Social share image. Defaults to the featured image when empty"
        />
        <div className="adm-toggle">
          <button
            type="button"
            className={`adm-toggle-switch ${noIndex ? "active" : ""}`}
            onClick={() => setNoIndex(!noIndex)}
          />
          <label onClick={() => setNoIndex(!noIndex)}>
            {noIndex ? "No-index (hidden from search engines)" : "Indexable"}
          </label>
        </div>
      </div>

      {/* FAQs */}
      <div className="adm-form-card">
        <h2>FAQs (Optional)</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="adm-faq-item">
            <div className="adm-faq-header">
              <span>FAQ #{i + 1}</span>
              <button
                type="button"
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => removeFaq(i)}
              >
                Remove
              </button>
            </div>
            <div className="adm-field">
              <label>Question</label>
              <input
                value={faq.q}
                onChange={(e) => updateFaq(i, "q", e.target.value)}
                placeholder="FAQ question"
              />
            </div>
            <div className="adm-field">
              <label>Answer</label>
              <textarea
                value={faq.a}
                onChange={(e) => updateFaq(i, "a", e.target.value)}
                placeholder="FAQ answer"
                rows={2}
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          className="adm-btn adm-btn-secondary adm-btn-sm"
          onClick={addFaq}
        >
          + Add FAQ
        </button>
      </div>

      {/* Actions */}
      <div className="adm-form-card">
        <FormActions
          saving={saving}
          submitLabel={mode === "create" ? "Create Blog" : "Update Blog"}
          onCancel={() => router.push("/admin/blogs")}
          secondary={
            mode === "edit" && slug
              ? { label: "Preview", onClick: handlePreview, disabled: saving }
              : undefined
          }
        />
      </div>
    </form>
  );
}
