/* ────────────────────────────────────────────────────────────────────────
   PREDICTIVE MAINTENANCE — unique page design
   Hero split + gauge panel · Alert feed · Side-stripe capability
   cards · Vertical step list · Asymmetric impact metrics ·
   Platforms · Closer · Support
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

/* ── Equipment gauges ── */
const GAUGES = [
  { label: "CNC Lathe #3", score: 94, status: "healthy" as const },
  { label: "Hydraulic Press A", score: 61, status: "warning" as const },
  { label: "Conveyor Belt 7", score: 23, status: "critical" as const },
  { label: "Compressor Unit", score: 87, status: "healthy" as const },
] as const;

/* ── Alert feed ── */
const ALERTS = [
  { time: "2 min ago", icon: <ZapIcon />, t: "Vibration anomaly detected", s: "CNC Lathe #3 — bearing wear pattern identified", level: "info" as const },
  { time: "18 min ago", icon: <EyeIcon />, t: "Temperature threshold approaching", s: "Hydraulic Press A — coolant flow below optimum", level: "warning" as const },
  { time: "1 hr ago", icon: <SettingsIcon />, t: "Work order auto-generated", s: "Conveyor Belt 7 — belt replacement scheduled for Monday", level: "action" as const },
  { time: "3 hrs ago", icon: <CheckCircleIcon />, t: "Maintenance completed", s: "Compressor Unit — filter replacement verified by IoT sensor", level: "done" as const },
  { time: "6 hrs ago", icon: <TrendingUpIcon />, t: "Model retrained", s: "All assets — prediction accuracy updated to 96.3%", level: "info" as const },
] as const;

/* ── Capabilities ── */
const CAPABILITIES = [
  { icon: <CpuIcon />, t: "Failure Prediction", s: "ML models analyse vibration, temperature, pressure, and usage patterns to predict equipment failures days or weeks before they happen — giving your team time to plan, not react.", accent: "ai" as const },
  { icon: <EyeIcon />, t: "Condition Monitoring", s: "Real-time health scores for every asset based on IoT sensor data. Dashboards show which machines are healthy, which need attention, and which are approaching failure thresholds.", accent: "amber" as const },
  { icon: <SettingsIcon />, t: "Automated Work Orders", s: "When a failure prediction crosses the threshold, work orders generate automatically in your ERP — with the right parts, the right technician, and the right priority level assigned.", accent: "ai" as const },
  { icon: <BarChartIcon />, t: "MTBF & Reliability Analysis", s: "Track mean time between failures, asset reliability trends, and maintenance effectiveness metrics. Models continuously improve as more failure data is collected.", accent: "amber" as const },
  { icon: <RefreshIcon />, t: "Maintenance Scheduling", s: "Replace calendar-based maintenance with condition-based scheduling. Service only what needs servicing — reducing unnecessary maintenance costs by up to 40% while improving uptime.", accent: "ai" as const },
  { icon: <ShieldIcon />, t: "Spare Parts Optimisation", s: "Demand predictions for spare parts based on failure forecasts. The right parts are in stock before they are needed — eliminating emergency procurement and expedited shipping costs.", accent: "amber" as const },
] as const;

/* ── How it works ── */
const STEPS = [
  { num: "01", icon: <DatabaseIcon />, t: "Connect sensors & ERP", b: "We integrate your IoT sensors, SCADA systems, and ERP maintenance modules into a unified data pipeline. Historical maintenance logs and failure records are ingested for model training.", deliverables: ["Data pipeline", "Sensor mapping", "ERP integration"] },
  { num: "02", icon: <CpuIcon />, t: "Train failure models", b: "ML models train on your specific equipment types, operating conditions, and failure patterns. We benchmark multiple algorithms and deploy only the most accurate for each asset class.", deliverables: ["Trained models", "Accuracy benchmarks", "Asset profiles"] },
  { num: "03", icon: <MonitorIcon />, t: "Deploy monitoring", b: "Real-time dashboards, health scores, and alert pipelines go live. Work order automation triggers connect directly to your ERP maintenance module with approval workflows built in.", deliverables: ["Live dashboards", "Alert rules", "Work order automation"] },
  { num: "04", icon: <RefreshIcon />, t: "Optimise continuously", b: "Models retrain as new failure data arrives. Prediction accuracy improves over time. Maintenance schedules adapt automatically to changing operating conditions and asset degradation patterns.", deliverables: ["Retraining pipeline", "Performance reports", "Schedule optimisation"] },
] as const;

