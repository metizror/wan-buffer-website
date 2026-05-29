/* ────────────────────────────────────────────────────────────────────────
   RETAIL & eCOMMERCE — unique page design
   Hero split + live orders mock · Operations cards · Alternating feature
   rows · Dotted process flow · Multi-channel section ·
   Platforms · FAQ · Closer · Support
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
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Live orders mockup ── */
const LIVE_ORDERS = [
  { id: "#ORD-4821", channel: "Shopify", items: 3, total: "$128.50", status: "fulfilled" as const },
  { id: "#ORD-4822", channel: "POS Store", items: 1, total: "$45.00", status: "completed" as const },
  { id: "#ORD-4823", channel: "Magento", items: 5, total: "$312.75", status: "processing" as const },
  { id: "#ORD-4824", channel: "Amazon", items: 2, total: "$89.99", status: "fulfilled" as const },
  { id: "#ORD-4825", channel: "Instagram", items: 1, total: "$67.00", status: "pending" as const },
  { id: "#ORD-4826", channel: "Walk-in", items: 4, total: "$205.20", status: "completed" as const },
] as const;

/* ── Retail operations ── */
const OPERATIONS = [
  { icon: <GridIcon />, t: "Omnichannel Orders", s: "Unified order management across online stores, marketplaces, social commerce, and physical POS — every order routed, tracked, and fulfilled from one system.", color: "ai" as const },
  { icon: <SparklesIcon />, t: "AI Demand Forecasting", s: "Machine learning models that analyse sales history, seasonality, promotions, and external signals to predict demand — reducing stockouts by up to 60% and overstock by 35%.", color: "green" as const },
  { icon: <TrendingUpIcon />, t: "Dynamic Pricing", s: "AI-driven price optimisation that adjusts in real time based on competitor pricing, demand elasticity, inventory levels, and margin targets across every channel.", color: "purple" as const },
  { icon: <UsersIcon />, t: "Customer Intelligence", s: "AI-powered segmentation, lifetime value prediction, churn risk scoring, and personalised recommendation engines that increase average order value by 25%.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Unified Inventory Sync", s: "Single source of truth for stock across Shopify, Magento, Amazon, POS terminals, and warehouses. Real-time sync prevents overselling and enables ship-from-store, BOPIS, and cross-channel fulfilment." },
  { num: "02", icon: <SparklesIcon />, t: "AI Demand Forecasting", s: "Predictive models trained on your sales data, seasonal patterns, marketing calendar, and external signals. Automated reorder points adjust dynamically — no more gut-feel purchasing." },
  { num: "03", icon: <MonitorIcon />, t: "Omnichannel POS Integration", s: "Odoo POS, Shopify POS, and custom terminal integration — unified customer profiles, loyalty programmes, gift cards, and returns that work identically online and in-store." },
  { num: "04", icon: <TargetIcon />, t: "Dynamic Pricing Engine", s: "Rule-based and AI-driven pricing across channels. Competitor monitoring, demand-based adjustments, flash sale automation, and margin guardrails — all managed from your ERP." },
  { num: "05", icon: <UsersIcon />, t: "Customer Segmentation & LTV", s: "AI clusters customers by behaviour, purchase frequency, and lifetime value. Automated campaigns trigger based on segment — win-back, upsell, VIP tiers, and churn prevention." },
  { num: "06", icon: <BarChartIcon />, t: "Retail Analytics & BI", s: "Real-time dashboards for sales velocity, basket analysis, channel performance, margin by SKU, and inventory turnover. Drill from company-level KPIs to individual transaction." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Discover", s: "Audit channels, data flows & customer journeys" },
  { icon: <SettingsIcon />, t: "Integrate", s: "Connect channels, POS, warehouse & payments" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer product, customer & order history" },
  { icon: <RocketIcon />, t: "Go live", s: "Launch with training & parallel run" },
] as const;

/* ── Multi-channel locations ── */
const CHANNELS = [
  { t: "Online Storefront", sub: "Shopify, Magento, or custom web store", orders: "2.4k", active: true },
  { t: "Physical Retail", sub: "POS terminals across store locations", orders: "890", active: true },
  { t: "Marketplaces", sub: "Amazon, Flipkart, Noon integration", orders: "0", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo POS", color: "#714B67" },
  { name: "Odoo eCommerce", color: "#714B67" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Magento", color: "#F46F25" },
  { name: "Amazon", color: "#FF9900" },
  { name: "Razorpay", color: "#2D70F6" },
  { name: "Custom AI Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you sync inventory across Shopify, Magento, and physical stores in real time?", a: "Yes. We configure real-time bidirectional inventory sync across all your channels — Shopify, Magento, Amazon, POS terminals, and warehouses. Stock updates propagate within seconds, preventing overselling and enabling cross-channel fulfilment strategies like ship-from-store and BOPIS." },
  { q: "How does AI demand forecasting work for seasonal products?", a: "Our ML models analyse 2–3 years of sales history, seasonal patterns, promotional calendars, and external signals like weather and market trends. The system generates SKU-level demand forecasts with confidence intervals and automatically adjusts reorder points — especially effective for seasonal and trend-driven categories." },
  { q: "Can you integrate loyalty programmes across online and offline?", a: "Yes. We build unified loyalty programmes that work identically across your Shopify store, POS terminals, and marketplace orders. Points, tiers, gift cards, and rewards sync in real time — customers earn and redeem regardless of channel." },
  { q: "Do you support multi-currency and multi-region retail?", a: "Yes. We configure multi-currency pricing, region-specific tax rules (GST, GCC VAT, EU VAT), localised checkout flows, and multi-warehouse fulfilment routing. A single ERP manages your entire global retail operation." },
  { q: "How does dynamic pricing avoid margin erosion?", a: "Every pricing rule includes margin guardrails — minimum margin thresholds that the AI cannot breach. Rules can be layered: competitor-based floor, demand-based adjustment, and promotion caps. All price changes are logged and auditable." },
  { q: "How long does an omnichannel ERP implementation take?", a: "Single-channel Shopify or Magento integration takes 3–4 weeks. Full omnichannel with POS, marketplace, and AI forecasting takes 8–14 weeks. Enterprise multi-region setups with custom AI models take 12–20 weeks." },
] as const;

/* ── Component ── */
export function RetailEcommerceContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + live orders right ═══ */}
      <section className="re-hero">
        <div className="re-hero-glow re-hero-glow-1" aria-hidden="true" />
        <div className="re-hero-glow re-hero-glow-2" aria-hidden="true" />
        <div className="re-hero-inner">
          <div className="re-hero-content">
            <div className="re-hero-badge rev">
              <span className="re-hero-badge-dot" />
              Retail &amp; eCommerce
            </div>
            <h1 className="re-hero-h rev">
              Retail &amp;<br />eCommerce.<br />
              <span className="acc">Every channel. One system.</span>
            </h1>
            <p className="re-hero-sub rev">
              Omnichannel order management, AI demand forecasting, unified inventory, dynamic pricing, and customer intelligence — <strong>integrated into your ERP.</strong>
            </p>
            <div className="re-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your retail audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Live orders mockup */}
          <div className="re-orders rev">
            <div className="re-orders-title">Live Orders — All Channels</div>
            <div className="re-orders-list">
              {LIVE_ORDERS.map((o) => (
                <div key={o.id} className={`re-order re-order-${o.status}`}>
                  <div className="re-order-top">
                    <span className="re-order-id">{o.id}</span>
                    <span className={`re-order-status re-order-status-${o.status}`}>
                      {o.status === "fulfilled" ? "Fulfilled" : o.status === "completed" ? "Completed" : o.status === "processing" ? "Processing" : "Pending"}
                    </span>
                  </div>
                  <div className="re-order-mid">
                    <span className="re-order-channel">{o.channel}</span>
                    <span className="re-order-items">{o.items} item{o.items > 1 ? "s" : ""}</span>
                  </div>
                  <div className="re-order-total">{o.total}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="re-ops">
        <div className="re-ops-inner">
          <div className="re-ops-hdr rev">
            <div className="eyebrow">Retail operations</div>
            <h2>Sell. Forecast. Price.<br /><span>Personalise.</span></h2>
          </div>
          <div className="re-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`re-op re-op-${op.color}`}>
                <div className="re-op-icon">{op.icon}</div>
                <div className="re-op-t">{op.t}</div>
                <p className="re-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="re-feat" id="features">
        <div className="re-feat-inner">
          <div className="re-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete retail control.</span></h2>
          </div>
          <div className="re-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`re-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="re-feat-row-num">{f.num}</div>
                <div className="re-feat-row-icon">{f.icon}</div>
                <div className="re-feat-row-body">
                  <div className="re-feat-row-t">{f.t}</div>
                  <p className="re-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="re-proc" id="process">
        <div className="re-proc-inner">
          <div className="re-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>unified commerce.</span></h2>
          </div>
          <div className="re-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="re-proc-step-wrap">
                {i > 0 && <div className="re-proc-dots" />}
                <div className="re-proc-step">
                  <div className="re-proc-step-icon">{p.icon}</div>
                  <div className="re-proc-step-t">{p.t}</div>
                  <div className="re-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to unify</div>
              <h3>Want every channel <span>working as one?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a retail engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-CHANNEL — split ═══ */}
      <section className="re-multi" id="multi-channel">
        <div className="re-multi-inner">
          <div className="re-multi-hdr rev">
            <div className="eyebrow lt">Multi-channel</div>
            <h2>One system.<br /><span>Every storefront.</span></h2>
          </div>
          <div className="re-multi-split rev">
            <div className="re-multi-left">
              <div className="re-multi-big-n">5+</div>
              <div className="re-multi-big-l">Sales channels managed from one ERP</div>
              <p className="re-multi-big-s">Online stores, physical POS, marketplaces, social commerce, and wholesale — all orchestrated from a single system with real-time inventory visibility and unified customer profiles across every touchpoint.</p>
            </div>
            <div className="re-multi-right">
              {CHANNELS.map((ch) => (
                <div key={ch.t} className={`re-multi-loc${ch.active ? "" : " inactive"}`}>
                  <div className="re-multi-loc-t">{ch.t}</div>
                  <div className="re-multi-loc-sub">{ch.sub}</div>
                  {ch.active && <div className="re-multi-loc-stat">{ch.orders} orders / month</div>}
                  {!ch.active && <div className="re-multi-loc-stat">API integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="re-plat">
        <div className="re-plat-inner rev">
          <div className="re-plat-label">Retail &amp; eCommerce integrations</div>
          <div className="re-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="re-plat-badge">
                <span className="re-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="re-faq" id="faq">
        <div className="re-faq-inner">
          <div className="re-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Retail &amp; eCommerce ERP.</span></h2>
          </div>
          <div className="re-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="re-faq-item">
                <summary className="re-faq-q">{f.q}</summary>
                <p className="re-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your retail partner</div>
              <h3>Most ERPs track transactions,<br /><span>not customer intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">43%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of retailers still manage channels in separate systems.</strong>
                  Source: McKinsey, 2024. The result is overselling, inconsistent pricing, fragmented customer data, and zero cross-channel visibility — problems that compound as you add channels.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer retail deployment covers the full commerce lifecycle — not just order processing. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Every channel connected to one ERP</div>
                <p className="oi-closer-commit-b">We integrate every sales channel — online stores, POS, marketplaces, and social — into a single system. Inventory, orders, and customer data sync in real time with zero manual intervention.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy &amp; speed targets</div>
                <p className="oi-closer-commit-b">Inventory accuracy, order fulfilment speed, and forecast precision are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">AI-first forecasting &amp; pricing</div>
                <p className="oi-closer-commit-b">Every demand forecast is ML-powered. Every pricing decision is data-driven. No spreadsheet-based guessing — predictive models that learn and improve with every transaction.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior retail engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your retail operations is the one who integrates, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free retail audit</div>
              <h4>Get your omnichannel roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your retail audit</span>
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
            <div className="eyebrow lt">Retail support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior retail engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For channel integration, inventory sync, and pricing rule questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Order sync failures or inventory discrepancy incidents. Answered by a senior retail engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring retail ERP engineers and eCommerce integration specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior retail engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
