import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ShopifyAnalyticsContent } from "@/components/services/shopify-analytics-content";

export const metadata: Metadata = {
  title: "Shopify Analytics + AI | Demand Forecasting & LTV | Wan Buffer",
  description:
    "AI-powered Shopify analytics — demand forecasting, customer lifetime value prediction, cohort analysis, product performance insights, and automated reporting. Turn Shopify data into revenue growth.",
  keywords: [
    "Shopify analytics",
    "Shopify AI",
    "Shopify demand forecasting",
    "customer lifetime value Shopify",
    "Shopify reporting",
    "eCommerce analytics",
    "Shopify data analytics",
    "Shopify cohort analysis",
    "AI eCommerce insights",
    "Shopify product analytics",
    "Shopify revenue analytics",
    "Shopify customer segmentation",
    "Shopify predictive analytics",
    "Shopify dashboard",
  ],
  openGraph: {
    type: "website",
    title: "Shopify Analytics + AI — Demand Forecasting & LTV | Wan Buffer",
    description:
      "AI-powered Shopify analytics — demand forecasting, LTV prediction, and automated reporting that turns store data into growth.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/shopify-analytics-ai" },
};

export default function ShopifyAnalyticsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ShopifyAnalyticsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
