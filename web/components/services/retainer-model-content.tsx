/* ────────────────────────────────────────────────────────────────────────
   RETAINER MODEL — dedicated page
   Hero split + SLA dashboard mock · What's included · What's covered ·
   Process flow · Plans · FAQ · Closer · Support
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

/* ── SLA dashboard mockup ── */
const SLA_METRICS = [
  { metric: "Critical Bugs", sla: "< 4 hours", actual: "2.1h avg", status: "met" as const },
  { metric: "High Priority", sla: "< 24 hours", actual: "8.4h avg", status: "met" as const },
  { metric: "Feature Requests", sla: "Next sprint", actual: "Sprint +1", status: "met" as const },
  { metric: "System Uptime", sla: "99.5%", actual: "99.8%", status: "met" as const },
  { metric: "Health Audits", sla: "Quarterly", actual: "Q1 complete", status: "met" as const },
  { metric: "Odoo Upgrade", sla: "Planned", actual: "v18 roadmap", status: "scheduled" as const },
] as const;

/* ── What's included ── */
const INCLUDED = [
  { icon: <ZapIcon />, t: "Priority SLA", s: "Critical bug fixes within 4 hours, high-priority issues within 24 hours, and feature requests prioritised into the next sprint. Written SLA with escalation paths — not just a promise, a contractual commitment.", color: "ai" as const },
  { icon: <RefreshIcon />, t: "Monthly Sprint Development", s: "A dedicated pool of hours each month for enhancements, new features, and workflow improvements. Work is planned in sprint cycles with your input on priorities — your ERP evolves continuously, not just when something breaks.", color: "green" as const },
  { icon: <EyeIcon />, t: "Quarterly Health Audits", s: "Every quarter, our engineers audit your ERP — performance, security, data integrity, unused modules, and optimisation opportunities. You receive a written report with actionable recommendations and a prioritised improvement backlog.", color: "purple" as const },
  { icon: <TrendingUpIcon />, t: "Proactive Upgrade Planning", s: "Odoo version upgrades, security patches, and module updates planned and roadmapped months in advance. No surprise migrations, no emergency patches — a structured upgrade path that keeps your system current and supported.", color: "red" as const },
] as const;

