/* ────────────────────────────────────────────────────────────────────────
   MAGENTO → ODOO INTEGRATION — unique page design
   Centered hero + sync flow · Benefit cards · Data mapping · Feature
   rows · Process steps · FAQ · Closer · Support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowRightIcon,
  ArrowsIcon,
  BarChartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  DatabaseIcon,
  EyeIcon,
  FlagIcon,
  GridIcon,
  HeartIcon,
  MailIcon,
  MonitorIcon,
  PackageIcon,
  PhoneCallIcon,
  RefreshIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  SparklesIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Sync flow data types ── */
const SYNC_TYPES = [
  "Products", "Inventory", "Orders", "Customers", "Prices", "Shipments",
] as const;

/* ── Benefits ── */
const BENEFITS = [
  { icon: <RefreshIcon />, t: "Real-Time Sync", stat: "<5s", statLabel: "Sync latency" },
  { icon: <ShieldIcon />, t: "Zero Data Loss", stat: "100%", statLabel: "Accuracy" },
  { icon: <ClockIcon />, t: "No Manual Entry", stat: "0 hrs", statLabel: "Manual work" },
  { icon: <TrendingUpIcon />, t: "Scale Ready", stat: "10K+", statLabel: "Orders/day" },
] as const;

/* ── Data mapping ── */
const MAPPINGS = [
  { magento: "Products & Categories", odoo: "product.product / product.category", icon: <PackageIcon />, direction: "bi" as const },
  { magento: "Stock Quantities", odoo: "stock.quant / stock.warehouse", icon: <GridIcon />, direction: "odoo-to-mg" as const },
  { magento: "Sales Orders", odoo: "sale.order / sale.order.line", icon: <WalletIcon />, direction: "mg-to-odoo" as const },
  { magento: "Customers & Addresses", odoo: "res.partner", icon: <UsersIcon />, direction: "bi" as const },
  { magento: "Price Rules & Tiers", odoo: "product.pricelist", icon: <BarChartIcon />, direction: "odoo-to-mg" as const },
  { magento: "Shipment & Tracking", odoo: "stock.picking", icon: <RocketIcon />, direction: "odoo-to-mg" as const },
] as const;

