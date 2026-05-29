import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { SalesforceCrmContent } from "@/components/services/salesforce-crm-content";

export const metadata: Metadata = {
  title: "Salesforce CRM Setup | B2B Sales & Lead Management | Wan Buffer",
  description:
    "Expert Salesforce CRM setup and implementation — Sales Cloud, Service Cloud, Marketing Cloud, and custom Lightning development. Pipeline configuration, lead management, workflow automation, and third-party integration for B2B businesses.",
  keywords: [
    "Salesforce CRM setup",
    "Salesforce implementation",
    "Salesforce consulting",
    "Sales Cloud implementation",
    "Service Cloud setup",
    "Salesforce customisation",
    "Salesforce integration",
    "Salesforce Lightning development",
    "Salesforce data migration",
    "Salesforce B2B",
    "Salesforce CRM India",
    "Salesforce partner",
    "CRM implementation services",
    "Salesforce automation",
  ],
  openGraph: {
    type: "website",
    title: "Salesforce CRM Setup — B2B Sales & Lead Management | Wan Buffer",
    description:
      "End-to-end Salesforce CRM setup — Sales Cloud, Service Cloud, Lightning development, and integration. From lead capture to closed deal.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/salesforce-crm-setup" },
};

export default function SalesforceCrmPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <SalesforceCrmContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
