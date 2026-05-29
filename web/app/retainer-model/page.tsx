import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { RetainerModelContent } from "@/components/services/retainer-model-content";

export const metadata: Metadata = {
  title: "Retainer Model | Ongoing ERP Support, AI Optimisation & Priority SLA — Wan Buffer",
  description:
    "Ongoing ERP support and AI optimisation with priority SLA, quarterly system health audits, proactive Odoo upgrade planning, and flexible monthly hours. A strategic long-term partnership for post-implementation and platform evolution.",
  keywords: [
    "retainer model",
    "ERP support retainer",
    "ongoing ERP maintenance",
    "ERP managed services",
    "Odoo support plan",
    "priority SLA ERP",
    "ERP annual maintenance",
    "AMC ERP support",
    "managed ERP services",
    "ERP health audit",
    "Odoo upgrade planning",
    "ERP optimisation",
    "monthly ERP support",
    "ERP retainer India",
    "post implementation support",
    "ERP bug fix SLA",
    "strategic ERP partnership",
    "retainer model India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Retainer Model — Ongoing ERP Support, AI Optimisation & Priority SLA | Wan Buffer",
    description:
      "Ongoing ERP support with priority SLA, quarterly health audits, and proactive upgrade planning — a strategic long-term partnership.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/retainer-model" },
};

export default function RetainerModelPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <RetainerModelContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
