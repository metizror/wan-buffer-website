/* ────────────────────────────────────────────────────────────────────────
   SHOPIFY → ODOO INTEGRATION — unique page design
   Hero split + sync log · Data flow pills · Integration cards ·
   Asymmetric benefits · Process bar · FAQ · Closer · Support
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

/* ── Sync log mockup ── */
const SYNC_LOG = [
  { time: "Just now", event: "Order #4821 synced to Odoo", type: "order" as const },
  { time: "2s ago", event: "Inventory updated: SKU-339 → 142 units", type: "inventory" as const },
  { time: "8s ago", event: "New customer synced: rahul@example.com", type: "customer" as const },
  { time: "15s ago", event: "Product price updated: ₹2,450 → ₹2,290", type: "product" as const },
  { time: "32s ago", event: "Fulfilment status: Shipped → Delivered", type: "shipment" as const },
] as const;

/* ── Data flows ── */
const DATA_FLOWS = [
  { t: "Products & Variants", direction: "bi" as const },
  { t: "Inventory Levels", direction: "odoo" as const },
  { t: "Orders & Line Items", direction: "shopify" as const },
  { t: "Customers", direction: "bi" as const },
  { t: "Payments & Refunds", direction: "shopify" as const },
  { t: "Fulfilment & Tracking", direction: "odoo" as const },
  { t: "Price Rules", direction: "odoo" as const },
  { t: "Tax & Discounts", direction: "bi" as const },
] as const;

/* ── Integration points ── */
const INTEGRATIONS = [
  { icon: <PackageIcon />, t: "Product & Catalogue Sync", s: "Products, variants, images, descriptions, and metafields push from Odoo to Shopify automatically. Catalogue changes in Odoo appear on your storefront within seconds — one source of truth for product data.", bullets: ["Product creation & updates", "Variant & option sync", "Image & media sync", "Category mapping"] },
  { icon: <GridIcon />, t: "Inventory & Stock Sync", s: "Stock levels update in Shopify the moment warehouse operations change in Odoo. Multi-location inventory, reserved stock, and available-to-promise quantities — all in real time.", bullets: ["Multi-location quantities", "Reserved stock deduction", "Reorder point triggers", "Stock adjustment sync"] },
  { icon: <WalletIcon />, t: "Order & Payment Sync", s: "Shopify orders flow to Odoo within seconds — line items, shipping address, payment method, and discount codes. No manual re-entry, no CSV imports, no order processing delays.", bullets: ["Order creation in Odoo", "Payment status sync", "Refund & cancellation handling", "Discount code mapping"] },
] as const;

