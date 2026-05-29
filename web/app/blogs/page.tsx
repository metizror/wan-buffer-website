import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { BlogsContent } from "@/components/pages/blogs-content";
import { getPaginatedBlogs } from "@/lib/blog-service";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | ERP, Odoo & AI Insights | Wan Buffer",
  description:
    "Deep dives into ERP strategy, Odoo engineering, AI automation, and industry-specific digital transformation. Written by the engineers who build enterprise systems for manufacturing, logistics, oil & gas, and more.",
  keywords: [
    "ERP blog",
    "Odoo insights",
    "Odoo 19 features",
    "ERP implementation",
    "manufacturing ERP",
    "3PL ERP",
    "oil and gas ERP",
    "Odoo customisation",
    "digital transformation",
    "ERP automation",
    "Wan Buffer blog",
    "enterprise software blog",
  ],
  alternates: { canonical: "https://wanbuffer.com/blogs" },
  openGraph: {
    type: "website",
    title: "Blog | ERP, Odoo & AI Insights | Wan Buffer",
    description:
      "Practical insights on ERP strategy, Odoo engineering, and AI-powered automation from the Wan Buffer engineering team.",
    siteName: "Wan Buffer",
  },
};

export default async function BlogsPage() {
  const initial = await getPaginatedBlogs({ page: 1, limit: 10, published: true });

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <BlogsContent initialData={initial} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
