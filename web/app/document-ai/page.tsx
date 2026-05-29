import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { DocumentAiContent } from "@/components/services/document-ai-content";

export const metadata: Metadata = {
  title: "Document AI | Intelligent Document Processing, OCR & Data Extraction — Wan Buffer",
  description:
    "AI-powered document processing with intelligent OCR, automated data extraction, invoice parsing, contract analysis, and ERP auto-posting. Reduce manual data entry by 90% with Document AI integrated into your Odoo, Zoho, or SAP workflows.",
  keywords: [
    "document AI",
    "intelligent document processing",
    "OCR automation",
    "AI data extraction",
    "invoice processing AI",
    "automated invoice parsing",
    "contract analysis AI",
    "document classification",
    "ERP document automation",
    "Odoo document AI",
    "purchase order extraction",
    "receipt scanning AI",
    "AI document management",
    "IDP solution",
    "document digitisation",
    "unstructured data extraction",
    "AI OCR ERP integration",
    "document AI India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Document AI — Intelligent Document Processing, OCR & Data Extraction | Wan Buffer",
    description:
      "AI-powered document processing with OCR, automated extraction, invoice parsing, and ERP auto-posting — reduce manual data entry by 90%.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/document-ai" },
};

export default function DocumentAiPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <DocumentAiContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