/* ── Impact metrics ── */
const HERO_METRIC = { n: "45%", l: "Less unplanned downtime", sub: "Average reduction across our predictive maintenance deployments — measured against pre-deployment baselines over 6 months." };
const SIDE_METRICS = [
  { n: "40%", l: "Maintenance cost reduction" },
  { n: "3×", l: "Asset lifespan extension" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo MRP", color: "#714B67" },
  { name: "SAP PM", color: "#0070F2" },
  { name: "Zoho", color: "#D32011" },
  { name: "Azure IoT", color: "#0078D4" },
  { name: "AWS IoT", color: "#FF9900" },
  { name: "Siemens MindSphere", color: "#009999" },
  { name: "Custom SCADA", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function PredictiveMaintenanceContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + gauge panel right ═══ */}
      <section className="pm-hero">
        <div className="pm-hero-glow pm-hero-glow-1" aria-hidden="true" />
        <div className="pm-hero-glow pm-hero-glow-2" aria-hidden="true" />
        <div className="pm-hero-inner">
          <div className="pm-hero-content">
            <div className="pm-hero-badge rev">
              <span className="pm-hero-badge-dot" />
              Predictive maintenance
            </div>
            <h1 className="pm-hero-h rev">
              Predictive<br />Maintenance.<br />
              <span className="acc">Fix it before it breaks.</span>
            </h1>
            <p className="pm-hero-sub rev">
              AI that predicts equipment failures before they happen. Sensor data analysis, automated work orders, and condition-based scheduling — <strong>eliminating unplanned downtime.</strong>
            </p>
            <div className="pm-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your maintenance audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#how-it-works">See how it works</a>
            </div>
          </div>

          {/* Gauge panel */}
          <div className="pm-gauges rev">
            {GAUGES.map((g) => (
              <div key={g.label} className={`pm-gauge pm-gauge-${g.status}`}>
                <div className="pm-gauge-ring">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" strokeWidth="5" stroke="rgba(255,255,255,.06)" />
                    <circle cx="40" cy="40" r="34" fill="none" strokeWidth="5" strokeLinecap="round"
                      strokeDasharray={`${g.score * 2.136} 213.6`}
                      transform="rotate(-90 40 40)"
                      className="pm-gauge-progress" />
                  </svg>
                  <div className="pm-gauge-score">{g.score}</div>
                </div>
                <div className="pm-gauge-label">{g.label}</div>
                <div className={`pm-gauge-status ${g.status}`}>
                  {g.status === "healthy" ? "Healthy" : g.status === "warning" ? "Warning" : "Critical"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ALERT FEED — scrolling notification log ═══ */}
      <section className="pm-alerts">
        <div className="pm-alerts-inner">
          <div className="pm-alerts-label rev">Live maintenance intelligence</div>
          <div className="pm-alerts-scroll-wrap">
            <div className="pm-alerts-scroll rev">
              {ALERTS.map((a, i) => (
                <div key={i} className={`pm-alert pm-alert-${a.level}`}>
                  <div className="pm-alert-icon">{a.icon}</div>
                  <div className="pm-alert-body">
                    <div className="pm-alert-t">{a.t}</div>
                    <div className="pm-alert-s">{a.s}</div>
                  </div>
                  <div className="pm-alert-time">{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — side-stripe cards ═══ */}
      <section className="pm-caps" id="capabilities">
        <div className="pm-caps-inner">
          <div className="pm-caps-hdr rev">
            <div className="eyebrow">Core capabilities</div>
            <h2>Predict. Prevent.<br /><span>Perform.</span></h2>
            <p>Every capability is engineered for manufacturing and industrial environments — trained on real sensor data, integrated with your ERP maintenance module, and continuously improving as equipment ages.</p>
          </div>
          <div className="pm-caps-grid rev">
            {CAPABILITIES.map((c) => (
              <div key={c.t} className={`pm-cap pm-cap-${c.accent}`}>
                <div className="pm-cap-icon">{c.icon}</div>
                <div className="pm-cap-t">{c.t}</div>
                <p className="pm-cap-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — vertical step list ═══ */}
      <section className="pm-how" id="how-it-works">
        <div className="pm-how-inner">
          <div className="pm-how-hdr rev">
            <div className="eyebrow lt">How it works</div>
            <h2>Four phases to<br /><span>zero unplanned downtime.</span></h2>
          </div>
          <div className="pm-how-list">
            {STEPS.map((s, i) => (
              <div key={s.num} className="pm-how-item rev">
                <div className="pm-how-item-marker">
                  <div className="pm-how-item-dot" />
                  {i < STEPS.length - 1 && <div className="pm-how-item-line" />}
                </div>
                <div className="pm-how-item-body">
                  <div className="pm-how-item-head">
                    <span className="pm-how-item-num">{s.num}</span>
                    <div className="pm-how-item-icon">{s.icon}</div>
                    <span className="pm-how-item-t">{s.t}</span>
                  </div>
                  <p className="pm-how-item-b">{s.b}</p>
                  <div className="pm-how-item-delivs">
                    {s.deliverables.map((d) => (
                      <span key={d} className="pm-how-item-deliv"><FlagIcon />{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to predict</div>
              <h3>Want AI maintaining <span>your equipment?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT — asymmetric 1+2 split ═══ */}
      <section className="pm-impact" id="results">
        <div className="pm-impact-inner">
          <div className="pm-impact-hdr rev">
            <div className="eyebrow">Proven impact</div>
            <h2>Numbers that prove<br /><span>the ROI.</span></h2>
          </div>
          <div className="pm-impact-split rev">
            <div className="pm-impact-hero">
              <div className="pm-impact-hero-n">{HERO_METRIC.n}</div>
              <div className="pm-impact-hero-l">{HERO_METRIC.l}</div>
              <p className="pm-impact-hero-sub">{HERO_METRIC.sub}</p>
            </div>
            <div className="pm-impact-side">
              {SIDE_METRICS.map((m) => (
                <div key={m.l} className="pm-impact-side-card">
                  <div className="pm-impact-side-n">{m.n}</div>
                  <div className="pm-impact-side-l">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="pm-plat">
        <div className="pm-plat-inner rev">
          <div className="pm-plat-label">ERP &amp; IoT integrations</div>
          <div className="pm-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="pm-plat-badge">
                <span className="pm-plat-badge-dot" style={{ background: p.color }} />
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
              <div className="eyebrow">Choosing your maintenance partner</div>
              <h3>Calendar-based maintenance<br /><span>wastes money on healthy machines.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">82%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of equipment failures are not prevented by scheduled maintenance.</strong>
                  Source: ReliabilityWeb, 2024. Calendar-based maintenance services machines that don&apos;t need it and misses failures that don&apos;t follow schedules — the worst of both worlds.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer predictive maintenance deployment replaces schedules with sensor intelligence. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><CpuIcon /></div>
                <div className="oi-closer-commit-t">Asset-specific models</div>
                <p className="oi-closer-commit-b">Every asset class gets its own failure model trained on its own sensor data and operating conditions. No generic thresholds applied across different machine types.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Failure prediction accuracy, false positive rates, and downtime reduction are defined before deployment. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SettingsIcon /></div>
                <div className="oi-closer-commit-t">ERP-integrated work orders</div>
                <p className="oi-closer-commit-b">Predictions trigger actual work orders in your ERP — with parts, technician assignment, and scheduling. Not just alerts that require manual follow-up.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who build your maintenance models are the ones who deploy, monitor, and support them — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free maintenance audit</div>
              <h4>Get your predictive maintenance roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your maintenance audit</span>
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
            <div className="eyebrow lt">Maintenance support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For model accuracy questions, sensor integration, and alert tuning. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Sensor pipeline failures or false alert storms. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring IoT engineers and reliability ML specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
