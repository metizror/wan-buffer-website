import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { RealEstateContent } from "@/components/services/real-estate-content";

export const metadata: Metadata = {
  title: "Real Estate ERP | CRM, AI Lead Scoring & Lease Lifecycle — Wan Buffer",
  description:
    "End-to-end real estate ERP with property CRM, AI-powered lead scoring, lease lifecycle management, unit inventory, broker commission tracking, and revenue analytics. For developers, property managers, brokerages, and commercial real estate firms.",
  keywords: [
    "real estate ERP",
    "property CRM",
    "AI lead scoring real estate",
    "lease lifecycle management",
    "property management software",
    "real estate CRM",
    "unit inventory management",
    "broker commission tracking",
    "tenant management system",
    "Odoo real estate",
    "lease management software",
    "real estate analytics",
    "property sales CRM",
    "commercial real estate ERP",
    "rental management system",
    "real estate automation",
    "property developer ERP",
    "real estate India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Real Estate ERP — CRM, AI Lead Scoring & Lease Lifecycle | Wan Buffer",
    description:
      "Real estate ERP with property CRM, AI lead scoring, lease lifecycle management, and revenue analytics — for developers, property managers, and commercial real estate firms.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/real-estate" },
};

export default function RealEstatePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <RealEstateContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
