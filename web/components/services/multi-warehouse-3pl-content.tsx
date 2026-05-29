/* ────────────────────────────────────────────────────────────────────────
   MULTI-WAREHOUSE + 3PL SYNC — unique page design
   Hero split + network map · 3PL partner cards · Feature rows ·
   Fulfilment flow · Stats · FAQ · Closer · Support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowRightIcon,
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

/* ── Network map nodes ── */
const LOCATIONS = [
  { name: "Main Warehouse", city: "Mumbai", stock: "4,200 SKUs", status: "primary" as const },
  { name: "Regional Hub", city: "Delhi", stock: "1,800 SKUs", status: "active" as const },
  { name: "3PL Partner", city: "Bangalore", stock: "API sync", status: "partner" as const },
] as const;

/* ── 3PL partners ── */
const PARTNERS = [
  { icon: <PackageIcon />, t: "Shiprocket", s: "Auto label generation, tracking sync, rate shopping across 17+ carriers, and NDR management — connected to your ERP.", status: "Integrated" },
  { icon: <RocketIcon />, t: "Delhivery", s: "Warehouse-in/out sync, reverse logistics, weight discrepancy resolution, and COD remittance tracking.", status: "Integrated" },
  { icon: <CloudIcon />, t: "Custom 3PL API", s: "Any 3PL with an API — we build custom connectors for ASN, GRN, despatch, and returns with full error handling.", status: "Configurable" },
] as const;

/* ── Features ── */
const FEATURES = [
  { icon: <SettingsIcon />, t: "Intelligent Order Routing", s: "Orders route to the optimal warehouse or 3PL based on proximity to customer, stock availability, carrier cost, and delivery SLA. Rules engine configurable per product category, region, and order value." },
  { icon: <RefreshIcon />, t: "Real-Time Inventory Sync", s: "Stock levels sync across all warehouses and 3PL partners within seconds. Available-to-promise quantities calculated in real time — no overselling, no manual stock counts." },
  { icon: <PackageIcon />, t: "Inter-Warehouse Transfers", s: "When a location runs low, the system triggers internal transfers automatically. Transfer orders create, route for approval, and update stock at both ends — zero manual intervention." },
  { icon: <MonitorIcon />, t: "Fulfilment Dashboard", s: "Live visibility into order status, warehouse utilisation, 3PL performance, carrier SLAs, and delivery exceptions — across every location from a single screen." },
  { icon: <RocketIcon />, t: "Carrier Rate Shopping", s: "Compare rates across carriers in real time at dispatch. Auto-select the cheapest or fastest option based on order priority, weight, and destination." },
  { icon: <ShieldIcon />, t: "Returns & Reverse Logistics", s: "Return requests route to the nearest warehouse or 3PL. Quality inspection gates, refund triggers, and restocking rules run automatically." },
] as const;

