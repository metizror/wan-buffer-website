import type { CaseStudyApproachIcon } from "@/lib/case-study-data";

export const CASE_STUDY_APPROACH_ICON_SRC: Record<CaseStudyApproachIcon, string> = {
  revamp: "/case-study/shared/revamp.svg",
  integration: "/case-study/shared/integration.svg",
  updates: "/case-study/shared/updates.svg",
  optimization: "/case-study/shared/optimization.svg",
};

const APPROACH_ICON_BY_TITLE: Record<string, CaseStudyApproachIcon> = {
  Revamp: "revamp",
  Integration: "integration",
  Updates: "updates",
  Optimization: "optimization",
  Marketing: "optimization",
};

export function getCaseStudyApproachIcon(title: string, icon?: CaseStudyApproachIcon): CaseStudyApproachIcon {
  if (icon) return icon;
  const key = title.trim().replace(/\s+/g, " ");
  return APPROACH_ICON_BY_TITLE[key] ?? "revamp";
}
