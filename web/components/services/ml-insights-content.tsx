/* ────────────────────────────────────────────────────────────────────────
   ML-POWERED INSIGHTS — unique page design
   Hero split + KPI tiles · Scrolling insight carousel · 3-col process
   flow · Dashboard showcase · Industry pill cloud · Closer · Support
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

/* ── KPI tiles for hero ── */
const KPI_TILES = [
  { icon: <TrendingUpIcon />, label: "Revenue trend", value: "+18.4%", sub: "vs last quarter", color: "green" as const },
  { icon: <ClockIcon />, label: "Avg cycle time", value: "2.1 days", sub: "↓ 34% improved", color: "ai" as const },
  { icon: <EyeIcon />, label: "Anomalies detected", value: "7", sub: "last 30 days", color: "amber" as const },
  { icon: <BarChartIcon />, label: "Forecast accuracy", value: "96.2%", sub: "rolling 90-day", color: "ai" as const },
] as const;

/* ── Insight types — carousel ── */
const INSIGHTS = [
  { icon: <MonitorIcon />, t: "Live KPI Dashboards", s: "Auto-generated dashboards that update in real time from your ERP data. Revenue, margins, pipeline health, inventory turns, and cash position — always current, never stale.", stat: { n: "Real-time", l: "Data refresh" } },
  { icon: <EyeIcon />, t: "Anomaly Alerts", s: "ML models continuously scan your operational data for outliers — unusual expense spikes, supplier delays, demand deviations, and revenue drops — and alert your team before problems escalate.", stat: { n: "3.5×", l: "Faster detection" } },
  { icon: <TrendingUpIcon />, t: "Trend Analysis", s: "Automatically identify emerging patterns across sales cycles, customer behaviour, production output, and financial metrics. See what's changing before your competitors do.", stat: { n: "90-day", l: "Trend horizon" } },
  { icon: <TargetIcon />, t: "Goal Tracking", s: "Set department-level KPIs and let ML track progress, predict whether targets will be hit, and recommend corrective actions when trajectories drift.", stat: { n: "94%", l: "Prediction accuracy" } },
  { icon: <SparklesIcon />, t: "Natural Language Reports", s: "AI-generated executive summaries that explain what happened, why it happened, and what to do next — delivered daily to email, Slack, or your ERP dashboard.", stat: { n: "Daily", l: "Auto-generated" } },
  { icon: <GridIcon />, t: "Cross-System Correlation", s: "Connect data from ERP, CRM, HR, and supply chain to discover hidden correlations — how marketing spend impacts production load, or how hiring velocity affects delivery times.", stat: { n: "5+", l: "Data sources" } },
] as const;

/* ── How ML works — 3-column process ── */
const ML_PROCESS = [
  { icon: <DatabaseIcon />, t: "Connect & ingest", b: "We connect to your ERP, CRM, HR, and financial systems via secure APIs. Data is ingested, validated, and normalised into a unified analytics layer — no manual exports, no spreadsheets.", deliverables: ["Data pipeline", "Schema mapping", "Quality checks"] },
  { icon: <CpuIcon />, t: "Learn & model", b: "ML models train on your historical data to understand baselines, detect patterns, and build predictive capabilities. Models are validated against holdout data before deployment.", deliverables: ["Trained models", "Accuracy benchmarks", "Feature importance"] },
  { icon: <RocketIcon />, t: "Surface & act", b: "Insights surface inside your existing tools — ERP dashboards, Slack alerts, email digests, and custom UIs. Actionable recommendations trigger workflows automatically.", deliverables: ["Live dashboards", "Alert pipelines", "Automation hooks"] },
] as const;

/* ── Dashboard features ── */
const DASH_FEATURES = [
  { icon: <RefreshIcon />, t: "Real-time sync", s: "Dashboards update as your ERP data changes — no batch jobs, no overnight refreshes." },
  { icon: <UsersIcon />, t: "Role-based views", s: "CFOs see financial KPIs. Ops managers see production metrics. Sales leads see pipeline health." },
  { icon: <ShieldIcon />, t: "Drill-down capable", s: "Click any metric to drill into the underlying transactions, orders, or records." },
  { icon: <SparklesIcon />, t: "AI annotations", s: "ML automatically annotates charts with explanations — why a metric spiked, what's driving a trend." },
] as const;

