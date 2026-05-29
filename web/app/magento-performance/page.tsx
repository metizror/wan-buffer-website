import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MagentoPerformanceContent } from "@/components/services/magento-performance-content";

export const metadata: Metadata = {
  title: "Magento Performance Optimisation | Core Web Vitals & Speed | Wan Buffer",
  description:
    "Magento 2 performance optimisation — Full Page Cache, Varnish, Redis, CDN, database tuning, image optimisation, and Core Web Vitals improvement. Sub-3-second load times for Magento stores.",
  keywords: [
    "Magento performance optimisation",
    "Magento speed optimisation",
    "Magento Core Web Vitals",
    "Magento Varnish setup",
    "Magento Redis cache",
    "Magento CDN configuration",
    "Magento page speed",
    "Magento database tuning",
    "Magento load time",
    "Adobe Commerce performance",
    "Magento FPC",
    "Magento image optimisation",
    "Magento TTFB",
    "eCommerce speed optimisation",
  ],
  openGraph: {
    type: "website",
    title: "Magento Performance Optimisation — Core Web Vitals & Speed | Wan Buffer",
    description:
      "Sub-3-second Magento stores — Full Page Cache, Varnish, Redis, CDN, and Core Web Vitals tuning for maximum eCommerce performance.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/magento-performance" },
};

export default function MagentoPerformancePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MagentoPerformanceContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
