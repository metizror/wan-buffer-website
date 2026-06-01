import type { Metadata } from "next";
import Script from "next/script";

import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { PrivacyPolicyContent } from "@/components/pages/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Wan Buffer Services Pvt. Ltd.",
  description:
    "Read Wan Buffer's privacy policy to learn how we collect, use, and protect your personal data. Serving clients across 20+ countries worldwide.",
  keywords: [
    "Wan Buffer privacy policy",
    "data protection",
    "personal data",
    "cookies policy",
    "GDPR",
    "privacy statement",
  ],
  openGraph: {
    type: "website",
    title: "Privacy Policy | Wan Buffer",
    description: "Learn how Wan Buffer collects, uses, and protects your personal information.",
    siteName: "Wan Buffer",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <PrivacyPolicyContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
