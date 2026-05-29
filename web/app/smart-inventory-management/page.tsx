import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { SmartInventoryContent } from "@/components/services/smart-inventory-content";

export const metadata: Metadata = {
  title: "Smart Inventory Management | AI-Driven Stock Optimisation | Wan Buffer",
  description:
    "AI-powered inventory management that predicts demand, automates reordering, and eliminates stockouts. Real-time visibility across every warehouse, every SKU — integrated directly into Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "smart inventory management",
    "AI inventory optimisation",
    "demand-driven inventory",
    "automated reordering",
    "warehouse management AI",
    "inventory forecasting",
    "stock optimisation ERP",
    "Odoo inventory management",
    "multi-warehouse management",
    "inventory automation",
    "SKU-level forecasting",
    "safety stock AI",
    "inventory analytics",
    "real-time stock tracking",
  ],
  openGraph: {
    type: "website",
    title: "Smart Inventory Management — AI-Driven Stock Optimisation | Wan Buffer",
    description:
      "AI-powered inventory that predicts demand, automates reordering, and eliminates stockouts — integrated into your ERP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/smart-inventory-management" },
};

export default function SmartInventoryPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <SmartInventoryContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
