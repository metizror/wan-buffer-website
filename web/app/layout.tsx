import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
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
    images: [
      {
        url: "https://res.cloudinary.com/dghplu26l/image/upload/v1719489724/logo-black_fxcdpr.png",
      },
    ],
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
        {children}
      </body>
    </html>
  );
}
