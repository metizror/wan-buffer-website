import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooIntegrationContent } from "@/components/services/odoo-integration-content";

export const metadata: Metadata = {
  title: "Odoo Integrations Services | Odoo Gold Partners | Wanbuffer",
  description:
    "Wanbuffer implemented a large number of integrations for Odoo with third-party applications like Payment Gateway Integrations, Social Media Integration(Facebook, messenger), Analytics(Docparser Integration) and Biometric Device(Zkteco)Integration.",
  keywords: [
    "odoo integration",
    "odoo erp integration",
    "erp integration",
    "odoo connector",
    "magento",
    "amazon",
    "open source erp integration",
    "Wanbuffer Services",
  ],
  openGraph: {
    type: "website",
    title: "Odoo Integrations Services | Odoo Gold Partners | Wanbuffer",
    description:
      "Wanbuffer implemented a large number of integrations for Odoo with third-party applications like Payment Gateway Integrations, Social Media Integration(Facebook, messenger), Analytics(Docparser Integration) and Biometric Device(Zkteco)Integration.",
    siteName: "Wan Buffer",
  },
};

export default function OdooErpIntegrationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooIntegrationContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
