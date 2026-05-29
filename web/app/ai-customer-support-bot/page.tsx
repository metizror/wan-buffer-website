import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiSupportBotContent } from "@/components/services/ai-support-bot-content";

export const metadata: Metadata = {
  title: "AI Customer Support Bot | Returns, FAQs & Order Tracking | Wan Buffer",
  description:
    "AI-powered customer support chatbot for eCommerce — automated returns processing, order tracking, FAQ resolution, and live agent handoff. Reduce support tickets by 70% while improving customer satisfaction.",
  keywords: [
    "AI customer support bot",
    "eCommerce chatbot",
    "customer service automation",
    "order tracking chatbot",
    "returns automation",
    "AI support bot Shopify",
    "customer support AI",
    "eCommerce FAQ bot",
    "WhatsApp support bot",
    "automated customer service",
    "chatbot for eCommerce",
    "AI helpdesk",
    "support ticket automation",
    "conversational support",
  ],
  openGraph: {
    type: "website",
    title: "AI Customer Support Bot — Returns, FAQs & Order Tracking | Wan Buffer",
    description:
      "AI-powered support bot — order tracking, returns, FAQs, and live agent handoff. Reduce tickets by 70% while improving CSAT.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-customer-support-bot" },
};

export default function AiSupportBotPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiSupportBotContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
