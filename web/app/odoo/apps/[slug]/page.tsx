import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { OdooAppDetailContent } from "@/components/services/odoo-app-detail-content";
import { getAllOdooAppSlugs, getOdooAppBySlug } from "@/lib/odoo-apps-data";

interface OdooAppDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllOdooAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: OdooAppDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getOdooAppBySlug(slug);
  if (!app) return { title: "Odoo App not found | Wan Buffer" };

  return {
    title: `${app.name} Odoo App | Wan Buffer`,
    description: app.summary,
    keywords: [
      app.name,
      app.technicalName,
      "Odoo app",
      "Odoo module",
      ...app.categories,
    ],
    alternates: { canonical: `https://wanbuffer.com/odoo/apps/${slug}` },
    openGraph: {
      type: "website",
      title: `${app.name} | Wan Buffer Odoo App`,
      description: app.summary,
      siteName: "Wan Buffer",
    },
  };
}

export default async function OdooAppDetailPage({ params }: OdooAppDetailPageProps) {
  const { slug } = await params;
  const app = getOdooAppBySlug(slug);
  if (!app) notFound();

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <OdooAppDetailContent app={app} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
