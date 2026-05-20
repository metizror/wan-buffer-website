import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooConsultantContent } from "@/components/services/odoo-consultant-content";

export const metadata: Metadata = {
  title: "Odoo Consultant | Odoo Consulting Services | Wan Buffer",
  description:
    "Consult with us before taking the big leap towards Odoo. We can provide expert Odoo functional consultants as well as Odoo technical consultants for you.",
  keywords: [
    "odoo consultant",
    "Odoo functional and technical consultant",
    "odoo functional consultant",
    "odoo technical consultant",
    "odoo erp service",
    "odoo erp consultant",
    "best odoo erp consultant",
    "Wan Buffer",
    "odoo gold partner",
  ],
  alternates: { canonical: "https://wanbuffer.com/odoo/odoo-consultant" },
  openGraph: {
    type: "website",
    title: "Odoo Consultant | Odoo Consulting Services | Wan Buffer",
    description:
      "Consult with us before taking the big leap towards Odoo. We can provide expert Odoo functional consultants as well as Odoo technical consultants for you.",
    siteName: "Wan Buffer",
  },
};

export default function OdooConsultantPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooConsultantContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
