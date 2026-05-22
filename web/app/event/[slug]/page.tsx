import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { EventDetailContent } from "@/components/pages/event-detail-content";
import { getAllEventSlugs, getEventBySlug } from "@/lib/events-data";

interface EventDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllEventSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event not found | Wan Buffer" };

  const canonical = `https://wanbuffer.com/event/${slug}`;

  return {
    title: `${event.title} | Wan Buffer Events`,
    description: event.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: event.title,
      description: event.excerpt,
      siteName: "Wan Buffer",
      images: [{ url: `https://wanbuffer.com${event.imageSrc}` }],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <EventDetailContent event={event} />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
