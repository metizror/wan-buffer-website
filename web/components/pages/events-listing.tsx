"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  EVENT_CATEGORIES,
  EVENT_COUNT,
  EVENT_LOCATIONS,
  WAN_BUFFER_EVENTS,
  eventPath,
  type EventCategory,
  type EventLocation,
} from "@/lib/events-data";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function locationShortLabel(location: EventLocation): string {
  if (location === "Online") return "Online";
  return "Gandhinagar, India";
}

export function EventsListing() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState<EventLocation | "">("");
  const [category, setCategory] = useState<EventCategory | "">("");

  const hasFilters = Boolean(keyword.trim() || location || category);

  const filtered = useMemo(() => {
    const q = keyword.trim().toLowerCase();
    return WAN_BUFFER_EVENTS.filter((event) => {
      if (q) {
        const haystack = `${event.title} ${event.excerpt} ${event.categories.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (location && event.location !== location) return false;
      if (category && !event.categories.includes(category)) return false;
      return true;
    });
  }, [keyword, location, category]);

  function clearFilters() {
    setKeyword("");
    setLocation("");
    setCategory("");
  }

  const resultLabel =
    filtered.length === EVENT_COUNT
      ? `Discover ${EVENT_COUNT} upcoming and past events`
      : `${filtered.length} of ${EVENT_COUNT} events match your filters`;

  return (
    <>
      <div className="oi-evt-search rev">
        <form
          className="oi-evt-search-form"
          onSubmit={(e) => e.preventDefault()}
          role="search"
          aria-label="Filter events"
        >
          <label className="oi-evt-field">
            <span className="oi-evt-field-icon">
              <SearchIcon />
            </span>
            <input
              type="search"
              name="s"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search event"
              className="oi-evt-input"
              autoComplete="off"
            />
          </label>
          <label className="oi-evt-field">
            <span className="oi-evt-field-icon">
              <MapPinIcon />
            </span>
            <select
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value as EventLocation | "")}
              className="oi-evt-select"
              aria-label="Location"
            >
              <option value="">All locations</option>
              {EVENT_LOCATIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "Online" ? "Online" : "Helipad Exhibition Centre, Gandhinagar"}
                </option>
              ))}
            </select>
          </label>
          <label className="oi-evt-field">
            <span className="oi-evt-field-icon">
              <LayersIcon />
            </span>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value as EventCategory | "")}
              className="oi-evt-select"
              aria-label="Category"
            >
              <option value="">All categories</option>
              {EVENT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </label>
        </form>
        <div className="oi-evt-search-foot">
          <p className="oi-evt-search-note">{resultLabel}</p>
          {hasFilters ? (
            <button type="button" className="oi-evt-clear" onClick={clearFilters}>
              Clear filters
            </button>
          ) : null}
        </div>
      </div>

      <div className="oi-evt-grid-head rev">
        <div className="eyebrow">Upcoming event</div>
        <h2 className="sec-h">
          Let&apos;s share <span className="ai">knowledge</span>
        </h2>
      </div>

      {filtered.length === 0 ? (
        <div className="oi-evt-empty">
          <p>No events match your search.</p>
          <button type="button" className="oi-evt-clear" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="oi-evt-grid">
          {filtered.map((event, index) => (
            <li key={event.slug} className="oi-evt-card">
              <Link
                href={eventPath(event.slug)}
                className="oi-evt-card-media"
                aria-label={`View event: ${event.title}`}
              >
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  fill
                  className="oi-evt-card-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
              </Link>
              <div className="oi-evt-card-body">
                <div className="oi-evt-tags">
                  {event.categories.slice(0, 2).map((cat) => (
                    <span key={cat} className="oi-evt-tag">
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="oi-evt-card-title">
                  <Link href={eventPath(event.slug)}>{event.title}</Link>
                </h3>
                <ul className="oi-evt-meta">
                  <li>
                    <CalendarIcon />
                    <span>{event.dateLabel}</span>
                  </li>
                  {event.time ? (
                    <li className="oi-evt-meta-time">
                      <span>{event.time}</span>
                    </li>
                  ) : null}
                  <li>
                    <MapPinIcon />
                    <span>{locationShortLabel(event.location)}</span>
                  </li>
                </ul>
                <p className="oi-evt-card-excerpt">{event.excerpt}</p>
                <div className="oi-evt-card-foot">
                  <span className="oi-evt-organizer">
                    Organized by <strong>Wan Buffer</strong>
                  </span>
                  <Link href={eventPath(event.slug)} className="oi-evt-price">
                    {event.priceLabel}
                    <ArrowUpRightIcon />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
