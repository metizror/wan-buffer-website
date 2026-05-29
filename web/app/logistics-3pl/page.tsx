import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { Logistics3plContent } from "@/components/services/logistics-3pl-content";

export const metadata: Metadata = {
  title: "Logistics & 3PL ERP | Smart WMS, Route AI & SLA Monitoring — Wan Buffer",
  description:
    "End-to-end logistics and 3PL ERP with smart warehouse management, AI-powered route optimisation, SLA monitoring, real-time shipment tracking, carrier management, and automated billing. For freight forwarders, 3PL providers, and distribution companies.",
  keywords: [
    "logistics ERP",
    "3PL ERP",
    "smart WMS logistics",
    "route optimisation AI",
    "SLA monitoring logistics",
    "shipment tracking ERP",
    "carrier management system",
    "freight forwarding ERP",
    "3PL billing automation",
    "warehouse management 3PL",
    "last mile delivery",
    "fleet management ERP",
    "Odoo logistics",
    "supply chain ERP",
    "distribution management",
    "logistics automation",
    "3PL India USA UAE",
    "transport management system",
  ],
  openGraph: {
    type: "website",
    title: "Logistics & 3PL ERP — Smart WMS, Route AI & SLA Monitoring | Wan Buffer",
    description:
      "Logistics and 3PL ERP with smart WMS, AI route optimisation, SLA monitoring, real-time tracking, and automated billing — for freight forwarders, 3PL providers, and distribution companies.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/logistics-3pl" },
};

export default function Logistics3plPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <Logistics3plContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
