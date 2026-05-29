import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { DedicatedTeamContent } from "@/components/services/dedicated-team-content";

export const metadata: Metadata = {
  title: "Dedicated Team | Offshore ERP & AI Engineering Squad — Scale Month-to-Month — Wan Buffer",
  description:
    "Your dedicated offshore ERP and AI engineering team — 2 to 15 engineers, 100% allocated to your projects, embedded in your workflows. Scale up or down month-to-month with direct Slack, Jira, and daily standups.",
  keywords: [
    "dedicated development team",
    "offshore ERP team",
    "dedicated engineering team",
    "hire dedicated developers",
    "offshore software team",
    "ERP development team",
    "AI engineering team",
    "Odoo development team",
    "dedicated team model",
    "staff augmentation ERP",
    "offshore team India",
    "dedicated team outsourcing",
    "remote development team",
    "embedded engineering team",
    "scalable dev team",
    "hire ERP developers",
    "hire AI engineers",
    "dedicated team India USA UAE",
  ],
  openGraph: {
    type: "website",
    title: "Dedicated Team — Offshore ERP & AI Engineering Squad | Wan Buffer",
    description:
      "2–15 engineers, 100% dedicated to you. Mix of ERP, AI, and mobile engineers embedded in your workflows. Scale month-to-month.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/dedicated-team" },
};

export default function DedicatedTeamPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <DedicatedTeamContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
