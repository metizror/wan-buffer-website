/* ────────────────────────────────────────────────────────────────────────
   MAGENTO DEVELOPMENT — unique page design
   Hero split + storefront mock · Services grid · Tech stack ·
   Process list · Stats band · FAQ · Closer · Support
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

/* ── Storefront mockup ── */
const PRODUCTS = [
  { name: "Industrial Valve Set", price: "₹4,820", tag: "Best Seller" },
  { name: "Hydraulic Pump Unit", price: "₹12,350", tag: "New" },
  { name: "Copper Fitting Pack", price: "₹1,890", tag: null },
  { name: "Pressure Gauge Kit", price: "₹3,240", tag: "Sale" },
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <CodeIcon />, num: "01", t: "Custom Theme Development", s: "Pixel-perfect responsive themes built from your design — or designed by us. PWA-ready, Core Web Vitals optimised, and fully customisable without touching core Magento code." },
  { icon: <GridIcon />, num: "02", t: "Module Development", s: "Custom Magento 2 modules for checkout flows, pricing rules, product configurators, B2B portals, and integrations. Built following Magento coding standards with full test coverage." },
  { icon: <RefreshIcon />, num: "03", t: "Migration & Upgrades", s: "Migrate from Magento 1, Shopify, WooCommerce, or legacy platforms to Magento 2 / Adobe Commerce. Data, SEO, customers, and order history preserved with zero downtime." },
  { icon: <DatabaseIcon />, num: "04", t: "ERP Integration", s: "Connect Magento to Odoo, SAP, Zoho, or QuickBooks — real-time sync for inventory, orders, customers, and pricing. Bi-directional API integration, not batch exports." },
  { icon: <ZapIcon />, num: "05", t: "Performance Optimisation", s: "Full Page Cache, Varnish configuration, image optimisation, lazy loading, database tuning, and CDN setup. Sub-3-second load times on mobile and desktop." },
  { icon: <ShieldIcon />, num: "06", t: "Security & Maintenance", s: "Security patches, PCI compliance, malware scanning, SSL management, and ongoing monitoring. AMC plans with SLA-backed response times for production issues." },
] as const;

