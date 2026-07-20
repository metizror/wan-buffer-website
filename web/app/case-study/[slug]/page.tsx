import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { CaseStudyDetailContent } from "@/components/pages/case-study-detail-content";
import {
  getAllPublicCaseStudySlugs,
  getPublicCaseStudyBySlug,
} from "@/lib/portfolio-service";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPublicCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getPublicCaseStudyBySlug(slug);
  if (!study) return { title: "Case study not found | Wan Buffer" };

  return {
    title: `${study.title} | Wan Buffer Case Study`,
    description: study.excerpt,
    alternates: { canonical: `https://wanbuffer.com/case-study/${slug}` },
    openGraph: {
      type: "article",
      title: study.title,
      description: study.excerpt,
      siteName: "Wan Buffer",
      images: [{ url: `https://wanbuffer.com${study.imageSrc}` }],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = await getPublicCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <CaseStudyDetailContent study={study} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
