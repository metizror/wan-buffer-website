import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AutoInvoiceContent } from "@/components/services/auto-invoice-content";

export const metadata: Metadata = {
  title: "Automated Invoice Processing | AI OCR + 3-Way Match | Wan Buffer",
  description:
    "Automate invoice processing end to end with AI-powered OCR, intelligent data extraction, 3-way matching, and approval routing. Process invoices in seconds — not days. Integrated with Odoo, Zoho, SAP, and QuickBooks.",
  keywords: [
    "automated invoice processing",
    "AI invoice processing",
    "OCR invoice automation",
    "invoice data extraction",
    "3-way invoice matching",
    "accounts payable automation",
    "invoice approval workflow",
    "ERP invoice processing",
    "Odoo invoice automation",
    "AI-powered AP",
    "invoice OCR software",
    "touchless invoice processing",
    "invoice validation AI",
    "automated accounts payable",
  ],
  openGraph: {
    type: "website",
    title: "Automated Invoice Processing — AI OCR + 3-Way Match | Wan Buffer",
    description:
      "AI-powered invoice processing that extracts, validates, matches, and routes invoices for approval in seconds — not days.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/automated-invoice-processing" },
};

export default function AutoInvoicePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AutoInvoiceContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
