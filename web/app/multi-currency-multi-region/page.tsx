import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MultiCurrencyContent } from "@/components/services/multi-currency-content";

export const metadata: Metadata = {
  title: "Multi-Currency & Multi-Region | International eCommerce | Wan Buffer",
  description:
    "Sell globally with multi-currency pricing, regional tax compliance, localised storefronts, and geo-based shipping rules. Shopify Markets, Magento multi-store, and Odoo multi-company — configured for India, USA, UAE, GCC, and Europe.",
  keywords: [
    "multi-currency eCommerce",
    "multi-region eCommerce",
    "international eCommerce",
    "Shopify Markets",
    "Magento multi-store",
    "multi-currency Shopify",
    "GCC eCommerce",
    "India eCommerce localisation",
    "EU VAT eCommerce",
    "cross-border eCommerce",
    "eCommerce localisation",
    "multi-currency pricing",
    "regional tax compliance",
    "global eCommerce setup",
  ],
  openGraph: {
    type: "website",
    title: "Multi-Currency & Multi-Region — International eCommerce | Wan Buffer",
    description:
      "Multi-currency, multi-region eCommerce — localised pricing, tax compliance, and storefronts for India, USA, UAE, GCC, and Europe.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/multi-currency-multi-region" },
};

export default function MultiCurrencyPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MultiCurrencyContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
