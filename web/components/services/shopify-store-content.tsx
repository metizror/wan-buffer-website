/* ────────────────────────────────────────────────────────────────────────
   SHOPIFY STORE SETUP — unique page design
   Hero split + store preview · Setup checklist · Services grid ·
   Edition cards · Process list · FAQ · Closer · Support
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

/* ── Store preview mockup ── */
const PREVIEW_NAV = ["Home", "Shop", "Collections", "About", "Contact"] as const;
const PREVIEW_PRODUCTS = [
  { name: "Artisan Candle Set", price: "₹1,290" },
  { name: "Organic Face Serum", price: "₹2,450" },
  { name: "Bamboo Water Bottle", price: "₹890" },
] as const;

/* ── Setup checklist ── */
const CHECKLIST = [
  "Theme setup", "Product upload", "Collections", "Navigation",
  "Payment gateway", "Shipping zones", "Tax rules", "Domain & SSL",
  "Email notifications", "SEO basics", "Analytics", "Launch QA",
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <CodeIcon />, num: "01", t: "Custom Theme Development", s: "Pixel-perfect Shopify themes built with Liquid, Tailwind, and Shopify 2.0 architecture. Responsive, fast-loading, and designed for conversion — not just aesthetics." },
  { icon: <GridIcon />, num: "02", t: "Product & Collection Setup", s: "Product variants, metafields, collections, smart filters, and SEO-optimised descriptions. Your entire catalogue organised for discovery and purchase." },
  { icon: <WalletIcon />, num: "03", t: "Payment & Checkout", s: "Razorpay, Stripe, PayPal, UPI, and Shopify Payments configured. Checkout customisation, abandoned cart recovery, and multi-currency support included." },
  { icon: <PackageIcon />, num: "04", t: "Shipping & Fulfilment", s: "Shipping zones, rate rules, carrier integration (Shiprocket, Delhivery, FedEx), and real-time tracking. Multi-warehouse routing for Shopify Plus." },
  { icon: <SparklesIcon />, num: "05", t: "App Installation & Setup", s: "We install, configure, and test the apps your store needs — reviews, email marketing, loyalty, upsells, SEO, and analytics. No bloat, only what works." },
  { icon: <RefreshIcon />, num: "06", t: "Migration to Shopify", s: "Migrate from WooCommerce, Magento, or other platforms — products, customers, orders, SEO URLs, and redirects. Zero traffic loss during migration." },
] as const;

