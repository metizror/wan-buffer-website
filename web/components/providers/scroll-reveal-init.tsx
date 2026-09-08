"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface WindowWithClientRuntime extends Window {
  initScrollReveal?: (root?: ParentNode | Document | null) => void;
  initHeroStatsCounters?: () => void;
  initHeroCanvas?: () => void;
}

/**
 * Re-run the parts of home-runtime.js that bind to DOM React replaces on a
 * client-side route change (home-runtime owns first paint).
 */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const w = window as WindowWithClientRuntime;
    if (typeof w.initScrollReveal !== "function") return;
    w.initScrollReveal(document);
    w.initHeroStatsCounters?.();
    // The hero <canvas> is a fresh element after every navigation back to `/`,
    // so its particle network has to be re-attached or it renders blank.
    w.initHeroCanvas?.();
  }, [pathname]);

  return null;
}
