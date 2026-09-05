import type { Metadata } from "next";
import Script from "next/script";

import { HomeHeader } from "@/components/home/header";
import { HomeLeadPopup } from "@/components/home/lead-popup";
import { HomeContact } from "@/components/home/contact";
import { HomeFooter } from "@/components/home/footer";
import { HomeWanny } from "@/components/home/wanny";
import { HubListingContent } from "@/components/pages/hub-listing-content";

export const metadata: Metadata = {
  title: "Odoo ERP Services | Implementation, Customisation, Migration | Wan Buffer",
  description:
    "Odoo implementation, customisation, migration, integration, apps, training, and hosting from Wan Buffer | an Odoo partner for manufacturing, logistics, and commerce.",
  alternates: { canonical: "https://wanbuffer.com/odoo" },
};

const ITEMS = [
  { href: "/odoo/implementation", icon: "🚀", title: "Implementation", body: "Discovery to go-live: configuration, data migration, training, and hypercare.", pills: ["Rollout", "Go-live"] },
  { href: "/odoo/customization", icon: "🧩", title: "Customisation", body: "Modules, workflows, and UI tailored to how your teams actually work.", pills: ["Modules", "Workflows"] },
  { href: "/odoo/migration", icon: "📦", title: "Migration", body: "Version upgrades and platform moves with data integrity and cutover plans.", pills: ["Upgrade", "Cutover"] },
  { href: "/odoo/odoo-erp-integration", icon: "🔗", title: "Integration", body: "Connect Shopify, Magento, Salesforce, payments, and 3PLs to Odoo.", pills: ["APIs", "Sync"] },
  { href: "/odoo/apps", icon: "🏪", title: "Odoo Apps", body: "Industry apps and extensions we build and maintain on Odoo.", pills: ["Apps"] },
  { href: "/odoo/training", icon: "🎓", title: "Training", body: "Role-based training so operators, managers, and finance actually adopt the system.", pills: ["Enablement"] },
  { href: "/odoo/hosting", icon: "☁️", title: "Hosting", body: "Managed Odoo hosting, backups, monitoring, and performance.", pills: ["Cloud", "AMC"] },
  { href: "/odoo/odoo-consultant", icon: "🧭", title: "Consulting", body: "Process design and partner-side advisory before you write a line of custom code.", pills: ["Advisory"] },
];

export default function OdooHubPage() {
  return (
    <>
      <HomeLeadPopup />
      <HomeHeader />
      <HubListingContent
        eyebrow="Odoo Services"
        titleLines={["Official Odoo Partner.", "Full-cycle delivery."]}
        subtitle="Implementation, customisation, migration, integrations, apps, training, and hosting, one engineering team from blueprint to go-live."
        primaryCta={{ href: "/contact-us", label: "Book an Odoo audit" }}
        secondaryCta={{ href: "/case-studies", label: "View case studies" }}
        items={ITEMS}
        closerTitle="Need a single owner for Odoo?"
        closerBody="Tell us your version, modules, and go-live window. We’ll map scope, risks, and a delivery plan on a 60-minute call."
      />
      <HomeContact />
      <HomeFooter />
      <HomeWanny />
      <Script src="/home-runtime.js" strategy="afterInteractive" />
    </>
  );
}
