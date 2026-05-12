import Link from "next/link";

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

export function IndustriesContent() {
  return (
    <main className="industries-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="breadcrumb-sep">›</span>
        <span className="breadcrumb-cur">Industries</span>
      </nav>

      <section className="page-hero">
        <div className="ph-inner rev">
          <div className="ph-tag">Industry Solutions</div>
          <h1 className="ph-h">
            ERP Built for <span className="acc">Your Industry</span>,<br />
            Not a Template.
          </h1>
          <p className="ph-p">
            No generic ERP configurations. Every vertical gets purpose-built Odoo modules, industry-specific AI models,
            compliance configurations tailored to their market, and measurable outcomes mapped before a single line of
            code is written.
          </p>
          <div className="ph-btns">
            <Link className="btn-r" href="/contact-us">
              Discuss Your Industry
            </Link>
            <Link className="btn-o" href="/case-studies">
              View Case Studies
            </Link>
          </div>
          <div className="ph-stats">
            <div className="ph-stat">
              <strong>10+</strong>
              <span>Industries served globally</span>
            </div>
            <div className="ph-stat">
              <strong>20+</strong>
              <span>Countries with active deployments</span>
            </div>
            <div className="ph-stat">
              <strong>84%</strong>
              <span>Client retention rate</span>
            </div>
            <div className="ph-stat">
              <strong>7+</strong>
              <span>Years of industry ERP experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="cards-grid g3 rev">
          {industries.map((it) => (
            <div key={it.title} className={`card${it.ai ? " ai-card" : ""}`}>
              <div className="card-icon" style={{ fontSize: 26 }}>
                {it.icon}
              </div>
              <div className="card-t">{it.title}</div>
              <div className="card-s">{it.body}</div>
              <div className="card-pills">
                {it.pills.map((p) => (
                  <span key={p} className={`pill ${it.ai ? "pill-ai" : "pill-red"}`}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-banner">
        <div className="cta-banner-inner rev">
          <h2>
            We Speak <span style={{ color: "var(--ai)" }}>Your Industry&apos;s Language</span>
          </h2>
          <p>
            Tell us your industry and your biggest operational pain. We&apos;ll map the ERP + AI solution in a free 60-minute
            discovery call — with real ROI benchmarks from similar clients.
          </p>
          <div className="cta-banner-btns">
            <Link className="btn-r" href="/contact-us">
              Book Industry Discovery Call
            </Link>
            <Link className="btn-o" href="/#platforms">
              Explore ERP Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

