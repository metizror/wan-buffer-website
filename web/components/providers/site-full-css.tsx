"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ID = "site-full-css";
const HREF = "/site-full.css";

function appendLink(rel: string, id?: string) {
  const link = document.createElement("link");
  if (id) link.id = id;
  link.rel = rel;
  if (rel === "prefetch") link.as = "style";
  link.href = HREF;
  document.head.appendChild(link);
  return link;
}

/**
 * Only `/` is styled by the lean app/site-home.css that ships in the bundle.
 * Every other route also needs public/site-full.css, which the inline <head>
 * script in app/layout.tsx appends on a cold load so there is no flash of
 * unstyled content.
 *
 * That script runs once per document, so a client-side navigation away from the
 * home page never got the stylesheet — the page rendered unstyled until the
 * visitor hit refresh. This mirrors it for route changes.
 *
 * The link is deliberately never removed on the way back to `/`: site-full.css
 * is a superset of site-home.css, home's LCP rules are already `!important`,
 * and tearing a stylesheet out mid-session only buys another flash.
 */
export function SiteFullCss() {
  const pathname = usePathname();

  useEffect(() => {
    if (document.getElementById(ID)) return;

    if (pathname !== "/") {
      appendLink("stylesheet", ID);
      return;
    }

    // Still on home: warm the cache at idle so the first navigation off it is
    // styled immediately instead of waiting on a 111 KB download.
    const prefetch = () => {
      if (!document.getElementById(ID)) appendLink("prefetch");
    };
    const hasIdle = typeof window.requestIdleCallback === "function";
    const handle = hasIdle
      ? window.requestIdleCallback(prefetch, { timeout: 5000 })
      : window.setTimeout(prefetch, 5000);
    return () => {
      if (hasIdle) window.cancelIdleCallback(handle);
      else window.clearTimeout(handle);
    };
  }, [pathname]);

  return null;
}