/* ── Benefits — asymmetric ── */
const HERO_BENEFIT = { n: "0", l: "Hours of manual data entry per week", sub: "Every order, product, and customer record syncs automatically — eliminating the manual re-entry that causes errors and delays." };
const SIDE_BENEFITS = [
  { icon: <RefreshIcon />, t: "Real-time sync", s: "Changes propagate within seconds via webhooks — not overnight batch jobs." },
  { icon: <ShieldIcon />, t: "Zero data loss", s: "Every sync event logged. Failed records queued, retried, and escalated." },
  { icon: <EyeIcon />, t: "Full visibility", s: "Monitoring dashboard with error rates, latency, and throughput in real time." },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Map", s: "Audit data flows between Shopify and Odoo", color: "#96BF48" },
  { num: "02", t: "Configure", s: "Field mapping, sync rules, conflict resolution", color: "#714B67" },
  { num: "03", t: "Test", s: "Validate with live product and order data", color: "var(--ai)" },
  { num: "04", t: "Deploy", s: "Go live with monitoring, alerts, and rollback", color: "#22C55E" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Is the sync real-time or scheduled?", a: "Real-time by default via Shopify webhooks. Orders, inventory changes, and customer updates propagate within seconds. We also support scheduled batch sync for bulk catalogue updates or historical migrations." },
  { q: "Can you handle Shopify Plus multi-store setups?", a: "Yes. We configure per-store inventory allocation, pricing, and order routing in Odoo. Each Shopify store can map to different Odoo warehouses, pricelists, and sales teams." },
  { q: "What happens when an order fails to sync?", a: "Failed records are queued, retried automatically with exponential backoff, and escalated to your monitoring dashboard with full error context. No orders are ever lost." },
  { q: "Do you sync product images and metafields?", a: "Yes. Product images, galleries, Shopify metafields, and custom attributes sync between systems. Metafield mappings are configurable per product type." },
  { q: "Can you sync refunds and cancellations?", a: "Yes. Refunds processed in either system propagate to the other. Order cancellations, partial refunds, and restocking rules are handled automatically." },
  { q: "How long does integration take?", a: "Simple product + order sync: 2–3 weeks. Full integration with multi-location inventory, pricing, fulfilment, and payment sync: 5–8 weeks." },
] as const;

/* ── Component ── */
export function ShopifyOdooContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + sync log right ═══ */}
      <section className="so-hero">
        <div className="so-hero-glow so-hero-glow-1" aria-hidden="true" />
        <div className="so-hero-glow so-hero-glow-2" aria-hidden="true" />
        <div className="so-hero-inner">
          <div className="so-hero-content">
            <div className="so-hero-badge rev">
              <span className="so-hero-badge-dot" />
              Shopify → Odoo integration
            </div>
            <h1 className="so-hero-h rev">
              Shopify → Odoo<br />
              <span className="acc">Integration.</span>
            </h1>
            <p className="so-hero-sub rev">
              Real-time sync between Shopify and Odoo ERP — products, inventory, orders, customers, and payments. <strong>One source of truth for eCommerce and operations.</strong>
            </p>
            <div className="so-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your integration roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#integrations">See what syncs</a>
            </div>
          </div>

          {/* Sync activity log */}
          <div className="so-log rev">
            <div className="so-log-bar">
              <span className="so-log-bar-icon"><RefreshIcon /></span>
              <span className="so-log-bar-title">Sync Activity</span>
              <span className="so-log-bar-status">Live</span>
            </div>
            {SYNC_LOG.map((l, i) => (
              <div key={i} className={`so-log-item so-log-${l.type}`}>
                <div className="so-log-dot" />
                <div className="so-log-event">{l.event}</div>
                <div className="so-log-time">{l.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA FLOW PILLS ═══ */}
      <section className="so-flows">
        <div className="so-flows-inner rev">
          <div className="so-flows-label">Data types we sync</div>
          <div className="so-flows-pills">
            {DATA_FLOWS.map((f) => (
              <span key={f.t} className={`so-flow-pill so-flow-${f.direction}`}>
                <span className="so-flow-dir">{f.direction === "bi" ? "↔" : f.direction === "shopify" ? "→" : "←"}</span>
                {f.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATION POINTS — 3 cards ═══ */}
      <section className="so-int" id="integrations">
        <div className="so-int-inner">
          <div className="so-int-hdr rev">
            <div className="eyebrow">Integration points</div>
            <h2>Three sync engines.<br /><span>Complete data flow.</span></h2>
            <p>Each integration is built with Shopify webhooks and Odoo XML-RPC/JSON-RPC APIs — real-time, bi-directional, and engineered for high-volume eCommerce operations.</p>
          </div>
          <div className="so-int-grid rev">
            {INTEGRATIONS.map((intg) => (
              <div key={intg.t} className="so-int-card">
                <div className="so-int-card-icon">{intg.icon}</div>
                <div className="so-int-card-t">{intg.t}</div>
                <p className="so-int-card-s">{intg.s}</p>
                <div className="so-int-card-bullets">
                  {intg.bullets.map((b) => (
                    <div key={b.slice(0, 20)} className="so-int-card-bullet"><CheckIcon /><span>{b}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS — asymmetric ═══ */}
      <section className="so-bens" id="benefits">
        <div className="so-bens-inner">
          <div className="so-bens-hdr rev">
            <div className="eyebrow lt">Why integrate</div>
            <h2>Eliminate the gap between<br /><span>selling and fulfilling.</span></h2>
          </div>
          <div className="so-bens-split rev">
            <div className="so-bens-hero">
              <div className="so-bens-hero-n">{HERO_BENEFIT.n}</div>
              <div className="so-bens-hero-l">{HERO_BENEFIT.l}</div>
              <p className="so-bens-hero-sub">{HERO_BENEFIT.sub}</p>
            </div>
            <div className="so-bens-side">
              {SIDE_BENEFITS.map((b) => (
                <div key={b.t} className="so-bens-side-card">
                  <div className="so-bens-side-icon">{b.icon}</div>
                  <div>
                    <div className="so-bens-side-t">{b.t}</div>
                    <p className="so-bens-side-s">{b.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — color bar steps ═══ */}
      <section className="so-proc" id="process">
        <div className="so-proc-inner">
          <div className="so-proc-hdr rev">
            <div className="eyebrow">Implementation</div>
            <h2>Four steps to<br /><span>live integration.</span></h2>
          </div>
          <div className="so-proc-grid rev">
            {PROCESS.map((p) => (
              <div key={p.num} className="so-proc-step">
                <div className="so-proc-step-bar" style={{ background: p.color }} />
                <div className="so-proc-step-num">{p.num}</div>
                <div className="so-proc-step-t">{p.t}</div>
                <p className="so-proc-step-s">{p.s}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to connect</div>
              <h3>Want Shopify and Odoo <span>working together?</span></h3>
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
      <section className="so-faq" id="faq">
        <div className="so-faq-inner">
          <div className="so-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Shopify → Odoo integration.</span></h2>
          </div>
          <div className="so-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="so-faq-item">
                <summary className="so-faq-q">{f.q}</summary>
                <p className="so-faq-a">{f.a}</p>
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
              <h3>Most Shopify-ERP integrations<br /><span>work in demos, break in production.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">60%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of eCommerce integrations fail to maintain data consistency after 90 days.</strong>
                  Source: MuleSoft, 2024. The cause is integrations that handle simple scenarios but break on partial fulfilments, multi-location inventory, and order edits.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer integration is engineered for edge cases first — not just happy-path demos.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Real-time, not batch</div>
                <p className="oi-closer-commit-b">Changes sync within seconds via Shopify webhooks. No overnight batch jobs, no stale inventory, no overselling.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Zero data loss</div>
                <p className="oi-closer-commit-b">Every sync event logged. Failed records queued, retried, and escalated. Full audit trail with before/after payloads.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full monitoring</div>
                <p className="oi-closer-commit-b">Real-time sync dashboard with error rates, latency, and throughput. Alerts trigger when sync falls behind.</p>
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
              <p className="oi-supp-body-v2">Hiring Shopify/Odoo integration engineers.</p>
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
