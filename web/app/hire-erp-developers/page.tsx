import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HireErpContent } from "@/components/services/hire-erp-content";

export const metadata: Metadata = {
  title: "Hire ERP Developers | Odoo, Zoho & Salesforce Engineers — Remote, Dedicated — Wan Buffer",
  description:
    "Hire pre-vetted ERP developers — Odoo, Zoho, and Salesforce functional consultants and technical engineers. 100% dedicated, embedded in your workflow, onboarded in 1–2 weeks. Scale month-to-month from India.",
  keywords: [
    "hire ERP developers",
    "hire Odoo developers",
    "hire Odoo programmer",
    "Odoo developer India",
    "hire Zoho developer",
    "hire Salesforce developer",
    "remote ERP developer",
    "dedicated ERP developer",
    "ERP developer outsourcing",
    "Odoo functional consultant",
    "Odoo technical developer",
    "offshore Odoo developer",
    "hire ERP consultant",
    "Odoo Python developer",
    "ERP staff augmentation",
    "hire dedicated developer India",
    "Odoo developer hourly",
    "hire ERP developer USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Hire ERP Developers — Odoo, Zoho & Salesforce Engineers | Wan Buffer",
    description:
      "Pre-vetted Odoo, Zoho, and Salesforce developers — 100% dedicated, onboarded in 1–2 weeks, scale month-to-month.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/hire-erp-developers" },
};

export default function HireErpDevelopersPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HireErpContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
