import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HireAiContent } from "@/components/services/hire-ai-content";

export const metadata: Metadata = {
  title: "Hire AI Engineers | LangChain, GPT, ML & Python Specialists — Remote, Dedicated — Wan Buffer",
  description:
    "Hire pre-vetted AI and ML engineers — LangChain, OpenAI GPT, Claude, TensorFlow, and Python specialists. 100% dedicated, embedded in your workflow, onboarded in 1–2 weeks. Build AI agents, predictive models, and intelligent automation.",
  keywords: [
    "hire AI engineers",
    "hire ML engineers",
    "hire LangChain developer",
    "hire GPT developer",
    "AI developer India",
    "hire Python AI engineer",
    "remote AI engineer",
    "dedicated AI developer",
    "AI engineer outsourcing",
    "hire NLP engineer",
    "hire computer vision engineer",
    "AI staff augmentation",
    "hire AI specialist",
    "LangChain developer India",
    "TensorFlow developer hire",
    "AI automation engineer",
    "hire AI developer USA UAE",
    "offshore AI team",
  ],
  openGraph: {
    type: "website",
    title: "Hire AI Engineers — LangChain, GPT, ML & Python Specialists | Wan Buffer",
    description:
      "Pre-vetted AI/ML engineers — LangChain, GPT, TensorFlow, and Python specialists. 100% dedicated, onboarded in 1–2 weeks.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/hire-ai-engineers" },
};

export default function HireAiEngineersPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HireAiContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
