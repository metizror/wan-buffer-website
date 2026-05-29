"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TipTapEditor } from "./tiptap-editor";
import { BLOG_CATEGORIES } from "@/lib/definitions";

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
    isPublished: boolean;
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
  const [isPublished, setIsPublished] = useState(
    initialData?.isPublished ?? false
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const displayDate = sortDate ? formatDate(sortDate) : "";
    const filteredFaqs = faqs.filter((f) => f.q.trim() && f.a.trim());

    const body = {
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
      isPublished,
    };

    try {
      const url =
        mode === "edit"
          ? `/api/admin/blogs/${initialData?._id}`
          : "/api/admin/blogs";
      const method = mode === "edit" ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
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

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="adm-login-error">{error}</div>}

      {/* Basic Info */}
      <div className="adm-form-card">
        <h2>Basic Information</h2>
        <div className="adm-form-grid">
          <div className="adm-form-full adm-field">
            <label>Title</label>
            <input
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="Blog title"
              required
            />
          </div>
          <div className="adm-field">
            <label>Slug</label>
            <input
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="url-friendly-slug"
              required
            />
          </div>
          <div className="adm-field">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select category</option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="adm-form-full adm-field">
            <label>Excerpt</label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Short description of the blog"
              rows={3}
              required
            />
          </div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="adm-form-card">
        <h2>Meta Information</h2>
        <div className="adm-form-grid">
          <div className="adm-field">
            <label>Author</label>
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author name"
              required
            />
          </div>
          <div className="adm-field">
            <label>Author Role</label>
            <input
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
              placeholder="e.g. Flutter Developer"
            />
          </div>
          <div className="adm-field">
            <label>Publish Date</label>
            <input
              type="date"
              value={sortDate}
              onChange={(e) => setSortDate(e.target.value)}
              required
            />
          </div>
          <div className="adm-field">
            <label>Read Time</label>
            <input
              value={readTime}
              onChange={(e) => setReadTime(e.target.value)}
              placeholder="e.g. 4 min"
              required
            />
          </div>
          <div className="adm-field">
            <label>Image URL</label>
            <input
              value={imageSrc}
              onChange={(e) => setImageSrc(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="adm-field">
            <label>External URL</label>
            <input
              value={externalUrl}
              onChange={(e) => setExternalUrl(e.target.value)}
              placeholder="https://..."
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="adm-form-card">
        <h2>Content</h2>
        <TipTapEditor value={content} onChange={setContent} />
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

      {/* Publish toggle + actions */}
      <div className="adm-form-card">
        <div className="adm-toggle">
          <button
            type="button"
            className={`adm-toggle-switch ${isPublished ? "active" : ""}`}
            onClick={() => setIsPublished(!isPublished)}
          />
          <label onClick={() => setIsPublished(!isPublished)}>
            {isPublished ? "Published" : "Draft"}
          </label>
        </div>

        <div className="adm-form-actions">
          <button
            type="button"
            className="adm-btn adm-btn-secondary"
            onClick={() => router.push("/admin/blogs")}
          >
            Cancel
          </button>
          <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>
            {saving
              ? "Saving..."
              : mode === "create"
                ? "Create Blog"
                : "Update Blog"}
          </button>
        </div>
      </div>
    </form>
  );
}
