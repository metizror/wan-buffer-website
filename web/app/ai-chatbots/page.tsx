import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiChatbotsContent } from "@/components/services/ai-chatbots-content";

export const metadata: Metadata = {
  title: "AI Chatbots & Copilots | Natural Language ERP Interaction | Wan Buffer",
  description:
    "Deploy AI chatbots and copilots that let your team interact with ERP systems using natural language. Query data, trigger workflows, generate reports, and get instant answers — directly inside Odoo, Zoho, Salesforce, and SAP.",
  keywords: [
    "AI chatbots for ERP",
    "ERP copilot",
    "AI assistant ERP",
    "natural language ERP",
    "conversational AI business",
    "Odoo chatbot",
    "AI copilot for business",
    "enterprise chatbot",
    "ERP virtual assistant",
    "AI-powered business assistant",
    "LLM ERP integration",
    "ChatGPT for ERP",
    "intelligent ERP assistant",
    "conversational ERP interface",
  ],
  openGraph: {
    type: "website",
    title: "AI Chatbots & Copilots — Natural Language ERP Interaction | Wan Buffer",
    description:
      "AI chatbots and copilots that turn natural language into ERP actions. Query data, trigger workflows, and generate reports — no clicks, no menus, just conversation.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-chatbots" },
};

export default function AiChatbotsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiChatbotsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
