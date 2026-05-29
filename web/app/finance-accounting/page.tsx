import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { FinanceAccountingContent } from "@/components/services/finance-accounting-content";

export const metadata: Metadata = {
  title: "Finance & Accounting | Multi-Currency, GST & VAT | Wan Buffer",
  description:
    "End-to-end ERP finance and accounting — multi-currency operations, GST e-invoicing, GCC VAT, bank reconciliation, financial consolidation, and automated reporting. Implemented on Odoo, Zoho, SAP, and QuickBooks.",
  keywords: [
    "ERP finance accounting",
    "multi-currency ERP",
    "GST e-invoicing ERP",
    "GCC VAT compliance",
    "Odoo accounting",
    "financial consolidation",
    "ERP bank reconciliation",
    "automated financial reporting",
    "accounts payable automation",
    "accounts receivable ERP",
    "finance ERP India",
    "finance ERP UAE",
    "month-end close automation",
    "ERP finance module",
  ],
  openGraph: {
    type: "website",
    title: "Finance & Accounting — Multi-Currency, GST & VAT | Wan Buffer",
    description:
      "ERP finance & accounting — multi-currency, GST e-invoicing, GCC VAT, bank reconciliation, and financial reporting across Odoo, Zoho, and SAP.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/finance-accounting" },
};

export default function FinanceAccountingPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <FinanceAccountingContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
