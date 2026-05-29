import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MagentoOdooContent } from "@/components/services/magento-odoo-content";

export const metadata: Metadata = {
  title: "Magento → Odoo Integration | Real-Time Inventory & Order Sync | Wan Buffer",
  description:
    "Connect Magento 2 to Odoo ERP with real-time synchronisation — products, inventory, orders, customers, and pricing. Bi-directional API integration with zero manual data entry.",
  keywords: [
    "Magento Odoo integration",
    "Magento ERP integration",
    "Magento Odoo connector",
    "Magento inventory sync",
    "Magento order sync Odoo",
    "eCommerce ERP integration",
    "Magento 2 Odoo",
    "real-time inventory sync",
    "Magento Odoo API",
    "Magento product sync",
    "eCommerce order management",
    "Magento Odoo bridge",
    "Magento stock sync",
    "Magento Odoo India",
  ],
  openGraph: {
    type: "website",
    title: "Magento → Odoo Integration — Real-Time Inventory & Order Sync | Wan Buffer",
    description:
      "Real-time Magento-to-Odoo integration — products, inventory, orders, and customers synced automatically via secure APIs.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/magento-odoo-integration" },
};

export default function MagentoOdooPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MagentoOdooContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
