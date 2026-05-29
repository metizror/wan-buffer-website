import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ErpConsultingContent } from "@/components/services/erp-consulting-content";

export const metadata: Metadata = {
  title: "ERP Consulting | Scope, Roadmap & Vendor Selection | Wan Buffer",
  description:
    "Expert ERP consulting services — business process audit, vendor selection, implementation roadmap, change management, and ROI planning. Platform-agnostic guidance for Odoo, Zoho, Salesforce, and SAP deployments.",
  keywords: [
    "ERP consulting",
    "ERP consulting services",
    "ERP vendor selection",
    "ERP implementation roadmap",
    "ERP business analysis",
    "ERP strategy",
    "ERP consulting India",
    "ERP consulting USA",
    "Odoo consulting",
    "ERP ROI planning",
    "ERP change management",
    "ERP readiness assessment",
    "enterprise resource planning consulting",
    "ERP digital transformation",
  ],
  openGraph: {
    type: "website",
    title: "ERP Consulting — Scope, Roadmap & Vendor Selection | Wan Buffer",
    description:
      "Platform-agnostic ERP consulting — business audit, vendor selection, roadmap, and ROI planning before a single line of code is written.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/erp-consulting" },
};

export default function ErpConsultingPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ErpConsultingContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
