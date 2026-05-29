import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HealthcareContent } from "@/components/services/healthcare-content";

export const metadata: Metadata = {
  title: "Healthcare ERP | Patient Flow, Billing Automation & Scheduling AI — Wan Buffer",
  description:
    "End-to-end healthcare ERP with patient flow management, automated billing and claims processing, AI-powered scheduling, electronic health records integration, and compliance-ready reporting. For hospitals, clinics, diagnostic centres, and multi-location healthcare groups.",
  keywords: [
    "healthcare ERP",
    "hospital management system",
    "patient flow management",
    "billing automation healthcare",
    "scheduling AI healthcare",
    "claims processing automation",
    "electronic health records",
    "EHR integration",
    "clinic management software",
    "hospital billing system",
    "patient appointment scheduling",
    "healthcare compliance",
    "HIPAA compliant ERP",
    "Odoo healthcare",
    "diagnostic centre ERP",
    "revenue cycle management",
    "healthcare analytics",
    "healthcare India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Healthcare ERP — Patient Flow, Billing Automation & Scheduling AI | Wan Buffer",
    description:
      "Healthcare ERP with patient flow management, automated billing, AI scheduling, EHR integration, and compliance reporting — for hospitals, clinics, and diagnostic centres.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/healthcare" },
};

export default function HealthcarePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HealthcareContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
