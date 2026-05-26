import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MlInsightsContent } from "@/components/services/ml-insights-content";

export const metadata: Metadata = {
  title: "ML-Powered Insights | Real-Time Operational Intelligence | Wan Buffer",
  description:
    "Turn your ERP data into real-time operational intelligence with machine learning. Automated dashboards, KPI monitoring, trend detection, and decision-support systems — embedded directly into Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "ML-powered insights",
    "machine learning analytics",
    "real-time ERP analytics",
    "operational intelligence",
    "ML dashboards",
    "automated KPI monitoring",
    "trend detection ML",
    "business intelligence AI",
    "ERP reporting automation",
    "ML for business",
    "data-driven decision making",
    "real-time operational intelligence",
    "ML anomaly detection",
    "automated business insights",
  ],
  openGraph: {
    type: "website",
    title: "ML-Powered Insights — Real-Time Operational Intelligence | Wan Buffer",
    description:
      "Machine learning that transforms ERP data into real-time dashboards, automated KPIs, and proactive alerts — so your team makes decisions based on intelligence, not gut feel.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ml-powered-insights" },
};

export default function MlInsightsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MlInsightsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
