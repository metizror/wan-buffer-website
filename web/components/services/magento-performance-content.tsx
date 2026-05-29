/* ────────────────────────────────────────────────────────────────────────
   MAGENTO PERFORMANCE OPTIMISATION — unique page design
   Hero split + CWV scorecard · Before/After metrics · Optimisation
   layers · Tech stack · Process · FAQ · Closer · Support
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

/* ── Core Web Vitals scorecard ── */
const CWV_SCORES = [
  { metric: "LCP", label: "Largest Contentful Paint", value: "1.8s", target: "< 2.5s", status: "pass" as const },
  { metric: "INP", label: "Interaction to Next Paint", value: "120ms", target: "< 200ms", status: "pass" as const },
  { metric: "CLS", label: "Cumulative Layout Shift", value: "0.04", target: "< 0.1", status: "pass" as const },
  { metric: "TTFB", label: "Time to First Byte", value: "280ms", target: "< 800ms", status: "pass" as const },
] as const;

/* ── Before / After ── */
const COMPARISONS = [
  { metric: "Page load time", before: "8.2s", after: "2.1s" },
  { metric: "Time to First Byte", before: "1.8s", after: "0.28s" },
  { metric: "Largest Contentful Paint", before: "4.6s", after: "1.8s" },
  { metric: "Google PageSpeed score", before: "34/100", after: "92/100" },
  { metric: "Bounce rate", before: "62%", after: "28%" },
  { metric: "Conversion rate", before: "1.2%", after: "3.1%" },
] as const;

/* ── Optimisation layers ── */
const LAYERS = [
  { icon: <CpuIcon />, t: "Server Layer", items: ["PHP 8.x upgrade & OPcache tuning", "MySQL/MariaDB query optimisation", "Server resource allocation & scaling", "HTTP/2 and HTTP/3 configuration"], color: "#F26322" },
  { icon: <DatabaseIcon />, t: "Application Layer", items: ["Full Page Cache (FPC) configuration", "Redis for session & cache storage", "Varnish reverse proxy setup", "Elasticsearch indexing optimisation"], color: "#714B67" },
  { icon: <MonitorIcon />, t: "Frontend Layer", items: ["Critical CSS inlining & deferred loading", "JavaScript bundling & minification", "Image compression & WebP conversion", "Lazy loading for below-fold content"], color: "var(--ai)" },
  { icon: <CloudIcon />, t: "CDN & Edge Layer", items: ["Global CDN distribution (CloudFront/Cloudflare)", "Edge caching for static assets", "Geographic load balancing", "SSL/TLS optimisation (OCSP stapling)"], color: "#22C55E" },
] as const;

/* ── Tech stack ── */
const TECH = [
  { name: "Varnish", color: "#1E8FCC" },
  { name: "Redis", color: "#DC382D" },
  { name: "Elasticsearch", color: "#FEC514" },
  { name: "Cloudflare", color: "#F48120" },
  { name: "AWS CloudFront", color: "#FF9900" },
  { name: "New Relic", color: "#008C99" },
  { name: "GTmetrix", color: "#5DB85B" },
  { name: "Lighthouse", color: "#F44B21" },
] as const;

