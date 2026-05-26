/* ────────────────────────────────────────────────────────────────────────
   WORKFLOW AUTOMATION — unique page design
   Hero split · Before/After · Flow pipeline · Department modules ·
   Metrics dashboard · Integrations · Closer · Support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowRightIcon,
  ArrowsIcon,
  BarChartIcon,
  BookOpenIcon,
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
  TrophyIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Hero flow nodes ── */
const FLOW_NODES = [
  { icon: <MailIcon />, t: "Invoice received", s: "Vendor invoice via email", status: "done" as const },
  { icon: <SearchIcon />, t: "AI extracts data", s: "OCR + field validation", status: "done" as const },
  { icon: <DatabaseIcon />, t: "3-way match", s: "PO ↔ GRN ↔ Invoice", status: "running" as const, active: true },
  { icon: <CheckCircleIcon />, t: "Auto-approve", s: "Within threshold → approved", status: "running" as const },
  { icon: <WalletIcon />, t: "Payment scheduled", s: "ERP books entry", status: "waiting" as const, red: true },
] as const;

/* ── Before/After comparison items ── */
const BEFORE_ITEMS = [
  { icon: <ClockIcon />, t: "48-hour approval cycles", s: "Invoices and POs stuck in email chains waiting for manual sign-offs" },
  { icon: <EyeIcon />, t: "Data entry errors", s: "Re-keying data across systems introduces 15–23% error rates" },
  { icon: <UsersIcon />, t: "Department silos", s: "Finance, HR, and operations work on disconnected spreadsheets" },
  { icon: <SearchIcon />, t: "Zero visibility", s: "No real-time view of workflow status, bottlenecks, or SLA breaches" },
  { icon: <RefreshIcon />, t: "Repetitive manual tasks", s: "Staff spend 60% of time on copy-paste, follow-ups, and reconciliation" },
] as const;

const AFTER_ITEMS = [
  { icon: <ZapIcon />, t: "Under 5-second processing", s: "Invoices match, route, and approve in seconds — not days" },
  { icon: <ShieldIcon />, t: "99.8% accuracy", s: "Automated validation against ERP master data eliminates human error" },
  { icon: <GridIcon />, t: "Connected systems", s: "ERP, CRM, HR, and accounting share real-time data automatically" },
  { icon: <MonitorIcon />, t: "Live dashboards", s: "Real-time workflow tracking with SLA alerts and exception routing" },
  { icon: <SparklesIcon />, t: "Staff on strategic work", s: "Team focuses on analysis, negotiation, and growth — not data entry" },
] as const;

/* ── Pipeline steps ── */
const PIPELINE = [
  { num: "01", icon: <SearchIcon />, tag: "Discover", t: "Process discovery & mapping", b: "We audit every manual touchpoint — approval chains, handoffs, bottlenecks — and build a prioritised automation map.", deliverables: ["Process map", "Priority matrix"] },
  { num: "02", icon: <SettingsIcon />, tag: "Design", t: "Automation architecture", b: "Trigger logic, decision routing, exception handling, and approval gates — designed for reliability, not complexity.", deliverables: ["Logic spec", "Integration plan"] },
  { num: "03", icon: <CodeIcon />, tag: "Build", t: "Workflow development", b: "Purpose-built automated workflows tested against real data. No generic templates — every rule maps to your operations.", deliverables: ["Live workflows", "Test suite"] },
  { num: "04", icon: <CloudIcon />, tag: "Connect", t: "System integration", b: "Real-time bi-directional sync between ERP, CRM, accounting, HR, and third-party platforms via secure APIs.", deliverables: ["API connections", "Data validation"] },
  { num: "05", icon: <EyeIcon />, tag: "Validate", t: "Testing & rollout", b: "Sandbox validation with production-mirror data. Every edge case, exception path, and approval gate tested.", deliverables: ["UAT sign-off", "Rollback plan"] },
  { num: "06", icon: <RocketIcon />, tag: "Launch", t: "Go-live & optimise", b: "Department-by-department rollout with monitoring dashboards. Continuous optimisation based on real performance data.", deliverables: ["Live automation", "Dashboards"] },
] as const;

