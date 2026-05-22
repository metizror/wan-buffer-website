import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooCustomizationContent } from "@/components/services/odoo-customization-content";

export const metadata: Metadata = {
  title: "Odoo ERP Customization & Installation | Wan Buffer",
  description:
    "Odoo customization and installation: requirement gathering, scope and feasibility analysis, development, testing, and delivery—tailored to your business needs.",
  keywords: [
    "Odoo customization",
    "Odoo installation",
    "Odoo ERP customization",
    "Odoo partner",
    "Odoo custom modules",
    "Odoo development",
  ],
  openGraph: {
    type: "website",
    title: "Odoo Customization & Installation | Wan Buffer",
    description:
      "Tailored Odoo applications—from requirements and gap analysis through development, testing, and delivery.",
    siteName: "Wan Buffer",
  },
};

export default function OdooCustomizationInstallationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooCustomizationContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
