import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HubListingContent } from "@/components/pages/hub-listing-content";

export const metadata: Metadata = {
  title: "Services | ERP, AI, eCommerce & Engagement | Wan Buffer",
  description:
    "Browse Wan Buffer services: Odoo ERP, AI automation, eCommerce, industry solutions, and engagement models.",
  alternates: { canonical: "https://wanbuffer.com/services" },
};

const ITEMS = [
  { href: "/odoo", icon: "🟠", title: "Odoo ERP", body: "Implementation, customisation, migration, integrations, apps, training, hosting.", pills: ["Odoo"] },
  { href: "/ai-services", icon: "⚡", title: "AI & Automation", body: "Agents, analytics, document AI, RPA, and governance inside ERP.", pills: ["AI"] },
  { href: "/ecommerce", icon: "🛒", title: "eCommerce", body: "Shopify, Magento, payments, SEO/CRO, and ERP sync.", pills: ["Commerce"] },
  { href: "/industries", icon: "🏭", title: "Industries", body: "Manufacturing, 3PL, textile, healthcare, finance, and more.", pills: ["Verticals"] },
  { href: "/engagement", icon: "🤝", title: "Engagement Models", body: "Project, dedicated team, retainer, and AI-agent + human hybrid.", pills: ["Delivery"] },
  { href: "/case-studies", icon: "📁", title: "Case Studies", body: "Outcomes from ERP and commerce programmes we have shipped.", pills: ["Work"] },
];

export default function ServicesPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HubListingContent
        eyebrow="Services"
        titleLines={["ERP, AI, and commerce", "under one engineering team."]}
        subtitle="Start from a category, then pick the service page that matches the problem you need solved."
        primaryCta={{ href: "/contact-us", label: "Talk to Wan Buffer" }}
        secondaryCta={{ href: "/blogs", label: "Read insights" }}
        items={ITEMS}
        closerTitle="Not sure where to start?"
        closerBody="A 60-minute discovery call is enough to map the stack, the gap, and whether project, dedicated, or retainer is the right model."
      />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
