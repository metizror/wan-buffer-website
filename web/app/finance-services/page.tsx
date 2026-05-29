import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { FinanceServicesContent } from "@/components/services/finance-services-content";

export const metadata: Metadata = {
  title: "Finance & Services ERP | Auto-Reconcile, Fraud Detection & Lead Scoring — Wan Buffer",
  description:
    "End-to-end finance and professional services ERP with automated bank reconciliation, AI-powered fraud detection, predictive lead scoring, revenue recognition, and compliance-ready reporting. For financial institutions, consulting firms, and service-based businesses.",
  keywords: [
    "finance ERP",
    "financial services ERP",
    "auto reconciliation",
    "bank reconciliation automation",
    "fraud detection AI",
    "lead scoring AI",
    "revenue recognition ERP",
    "professional services ERP",
    "consulting firm ERP",
    "financial compliance",
    "Odoo finance",
    "accounts receivable automation",
    "payment reconciliation",
    "anti money laundering",
    "AML compliance",
    "KYC automation",
    "financial analytics",
    "finance ERP India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Finance & Services ERP — Auto-Reconcile, Fraud Detection & Lead Scoring | Wan Buffer",
    description:
      "Finance and services ERP with automated reconciliation, AI fraud detection, predictive lead scoring, and compliance reporting — for financial institutions, consulting firms, and service businesses.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/finance-services" },
};

export default function FinanceServicesPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <FinanceServicesContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
