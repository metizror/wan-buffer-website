"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const EVENT_URL = "https://www.terrapinn.com/exhibition/seamless-middle-east/";
const WANDDY_WEBM = "https://wanddy.wanbuffer.com/buddies/wanddy.webm";
const BAR_TEXT = "Meet us at Seamless Middle East 2026, Dubai - Stand SE10.";

/** Single-node type reveal, avoids one DOM node + animation per letter. */
function OxpBarTypewriter({ text }: { text: string }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setCycle((n) => n + 1), 7200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="oxp-float-label" key={cycle} aria-hidden="true">
      <span className="oxp-float-label-inner">{text}</span>
    </span>
  );
}

/**
 * Bottom-centre announcement for Wan Buffer at Seamless Middle East 2026.
 * Frosted panel only. No chat, no form, no overlay.
 */
export function HomeOxpFloat() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  /** Defer ~284KB webm until idle so it does not compete with LCP. */
  const [loadBarVideo, setLoadBarVideo] = useState(false);
  /** Full-body mascot only when the panel is wide enough to showcase it. */
  const [showMascot, setShowMascot] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const sync = () => setShowMascot(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    let idleId = 0;
    let timeoutId = 0;
    const enable = () => setLoadBarVideo(true);
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(enable, { timeout: 20000 });
    } else {
      timeoutId = window.setTimeout(enable, 12000);
    }
    return () => {
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <div id="oxp-float">
      {open ? (
        <div className="oxp-widget" role="dialog" aria-labelledby="oxp-widget-title">
          <button
            type="button"
            className="oxp-widget-min"
            aria-label="Close announcement"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <div className="oxp-widget-layout">
            <div className="oxp-widget-main">
              <h2 id="oxp-widget-title" className="oxp-widget-title">
                Join us at Seamless Middle East 2026
              </h2>
              <p className="oxp-widget-copy">
                Wan Buffer is coming to Seamless Digital Commerce Expo 2026 in Dubai. Do drop by stand{" "}
                <strong>SE10</strong>. We would love to sit down with you, talk CRM, automation, Odoo and
                AI, and see how we can help your team.
              </p>
              <p className="oxp-widget-meta">
                Stand SE10
                <br />
                22-24 September 2026
                <br />
                Dubai World Trade Centre, Dubai
              </p>
              <div className="oxp-widget-actions">
                <a className="oxp-widget-cta" href="/event/seamless-digital-commerce-expo-2026">
                  Event Details
                </a>
                <a className="oxp-widget-link" href={EVENT_URL} target="_blank" rel="noopener noreferrer">
                  Official Seamless page
                </a>
              </div>
            </div>
            {showMascot ? (
              <video
                className="oxp-widget-photo"
                src={WANDDY_WEBM}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Wanddy, Wan Buffer Odoo ERP buddy"
              />
            ) : null}
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="oxp-float-bar"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={false}
          aria-label={BAR_TEXT}
        >
          <span className="oxp-float-face-wrap" aria-hidden="true">
            {loadBarVideo ? (
              <video
                className="oxp-float-face"
                src={WANDDY_WEBM}
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              />
            ) : (
              <span className="oxp-float-face oxp-float-face--ph" />
            )}
          </span>
          <OxpBarTypewriter text={BAR_TEXT} />
          <span className="oxp-float-go" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
