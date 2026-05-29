/* ────────────────────────────────────────────────────────────────────────
   eCOMMERCE SEO & CRO — unique page design
   Centered hero + dual score card · SEO vs CRO split · Audit
   checklist · Results · Tools · FAQ · Closer · Support
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
  CrossIcon,
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

/* ── Score card ── */
const SCORES = [
  { label: "SEO Score", value: "92", unit: "/100", color: "#22C55E" },
  { label: "Conversion Rate", value: "3.2", unit: "%", color: "var(--ai)" },
] as const;

/* ── SEO services ── */
const SEO_SERVICES = [
  { icon: <CodeIcon />, t: "Technical SEO", s: "Crawlability, indexation, site architecture, XML sitemaps, robots.txt, canonical tags, hreflang, and Core Web Vitals — the foundation search engines need." },
  { icon: <SearchIcon />, t: "Product Page SEO", s: "Title tags, meta descriptions, H1 optimisation, image alt text, structured data, and internal linking — per product, per category, at scale." },
  { icon: <DatabaseIcon />, t: "Schema Markup", s: "Product, BreadcrumbList, FAQPage, Review, and Organisation schema — giving Google rich snippets that increase click-through rates from search results." },
  { icon: <MonitorIcon />, t: "GTM & Analytics Setup", s: "Google Tag Manager, GA4 eCommerce tracking, Meta Pixel, conversion events, and enhanced measurement — every click, view, and purchase tracked accurately." },
] as const;

/* ── CRO services ── */
const CRO_SERVICES = [
  { icon: <TargetIcon />, t: "A/B Testing", s: "Test product page layouts, CTAs, checkout flows, pricing presentation, and trust signals. Statistically significant results before any permanent change." },
  { icon: <WalletIcon />, t: "Checkout Optimisation", s: "Reduce cart abandonment with guest checkout, progress indicators, saved addresses, express payment, and trust badges — each proven to lift completion rates." },
  { icon: <EyeIcon />, t: "UX & Heatmap Analysis", s: "Heatmaps, scroll maps, click tracking, and session recordings reveal where customers hesitate, get confused, or leave. Data-driven UX improvements, not opinions." },
  { icon: <TrendingUpIcon />, t: "Landing Page Optimisation", s: "Campaign landing pages designed for conversion — clear value proposition, social proof, urgency, and a single focused CTA. Connected to your analytics for ROI measurement." },
] as const;

/* ── Audit checklist ── */
const AUDIT_ITEMS = [
  { check: "XML sitemap submitted & indexed", status: "pass" as const },
  { check: "Canonical tags on all pages", status: "pass" as const },
  { check: "Product schema markup", status: "pass" as const },
  { check: "Core Web Vitals passing", status: "pass" as const },
  { check: "Mobile-first responsive", status: "pass" as const },
  { check: "301 redirects for old URLs", status: "pass" as const },
  { check: "GA4 eCommerce tracking", status: "pass" as const },
  { check: "Checkout A/B test active", status: "pass" as const },
] as const;

/* ── Results ── */
const RESULTS = [
  { n: "2.5×", l: "Organic traffic growth" },
  { n: "45%", l: "Conversion rate lift" },
  { n: "60%", l: "Bounce rate reduction" },
  { n: "3.1×", l: "Revenue from organic" },
] as const;