/* ── Process ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Audit", s: "Full performance audit — server response, database queries, frontend rendering, third-party scripts, and Core Web Vitals baseline. Every bottleneck identified and prioritised." },
  { icon: <ZapIcon />, t: "Optimise", s: "Layer-by-layer optimisation — server tuning, caching stack, frontend performance, CDN, and image pipeline. Changes deployed incrementally with before/after measurements." },
  { icon: <EyeIcon />, t: "Monitor", s: "Continuous performance monitoring with alerts. Monthly reports track Core Web Vitals, page speed, and conversion impact. Regression detection catches slowdowns early." },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How much faster can you make my Magento store?", a: "Most stores see 60–80% improvement in page load time. Typical results: 8s → 2s load time, PageSpeed score from 30s to 90+, and LCP under 2.5 seconds. Exact results depend on your current baseline." },
  { q: "Do you guarantee specific Core Web Vitals scores?", a: "Yes. We define target CWV scores (LCP, INP, CLS) before starting work. If we don't hit the targets, we keep optimising — at our cost. Targets are based on your current baseline and realistic improvement potential." },
  { q: "Will optimisation break my existing functionality?", a: "No. Every change is deployed incrementally with full testing. We maintain a staging environment that mirrors production and validate every optimisation against your real catalogue and checkout flow." },
  { q: "Do you set up Varnish and Redis?", a: "Yes. We configure Varnish as a reverse proxy with Full Page Cache, Redis for session and cache storage, and Elasticsearch for catalogue search — the standard Magento performance stack." },
  { q: "How long does a performance optimisation project take?", a: "A full performance audit takes 3–5 days. Implementation of optimisations typically takes 2–4 weeks depending on the number of layers addressed. Monitoring is ongoing." },
  { q: "Do you provide ongoing performance monitoring?", a: "Yes. We offer monthly performance monitoring with alerts for regressions, quarterly reports, and proactive optimisation. Included in our AMC plans or available standalone." },
] as const;

/* ── Component ── */
export function MagentoPerformanceContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + CWV scorecard right ═══ */}
      <section className="mp-hero">
        <div className="mp-hero-glow mp-hero-glow-1" aria-hidden="true" />
        <div className="mp-hero-glow mp-hero-glow-2" aria-hidden="true" />
        <div className="mp-hero-inner">
          <div className="mp-hero-content">
            <div className="mp-hero-badge rev">
              <span className="mp-hero-badge-dot" />
              Magento performance
            </div>
            <h1 className="mp-hero-h rev">
              Performance<br />Optimisation.<br />
              <span className="acc">Speed that converts.</span>
            </h1>
            <p className="mp-hero-sub rev">
              Full-stack Magento performance tuning — server, application, frontend, and CDN layers. <strong>Sub-3-second load times</strong> and green Core Web Vitals scores.
            </p>
            <div className="mp-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your speed audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#layers">See optimisation layers</a>
            </div>
          </div>

          {/* CWV Scorecard */}
          <div className="mp-cwv rev">
            <div className="mp-cwv-bar">
              <span className="mp-cwv-bar-title">Core Web Vitals</span>
              <span className="mp-cwv-bar-badge">All passing</span>
            </div>
            {CWV_SCORES.map((s) => (
              <div key={s.metric} className="mp-cwv-row">
                <div className="mp-cwv-metric">
                  <span className="mp-cwv-metric-code">{s.metric}</span>
                  <span className="mp-cwv-metric-label">{s.label}</span>
                </div>
                <div className="mp-cwv-value">{s.value}</div>
                <div className="mp-cwv-status pass">Pass</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="mp-compare">
        <div className="mp-compare-inner">
          <div className="mp-compare-hdr rev">
            <div className="eyebrow">The transformation</div>
            <h2>Before vs. after<br /><span>optimisation.</span></h2>
          </div>
          <div className="mp-compare-table rev">
            <div className="mp-compare-thead">
              <span>Metric</span>
              <span className="mp-compare-th-before">Before</span>
              <span className="mp-compare-th-after">After</span>
            </div>
            {COMPARISONS.map((c) => (
              <div key={c.metric} className="mp-compare-row">
                <span className="mp-compare-metric">{c.metric}</span>
                <span className="mp-compare-before">{c.before}</span>
                <span className="mp-compare-after">{c.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OPTIMISATION LAYERS ═══ */}
      <section className="mp-layers" id="layers">
        <div className="mp-layers-inner">
          <div className="mp-layers-hdr rev">
            <div className="eyebrow lt">Optimisation stack</div>
            <h2>Four layers.<br /><span>Every millisecond matters.</span></h2>
          </div>
          <div className="mp-layers-list">
            {LAYERS.map((l) => (
              <div key={l.t} className="mp-layer rev" style={{ borderLeftColor: l.color }}>
                <div className="mp-layer-head">
                  <div className="mp-layer-icon" style={{ background: `${l.color}12`, borderColor: `${l.color}30`, color: l.color }}>{l.icon}</div>
                  <div className="mp-layer-t">{l.t}</div>
                </div>
                <div className="mp-layer-items">
                  {l.items.map((item) => (
                    <span key={item.slice(0, 20)} className="mp-layer-item"><CheckIcon />{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="mp-tech">
        <div className="mp-tech-inner rev">
          <div className="mp-tech-label">Performance tools &amp; technologies</div>
          <div className="mp-tech-row">
            {TECH.map((t) => (
              <span key={t.name} className="mp-tech-badge">
                <span className="mp-tech-badge-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="mp-proc" id="process">
        <div className="mp-proc-inner">
          <div className="mp-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Audit. Optimise.<br /><span>Monitor.</span></h2>
          </div>
          <div className="mp-proc-steps rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="mp-proc-step-wrap">
                {i > 0 && <div className="mp-proc-conn"><ArrowRightIcon /></div>}
                <div className="mp-proc-step">
                  <div className="mp-proc-step-icon">{p.icon}</div>
                  <div className="mp-proc-step-t">{p.t}</div>
                  <p className="mp-proc-step-s">{p.s}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to speed up</div>
              <h3>Want your Magento store <span>loading in under 3 seconds?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your speed audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mp-faq" id="faq">
        <div className="mp-faq-inner">
          <div className="mp-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Magento performance.</span></h2>
          </div>
          <div className="mp-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mp-faq-item">
                <summary className="mp-faq-q">{f.q}</summary>
                <p className="mp-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your performance partner</div>
              <h3>Most speed fixes<br /><span>address symptoms, not causes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">53%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of mobile visitors leave if a page takes over 3 seconds to load.</strong>
                  Source: Google, 2024. Lazy image plugins and minification alone won&apos;t fix a Magento store with unoptimised database queries, missing Varnish cache, and an undersized server.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer performance engagement optimises every layer — from server kernel to browser paint.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed speed targets</div>
                <p className="oi-closer-commit-b">Load time, LCP, INP, CLS, and PageSpeed score targets are defined before work begins. If we miss them, we keep optimising — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ZapIcon /></div>
                <div className="oi-closer-commit-t">Full-stack approach</div>
                <p className="oi-closer-commit-b">Server, application, frontend, and CDN — all four layers optimised. Not just image compression or a caching plugin, but proper infrastructure-level performance engineering.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Continuous monitoring</div>
                <p className="oi-closer-commit-b">Post-optimisation monitoring catches regressions before customers notice. Monthly performance reports track trends and recommend proactive improvements.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who audits your store is the one who optimises and monitors it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free speed audit</div>
              <h4>Get your performance report in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your speed audit</span>
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
            <div className="eyebrow lt">Performance support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior performance engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For caching questions, speed regressions, and monitoring alerts. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Severe performance degradation or cache failures. Answered by a senior engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring performance engineers and DevOps specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ZapIcon /> Sub-3s guarantee</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day monitoring</span>
          </div>
        </div>
      </section>
    </main>
  );
}
