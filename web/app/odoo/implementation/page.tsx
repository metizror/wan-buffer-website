import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooImplementationContent } from "@/components/services/odoo-implementation-content";

export const metadata: Metadata = {
  title: "Odoo ERP Implementation Partner | Wan Buffer",
  description:
    "Expert Odoo implementation: requirements analysis, configuration, custom development, data migration, training, go-live, and ongoing support. Odoo Gold Partner methodology tailored to your business.",
  keywords: [
    "Odoo implementation",
    "Odoo ERP implementation company",
    "Odoo partner",
    "Odoo Gold Partner",
    "Odoo migration",
    "Odoo training",
  ],
  openGraph: {
    type: "website",
    title: "Odoo ERP Implementation | Wan Buffer",
    description:
      "Structured Odoo rollout from discovery to go-live—configuration, customisation, data migration, training, and support.",
    siteName: "Wan Buffer",
  },
};

export default function OdooImplementationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooImplementationContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
