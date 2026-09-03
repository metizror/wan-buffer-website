import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HubListingContent } from "@/components/pages/hub-listing-content";

export const metadata: Metadata = {
  title: "eCommerce Services | Shopify, Magento & Odoo | Wan Buffer",
  description:
    "Shopify and Magento store builds, Odoo integrations, payments, SEO/CRO, analytics, and multi-warehouse commerce operations.",
  alternates: { canonical: "https://wanbuffer.com/ecommerce" },
};

const ITEMS = [
  { href: "/shopify-store-setup", icon: "🛍️", title: "Shopify Store Setup", body: "Theme, catalog, checkout, and ops for Shopify and Shopify Plus.", pills: ["Shopify"] },
  { href: "/shopify-odoo-integration", icon: "🔗", title: "Shopify ↔ Odoo", body: "Orders, inventory, and accounting in one loop.", pills: ["Integration"] },
  { href: "/shopify-analytics-ai", icon: "📊", title: "Shopify Analytics + AI", body: "Demand and merchandising signals on store data.", pills: ["AI"] },
  { href: "/magento-development", icon: "🧱", title: "Magento Development", body: "Custom Magento 2 catalogue, checkout, and B2B features.", pills: ["Magento"] },
  { href: "/magento-odoo-integration", icon: "🔁", title: "Magento ↔ Odoo", body: "ERP as the system of record behind Magento storefronts.", pills: ["ERP"] },
  { href: "/magento-performance", icon: "⚡", title: "Magento Performance", body: "Speed, indexing, and hosting hygiene for high-catalog stores.", pills: ["Speed"] },
  { href: "/magento-security-amc", icon: "🔒", title: "Magento Security AMC", body: "Patches, monitoring, and managed Magento support.", pills: ["AMC"] },
  { href: "/ecommerce-seo-cro", icon: "🎯", title: "SEO & CRO", body: "Technical SEO and conversion work on live catalogues.", pills: ["CRO"] },
  { href: "/payment-razorpay-setup", icon: "💳", title: "Payments", body: "Razorpay and multi-gateway checkout wired to finance.", pills: ["Payments"] },
  { href: "/multi-warehouse-3pl", icon: "🚚", title: "Multi-warehouse & 3PL", body: "Inventory and fulfilment across warehouses and 3PLs.", pills: ["3PL"] },
  { href: "/ai-product-recommendations", icon: "✨", title: "Product Recommendations", body: "On-site merchandising from your catalogue and history.", pills: ["AI"] },
];

export default function EcommerceHubPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HubListingContent
        eyebrow="eCommerce"
        titleLines={["Storefronts that", "talk to ERP."]}
        subtitle="Shopify, Magento, payments, SEO/CRO, and Odoo integrations so catalogue, stock, and finance stay in sync."
        primaryCta={{ href: "/contact-us", label: "Plan a store + ERP build" }}
        secondaryCta={{ href: "/case-studies", label: "See commerce work" }}
        items={ITEMS}
        closerTitle="Retail ops, not just a theme"
        closerBody="We connect the storefront to inventory, 3PL, and accounting so peak season does not become a spreadsheet incident."
      />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
