/* ────────────────────────────────────────────────────────────────────────
   CONSTRUCTION & PROJECTS — unique page design
   Hero split + project tracker mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-site section ·
   Platforms · FAQ · Closer · Support
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
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Project tracker mockup ── */
const PROJECTS = [
  { code: "PRJ-041", name: "Marina Tower — Phase 2", budget: "$4.2M", spent: 68, status: "on-track" as const },
  { code: "PRJ-042", name: "Highway Overpass — NH48", budget: "$1.8M", spent: 45, status: "on-track" as const },
  { code: "PRJ-043", name: "Warehouse Complex — Jebel Ali", budget: "$2.6M", spent: 82, status: "at-risk" as const },
  { code: "PRJ-044", name: "Villa Community — Phase 1", budget: "$6.1M", spent: 31, status: "on-track" as const },
  { code: "PRJ-045", name: "Office Fit-Out — BKC", budget: "$0.9M", spent: 95, status: "closing" as const },
  { code: "PRJ-046", name: "Metro Station — Line 3", budget: "$8.4M", spent: 12, status: "mobilising" as const },
] as const;

/* ── Construction operations ── */
const OPERATIONS = [
  { icon: <GridIcon />, t: "BOQ & Estimation", s: "Bill of quantities management with item-level costing, rate analysis, multi-level BOQ structures, and automated quantity take-offs — linked directly to procurement and budgets.", color: "ai" as const },
  { icon: <UsersIcon />, t: "Subcontractor Management", s: "Subcontractor onboarding, work order issuance, progress measurement, retention tracking, and automated RA bill generation — with SLA monitoring and penalty calculations.", color: "green" as const },
  { icon: <WalletIcon />, t: "Project Cost Control", s: "Real-time budget-vs-actual tracking at BOQ item level. Committed cost visibility, variation order management, and cash flow forecasting per project — catching overruns before they happen.", color: "purple" as const },
  { icon: <BarChartIcon />, t: "Progress & Site Analytics", s: "Physical progress tracking linked to financial progress. Earned value analysis, S-curve dashboards, and milestone-based reporting — from project portfolio down to individual activity.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Multi-Level BOQ Management", s: "Define bill of quantities with unlimited nesting — divisions, sub-divisions, line items, and sub-items. Rate analysis with material, labour, equipment, and overhead breakdowns. Revision control for BOQ amendments with full audit trail and client approval workflows." },
  { num: "02", icon: <UsersIcon />, t: "Subcontractor & Vendor Management", s: "Subcontractor prequalification, work order generation from BOQ items, progress measurement sheets, retention management, and automated Running Account (RA) bill processing. Performance scorecards track quality, schedule adherence, and safety compliance per subcontractor." },
  { num: "03", icon: <WalletIcon />, t: "Project Cost Control & Budgeting", s: "Budget allocation at BOQ item level with committed cost tracking from purchase orders and subcontract work orders. Variation order management with cost impact analysis. Real-time cost-to-complete forecasting and margin visibility per project." },
  { num: "04", icon: <PackageIcon />, t: "Material Reconciliation", s: "Track material issued to site against BOQ consumption norms. Wastage analysis per item, per project, and per subcontractor. Automatic alerts when consumption exceeds norms — preventing material pilferage and budget overruns." },
  { num: "05", icon: <FlagIcon />, t: "Progress Billing & RA Bills", s: "Milestone-based and measurement-based billing linked to BOQ progress. Automated RA bill generation for subcontractors with retention deduction, advance recovery, and penalty calculations. Client billing with IPC (Interim Payment Certificate) generation." },
  { num: "06", icon: <BarChartIcon />, t: "Project Analytics & Earned Value", s: "Earned value management (EVM) dashboards with CPI, SPI, and EAC metrics. S-curve charts, cash flow forecasts, and resource utilisation reports. Drill from portfolio-level KPIs to individual BOQ item cost and progress." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Survey", s: "Map project workflows, BOQ & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up BOQ, cost codes, billing & reports" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer project data with BOQ & cost history" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel project run" },
] as const;

/* ── Multi-site locations ── */
const SITES = [
  { t: "Head Office", sub: "Project management & commercial control", projects: 12, active: true },
  { t: "Regional Site Office", sub: "On-site execution & progress tracking", projects: 6, active: true },
  { t: "Joint Venture Partner", sub: "Consortium project integration", projects: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Project", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo Purchase", color: "#714B67" },
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "Primavera P6", color: "#E63946" },
  { name: "MS Project", color: "#217346" },
  { name: "Custom BOQ ERP", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you manage multi-level BOQ structures with rate analysis?", a: "Yes. We configure multi-level BOQ hierarchies — divisions, sub-divisions, line items, and sub-items — with rate analysis breakdowns for material, labour, equipment, and overheads. BOQ revisions are version-controlled with approval workflows. Quantities link directly to procurement, budgets, and progress measurement." },
  { q: "How does subcontractor RA bill automation work?", a: "Subcontractor work orders are generated from BOQ items with agreed rates. Progress is measured on-site and entered against work order items. The system auto-generates Running Account bills with retention deductions, advance recovery, previous bill adjustments, and penalty calculations. Bills route through configurable approval workflows before payment processing." },
  { q: "Can you track project costs against BOQ items in real time?", a: "Yes. Every purchase order, subcontract work order, and expense entry is tagged to a project and BOQ item. The system shows budget, committed cost, actual cost, and cost-to-complete at every level — from project portfolio down to individual BOQ line items. Variation orders are tracked separately with cost impact analysis." },
  { q: "Do you support material reconciliation against consumption norms?", a: "Yes. Material issue to site is tracked against BOQ consumption norms (material coefficient per unit of work). The system calculates theoretical consumption vs actual issue and flags wastage per item, per project, and per subcontractor — with automatic alerts when consumption exceeds configurable thresholds." },
  { q: "Can you integrate with Primavera P6 or MS Project for scheduling?", a: "Yes. We integrate with Primavera P6 and Microsoft Project for schedule management. Activity-level progress from the scheduling tool syncs to the ERP for earned value calculation. Cost data from the ERP flows back to the scheduling tool for resource-loaded schedules." },
  { q: "How long does a construction ERP implementation take?", a: "Single-project setup with BOQ and cost tracking takes 4–6 weeks. Full construction ERP with subcontractor management, RA billing, and analytics takes 10–16 weeks. Multi-project organisations with JV accounting, material reconciliation, and P6 integration take 14–24 weeks." },
] as const;

/* ── Component ── */
export function ConstructionProjectsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + project tracker right ═══ */}
      <section className="cp-hero">
        <div className="cp-hero-glow cp-hero-glow-1" aria-hidden="true" />
        <div className="cp-hero-glow cp-hero-glow-2" aria-hidden="true" />
        <div className="cp-hero-dots" aria-hidden="true" />
        <div className="cp-hero-inner">
          <div className="cp-hero-content">
            <div className="cp-hero-badge rev">
              <span className="cp-hero-badge-dot" />
              Construction &amp; Projects
            </div>
            <h1 className="cp-hero-h rev">
              Construction<br />&amp; Projects.<br />
              <span className="acc">Every site.<br />Every BOQ.<br />Controlled.</span>
            </h1>
            <p className="cp-hero-sub rev">
              BOQ management, subcontractor tracking, project cost control, progress billing, and earned value analytics — <strong>integrated into your ERP.</strong>
            </p>
            <div className="cp-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your construction audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="cp-hero-stats rev">
              <div className="cp-hero-stat">
                <span className="cp-hero-stat-n">30%</span>
                <span className="cp-hero-stat-l">Less cost overrun</span>
              </div>
              <span className="cp-hero-stat-div" />
              <div className="cp-hero-stat">
                <span className="cp-hero-stat-n">85%</span>
                <span className="cp-hero-stat-l">Faster RA billing</span>
              </div>
              <span className="cp-hero-stat-div" />
              <div className="cp-hero-stat">
                <span className="cp-hero-stat-n">12+</span>
                <span className="cp-hero-stat-l">Projects / portfolio</span>
              </div>
            </div>
          </div>

          {/* Project tracker mockup */}
          <div className="cp-tracker rev">
            <div className="cp-tracker-hdr">
              <div className="cp-tracker-live">
                <span className="cp-tracker-live-dot" />
                Live
              </div>
              <div className="cp-tracker-title">Project Portfolio</div>
            </div>
            <div className="cp-tracker-list">
              {PROJECTS.map((p) => (
                <div key={p.code} className={`cp-proj cp-proj-${p.status}`}>
                  <div className="cp-proj-top">
                    <span className="cp-proj-code">{p.code}</span>
                    <span className={`cp-proj-status cp-proj-status-${p.status}`}>
                      {p.status === "on-track" ? "On Track" : p.status === "at-risk" ? "At Risk" : p.status === "closing" ? "Closing" : "Mobilising"}
                    </span>
                  </div>
                  <div className="cp-proj-name">{p.name}</div>
                  <div className="cp-proj-progress">
                    <div className={`cp-proj-progress-fill cp-proj-progress-${p.status}`} style={{ width: `${p.spent}%` }} />
                  </div>
                  <div className="cp-proj-bottom">
                    <span className="cp-proj-budget">{p.budget}</span>
                    <span className="cp-proj-pct">{p.spent}% spent</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="cp-ops">
        <div className="cp-ops-inner">
          <div className="cp-ops-hdr rev">
            <div className="eyebrow">Construction operations</div>
            <h2>Estimate. Build. Track.<br /><span>Bill.</span></h2>
          </div>
          <div className="cp-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`cp-op cp-op-${op.color}`}>
                <div className="cp-op-icon">{op.icon}</div>
                <div className="cp-op-t">{op.t}</div>
                <p className="cp-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="cp-feat" id="features">
        <div className="cp-feat-inner">
          <div className="cp-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete project control.</span></h2>
          </div>
          <div className="cp-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`cp-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="cp-feat-row-num">{f.num}</div>
                <div className="cp-feat-row-icon">{f.icon}</div>
                <div className="cp-feat-row-body">
                  <div className="cp-feat-row-t">{f.t}</div>
                  <p className="cp-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="cp-proc" id="process">
        <div className="cp-proc-inner">
          <div className="cp-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>project intelligence.</span></h2>
          </div>
          <div className="cp-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="cp-proc-step-wrap">
                {i > 0 && <div className="cp-proc-dots" />}
                <div className="cp-proc-step">
                  <div className="cp-proc-step-icon">{p.icon}</div>
                  <div className="cp-proc-step-t">{p.t}</div>
                  <div className="cp-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to build smarter</div>
              <h3>Want your projects <span>running on data?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a construction engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-SITE — split ═══ */}
      <section className="cp-multi" id="multi-site">
        <div className="cp-multi-inner">
          <div className="cp-multi-hdr rev">
            <div className="eyebrow lt">Multi-site</div>
            <h2>One system.<br /><span>Every project.</span></h2>
          </div>
          <div className="cp-multi-split rev">
            <div className="cp-multi-left">
              <div className="cp-multi-big-n">12+</div>
              <div className="cp-multi-big-l">Projects managed from one ERP</div>
              <p className="cp-multi-big-s">Head office, regional site offices, and joint venture partners — all orchestrated from a single system with real-time cost visibility, subcontractor tracking, and consolidated project analytics across every site.</p>
            </div>
            <div className="cp-multi-right">
              {SITES.map((site) => (
                <div key={site.t} className={`cp-multi-loc${site.active ? "" : " inactive"}`}>
                  <div className="cp-multi-loc-t">{site.t}</div>
                  <div className="cp-multi-loc-sub">{site.sub}</div>
                  {site.projects > 0 && <div className="cp-multi-loc-stat">{site.projects} active projects</div>}
                  {!site.active && <div className="cp-multi-loc-stat">JV integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="cp-plat">
        <div className="cp-plat-inner rev">
          <div className="cp-plat-label">Construction &amp; project integrations</div>
          <div className="cp-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="cp-plat-badge">
                <span className="cp-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="cp-faq" id="faq">
        <div className="cp-faq-inner">
          <div className="cp-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Construction &amp; Projects ERP.</span></h2>
          </div>
          <div className="cp-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="cp-faq-item">
                <summary className="cp-faq-q">{f.q}</summary>
                <p className="cp-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your construction partner</div>
              <h3>Most ERPs track expenses,<br /><span>not project intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">77%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of construction projects exceed their original budget.</strong>
                  Source: McKinsey Global Institute, 2024. The result is undetected cost overruns, delayed RA billing, material pilferage, and zero visibility into project-level profitability — problems that compound across a portfolio.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer construction deployment covers the full project lifecycle — not just accounting. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">BOQ-linked cost control from day one</div>
                <p className="oi-closer-commit-b">Every cost — purchase, subcontract, labour, overhead — is tagged to a project and BOQ item. Budget, committed, actual, and forecast costs are visible in real time at every level of the BOQ hierarchy.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed cost &amp; schedule targets</div>
                <p className="oi-closer-commit-b">Budget variance thresholds, RA bill cycle times, and reporting accuracy are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Automated subcontractor lifecycle</div>
                <p className="oi-closer-commit-b">From prequalification through work order, progress measurement, RA billing, retention, and final account — the entire subcontractor lifecycle is system-driven. No spreadsheets, no manual calculations.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><BriefcaseIcon /></div>
                <div className="oi-closer-commit-t">Senior construction engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who surveys your projects is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free construction audit</div>
              <h4>Get your project ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your construction audit</span>
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
            <div className="eyebrow lt">Construction support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior construction engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For BOQ setup, billing configuration, and cost code structure questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Project cost sync failures or billing discrepancy incidents. Answered by a senior construction engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring construction ERP engineers and project control specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior construction engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
