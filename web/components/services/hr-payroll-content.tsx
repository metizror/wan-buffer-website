/* ────────────────────────────────────────────────────────────────────────
   HR & PAYROLL — unique page design
   Hero split + payslip mock · Lifecycle strip · Module grid ·
   Payroll region cards · Stats band · Process · Platforms · FAQ ·
   Closer · Support
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

/* ── Payslip mockup ── */
const PAYSLIP = {
  name: "Rajesh Kumar",
  id: "EMP-0482",
  month: "March 2026",
  earnings: [
    { label: "Basic Salary", amount: "₹45,000" },
    { label: "HRA", amount: "₹18,000" },
    { label: "Special Allowance", amount: "₹12,000" },
  ],
  deductions: [
    { label: "PF (Employee)", amount: "₹5,400" },
    { label: "Professional Tax", amount: "₹200" },
    { label: "TDS", amount: "₹3,750" },
  ],
  gross: "₹75,000",
  totalDeductions: "₹9,350",
  net: "₹65,650",
} as const;

/* ── Employee lifecycle ── */
const LIFECYCLE = [
  { t: "Hire", icon: <SearchIcon /> },
  { t: "Onboard", icon: <RocketIcon /> },
  { t: "Manage", icon: <SettingsIcon /> },
  { t: "Pay", icon: <WalletIcon /> },
  { t: "Develop", icon: <TrendingUpIcon /> },
  { t: "Exit", icon: <BriefcaseIcon /> },
] as const;

/* ── Modules ── */
const MODULES = [
  { icon: <UsersIcon />, t: "Employee Management", s: "Centralised employee records — personal details, documents, contracts, reporting hierarchy, and employment history. One source of truth for every team member.", color: "ai" as const },
  { icon: <ClockIcon />, t: "Leave Management", s: "Configurable leave types, accrual rules, carry-forward policies, and approval workflows. Employees request leave via self-service. Managers approve from mobile.", color: "green" as const },
  { icon: <MonitorIcon />, t: "Attendance & Timesheets", s: "Biometric integration, geo-fencing, mobile check-in, and timesheet tracking. Overtime calculations, shift management, and attendance regularisation built in.", color: "purple" as const },
  { icon: <WalletIcon />, t: "Payroll Processing", s: "Multi-country payroll with automatic tax calculations, statutory deductions, allowance structures, and bank file generation. Process payroll for 1,000+ employees in minutes.", color: "red" as const },
  { icon: <ShieldIcon />, t: "Statutory Compliance", s: "PF, ESI, PT, TDS, gratuity, and labour welfare fund — calculated and deducted automatically. WPS compliance for GCC. Year-end filing and Form 16 generation included.", color: "ai" as const },
  { icon: <BarChartIcon />, t: "Performance & Appraisals", s: "Goal setting, KRA tracking, 360-degree feedback, and appraisal cycles. Performance data feeds into increment and bonus calculations — closing the HR-payroll loop.", color: "green" as const },
] as const;

/* ── Payroll regions ── */
const REGIONS = [
  { region: "India", color: "#FF9933", items: ["PF & ESI auto-deduction", "Professional Tax (state-wise)", "TDS calculation & Form 16", "Gratuity & bonus computation", "Labour welfare fund"] },
  { region: "GCC & Middle East", color: "#00A1E0", items: ["WPS payroll compliance", "GOSI / DEWS contributions", "End-of-service benefits", "Arabic payslip generation", "Multi-currency salary processing"] },
  { region: "Global", color: "#7C3AED", items: ["Multi-country payroll rules", "Local tax compliance per region", "Cross-border salary splits", "International transfer handling", "GDPR-compliant data processing"] },
] as const;

