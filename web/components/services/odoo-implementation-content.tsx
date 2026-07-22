/* ────────────────────────────────────────────────────────────────────────
   ODOO IMPLEMENTATION — full redesign
   Hero luxe · Stats band · Methodology cards · Chaptered roadmap ·
   Bento · Closer · Clean support
──────────────────────────────────────────────────────────────────────── */

import {
  ArrowsIcon,
  ArrowRightIcon,
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
  GraduationIcon,
  GridIcon,
  HeartIcon,
  MailIcon,
  MilestoneIcon,
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

/* ── Data ── */
const PHASES = [
  { icon: <SearchIcon/>, title: "Requirements Analysis", body: "We analyze your business needs, evaluate current processes, and define the optimal Odoo solution to support your operational and strategic objectives.", tag: "Discovery", ai: false, outcome: "Requirements approval", duration: "1–2 weeks", deliverables: ["Business assessment", "Process review", "Fit-gap analysis", "Solution design"] },
  { icon: <CodeIcon/>, title: "Development & Personalisation", body: "Based on the approved requirements and fit-gap analysis, we customize Odoo to align with your business processes. We develop custom features, integrate third-party applications through APIs, and conduct regular demo sessions to ensure the solution meets business expectations throughout the development lifecycle.", tag: "Build", ai: true, outcome: "Solution developed & validated", duration: "4–6 weeks", deliverables: ["Custom module development", "API & third-party integrations", "Periodic demo sessions", "User acceptance testing"] },
  { icon: <SettingsIcon/>, title: "Odoo Installation & Configuration", body: "We deploy and configure Odoo based on the approved solution blueprint, ensuring the platform is aligned with your business processes, governance framework, and operational objectives. Our consultants establish a scalable foundation that supports efficiency, compliance, and future growth.", tag: "Configure", ai: false, outcome: "Production-ready Odoo environment", duration: "2–3 weeks", deliverables: ["Master data architecture", "Workflow & approval configuration", "Role-based security framework", "Executive dashboards & KPI reporting"] },
  { icon: <DatabaseIcon/>, title: "Data transfer", body: "Data transfer is vital. We move data from legacy software, spreadsheets, and older Odoo versions into your new Odoo ERP with care.", tag: "Migrate", ai: true, outcome: "Data reconciled", duration: "1–2 weeks", deliverables: ["Data cleansing", "Mapping rules", "Mock cutovers", "Reconciliation"] },
  { icon: <GraduationIcon/>, title: "Training & Knowledge Transfer", body: "Comprehensive training and knowledge transfer sessions designed to equip end users, key users, and system administrators with the skills required to confidently operate and manage Odoo. Training is tailored to business processes, ensuring successful user adoption and long-term system effectiveness.", tag: "Enable", ai: false, outcome: "Users fully prepared", duration: "1–2 weeks", deliverables: ["Role-based user training", "Administrator knowledge transfer", "Process documentation & SOPs", "User guides and training materials", "Best practices for daily operations"] },
  { icon: <RocketIcon/>, title: "Go-Live & Deployment", body: "A structured transition from implementation to production, ensuring Odoo is deployed smoothly with minimal business disruption. Final system validation, production readiness checks, and deployment activities are executed to ensure a successful launch.", tag: "Launch", ai: true, outcome: "Live in production", duration: "1 week + 90 days hypercare", deliverables: ["Production environment deployment", "Final data validation", "Go-live readiness checklist", "Cutover execution plan", "System monitoring and stabilization support"] },
] as const;

const ROADMAP_CHAPTERS = [
  { chapter: "01", tag: "Foundation", title: "Plan & Decide", desc: "Lay the foundation. Define outcomes, budget, ERP fit, and the right partner — before a single module is touched.", accent: "ai" as const,
    steps: [
      { n: "01", icon: <TargetIcon/>, title: "Defining business objectives", body: "We align on the outcomes you need so recommendations map to measurable goals.", deliverable: "Outcome map" },
      { n: "02", icon: <WalletIcon/>, title: "Allocation of finances", body: "Budget clarity early so scope, phases, and hosting choices stay realistic.", deliverable: "Phased budget" },
      { n: "03", icon: <BarChartIcon/>, title: "Choosing the most appropriate ERP", body: "If Odoo is the fit, we document why and how each app supports your processes.", deliverable: "Fit assessment" },
      { n: "04", icon: <UsersIcon/>, title: "Picking the right implementation partner", body: "Experience, methodology, and post-go-live support matter as much as technical skill.", deliverable: "Partner decision" },
    ]},
  { chapter: "02", tag: "Construction", title: "Build & Validate", desc: "Construct, configure, migrate, and test — every step gated, so nothing reaches users until it's ready.", accent: "r" as const,
    steps: [
      { n: "05", icon: <MilestoneIcon/>, title: "Specifying implementation stages", body: "Phased delivery with clear milestones reduces risk and keeps teams productive.", deliverable: "Delivery plan" },
      { n: "06", icon: <CloudIcon/>, title: "Selecting the most suitable plan", body: "Hosting, integrations, and SLAs are chosen to match performance and compliance needs.", deliverable: "Hosting & SLAs" },
      { n: "07", icon: <ArrowsIcon/>, title: "Transfer of data", body: "Legacy data is cleaned, mapped, and reconciled before cutover.", deliverable: "Clean dataset" },
      { n: "08", icon: <CheckCircleIcon/>, title: "Testing", body: "Finance, inventory, and sales flows are thoroughly tested before go-live.", deliverable: "UAT sign-off" },
    ]},
  { chapter: "03", tag: "Operations", title: "Launch & Operate", desc: "Train, cut over, and stay. The rollout doesn't end at go-live — hypercare and upkeep keep Odoo aligned to the business.", accent: "r" as const,
    steps: [
      { n: "09", icon: <BookOpenIcon/>, title: "Teaching", body: "Users learn the system in the context of their real jobs—not generic demos.", deliverable: "Trained users" },
      { n: "10", icon: <ZapIcon/>, title: "Going live", body: "Controlled cutover with rollback thinking and hypercare when you need it.", deliverable: "Cutover complete" },
      { n: "11", icon: <ShieldIcon/>, title: "Assistance & upkeep", body: "Ongoing support keeps Odoo aligned as your business and regulations evolve.", deliverable: "Ongoing partnership" },
    ]},
] as const;

const BENTO_DATA = [
  { icon: <CpuIcon/>, t: "Exceptional engineering discipline", b: "Clean, maintainable Odoo code that survives upgrades, audits, and growth.", tag: "Engineering", size: "feature", ai: true, variant: "", stat: { n: "100%", l: "Peer reviewed" } },
  { icon: <PackageIcon/>, t: "Strong Odoo Apps footprint", b: "Deep experience shipping modules the community and enterprises actually use.", tag: "Apps", size: "", ai: false, variant: "glow-red", mini: { n: "40+", l: "Modules" } },
  { icon: <RefreshIcon/>, t: "Skilled across Odoo versions", b: "From older instances to Odoo 17/18—we plan migrations with zero surprises.", tag: "Versions", size: "", ai: true, variant: "glow-ai", mini: { n: "v10–v18", l: "Coverage" } },
  { icon: <SparklesIcon/>, t: "Uncompromised quality", b: "Reviews, automated checks, and partner-grade standards on every delivery.", tag: "Quality", size: "wide", ai: false, variant: "pattern", mini: { n: "0", l: "Critical regressions" } },
  { icon: <ClockIcon/>, t: "Years of execution", b: "Long-running programmes across manufacturing, services, and distribution.", tag: "Execution", size: "", ai: true, variant: "glow-ai", mini: { n: "7+", l: "Years" } },
  { icon: <TrophyIcon/>, t: "Thousands of success stories", b: "A track record you can verify through references and shipped projects.", tag: "Track record", size: "", ai: false, variant: "glow-red", mini: { n: "254+", l: "Live" } },
  { icon: <GridIcon/>, t: "All major Odoo domains", b: "Accounting, inventory, MRP, CRM, HR, eCommerce, and custom verticals.", tag: "Domains", size: "wide", ai: false, variant: "pattern", mini: { n: "9", l: "Domains" } },
  { icon: <MonitorIcon/>, t: "UI & UX depth", b: "Interfaces your teams enjoy using—not cluttered forms bolted together.", tag: "UI/UX", size: "", ai: true, variant: "glow-ai", mini: { n: "WCAG AA", l: "Standard" } },
] as const;

const STATS = [
  { n: "7+", l: "Years in the business", g: false },
  { n: "254+", l: "Projects completed", g: false },
  { n: "84%", l: "Repeated clients", g: true },
  { n: "50+", l: "Proficient engineers", g: false },
] as const;

/* ── Component ── */
export function OdooImplementationContent() {
  return (
    <main className="svc-page">

      {/* HERO LUXE */}
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">odoo</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo ERP services</div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln"><span className="ai">Implementation</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Most ERP projects don’t fail because of the software — they fail in the rollout. We run the whole
            implementation for you: analysing how you work, configuring Odoo to match, migrating your data, training
            your team, and going live in phases — so Odoo actually gets <strong>adopted</strong>, not just installed.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Plan Your Implementation</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#phases">See how we roll out</a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">Built for</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Manufacturing</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Retail &amp; Distribution</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Pharma</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Logistics</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="oi-stats-band">
        <div className="oi-stats-band-inner">
          {STATS.map((s) => (
            <div key={s.l} className="oi-stats-band-item">
              <div className={`oi-stats-band-n${s.g ? " gold" : ""}`}>{s.n}</div>
              <div className="oi-stats-band-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="oi-meth" id="phases">
        <div className="oi-meth-inner">
          <div className="oi-meth-intro rev">
            <div className="oi-meth-intro-l">
              <div className="eyebrow">Our methodology</div>
              <h2>Agile delivery, <span>phased rollout</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Last refined</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  After the 250th go-live · Q4 2025
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>The steps below are what we do. This is <em>how</em> we do them — the principles that govern every decision on your project.</p>
              <div className="oi-meth-intro-mini">
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">6</span><span className="oi-meth-mini-u">phases</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Sign-off gated</div>
                  <div className="oi-meth-mini-s">Each one ends in your acceptance.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">12–16</span><span className="oi-meth-mini-u">weeks</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Typical timeline</div>
                  <div className="oi-meth-mini-s">End-to-end, discovery → go-live.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">100</span><span className="oi-meth-mini-u">%</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Senior-led</div>
                  <div className="oi-meth-mini-s">Never juniors or shadow staffing.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="oi-meth-strip rev">
            {PHASES.map((phase, i) => (
              <div key={phase.tag} className={`oi-meth-strip-step${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-strip-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="oi-meth-strip-label">{phase.tag}</div>
              </div>
            ))}
          </div>

          <div className="oi-meth-grid rev">
            {PHASES.map((phase, i) => (
              <div key={phase.title} className={`oi-meth-card${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-card-head">
                  <div className="oi-meth-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="oi-meth-card-icon">{phase.icon}</div>
                </div>
                <div className="oi-meth-card-tag">{phase.tag}</div>
                <div className="oi-meth-card-title">{phase.title}</div>
                <p className="oi-meth-card-body">{phase.body}</p>
                <div className="oi-meth-card-deliv-l">What you walk away with</div>
                <div className="oi-meth-card-deliv">
                  {phase.deliverables.map((d) => (
                    <div key={d} className="oi-meth-card-deliv-item">
                      <span className="oi-meth-card-deliv-icon"><CheckIcon /></span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="oi-meth-card-foot">
                  <div className="oi-meth-card-foot-l">
                    <span className="oi-meth-card-foot-k">{phase.duration}</span>
                    <span className="oi-meth-card-foot-v">{phase.outcome}</span>
                  </div>
                  <span className="oi-meth-card-foot-arrow"><ArrowRightIcon /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready when you are</div>
              <h3>Want this methodology applied to <span>your operation?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP — editorial light */}
      <section className="oi-rmap" id="roadmap">
        <div className="oi-rmap-inner">

          {/* Section header */}
          <div className="oi-rmap-hdr rev">
            <div>
              <div className="eyebrow">Implementation roadmap</div>
              <h2>Eleven gates.<br /><span>Zero surprises.</span></h2>
            </div>
            <div className="oi-rmap-hdr-r">
              <p>Every stage in your rollout is <strong>sign-off gated</strong> — a phase only begins once you&apos;ve accepted the one before it. No scope drift, no silent overruns, no go-live shock. Refined across <strong>254+ go-lives</strong> in 20+ countries.</p>
              <div className="oi-rmap-overview-row">
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot" />
                  <div>
                    <div className="oi-rmap-overview-t">Sign-off gated</div>
                    <div className="oi-rmap-overview-s">You decide what&apos;s done.</div>
                  </div>
                </div>
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot r" />
                  <div>
                    <div className="oi-rmap-overview-t">Battle-tested</div>
                    <div className="oi-rmap-overview-s">254+ go-lives shipped.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All-stages at-a-glance strip */}
          <div className="oi-rmap-strip rev">
            {ROADMAP_CHAPTERS.flatMap((c) =>
              c.steps.map((step) => (
                <span key={step.n} className="oi-rmap-strip-chip" data-accent={c.accent}>
                  <span className="oi-rmap-strip-n">{step.n}</span>
                  <span>{step.title.split(" ").slice(0, 2).join(" ")}</span>
                </span>
              ))
            )}
          </div>

          {/* Chapter rows */}
          {ROADMAP_CHAPTERS.map((c) => (
            <div key={c.chapter} className={`oi-rmap-chapter ${c.accent}`} data-cols={c.steps.length === 3 ? "3" : "2"}>
              {/* Info card */}
              <div className="oi-rmap-info rev">
                <div className="oi-rmap-info-top">
                  <div className="oi-rmap-info-num">{c.chapter}</div>
                  <span className="oi-rmap-info-tag">Chapter · {c.tag}</span>
                  <h3 className="oi-rmap-info-title">{c.title}</h3>
                  <p className="oi-rmap-info-desc">{c.desc}</p>
                </div>
                <div className="oi-rmap-info-foot">
                  <span className="oi-rmap-info-foot-l">Stages {c.steps[0].n}–{c.steps[c.steps.length - 1].n}</span>
                  <span className="oi-rmap-info-foot-pill">{c.steps.length} stages</span>
                </div>
              </div>

              {/* Steps grid */}
              <div className="oi-rmap-steps rev">
                {c.steps.map((step) => (
                  <div key={step.n} className="oi-rmap-step">
                    <div className="oi-rmap-step-head">
                      <div className="oi-rmap-step-icon">{step.icon}</div>
                    </div>
                    <div className="oi-rmap-step-title">{step.title}</div>
                    <p className="oi-rmap-step-body">{step.body}</p>
                    <span className="oi-rmap-step-deliv">
                      <FlagIcon />
                      {step.deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO — magazine spread */}
      <section className="oi-bento-sec" id="why-us">
        <div className="oi-bento-inner">

          {/* Header: intro + credentials card */}
          <div className="oi-bento-hdr rev">
            <div className="oi-bento-hdr-l">
              <div className="eyebrow">Why Wan Buffer</div>
              <h2>What you get<br /><span>on the ground.</span></h2>
            </div>
            <div className="oi-bento-hdr-r">
              <p>We help you trace technical issues to root cause, ship maintainable code, and keep UX in mind so adoption actually happens after go-live.</p>
              <div className="oi-bento-credit">
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n r">254<span style={{ fontSize: ".7em" }}>+</span></div>
                  <div className="oi-bento-credit-l">Projects shipped</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n">7<span style={{ fontSize: ".7em" }}>+ yrs</span></div>
                  <div className="oi-bento-credit-l">Senior avg</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n ai">100<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Peer reviewed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero feature banner */}
          <div className="oi-bento-hero rev">
            <div className="oi-bento-hero-icon"><CpuIcon /></div>
            <div className="oi-bento-hero-body">
              <div className="oi-bento-hero-tag">Engineering discipline</div>
              <div className="oi-bento-hero-t">Clean, maintainable Odoo code — built to survive upgrades, audits, and growth.</div>
              <p className="oi-bento-hero-b">Every line shipped is peer-reviewed against partner-grade standards. We treat your stack as a long-term asset, not a one-time delivery.</p>
            </div>
            <div className="oi-bento-hero-stat">
              <div className="oi-bento-hero-stat-n">0</div>
              <div className="oi-bento-hero-stat-l">Critical regressions<br />in last 24 months</div>
            </div>
          </div>

          {/* 3-col card grid (7 supporting features) */}
          <div className="oi-bento rev">
            {BENTO_DATA.filter((b) => b.size !== "feature").map((b, i) => (
              <div key={b.t} className={`oi-bento-card${b.ai ? " ai" : ""}`}>
                <div className="oi-bento-card-head">
                  <div className="oi-bento-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="oi-bento-icon">{b.icon}</div>
                </div>
                <div className="oi-bento-card-tag">{b.tag}</div>
                <div className="oi-bento-card-t">{b.t}</div>
                <p className="oi-bento-card-b">{b.b}</p>
                {"mini" in b && b.mini && (
                  <div className="oi-bento-card-foot">
                    <div className="oi-bento-card-stat">
                      <span className={`oi-bento-card-stat-n${b.ai ? " ai" : " r"}`}>{b.mini.n}</span>
                      <span className="oi-bento-card-stat-l">{b.mini.l}</span>
                    </div>
                    <span className="oi-bento-card-arrow"><ArrowRightIcon /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER — manifesto + commitments + CTA */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          {/* Top: sharp insight + manifesto */}
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your partner</div>
              <h3>The software rarely fails.<br /><span>The team behind it does.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">1 in 3<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>ERP rollouts miss their go-live.</strong>
                  Source: Panorama Consulting, 2023. The decisive factor isn&apos;t the software — it&apos;s the team that runs it. Methodology, seniority, and accountability matter more than license cost.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer engagement is built around four written commitments. None are optional, none get traded away under deadline pressure.</p>
            </div>
          </div>

          {/* Commitments grid */}
          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior consultants only</div>
                <p className="oi-closer-commit-b">Average 7+ years on Odoo. No juniors and no shadow staffing — the name on the SoW is the person doing the work.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Fixed-price phases</div>
                <p className="oi-closer-commit-b">Scope, deliverables, and price agreed in writing before each phase begins. No scope drift, no surprise invoices.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">90-day hypercare</div>
                <p className="oi-closer-commit-b">Senior support included for 90 days post go-live. We stay until your team is genuinely independent — not billed extra.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Methodology, not theory</div>
                <p className="oi-closer-commit-b">11-stage roadmap refined across 254+ go-lives. Each stage has its own acceptance criteria — and you sign off.</p>
              </div>
            </div>
          </div>

          {/* Bottom: closing CTA */}
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Last decision before the work begins</div>
              <h4>Get a written proposal in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Plan your rollout</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to support first</a>
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT (clean) */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Odoo support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior-led. SLA in writing.</p>
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
              <p className="oi-supp-body-v2">For detailed questions, screenshots, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 × 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production-down incidents and time-sensitive decisions. Answered by a senior consultant.</p>
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
              <p className="oi-supp-body-v2">Hiring and career enquiries. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior-led only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> NDA-protected</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
