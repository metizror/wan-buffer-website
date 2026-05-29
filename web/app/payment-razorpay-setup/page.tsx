import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { PaymentRazorpayContent } from "@/components/services/payment-razorpay-content";

export const metadata: Metadata = {
  title: "Payment & Razorpay Setup | Checkout Flows & Subscriptions | Wan Buffer",
  description:
    "Expert payment gateway integration — Razorpay, Stripe, PayPal, UPI, and COD. Checkout optimisation, subscription billing, multi-currency support, and ERP reconciliation for Shopify, Magento, and custom eCommerce stores.",
  keywords: [
    "Razorpay integration",
    "payment gateway setup",
    "Shopify payment setup",
    "Razorpay Shopify",
    "Stripe integration",
    "UPI payment gateway",
    "checkout optimisation",
    "subscription billing",
    "payment gateway India",
    "eCommerce payments",
    "Razorpay setup",
    "multi-currency payments",
    "payment reconciliation",
    "checkout flow optimisation",
  ],
  openGraph: {
    type: "website",
    title: "Payment & Razorpay Setup — Checkout Flows & Subscriptions | Wan Buffer",
    description:
      "Payment gateway integration — Razorpay, Stripe, UPI, and more. Checkout optimisation, subscription billing, and ERP reconciliation.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/payment-razorpay-setup" },
};

export default function PaymentRazorpayPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <PaymentRazorpayContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
