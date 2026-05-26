import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiAgentsErpContent } from "@/components/services/ai-agents-erp-content";

export const metadata: Metadata = {
  title: "AI Agents for ERP | Intelligent ERP Automation | Wan Buffer",
  description:
    "Deploy purpose-built AI agents that automate ERP tasks — invoice processing, inventory management, procurement, and more. Reduce manual work by 73% with human-in-the-loop AI agents for Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "AI agents for ERP",
    "ERP automation",
    "AI ERP integration",
    "intelligent ERP",
    "AI agents Odoo",
    "ERP AI automation",
    "autonomous ERP agents",
    "AI-powered ERP",
    "enterprise AI agents",
    "ERP workflow automation",
    "AI invoice processing",
    "AI inventory management",
    "LLM ERP integration",
    "AI procurement automation",
  ],
  openGraph: {
    type: "website",
    title: "AI Agents for ERP — Autonomous ERP Automation | Wan Buffer",
    description:
      "Purpose-built AI agents that execute ERP tasks autonomously. Reduce manual work by 73%, cut costs by 40%, and achieve 99.2% accuracy with human-in-the-loop governance.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-agents-for-erp" },
};

export default function AiAgentsForErpPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiAgentsErpContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
