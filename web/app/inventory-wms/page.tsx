import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { InventoryWmsContent } from "@/components/services/inventory-wms-content";

export const metadata: Metadata = {
  title: "Inventory & WMS | Multi-Warehouse Management | Wan Buffer",
  description:
    "End-to-end inventory and warehouse management — multi-warehouse operations, bin location tracking, lot & serial control, barcode scanning, pick-pack-ship workflows, and real-time stock visibility. Integrated with Odoo, Zoho, and SAP.",
  keywords: [
    "inventory management",
    "warehouse management system",
    "WMS implementation",
    "multi-warehouse management",
    "bin location tracking",
    "lot serial tracking",
    "barcode inventory",
    "pick pack ship",
    "Odoo WMS",
    "inventory ERP",
    "warehouse automation",
    "stock management",
    "inventory tracking system",
    "WMS India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Inventory & WMS — Multi-Warehouse Management | Wan Buffer",
    description:
      "Multi-warehouse inventory and WMS — bin locations, lot tracking, barcode scanning, and pick-pack-ship workflows integrated into your ERP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/inventory-wms" },
};

export default function InventoryWmsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <InventoryWmsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
