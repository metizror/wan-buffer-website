import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HrPayrollContent } from "@/components/services/hr-payroll-content";

export const metadata: Metadata = {
  title: "HR & Payroll | Leave, Attendance & WPS Payroll | Wan Buffer",
  description:
    "End-to-end ERP HR and payroll — leave management, attendance tracking, WPS payroll processing, statutory compliance, employee self-service, and performance management. Implemented on Odoo, Zoho People, SAP, and BambooHR.",
  keywords: [
    "HR ERP",
    "payroll ERP",
    "leave management",
    "attendance tracking",
    "WPS payroll",
    "Odoo HR",
    "HR automation",
    "payroll processing",
    "employee self-service",
    "statutory compliance payroll",
    "HR module ERP",
    "payroll India UAE",
    "HR payroll implementation",
    "workforce management ERP",
  ],
  openGraph: {
    type: "website",
    title: "HR & Payroll — Leave, Attendance & WPS Payroll | Wan Buffer",
    description:
      "ERP HR & payroll — leave, attendance, WPS payroll, statutory compliance, and employee self-service across Odoo, Zoho, and SAP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/hr-payroll" },
};

export default function HrPayrollPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HrPayrollContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
