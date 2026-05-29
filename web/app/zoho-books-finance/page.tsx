import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ZohoBooksContent } from "@/components/services/zoho-books-content";

export const metadata: Metadata = {
  title: "Zoho Books & Finance | Accounting, Invoicing & GST | Wan Buffer",
  description:
    "Expert Zoho Books implementation — automated invoicing, bank reconciliation, GST/VAT compliance, expense management, and financial reporting. End-to-end accounting automation for businesses in India, USA, UAE, and GCC.",
  keywords: [
    "Zoho Books implementation",
    "Zoho Books setup",
    "Zoho accounting",
    "Zoho invoicing",
    "Zoho GST compliance",
    "Zoho Books integration",
    "Zoho finance automation",
    "Zoho bank reconciliation",
    "cloud accounting India",
    "Zoho Books customisation",
    "automated invoicing",
    "Zoho expense management",
    "Zoho financial reporting",
    "Zoho Books India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Zoho Books & Finance — Accounting, Invoicing & GST | Wan Buffer",
    description:
      "End-to-end Zoho Books implementation — automated invoicing, bank reconciliation, GST/VAT compliance, and financial reporting for growing businesses.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/zoho-books-finance" },
};

export default function ZohoBooksPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ZohoBooksContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