/* ── Integration features ── */
const FEATURES = [
  { num: "01", icon: <PackageIcon />, t: "Product Sync", s: "Products created or updated in Odoo automatically appear in Magento — name, description, images, attributes, categories, and variants. No manual catalogue management across two systems." },
  { num: "02", icon: <GridIcon />, t: "Inventory Sync", s: "Stock levels update in Magento within seconds of warehouse changes in Odoo. Multi-warehouse quantities, reserved stock, and available-to-promise — all in real time." },
  { num: "03", icon: <WalletIcon />, t: "Order Sync", s: "Magento orders flow to Odoo automatically — line items, shipping details, payment status, and customer data. No re-keying, no CSV imports, no order backlogs." },
  { num: "04", icon: <UsersIcon />, t: "Customer Sync", s: "Customer records, addresses, and account groups sync between systems. Updates in either direction propagate automatically with conflict resolution rules." },
  { num: "05", icon: <BarChartIcon />, t: "Price & Discount Sync", s: "Pricelists, tier pricing, and promotional discounts managed in Odoo push to Magento automatically. One pricing engine, consistent across all channels." },
  { num: "06", icon: <RocketIcon />, t: "Shipment & Tracking", s: "When Odoo dispatches an order, Magento receives the tracking number and updates the customer. Delivery status syncs back for complete order lifecycle visibility." },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Audit", s: "Map data flows between Magento and Odoo", color: "#F26322" },
  { num: "02", t: "Configure", s: "Set up field mapping, sync rules, and conflict resolution", color: "#714B67" },
  { num: "03", t: "Test", s: "Validate with real catalogue and order data", color: "var(--ai)" },
  { num: "04", t: "Go live", s: "Deploy with monitoring, alerts, and rollback plan", color: "#22C55E" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Is the sync real-time or scheduled?", a: "Real-time by default. Changes propagate via webhooks and API polling within seconds. We also support scheduled batch sync for historical migrations or high-volume catalogue updates." },
  { q: "Which Magento and Odoo versions do you support?", a: "Magento 2 (Open Source and Adobe Commerce) and Odoo 14–18. We also support Magento 1 migration + Odoo integration as a combined project." },
  { q: "What happens if an order fails to sync?", a: "Failed records are queued, retried automatically with exponential backoff, and escalated to your monitoring dashboard with full error context. No silent failures." },
  { q: "Can you handle multi-website Magento setups?", a: "Yes. We configure per-website inventory allocation, pricing, and order routing in Odoo. Each Magento website can map to different Odoo warehouses and pricelists." },
  { q: "Do you sync product images and media?", a: "Yes. Product images, galleries, and downloadable files sync from Odoo to Magento. Image URLs are mapped and CDN paths are preserved." },
  { q: "How long does integration take?", a: "Simple product + order sync: 3–4 weeks. Full integration with multi-warehouse inventory, pricing, and shipment tracking: 6–10 weeks." },
] as const;

/* ── Component ── */
export function MagentoOdooContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + sync flow ═══ */}
      <section className="mo-hero">
        <div className="mo-hero-glow mo-hero-glow-1" aria-hidden="true" />
        <div className="mo-hero-glow mo-hero-glow-2" aria-hidden="true" />
        <div className="mo-hero-inner">
          <div className="mo-hero-badge rev">
            <span className="mo-hero-badge-dot" />
            Magento → Odoo integration
          </div>
          <h1 className="mo-hero-h rev">
            Magento → Odoo<br />
            <span className="acc">Integration.</span>
          </h1>
          <p className="mo-hero-sub rev">
            Real-time synchronisation between Magento 2 and Odoo ERP — products, inventory, orders, customers, and pricing. <strong>One source of truth for eCommerce and operations.</strong>
          </p>
          <div className="mo-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your integration roadmap</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#features">See what syncs</a>
          </div>

          {/* Sync flow */}
          <div className="mo-flow rev">
            <div className="mo-flow-node mo-flow-magento">
              <span className="mo-flow-node-dot" style={{ background: "#F26322" }} />
              Magento 2
            </div>
            <div className="mo-flow-center">
              <div className="mo-flow-arrows">
                <span className="mo-flow-arrow-r"><ArrowRightIcon /></span>
                <span className="mo-flow-arrow-l"><ArrowRightIcon /></span>
              </div>
              <div className="mo-flow-types">
                {SYNC_TYPES.map((t) => (
                  <span key={t} className="mo-flow-type">{t}</span>
                ))}
              </div>
            </div>
            <div className="mo-flow-node mo-flow-odoo">
              <span className="mo-flow-node-dot" style={{ background: "#714B67" }} />
              Odoo ERP
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS — 4 cards ═══ */}
      <section className="mo-bens">
        <div className="mo-bens-inner rev">
          {BENEFITS.map((b) => (
            <div key={b.t} className="mo-ben">
              <div className="mo-ben-icon">{b.icon}</div>
              <div className="mo-ben-t">{b.t}</div>
              <div className="mo-ben-stat">{b.stat}</div>
              <div className="mo-ben-stat-l">{b.statLabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DATA MAPPING ═══ */}
      <section className="mo-map" id="mapping">
        <div className="mo-map-inner">
          <div className="mo-map-hdr rev">
            <div className="eyebrow">Data mapping</div>
            <h2>What syncs where.<br /><span>Field by field.</span></h2>
          </div>
          <div className="mo-map-table rev">
            <div className="mo-map-thead">
              <span>Magento</span>
              <span>Direction</span>
              <span>Odoo</span>
            </div>
            {MAPPINGS.map((m) => (
              <div key={m.magento} className="mo-map-row">
                <div className="mo-map-cell">
                  <span className="mo-map-icon">{m.icon}</span>
                  <span>{m.magento}</span>
                </div>
                <div className="mo-map-dir">
                  <span className={`mo-map-dir-badge ${m.direction}`}>
                    {m.direction === "bi" ? "↔" : m.direction === "mg-to-odoo" ? "→" : "←"}
                  </span>
                </div>
                <div className="mo-map-cell mo-map-cell-right">
                  <span>{m.odoo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — numbered rows ═══ */}
      <section className="mo-feat" id="features">
        <div className="mo-feat-inner">
          <div className="mo-feat-hdr rev">
            <div className="eyebrow lt">Integration features</div>
            <h2>Six sync engines.<br /><span>Complete data flow.</span></h2>
          </div>
          <div className="mo-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`mo-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="mo-feat-row-left">
                  <span className="mo-feat-row-num">{f.num}</span>
                  <span className="mo-feat-row-icon">{f.icon}</span>
                </div>
                <div className="mo-feat-row-body">
                  <div className="mo-feat-row-t">{f.t}</div>
                  <p className="mo-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — 4 steps with color bar ═══ */}
      <section className="mo-proc" id="process">
        <div className="mo-proc-inner">
          <div className="mo-proc-hdr rev">
            <div className="eyebrow">Implementation</div>
            <h2>Four steps to<br /><span>live integration.</span></h2>
          </div>
          <div className="mo-proc-grid rev">
            {PROCESS.map((p) => (
              <div key={p.num} className="mo-proc-step">
                <div className="mo-proc-step-bar" style={{ background: p.color }} />
                <div className="mo-proc-step-num">{p.num}</div>
                <div className="mo-proc-step-t">{p.t}</div>
                <p className="mo-proc-step-s">{p.s}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to connect</div>
              <h3>Want Magento and Odoo <span>talking to each other?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an integration engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mo-faq" id="faq">
        <div className="mo-faq-inner">
          <div className="mo-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Magento → Odoo integration.</span></h2>
          </div>
          <div className="mo-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mo-faq-item">
                <summary className="mo-faq-q">{f.q}</summary>
                <p className="mo-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your integration partner</div>
              <h3>Most eCommerce integrations<br /><span>break on order #100.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">60%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of eCommerce-ERP integrations fail to maintain data consistency.</strong>
                  Source: MuleSoft, 2024. The issue is integrations built for happy-path demo scenarios — they break on edge cases like partial shipments, order edits, and multi-warehouse allocation.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer integration is engineered for exceptions first — not just the demo.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Real-time, not batch</div>
                <p className="oi-closer-commit-b">Changes sync within seconds via webhooks and API polling. No overnight batch jobs, no stale inventory, no overselling.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Zero data loss</div>
                <p className="oi-closer-commit-b">Every sync event is logged. Failed records are queued, retried, and escalated. Full audit trail with before/after data.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full monitoring</div>
                <p className="oi-closer-commit-b">Real-time sync dashboard with error rates, latency, and throughput. Alerts trigger when sync falls behind or errors spike.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who architects your integration builds, deploys, and supports it.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free integration audit</div>
              <h4>Get your sync roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your integration audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to our team first</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUPPORT ═══ */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Integration support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior integration engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For sync rules, field mapping, and error resolution. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Sync failures or inventory discrepancies. Answered by a senior integration engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring integration engineers and Magento/Odoo developers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Zero data loss</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
