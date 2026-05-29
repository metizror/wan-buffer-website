import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { EngagementContent } from "@/components/services/engagement-content";

export const metadata: Metadata = {
  title: "Engagement Models | Project-Based, AI Agent + Human Team, Dedicated Team & Retainer — Wan Buffer",
  description:
    "Four flexible engagement models — project-based delivery, AI agent + human team hybrid, dedicated offshore teams, and retainer partnerships. Choose the model that fits your ERP and AI challenge, timeline, and budget.",
  keywords: [
    "engagement models",
    "ERP engagement model",
    "project based engagement",
    "dedicated development team",
    "AI agent human team",
    "offshore ERP team",
    "retainer model ERP",
    "hire ERP developers",
    "hire AI engineers",
    "Odoo development team",
    "ERP consulting engagement",
    "managed ERP services",
    "outsource ERP development",
    "AI automation team",
    "flexible engagement",
    "ERP support retainer",
    "dedicated team India",
    "ERP partnership model",
  ],
  openGraph: {
    type: "website",
    title: "Engagement Models — Project-Based, AI Agent + Human Team, Dedicated Team & Retainer | Wan Buffer",
    description:
      "Four flexible engagement models for ERP and AI projects — from fixed-scope delivery to our breakthrough AI Agent + Human Team hybrid model.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/engagement" },
};

export default function EngagementPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <EngagementContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
