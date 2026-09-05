import type { Metadata } from "next";
import Script from "next/script";

import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { CancellationAndRefundPolicyContent } from "@/components/pages/cancellation-and-refund-policy-content";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Wan Buffer Services Pvt. Ltd.",
  description:
    "Read Wan Buffer's cancellation and refund policy covering consulting, Odoo and ERP implementation, development, dedicated teams, training, workshops, AMC, hosting, and digital products.",
  keywords: [
    "Wan Buffer cancellation policy",
    "Wan Buffer refund policy",
    "project cancellation terms",
    "consulting refund terms",
    "training cancellation policy",
    "AMC refund policy",
  ],
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Wan Buffer | Odoo AI Integration & ERP Automation",
      },
    ],
    type: "website",
    title: "Cancellation & Refund Policy | Wan Buffer",
    description:
      "How cancellation and refund eligibility works across Wan Buffer consulting, development, training, and support engagements.",
    siteName: "Wan Buffer",
  },
};

export default function CancellationAndRefundPolicyPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <CancellationAndRefundPolicyContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
