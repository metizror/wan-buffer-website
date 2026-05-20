/* ────────────────────────────────────────────────────────────────────────
   INDUSTRIES — oi-* layout (matches /odoo/implementation), original page copy
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/odoo-service-icons";

const industries = [
  {
    icon: "🏭",
    title: "Manufacturing",
    body: "Odoo MRP with AI shop floor intelligence, multi-level BOM management, work centre routing, predictive maintenance, autonomous procurement agents, and AI quality control. For discrete, process, and steel/metal fabrication manufacturing.",
    pills: ["Odoo MRP", "AI Agents", "Predictive Maint.", "Quality AI"],
    ai: false,
  },
  {
    icon: "🛒",
    title: "Retail & eCommerce",
    body: "Omnichannel ERP connecting Shopify, Magento, and physical POS to Odoo inventory and accounting. AI demand forecasting, auto-replenishment, customer LTV prediction, and personalisation engine built on your own data.",
    pills: ["Omnichannel", "AI Forecast", "Shopify/Magento"],
    ai: false,
  },
  {
    icon: "🚚",
    title: "Logistics & 3PL",
    body: "Smart WMS with AI route optimisation, real-time SLA monitoring, carrier integration (DHL, Aramex, FedEx), multi-warehouse routing, vendor-managed inventory, and customer delivery portal with live tracking.",
    pills: ["Smart WMS", "Route AI", "SLA Monitor"],
    ai: false,
  },
  {
    icon: "🏥",
    title: "Healthcare",
    body: "HIPAA-aligned Odoo architecture with AI appointment scheduling, patient flow automation, intelligent pharmacy inventory management, insurance and billing automation, and document processing for clinical paperwork.",
    pills: ["HIPAA", "Scheduling AI", "Billing Auto"],
    ai: true,
  },
  {
    icon: "💼",
    title: "Finance & Services",
    body: "AI compliance monitoring, automated multi-currency reconciliation, intelligent CRM with AI lead scoring, KYC and document automation, GCC VAT and GST compliance, and fraud detection for financial institutions.",
    pills: ["AI Reconcile", "Fraud Detection", "GCC VAT"],
    ai: true,
  },
  {
    icon: "🏢",
    title: "Real Estate",
    body: "AI-powered broker CRM with lead qualification, automated lease workflows and contract generation, predictive occupancy analytics, property listing portal, investor reporting, and commission tracking for developers and property managers.",
    pills: ["AI Lead Qualify", "Lease Auto", "Occupancy AI"],
    ai: true,
  },
  {
    icon: "🔩",
    title: "Steel & Metal Fabrication",
    body: "Heat number traceability, BOM for steel products, coil-to-cut production scheduling, weight-based inventory management, quality certificates, and supplier portal for steel service centres and metal distributors.",
    pills: ["Heat Traceability", "Weight Inventory"],
    ai: false,
  },
  {
    icon: "🏗️",
    title: "Construction & Projects",
    body: "Project ERP with BOQ management, subcontractor portal, material procurement linked to project phases, equipment tracking, site progress dashboards, and retention management for construction companies.",
    pills: ["BOQ", "Project ERP", "Subcontractor"],
    ai: false,
  },
  {
    icon: "🧵",
    title: "Textile & Apparel",
    body: "Style-level BOM management, season and collection planning, AI demand forecasting by SKU, yarn and fabric inventory, vendor collaboration portal, and quality inspection workflows for apparel manufacturers and brands.",
    pills: ["Style BOM", "Season Plan", "AI Reorder"],
    ai: false,
  },
] as const;

const STATS = [
  { n: "10+", l: "Industries served globally", g: false },
  { n: "20+", l: "Countries with active deployments", g: false },
  { n: "84%", l: "Client retention rate", g: false },
  { n: "7+", l: "Years of industry ERP experience", g: false },
] as const;

export function IndustriesContent() {
  return (
    <main className="svc-page">

      {/* HERO LUXE */}
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          erp
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Industry Solutions</div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">ERP Built for</span>
            <span className="ln">
              <span className="ai">Your Industry</span>, Not a Template.
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            No generic ERP configurations. Every vertical gets purpose-built Odoo modules, industry-specific AI
            models, compliance configurations tailored to their market, and measurable outcomes mapped before a
            single line of code is written.
          </p>
          <div className="oi-hero-lux-cta rev">
            <Link className="oi-hero-lux-primary" href="/contact-us">
              <span>Discuss Your Industry</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </Link>
            <Link className="oi-hero-lux-secondary" href="/case-studies">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="oi-stats-band">
        <div className="oi-stats-band-inner">
          {STATS.map((s) => (
            <div key={s.l} className="oi-stats-band-item">
              <div className={`oi-stats-band-n${s.g ? " gold" : ""}`}>{s.n}</div>
              <div className="oi-stats-band-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry verticals — original card content */}
      <section className="oi-bento-sec" id="verticals">
        <div className="oi-bento-inner">
          <div className="oi-bento rev">
            {industries.map((it, i) => (
              <div key={it.title} className={`oi-bento-card${it.ai ? " ai" : ""}`}>
                <div className="oi-bento-card-head">
                  <div
                    className="oi-bento-icon"
                    style={{ fontSize: "1.75rem", lineHeight: 1 }}
                    aria-hidden
                  >
                    {it.icon}
                  </div>
                </div>
                <div className="oi-bento-card-t">{it.title}</div>
                <p className="oi-bento-card-b">{it.body}</p>
                <div className="card-pills" style={{ marginTop: "auto", paddingTop: 16 }}>
                  {it.pills.map((p) => (
                    <span key={p} className={`pill ${it.ai ? "pill-ai" : "pill-red"}`}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — original banner copy */}
      <section className="oi-closer" id="contact">
        <div className="oi-closer-inner">
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <h4>
                We Speak <span>Your Industry&apos;s Language</span>
              </h4>
              <p style={{ marginTop: 16, maxWidth: 520, opacity: 0.85, lineHeight: 1.65 }}>
                Tell us your industry and your biggest operational pain. We&apos;ll map the ERP + AI solution in a
                free 60-minute discovery call — with real ROI benchmarks from similar clients.
              </p>
            </div>
            <div className="oi-closer-cta-r">
              <Link className="oi-cta-big" href="/contact-us">
                <span>Book Industry Discovery Call</span>
                <span className="oi-cta-big-arrow">
                  <ArrowRightIcon />
                </span>
              </Link>
              <Link className="oi-closer-cta-link" href="/#platforms">
                Explore ERP Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
