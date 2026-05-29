import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ShopifyOdooContent } from "@/components/services/shopify-odoo-content";

export const metadata: Metadata = {
  title: "Shopify → Odoo Integration | Inventory, Orders & Customers | Wan Buffer",
  description:
    "Real-time Shopify-to-Odoo integration — products, inventory, orders, customers, and payments synced automatically. Bi-directional API integration for unified eCommerce and ERP operations.",
  keywords: [
    "Shopify Odoo integration",
    "Shopify ERP integration",
    "Shopify Odoo connector",
    "Shopify inventory sync",
    "Shopify order sync Odoo",
    "eCommerce ERP bridge",
    "Shopify Odoo API",
    "Shopify product sync",
    "Shopify stock management",
    "Shopify Odoo India",
    "real-time Shopify sync",
    "Shopify order management",
    "Shopify Odoo middleware",
    "eCommerce operations",
  ],
  openGraph: {
    type: "website",
    title: "Shopify → Odoo Integration — Inventory, Orders & Customers | Wan Buffer",
    description:
      "Real-time Shopify-to-Odoo sync — products, inventory, orders, and customers. One source of truth for eCommerce and operations.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/shopify-odoo-integration" },
};

export default function ShopifyOdooPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ShopifyOdooContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
