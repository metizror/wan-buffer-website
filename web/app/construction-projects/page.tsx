import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ConstructionProjectsContent } from "@/components/services/construction-projects-content";

export const metadata: Metadata = {
  title: "Construction & Projects ERP | Project ERP, BOQ & Subcontractor Management — Wan Buffer",
  description:
    "End-to-end construction and project ERP with bill of quantities management, subcontractor tracking, project cost control, progress billing, material reconciliation, and real-time site analytics. For general contractors, real estate developers, and infrastructure companies.",
  keywords: [
    "construction ERP",
    "project ERP",
    "BOQ management",
    "bill of quantities software",
    "subcontractor management",
    "construction project management",
    "project cost control",
    "progress billing construction",
    "material reconciliation",
    "construction accounting",
    "Odoo construction",
    "real estate ERP",
    "infrastructure project management",
    "contractor management system",
    "construction budgeting",
    "site management ERP",
    "RA bill automation",
    "construction ERP India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Construction & Projects ERP — BOQ, Subcontractor Management & Project Cost Control | Wan Buffer",
    description:
      "Construction and project ERP with BOQ management, subcontractor tracking, progress billing, and real-time site analytics — for contractors, developers, and infrastructure companies.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/construction-projects" },
};

export default function ConstructionProjectsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ConstructionProjectsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
