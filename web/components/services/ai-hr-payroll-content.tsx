/* ────────────────────────────────────────────────────────────────────────
   AI-ASSISTED HR & PAYROLL — unique page design
   Centered hero + journey strip · Tall module cards · Asymmetric
   split showcase · Stacked phase bands · Inline stat ticker ·
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

/* ── Employee journey stages ── */
const JOURNEY = [
  { t: "Offer sent", status: "done" as const },
  { t: "Documents collected", status: "done" as const },
  { t: "IT provisioning", status: "active" as const },
  { t: "Training assigned", status: "pending" as const },
  { t: "Active employee", status: "pending" as const },
] as const;

/* ── HR modules — tall cards ── */
const MODULES = [
  { icon: <UsersIcon />, t: "AI Onboarding", bullets: ["Auto-trigger IT, finance, and HR workflows", "Document collection with AI verification", "Training plan assignment by role", "Progress tracking with manager alerts"] },
  { icon: <ClockIcon />, t: "Leave Management", bullets: ["Employee self-service leave requests", "AI conflict detection for team coverage", "Auto-approval rules by policy", "Leave balance forecasting"] },
  { icon: <WalletIcon />, t: "Payroll Automation", bullets: ["Multi-country payroll calculation", "Tax, deductions, and compliance auto-applied", "Payslip generation and distribution", "Bank file creation and reconciliation"] },
  { icon: <ShieldIcon />, t: "Compliance & Audit", bullets: ["Labour law compliance monitoring", "Automatic statutory report generation", "Audit trail on every HR action", "GDPR-compliant data handling"] },
] as const;

/* ── Showcase features ── */
const SHOWCASE_FEATURES = [
  { icon: <SparklesIcon />, t: "AI Resume Screening", s: "ML models rank candidates by fit, flag missing qualifications, and suggest interview questions — reducing screening time by 80%." },
  { icon: <BarChartIcon />, t: "Attrition Prediction", s: "Identify flight-risk employees using engagement, performance, and behavioural signals — intervene before resignation." },
  { icon: <MonitorIcon />, t: "Workforce Analytics", s: "Headcount trends, department costs, overtime patterns, and productivity metrics — updated in real time from your ERP." },
  { icon: <MailIcon />, t: "HR Chatbot", s: "Employees ask about policies, leave balances, payslips, and benefits through natural language — 24/7, no HR ticket required." },
] as const;

