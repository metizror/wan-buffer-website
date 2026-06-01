import type { Metadata } from "next";
import Script from "next/script";

import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { GdprContent } from "@/components/pages/gdpr-content";

export const metadata: Metadata = {
  title: "GDPR Compliance | Wan Buffer Services Pvt. Ltd.",
  description:
    "Learn how Wan Buffer complies with the General Data Protection Regulation (GDPR) to protect your personal data, your rights, and our data processing practices.",
  keywords: [
    "Wan Buffer GDPR",
    "GDPR compliance",
    "data protection",
    "EU data regulation",
    "personal data rights",
    "data privacy",
  ],
  openGraph: {
    type: "website",
    title: "GDPR Compliance | Wan Buffer",
    description: "How Wan Buffer complies with the GDPR to protect your personal data.",
    siteName: "Wan Buffer",
  },
};

export default function GdprPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <GdprContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