/* ── What's covered ── */
const COVERED = [
  { num: "01", icon: <ShieldIcon />, t: "Bug Fixes & Issue Resolution", s: "Functional bugs, configuration issues, workflow failures, and data inconsistencies — investigated, root-caused, and resolved within SLA. Every fix is tested, documented, and deployed with zero downtime where possible." },
  { num: "02", icon: <SettingsIcon />, t: "Configuration & Workflow Changes", s: "Business rule updates, new approval workflows, report modifications, user role changes, and access control adjustments. The kind of day-to-day ERP evolution that keeps your system aligned with how your business actually operates." },
  { num: "03", icon: <CodeIcon />, t: "Feature Enhancements", s: "New fields, custom reports, automation rules, integration endpoints, and module extensions — developed in monthly sprints from your prioritised backlog. Small enhancements that compound into significant operational improvements." },
  { num: "04", icon: <DatabaseIcon />, t: "Data Management & Cleanup", s: "Duplicate merging, master data standardisation, archival policies, and data migration for new modules. Ongoing data quality monitoring to prevent the gradual decay that plagues every ERP after go-live." },
  { num: "05", icon: <CloudIcon />, t: "Infrastructure & Performance", s: "Server monitoring, performance tuning, database optimisation, backup verification, and security patch application. Your ERP infrastructure stays fast, secure, and reliable without you thinking about it." },
  { num: "06", icon: <SparklesIcon />, t: "AI Optimisation & Automation", s: "Continuous improvement of AI models, automation rules, and intelligent workflows. New automation opportunities identified during quarterly audits and implemented in sprint cycles — your ERP gets smarter every quarter." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Audit", s: "Assess your current ERP state & needs" },
  { icon: <SettingsIcon />, t: "Plan", s: "Define SLA, hours pool & priorities" },
  { icon: <RocketIcon />, t: "Start", s: "Dedicated engineer assigned in 1 week" },
  { icon: <RefreshIcon />, t: "Evolve", s: "Monthly sprints + quarterly health audits" },
] as const;

/* ── Retainer tiers ── */
const TIERS = [
  { t: "Essential (20h/mo)", sub: "Bug fixes, config changes & priority SLA", ideal: "Post-go-live stability", active: true },
  { t: "Growth (40h/mo)", sub: "Enhancements, integrations & quarterly audits", ideal: "Continuous improvement", active: true },
  { t: "Enterprise (80h/mo)", sub: "Full managed services with AI optimisation", ideal: "Strategic partnership", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Magento / Shopify", color: "#F46F25" },
  { name: "AWS / Odoo.sh", color: "#FF9900" },
  { name: "Python / AI", color: "#3776AB" },
  { name: "Custom Integrations", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "What does the priority SLA actually guarantee?", a: "Critical bugs (system down, data corruption, payment failures) are responded to within 4 hours and resolved within 8 hours. High-priority issues (workflow failures, reporting errors) are responded to within 8 hours and resolved within 24 hours. Normal requests (config changes, minor enhancements) are queued into the next sprint. All SLA timelines are contractual — with escalation paths if breached." },
  { q: "How does the monthly hours pool work?", a: "You purchase a fixed pool of hours per month (20, 40, or 80 hours). Hours are used for bug fixes, config changes, enhancements, and new features — prioritised by you. Unused hours roll over for one month (up to 25% of your pool). Usage is tracked transparently with detailed time logs shared weekly." },
  { q: "What happens during a quarterly health audit?", a: "Our senior engineer reviews your ERP across six dimensions: performance (slow queries, page load times), security (access control, API exposure), data integrity (orphaned records, duplicates), module utilisation (unused features), automation opportunities, and upgrade readiness. You receive a written report with findings, risk ratings, and a prioritised improvement plan." },
  { q: "Can I use retainer hours for new feature development?", a: "Yes. Retainer hours can be used for any ERP work — bug fixes, config changes, new features, integrations, reports, and AI automation. You prioritise the backlog; we execute in monthly sprints. The only limitation is that large projects (40+ hours) are better scoped as a separate project-based engagement for proper milestone tracking." },
  { q: "How does proactive Odoo upgrade planning work?", a: "We maintain a rolling upgrade roadmap for your ERP — assessing compatibility of custom modules, third-party integrations, and data structures against upcoming Odoo versions. Upgrades are planned 3–6 months in advance with test environments, regression testing, and phased rollout. No emergency weekend migrations — ever." },
  { q: "Can I change my retainer tier?", a: "Yes. Tier changes take effect at the next billing cycle with 2 weeks' notice. You can scale up from Essential to Growth or Enterprise, or scale down if your needs reduce. There are no penalties for tier changes — the model is designed to flex with your business." },
] as const;

/* ── Component ── */
export function RetainerModelContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + SLA dashboard right ═══ */}
      <section className="rt-hero">
        <div className="rt-hero-glow rt-hero-glow-1" aria-hidden="true" />
        <div className="rt-hero-glow rt-hero-glow-2" aria-hidden="true" />
        <div className="rt-hero-dots" aria-hidden="true" />
        <div className="rt-hero-inner">
          <div className="rt-hero-content">
            <div className="rt-hero-badge rev">
              <span className="rt-hero-badge-dot" />
              Engagement Model 04
            </div>
            <h1 className="rt-hero-h rev">
              Retainer<br />Model.<br />
              <span className="acc">Always on.<br />Always improving.<br />Always covered.</span>
            </h1>
            <p className="rt-hero-sub rev">
              Priority SLA, monthly sprint development, quarterly health audits, and proactive upgrade planning — <strong>your ERP, managed and evolving.</strong>
            </p>
            <div className="rt-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get a retainer</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#covered">See what&apos;s covered</a>
            </div>
            {/* stat pills */}
            <div className="rt-hero-stats rev">
              <div className="rt-hero-stat">
                <span className="rt-hero-stat-n">&lt;4h</span>
                <span className="rt-hero-stat-l">Critical bug SLA</span>
              </div>
              <span className="rt-hero-stat-div" />
              <div className="rt-hero-stat">
                <span className="rt-hero-stat-n">Quarterly</span>
                <span className="rt-hero-stat-l">Health audits</span>
              </div>
              <span className="rt-hero-stat-div" />
              <div className="rt-hero-stat">
                <span className="rt-hero-stat-n">99.8%</span>
                <span className="rt-hero-stat-l">Uptime delivered</span>
              </div>
            </div>
          </div>

          {/* SLA dashboard mockup */}
          <div className="rt-sla rev">
            <div className="rt-sla-hdr">
              <div className="rt-sla-live">
                <span className="rt-sla-live-dot" />
                Live
              </div>
              <div className="rt-sla-title">SLA Dashboard</div>
            </div>
            <div className="rt-sla-list">
              {SLA_METRICS.map((s) => (
                <div key={s.metric} className={`rt-sla-row rt-sla-row-${s.status}`}>
                  <div className="rt-sla-row-top">
                    <span className="rt-sla-row-metric">{s.metric}</span>
                    <span className={`rt-sla-row-status rt-sla-row-status-${s.status}`}>
                      {s.status === "met" ? "SLA Met" : "Scheduled"}
                    </span>
                  </div>
                  <div className="rt-sla-row-mid">
                    <span className="rt-sla-row-target">Target: {s.sla}</span>
                    <span className="rt-sla-row-actual">{s.actual}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED — 4 cards ═══ */}
      <section className="rt-ops">
        <div className="rt-ops-inner">
          <div className="rt-ops-hdr rev">
            <div className="eyebrow">What&apos;s included</div>
            <h2>Fix. Improve. Audit.<br /><span>Evolve.</span></h2>
          </div>
          <div className="rt-ops-grid rev">
            {INCLUDED.map((item) => (
              <div key={item.t} className={`rt-op rt-op-${item.color}`}>
                <div className="rt-op-icon">{item.icon}</div>
                <div className="rt-op-t">{item.t}</div>
                <p className="rt-op-s">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S COVERED — alternating rows ═══ */}
      <section className="rt-feat" id="covered">
        <div className="rt-feat-inner">
          <div className="rt-feat-hdr rev">
            <div className="eyebrow lt">What&apos;s covered</div>
            <h2>Six categories.<br /><span>Complete ERP coverage.</span></h2>
          </div>
          <div className="rt-feat-list">
            {COVERED.map((f, i) => (
              <div key={f.num} className={`rt-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="rt-feat-row-num">{f.num}</div>
                <div className="rt-feat-row-icon">{f.icon}</div>
                <div className="rt-feat-row-body">
                  <div className="rt-feat-row-t">{f.t}</div>
                  <p className="rt-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="rt-proc" id="process">
        <div className="rt-proc-inner">
          <div className="rt-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>managed ERP.</span></h2>
          </div>
          <div className="rt-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="rt-proc-step-wrap">
                {i > 0 && <div className="rt-proc-dots" />}
                <div className="rt-proc-step">
                  <div className="rt-proc-step-icon">{p.icon}</div>
                  <div className="rt-proc-step-t">{p.t}</div>
                  <div className="rt-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to secure</div>
              <h3>Want your ERP <span>always covered?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get your retainer proposal</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RETAINER TIERS — split ═══ */}
      <section className="rt-multi" id="tiers">
        <div className="rt-multi-inner">
          <div className="rt-multi-hdr rev">
            <div className="eyebrow lt">Retainer tiers</div>
            <h2>One model.<br /><span>Three tiers.</span></h2>
          </div>
          <div className="rt-multi-split rev">
            <div className="rt-multi-left">
              <div className="rt-multi-big-n">80h</div>
              <div className="rt-multi-big-l">Maximum monthly hours pool</div>
              <p className="rt-multi-big-s">From 20-hour essential coverage for post-go-live stability to 80-hour enterprise managed services with AI optimisation — your retainer tier flexes with your needs, month to month.</p>
            </div>
            <div className="rt-multi-right">
              {TIERS.map((t) => (
                <div key={t.t} className={`rt-multi-loc${t.active ? "" : " inactive"}`}>
                  <div className="rt-multi-loc-t">{t.t}</div>
                  <div className="rt-multi-loc-sub">{t.sub}</div>
                  <div className="rt-multi-loc-stat">{t.ideal}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="rt-plat">
        <div className="rt-plat-inner rev">
          <div className="rt-plat-label">Platforms we support on retainer</div>
          <div className="rt-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="rt-plat-badge">
                <span className="rt-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="rt-faq" id="faq">
        <div className="rt-faq-inner">
          <div className="rt-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Retainer Model.</span></h2>
          </div>
          <div className="rt-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="rt-faq-item">
                <summary className="rt-faq-q">{f.q}</summary>
                <p className="rt-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why retainers outperform tickets</div>
              <h3>Most support is reactive,<br /><span>ours is proactive.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">99.8%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>uptime delivered across all retainer clients.</strong>
                  That&apos;s because retainer engineers know your system intimately — they catch problems before they escalate and improve your ERP continuously, not just when tickets come in.
                </div>
              </div>
              <p>Every retainer comes with four guarantees — written into the agreement.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ZapIcon /></div>
                <div className="oi-closer-commit-t">Priority SLA — contractual, not aspirational</div>
                <p className="oi-closer-commit-b">Response and resolution times are written into the agreement with escalation paths. Critical bugs within 4 hours, high-priority within 24 hours. SLA breaches trigger penalty clauses.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Quarterly audits with written reports</div>
                <p className="oi-closer-commit-b">Every quarter, your ERP is audited for performance, security, data integrity, and optimisation opportunities. Written report with findings, risk ratings, and improvement roadmap — not just a status call.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Proactive upgrades — planned, not panicked</div>
                <p className="oi-closer-commit-b">Odoo version upgrades, security patches, and module updates are roadmapped 3–6 months ahead. Test environments, regression testing, and phased rollout. Zero surprise migrations.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Dedicated engineer — knows your system</div>
                <p className="oi-closer-commit-b">A named engineer is assigned to your retainer — someone who builds deep context in your codebase, your business logic, and your workflows. No ticket roulette, no explaining your system to a stranger every time.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free ERP audit</div>
              <h4>Get your retainer proposal in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get a retainer</span>
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
            <div className="eyebrow lt">Get started</div>
            <h2>One call to <span>secure your ERP.</span></h2>
            <p>Three channels. Senior engineers. Retainer proposal in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Describe your ERP setup for a tailored retainer proposal. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a senior engagement manager about your support needs.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP support engineers and managed services specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Dedicated engineer</span>
            <span className="oi-supp-commit-item"><ClockIcon /> &lt;4h critical SLA</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Quarterly audits</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 99.8% uptime</span>
          </div>
        </div>
      </section>
    </main>
  );
}
