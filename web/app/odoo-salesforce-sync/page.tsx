import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooSalesforceSyncContent } from "@/components/services/odoo-salesforce-sync-content";

export const metadata: Metadata = {
  title: "Odoo ↔ Salesforce Sync | Bi-Directional CRM + ERP Bridge | Wan Buffer",
  description:
    "Bi-directional real-time sync between Odoo ERP and Salesforce CRM. Contacts, leads, opportunities, sales orders, invoices, and products — synced automatically with conflict resolution, field mapping, and zero data loss.",
  keywords: [
    "Odoo Salesforce integration",
    "Odoo Salesforce sync",
    "CRM ERP integration",
    "Odoo Salesforce connector",
    "bi-directional CRM sync",
    "Salesforce ERP bridge",
    "Odoo Salesforce data sync",
    "CRM to ERP integration",
    "Salesforce Odoo API",
    "real-time CRM sync",
    "Odoo Salesforce middleware",
    "ERP CRM connector",
    "Salesforce Odoo migration",
    "bi-directional data integration",
  ],
  openGraph: {
    type: "website",
    title: "Odoo ↔ Salesforce Sync — Bi-Directional CRM + ERP Bridge | Wan Buffer",
    description:
      "Real-time bi-directional sync between Odoo and Salesforce. Contacts, leads, orders, invoices — one source of truth across CRM and ERP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/odoo-salesforce-sync" },
};

export default function OdooSalesforceSyncPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooSalesforceSyncContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
