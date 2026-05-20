import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooTrainingContent } from "@/components/services/odoo-training-content";

export const metadata: Metadata = {
  title: "Odoo Training | Odoo ERP Training - Wanbuffer Services",
  description:
    "Are you interested in learning Odoo, we provide functional, technical and corporate training in Odoo and provides in deep knowledge with our free webinars.",
  keywords: [
    "training",
    "odoo training",
    "odoo functional training",
    "odoo technical training",
    "odoo corporate training",
    "elearning in odoo",
    "odoo learning",
    "odoo webinar",
    "odoo free webinar",
    "Wanbuffer Services",
  ],
  openGraph: {
    type: "website",
    title: "Odoo Training | Odoo ERP Training - Wanbuffer Services",
    description:
      "Are you interested in learning Odoo, we provide functional, technical and corporate training in Odoo and provides in deep knowledge with our free webinars.",
    siteName: "Wan Buffer",
  },
};

export default function OdooTrainingPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooTrainingContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