/* ── Stats ── */
const STATS = [
  { n: "99.8%", l: "Payroll accuracy" },
  { n: "90%", l: "Onboarding time saved" },
  { n: "80%", l: "Fewer HR tickets" },
  { n: "4 min", l: "Avg payroll run" },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Audit", s: "Map HR processes, payroll rules, and compliance requirements" },
  { num: "02", t: "Configure", s: "Set up modules, salary structures, leave policies, and workflows" },
  { num: "03", t: "Migrate", s: "Transfer employee records, leave balances, and payroll history" },
  { num: "04", t: "Go live", s: "Parallel payroll run, validate, and switch over" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo HR", color: "#714B67" },
  { name: "Zoho People", color: "#D32011" },
  { name: "SAP SuccessFactors", color: "#0070F2" },
  { name: "BambooHR", color: "#73C41D" },
  { name: "greytHR", color: "#00897B" },
  { name: "Custom HRMS", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Which ERP platforms do you implement for HR & Payroll?", a: "We implement HR and payroll modules on Odoo, Zoho People, SAP SuccessFactors, BambooHR, and greytHR. Our recommendation depends on company size, payroll complexity, and existing ERP stack." },
  { q: "Can you handle multi-country payroll?", a: "Yes. We configure payroll rules for India (PF, ESI, PT, TDS), GCC (WPS, GOSI, DEWS), and global markets — including multi-currency salary processing, cross-border transfers, and local statutory compliance." },
  { q: "Do you integrate with biometric and attendance systems?", a: "Yes. We integrate with biometric devices, RFID scanners, and mobile geo-fencing apps. Attendance data flows directly into the ERP for shift management, overtime calculation, and payroll processing." },
  { q: "How do you handle WPS payroll for UAE/GCC?", a: "We configure Wage Protection System (WPS) compliant payroll — SIF file generation, bank transfer formatting, MOHRE reporting, and end-of-service benefit calculations per UAE/GCC labour law." },
  { q: "Can employees access payslips and apply for leave online?", a: "Yes. We deploy employee self-service portals — leave applications, payslip downloads, attendance regularisation, document uploads, and tax declaration — accessible from web and mobile." },
  { q: "What ongoing support do you provide?", a: "Every implementation includes 90 days of hypercare. After that, we offer SLA-based support — payroll rule updates, statutory changes, year-end processing, and configuration adjustments." },
] as const;

/* ── Component ── */
export function HrPayrollContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + payslip right ═══ */}
      <section className="hp-hero">
        <div className="hp-hero-glow hp-hero-glow-1" aria-hidden="true" />
        <div className="hp-hero-glow hp-hero-glow-2" aria-hidden="true" />
        <div className="hp-hero-inner">
          <div className="hp-hero-content">
            <div className="hp-hero-badge rev">
              <span className="hp-hero-badge-dot" />
              HR &amp; Payroll Automation
            </div>
            <h1 className="hp-hero-h rev">
              HR &amp; Payroll.<br />
              <span className="acc">People, managed.</span><br />
              <span className="acc acc-2">Payroll, automated.</span>
            </h1>
            <p className="hp-hero-sub rev">
              Leave management, attendance tracking, WPS payroll, statutory compliance, and employee self-service — <strong>end-to-end HR automation</strong> across Odoo, Zoho, SAP, and BambooHR.
            </p>
            {/* stat pills */}
            <div className="hp-hero-stats rev">
              <div className="hp-hero-stat"><span className="hp-hero-stat-n">99.8%</span><span className="hp-hero-stat-l">Payroll accuracy</span></div>
              <div className="hp-hero-stat-div" />
              <div className="hp-hero-stat"><span className="hp-hero-stat-n">4 min</span><span className="hp-hero-stat-l">Avg payroll run</span></div>
              <div className="hp-hero-stat-div" />
              <div className="hp-hero-stat"><span className="hp-hero-stat-n">90%</span><span className="hp-hero-stat-l">Onboarding saved</span></div>
            </div>
            <div className="hp-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your HR audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#modules">See modules</a>
            </div>
          </div>

          {/* Payslip mockup */}
          <div className="hp-slip rev">
            {/* auto-generated badge */}
            <div className="hp-slip-auto-badge">
              <span className="hp-slip-auto-dot" />
              Auto-generated
            </div>

            <div className="hp-slip-header">
              <div>
                <div className="hp-slip-header-title">Payslip</div>
                <div className="hp-slip-header-month">{PAYSLIP.month}</div>
              </div>
              <div className="hp-slip-header-logo">WB</div>
            </div>

            <div className="hp-slip-emp">
              <div>
                <div className="hp-slip-emp-name">{PAYSLIP.name}</div>
                <div className="hp-slip-emp-id">{PAYSLIP.id}</div>
              </div>
              <div className="hp-slip-emp-status">Active</div>
            </div>

            <div className="hp-slip-section">
              <div className="hp-slip-section-title">Earnings</div>
              {PAYSLIP.earnings.map((e) => (
                <div key={e.label} className="hp-slip-line">
                  <span>{e.label}</span>
                  <span className="hp-slip-amount earn">{e.amount}</span>
                </div>
              ))}
            </div>

            <div className="hp-slip-section">
              <div className="hp-slip-section-title">Deductions</div>
              {PAYSLIP.deductions.map((d) => (
                <div key={d.label} className="hp-slip-line">
                  <span>{d.label}</span>
                  <span className="hp-slip-amount ded">{d.amount}</span>
                </div>
              ))}
            </div>

            <div className="hp-slip-total">
              <div className="hp-slip-total-row">
                <span>Gross</span><span>{PAYSLIP.gross}</span>
              </div>
              <div className="hp-slip-total-row">
                <span>Deductions</span><span className="hp-slip-amount ded">{PAYSLIP.totalDeductions}</span>
              </div>
              <div className="hp-slip-total-row hp-slip-net">
                <span>Net Pay</span><span>{PAYSLIP.net}</span>
              </div>
            </div>

            {/* net pay bar */}
            <div className="hp-slip-bar-wrap">
              <div className="hp-slip-bar-track">
                <div className="hp-slip-bar-fill" style={{ width: "87%" }} />
              </div>
              <span className="hp-slip-bar-label">87% retained after deductions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LIFECYCLE STRIP ═══ */}
      <section className="hp-life">
        <div className="hp-life-inner rev">
          <div className="hp-life-label">Full employee lifecycle</div>
          <div className="hp-life-track">
            {LIFECYCLE.map((l, i) => (
              <div key={l.t} className="hp-life-step-wrap">
                {i > 0 && <div className="hp-life-conn"><ArrowRightIcon /></div>}
                <div className="hp-life-step">
                  <div className="hp-life-step-icon">{l.icon}</div>
                  <div className="hp-life-step-t">{l.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODULES — grid ═══ */}
      <section className="hp-mods" id="modules">
        <div className="hp-mods-inner">
          <div className="hp-mods-hdr rev">
            <div className="eyebrow">Core modules</div>
            <h2>Six HR modules.<br /><span>Complete workforce management.</span></h2>
            <p>Every module is configured for your company policies, leave rules, salary structures, and statutory requirements — not a generic template.</p>
          </div>
          <div className="hp-mods-grid rev">
            {MODULES.map((m) => (
              <div key={m.t} className={`hp-mod hp-mod-${m.color}`}>
                <div className="hp-mod-icon">{m.icon}</div>
                <div className="hp-mod-t">{m.t}</div>
                <p className="hp-mod-s">{m.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAYROLL REGIONS ═══ */}
      <section className="hp-regions" id="payroll">
        <div className="hp-regions-inner">
          <div className="hp-regions-hdr rev">
            <div className="eyebrow lt">Payroll compliance</div>
            <h2>Payroll rules for<br /><span>every region.</span></h2>
          </div>
          <div className="hp-regions-grid rev">
            {REGIONS.map((r) => (
              <div key={r.region} className="hp-region" style={{ borderTopColor: r.color }}>
                <div className="hp-region-name" style={{ color: r.color }}>{r.region}</div>
                <div className="hp-region-items">
                  {r.items.map((item) => (
                    <div key={item.slice(0, 20)} className="hp-region-item"><CheckIcon /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS BAND ═══ */}
      <section className="hp-stats">
        <div className="hp-stats-inner rev">
          {STATS.map((s, i) => (
            <>
              {i > 0 && <span key={`sep-${s.l}`} className="hp-stat-sep" />}
              <div key={s.l} className="hp-stat">
                <div className="hp-stat-n">{s.n}</div>
                <div className="hp-stat-l">{s.l}</div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="hp-proc" id="process">
        <div className="hp-proc-inner">
          <div className="hp-proc-hdr rev">
            <div className="eyebrow">Implementation</div>
            <h2>Four steps to<br /><span>automated HR.</span></h2>
          </div>
          <div className="hp-proc-grid rev">
            {PROCESS.map((p) => (
              <div key={p.num} className="hp-proc-step">
                <div className="hp-proc-step-num">{p.num}</div>
                <div className="hp-proc-step-t">{p.t}</div>
                <p className="hp-proc-step-s">{p.s}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want your HR on <span>autopilot?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an HR consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="hp-plat">
        <div className="hp-plat-inner rev">
          <div className="hp-plat-label">HR &amp; payroll platforms we implement</div>
          <div className="hp-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="hp-plat-badge">
                <span className="hp-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="hp-faq" id="faq">
        <div className="hp-faq-inner">
          <div className="hp-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>HR &amp; payroll.</span></h2>
          </div>
          <div className="hp-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="hp-faq-item">
                <summary className="hp-faq-q">{f.q}</summary>
                <p className="hp-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your HR partner</div>
              <h3>Most HR systems<br /><span>digitise forms, not processes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">65%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of HR teams still process payroll manually.</strong>
                  Source: Deloitte, 2024. The issue isn&apos;t tools — it&apos;s implementations that automate leave requests but leave payroll calculation, compliance, and reporting as manual spreadsheet exercises.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer HR deployment automates the full lifecycle — hire to retire, leave to payslip. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Full lifecycle automation</div>
                <p className="oi-closer-commit-b">From offer letter to exit — onboarding, leave, attendance, payroll, appraisals, and offboarding. Every handoff automated.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Statutory compliance built in</div>
                <p className="oi-closer-commit-b">PF, ESI, PT, TDS, WPS, GOSI — configured and tested before go-live. Regulation updates applied automatically.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Payroll accuracy, processing time, and employee adoption are defined before development. If we miss targets, we keep iterating.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><HeartIcon /></div>
                <div className="oi-closer-commit-t">Senior HR consultants only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who audits your HR is the one who configures, migrates, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free HR audit</div>
              <h4>Get your HR &amp; payroll roadmap in <span>48 hours.</span></h4>
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
            <p>Three channels. Senior HR consultants. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For payroll rules, leave policies, and compliance questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Payroll processing failures or compliance deadlines. Answered by a senior HR consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring HR consultants and payroll specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior HR consultants</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Compliance built in</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
