import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ZohoCrmContent } from "@/components/services/zoho-crm-content";

export const metadata: Metadata = {
  title: "Zoho CRM Implementation | Sales Pipeline & Automation | Wan Buffer",
  description:
    "Expert Zoho CRM implementation services — sales pipeline configuration, workflow automation, third-party integration, custom module development, and data migration. End-to-end Zoho CRM setup for businesses in USA, India, UAE, and Europe.",
  keywords: [
    "Zoho CRM implementation",
    "Zoho CRM setup",
    "Zoho CRM customisation",
    "Zoho development services",
    "Zoho CRM integration",
    "Zoho CRM consulting",
    "Zoho sales pipeline",
    "Zoho CRM automation",
    "Zoho partner",
    "Zoho CRM migration",
    "CRM implementation services",
    "Zoho One implementation",
    "Zoho CRM for business",
    "Zoho CRM India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Zoho CRM Implementation — Sales Pipeline & Automation | Wan Buffer",
    description:
      "End-to-end Zoho CRM implementation — pipeline setup, workflow automation, integrations, and migration. From first deal to full-scale CRM operations.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/zoho-crm-implementation" },
};

export default function ZohoCrmPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ZohoCrmContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
