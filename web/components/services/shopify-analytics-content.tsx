/* ────────────────────────────────────────────────────────────────────────
   SHOPIFY ANALYTICS + AI — unique page design
   Centered hero + metric cards · AI capability grid · Data pipeline ·
   Use case rows · Process · FAQ · Closer · Support
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

/* ── Metric cards for hero ── */
const HERO_METRICS = [
  { icon: <TrendingUpIcon />, label: "Revenue trend", value: "+24%", sub: "vs last quarter", color: "green" as const },
  { icon: <UsersIcon />, label: "Avg customer LTV", value: "₹8,420", sub: "90-day cohort", color: "ai" as const },
  { icon: <PackageIcon />, label: "Demand forecast", value: "+18%", sub: "Next 30 days", color: "purple" as const },
] as const;

/* ── AI capabilities ── */
const CAPABILITIES = [
  { icon: <TrendingUpIcon />, t: "Demand Forecasting", s: "ML models predict product demand 30–90 days ahead using sales history, seasonality, and marketing calendar. Reduce stockouts and overstock with data — not guesswork." },
  { icon: <UsersIcon />, t: "Customer Lifetime Value", s: "Predict which customers will return and how much they'll spend. Segment by LTV tier for targeted marketing, loyalty programs, and retention campaigns." },
  { icon: <BarChartIcon />, t: "Cohort Analysis", s: "Track customer behaviour by acquisition cohort — repeat purchase rates, revenue per cohort, and retention curves. See which marketing channels bring the most valuable customers." },
  { icon: <PackageIcon />, t: "Product Performance", s: "Revenue per SKU, margin analysis, sell-through rate, and dead stock identification. Know which products to promote, discount, or discontinue — backed by data." },
  { icon: <TargetIcon />, t: "Marketing Attribution", s: "Connect ad spend to actual revenue — not just clicks. Multi-touch attribution across Google, Meta, email, and organic channels. Know your true ROAS." },
  { icon: <SparklesIcon />, t: "AI-Generated Reports", s: "Daily and weekly executive summaries delivered to email or Slack. AI explains what changed, why it changed, and what to do next — no manual report building." },
] as const;

/* ── Data pipeline ── */
const PIPELINE = [
  { icon: <DatabaseIcon />, t: "Shopify Data", s: "Orders · Products · Customers" },
  { icon: <CpuIcon />, t: "ML Engine", s: "Forecast · Segment · Score" },
  { icon: <MonitorIcon />, t: "Insights", s: "Dashboards · Alerts · Reports" },
] as const;

/* ── Use cases ── */
const USE_CASES = [
  { icon: <PackageIcon />, t: "Predict which products will sell out next month", s: "Demand models analyse sales velocity, seasonal patterns, and marketing campaigns to forecast SKU-level demand. Procurement teams get advance notice — not surprise stockouts." },
  { icon: <UsersIcon />, t: "Identify your highest-value customer segments", s: "LTV models score every customer by predicted future spend. Marketing teams target high-LTV segments with personalised campaigns — and stop wasting budget on one-time buyers." },
  { icon: <BarChartIcon />, t: "Know exactly which marketing channels drive revenue", s: "Multi-touch attribution connects every marketing pound to actual conversions. See which channels bring high-LTV customers — not just traffic — and reallocate spend accordingly." },
  { icon: <SparklesIcon />, t: "Get AI-generated performance summaries daily", s: "No more spreadsheet sessions. AI analyses your store data overnight and delivers a plain-English summary — what's up, what's down, what needs attention — before your morning meeting." },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "3×", l: "Marketing ROI improvement" },
  { n: "92%", l: "Forecast accuracy" },
  { n: "60%", l: "Less time on reporting" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "What data does the AI analyse from my Shopify store?", a: "Orders, products, customers, marketing campaigns, traffic sources, and inventory levels. We connect via the Shopify Admin API — no manual exports needed. Historical data going back as far as your store allows." },
  { q: "How accurate are the demand forecasts?", a: "Typical accuracy is 88–95% depending on your product mix and sales history length. Models improve continuously as more data accumulates. We benchmark accuracy monthly and retrain when drift is detected." },
  { q: "Do I need a Shopify Plus plan for analytics?", a: "No. Our analytics solution works with Shopify Basic, Shopify, and Shopify Plus. Some advanced features (like checkout analytics) benefit from Plus, but core forecasting and LTV work on all plans." },
  { q: "Where do I see the dashboards?", a: "We deploy dashboards on Power BI, Google Looker, Metabase, or custom web dashboards — depending on your preference. Daily email and Slack reports are included in every plan." },
  { q: "Can you connect Shopify analytics to our ERP?", a: "Yes. Analytics insights feed directly into Odoo, Zoho, or SAP — demand forecasts trigger procurement workflows, LTV scores sync to CRM, and inventory recommendations update reorder rules automatically." },
  { q: "How long does setup take?", a: "Basic analytics dashboard: 2–3 weeks. Full AI suite with demand forecasting, LTV, and attribution: 4–6 weeks. Ongoing model retraining and reporting is continuous." },
] as const;

