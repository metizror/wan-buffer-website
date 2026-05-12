import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooMigrationContent } from "@/components/services/odoo-migration-content";

export const metadata: Metadata = {
  title: "Odoo Migration | Odoo Migration Service | Wan Buffer",
  description:
    "Odoo migration service: upgrade safely with partner-led data transfer, app compatibility work, and rigorous testing—so reports, finance, and add-ons stay usable on new Odoo versions.",
  keywords: [
    "Odoo migration",
    "Odoo migration service",
    "Odoo upgrade",
    "Odoo partner",
    "Odoo data migration",
    "Odoo version upgrade",
  ],
  openGraph: {
    type: "website",
    title: "Odoo Migration Service | Wan Buffer",
    description:
      "Migrate Odoo with care for data, custom apps, and validation—trained Odoo partners for upgrades and new-version rollouts.",
    siteName: "Wan Buffer",
  },
};

export default function OdooMigrationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooMigrationContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