/* ── Industries ── */
const INDUSTRIES = [
  "Manufacturing", "Retail & eCommerce", "Finance & Banking", "Logistics & 3PL",
  "Oil & Gas", "Healthcare", "Construction", "Real Estate",
  "Textile & Apparel", "Steel & Fabrication", "SaaS & Technology", "Education",
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "Power BI", color: "#F2C811" },
  { name: "Metabase", color: "#509EE3" },
  { name: "Google Looker", color: "#4285F4" },
  { name: "Custom Dashboards", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function MlInsightsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + KPI tile grid right ═══ */}
      <section className="ml-hero">
        <div className="ml-hero-glow ml-hero-glow-1" aria-hidden="true" />
        <div className="ml-hero-glow ml-hero-glow-2" aria-hidden="true" />
        <div className="ml-hero-inner">
          <div className="ml-hero-content">
            <div className="ml-hero-badge rev">
              <span className="ml-hero-badge-dot" />
              ML-powered insights
            </div>
            <h1 className="ml-hero-h rev">
              ML-Powered<br />Insights.<br />
              <span className="acc">Intelligence, not reports.</span>
            </h1>
            <p className="ml-hero-sub rev">
              Machine learning that transforms your ERP data into real-time dashboards, automated KPIs, and proactive alerts — <strong>so your team makes decisions based on intelligence, not gut feel.</strong>
            </p>
            <div className="ml-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your insights roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#process">See how it works</a>
            </div>
          </div>

          {/* KPI tile grid */}
          <div className="ml-kpi-grid rev">
            {KPI_TILES.map((kpi) => (
              <div key={kpi.label} className={`ml-kpi-tile ml-kpi-${kpi.color}`}>
                <div className="ml-kpi-tile-icon">{kpi.icon}</div>
                <div className="ml-kpi-tile-label">{kpi.label}</div>
                <div className="ml-kpi-tile-value">{kpi.value}</div>
                <div className="ml-kpi-tile-sub">{kpi.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSIGHT TYPES — horizontal scrolling carousel ═══ */}
      <section className="ml-insights" id="insights">
        <div className="ml-insights-inner">
          <div className="ml-insights-hdr rev">
            <div>
              <div className="eyebrow">Insight types</div>
              <h2>Six intelligence layers.<br /><span>Always on.</span></h2>
            </div>
            <p>Each insight type is purpose-built for ERP data — not generic BI charts. Models learn your business rhythms, flag what matters, and surface recommendations where your team already works.</p>
          </div>
          <div className="ml-insights-scroll-wrap">
            <div className="ml-insights-scroll rev">
              {INSIGHTS.map((ins) => (
                <div key={ins.t} className="ml-insight-card">
                  <div className="ml-insight-card-icon">{ins.icon}</div>
                  <div className="ml-insight-card-t">{ins.t}</div>
                  <p className="ml-insight-card-s">{ins.s}</p>
                  <div className="ml-insight-card-stat">
                    <span className="ml-insight-stat-n">{ins.stat.n}</span>
                    <span className="ml-insight-stat-l">{ins.stat.l}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW ML WORKS — 3-column process flow ═══ */}
      <section className="ml-proc" id="process">
        <div className="ml-proc-inner">
          <div className="ml-proc-hdr rev">
            <div className="eyebrow lt">How it works</div>
            <h2>Three phases.<br /><span>From raw data to live intelligence.</span></h2>
          </div>
          <div className="ml-proc-flow rev">
            {ML_PROCESS.map((step, i) => (
              <div key={step.t} className="ml-proc-step-wrap">
                {i > 0 && <div className="ml-proc-arrow"><ArrowRightIcon /></div>}
                <div className="ml-proc-step">
                  <div className="ml-proc-step-icon">{step.icon}</div>
                  <div className="ml-proc-step-t">{step.t}</div>
                  <p className="ml-proc-step-b">{step.b}</p>
                  <div className="ml-proc-step-delivs">
                    {step.deliverables.map((d) => (
                      <span key={d} className="ml-proc-step-deliv"><CheckIcon />{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to transform</div>
              <h3>Want ML-powered insights for <span>your ERP?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a data engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DASHBOARD SHOWCASE — full-width dark ═══ */}
      <section className="ml-dash" id="dashboards">
        <div className="ml-dash-inner">
          <div className="ml-dash-hdr rev">
            <div className="eyebrow">Dashboard capabilities</div>
            <h2>Dashboards that<br /><span>think for you.</span></h2>
          </div>
          <div className="ml-dash-features rev">
            {DASH_FEATURES.map((f) => (
              <div key={f.t} className="ml-dash-feat">
                <div className="ml-dash-feat-icon">{f.icon}</div>
                <div className="ml-dash-feat-t">{f.t}</div>
                <p className="ml-dash-feat-s">{f.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES — pill cloud ═══ */}
      <section className="ml-ind" id="industries">
        <div className="ml-ind-inner rev">
          <div className="ml-ind-left">
            <div className="eyebrow lt">Industries served</div>
            <h2>ML insights for<br /><span>every vertical.</span></h2>
            <p>Domain-specific models trained on industry data patterns — not generic analytics applied blindly.</p>
          </div>
          <div className="ml-ind-pills">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="ml-ind-pill">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ml-plat">
        <div className="ml-plat-inner rev">
          <div className="ml-plat-label">Integrates with your existing stack</div>
          <div className="ml-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ml-plat-badge">
                <span className="ml-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
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
              <div className="eyebrow">Choosing your ML partner</div>
              <h3>Most BI projects<br /><span>deliver charts, not decisions.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">73%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of BI implementations fail to drive measurable business outcomes.</strong>
                  Source: Gartner, 2024. The problem is dashboards built on stale data, disconnected from workflows, and lacking the ML layer that turns observation into action.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer ML engagement is anchored to four commitments — written into the contract, tracked weekly, and never compromised.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Real-time, not batch</div>
                <p className="oi-closer-commit-b">Dashboards and alerts update in real time from live ERP data. No overnight batch jobs, no stale reports, no manual refreshes.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Insight accuracy, alert relevance, and dashboard adoption rates are defined before development. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Enterprise security</div>
                <p className="oi-closer-commit-b">Role-based access, encrypted pipelines, audit trails, and SOC 2 compliance built into every dashboard and data connection from day one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The data engineers who design your ML pipelines are the ones who build, deploy, and support them — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free data audit</div>
              <h4>Get your ML insights roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your data audit</span>
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
            <div className="eyebrow lt">ML support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior data engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For dashboard questions, model accuracy reviews, and alert tuning. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Pipeline failures or dashboard outages. Answered by a senior data engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring data engineers and ML specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior data engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
