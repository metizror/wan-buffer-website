import type { Metadata } from "next";
import Script from "next/script";

import { ContactContent } from "@/components/pages/contact-content";
import { ContactFaq } from "../../components/pages/contact-faq";
import { HomeCaseStudy } from "@/components/home/case-study";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeHeader } from "@/components/home/header";
import { HomeIndustries } from "@/components/home/industries";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeTestimonials } from "@/components/home/testimonials";
import { HomeWanny } from "@/components/home/wanny";

export const metadata: Metadata = {
  title: "Contact Wan Buffer | IT & Software Development Services",
  description:
    "Contact Wan Buffer. Schedule a free consultation, send your enquiry, explore hiring plans, and read FAQs. Serving USA, UK, India, UAE, Europe, Kuwait, and France.",
  keywords: [
    "Wan Buffer contact",
    "schedule consultation",
    "hire developers",
    "software development company contact",
    "Odoo partner contact",
  ],
  openGraph: {
    type: "website",
    title: "Contact Wan Buffer",
    description: "Get in touch with our global team to discuss impactful software solutions.",
    siteName: "Wan Buffer",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <ContactContent />
      <HomeCaseStudy />
      <HomeTestimonials />
      <HomeIndustries />
      <ContactFaq />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}

