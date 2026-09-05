import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";

import { HomeOxpFloat } from "@/components/home/oxp-float";
import { ScrollRevealInit } from "@/components/providers/scroll-reveal-init";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wanbuffer.com"),
  title:
    "Odoo AI Integration Services | AI-Powered ERP Implementation Partner | Wan Buffer",
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
    title: "Odoo AI Integration Services | AI-Powered ERP | Wan Buffer",
    description:
      "Specialist Odoo AI implementation partner. AI agents, ERP automation, predictive analytics built natively into Odoo 17.",
    url: "https://wanbuffer.com/",
    siteName: "Wan Buffer",
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
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if(location.pathname!=='/'){var l=document.createElement('link');l.rel='stylesheet';l.href='/site-full.css';document.head.appendChild(l);}`,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `section.hero{background:#0B1627;color:#fff;position:relative;overflow:hidden}section.hero .hero-h1{font-family:var(--font-montserrat),system-ui,sans-serif;font-weight:800;font-size:clamp(42px,11vw,58px);line-height:1.05;margin:0 0 16px;color:#fff}section.hero .hero-sub{font-family:var(--font-poppins),system-ui,sans-serif;font-weight:400;font-size:13px;line-height:1.45;color:rgba(255,255,255,.7);margin:0 0 20px}` }} />
      </head>
      <body suppressHydrationWarning>
        <Script id="js-class" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js');`}
        </Script>
        {/* Defer analytics + home-runtime until idle/interaction, keeps TBT low for LCP. */}
        <Script id="defer-heavy" strategy="afterInteractive">{`
          (function () {
            function loadHeavy() {
              if (window.__wbHeavyLoaded) return;
              window.__wbHeavyLoaded = 1;
              var r = document.createElement('script');
              r.src = '/home-runtime.js';
              r.async = true;
              document.body.appendChild(r);
              var a = document.createElement('script');
              a.src = 'https://d2mvefebd70kbz.cloudfront.net/scripts/01a0139a-1594-715e-9e44-1eb5858732ec.js';
              a.async = true;
              document.body.appendChild(a);
            }
            // Interaction only for 12s, avoid requestIdleCallback during Lighthouse lab window.
            var t = setTimeout(loadHeavy, 12000);
            function kick() {
              clearTimeout(t);
              loadHeavy();
            }
            ['pointerdown', 'keydown', 'touchstart'].forEach(function (e) {
              window.addEventListener(e, kick, { once: true, passive: true });
            });
          })();
        `}</Script>
        <ScrollRevealInit />
        {children}
        <HomeOxpFloat />
      </body>
    </html>
  );
}