/* ── Editions ── */
const EDITIONS = [
  { name: "Basic", desc: "For new businesses launching their first online store. Essential features to start selling.", best: "1–2 staff, single location", color: "#96BF48" },
  { name: "Shopify", desc: "For growing businesses that need professional reporting, better shipping rates, and more staff accounts.", best: "5+ staff, multi-channel", color: "#5E8E3E" },
  { name: "Plus", desc: "For high-volume brands that need advanced customisation, dedicated support, and enterprise-grade infrastructure.", best: "Enterprise, 10K+ orders/mo", color: "#004C3F" },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Discovery & planning", b: "We scope your store requirements — product catalogue, target audience, sales channels, payment methods, and shipping rules." },
  { num: "02", t: "Design & prototyping", b: "UI/UX design in Figma with mobile-first responsive layouts. You approve the design before any Liquid code is written." },
  { num: "03", t: "Development & setup", b: "Theme build, product upload, app installation, payment configuration, and shipping zone setup. Sprint-based delivery with weekly demos." },
  { num: "04", t: "Testing & QA", b: "Cross-device testing, checkout flow validation, speed audit, SEO check, and analytics verification. Every page, every flow, every device." },
  { num: "05", t: "Launch & optimise", b: "Go-live with DNS, SSL, and CDN configured. Post-launch monitoring, speed tuning, and 90-day hypercare support." },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "80+", l: "Shopify stores launched" },
  { n: "<2s", l: "Avg page load" },
  { n: "99.9%", l: "Uptime" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How long does a Shopify store setup take?", a: "Simple stores with an existing theme: 2–3 weeks. Custom theme development: 4–6 weeks. Complex Shopify Plus with custom checkout and ERP integration: 8–12 weeks." },
  { q: "Can you migrate our store from WooCommerce or Magento?", a: "Yes. We handle full migration — products, customers, orders, blog posts, SEO URLs, and 301 redirects. Your search rankings and customer data are preserved." },
  { q: "Do you build custom Shopify themes?", a: "Yes. We build custom themes using Shopify 2.0 architecture, Liquid templating, and modern CSS/JS. Every theme is responsive, accessible, and optimised for Core Web Vitals." },
  { q: "Which payment gateways do you support?", a: "Shopify Payments, Razorpay, Stripe, PayPal, UPI, COD, and any Shopify-compatible gateway. Multi-currency and tax-inclusive pricing configured per market." },
  { q: "Do you integrate Shopify with ERP systems?", a: "Yes. We integrate Shopify with Odoo, Zoho, SAP, and QuickBooks — real-time sync for inventory, orders, customers, and pricing via APIs or middleware." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. Every store includes 90 days of hypercare. After that, we offer monthly retainers for design updates, app management, performance monitoring, and marketing support." },
] as const;

/* ── Component ── */
export function ShopifyStoreContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + store preview right ═══ */}
      <section className="ss-hero">
        <div className="ss-hero-glow ss-hero-glow-1" aria-hidden="true" />
        <div className="ss-hero-glow ss-hero-glow-2" aria-hidden="true" />
        <div className="ss-hero-inner">
          <div className="ss-hero-content">
            <div className="ss-hero-badge rev">
              <span className="ss-hero-badge-dot" />
              Shopify store setup
            </div>
            <h1 className="ss-hero-h rev">
              Shopify Store<br />Setup.<br />
              <span className="acc">From product to purchase.</span>
            </h1>
            <p className="ss-hero-sub rev">
              Custom Shopify themes, app integration, payment setup, and launch optimisation — <strong>stores built for conversion</strong> on Shopify Basic, Shopify, and Shopify Plus.
            </p>
            <div className="ss-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your store roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#services">See services</a>
            </div>
          </div>

          {/* Store preview */}
          <div className="ss-preview rev">
            <div className="ss-preview-bar">
              <span className="ss-preview-bar-dot" /><span className="ss-preview-bar-dot y" /><span className="ss-preview-bar-dot g" />
              <span className="ss-preview-bar-url">yourbrand.myshopify.com</span>
            </div>
            <div className="ss-preview-nav">
              {PREVIEW_NAV.map((n) => (
                <span key={n} className="ss-preview-nav-item">{n}</span>
              ))}
            </div>
            <div className="ss-preview-hero-img">
              <span className="ss-preview-hero-text">Your Brand Story</span>
              <span className="ss-preview-hero-cta">Shop Now</span>
            </div>
            <div className="ss-preview-products">
              {PREVIEW_PRODUCTS.map((p) => (
                <div key={p.name} className="ss-preview-product">
                  <div className="ss-preview-product-img" />
                  <div className="ss-preview-product-name">{p.name}</div>
                  <div className="ss-preview-product-price">{p.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS + CHECKLIST ═══ */}
      <section className="ss-band">
        <div className="ss-band-inner">
          <div className="ss-band-stats rev">
            {STATS.map((s, i) => (
              <div key={s.l} className="ss-band-stat">
                {i > 0 && <span className="ss-band-sep" />}
                <span className="ss-band-stat-n">{s.n}</span>
                <span className="ss-band-stat-l">{s.l}</span>
              </div>
            ))}
          </div>
          <div className="ss-band-checklist rev">
            <div className="ss-band-checklist-label">What we set up</div>
            <div className="ss-band-checklist-pills">
              {CHECKLIST.map((c) => (
                <span key={c} className="ss-band-pill"><CheckIcon />{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="ss-svc" id="services">
        <div className="ss-svc-inner">
          <div className="ss-svc-hdr rev">
            <div className="eyebrow">Setup services</div>
            <h2>Six services.<br /><span>Complete Shopify delivery.</span></h2>
            <p>Every store is built by experienced Shopify developers who understand Liquid, the Shopify ecosystem, and what makes eCommerce convert.</p>
          </div>
          <div className="ss-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.num} className="ss-svc-card">
                <div className="ss-svc-card-num">{s.num}</div>
                <div className="ss-svc-card-icon">{s.icon}</div>
                <div className="ss-svc-card-t">{s.t}</div>
                <p className="ss-svc-card-s">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDITIONS — 3 plan cards ═══ */}
      <section className="ss-editions" id="editions">
        <div className="ss-editions-inner">
          <div className="ss-editions-hdr rev">
            <div className="eyebrow lt">Shopify editions</div>
            <h2>We build on<br /><span>every edition.</span></h2>
          </div>
          <div className="ss-editions-grid rev">
            {EDITIONS.map((e) => (
              <div key={e.name} className="ss-edition" style={{ borderTopColor: e.color }}>
                <div className="ss-edition-name" style={{ color: e.color }}>{e.name}</div>
                <p className="ss-edition-desc">{e.desc}</p>
                <div className="ss-edition-best">
                  <span className="ss-edition-best-label">Best for</span>
                  <span className="ss-edition-best-value">{e.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="ss-proc" id="process">
        <div className="ss-proc-inner">
          <div className="ss-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Five steps to<br /><span>launch day.</span></h2>
          </div>
          <div className="ss-proc-list">
            {PROCESS.map((p, i) => (
              <div key={p.num} className="ss-proc-item rev">
                <div className="ss-proc-item-marker">
                  <div className="ss-proc-item-dot" />
                  {i < PROCESS.length - 1 && <div className="ss-proc-item-line" />}
                </div>
                <div className="ss-proc-item-num">{p.num}</div>
                <div className="ss-proc-item-body">
                  <div className="ss-proc-item-t">{p.t}</div>
                  <p className="ss-proc-item-b">{p.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to launch</div>
              <h3>Want a Shopify store that <span>actually sells?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a Shopify developer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ss-faq" id="faq">
        <div className="ss-faq-inner">
          <div className="ss-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Shopify store setup.</span></h2>
          </div>
          <div className="ss-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ss-faq-item">
                <summary className="ss-faq-q">{f.q}</summary>
                <p className="ss-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your Shopify partner</div>
              <h3>Most Shopify stores<br /><span>launch slow and convert worse.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">70%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of Shopify stores have conversion rates below 2%.</strong>
                  Source: LittleData, 2024. The cause is stores built with default themes, bloated apps, and no checkout optimisation — speed and UX problems that add up to lost revenue.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer Shopify store is engineered for speed and conversion — not just launched with a template.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ZapIcon /></div>
                <div className="oi-closer-commit-t">Sub-2s page load</div>
                <p className="oi-closer-commit-b">Every store launches with optimised images, minimal app bloat, and clean Liquid code. Core Web Vitals are a launch requirement.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Conversion-focused design</div>
                <p className="oi-closer-commit-b">Trust signals, clear CTAs, streamlined checkout, and mobile-first layouts. Every design decision is backed by eCommerce conversion data.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><CodeIcon /></div>
                <div className="oi-closer-commit-t">Clean, maintainable code</div>
                <p className="oi-closer-commit-b">Shopify 2.0 architecture, no inline hacks, no deprecated APIs. Your store stays upgradeable and your next developer can understand the code.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior developers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The developer who designs your store is the one who builds, tests, and supports it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free store audit</div>
              <h4>Get your Shopify roadmap in <span>48 hours.</span></h4>
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
            <div className="eyebrow lt">Shopify support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior Shopify developers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For theme issues, app questions, and store configuration. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Store downtime or checkout failures. Answered by a senior Shopify developer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring Shopify developers and eCommerce designers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior developers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ZapIcon /> Sub-2s guarantee</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
