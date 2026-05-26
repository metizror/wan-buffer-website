import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { WorkflowAutomationContent } from "@/components/services/workflow-automation-content";

export const metadata: Metadata = {
  title: "Workflow Automation | End-to-End Business Process Automation | Wan Buffer",
  description:
    "Automate your business workflows end to end — procurement, finance, HR, operations, and customer service. Save 60% of manual processing time, eliminate 85% of errors, and connect every system in your stack.",
  keywords: [
    "workflow automation",
    "business process automation",
    "ERP workflow automation",
    "automated workflows",
    "process automation services",
    "enterprise workflow automation",
    "RPA services",
    "business automation solutions",
    "workflow orchestration",
    "automated approval workflows",
    "invoice automation",
    "procurement automation",
    "HR workflow automation",
    "workflow integration",
  ],
  openGraph: {
    type: "website",
    title: "Workflow Automation — End-to-End Business Process Automation | Wan Buffer",
    description:
      "End-to-end workflow automation that connects your ERP, CRM, and business systems. Save 60% of manual processing time and eliminate 85% of human errors.",
    siteName: "Wan Buffer",
  },
  alternates: { canonical: "https://wanbuffer.com/workflow-automation" },
};

export default function WorkflowAutomationPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <WorkflowAutomationContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
