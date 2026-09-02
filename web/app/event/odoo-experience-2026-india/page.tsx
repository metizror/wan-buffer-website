import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { Oxp2026Content } from "@/components/pages/oxp-2026-content";

const CANONICAL = "https://wanbuffer.com/event/odoo-experience-2026-india";

export const metadata: Metadata = {
  title: "Odoo Experience 2026 India | Meet Wan Buffer in Gandhinagar",
  description:
    "Meet Wan Buffer at Odoo Experience 2026 India, 11–12 September 2026 at Mahatma Mandir, Gandhinagar. Explore Odoo implementation, customization, integrations, AI, and automation with our experts.",
  keywords: [
    "Odoo Experience 2026 India",
    "Odoo event Gandhinagar",
    "Mahatma Mandir Odoo",
    "Odoo 20 launch",
    "Odoo implementation partner",
    "Odoo AI automation",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    url: CANONICAL,
    type: "website",
    siteName: "Wan Buffer",
    title: "Odoo Experience 2026 India | Meet Wan Buffer",
    description:
      "Join us at Odoo Experience 2026 India and discover how Odoo, AI, automation, and connected business solutions can transform the way your business operates.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Wan Buffer at Odoo Experience 2026 India",
      },
    ],
  },
};

const EVENT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Odoo Experience 2026 India",
  description:
    "Two days of Odoo talks, master classes, exhibitions, and live demonstrations, including the Odoo 20 launch.",
  startDate: "2026-09-11T09:00:00+05:30",
  endDate: "2026-09-12T18:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Mahatma Mandir Convention Centre",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  organizer: { "@type": "Organization", name: "Odoo", url: "https://www.odoo.com" },
  performer: { "@type": "Organization", name: "Wan Buffer", url: "https://wanbuffer.com" },
  url: CANONICAL,
};

export default function OdooExperience2026IndiaPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <Oxp2026Content />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script
        id="oxp26-event-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_JSON_LD) }}
      />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
