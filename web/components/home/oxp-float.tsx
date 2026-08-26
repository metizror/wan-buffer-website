"use client";

/**
 * Floating "upcoming event" pill, mirrored to the left edge so it stays clear
 * of the Wanny stack in the bottom-right. Home page only.
 */
export function HomeOxpFloat() {
  function dismiss() {
    document.getElementById("oxp-float")?.classList.add("dismissed");
  }

  return (
    <a id="oxp-float" href="/event" aria-label="OXP 2026, Odoo Experience — view all events">
      <span className="oxp-float-badge" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className="oxp-float-badge-dot" />
      </span>

      <span className="oxp-float-text">
        <span className="oxp-float-name">OXP 2026</span>
        <span className="oxp-float-sub">Odoo Experience · Upcoming</span>
      </span>

      <span className="oxp-float-arrow" aria-hidden="true">
        →
      </span>

      <span
        className="oxp-float-close"
        role="button"
        tabIndex={0}
        aria-label="Dismiss upcoming event banner"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          dismiss();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            e.stopPropagation();
            dismiss();
          }
        }}
      >
        ✕
      </span>
    </a>
  );
}
