/* ────────────────────────────────────────────────────────────────────────
   ODOO MIGRATION — matches implementation page UI/UX
   Hero luxe · Stats band · Methodology cards · Chaptered roadmap ·
   Closer · Clean support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowsIcon,
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  EyeIcon,
  FlagIcon,
  HeartIcon,
  MailIcon,
  PackageIcon,
  PhoneCallIcon,
  RefreshIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Data ── */
const PHASES = [
  { icon: <SearchIcon/>, title: "Version & stack audit", body: "We inventory your Odoo version, custom apps, integrations, and data volumes—so the upgrade path is clear before any code changes.", tag: "Audit", ai: false, outcome: "Migration blueprint", duration: "1 week", deliverables: ["Version inventory", "Addon compatibility list", "Risk register", "Rollback strategy"] },
  { icon: <PackageIcon/>, title: "Migration of Odoo apps", body: "Required applications and add-ons need Python and front-end updates for the new Odoo version—built to modern standards while preserving behaviour your teams rely on.", tag: "Apps", ai: true, outcome: "Apps upgraded", duration: "2–5 weeks", deliverables: ["Code refactoring", "UI parity checks", "Dependency updates", "Module test packs"] },
  { icon: <DatabaseIcon/>, title: "Data transfer", body: "Existing data must map cleanly to new tables and fields. We cleanse, transform, and reconcile so reports, finance, and customer records stay trustworthy.", tag: "Data", ai: true, outcome: "Data reconciled", duration: "1–3 weeks", deliverables: ["Field mapping", "Cleansing rules", "Mock imports", "Reconciliation sign-off"] },
  { icon: <CheckCircleIcon/>, title: "Evaluating migration", body: "Sophisticated testing under realistic load proves durability—performance, usability, and critical flows are validated before you cut over.", tag: "QA", ai: false, outcome: "UAT passed", duration: "1–2 weeks", deliverables: ["Test scripts", "Load scenarios", "Defect triage", "Go / no-go review"] },
  { icon: <SettingsIcon/>, title: "Cutover planning", body: "Freeze windows, communication plans, and rollback paths are agreed in writing—so production downtime stays predictable and recoverable.", tag: "Plan", ai: false, outcome: "Cutover ready", duration: "3–5 days", deliverables: ["Cutover runbook", "Stakeholder comms", "Freeze checklist", "War-room schedule"] },
  { icon: <RocketIcon/>, title: "Go-live on new Odoo", body: "You land on a faster, more reliable Odoo with new features integrated into daily operations—plus hypercare while teams stabilise.", tag: "Launch", ai: true, outcome: "Live on new version", duration: "1 week + hypercare", deliverables: ["Production cutover", "Hypercare desk", "Issue tracking", "Stabilisation review"] },
] as const;

