"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface WindowWithClientRuntime extends Window {
  initScrollReveal?: (root?: ParentNode | Document | null) => void;
  initHeroStatsCounters?: () => void;
}

/** Re-run scroll reveal + homepage hero counters after client-side route changes. */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const run = () => {
      if (cancelled) return;
      const w = window as WindowWithClientRuntime;
      if (typeof w.initScrollReveal === "function") {
        w.initScrollReveal(document);
        w.initHeroStatsCounters?.();
        return;
      }
      if (attempts < 40) {
        attempts += 1;
        window.setTimeout(run, 50);
      }
    };

    requestAnimationFrame(() => requestAnimationFrame(run));

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}
