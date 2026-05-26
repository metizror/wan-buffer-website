/* ────────────────────────────────────────────────────────────────────────
   PREDICTIVE ANALYTICS — unique page design
   Centered hero + floating dashboard · Data-flow strip · Bento
   capabilities · Vertical alternating timeline · Dark industry
   showcase · Split tech stack · Closer · Support
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

/* ── Dashboard mock cells ── */
const DASH_CELLS = [
  { label: "Demand forecast", value: "+38%", confidence: 94, color: "ai" as const },
  { label: "Churn risk", value: "12 accts", confidence: 89, color: "warn" as const },
  { label: "Revenue Q3", value: "₹2.4Cr", confidence: 96, color: "ai" as const },
  { label: "Anomalies", value: "3 flagged", confidence: 91, color: "purple" as const },
] as const;

/* ── Data flow nodes ── */
const FLOW = [
  { icon: <DatabaseIcon />, t: "Collect", s: "ERP · CRM · IoT" },
  { icon: <RefreshIcon />, t: "Clean", s: "Validate · Normalise" },
  { icon: <CpuIcon />, t: "Train", s: "ML Models · AutoML" },
  { icon: <SparklesIcon />, t: "Predict", s: "Forecasts · Scores" },
  { icon: <ZapIcon />, t: "Act", s: "Alerts · Automation" },
] as const;

/* ── Capabilities (bento) ── */
const CAPS = [
  { icon: <TrendingUpIcon />, t: "Demand Forecasting", s: "Predict product demand 30–90 days ahead using historical sales, seasonality, and external market signals. Reduce stockouts by 60% and overstock by 45%.", stat: { n: "92%", l: "Forecast accuracy" }, size: "featured" as const },
  { icon: <EyeIcon />, t: "Anomaly Detection", s: "Automatically surface outliers in revenue, expenses, inventory, and supplier behaviour before they become costly problems.", stat: { n: "3.5×", l: "Faster detection" }, size: "normal" as const },
  { icon: <UsersIcon />, t: "Churn Prediction", s: "Score every customer by churn probability using purchase patterns, engagement data, and support interactions.", stat: { n: "35%", l: "Churn reduction" }, size: "normal" as const },
  { icon: <WalletIcon />, t: "Revenue Forecasting", s: "AI-generated revenue projections by product line, region, and channel — updated daily from live ERP data.", stat: { n: "94%", l: "Confidence" }, size: "wide" as const },
  { icon: <PackageIcon />, t: "Inventory Optimisation", s: "Dynamic reorder points powered by demand predictions, supplier lead-time models, and carrying cost analysis.", stat: { n: "45%", l: "Less excess stock" }, size: "normal" as const },
  { icon: <SettingsIcon />, t: "Predictive Maintenance", s: "Forecast equipment failures using sensor data, usage patterns, and historical maintenance logs.", stat: { n: "50%", l: "Downtime prevented" }, size: "normal" as const },
] as const;

/* ── Methodology timeline ── */
const TIMELINE = [
  { num: "01", icon: <DatabaseIcon />, tag: "Ingest", t: "Data audit & pipeline setup", b: "We connect to your ERP, CRM, and operational systems — extracting, cleaning, and structuring the data that will power your predictive models. No manual exports, no CSV uploads.", deliverables: ["Data inventory", "Quality report"] },
  { num: "02", icon: <SearchIcon />, tag: "Explore", t: "Feature engineering & discovery", b: "Our data scientists identify the variables, patterns, and correlations that drive your business outcomes — then engineer the features that give models their predictive edge.", deliverables: ["Feature map", "Correlation analysis"] },
  { num: "03", icon: <CpuIcon />, tag: "Model", t: "Model training & validation", b: "We train, test, and benchmark multiple ML models against your historical data. Only the model that delivers the highest accuracy on unseen data gets promoted.", deliverables: ["Trained models", "Accuracy benchmarks"] },
  { num: "04", icon: <CloudIcon />, tag: "Deploy", t: "Production deployment", b: "Models deploy directly into your ERP workflows via secure APIs. Predictions surface where your team works — inside dashboards, approval flows, and alerts.", deliverables: ["Live predictions", "API endpoints"] },
  { num: "05", icon: <MonitorIcon />, tag: "Monitor", t: "Drift detection & retraining", b: "Automated monitoring catches model drift before accuracy degrades. Retraining pipelines trigger when data patterns shift — keeping predictions sharp.", deliverables: ["Drift alerts", "Retrained models"] },
  { num: "06", icon: <RocketIcon />, tag: "Scale", t: "Expand & optimise", b: "Once initial models prove ROI, we scale predictions to new departments, product lines, and geographies — each expansion faster than the last.", deliverables: ["Expansion plan", "New models"] },
] as const;

