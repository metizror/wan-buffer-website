import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { ShopifyStoreContent } from "@/components/services/shopify-store-content";

export const metadata: Metadata = {
  title: "Shopify Store Setup | Theme Dev, Apps & Launch | Wan Buffer",
  description:
    "Expert Shopify store setup — custom theme development, app installation, payment gateway integration, shipping configuration, and launch optimisation. Shopify Basic, Shopify, and Shopify Plus stores built for conversion.",
  keywords: [
    "Shopify store setup",
    "Shopify development",
    "Shopify theme development",
    "Shopify store design",
    "Shopify Plus development",
    "Shopify app integration",
    "Shopify payment setup",
    "Shopify India",
    "Shopify developer",
    "eCommerce store setup",
    "Shopify customisation",
    "Shopify launch",
    "Shopify Liquid development",
    "Shopify store migration",
  ],
  openGraph: {
    type: "website",
    title: "Shopify Store Setup — Theme Dev, Apps & Launch | Wan Buffer",
    description:
      "Shopify store setup — custom themes, app integration, payments, and launch optimisation. From first product to first sale.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/shopify-store-setup" },
};

export default function ShopifyStorePage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ShopifyStoreContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
