import type { Metadata } from "next";
import Script from "next/script";

import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { CookiePolicyContent } from "@/components/pages/cookie-policy-content";

export const metadata: Metadata = {
  title: "Cookie Policy | Wan Buffer Services Pvt. Ltd.",
  description:
    "Learn how Wan Buffer uses cookies to enhance your browsing experience, the types of cookies we use, and how you can manage your cookie preferences.",
  keywords: [
    "Wan Buffer cookie policy",
    "cookies",
    "cookie preferences",
    "third-party cookies",
    "browser cookies",
    "data collection",
  ],
  openGraph: {
    type: "website",
    title: "Cookie Policy | Wan Buffer",
    description: "Understand how Wan Buffer uses cookies to enhance your experience on our website.",
    siteName: "Wan Buffer",
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <CookiePolicyContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
