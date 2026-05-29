/* ────────────────────────────────────────────────────────────────────────
   MULTI-CURRENCY & MULTI-REGION — unique page design
   Centered hero + currency panel · Region cards · Features grid ·
   Stats · Platforms · FAQ · Closer · Support
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

/* ── Currency panel mockup ── */
const CURRENCIES = [
  { code: "INR", symbol: "₹", rate: "1.00", label: "Indian Rupee", base: true },
  { code: "USD", symbol: "$", rate: "0.012", label: "US Dollar", base: false },
  { code: "EUR", symbol: "€", rate: "0.011", label: "Euro", base: false },
  { code: "AED", symbol: "د.إ", rate: "0.044", label: "UAE Dirham", base: false },
] as const;

/* ── Regions ── */
const REGIONS = [
  { region: "India", color: "#FF9933", items: ["INR pricing with GST", "UPI & Razorpay payments", "Hindi/regional language support", "Domestic shipping zones", "GST e-invoicing"] },
  { region: "USA & Canada", color: "#3395FF", items: ["USD/CAD pricing", "Stripe & PayPal payments", "State-level sales tax", "USPS/FedEx/UPS integration", "English (US) localisation"] },
  { region: "UAE & GCC", color: "#00A1E0", items: ["AED/SAR/KWD pricing", "VAT compliance (5%)", "Arabic language support", "Aramex/SMSA shipping", "COD payment option"] },
  { region: "Europe", color: "#7C3AED", items: ["EUR/GBP pricing", "EU VAT reverse charge", "GDPR-compliant checkout", "DHL/DPD/Royal Mail", "Multi-language storefronts"] },
] as const;

/* ── Features ── */
const FEATURES = [
  { icon: <WalletIcon />, t: "Automatic Currency Conversion", s: "Prices display in the customer's local currency with real-time exchange rate updates. Rounding rules configurable per currency for clean pricing (₹999, $11.99, €10.00)." },
  { icon: <ShieldIcon />, t: "Regional Tax Compliance", s: "GST for India, VAT for GCC and EU, sales tax for US states — calculated automatically at checkout based on customer location. Tax rules update when regulations change." },
  { icon: <GridIcon />, t: "Localised Storefronts", s: "Different product catalogues, pricing, payment methods, and shipping options per region. One backend, multiple customer-facing experiences." },
  { icon: <PackageIcon />, t: "Geo-Based Shipping Rules", s: "Shipping zones, carrier selection, and rate calculation based on customer location. Free shipping thresholds configurable per market." },
  { icon: <MailIcon />, t: "Localised Communications", s: "Order confirmations, shipping notifications, and marketing emails in the customer's language and currency. No manual translation per order." },
  { icon: <MonitorIcon />, t: "Unified Reporting", s: "Revenue, orders, and analytics consolidated across all regions — with currency conversion to your base currency. One dashboard for global operations." },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "20+", l: "Currencies supported" },
  { n: "4", l: "Regions configured" },
  { n: "30%", l: "Higher international conversion" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Shopify Markets", color: "#96BF48" },
  { name: "Magento Multi-Store", color: "#F26322" },
  { name: "Odoo Multi-Company", color: "#714B67" },
  { name: "WooCommerce WPML", color: "#96588A" },
  { name: "Razorpay", color: "#3395FF" },
  { name: "Stripe", color: "#635BFF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How does multi-currency pricing work?", a: "Prices are set in your base currency and automatically converted using live exchange rates. You can also set manual prices per currency for strategic pricing (e.g., ₹999 in India, $12.99 in USA). Rounding rules ensure clean price points." },
  { q: "Do you handle tax compliance for different countries?", a: "Yes. GST for India (including e-invoicing), VAT for UAE/GCC/EU, and state-level sales tax for USA — all calculated automatically at checkout based on customer location. Tax rules update when regulations change." },
  { q: "Can I show different products in different regions?", a: "Yes. We configure per-region product catalogues — different products, pricing, shipping options, and payment methods per market. Customers see only what's available and relevant to their region." },
  { q: "Which platforms support multi-currency?", a: "Shopify Markets (built-in), Magento multi-store, Odoo multi-company, and WooCommerce with WPML/multi-currency plugins. We configure the right approach for your platform." },
  { q: "Do you support right-to-left (RTL) languages?", a: "Yes. We configure Arabic and Hebrew RTL support for GCC and Middle East markets — full theme direction, font rendering, and content layout adjustments." },
  { q: "How long does multi-region setup take?", a: "Single additional region: 2–3 weeks. Full multi-region setup (4+ regions with separate tax, shipping, and language): 6–10 weeks." },
] as const;