/* ── Fulfilment flow ── */
const FLOW = [
  { icon: <WalletIcon />, t: "Order", s: "Customer places order on any channel" },
  { icon: <SettingsIcon />, t: "Route", s: "AI selects optimal fulfilment location" },
  { icon: <SearchIcon />, t: "Pick", s: "Warehouse or 3PL picks and packs" },
  { icon: <RocketIcon />, t: "Ship", s: "Carrier dispatches with live tracking" },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "40%", l: "Faster delivery" },
  { n: "25%", l: "Lower shipping cost" },
  { n: "99.5%", l: "Inventory accuracy" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho Inventory", color: "#D32011" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Magento", color: "#F26322" },
  { name: "Shiprocket", color: "#E63946" },
  { name: "Delhivery", color: "#D32011" },
  { name: "FedEx", color: "#4D148C" },
  { name: "Custom WMS", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How does intelligent order routing work?", a: "When an order arrives, the routing engine evaluates all fulfilment locations — checking stock availability, proximity to customer, carrier costs, and delivery SLAs. The optimal location is selected automatically. Rules are configurable per product, region, and priority." },
  { q: "Can you integrate with any 3PL provider?", a: "Yes. We integrate with Shiprocket, Delhivery, FedEx, DHL, BlueDart, and any 3PL with an API. Custom connectors handle ASN, GRN, dispatch confirmation, tracking, and returns." },
  { q: "How quickly does inventory sync across locations?", a: "Within seconds via webhooks and API polling. Stock changes at any warehouse or 3PL propagate to all connected systems in real time — ERP, eCommerce storefront, and fulfilment dashboard." },
  { q: "Do you handle returns and reverse logistics?", a: "Yes. Return requests route to the nearest location. Quality inspection, refund triggers, and restocking rules are automated. Return analytics track reasons, costs, and patterns." },
  { q: "Which ERP and eCommerce platforms do you support?", a: "Odoo, Zoho, SAP for ERP. Shopify, Magento, WooCommerce for eCommerce. We build the middleware that connects your storefront, ERP, and 3PL partners into one system." },
  { q: "How long does implementation take?", a: "Single warehouse + 1 3PL: 3–4 weeks. Multi-warehouse with intelligent routing and multiple 3PLs: 6–10 weeks. Complexity depends on the number of locations, carriers, and routing rules." },
] as const;

/* ── Component ── */
export function MultiWarehouse3plContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + network map right ═══ */}
      <section className="mw-hero">
        <div className="mw-hero-glow mw-hero-glow-1" aria-hidden="true" />
        <div className="mw-hero-glow mw-hero-glow-2" aria-hidden="true" />
        <div className="mw-hero-inner">
          <div className="mw-hero-content">
            <div className="mw-hero-badge rev">
              <span className="mw-hero-badge-dot" />
              Multi-warehouse + 3PL sync
            </div>
            <h1 className="mw-hero-h rev">
              Multi-Warehouse<br />+ 3PL Sync.<br />
              <span className="acc">Route. Ship. Track.</span>
            </h1>
            <p className="mw-hero-sub rev">
              Intelligent order routing, real-time inventory sync across locations, and 3PL partner integration — <strong>one system for every fulfilment point.</strong>
            </p>
            <div className="mw-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your fulfilment audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Network map */}
          <div className="mw-network rev">
            <div className="mw-network-title">Fulfilment Network</div>
            {LOCATIONS.map((loc, i) => (
              <div key={loc.name} className={`mw-network-node mw-network-${loc.status}`}>
                <div className="mw-network-node-dot" />
                <div className="mw-network-node-body">
                  <div className="mw-network-node-name">{loc.name}</div>
                  <div className="mw-network-node-city">{loc.city}</div>
                </div>
                <div className="mw-network-node-stock">{loc.stock}</div>
                {i < LOCATIONS.length - 1 && <div className="mw-network-conn" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="mw-stats">
        <div className="mw-stats-inner rev">
          {STATS.map((s, i) => (
            <div key={s.l} className="mw-stat">
              {i > 0 && <span className="mw-stats-sep" />}
              <div className="mw-stat-n">{s.n}</div>
              <div className="mw-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 3PL PARTNERS ═══ */}
      <section className="mw-partners">
        <div className="mw-partners-inner">
          <div className="mw-partners-hdr rev">
            <div className="eyebrow">3PL integrations</div>
            <h2>Connect any<br /><span>fulfilment partner.</span></h2>
          </div>
          <div className="mw-partners-grid rev">
            {PARTNERS.map((p) => (
              <div key={p.t} className="mw-partner">
                <div className="mw-partner-head">
                  <div className="mw-partner-icon">{p.icon}</div>
                  <span className="mw-partner-status">{p.status}</span>
                </div>
                <div className="mw-partner-t">{p.t}</div>
                <p className="mw-partner-s">{p.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — rows ═══ */}
      <section className="mw-feat" id="features">
        <div className="mw-feat-inner">
          <div className="mw-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete fulfilment control.</span></h2>
          </div>
          <div className="mw-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.t} className={`mw-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="mw-feat-row-icon">{f.icon}</div>
                <div className="mw-feat-row-body">
                  <div className="mw-feat-row-t">{f.t}</div>
                  <p className="mw-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FULFILMENT FLOW ═══ */}
      <section className="mw-flow" id="flow">
        <div className="mw-flow-inner">
          <div className="mw-flow-hdr rev">
            <div className="eyebrow">Order journey</div>
            <h2>From order to<br /><span>doorstep.</span></h2>
          </div>
          <div className="mw-flow-steps rev">
            {FLOW.map((f, i) => (
              <div key={f.t} className="mw-flow-step-wrap">
                {i > 0 && <div className="mw-flow-conn"><ArrowRightIcon /></div>}
                <div className="mw-flow-step">
                  <div className="mw-flow-step-icon">{f.icon}</div>
                  <div className="mw-flow-step-t">{f.t}</div>
                  <div className="mw-flow-step-s">{f.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to scale</div>
              <h3>Want your fulfilment <span>network connected?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a logistics engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="mw-plat">
        <div className="mw-plat-inner rev">
          <div className="mw-plat-label">ERP, eCommerce &amp; logistics integrations</div>
          <div className="mw-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="mw-plat-badge">
                <span className="mw-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mw-faq" id="faq">
        <div className="mw-faq-inner">
          <div className="mw-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>multi-warehouse &amp; 3PL.</span></h2>
          </div>
          <div className="mw-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mw-faq-item">
                <summary className="mw-faq-q">{f.q}</summary>
                <p className="mw-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your fulfilment partner</div>
              <h3>Most multi-warehouse setups<br /><span>create more complexity, not less.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">45%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of multi-location businesses have inventory discrepancies across systems.</strong>
                  Source: Zebra Technologies, 2024. The cause is disconnected warehouses — each with its own stock count, its own processes, and no real-time sync to the systems that matter.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer multi-warehouse deployment connects everything — ERP, eCommerce, warehouses, and 3PL partners — into one real-time system.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Real-time sync everywhere</div>
                <p className="oi-closer-commit-b">Stock changes at any location propagate within seconds. No batch jobs, no stale counts, no overselling.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><SettingsIcon /></div>
                <div className="oi-closer-commit-t">Intelligent routing</div>
                <p className="oi-closer-commit-b">Orders route to the optimal location based on proximity, stock, cost, and SLA. Rules engine is configurable per product and region.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full visibility</div>
                <p className="oi-closer-commit-b">One dashboard for all locations, carriers, and 3PL partners. Stock levels, order status, and delivery performance — real time.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who designs your fulfilment network builds, deploys, and supports it.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free fulfilment audit</div>
              <h4>Get your multi-warehouse roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your fulfilment audit</span>
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
            <div className="eyebrow lt">Fulfilment support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior logistics engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For routing rules, 3PL sync, and inventory questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Sync failures or fulfilment blockers. Answered by a senior logistics engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring logistics engineers and integration developers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><RefreshIcon /> Real-time sync</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Zero data loss</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
