import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { UsaEuropeContent } from "@/components/services/usa-europe-content";

export const metadata: Metadata = {
  title: "USA & Europe ERP | Salesforce Sync, GDPR, EU VAT & Tax Compliance — Wan Buffer",
  description:
    "USA and Europe ERP localisation with Salesforce CRM sync, GDPR compliance, EU VAT OSS, US multi-state sales tax, SOX reporting, and multi-currency operations. For businesses operating across North America and the European Union.",
  keywords: [
    "USA ERP",
    "Europe ERP",
    "Salesforce ERP sync",
    "GDPR compliance ERP",
    "EU VAT ERP",
    "US sales tax ERP",
    "multi-state tax compliance",
    "SOX compliance ERP",
    "Odoo USA",
    "Odoo Europe",
    "EU VAT OSS",
    "Avalara integration",
    "Stripe ERP integration",
    "GDPR data protection",
    "transatlantic ERP",
    "US payroll ERP",
    "European localisation",
    "USA Europe business ERP",
  ],
  openGraph: {
    type: "website",
    title: "USA & Europe ERP — Salesforce Sync, GDPR, EU VAT & Tax Compliance | Wan Buffer",
    description:
      "USA and Europe ERP with Salesforce sync, GDPR, EU VAT OSS, US multi-state sales tax, and SOX compliance — for businesses operating across North America and Europe.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/usa-europe" },
};

export default function UsaEuropePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <UsaEuropeContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
