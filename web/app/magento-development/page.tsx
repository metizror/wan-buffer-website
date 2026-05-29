import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MagentoDevContent } from "@/components/services/magento-dev-content";

export const metadata: Metadata = {
  title: "Magento Development | Custom Themes & Module Development | Wan Buffer",
  description:
    "Expert Magento 2 development services — custom theme design, module development, performance optimisation, ERP integration, and migration. High-performance eCommerce stores built for scale.",
  keywords: [
    "Magento development",
    "Magento 2 development",
    "Magento custom theme",
    "Magento module development",
    "Magento eCommerce",
    "Magento store setup",
    "Magento developer",
    "Magento ERP integration",
    "Magento performance optimisation",
    "Magento migration",
    "Adobe Commerce development",
    "Magento India",
    "Magento customisation",
    "eCommerce development",
  ],
  openGraph: {
    type: "website",
    title: "Magento Development — Custom Themes & Module Development | Wan Buffer",
    description:
      "Magento 2 development — custom themes, modules, performance tuning, and ERP integration for high-performance eCommerce.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/magento-development" },
};

export default function MagentoDevPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MagentoDevContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
