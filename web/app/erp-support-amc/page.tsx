import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ErpSupportAmcContent } from "@/components/services/erp-support-amc-content";

export const metadata: Metadata = {
  title: "ERP Support & AMC | SLA-Based Maintenance Plans | Wan Buffer",
  description:
    "SLA-based ERP support and annual maintenance contracts — bug fixes, configuration changes, version upgrades, performance monitoring, and 24/7 emergency support for Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "ERP support",
    "ERP AMC",
    "annual maintenance contract ERP",
    "Odoo support",
    "ERP maintenance",
    "SLA-based ERP support",
    "ERP managed services",
    "Odoo AMC",
    "ERP helpdesk",
    "ERP bug fixes",
    "ERP version upgrade",
    "ERP performance monitoring",
    "24/7 ERP support",
    "ERP support India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "ERP Support & AMC — SLA-Based Maintenance Plans | Wan Buffer",
    description:
      "SLA-based ERP support — bug fixes, upgrades, monitoring, and 24/7 emergency response for Odoo, Zoho, Salesforce, and SAP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/erp-support-amc" },
};

export default function ErpSupportAmcPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ErpSupportAmcContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
