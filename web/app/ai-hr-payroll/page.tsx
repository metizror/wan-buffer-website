import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { AiHrPayrollContent } from "@/components/services/ai-hr-payroll-content";

export const metadata: Metadata = {
  title: "AI-Assisted HR & Payroll | Intelligent Onboarding & Automation | Wan Buffer",
  description:
    "Automate HR and payroll operations with AI — intelligent onboarding, leave management, payroll calculation, compliance monitoring, and employee self-service. Integrated with Odoo, Zoho People, SAP SuccessFactors, and BambooHR.",
  keywords: [
    "AI HR automation",
    "automated payroll",
    "AI onboarding",
    "HR process automation",
    "intelligent payroll",
    "employee self-service AI",
    "Odoo HR module",
    "leave management automation",
    "payroll compliance AI",
    "HR chatbot",
    "AI-assisted HR",
    "workforce automation",
    "HR analytics AI",
    "automated employee onboarding",
  ],
  openGraph: {
    type: "website",
    title: "AI-Assisted HR & Payroll — Intelligent Onboarding & Automation | Wan Buffer",
    description:
      "AI-powered HR and payroll automation — onboarding, leave management, payroll, compliance, and self-service — built into your ERP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/ai-hr-payroll" },
};

export default function AiHrPayrollPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <AiHrPayrollContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
