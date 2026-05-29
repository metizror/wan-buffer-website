import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { RetailEcommerceContent } from "@/components/services/retail-ecommerce-content";

export const metadata: Metadata = {
  title: "Retail & eCommerce ERP | Omnichannel Management & AI Demand Forecasting — Wan Buffer",
  description:
    "End-to-end retail and eCommerce ERP with omnichannel order management, AI demand forecasting, unified inventory across online and offline channels, dynamic pricing, and intelligent customer segmentation. For D2C brands, multi-store retailers, and marketplace sellers.",
  keywords: [
    "retail ERP",
    "eCommerce ERP",
    "omnichannel ERP",
    "AI demand forecasting",
    "retail inventory management",
    "unified commerce",
    "omnichannel order management",
    "dynamic pricing AI",
    "customer segmentation AI",
    "POS ERP integration",
    "Odoo retail",
    "Shopify ERP integration",
    "Magento ERP integration",
    "retail analytics",
    "eCommerce automation",
    "multi-channel inventory sync",
    "D2C brand ERP",
    "retail India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Retail & eCommerce ERP — Omnichannel Management & AI Demand Forecasting | Wan Buffer",
    description:
      "Omnichannel ERP with AI demand forecasting, unified inventory, dynamic pricing, and intelligent customer segmentation — for D2C brands, multi-store retailers, and marketplace sellers.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/retail-ecommerce" },
};

export default function RetailEcommercePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <RetailEcommerceContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
