"use client";

import { useEffect, useState } from "react";

const OXP_URL =
  "https://www.odoo.com/event/odoo-experience-2026-india-10174/page/oxp26-india-introduction";

/**
 * Floating "upcoming event" bar, styled as a search-style pill pinned to the
 * bottom centre. Clicking it opens a short event modal. Home page only.
 */
export function HomeOxpFloat() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (dismissed) return null;

  return (
    <>
      <div id="oxp-float" className={open ? "is-open" : undefined}>
        <button
          type="button"
          className="oxp-float-bar"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label="OXP 2026, Odoo Experience India — view event details"
        >
          <span className="oxp-float-label">
            <strong>OXP 2026</strong> — Odoo Experience India
          </span>
          <span className="oxp-float-go" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </span>
        </button>

        <button
          type="button"
          className="oxp-float-close"
          aria-label="Dismiss upcoming event banner"
          onClick={() => setDismissed(true)}
        >
          ✕
        </button>
      </div>

      {open && (
        <div className="oxp-modal-overlay">
          <div className="oxp-modal" role="dialog" aria-labelledby="oxp-modal-title">
            <button type="button" className="oxp-modal-close" aria-label="Close" onClick={() => setOpen(false)}>
              ✕
            </button>

            <span className="oxp-modal-badge">Upcoming event</span>
            <h2 id="oxp-modal-title" className="oxp-modal-title">
              OXP 2026 — Odoo Experience India
            </h2>
            <p className="oxp-modal-body">
              Odoo Experience is Odoo&apos;s flagship gathering: product keynotes, hands-on functional and technical
              sessions, and a partner floor where implementation teams and customers meet face to face. The India
              edition brings that programme to the region.
            </p>
            <p className="oxp-modal-body">
              We follow the sessions closely because they set the direction for the Odoo work we deliver — new modules,
              deprecations, and AI capabilities land here first.
            </p>

            <div className="oxp-modal-meta">
              <span>11–12 September 2026</span>
              <span aria-hidden="true">•</span>
              <span>Mahatma Mandir, Gandhinagar, Gujarat</span>
            </div>

            <div className="oxp-modal-actions">
              <a className="oxp-modal-cta" href="/event/odoo-experience-2026-india">
                Meet us at OXP 2026 <span aria-hidden="true">→</span>
              </a>
              <a className="oxp-modal-alt" href={OXP_URL} target="_blank" rel="noopener noreferrer">
                Official OXP 2026 page
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
