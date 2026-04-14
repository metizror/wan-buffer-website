import type { Metadata } from "next";
import Script from "next/script";

import { CaseStudiesContent } from "@/components/pages/case-studies-content";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeWanny } from "@/components/home/wanny";

export const metadata: Metadata = {
  title: "Case Studies - Wan Buffer | Success Stories & Client Solutions",
  description:
    "Since 2018, Wan Buffer has delivered web, mobile, SaaS, ERP, and AI solutions. Explore case studies and measurable outcomes across industries and regions.",
  keywords: ["Wan Buffer case studies", "success stories", "Odoo implementation case study", "AI automation case study"],
  openGraph: {
    type: "website",
    title: "Case Studies - Wan Buffer",
    description: "Success stories & client solutions across ERP + AI delivery.",
    siteName: "Wan Buffer",
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <CaseStudiesContent />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}