/* ── Industries ── */
const INDUSTRIES = [
  { icon: <PackageIcon />, t: "Manufacturing", b: "Demand-driven production planning, predictive quality control, and equipment failure forecasting.", stat: { n: "40%", l: "Less downtime" } },
  { icon: <GridIcon />, t: "Retail & eCommerce", b: "SKU-level demand forecasting, dynamic pricing optimisation, and customer lifetime value prediction.", stat: { n: "60%", l: "Fewer stockouts" } },
  { icon: <WalletIcon />, t: "Finance & Banking", b: "Cash flow forecasting, credit risk scoring, and fraud pattern detection across transaction streams.", stat: { n: "94%", l: "Forecast accuracy" } },
  { icon: <CloudIcon />, t: "Logistics & Supply Chain", b: "Route optimisation models, delivery time prediction, and supplier reliability scoring.", stat: { n: "25%", l: "Cost saved" } },
] as const;

/* ── Tech stack ── */
const TECH = [
  { name: "Python", color: "#3776AB" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "scikit-learn", color: "#F7931E" },
  { name: "Apache Spark", color: "#E25A1C" },
  { name: "Odoo", color: "#714B67" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Power BI", color: "#F2C811" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "AWS SageMaker", color: "#FF9900" },
  { name: "BigQuery", color: "#4285F4" },
] as const;

/* ── Component ── */
export function PredictiveAnalyticsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered with floating dashboard mock ═══ */}
      <section className="pa-hero">
        <div className="pa-hero-glow pa-hero-glow-1" aria-hidden="true" />
        <div className="pa-hero-glow pa-hero-glow-2" aria-hidden="true" />
        <div className="pa-hero-dots" aria-hidden="true" />
        <div className="pa-hero-inner">
          <div className="pa-hero-badge rev">
            <span className="pa-hero-badge-dot" />
            AI-powered predictive analytics
          </div>
          <h1 className="pa-hero-h rev">
            Predictive Analytics.<br />
            <span className="acc">See what&apos;s coming next.</span>
          </h1>
          <p className="pa-hero-sub rev">
            Transform raw ERP data into accurate business forecasts. Demand prediction, anomaly detection, and churn analysis — <strong>embedded directly in your workflows</strong> so your team acts on insights, not hunches.
          </p>
          <div className="pa-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your analytics roadmap</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#methodology">See the methodology</a>
          </div>

          {/* Floating dashboard */}
          <div className="pa-dash rev">
            <div className="pa-dash-bar">
              <span className="pa-dash-dot" /><span className="pa-dash-dot y" /><span className="pa-dash-dot g" />
              <span className="pa-dash-title">Live Prediction Dashboard</span>
            </div>
            <div className="pa-dash-grid">
              {DASH_CELLS.map((c) => (
                <div key={c.label} className={`pa-dash-cell ${c.color}`}>
                  <div className="pa-dash-cell-label">{c.label}</div>
                  <div className="pa-dash-cell-value">{c.value}</div>
                  <div className="pa-dash-cell-bar"><div className="pa-dash-cell-fill" style={{ width: `${c.confidence}%` }} /></div>
                  <div className="pa-dash-cell-conf">{c.confidence}% confidence</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DATA FLOW — horizontal connected nodes ═══ */}
      <section className="pa-flow">
        <div className="pa-flow-inner rev">
          <div className="pa-flow-label">How your data becomes predictions</div>
          <div className="pa-flow-track">
            {FLOW.map((n, i) => (
              <div key={n.t} className="pa-flow-wrap">
                {i > 0 && <div className="pa-flow-conn"><span /></div>}
                <div className="pa-flow-node">
                  <div className="pa-flow-node-icon">{n.icon}</div>
                  <div className="pa-flow-node-t">{n.t}</div>
                  <div className="pa-flow-node-s">{n.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — bento grid ═══ */}
      <section className="pa-bento" id="capabilities">
        <div className="pa-bento-inner">
          <div className="pa-bento-hdr rev">
            <div className="eyebrow">Core capabilities</div>
            <h2>Six prediction engines.<br /><span>One integrated platform.</span></h2>
            <p>Each capability is purpose-built for ERP environments — not a generic BI layer. Models train on your live business data, surface predictions inside your existing tools, and retrain automatically as patterns shift.</p>
          </div>

          <div className="pa-bento-grid rev">
            {CAPS.map((c) => (
              <div key={c.t} className={`pa-bento-card pa-bento-${c.size}`}>
                <div className="pa-bento-card-top">
                  <div className="pa-bento-card-icon">{c.icon}</div>
                  <div className="pa-bento-card-stat">
                    <span className="pa-bento-stat-n">{c.stat.n}</span>
                    <span className="pa-bento-stat-l">{c.stat.l}</span>
                  </div>
                </div>
                <div className="pa-bento-card-t">{c.t}</div>
                <p className="pa-bento-card-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METHODOLOGY — vertical alternating timeline ═══ */}
      <section className="pa-tl" id="methodology">
        <div className="pa-tl-inner">
          <div className="pa-tl-hdr rev">
            <div className="eyebrow lt">Methodology</div>
            <h2>Six stages to<br /><span>production-grade predictions.</span></h2>
            <p>Every model we deploy is validated against your historical data before it touches a live system. Senior data scientists lead each phase — no black boxes, no unexplainable outputs, no shortcuts.</p>
          </div>

          <div className="pa-tl-track">
            {TIMELINE.map((s, i) => (
              <div key={s.num} className={`pa-tl-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="pa-tl-content">
                  <div className="pa-tl-tag">{s.tag}</div>
                  <div className="pa-tl-t">{s.t}</div>
                  <p className="pa-tl-b">{s.b}</p>
                  <div className="pa-tl-delivs">
                    {s.deliverables.map((d) => (
                      <span key={d} className="pa-tl-deliv"><FlagIcon />{d}</span>
                    ))}
                  </div>
                </div>
                <div className="pa-tl-spine">
                  <div className="pa-tl-spine-num">{s.num}</div>
                  <div className="pa-tl-spine-icon">{s.icon}</div>
                  <div className="pa-tl-spine-line" />
                </div>
                <div className="pa-tl-empty" />
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to predict</div>
              <h3>Want this methodology applied to <span>your data?</span></h3>
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

      {/* ═══ INDUSTRIES — dark vertical showcase ═══ */}
      <section className="pa-ind" id="industries">
        <div className="pa-ind-inner">
          <div className="pa-ind-hdr rev">
            <div className="eyebrow">Industry applications</div>
            <h2>Predictions built for <span>your industry.</span></h2>
          </div>
          <div className="pa-ind-row rev">
            {INDUSTRIES.map((ind) => (
              <div key={ind.t} className="pa-ind-card">
                <div className="pa-ind-card-icon">{ind.icon}</div>
                <div className="pa-ind-card-t">{ind.t}</div>
                <p className="pa-ind-card-b">{ind.b}</p>
                <div className="pa-ind-card-stat">
                  <span className="pa-ind-stat-n">{ind.stat.n}</span>
                  <span className="pa-ind-stat-l">{ind.stat.l}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK — split layout ═══ */}
      <section className="pa-stack">
        <div className="pa-stack-inner rev">
          <div className="pa-stack-left">
            <div className="pa-stack-label">ML &amp; Data Infrastructure</div>
            <p className="pa-stack-sub">Models built and deployed on enterprise-grade infrastructure you can trust.</p>
          </div>
          <div className="pa-stack-badges">
            {TECH.map((t) => (
              <span key={t.name} className="pa-stack-badge">
                <span className="pa-stack-badge-dot" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="why-us">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your analytics partner</div>
              <h3>Most analytics projects<br /><span>deliver dashboards, not decisions.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">87%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of data science projects never make it to production.</strong>
                  Source: VentureBeat, 2024. The gap isn&apos;t talent or tools — it&apos;s the disconnect between model accuracy in a notebook and real-world business value in production.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer analytics engagement is anchored to four commitments — written into the contract, tracked weekly, and never traded for speed.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Production-grade models only</div>
                <p className="oi-closer-commit-b">We don&apos;t hand over Jupyter notebooks. Every model ships with API endpoints, monitoring, automated retraining, and documentation your team can maintain.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Model accuracy, prediction latency, and business KPIs are defined before training begins. If we miss the targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full explainability</div>
                <p className="oi-closer-commit-b">No black-box predictions. Every forecast includes feature importance, confidence intervals, and reasoning — so your team trusts and acts on the output.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior data scientists only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The data scientists who design your models are the ones who train, deploy, and support them — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free data audit</div>
              <h4>Get your predictive analytics roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your data audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to our data team first</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SUPPORT ═══ */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Analytics support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior data scientists. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For model accuracy questions, prediction reviews, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Model failures or prediction pipeline incidents. Answered by a senior data scientist — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring data scientists and ML engineers. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior data scientists</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