/* ── Department modules ── */
const MODULES = [
  { icon: <WalletIcon />, t: "Finance & Accounting", b: "Automate invoice matching, payment scheduling, expense approvals, bank reconciliation, and month-end closing — reducing close time by 70%.", ai: false, tasks: ["3-way invoice matching", "Auto-reconciliation", "Expense approval routing", "Tax compliance checks"], stat: { n: "70%", l: "Faster month-end close" } },
  { icon: <PackageIcon />, t: "Procurement & Supply Chain", b: "Purchase requisitions auto-generate POs, vendor selection routes by policy, and stock reorder triggers when thresholds hit — zero manual intervention.", ai: true, tasks: ["Auto PO generation", "Vendor approval routing", "Reorder point triggers", "GRN matching"], stat: { n: "85%", l: "Fewer manual POs" } },
  { icon: <UsersIcon />, t: "HR & Payroll", b: "Employee onboarding triggers IT, finance, and HR workflows simultaneously. Leave approvals, payroll calculations, and exit processes run automatically.", ai: false, tasks: ["Onboarding orchestration", "Leave approval chains", "Payroll auto-calculation", "Exit process automation"], stat: { n: "90%", l: "Onboarding time saved" } },
  { icon: <BarChartIcon />, t: "Sales & CRM", b: "Lead scoring, quote generation, contract approvals, and handoff to fulfilment — all automated with AI-enhanced prioritisation and routing.", ai: true, tasks: ["AI lead scoring", "Auto quote generation", "Contract approval flow", "Sales → fulfilment handoff"], stat: { n: "3×", l: "Faster lead response" } },
  { icon: <SettingsIcon />, t: "Operations & Manufacturing", b: "Production orders trigger from sales, quality checks gate shipments, and maintenance schedules run on predictive models — not calendars.", ai: false, tasks: ["Production order triggers", "Quality gate workflows", "Maintenance scheduling", "Shipment routing"], stat: { n: "45%", l: "Less downtime" } },
  { icon: <ShieldIcon />, t: "Compliance & Audit", b: "Every automated action logged with full audit trail. Approval hierarchies enforce segregation of duties. GDPR, SOC 2, and VAT compliance built in.", ai: true, tasks: ["Audit trail logging", "Segregation of duties", "GDPR data handling", "Regulatory reporting"], stat: { n: "100%", l: "Actions auditable" } },
] as const;

/* ── Metrics ── */
const METRICS = [
  { icon: <ClockIcon />, n: "60%", l: "Manual time saved", bar: 60 },
  { icon: <ShieldIcon />, n: "85%", l: "Errors eliminated", bar: 85 },
  { icon: <ZapIcon />, n: "<5s", l: "Avg processing time", bar: 95 },
  { icon: <TrendingUpIcon />, n: "3×", l: "Faster business cycles", bar: 75 },
] as const;

/* ── Integration logos ── */
const INTEGRATIONS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Slack", color: "#4A154B" },
  { name: "Google Workspace", color: "#4285F4" },
  { name: "Microsoft 365", color: "#0078D4" },
  { name: "Razorpay", color: "#3395FF" },
  { name: "Zapier", color: "#FF4F00" },
] as const;

