import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiGovernanceContent } from "@/components/services/ai-governance-content";

export const metadata: Metadata = {
  title: "AI Governance & Ethics | Responsible AI Deployment | Wan Buffer",
  description:
    "Deploy AI responsibly with enterprise governance frameworks. Bias auditing, explainability, compliance automation, and ethical AI guidelines — built into every model, pipeline, and agent we deliver.",
  keywords: [
    "AI governance",
    "AI ethics",
    "responsible AI",
    "AI compliance",
    "AI bias auditing",
    "explainable AI",
    "AI risk management",
    "GDPR AI compliance",
    "SOC 2 AI",
    "AI transparency",
    "ethical AI framework",
    "AI audit trail",
    "enterprise AI governance",
    "AI regulation compliance",
  ],
  openGraph: {
    type: "website",
    title: "AI Governance & Ethics — Responsible AI Deployment | Wan Buffer",
    description:
      "Enterprise AI governance frameworks — bias auditing, explainability, compliance automation, and ethical guidelines built into every AI system we deploy.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-governance" },
};

export default function AiGovernancePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiGovernanceContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
