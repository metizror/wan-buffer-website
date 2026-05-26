import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { PredictiveAnalyticsContent } from "@/components/services/predictive-analytics-content";

export const metadata: Metadata = {
  title: "Predictive Analytics | AI-Powered Business Forecasting | Wan Buffer",
  description:
    "Transform raw ERP data into accurate business forecasts with AI-powered predictive analytics. Demand forecasting, anomaly detection, churn prediction, and inventory optimisation — integrated directly into Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "predictive analytics",
    "AI forecasting",
    "demand forecasting",
    "business intelligence",
    "predictive analytics ERP",
    "AI-powered analytics",
    "anomaly detection",
    "churn prediction",
    "inventory forecasting",
    "predictive maintenance",
    "ML analytics",
    "ERP analytics",
    "sales forecasting AI",
    "predictive modelling services",
  ],
  openGraph: {
    type: "website",
    title: "Predictive Analytics — AI-Powered Business Forecasting | Wan Buffer",
    description:
      "Turn your ERP data into accurate forecasts. AI-powered demand prediction, anomaly detection, and churn analysis — embedded directly in your business systems.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/predictive-analytics" },
};

export default function PredictiveAnalyticsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <PredictiveAnalyticsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
