import type { Metadata } from "next";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { CaseStudyContent } from "@/components/pages/case-study-content";
import { getPublicCaseStudies } from "@/lib/portfolio-service";

export const metadata: Metadata = {
  title: "Case Studies | Wan Buffer",
  description:
    "Explore real-world case studies on Odoo development, ERP implementation, web and mobile app solutions, and custom software projects delivered by Wan Buffer.",
  keywords: [
    "Odoo case study",
    "ERP case study",
    "software development case study",
    "Wan Buffer case studies",
    "Odoo implementation",
  ],
  alternates: { canonical: "https://wanbuffer.com/case-study" },
  openGraph: {
    type: "website",
    title: "Software, Odoo, ERP & App Development Case Studies | Wan Buffer",
    description:
      "Explore real-world case studies on Odoo development, ERP implementation, and custom software projects delivered by Wan Buffer.",
    siteName: "Wan Buffer",
  },
};

export default async function CaseStudyPage() {
  const studies = await getPublicCaseStudies();
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <CaseStudyContent studies={studies} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