/* ── Component ── */
export function WorkflowAutomationContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — split layout with animated workflow nodes ═══ */}
      <section className="wa-hero">
        <div className="wa-hero-glow wa-hero-glow-1" aria-hidden="true" />
        <div className="wa-hero-glow wa-hero-glow-2" aria-hidden="true" />
        <div className="wa-hero-inner">
          <div className="wa-hero-content">
            <div className="wa-hero-badge rev">
              <span className="wa-hero-badge-dot" />
              Intelligent workflow automation
            </div>
            <h1 className="wa-hero-h rev">
              Workflow<br />Automation.<br />
              <span className="acc">Manual work, eliminated.</span>
            </h1>
            <p className="wa-hero-sub rev">
              End-to-end workflow automation that connects your ERP, CRM, and business systems into a single intelligent operation. <strong>Save 60% of manual processing time</strong> while eliminating 85% of human errors.
            </p>
            <div className="wa-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your automation roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#pipeline">See the methodology</a>
            </div>
          </div>

          {/* Animated workflow node stack */}
          <div className="wa-hero-flow rev">
            {FLOW_NODES.map((node, i) => (
              <div key={node.t}>
                {i > 0 && <div className="wa-hero-connector" />}
                <div className={`wa-hero-node${"active" in node && node.active ? " active" : ""}${"red" in node && node.red ? " red" : ""}`}>
                  <div className="wa-hero-node-icon">{node.icon}</div>
                  <div className="wa-hero-node-body">
                    <div className="wa-hero-node-t">{node.t}</div>
                    <div className="wa-hero-node-s">{node.s}</div>
                  </div>
                  <span className={`wa-hero-node-status ${node.status}`}>
                    {node.status === "done" ? "Done" : node.status === "running" ? "Running" : "Queued"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER COMPARISON ═══ */}
      <section className="wa-compare">
        <div className="wa-compare-inner">
          <div className="wa-compare-hdr rev">
            <div className="eyebrow">The transformation</div>
            <h2>Before vs. after<br /><span>automation.</span></h2>
          </div>

          <div className="wa-compare-grid rev">
            {/* Before column */}
            <div className="wa-compare-col">
              <div className="wa-compare-col-head before">Without Automation</div>
              {BEFORE_ITEMS.map((item) => (
                <div key={item.t} className="wa-compare-item">
                  <div className="wa-compare-item-icon bad">{item.icon}</div>
                  <div>
                    <div className="wa-compare-item-t">{item.t}</div>
                    <div className="wa-compare-item-s">{item.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* VS divider */}
            <div className="wa-compare-vs">
              <div className="wa-compare-vs-line" />
              <div className="wa-compare-vs-badge">VS</div>
              <div className="wa-compare-vs-line" />
            </div>

            {/* After column */}
            <div className="wa-compare-col">
              <div className="wa-compare-col-head after">With Wan Buffer Automation</div>
              {AFTER_ITEMS.map((item) => (
                <div key={item.t} className="wa-compare-item">
                  <div className="wa-compare-item-icon good">{item.icon}</div>
                  <div>
                    <div className="wa-compare-item-t">{item.t}</div>
                    <div className="wa-compare-item-s">{item.s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FLOW PIPELINE — horizontal scroll steps ═══ */}
      <section className="wa-pipeline" id="pipeline">
        <div className="wa-pipeline-inner">
          <div className="wa-pipeline-hdr rev">
            <div>
              <div className="eyebrow lt">Methodology</div>
              <h2>Six stages to<br /><span>zero manual work.</span></h2>
            </div>
            <p>Every stage is sign-off gated. You approve milestones, review deliverables, and control the pace. Senior automation engineers lead each phase — no juniors, no outsourcing, no handoffs.</p>
          </div>

          <div className="wa-pipeline-track-wrap">
          <div className="wa-pipeline-track rev">
            {PIPELINE.map((step, i) => (
              <div key={step.num} style={{ display: "flex", alignItems: "stretch" }}>
                {i > 0 && (
                  <div className="wa-pipeline-arrow">
                    <ArrowRightIcon />
                  </div>
                )}
                <div className="wa-pipeline-step">
                  <div className="wa-pipeline-step-num">{step.num}</div>
                  <div className="wa-pipeline-step-icon">{step.icon}</div>
                  <div className="wa-pipeline-step-tag">{step.tag}</div>
                  <div className="wa-pipeline-step-t">{step.t}</div>
                  <p className="wa-pipeline-step-b">{step.b}</p>
                  <div className="wa-pipeline-step-delivs">
                    {step.deliverables.map((d) => (
                      <span key={d} className="wa-pipeline-step-deliv">
                        <FlagIcon />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>

          {/* CTA band */}
          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want this methodology applied to <span>your workflows?</span></h3>
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

      {/* ═══ DEPARTMENT MODULES ═══ */}
      <section className="wa-modules" id="modules">
        <div className="wa-modules-inner">
          <div className="wa-modules-hdr rev">
            <div>
              <div className="eyebrow">Automation by department</div>
              <h2>Every function.<br /><span>Fully automated.</span></h2>
            </div>
            <p>We don&apos;t automate tasks in isolation. We redesign entire departmental workflows — connecting systems, eliminating handoffs, and delivering measurable ROI for every function in your organisation.</p>
          </div>

          <div className="wa-modules-grid rev">
            {MODULES.map((mod) => (
              <div key={mod.t} className={`wa-mod${mod.ai ? " ai-accent" : ""}`}>
                <div className="wa-mod-head">
                  <div className="wa-mod-icon">{mod.icon}</div>
                  <div className="wa-mod-title">{mod.t}</div>
                </div>
                <p className="wa-mod-body">{mod.b}</p>
                <div className="wa-mod-tasks">
                  {mod.tasks.map((task) => (
                    <div key={task} className="wa-mod-task">
                      <span className="wa-mod-task-icon"><CheckIcon /></span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
                <div className="wa-mod-stat">
                  <div className="wa-mod-stat-n">{mod.stat.n}</div>
                  <div className="wa-mod-stat-l">{mod.stat.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METRICS DASHBOARD ═══ */}
      <section className="wa-metrics" id="results">
        <div className="wa-metrics-inner">
          <div className="wa-metrics-hdr rev">
            <div className="eyebrow lt">Proven results</div>
            <h2>Numbers that<br /><span>speak for themselves.</span></h2>
            <p>Every deployment includes pre-agreed KPIs. These are real averages across our automation engagements — tracked, measured, and verified.</p>
          </div>

          <div className="wa-metrics-grid rev">
            {METRICS.map((m) => (
              <div key={m.l} className="wa-metric">
                <div className="wa-metric-icon">{m.icon}</div>
                <div className="wa-metric-n">{m.n}</div>
                <div className="wa-metric-l">{m.l}</div>
                <div className="wa-metric-bar">
                  <div className="wa-metric-bar-fill" style={{ width: `${m.bar}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS STRIP ═══ */}
      <section className="wa-integrations">
        <div className="wa-integrations-inner rev">
          <div className="wa-integrations-label">Connects with the tools you already use</div>
          <div className="wa-integrations-logos">
            {INTEGRATIONS.map((int) => (
              <div key={int.name} className="wa-int-logo">
                <span className="wa-int-logo-dot" style={{ background: int.color }} />
                {int.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER — commitments + CTA ═══ */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your automation partner</div>
              <h3>Automation without strategy<br /><span>just creates faster chaos.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">70%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of automation initiatives stall after the pilot phase.</strong>
                  Source: McKinsey, 2024. The root cause is rarely the technology — it&apos;s scope without strategy. Teams automate individual tasks instead of rethinking entire workflows, then wonder why manual effort barely drops.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer automation engagement starts with process redesign, not tool selection. We commit to four guarantees — written into the contract, tracked weekly, never traded away.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Process-first approach</div>
                <p className="oi-closer-commit-b">We redesign the workflow before automating it. Automating a broken process just produces broken results faster. Every engagement starts with process mapping.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Time saved, errors eliminated, and processing speed are defined before development. If we don&apos;t hit the numbers, we keep working — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Compliance by design</div>
                <p className="oi-closer-commit-b">Audit trails, approval hierarchies, and data governance built into every workflow. SOC 2, GDPR, and industry-specific regulations covered from day one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your workflows are the ones who build, test, and support them — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free process audit</div>
              <h4>Get your automation roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your process audit</span>
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
            <div className="eyebrow lt">Automation support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior engineers. SLA in writing.</p>
          </div>

          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Online now
              </span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For workflow issues, configuration questions, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Workflow failures or production incidents. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                We&apos;re hiring
              </span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring automation engineers and integration specialists. Mention the role you are interested in.</p>
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
