import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { PredictiveMaintenanceContent } from "@/components/services/predictive-maintenance-content";

export const metadata: Metadata = {
  title: "Predictive Maintenance | AI-Triggered Work Orders | Wan Buffer",
  description:
    "Forecast equipment failures before they happen with AI-powered predictive maintenance. Sensor data analysis, failure prediction, automated work orders, and maintenance scheduling — integrated into Odoo, SAP, and your ERP.",
  keywords: [
    "predictive maintenance",
    "AI maintenance",
    "equipment failure prediction",
    "predictive maintenance ERP",
    "maintenance scheduling AI",
    "condition-based maintenance",
    "IoT predictive maintenance",
    "Odoo maintenance module",
    "automated work orders",
    "machine health monitoring",
    "industrial AI maintenance",
    "MTBF prediction",
    "asset lifecycle management",
    "maintenance optimisation",
  ],
  openGraph: {
    type: "website",
    title: "Predictive Maintenance — AI-Triggered Work Orders | Wan Buffer",
    description:
      "AI that predicts equipment failures before they happen. Sensor data analysis, automated work orders, and maintenance scheduling — eliminating unplanned downtime.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/predictive-maintenance" },
};

export default function PredictiveMaintenancePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <PredictiveMaintenanceContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