/* ── Tools ── */
const TOOLS = [
  { name: "Google Search Console", color: "#4285F4" },
  { name: "GA4", color: "#F9AB00" },
  { name: "GTM", color: "#246FDB" },
  { name: "Ahrefs", color: "#FF6B35" },
  { name: "Screaming Frog", color: "#72B626" },
  { name: "Hotjar", color: "#FD3A5C" },
  { name: "VWO", color: "#4F46E5" },
  { name: "PageSpeed Insights", color: "#F44B21" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How long does it take to see SEO results?", a: "Technical SEO improvements (indexation, speed, schema) show results within 2–4 weeks. Content and keyword-driven SEO takes 3–6 months for meaningful organic traffic growth. We set monthly milestones and track progress against them." },
  { q: "Do you handle Shopify and Magento SEO differently?", a: "Yes. Each platform has unique SEO constraints — Shopify's URL structure, Magento's layered navigation, canonical handling, and pagination. We optimise specifically for your platform, not with generic SEO advice." },
  { q: "What's included in a CRO engagement?", a: "Heatmap analysis, checkout flow audit, A/B test design and implementation, landing page optimisation, and monthly conversion reports. Every change is data-backed with statistical significance." },
  { q: "How do you measure conversion rate improvement?", a: "We establish a baseline conversion rate before any changes, then track improvement through controlled A/B tests. Only statistically significant results (95%+ confidence) are declared as improvements." },
  { q: "Do you set up GA4 and GTM?", a: "Yes. We configure GA4 with full eCommerce tracking (view_item, add_to_cart, begin_checkout, purchase), GTM with conversion tags for Google Ads and Meta, and custom events for your specific funnel." },
  { q: "Can you audit our existing SEO setup?", a: "Yes. Our free SEO audit covers technical health, indexation, schema, Core Web Vitals, keyword rankings, backlink profile, and competitor gaps. Delivered in 48 hours as a prioritised action plan." },
] as const;

/* ── Component ── */
export function EcommerceSeoContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + dual score ═══ */}
      <section className="sc-hero">
        <div className="sc-hero-glow sc-hero-glow-1" aria-hidden="true" />
        <div className="sc-hero-glow sc-hero-glow-2" aria-hidden="true" />
        <div className="sc-hero-inner">
          <div className="sc-hero-badge rev">
            <span className="sc-hero-badge-dot" />
            eCommerce SEO &amp; CRO
          </div>
          <h1 className="sc-hero-h rev">
            eCommerce SEO<br />
            <span className="acc">&amp; CRO.</span>
          </h1>
          <p className="sc-hero-sub rev">
            Technical SEO, schema markup, and conversion optimisation for eCommerce — <strong>more traffic, higher conversion, better revenue.</strong>
          </p>
          <div className="sc-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your free SEO audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#services">See services</a>
          </div>

          {/* Dual score */}
          <div className="sc-scores rev">
            {SCORES.map((s) => (
              <div key={s.label} className="sc-score">
                <div className="sc-score-value" style={{ color: s.color }}>
                  {s.value}<span className="sc-score-unit">{s.unit}</span>
                </div>
                <div className="sc-score-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="sc-results">
        <div className="sc-results-inner rev">
          {RESULTS.map((r, i) => (
            <div key={r.l} className="sc-result">
              {i > 0 && <span className="sc-results-sep" />}
              <div className="sc-result-n">{r.n}</div>
              <div className="sc-result-l">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SEO vs CRO — dual column ═══ */}
      <section className="sc-dual" id="services">
        <div className="sc-dual-inner">
          <div className="sc-dual-hdr rev">
            <div className="eyebrow">Two disciplines. One goal.</div>
            <h2>SEO brings traffic.<br /><span>CRO converts it.</span></h2>
          </div>
          <div className="sc-dual-grid rev">
            {/* SEO column */}
            <div className="sc-dual-col sc-dual-seo">
              <div className="sc-dual-col-head">SEO Services</div>
              {SEO_SERVICES.map((s) => (
                <div key={s.t} className="sc-dual-item">
                  <div className="sc-dual-item-icon">{s.icon}</div>
                  <div>
                    <div className="sc-dual-item-t">{s.t}</div>
                    <p className="sc-dual-item-s">{s.s}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* CRO column */}
            <div className="sc-dual-col sc-dual-cro">
              <div className="sc-dual-col-head">CRO Services</div>
              {CRO_SERVICES.map((s) => (
                <div key={s.t} className="sc-dual-item">
                  <div className="sc-dual-item-icon">{s.icon}</div>
                  <div>
                    <div className="sc-dual-item-t">{s.t}</div>
                    <p className="sc-dual-item-s">{s.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AUDIT CHECKLIST ═══ */}
      <section className="sc-audit" id="audit">
        <div className="sc-audit-inner">
          <div className="sc-audit-hdr rev">
            <div className="eyebrow lt">What we audit</div>
            <h2>SEO health check.<br /><span>Every box ticked.</span></h2>
          </div>
          <div className="sc-audit-grid rev">
            {AUDIT_ITEMS.map((a) => (
              <div key={a.check} className="sc-audit-item">
                <span className="sc-audit-check"><CheckCircleIcon /></span>
                <span>{a.check}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOOLS ═══ */}
      <section className="sc-tools">
        <div className="sc-tools-inner rev">
          <div className="sc-tools-label">Tools we use</div>
          <div className="sc-tools-row">
            {TOOLS.map((t) => (
              <span key={t.name} className="sc-tool-badge">
                <span className="sc-tool-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sc-faq" id="faq">
        <div className="sc-faq-inner">
          <div className="sc-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>SEO &amp; CRO.</span></h2>
          </div>
          <div className="sc-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="sc-faq-item">
                <summary className="sc-faq-q">{f.q}</summary>
                <p className="sc-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your SEO &amp; CRO partner</div>
              <h3>Most eCommerce SEO<br /><span>optimises pages, not revenue.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">68%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of online experiences begin with a search engine.</strong>
                  Source: BrightEdge, 2024. But ranking alone doesn&apos;t drive revenue — you need the traffic to convert once it arrives. SEO without CRO is half the equation.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer engagement combines SEO (traffic) and CRO (conversion) into one programme — optimising the full funnel, not just rankings.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">SEO + CRO combined</div>
                <p className="oi-closer-commit-b">We optimise for traffic AND conversion together. Ranking for keywords that don&apos;t convert is vanity — we focus on revenue-driving queries.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Organic traffic growth, conversion rate improvement, and revenue attribution targets are defined before engagement. Tracked monthly with full transparency.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><BarChartIcon /></div>
                <div className="oi-closer-commit-t">Data-driven decisions</div>
                <p className="oi-closer-commit-b">Every recommendation is backed by data — search console, analytics, heatmaps, and A/B tests. No guesswork, no opinions without evidence.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior specialists only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The SEO specialist who audits your store is the one who implements, tests, and reports.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free SEO audit</div>
              <h4>Get your SEO &amp; CRO roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your free audit</span>
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
            <div className="eyebrow lt">SEO &amp; CRO support</div>
            <h2>One team for <span>traffic &amp; conversion.</span></h2>
            <p>Three channels. Senior SEO &amp; CRO specialists. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For ranking drops, analytics questions, and A/B test setup. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Indexation issues or conversion drops. Answered by a senior SEO specialist.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring SEO specialists and CRO analysts.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><SearchIcon /> SEO + CRO</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><BarChartIcon /> Data-driven</span>
            <span className="oi-supp-commit-item"><HeartIcon /> Monthly reports</span>
          </div>
        </div>
      </section>
    </main>
  );
}
