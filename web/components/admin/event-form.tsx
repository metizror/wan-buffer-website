"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUpload } from "./image-upload";
import { FormField, FormTextArea, FormSelect, FormActions } from "./form-fields";
import {
  EVENT_STATUSES,
  EVENT_STATUS_LABELS,
  type EventDocument,
} from "@/lib/definitions";
import type { EventContentSection, EventHighlight, EventHost } from "@/lib/events-data";

interface EventFormProps {
  initialData?: EventDocument;
  categories: string[];
  locations: string[];
  mode: "create" | "edit";
}

const STATUS_OPTIONS = EVENT_STATUSES.map((s) => ({
  value: s,
  label: EVENT_STATUS_LABELS[s],
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

interface SectionEdit {
  heading: string;
  paragraphsText: string;
  bulletsText: string;
}

export function EventForm({ initialData, categories, locations, mode }: EventFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // ── Basics ──
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [slug, setSlug] = useState(initialData?.slug ?? "");
  const [pageHeading, setPageHeading] = useState(initialData?.pageHeading ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [status, setStatus] = useState(initialData?.status ?? "draft");

  // ── When & where ──
  const [dateLabel, setDateLabel] = useState(initialData?.dateLabel ?? "");
  const [sortDate, setSortDate] = useState(initialData?.sortDate ?? "");
  const [time, setTime] = useState(initialData?.time ?? "");
  const [location, setLocation] = useState(initialData?.location ?? "Online");
  const [priceLabel, setPriceLabel] = useState(initialData?.priceLabel ?? "Free");
  const [categoriesText, setCategoriesText] = useState(
    arrToCsv(initialData?.categories)
  );

  // ── Media ──
  const [imageSrc, setImageSrc] = useState(initialData?.imageSrc ?? "");
  const [imageW, setImageW] = useState(String(initialData?.imageW ?? 750));
  const [imageH, setImageH] = useState(String(initialData?.imageH ?? 385));

  // ── Content ──
  const [introText, setIntroText] = useState(arrToLines(initialData?.introParagraphs));
  const [hosts, setHosts] = useState<EventHost[]>(initialData?.hosts ?? []);
  const [highlightsHeading, setHighlightsHeading] = useState(
    initialData?.highlightsHeading ?? ""
  );
  const [highlights, setHighlights] = useState<EventHighlight[]>(
    initialData?.highlights ?? []
  );
  const [sections, setSections] = useState<SectionEdit[]>(
    (initialData?.sections ?? []).map((s: EventContentSection) => ({
      heading: s.heading,
      paragraphsText: arrToLines(s.paragraphs),
      bulletsText: arrToLines(s.bullets),
    }))
  );
  const [learnText, setLearnText] = useState(arrToLines(initialData?.learnItems));
  const [audienceText, setAudienceText] = useState(
    arrToLines(initialData?.audienceItems)
  );
  const [closingText, setClosingText] = useState(
    arrToLines(initialData?.closingParagraphs)
  );
  const [youtubeUrl, setYoutubeUrl] = useState(initialData?.youtubeUrl ?? "");
  const [hashtags, setHashtags] = useState(initialData?.hashtags ?? "");

  function handleTitleChange(value: string) {
    setTitle(value);
    if (mode === "create" && !initialData) setSlug(generateSlug(value));
  }

  function buildBody() {
    return {
      slug,
      title,
      pageHeading: pageHeading || title,
      excerpt,
      dateLabel,
      sortDate,
      time,
      location,
      categories: csvToArr(categoriesText),
      imageSrc,
      imageW: Number(imageW) || 750,
      imageH: Number(imageH) || 385,
      priceLabel,
      introParagraphs: linesToArr(introText),
      hosts: hosts.filter((h) => h.name.trim()),
      highlights: highlights.filter((h) => h.title.trim()),
      highlightsHeading,
      sections: sections
        .filter((s) => s.heading.trim())
        .map((s) => ({
          heading: s.heading,
          paragraphs: linesToArr(s.paragraphsText),
          bullets: linesToArr(s.bulletsText),
        })),
      learnItems: linesToArr(learnText),
      audienceItems: linesToArr(audienceText),
      closingParagraphs: linesToArr(closingText),
      youtubeUrl,
      hashtags,
      status,
      order: initialData?.order ?? 0,
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const url =
        mode === "edit"
          ? `/api/admin/events/${initialData?._id}`
          : "/api/admin/events";
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
      router.push("/admin/events");
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

      {/* Basic info */}
      <div className="adm-form-card">
        <h2>Basic Information</h2>
        <div className="adm-form-grid">
          <FormField
            label="Title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Event title as shown on the card"
            required
            fullWidth
          />
          <FormField
            label="Slug"
            name="slug"
            value={slug}
            onChange={setSlug}
            placeholder="url-friendly-slug"
            hint={slug ? `/event/${slug}` : "Lowercase letters, numbers and hyphens"}
            required
          />
          <FormSelect
            label="Status"
            name="status"
            value={status}
            onChange={(v) => setStatus(v as EventDocument["status"])}
            options={STATUS_OPTIONS}
            hint="Only published events appear on /event"
          />
          <FormField
            label="Page heading"
            name="pageHeading"
            value={pageHeading}
            onChange={setPageHeading}
            placeholder="Heading on the detail page (defaults to the title)"
            fullWidth
          />
          <FormTextArea
            label="Excerpt"
            name="excerpt"
            value={excerpt}
            onChange={setExcerpt}
            placeholder="One or two lines shown on the event card and in search results"
            rows={2}
            maxCount={200}
          />
        </div>
      </div>

      {/* When & where */}
      <div className="adm-form-card">
        <h2>When &amp; where</h2>
        <div className="adm-form-grid">
          <FormField
            label="Date label"
            name="dateLabel"
            value={dateLabel}
            onChange={setDateLabel}
            placeholder="Sat, 12 Oct 2024"
            hint="Shown to visitors, free text"
          />
          <FormField
            label="Sort date"
            name="sortDate"
            value={sortDate}
            onChange={setSortDate}
            type="date"
            hint="Used to order events, newest first"
          />
          <FormField
            label="Time"
            name="time"
            value={time}
            onChange={setTime}
            placeholder="11:00 am (Asia/Kolkata)"
          />
          <div className="adm-field">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              list="event-locations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Online, or a venue address"
            />
            <datalist id="event-locations">
              {locations.map((l) => (
                <option key={l} value={l} />
              ))}
            </datalist>
          </div>
          <FormField
            label="Price label"
            name="priceLabel"
            value={priceLabel}
            onChange={setPriceLabel}
            placeholder="Free"
          />
          <div className="adm-field adm-form-full">
            <label htmlFor="categories">Categories</label>
            <input
              id="categories"
              list="event-categories"
              value={categoriesText}
              onChange={(e) => setCategoriesText(e.target.value)}
              placeholder="Odoo, Events"
            />
            <datalist id="event-categories">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
            <p className="adm-hint">
              Comma separated. The first two appear as tags on the card, and each
              value becomes a filter option on /event.
            </p>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="adm-form-card">
        <h2>Cover image</h2>
        <ImageUpload
          label="Image"
          value={imageSrc}
          onChange={setImageSrc}
          hint="Used on the card, the detail page, and link previews. 750 × 385 works well."
        />
        <div className="adm-form-grid">
          <FormField
            label="Image width"
            name="imageW"
            value={imageW}
            onChange={setImageW}
            type="number"
          />
          <FormField
            label="Image height"
            name="imageH"
            value={imageH}
            onChange={setImageH}
            type="number"
          />
        </div>
      </div>

      {/* Intro */}
      <div className="adm-form-card">
        <h2>Introduction</h2>
        <FormTextArea
          label="Intro paragraphs"
          name="intro"
          value={introText}
          onChange={setIntroText}
          rows={6}
          hint="One paragraph per line"
        />
      </div>

      {/* Hosts */}
      <div className="adm-form-card">
        <h2>Hosts</h2>
        {hosts.map((h, i) => (
          <div key={i} className="adm-faq-item">
            <div className="adm-faq-header">
              <span>Host #{i + 1}</span>
              <button
                type="button"
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => setHosts(hosts.filter((_, j) => j !== i))}
              >
                Remove
              </button>
            </div>
            <div className="adm-form-grid">
              <div className="adm-field">
                <label>Name</label>
                <input
                  value={h.name}
                  onChange={(e) =>
                    setHosts(
                      hosts.map((x, j) =>
                        j === i ? { ...x, name: e.target.value } : x
                      )
                    )
                  }
                  placeholder="Saloni Darji"
                />
              </div>
              <div className="adm-field">
                <label>Role</label>
                <input
                  value={h.role}
                  onChange={(e) =>
                    setHosts(
                      hosts.map((x, j) =>
                        j === i ? { ...x, role: e.target.value } : x
                      )
                    )
                  }
                  placeholder="Business Development, Wan Buffer Services"
                />
              </div>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="adm-btn adm-btn-secondary adm-btn-sm"
          onClick={() => setHosts([...hosts, { name: "", role: "" }])}
        >
          + Add host
        </button>
      </div>

      {/* Highlights */}
      <div className="adm-form-card">
        <h2>Highlights</h2>
        <FormField
          label="Highlights heading"
          name="highlightsHeading"
          value={highlightsHeading}
          onChange={setHighlightsHeading}
          placeholder="Why you should tune in"
          hint="Defaults to “Why you should tune in”"
          fullWidth
        />
        {highlights.map((h, i) => (
          <div key={i} className="adm-faq-item">
            <div className="adm-faq-header">
              <span>Highlight #{i + 1}</span>
              <button
                type="button"
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => setHighlights(highlights.filter((_, j) => j !== i))}
              >
                Remove
              </button>
            </div>
            <div className="adm-field">
              <label>Title</label>
              <input
                value={h.title}
                onChange={(e) =>
                  setHighlights(
                    highlights.map((x, j) =>
                      j === i ? { ...x, title: e.target.value } : x
                    )
                  )
                }
              />
            </div>
            <div className="adm-field">
              <label>Description</label>
              <textarea
                rows={3}
                value={h.description}
                onChange={(e) =>
                  setHighlights(
                    highlights.map((x, j) =>
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
          onClick={() => setHighlights([...highlights, { title: "", description: "" }])}
        >
          + Add highlight
        </button>
      </div>

      {/* Content sections */}
      <div className="adm-form-card">
        <h2>Content sections</h2>
        {sections.map((s, i) => (
          <div key={i} className="adm-faq-item">
            <div className="adm-faq-header">
              <span>Section #{i + 1}</span>
              <button
                type="button"
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => setSections(sections.filter((_, j) => j !== i))}
              >
                Remove
              </button>
            </div>
            <div className="adm-field">
              <label>Heading</label>
              <input
                value={s.heading}
                onChange={(e) =>
                  setSections(
                    sections.map((x, j) =>
                      j === i ? { ...x, heading: e.target.value } : x
                    )
                  )
                }
                placeholder="Event details"
              />
            </div>
            <div className="adm-field">
              <label>Paragraphs</label>
              <textarea
                rows={4}
                value={s.paragraphsText}
                onChange={(e) =>
                  setSections(
                    sections.map((x, j) =>
                      j === i ? { ...x, paragraphsText: e.target.value } : x
                    )
                  )
                }
              />
              <p className="adm-hint">One paragraph per line</p>
            </div>
            <div className="adm-field">
              <label>Bullets</label>
              <textarea
                rows={4}
                value={s.bulletsText}
                onChange={(e) =>
                  setSections(
                    sections.map((x, j) =>
                      j === i ? { ...x, bulletsText: e.target.value } : x
                    )
                  )
                }
              />
              <p className="adm-hint">One bullet per line</p>
            </div>
          </div>
        ))}
        <button
          type="button"
          className="adm-btn adm-btn-secondary adm-btn-sm"
          onClick={() =>
            setSections([...sections, { heading: "", paragraphsText: "", bulletsText: "" }])
          }
        >
          + Add section
        </button>
      </div>

      {/* Lists & closing */}
      <div className="adm-form-card">
        <h2>Lists &amp; closing</h2>
        <FormTextArea
          label="What you'll learn"
          name="learnItems"
          value={learnText}
          onChange={setLearnText}
          rows={5}
          hint="One item per line"
        />
        <FormTextArea
          label="Who should attend"
          name="audienceItems"
          value={audienceText}
          onChange={setAudienceText}
          rows={5}
          hint="One item per line"
        />
        <FormTextArea
          label="Closing paragraphs"
          name="closingParagraphs"
          value={closingText}
          onChange={setClosingText}
          rows={4}
          hint="One paragraph per line"
        />
        <div className="adm-form-grid">
          <FormField
            label="YouTube URL"
            name="youtubeUrl"
            value={youtubeUrl}
            onChange={setYoutubeUrl}
            type="url"
            placeholder="https://www.youtube.com/watch?v=..."
            hint="Shows a “Watch the recording” link"
          />
          <FormField
            label="Hashtags"
            name="hashtags"
            value={hashtags}
            onChange={setHashtags}
            placeholder="#Odoo #WanBufferServices"
          />
        </div>
      </div>

      <FormActions
        saving={saving}
        submitLabel={mode === "edit" ? "Save changes" : "Create event"}
        onCancel={() => router.push("/admin/events")}
      />
    </form>
  );
}
