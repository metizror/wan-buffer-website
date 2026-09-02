import type { Metadata } from "next";
import Script from "next/script";

import { HomeOxpFloat } from "@/components/home/oxp-float";
import { ScrollRevealInit } from "@/components/providers/scroll-reveal-init";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wanbuffer.com"),
  title:
    "Odoo AI Integration Services | AI-Powered ERP Implementation Partner — Wan Buffer",
  description:
    "Wan Buffer is a specialist Odoo AI integration partner delivering AI agents for Odoo 17, ERP automation services, and intelligent workflow automation for manufacturing, logistics, retail, and real estate. Serving USA, UAE, India, Canada, Europe.",
  keywords: [
    "Odoo AI integration services",
    "AI agents for Odoo 17",
    "ERP automation services",
    "Odoo AI implementation partner",
  ],
  openGraph: {
    type: "website",
    title: "Odoo AI Integration Services | AI-Powered ERP — Wan Buffer",
    description:
      "Specialist Odoo AI implementation partner. AI agents, ERP automation, predictive analytics built natively into Odoo 17.",
    url: "https://wanbuffer.com/",
    siteName: "Wan Buffer",
    // og:image comes from app/opengraph-image.png. File-based metadata takes
    // priority over this object, and unlike it, applies to every route — the
    // pages that declare their own `openGraph` replace this one wholesale.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      itemScope
      itemType="https://schema.org/WebPage"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Script id="js-class" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>
        <script
          src="https://d2mvefebd70kbz.cloudfront.net/scripts/01a0139a-1594-715e-9e44-1eb5858732ec.js"
          async
        />
        <Script src="/home-runtime.js" strategy="afterInteractive" />
        <ScrollRevealInit />
        {children}
        {/* Site-wide upcoming-event bar. Lives here rather than per page so
            every route carries it. */}
        <HomeOxpFloat />
      </body>
    </html>
  );
}