/* ── Component ── */
export function MultiCurrencyContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + currency panel ═══ */}
      <section className="mc-hero">
        <div className="mc-hero-glow mc-hero-glow-1" aria-hidden="true" />
        <div className="mc-hero-glow mc-hero-glow-2" aria-hidden="true" />
        <div className="mc-hero-inner">
          <div className="mc-hero-badge rev">
            <span className="mc-hero-badge-dot" />
            Multi-currency &amp; multi-region
          </div>
          <h1 className="mc-hero-h rev">
            Multi-Currency &amp;<br />
            <span className="acc">Multi-Region.</span>
          </h1>
          <p className="mc-hero-sub rev">
            Sell globally with localised pricing, regional tax compliance, and geo-based shipping — <strong>one store, every market.</strong>
          </p>
          <div className="mc-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your localisation audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#regions">See regions</a>
          </div>

          {/* Currency panel */}
          <div className="mc-panel rev">
            <div className="mc-panel-bar">
              <span className="mc-panel-bar-title">Live Exchange Rates</span>
              <span className="mc-panel-bar-badge">Auto-updated</span>
            </div>
            <div className="mc-panel-currencies">
              {CURRENCIES.map((c) => (
                <div key={c.code} className={`mc-panel-currency${c.base ? " mc-panel-base" : ""}`}>
                  <div className="mc-panel-currency-code">{c.code}</div>
                  <div className="mc-panel-currency-label">{c.label}</div>
                  <div className="mc-panel-currency-rate">
                    <span className="mc-panel-symbol">{c.symbol}</span>
                    {c.base ? "Base" : c.rate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="mc-stats">
        <div className="mc-stats-inner rev">
          {STATS.map((s, i) => (
            <div key={s.l} className="mc-stat">
              {i > 0 && <span className="mc-stats-sep" />}
              <div className="mc-stat-n">{s.n}</div>
              <div className="mc-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REGIONS ═══ */}
      <section className="mc-regions" id="regions">
        <div className="mc-regions-inner">
          <div className="mc-regions-hdr rev">
            <div className="eyebrow">Regional coverage</div>
            <h2>Four markets.<br /><span>Fully localised.</span></h2>
          </div>
          <div className="mc-regions-grid rev">
            {REGIONS.map((r) => (
              <div key={r.region} className="mc-region" style={{ borderTopColor: r.color }}>
                <div className="mc-region-name" style={{ color: r.color }}>{r.region}</div>
                <div className="mc-region-items">
                  {r.items.map((item) => (
                    <div key={item.slice(0, 20)} className="mc-region-item"><CheckIcon /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="mc-feat" id="features">
        <div className="mc-feat-inner">
          <div className="mc-feat-hdr rev">
            <div className="eyebrow lt">Capabilities</div>
            <h2>Six localisation layers.<br /><span>One unified backend.</span></h2>
          </div>
          <div className="mc-feat-grid rev">
            {FEATURES.map((f) => (
              <div key={f.t} className="mc-feat-card">
                <div className="mc-feat-card-icon">{f.icon}</div>
                <div className="mc-feat-card-t">{f.t}</div>
                <p className="mc-feat-card-s">{f.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="mc-plat">
        <div className="mc-plat-inner rev">
          <div className="mc-plat-label">Platforms we configure for global commerce</div>
          <div className="mc-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="mc-plat-badge">
                <span className="mc-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mc-faq" id="faq">
        <div className="mc-faq-inner">
          <div className="mc-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>multi-currency &amp; multi-region.</span></h2>
          </div>
          <div className="mc-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mc-faq-item">
                <summary className="mc-faq-q">{f.q}</summary>
                <p className="mc-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your localisation partner</div>
              <h3>Most global stores<br /><span>convert currency but not the experience.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">92%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of customers prefer shopping in their local currency.</strong>
                  Source: Shopify, 2024. But currency conversion alone isn&apos;t localisation — customers also expect local payment methods, regional tax calculation, and shipping options that match their market.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer multi-region setup goes beyond currency — localising the entire shopping experience per market.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Full localisation, not just currency</div>
                <p className="oi-closer-commit-b">Pricing, tax, payment methods, shipping, language, and product availability — all localised per region. Not just a currency switcher.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Tax compliance built in</div>
                <p className="oi-closer-commit-b">GST, VAT, sales tax — configured per region and updated automatically when regulations change. Audit-ready from day one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><MonitorIcon /></div>
                <div className="oi-closer-commit-t">Unified reporting</div>
                <p className="oi-closer-commit-b">Revenue, orders, and analytics across all regions — consolidated in your base currency. One dashboard for global operations.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who configures your regions builds, tests, and supports them.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free localisation audit</div>
              <h4>Get your multi-region roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your audit</span>
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
            <div className="eyebrow lt">Localisation support</div>
            <h2>One team for <span>every region.</span></h2>
            <p>Three channels. Senior eCommerce engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For currency rules, tax configuration, and region setup. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Pricing errors or tax calculation issues. Answered by a senior engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring eCommerce localisation engineers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Tax compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
