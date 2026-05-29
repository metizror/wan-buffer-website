import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { MultiWarehouse3plContent } from "@/components/services/multi-warehouse-3pl-content";

export const metadata: Metadata = {
  title: "Multi-Warehouse + 3PL Sync | Real-Time Fulfilment Routing | Wan Buffer",
  description:
    "Multi-warehouse orchestration and 3PL integration — intelligent order routing, real-time inventory sync across locations, carrier integration, and fulfilment automation for eCommerce and distribution businesses.",
  keywords: [
    "multi-warehouse management",
    "3PL integration",
    "fulfilment routing",
    "warehouse sync",
    "3PL sync eCommerce",
    "order routing",
    "multi-location inventory",
    "3PL ERP integration",
    "warehouse orchestration",
    "fulfilment automation",
    "Shopify multi-warehouse",
    "Odoo multi-warehouse",
    "3PL connector",
    "distributed inventory",
  ],
  openGraph: {
    type: "website",
    title: "Multi-Warehouse + 3PL Sync — Real-Time Fulfilment Routing | Wan Buffer",
    description:
      "Multi-warehouse orchestration and 3PL sync — intelligent order routing, real-time inventory across locations, and fulfilment automation.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/multi-warehouse-3pl" },
};

export default function MultiWarehouse3plPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <MultiWarehouse3plContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
