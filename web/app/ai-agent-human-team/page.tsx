import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiAgentHumanTeamContent } from "@/components/services/ai-agent-human-team-content";

export const metadata: Metadata = {
  title: "AI Agent + Human Team | Hybrid ERP Operations — 50–70% Lower Cost — Wan Buffer",
  description:
    "Our breakthrough hybrid engagement model — AI agents handle repetitive ERP execution while senior engineers focus on strategy, exceptions, and continuous improvement. 50–70% lower cost vs fully human teams with full transparency dashboards and audit logs.",
  keywords: [
    "AI agent human team",
    "hybrid ERP team",
    "AI ERP automation",
    "AI agent ERP operations",
    "AI powered outsourcing",
    "hybrid engagement model",
    "AI agents for business",
    "ERP automation team",
    "AI human collaboration",
    "intelligent automation ERP",
    "autonomous ERP agents",
    "AI managed services",
    "lower cost ERP operations",
    "AI agent transparency",
    "ERP AI hybrid",
    "Odoo AI automation",
    "AI operations India",
    "AI agent engagement model",
  ],
  openGraph: {
    type: "website",
    title: "AI Agent + Human Team — Hybrid ERP Operations at 50–70% Lower Cost | Wan Buffer",
    description:
      "AI agents handle repetitive ERP execution. Senior engineers handle strategy and exceptions. 50–70% lower cost with full transparency dashboards.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-agent-human-team" },
};

export default function AiAgentHumanTeamPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiAgentHumanTeamContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
