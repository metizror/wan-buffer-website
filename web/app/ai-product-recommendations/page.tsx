import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiRecommendationsContent } from "@/components/services/ai-recommendations-content";

export const metadata: Metadata = {
  title: "AI Product Recommendations | Personalisation Engine | Wan Buffer",
  description:
    "AI-powered product recommendation engine for eCommerce — personalised suggestions, frequently bought together, trending products, and cross-sell/upsell automation. Increase average order value by 25%+.",
  keywords: [
    "AI product recommendations",
    "eCommerce personalisation",
    "product recommendation engine",
    "personalisation AI",
    "frequently bought together",
    "cross-sell upsell AI",
    "Shopify recommendations",
    "Magento product suggestions",
    "eCommerce AI",
    "recommendation engine",
    "product personalisation",
    "AI-powered eCommerce",
    "average order value",
    "conversion optimisation AI",
  ],
  openGraph: {
    type: "website",
    title: "AI Product Recommendations — Personalisation Engine | Wan Buffer",
    description:
      "AI-powered product recommendations — personalised suggestions, cross-sell, and upsell automation that increase AOV and conversion rates.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-product-recommendations" },
};

export default function AiRecommendationsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiRecommendationsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
