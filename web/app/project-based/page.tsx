import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ProjectBasedContent } from "@/components/services/project-based-content";

export const metadata: Metadata = {
  title: "Project-Based Engagement | Fixed Scope, Fixed Price ERP & AI Delivery — Wan Buffer",
  description:
    "Fixed-scope, fixed-price ERP and AI project delivery with defined milestones, dedicated project manager, transparent contracts, and 3-month post-launch support. From discovery to go-live in 4–16 weeks.",
  keywords: [
    "project based engagement",
    "fixed price ERP",
    "ERP implementation project",
    "fixed scope delivery",
    "ERP project management",
    "Odoo implementation project",
    "AI project delivery",
    "ERP migration project",
    "milestone based delivery",
    "ERP consulting project",
    "turnkey ERP implementation",
    "project based outsourcing",
    "ERP go live",
    "fixed bid ERP",
    "project delivery model",
    "ERP project timeline",
    "predictable ERP cost",
    "ERP project India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Project-Based Engagement — Fixed Scope, Fixed Price ERP & AI Delivery | Wan Buffer",
    description:
      "Fixed-scope, fixed-price ERP and AI project delivery with milestones, dedicated PM, and 3-month post-launch support — from discovery to go-live in 4–16 weeks.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/project-based" },
};

export default function ProjectBasedPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ProjectBasedContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
