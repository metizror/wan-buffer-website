import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { EcommerceSeoContent } from "@/components/services/ecommerce-seo-content";

export const metadata: Metadata = {
  title: "eCommerce SEO & CRO | GTM, Schema & Conversion Rate | Wan Buffer",
  description:
    "eCommerce SEO and conversion rate optimisation — technical SEO, schema markup, Core Web Vitals, A/B testing, checkout optimisation, and analytics setup for Shopify, Magento, and WooCommerce stores.",
  keywords: [
    "eCommerce SEO",
    "conversion rate optimisation",
    "CRO eCommerce",
    "Shopify SEO",
    "Magento SEO",
    "technical SEO eCommerce",
    "schema markup eCommerce",
    "Core Web Vitals",
    "A/B testing eCommerce",
    "checkout optimisation",
    "GTM eCommerce",
    "eCommerce analytics",
    "product page SEO",
    "eCommerce conversion",
  ],
  openGraph: {
    type: "website",
    title: "eCommerce SEO & CRO — GTM, Schema & Conversion Rate | Wan Buffer",
    description:
      "Technical SEO, schema markup, and conversion optimisation for eCommerce — more traffic, higher conversion, better revenue.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ecommerce-seo-cro" },
};

export default function EcommerceSeoPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <EcommerceSeoContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
