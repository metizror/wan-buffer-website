import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { LangchainLlmContent } from "@/components/services/langchain-llm-content";

export const metadata: Metadata = {
  title: "LangChain & LLM Integration | Enterprise AI Development | Wan Buffer",
  description:
    "Build production-grade AI applications with LangChain, GPT-4, Claude, Llama, and open-source LLMs — integrated directly into your ERP, CRM, and business systems. RAG pipelines, AI agents, semantic search, and conversational interfaces engineered for enterprise.",
  keywords: [
    "LangChain integration",
    "LLM integration services",
    "GPT-4 enterprise integration",
    "Claude API integration",
    "LangChain development",
    "RAG pipeline development",
    "LLM for ERP",
    "AI application development",
    "enterprise LLM deployment",
    "LangChain consulting",
    "open source LLM integration",
    "vector database integration",
    "semantic search ERP",
    "LLM fine-tuning services",
  ],
  openGraph: {
    type: "website",
    title: "LangChain & LLM Integration — Enterprise AI Development | Wan Buffer",
    description:
      "Production-grade LangChain and LLM integrations for enterprise. RAG pipelines, AI agents, and conversational interfaces — built on GPT-4, Claude, Llama, and more.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/langchain-llm-integration" },
};

export default function LangchainLlmPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <LangchainLlmContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
