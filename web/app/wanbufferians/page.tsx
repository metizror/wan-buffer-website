import type { Metadata } from "next";
import Script from "next/script";

import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";
import { WanbufferiansContent } from "@/components/pages/wanbufferians-content";
import { WanbufferiansFaq } from "@/components/pages/wanbufferians-faq";

export const metadata: Metadata = {
  title: "Wanbufferians | About Wan Buffer - Our Mission, Vision & Team",
  description:
    "At Wan Buffer, we are a global family committed to innovation and excellence. Since 2018, our diverse team has built impactful software solutions that empower businesses worldwide.",
  keywords: [
    "Wan Buffer",
    "Wanbufferians",
    "about Wan Buffer",
    "IT services company",
    "software development team",
    "Odoo partner",
  ],
  openGraph: {
    type: "website",
    title: "Wanbufferians | About Wan Buffer",
    description:
      "A global family committed to innovation and excellence. Since 2018, building impactful software solutions that empower businesses worldwide.",
    siteName: "Wan Buffer",
  },
};

export default function WanbufferiansPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <WanbufferiansContent />
      <WanbufferiansFaq />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