/* ── Process phases ── */
const PHASES = [
  { num: "01", t: "Audit & map", b: "We map your entire HR lifecycle — recruitment, onboarding, leave, payroll, performance, and exit. Every manual touchpoint, approval chain, and data handoff is documented.", icon: <SearchIcon />, deliverables: ["Process map", "Automation candidates", "ROI projection"] },
  { num: "02", t: "Automate & integrate", b: "AI-powered workflows replace manual steps. Onboarding triggers cascade to IT, finance, and training. Payroll calculations auto-apply tax rules and statutory deductions. Leave approvals route by policy.", icon: <SettingsIcon />, deliverables: ["Live workflows", "ERP integration", "Test suite"] },
  { num: "03", t: "Deploy & optimise", b: "Employee self-service portals, manager dashboards, and HR chatbots go live. Continuous monitoring ensures accuracy and adoption. Models retrain as workforce patterns evolve.", icon: <RocketIcon />, deliverables: ["Self-service portal", "Dashboards", "Feedback loops"] },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "90%", l: "Onboarding time saved" },
  { n: "99.8%", l: "Payroll accuracy" },
  { n: "80%", l: "Fewer HR tickets" },
  { n: "3×", l: "Faster hiring cycle" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo HR", color: "#714B67" },
  { name: "Zoho People", color: "#D32011" },
  { name: "SAP SuccessFactors", color: "#0070F2" },
  { name: "BambooHR", color: "#73C41D" },
  { name: "Slack", color: "#4A154B" },
  { name: "Microsoft Teams", color: "#6264A7" },
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Custom HRMS", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function AiHrPayrollContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + journey strip ═══ */}
      <section className="hr-hero">
        <div className="hr-hero-glow hr-hero-glow-1" aria-hidden="true" />
        <div className="hr-hero-glow hr-hero-glow-2" aria-hidden="true" />
        <div className="hr-hero-inner">
          <div className="hr-hero-badge rev">
            <span className="hr-hero-badge-dot" />
            AI-assisted HR &amp; payroll
          </div>
          <h1 className="hr-hero-h rev">
            AI-Assisted HR<br />
            <span className="acc">&amp; Payroll.</span>
          </h1>
          <p className="hr-hero-sub rev">
            Intelligent onboarding, automated payroll, AI-powered leave management, and employee self-service — <strong>built into your ERP, not bolted on.</strong>
          </p>
          <div className="hr-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your HR automation audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#process">See how it works</a>
          </div>

          {/* Employee journey strip */}
          <div className="hr-journey rev">
            <div className="hr-journey-label">Employee onboarding journey</div>
            <div className="hr-journey-track">
              {JOURNEY.map((j, i) => (
                <div key={j.t} className="hr-journey-step-wrap">
                  {i > 0 && <div className="hr-journey-conn"><span /></div>}
                  <div className={`hr-journey-step hr-journey-${j.status}`}>
                    <div className="hr-journey-step-dot" />
                    <div className="hr-journey-step-t">{j.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAND ═══ */}
      <section className="hr-stats-band">
        <div className="hr-stats-band-inner rev">
          {STATS.map((s) => (
            <div key={s.l} className="hr-stats-card">
              <div className="hr-stats-card-n">{s.n}</div>
              <div className="hr-stats-card-l">{s.l}</div>
              <div className="hr-stats-card-bar"><div className="hr-stats-card-fill" /></div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ HR MODULES — 4 tall cards ═══ */}
      <section className="hr-mods" id="modules">
        <div className="hr-mods-inner">
          <div className="hr-mods-hdr rev">
            <div className="eyebrow">Core modules</div>
            <h2>Four pillars of<br /><span>HR automation.</span></h2>
          </div>
          <div className="hr-mods-grid rev">
            {MODULES.map((m) => (
              <div key={m.t} className="hr-mod">
                <div className="hr-mod-icon">{m.icon}</div>
                <div className="hr-mod-t">{m.t}</div>
                <div className="hr-mod-bullets">
                  {m.bullets.map((b) => (
                    <div key={b.slice(0, 25)} className="hr-mod-bullet"><CheckIcon /><span>{b}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AI SHOWCASE — asymmetric split ═══ */}
      <section className="hr-show" id="ai-features">
        <div className="hr-show-inner">
          <div className="hr-show-hdr rev">
            <div className="eyebrow lt">AI-powered features</div>
            <h2>Intelligence layered<br /><span>across every HR function.</span></h2>
          </div>
          <div className="hr-show-split rev">
            <div className="hr-show-left">
              <div className="hr-show-left-icon"><CpuIcon /></div>
              <div className="hr-show-left-t">AI that understands<br />your workforce</div>
              <p className="hr-show-left-s">Beyond basic automation — ML models that predict attrition, screen candidates, answer employee questions, and surface workforce insights your leadership team actually uses.</p>
            </div>
            <div className="hr-show-right">
              {SHOWCASE_FEATURES.map((f) => (
                <div key={f.t} className="hr-show-feat">
                  <div className="hr-show-feat-icon">{f.icon}</div>
                  <div>
                    <div className="hr-show-feat-t">{f.t}</div>
                    <p className="hr-show-feat-s">{f.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — stacked phase bands ═══ */}
      <section className="hr-proc" id="process">
        <div className="hr-proc-inner">
          <div className="hr-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Three phases to<br /><span>fully automated HR.</span></h2>
          </div>
          <div className="hr-proc-bands">
            {PHASES.map((p) => (
              <div key={p.num} className="hr-proc-band rev">
                <div className="hr-proc-band-left">
                  <div className="hr-proc-band-num">{p.num}</div>
                  <div className="hr-proc-band-icon">{p.icon}</div>
                  <div className="hr-proc-band-t">{p.t}</div>
                </div>
                <div className="hr-proc-band-body">
                  <p className="hr-proc-band-b">{p.b}</p>
                  <div className="hr-proc-band-delivs">
                    {p.deliverables.map((d) => (
                      <span key={d} className="hr-proc-band-deliv"><FlagIcon />{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want AI powering <span>your HR?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an HR engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="hr-plat">
        <div className="hr-plat-inner rev">
          <div className="hr-plat-label">Integrates with your HR stack</div>
          <div className="hr-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="hr-plat-badge">
                <span className="hr-plat-badge-dot" style={{ background: p.color }} />
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
              <div className="eyebrow">Choosing your HR automation partner</div>
              <h3>Most HR automation<br /><span>automates forms, not workflows.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">65%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of HR teams still spend most of their time on administrative tasks.</strong>
                  Source: McKinsey, 2024. The problem isn&apos;t missing tools — it&apos;s tools that digitise paperwork without actually automating the underlying processes, approvals, and cross-department handoffs.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer HR deployment automates the full workflow — not just the form. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">End-to-end workflow automation</div>
                <p className="oi-closer-commit-b">Onboarding isn&apos;t just an HR form — it triggers IT provisioning, finance setup, training assignment, and manager notifications. Every handoff is automated.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Onboarding time reduction, payroll accuracy, and HR ticket volume are defined before development. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Compliance built in</div>
                <p className="oi-closer-commit-b">Labour law compliance, statutory reporting, GDPR data handling, and audit trails built into every workflow — not added as an afterthought.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><HeartIcon /></div>
                <div className="oi-closer-commit-t">Senior HR engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your HR automation are the ones who build, deploy, and support it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free HR audit</div>
              <h4>Get your HR automation roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your HR audit</span>
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
            <div className="eyebrow lt">HR support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior HR engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For payroll configuration, leave policy questions, and workflow adjustments. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Payroll processing failures or compliance escalations. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring HR automation engineers and payroll specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior HR engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
