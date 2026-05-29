import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { TextileApparelContent } from "@/components/services/textile-apparel-content";

export const metadata: Metadata = {
  title: "Textile & Apparel ERP | Style-Level BOM, Season Planning & AI Reorder — Wan Buffer",
  description:
    "End-to-end textile and apparel ERP with style-level BOM management, season and collection planning, AI-powered reorder, size-colour matrix inventory, fabric roll tracking, and cut-plan optimisation. For garment manufacturers, fashion brands, and textile mills.",
  keywords: [
    "textile ERP",
    "apparel ERP",
    "garment manufacturing ERP",
    "style level BOM",
    "season planning ERP",
    "AI reorder textile",
    "size colour matrix",
    "fabric roll tracking",
    "cut plan optimisation",
    "fashion ERP",
    "garment production planning",
    "textile inventory management",
    "Odoo textile",
    "apparel production scheduling",
    "collection planning software",
    "fabric consumption tracking",
    "garment costing software",
    "textile India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Textile & Apparel ERP — Style-Level BOM, Season Planning & AI Reorder | Wan Buffer",
    description:
      "Textile and apparel ERP with style-level BOM, season planning, AI reorder, size-colour matrix inventory, and cut-plan optimisation — for garment manufacturers, fashion brands, and textile mills.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/textile-apparel" },
};

export default function TextileApparelPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <TextileApparelContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
