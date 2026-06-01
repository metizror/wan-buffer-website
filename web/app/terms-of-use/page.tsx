import type { Metadata } from "next";
import Script from "next/script";

import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { TermsOfUseContent } from "@/components/pages/terms-of-use-content";

export const metadata: Metadata = {
  title: "Terms of Use | Wan Buffer Services Pvt. Ltd.",
  description:
    "Read Wan Buffer's terms of use governing the access and use of our website, services, and content. Protected by copyright and trademark laws.",
  keywords: [
    "Wan Buffer terms of use",
    "terms of service",
    "website terms",
    "legal terms",
    "use license",
  ],
  openGraph: {
    type: "website",
    title: "Terms of Use | Wan Buffer",
    description: "Terms and conditions governing the use of Wan Buffer's website and services.",
    siteName: "Wan Buffer",
  },
};

export default function TermsOfUsePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <TermsOfUseContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