const ROADMAP_CHAPTERS = [
  { chapter: "01", tag: "Priorities", title: "Protect What Matters", desc: "Two things must hold through every upgrade: your data stays usable, and your apps keep working—with room for new Odoo capabilities.", accent: "ai" as const,
    steps: [
      { n: "01", icon: <BarChartIcon/>, title: "Reports & financial data", body: "Users need existing reports, customer and vendor records, payments, and finance—available and accurate on day one.", deliverable: "Data continuity plan" },
      { n: "02", icon: <PackageIcon/>, title: "Apps & add-ons parity", body: "Custom modules and integrations must behave as before, with new-version features where they add value.", deliverable: "App parity matrix" },
      { n: "03", icon: <ShieldIcon/>, title: "Handled with caution", body: "Given how critical these are, migration is partner-led—not ad-hoc scripts or untested shortcuts.", deliverable: "Risk controls" },
      { n: "04", icon: <UsersIcon/>, title: "Odoo partner guidance", body: "Certified partners bring training, tooling, and escalation paths generalists cannot match.", deliverable: "Partner engagement" },
    ]},
  { chapter: "02", tag: "Execution", title: "Migrate & Prove", desc: "Refactor apps, move data, and stress-test—each gate signed off before production is touched.", accent: "r" as const,
    steps: [
      { n: "05", icon: <CodeIcon/>, title: "App code modernisation", body: "Python and front-end updates align custom work with the target Odoo release.", deliverable: "Upgraded modules" },
      { n: "06", icon: <ArrowsIcon/>, title: "Table mapping & import", body: "Legacy tables are mapped, transformed, and imported for compatibility with the new platform.", deliverable: "Mapped dataset" },
      { n: "07", icon: <EyeIcon/>, title: "Performance & usability QA", body: "Durability and reliability are proven under realistic load—not just happy-path clicks.", deliverable: "QA sign-off" },
      { n: "08", icon: <CloudIcon/>, title: "Staging cutover rehearsal", body: "Mock cutovers surface gaps while rollback is still easy.", deliverable: "Rehearsal complete" },
    ]},
  { chapter: "03", tag: "Value", title: "Upgrade & Grow", desc: "Land on a faster Odoo with simplified operations, new features, and a partner who stays after go-live.", accent: "gold" as const,
    steps: [
      { n: "09", icon: <TrendingUpIcon/>, title: "Productivity gains", body: "Fewer manual steps and clearer terminology help teams work faster on the new version.", deliverable: "Efficiency uplift" },
      { n: "10", icon: <ZapIcon/>, title: "Production cutover", body: "Controlled go-live with hypercare for edge cases your team has not seen yet.", deliverable: "Live on new Odoo" },
      { n: "11", icon: <RefreshIcon/>, title: "Future upgrade path", body: "Clean code and documented mappings make the next version upgrade far less painful.", deliverable: "Sustainable stack" },
    ]},
] as const;

const STATS = [
  { n: "7+", l: "Years in the business", g: false },
  { n: "180+", l: "Upgrades delivered", g: false },
  { n: "84%", l: "Repeated clients", g: true },
  { n: "50+", l: "Proficient engineers", g: false },
] as const;

/* ── Component ── */
export function OdooMigrationContent() {
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
            <span className="ln">Migration,</span>
            <span className="ln"><span className="ai">without the breakage.</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Partner-led Odoo upgrades when versions move fast. <strong>Data continuity, app parity, and rigorous QA</strong> — so reports, finance, and custom add-ons stay usable on the new release.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Plan your upgrade</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <Link className="oi-hero-lux-secondary" href="/odoo/implementation">See implementation</Link>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We migrate</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Legacy Odoo</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Custom add-ons</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Multi-company</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">v10 → v18</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">On-prem &amp; cloud</span>
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
              <div className="eyebrow">Methodology</div>
              <h2>From legacy stack<br /><span>to confident upgrade.</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Last refined</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  After 180+ version upgrades · Q4 2025
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>Six gated phases covering apps, data, QA, and cutover. Odoo releases new versions frequently—we help you land on a faster, more reliable platform without losing the reports and add-ons your business depends on.</p>
              <div className="oi-meth-intro-mini">
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">6</span><span className="oi-meth-mini-u">phases</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Sign-off gated</div>
                  <div className="oi-meth-mini-s">Each one ends in your acceptance.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">4–10</span><span className="oi-meth-mini-u">weeks</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Typical timeline</div>
                  <div className="oi-meth-mini-s">Audit → staging → production.</div>
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
              <h3>Want a safe upgrade path for <span>your Odoo stack?</span></h3>
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
              <div className="eyebrow">Migration roadmap</div>
              <h2>Eleven gates.<br /><span>Data &amp; apps protected.</span></h2>
            </div>
            <div className="oi-rmap-hdr-r">
              <p>Every stage in your upgrade is <strong>sign-off gated</strong> — nothing reaches production until you accept the prior step. Your data, reports, and custom apps stay usable. Refined across <strong>180+ Odoo version upgrades</strong> in 20+ countries.</p>
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
                    <div className="oi-rmap-overview-s">180+ upgrades shipped.</div>
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

      {/* CLOSER — CTA */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          {/* Bottom: closing CTA */}
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Last decision before the work begins</div>
              <h4>Get a migration assessment in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Plan your upgrade</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <Link className="oi-closer-cta-link" href="/odoo/implementation">Or explore implementation</Link>
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
