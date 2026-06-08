import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooAppsCatalogContent } from "@/components/services/odoo-apps-catalog-content";

export const metadata: Metadata = {
  title: "Odoo Apps by Wan Buffer | Module Catalog",
  description:
    "Browse Wan Buffer Odoo apps with screenshots, setup guides, and FAQs. Production-ready modules for Odoo 17, 18, and 19 with 365 days of support on the Apps Store.",
  keywords: [
    "Wan Buffer Odoo apps",
    "Odoo modules",
    "Odoo Apps Store",
    "Activity Management Odoo",
    "Odoo app development",
  ],
  openGraph: {
    type: "website",
    title: "Odoo Apps by Wan Buffer",
    description:
      "Production-ready Odoo modules with 365-day support—browse our catalog and buy on the Odoo Apps Store.",
    siteName: "Wan Buffer",
  },
};

export default function OdooAppsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooAppsCatalogContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
