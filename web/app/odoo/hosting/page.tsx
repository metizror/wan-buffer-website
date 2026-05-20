import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooHostingContent } from "@/components/services/odoo-hosting-content";

export const metadata: Metadata = {
  title: "Odoo Hosting | Wan Buffer",
  description:
    "Odoo hosting is an important aspect of Odoo; a descriptive overview of hosting for Odoo ERP covering online, Odoo.sh, cloud, and on-premise options.",
  keywords: [
    "odoo erp",
    "odoo hosting",
    "odoo erp hosting",
    "odoo implementation",
    "odoo service provider",
    "odoo erp company",
    "Wan Buffer",
  ],
  alternates: { canonical: "https://wanbuffer.com/odoo/hosting" },
  openGraph: {
    type: "website",
    title: "Odoo Hosting | Wan Buffer",
    description:
      "Odoo hosting is an important aspect of Odoo; a descriptive overview of hosting for Odoo ERP covering all required modes.",
    siteName: "Wan Buffer",
  },
};

export default function OdooHostingPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooHostingContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
