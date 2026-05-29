import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { RpaProcessMiningContent } from "@/components/services/rpa-process-mining-content";

export const metadata: Metadata = {
  title: "RPA & Process Mining | Automate Repetitive ERP Tasks | Wan Buffer",
  description:
    "Discover hidden inefficiencies with process mining and eliminate them with robotic process automation. End-to-end RPA for Odoo, Zoho, Salesforce, and SAP — from process discovery to bot deployment.",
  keywords: [
    "RPA services",
    "robotic process automation",
    "process mining",
    "ERP automation",
    "RPA for Odoo",
    "business process automation",
    "task automation ERP",
    "process discovery",
    "RPA bot development",
    "intelligent automation",
    "process mining ERP",
    "RPA consulting",
    "automated ERP workflows",
    "digital process automation",
  ],
  openGraph: {
    type: "website",
    title: "RPA & Process Mining — Automate Repetitive ERP Tasks | Wan Buffer",
    description:
      "Process mining reveals what's broken. RPA fixes it. End-to-end automation for ERP tasks — from discovery to production bots.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/rpa-process-mining" },
};

export default function RpaProcessMiningPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <RpaProcessMiningContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
