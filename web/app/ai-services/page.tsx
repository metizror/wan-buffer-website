import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HubListingContent } from "@/components/pages/hub-listing-content";

export const metadata: Metadata = {
  title: "AI & Automation Services for ERP | Wan Buffer",
  description:
    "AI agents, workflow automation, predictive analytics, chatbots, LangChain/LLM integration, RPA, and governance — built into Odoo and your operations stack.",
  alternates: { canonical: "https://wanbuffer.com/ai-services" },
};

const ITEMS = [
  { href: "/ai-agents-for-erp", icon: "🤖", title: "AI Agents for ERP", body: "Agents that execute ERP tasks instead of waiting for a human click.", pills: ["Agents"] },
  { href: "/workflow-automation", icon: "⚡", title: "Workflow Automation", body: "Approvals, alerts, and multi-step processes without spreadsheet babysitting.", pills: ["Automation"] },
  { href: "/predictive-analytics", icon: "📈", title: "Predictive Analytics", body: "Demand, cash, and operations forecasts on your own data.", pills: ["ML"] },
  { href: "/ai-chatbots", icon: "💬", title: "AI Chatbots", body: "Support and internal ops bots grounded in your ERP and docs.", pills: ["NLP"] },
  { href: "/langchain-llm-integration", icon: "🧠", title: "LangChain / LLM", body: "Private LLM workflows wired into Odoo, CRM, and knowledge bases.", pills: ["LLM"] },
  { href: "/ml-powered-insights", icon: "🔍", title: "ML-Powered Insights", body: "Anomaly detection and scoring on operational data.", pills: ["Insights"] },
  { href: "/rpa-process-mining", icon: "⚙️", title: "RPA & Process Mining", body: "Find the bottlenecks, then automate the repetitive work.", pills: ["RPA"] },
  { href: "/ai-governance", icon: "🛡️", title: "AI Governance", body: "Access, audit trails, and policy for production AI in ERP.", pills: ["Governance"] },
  { href: "/smart-inventory-management", icon: "📦", title: "Smart Inventory", body: "Reorder, allocation, and warehouse decisions with ML assists.", pills: ["WMS"] },
  { href: "/automated-invoice-processing", icon: "🧾", title: "Invoice Processing", body: "Document AI for AP: capture, match, and post.", pills: ["AP"] },
  { href: "/predictive-maintenance", icon: "🛠️", title: "Predictive Maintenance", body: "Shop-floor signals to maintenance work orders before downtime.", pills: ["IoT"] },
];

export default function AiServicesPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HubListingContent
        eyebrow="AI & Automation"
        titleLines={["AI that runs inside", "your ERP, not beside it."]}
        subtitle="Agents, automation, analytics, and document AI designed for manufacturing, logistics, and commerce — not generic chat wrappers."
        primaryCta={{ href: "/contact-us", label: "Discuss an AI use case" }}
        secondaryCta={{ href: "/engagement", label: "Engagement models" }}
        items={ITEMS}
        closerTitle="Start with one high-ROI workflow"
        closerBody="We pick a process with measurable volume, wire the agent or model, and prove cycle-time or error-rate improvement before scaling."
      />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
