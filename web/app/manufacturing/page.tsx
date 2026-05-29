import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ManufacturingContent } from "@/components/services/manufacturing-content";

export const metadata: Metadata = {
  title: "Manufacturing ERP | MRP, AI Quality Gates & Predictive Maintenance — Wan Buffer",
  description:
    "End-to-end manufacturing ERP with Odoo MRP, multi-level BOM management, AI-powered quality gates, predictive maintenance, work centre routing, and autonomous procurement agents. For discrete, process, and metal fabrication manufacturing.",
  keywords: [
    "manufacturing ERP",
    "Odoo MRP",
    "MRP implementation",
    "AI quality control manufacturing",
    "predictive maintenance ERP",
    "bill of materials management",
    "BOM management",
    "work centre routing",
    "production scheduling",
    "manufacturing AI",
    "shop floor intelligence",
    "quality gates manufacturing",
    "autonomous procurement",
    "discrete manufacturing ERP",
    "process manufacturing ERP",
    "steel fabrication ERP",
    "Odoo manufacturing",
    "manufacturing India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Manufacturing ERP — MRP, AI Quality Gates & Predictive Maintenance | Wan Buffer",
    description:
      "Odoo MRP with AI shop floor intelligence, multi-level BOM management, predictive maintenance, and autonomous procurement agents — for discrete, process, and metal fabrication manufacturing.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ManufacturingContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