/* ── Component ── */
export function ShopifyAnalyticsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + metric cards ═══ */}
      <section className="sh-hero">
        <div className="sh-hero-glow sh-hero-glow-1" aria-hidden="true" />
        <div className="sh-hero-glow sh-hero-glow-2" aria-hidden="true" />
        <div className="sh-hero-inner">
          <div className="sh-hero-badge rev">
            <span className="sh-hero-badge-dot" />
            Shopify analytics + AI
          </div>
          <h1 className="sh-hero-h rev">
            Shopify Analytics<br />
            <span className="acc">+ AI.</span>
          </h1>
          <p className="sh-hero-sub rev">
            AI-powered demand forecasting, customer lifetime value prediction, cohort analysis, and automated reporting — <strong>turn your Shopify data into revenue growth.</strong>
          </p>
          <div className="sh-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your analytics audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#capabilities">See AI capabilities</a>
          </div>

          {/* Metric cards */}
          <div className="sh-metrics rev">
            {HERO_METRICS.map((m) => (
              <div key={m.label} className={`sh-metric sh-metric-${m.color}`}>
                <div className="sh-metric-icon">{m.icon}</div>
                <div className="sh-metric-label">{m.label}</div>
                <div className="sh-metric-value">{m.value}</div>
                <div className="sh-metric-sub">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DATA PIPELINE ═══ */}
      <section className="sh-pipe">
        <div className="sh-pipe-inner rev">
          <div className="sh-pipe-label">How your data becomes intelligence</div>
          <div className="sh-pipe-track">
            {PIPELINE.map((p, i) => (
              <div key={p.t} className="sh-pipe-node-wrap">
                {i > 0 && <div className="sh-pipe-conn"><ArrowRightIcon /></div>}
                <div className="sh-pipe-node">
                  <div className="sh-pipe-node-icon">{p.icon}</div>
                  <div className="sh-pipe-node-t">{p.t}</div>
                  <div className="sh-pipe-node-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI CAPABILITIES ═══ */}
      <section className="sh-caps" id="capabilities">
        <div className="sh-caps-inner">
          <div className="sh-caps-hdr rev">
            <div className="eyebrow">AI capabilities</div>
            <h2>Six intelligence layers.<br /><span>Always learning.</span></h2>
            <p>Every capability is trained on your actual Shopify data — not generic eCommerce benchmarks. Models learn your store's patterns and improve with every sale.</p>
          </div>
          <div className="sh-caps-grid rev">
            {CAPABILITIES.map((c) => (
              <div key={c.t} className="sh-cap">
                <div className="sh-cap-icon">{c.icon}</div>
                <div className="sh-cap-t">{c.t}</div>
                <p className="sh-cap-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — rows ═══ */}
      <section className="sh-use" id="use-cases">
        <div className="sh-use-inner">
          <div className="sh-use-hdr rev">
            <div className="eyebrow lt">Real-world use cases</div>
            <h2>What AI answers<br /><span>for your store.</span></h2>
          </div>
          <div className="sh-use-list">
            {USE_CASES.map((uc, i) => (
              <div key={uc.t} className={`sh-use-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="sh-use-row-icon">{uc.icon}</div>
                <div className="sh-use-row-body">
                  <div className="sh-use-row-t">{uc.t}</div>
                  <p className="sh-use-row-s">{uc.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="sh-stats">
        <div className="sh-stats-inner rev">
          {STATS.map((s, i) => (
            <div key={s.l} className="sh-stat">
              {i > 0 && <span className="sh-stats-sep" />}
              <div className="sh-stat-n">{s.n}</div>
              <div className="sh-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROCESS — 3 steps ═══ */}
      <section className="sh-proc" id="process">
        <div className="sh-proc-inner">
          <div className="sh-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Connect. Analyse.<br /><span>Act.</span></h2>
          </div>
          <div className="sh-proc-steps rev">
            {[
              { icon: <DatabaseIcon />, t: "Connect", s: "We connect to your Shopify store via API and ingest historical data — orders, products, customers, and marketing." },
              { icon: <CpuIcon />, t: "Analyse", s: "ML models train on your data to build demand forecasts, LTV scores, cohort analyses, and attribution models." },
              { icon: <RocketIcon />, t: "Act", s: "Insights surface in dashboards, alerts, and AI reports. Procurement, marketing, and merchandising teams make data-driven decisions." },
            ].map((s, i) => (
              <div key={s.t} className="sh-proc-step-wrap">
                {i > 0 && <div className="sh-proc-conn"><ArrowRightIcon /></div>}
                <div className="sh-proc-step">
                  <div className="sh-proc-step-icon">{s.icon}</div>
                  <div className="sh-proc-step-t">{s.t}</div>
                  <p className="sh-proc-step-s">{s.s}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to grow</div>
              <h3>Want AI-powered analytics for <span>your Shopify store?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a data scientist</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sh-faq" id="faq">
        <div className="sh-faq-inner">
          <div className="sh-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Shopify analytics.</span></h2>
          </div>
          <div className="sh-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="sh-faq-item">
                <summary className="sh-faq-q">{f.q}</summary>
                <p className="sh-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your analytics partner</div>
              <h3>Most Shopify analytics<br /><span>tell you what happened yesterday.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">80%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of eCommerce decisions are still based on gut feel, not data.</strong>
                  Source: McKinsey, 2024. The gap isn&apos;t missing data — Shopify stores generate plenty. It&apos;s the absence of ML models that turn raw data into forward-looking predictions.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer analytics deployment is predictive — not just descriptive. We build models that tell you what&apos;s coming, not just what happened.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Predictive, not descriptive</div>
                <p className="oi-closer-commit-b">Demand forecasts, LTV predictions, and churn scores — not just historical charts. AI tells your team what to do next, not what already happened.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Forecast accuracy, LTV prediction confidence, and attribution accuracy are defined before model training. If we miss targets, we keep iterating.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">Automated reporting</div>
                <p className="oi-closer-commit-b">AI-generated daily summaries delivered to email and Slack. Your team gets insights without logging into dashboards or building reports.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior data scientists only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The data scientist who builds your models is the one who deploys, monitors, and improves them.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free analytics audit</div>
              <h4>Get your Shopify AI roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your analytics audit</span>
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
            <div className="eyebrow lt">Analytics support</div>
            <h2>One team for <span>questions &amp; insights.</span></h2>
            <p>Three channels. Senior data scientists. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For dashboard questions, model accuracy, and reporting customisation. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Data pipeline failures or dashboard outages. Answered by a senior data scientist.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring data scientists and eCommerce analysts.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior data scientists</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><SparklesIcon /> AI-powered reports</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