/* ── Tech stack ── */
const TECH = [
  { name: "Magento 2 / Adobe Commerce", color: "#F26322" },
  { name: "PHP 8", color: "#777BB4" },
  { name: "MySQL / MariaDB", color: "#4479A1" },
  { name: "Redis", color: "#DC382D" },
  { name: "Elasticsearch", color: "#FEC514" },
  { name: "Varnish", color: "#1E8FCC" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS / GCP", color: "#FF9900" },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Discovery & scoping", b: "We audit your current store, catalogue, integrations, and business requirements. A detailed scope document defines what's built, how, and by when." },
  { num: "02", t: "Design & prototyping", b: "UI/UX design in Figma — responsive layouts, component library, and interactive prototypes. You approve the design before development begins." },
  { num: "03", t: "Development & integration", b: "Theme development, module builds, ERP integration, and payment gateway setup. Sprint-based delivery with demos every 2 weeks." },
  { num: "04", t: "Testing & QA", b: "Cross-browser, cross-device, load testing, security scanning, and UAT. Every feature tested against your real catalogue and order flows." },
  { num: "05", t: "Launch & optimise", b: "Go-live with monitoring, CDN, and caching configured. Post-launch performance tuning and 90-day hypercare support included." },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "50+", l: "Magento stores delivered" },
  { n: "<3s", l: "Avg page load time" },
  { n: "99.9%", l: "Uptime SLA" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Do you work with Magento 2 or Adobe Commerce?", a: "Both. Magento 2 Open Source and Adobe Commerce (formerly Magento Commerce). We recommend the right edition based on your catalogue size, B2B requirements, and budget." },
  { q: "Can you migrate our store from Shopify or WooCommerce?", a: "Yes. We handle full migration — products, categories, customers, orders, SEO URLs, and redirects. Your search rankings and customer history are preserved." },
  { q: "Do you integrate Magento with ERP systems?", a: "Yes. We integrate Magento with Odoo, SAP, Zoho, and QuickBooks via REST/GraphQL APIs. Real-time sync for inventory, orders, customers, and pricing." },
  { q: "How long does a Magento development project take?", a: "Simple stores: 6–8 weeks. Custom theme + modules: 10–14 weeks. Complex B2B with ERP integration: 14–20 weeks. We provide detailed timelines after the discovery phase." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. Every project includes 90 days of hypercare. After that, we offer AMC plans with SLA-backed response times, security patches, and performance monitoring." },
  { q: "Can you build PWA storefronts on Magento?", a: "Yes. We build PWA storefronts using Magento's PWA Studio or custom headless frontends with React/Next.js backed by Magento's GraphQL API." },
] as const;

/* ── Component ── */
export function MagentoDevContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + storefront right ═══ */}
      <section className="mg-hero">
        <div className="mg-hero-glow mg-hero-glow-1" aria-hidden="true" />
        <div className="mg-hero-glow mg-hero-glow-2" aria-hidden="true" />
        <div className="mg-hero-inner">
          <div className="mg-hero-content">
            <div className="mg-hero-badge rev">
              <span className="mg-hero-badge-dot" />
              Magento development
            </div>
            <h1 className="mg-hero-h rev">
              Magento<br />Development.<br />
              <span className="acc">eCommerce, engineered.</span>
            </h1>
            <p className="mg-hero-sub rev">
              Custom Magento 2 themes, module development, ERP integration, and performance optimisation — <strong>high-performance eCommerce stores built for scale.</strong>
            </p>
            <div className="mg-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your store audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#services">See services</a>
            </div>
          </div>

          {/* Storefront mockup */}
          <div className="mg-store rev">
            <div className="mg-store-bar">
              <span className="mg-store-bar-dot" /><span className="mg-store-bar-dot y" /><span className="mg-store-bar-dot g" />
              <span className="mg-store-bar-url">yourstore.com</span>
            </div>
            <div className="mg-store-grid">
              {PRODUCTS.map((p) => (
                <div key={p.name} className="mg-store-product">
                  <div className="mg-store-product-img" />
                  {p.tag && <span className={`mg-store-product-tag${p.tag === "Sale" ? " sale" : ""}`}>{p.tag}</span>}
                  <div className="mg-store-product-name">{p.name}</div>
                  <div className="mg-store-product-price">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAND ═══ */}
      <section className="mg-stats">
        <div className="mg-stats-inner rev">
          {STATS.map((s, i) => (
            <>
              {i > 0 && <span key={`sep-${s.l}`} className="mg-stat-sep" />}
              <div key={s.l} className="mg-stat">
                <div className="mg-stat-n">{s.n}</div>
                <div className="mg-stat-l">{s.l}</div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="mg-svc" id="services">
        <div className="mg-svc-inner">
          <div className="mg-svc-hdr rev">
            <div className="eyebrow">Development services</div>
            <h2>Six services.<br /><span>Complete Magento delivery.</span></h2>
            <p>Every project is delivered by certified Magento developers who understand both the platform and your business. No generic themes — every store is purpose-built.</p>
          </div>
          <div className="mg-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.num} className="mg-svc-card">
                <div className="mg-svc-card-num">{s.num}</div>
                <div className="mg-svc-card-icon">{s.icon}</div>
                <div className="mg-svc-card-t">{s.t}</div>
                <p className="mg-svc-card-s">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="mg-tech">
        <div className="mg-tech-inner rev">
          <div className="mg-tech-label">Technology stack</div>
          <div className="mg-tech-row">
            {TECH.map((t) => (
              <span key={t.name} className="mg-tech-badge">
                <span className="mg-tech-badge-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="mg-proc" id="process">
        <div className="mg-proc-inner">
          <div className="mg-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Five phases to<br /><span>launch day.</span></h2>
          </div>
          <div className="mg-proc-list">
            {PROCESS.map((p) => (
              <div key={p.num} className="mg-proc-item rev">
                <div className="mg-proc-item-marker">
                  <div className="mg-proc-item-dot" />
                </div>
                <div className="mg-proc-item-num">{p.num}</div>
                <div className="mg-proc-item-body">
                  <div className="mg-proc-item-t">{p.t}</div>
                  <p className="mg-proc-item-b">{p.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to build</div>
              <h3>Want a Magento store that <span>performs?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a Magento developer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mg-faq" id="faq">
        <div className="mg-faq-inner">
          <div className="mg-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Magento development.</span></h2>
          </div>
          <div className="mg-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mg-faq-item">
                <summary className="mg-faq-q">{f.q}</summary>
                <p className="mg-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your Magento partner</div>
              <h3>Most Magento stores<br /><span>look good but load slow.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">53%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of mobile users abandon sites that take over 3 seconds to load.</strong>
                  Source: Google, 2024. The problem is Magento stores built for features, not performance — bloated themes, unoptimised images, and missing caching layers.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer Magento store ships with performance baked in — not bolted on after launch.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ZapIcon /></div>
                <div className="oi-closer-commit-t">Sub-3s page load</div>
                <p className="oi-closer-commit-b">Every store launches with Full Page Cache, Varnish, CDN, image optimisation, and lazy loading configured. Core Web Vitals are a launch requirement, not a post-launch wish.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CodeIcon /></div>
                <div className="oi-closer-commit-t">Clean, upgradeable code</div>
                <p className="oi-closer-commit-b">No core hacks, no theme overrides, no shortcut code. Every customisation follows Magento coding standards — so version upgrades don&apos;t break your store.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Security from day one</div>
                <p className="oi-closer-commit-b">Security patches, PCI compliance, 2FA, and WAF configured before launch. Ongoing AMC includes vulnerability scanning and patch management.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior developers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The developer who architects your store is the one who builds, tests, and supports it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free store audit</div>
              <h4>Get your Magento roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your store audit</span>
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
            <div className="eyebrow lt">Magento support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior Magento developers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For store bugs, module issues, and configuration questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Store downtime or checkout failures. Answered by a senior Magento developer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring Magento developers and eCommerce engineers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior developers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> PCI compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
