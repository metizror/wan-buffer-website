import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { IndustriesContent } from "@/components/pages/industries-content";

export const metadata: Metadata = {
  title: "Industry ERP Solutions | Manufacturing, Logistics, Retail, Healthcare — Wan Buffer",
  description:
    "Purpose-built Odoo ERP + AI solutions for manufacturing, retail, logistics, healthcare, finance, and real estate. Wan Buffer delivers industry-specific ERP configurations with pre-built AI models across 20+ countries.",
  keywords: [
    "manufacturing ERP Odoo",
    "logistics ERP",
    "retail ERP AI",
    "healthcare Odoo",
    "real estate CRM Odoo",
    "ERP by industry",
  ],
  openGraph: {
    type: "website",
    title: "Industry ERP Solutions | Manufacturing, Logistics, Retail, Healthcare — Wan Buffer",
    description:
      "Purpose-built Odoo ERP + AI solutions for manufacturing, retail, logistics, healthcare, finance, and real estate. Wan Buffer delivers industry-specific ERP configurations with pre-built AI models across 20+ countries.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <IndustriesContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}

