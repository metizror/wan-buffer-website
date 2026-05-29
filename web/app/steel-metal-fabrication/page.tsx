import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { SteelMetalContent } from "@/components/services/steel-metal-content";

export const metadata: Metadata = {
  title: "Steel & Metal Fabrication ERP | Heat Tracking, BOM & Production Scheduling — Wan Buffer",
  description:
    "End-to-end steel and metal fabrication ERP with heat number tracking, multi-level BOM management, production scheduling, coil and plate inventory, cut optimisation, and quality traceability. For structural steel, sheet metal, CNC machining, and metal service centres.",
  keywords: [
    "steel fabrication ERP",
    "metal fabrication ERP",
    "heat number tracking",
    "heat traceability",
    "steel BOM management",
    "production scheduling steel",
    "coil inventory management",
    "cut optimisation software",
    "metal service centre ERP",
    "structural steel ERP",
    "sheet metal ERP",
    "CNC machining ERP",
    "mill test certificate",
    "MTC tracking",
    "Odoo steel manufacturing",
    "fabrication job tracking",
    "steel inventory management",
    "metal fabrication India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Steel & Metal Fabrication ERP — Heat Tracking, BOM & Production Scheduling | Wan Buffer",
    description:
      "Steel and metal fabrication ERP with heat number tracking, multi-level BOM, production scheduling, cut optimisation, and full traceability — for structural steel, sheet metal, and metal service centres.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/steel-metal-fabrication" },
};

export default function SteelMetalFabricationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <SteelMetalContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
