import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { IndiaMarketContent } from "@/components/services/india-market-content";

export const metadata: Metadata = {
  title: "India Market ERP | GST E-Invoicing, Razorpay & MRP/Manufacturing — Wan Buffer",
  description:
    "India-ready ERP with GST e-invoicing, e-way bill automation, Razorpay payment integration, TDS/TCS compliance, MRP and manufacturing modules, and UPI payment collection. For Indian manufacturers, traders, and service businesses across all states.",
  keywords: [
    "India ERP",
    "GST e-invoicing",
    "GST ERP India",
    "e-way bill automation",
    "Razorpay integration ERP",
    "TDS TCS compliance",
    "India manufacturing ERP",
    "MRP India",
    "Odoo India",
    "Indian accounting ERP",
    "UPI payment ERP",
    "GST return filing",
    "GSTR-1 automation",
    "India payroll EPF ESI",
    "Indian e-invoicing",
    "make in India ERP",
    "Indian business ERP",
    "ERP Gujarat Maharashtra",
  ],
  openGraph: {
    type: "website",
    title: "India Market ERP — GST E-Invoicing, Razorpay & MRP/Manufacturing | Wan Buffer",
    description:
      "India-ready ERP with GST e-invoicing, Razorpay, TDS/TCS, MRP, and payroll compliance — for manufacturers, traders, and service businesses across India.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/india-market" },
};

export default function IndiaMarketPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <IndiaMarketContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
