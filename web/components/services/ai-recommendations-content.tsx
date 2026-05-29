/* ────────────────────────────────────────────────────────────────────────
   AI PRODUCT RECOMMENDATIONS — unique page design
   Centered hero + reco widget · Recommendation types · Data flow ·
   Features grid · Results split · FAQ · Closer · Support
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

/* ── Recommendation widget mockup ── */
const RECO_PRODUCTS = [
  { name: "Wireless Earbuds Pro", price: "₹3,490", confidence: "96%" },
  { name: "Leather Laptop Sleeve", price: "₹2,190", confidence: "91%" },
  { name: "USB-C Hub Adapter", price: "₹1,650", confidence: "88%" },
] as const;

/* ── Recommendation types ── */
const RECO_TYPES = [
  { icon: <GridIcon />, t: "Frequently Bought Together", s: "Products commonly purchased in the same order — auto-surfaced at cart and checkout.", color: "ai" as const },
  { icon: <SparklesIcon />, t: "You May Also Like", s: "Personalised suggestions based on browse history, purchase patterns, and similar customer behaviour.", color: "purple" as const },
  { icon: <TrendingUpIcon />, t: "Trending Now", s: "Products gaining momentum in your catalogue — surfaced on homepage and category pages.", color: "green" as const },
  { icon: <RefreshIcon />, t: "Recently Viewed + Reorder", s: "Bring customers back to products they browsed or help repeat buyers reorder fast.", color: "amber" as const },
] as const;

/* ── Data flow ── */
const DATA_FLOW = [
  { icon: <UsersIcon />, t: "Behaviour Data", s: "Browsing · Purchases · Cart actions" },
  { icon: <CpuIcon />, t: "ML Models", s: "Collaborative filtering · Content-based" },
  { icon: <SparklesIcon />, t: "Personalised Results", s: "Widget · Email · Push notifications" },
] as const;

/* ── Features ── */
const FEATURES = [
  { icon: <CpuIcon />, t: "Real-Time Personalisation", s: "Recommendations update in real time as customers browse, add to cart, and purchase. No batch jobs — every page load reflects the latest behaviour." },
  { icon: <BarChartIcon />, t: "A/B Testing Built In", s: "Test different recommendation algorithms, widget placements, and strategies. Measure impact on AOV and conversion rate with statistical significance." },
  { icon: <GridIcon />, t: "Cross-Sell & Upsell Logic", s: "Rules engine for cross-sell (complementary products) and upsell (higher-tier alternatives). AI learns which strategies work for which customer segments." },
  { icon: <MailIcon />, t: "Email & Push Recommendations", s: "Personalised product suggestions in abandoned cart emails, post-purchase follow-ups, and push notifications — not just on-site." },
  { icon: <MonitorIcon />, t: "Performance Dashboard", s: "Track recommendation click-through rate, add-to-cart rate, revenue attributed, and AOV impact. See which widget placements drive the most revenue." },
  { icon: <ShieldIcon />, t: "Privacy-First Architecture", s: "No third-party cookies required. First-party data only. GDPR and CCPA compliant by design. Customer data never leaves your infrastructure." },
] as const;

