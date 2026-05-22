import type { Metadata } from "next";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { EventsContent } from "@/components/pages/events-content";

export const metadata: Metadata = {
  title: "Events | Wan Buffer",
  description:
    "IT conferences, webinars, and industry events hosted or attended by Wan Buffer in the USA, UK, India, UAE, Europe, Kuwait, France, and more.",
  keywords: [
    "Wan Buffer events",
    "Odoo webinars",
    "IT conferences",
    "PharmaTech Expo",
    "email marketing webinar",
    "Odoo CRM demo",
  ],
  alternates: { canonical: "https://wanbuffer.com/event" },
  openGraph: {
    type: "website",
    title: "Events | Wan Buffer",
    description:
      "Stay up to date with Wan Buffer at IT conferences, webinars, and industry events worldwide.",
    siteName: "Wan Buffer",
  },
};

export default function EventsPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <EventsContent />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
    </>
  );
}
