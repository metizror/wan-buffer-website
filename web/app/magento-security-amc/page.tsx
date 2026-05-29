import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MagentoSecurityContent } from "@/components/services/magento-security-content";

export const metadata: Metadata = {
  title: "Magento Security & AMC | Patches, PCI & Maintenance | Wan Buffer",
  description:
    "Magento 2 security services and annual maintenance — security patches, PCI DSS compliance, malware scanning, SSL management, WAF configuration, and SLA-based AMC plans for Adobe Commerce stores.",
  keywords: [
    "Magento security",
    "Magento AMC",
    "Magento security patches",
    "PCI compliance Magento",
    "Magento maintenance",
    "Magento malware removal",
    "Magento SSL",
    "Magento WAF",
    "Adobe Commerce security",
    "Magento annual maintenance",
    "eCommerce security",
    "Magento vulnerability scanning",
    "Magento security audit",
    "Magento support plan",
  ],
  openGraph: {
    type: "website",
    title: "Magento Security & AMC — Patches, PCI & Maintenance | Wan Buffer",
    description:
      "Magento security — patches, PCI compliance, malware scanning, and SLA-based AMC plans. Keep your store secure and maintained.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/magento-security-amc" },
};

export default function MagentoSecurityPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MagentoSecurityContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