/* ── Results ── */
const HERO_RESULT = { n: "25%", l: "Avg AOV increase", sub: "Average order value improvement across our recommendation engine deployments — measured against pre-deployment baselines." };
const SIDE_RESULTS = [
  { n: "15%", l: "Conversion rate lift" },
  { n: "3.2×", l: "Click-to-purchase on recos" },
  { n: "40%", l: "Of revenue from recos" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Shopify", color: "#96BF48" },
  { name: "Magento", color: "#F26322" },
  { name: "WooCommerce", color: "#96588A" },
  { name: "Custom Stores", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How do AI product recommendations work?", a: "ML models analyse customer behaviour (browsing, purchases, cart actions) and product attributes (category, price, features) to predict which products each customer is most likely to buy. Recommendations are generated in real time for every page load." },
  { q: "Which eCommerce platforms do you support?", a: "Shopify, Magento 2, WooCommerce, and custom-built stores. We deploy via JavaScript widget, API integration, or native app — depending on your platform." },
  { q: "How long does it take to see results?", a: "Recommendation widgets go live in 2–3 weeks. ML models need 2–4 weeks of behavioural data to personalise effectively. Most stores see measurable AOV lift within 30 days of deployment." },
  { q: "Do you replace Shopify's built-in recommendations?", a: "Yes. Our ML-powered engine significantly outperforms Shopify's default suggestions — with collaborative filtering, real-time personalisation, and A/B testing that the native system doesn't offer." },
  { q: "Is customer data safe?", a: "Yes. First-party data only. No third-party cookies. GDPR and CCPA compliant. Customer data stays on your infrastructure — we process it, we don't store it." },
  { q: "Can recommendations appear in emails and push notifications?", a: "Yes. Personalised product suggestions can be embedded in abandoned cart emails, post-purchase follow-ups, win-back campaigns, and push notifications — not just on-site widgets." },
] as const;

/* ── Component ── */
export function AiRecommendationsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + reco widget ═══ */}
      <section className="ar-hero">
        <div className="ar-hero-glow ar-hero-glow-1" aria-hidden="true" />
        <div className="ar-hero-glow ar-hero-glow-2" aria-hidden="true" />
        <div className="ar-hero-inner">
          <div className="ar-hero-badge rev">
            <span className="ar-hero-badge-dot" />
            AI product recommendations
          </div>
          <h1 className="ar-hero-h rev">
            AI Product<br />
            <span className="acc">Recommendations.</span>
          </h1>
          <p className="ar-hero-sub rev">
            Personalised product suggestions that increase average order value by 25%+ — <strong>powered by ML, not rules.</strong> Frequently bought together, cross-sell, upsell, and trending products.
          </p>
          <div className="ar-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your personalisation audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#features">See how it works</a>
          </div>

          {/* Recommendation widget */}
          <div className="ar-widget rev">
            <div className="ar-widget-title"><SparklesIcon /> Recommended for you</div>
            <div className="ar-widget-products">
              {RECO_PRODUCTS.map((p) => (
                <div key={p.name} className="ar-widget-product">
                  <div className="ar-widget-product-img" />
                  <div className="ar-widget-product-name">{p.name}</div>
                  <div className="ar-widget-product-row">
                    <span className="ar-widget-product-price">{p.price}</span>
                    <span className="ar-widget-product-conf">{p.confidence} match</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RECOMMENDATION TYPES ═══ */}
      <section className="ar-types">
        <div className="ar-types-inner">
          <div className="ar-types-hdr rev">
            <div className="eyebrow">Recommendation types</div>
            <h2>Four engines.<br /><span>Every touchpoint.</span></h2>
          </div>
          <div className="ar-types-grid rev">
            {RECO_TYPES.map((r) => (
              <div key={r.t} className={`ar-type ar-type-${r.color}`}>
                <div className="ar-type-icon">{r.icon}</div>
                <div className="ar-type-t">{r.t}</div>
                <p className="ar-type-s">{r.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA FLOW ═══ */}
      <section className="ar-flow">
        <div className="ar-flow-inner rev">
          <div className="ar-flow-label">How personalisation works</div>
          <div className="ar-flow-track">
            {DATA_FLOW.map((d, i) => (
              <div key={d.t} className="ar-flow-node-wrap">
                {i > 0 && <div className="ar-flow-conn"><ArrowRightIcon /></div>}
                <div className="ar-flow-node">
                  <div className="ar-flow-node-icon">{d.icon}</div>
                  <div className="ar-flow-node-t">{d.t}</div>
                  <div className="ar-flow-node-s">{d.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="ar-feat" id="features">
        <div className="ar-feat-inner">
          <div className="ar-feat-hdr rev">
            <div className="eyebrow lt">Engine capabilities</div>
            <h2>Six capabilities.<br /><span>One personalisation platform.</span></h2>
          </div>
          <div className="ar-feat-grid rev">
            {FEATURES.map((f) => (
              <div key={f.t} className="ar-feat-card">
                <div className="ar-feat-card-icon">{f.icon}</div>
                <div className="ar-feat-card-t">{f.t}</div>
                <p className="ar-feat-card-s">{f.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS — asymmetric ═══ */}
      <section className="ar-results" id="results">
        <div className="ar-results-inner">
          <div className="ar-results-hdr rev">
            <div className="eyebrow">Proven results</div>
            <h2>Numbers that prove<br /><span>the revenue impact.</span></h2>
          </div>
          <div className="ar-results-split rev">
            <div className="ar-results-hero">
              <div className="ar-results-hero-n">{HERO_RESULT.n}</div>
              <div className="ar-results-hero-l">{HERO_RESULT.l}</div>
              <p className="ar-results-hero-sub">{HERO_RESULT.sub}</p>
            </div>
            <div className="ar-results-side">
              {SIDE_RESULTS.map((s) => (
                <div key={s.l} className="ar-results-mini">
                  <div className="ar-results-mini-n">{s.n}</div>
                  <div className="ar-results-mini-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ar-plat">
        <div className="ar-plat-inner rev">
          <div className="ar-plat-label">Works with your eCommerce platform</div>
          <div className="ar-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ar-plat-badge">
                <span className="ar-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ar-faq" id="faq">
        <div className="ar-faq-inner">
          <div className="ar-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>AI recommendations.</span></h2>
          </div>
          <div className="ar-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ar-faq-item">
                <summary className="ar-faq-q">{f.q}</summary>
                <p className="ar-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your personalisation partner</div>
              <h3>Most recommendation widgets<br /><span>show popular products to everyone.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">35%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of Amazon&apos;s revenue comes from its recommendation engine.</strong>
                  Source: McKinsey, 2024. The difference is truly personalised ML models — not &quot;best sellers&quot; lists disguised as recommendations.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer recommendation engine uses collaborative filtering and real-time personalisation — not popularity rankings.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><CpuIcon /></div>
                <div className="oi-closer-commit-t">Real ML, not rules</div>
                <p className="oi-closer-commit-b">Collaborative filtering and content-based models — not hand-coded rules or popularity lists. Every recommendation is genuinely personalised per customer.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed AOV targets</div>
                <p className="oi-closer-commit-b">Average order value lift, click-through rate, and revenue attribution are defined before deployment. If we miss targets, we keep iterating.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Privacy-first</div>
                <p className="oi-closer-commit-b">First-party data only. No third-party cookies. GDPR and CCPA compliant by design. Customer data stays on your infrastructure.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior data scientists</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The data scientist who builds your models deploys, monitors, and improves them.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free personalisation audit</div>
              <h4>Get your recommendation roadmap in <span>48 hours.</span></h4>
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
            <div className="eyebrow lt">Recommendations support</div>
            <h2>One team for <span>questions &amp; optimisation.</span></h2>
            <p>Three channels. Senior data scientists. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For widget configuration, model tuning, and A/B test setup. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Widget failures or recommendation accuracy issues. Answered by a senior data scientist.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ML engineers and eCommerce data scientists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><SparklesIcon /> ML-powered</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Privacy-first</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
