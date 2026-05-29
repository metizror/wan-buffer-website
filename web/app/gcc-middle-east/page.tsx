import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { GccMiddleEastContent } from "@/components/services/gcc-middle-east-content";

export const metadata: Metadata = {
  title: "GCC & Middle East ERP | Arabic UI, GCC VAT & Multi-Currency — Wan Buffer",
  description:
    "GCC and Middle East ERP localisation with Arabic RTL interface, GCC VAT compliance, multi-currency operations, WPS payroll, e-invoicing, and free zone configurations. For businesses in UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
  keywords: [
    "GCC ERP",
    "Middle East ERP",
    "Arabic UI ERP",
    "GCC VAT compliance",
    "UAE VAT ERP",
    "Saudi VAT ZATCA",
    "multi-currency ERP",
    "WPS payroll UAE",
    "Arabic RTL interface",
    "e-invoicing Middle East",
    "Odoo UAE",
    "Odoo Saudi Arabia",
    "free zone ERP",
    "Dubai ERP",
    "Riyadh ERP",
    "Qatar ERP",
    "GCC localisation",
    "Middle East business ERP",
  ],
  openGraph: {
    type: "website",
    title: "GCC & Middle East ERP — Arabic UI, GCC VAT & Multi-Currency | Wan Buffer",
    description:
      "GCC and Middle East ERP with Arabic RTL interface, VAT compliance, multi-currency, WPS payroll, and free zone configurations — for UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/gcc-middle-east" },
};

export default function GccMiddleEastPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <GccMiddleEastContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
