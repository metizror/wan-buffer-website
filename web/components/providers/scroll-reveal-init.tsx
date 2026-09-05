"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface WindowWithClientRuntime extends Window {
  initScrollReveal?: (root?: ParentNode | Document | null) => void;
  initHeroStatsCounters?: () => void;
}

/** Re-run scroll reveal after client-side route changes (home-runtime owns first paint). */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const w = window as WindowWithClientRuntime;
    if (typeof w.initScrollReveal !== "function") return;
    w.initScrollReveal(document);
    w.initHeroStatsCounters?.();
  }, [pathname]);

  return null;
}
