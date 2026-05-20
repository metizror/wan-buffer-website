"use client";

import { useEffect } from "react";

interface WindowWithFaqInit extends Window {
  initFaqAccordion?: (root?: ParentNode | Document | null) => void;
}

/** Re-sync FAQ panel inline heights after client navigation once `home-runtime.js` is loaded. */
export function useFaqAccordionInit(listElementId = "faqList") {
  useEffect(() => {
    const run = () => {
      const w = window as WindowWithFaqInit;
      const root = document.getElementById(listElementId);
      w.initFaqAccordion?.(root ?? document);
    };
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, [listElementId]);
}
