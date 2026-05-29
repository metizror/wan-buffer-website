/* ────────────────────────────────────────────────────────────────────────
   PROJECT-BASED ENGAGEMENT — dedicated page
   Hero split + project timeline mock · What's included · How it works ·
   Project types · FAQ · Closer · Support
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

/* ── Project timeline mockup ── */
const MILESTONES = [
  { wk: "W1–2", phase: "Discovery & Scoping", tasks: 8, status: "done" as const },
  { wk: "W3–4", phase: "Solution Design", tasks: 12, status: "done" as const },
  { wk: "W5–8", phase: "Build & Configure", tasks: 24, status: "active" as const },
  { wk: "W9–10", phase: "Data Migration", tasks: 10, status: "upcoming" as const },
  { wk: "W11–12", phase: "UAT & Training", tasks: 14, status: "upcoming" as const },
  { wk: "W13", phase: "Go-Live & Hypercare", tasks: 6, status: "upcoming" as const },
] as const;

/* ── What's included ── */
const INCLUDED = [
  { icon: <TargetIcon />, t: "Fixed Scope & Price", s: "Every deliverable, timeline, and cost is defined upfront in a detailed Statement of Work. No scope creep, no surprise invoices — you know exactly what you are paying for before work begins.", color: "ai" as const },
  { icon: <UsersIcon />, t: "Dedicated Project Manager", s: "A named PM owns your project from Day 1 — managing scope, timeline, risks, and communication. Weekly status reports, milestone reviews, and a single point of accountability throughout.", color: "green" as const },
  { icon: <FlagIcon />, t: "Milestone-Based Delivery", s: "Work is broken into clearly defined milestones with acceptance criteria. You review and approve each milestone before the next begins — full control over quality and progress at every stage.", color: "purple" as const },
  { icon: <HeartIcon />, t: "3-Month Post-Launch Support", s: "After go-live, our team stays for 90 days of hypercare — bug fixes, configuration tweaks, user support, and minor enhancements at no additional cost. You never go live alone.", color: "red" as const },
] as const;

/* ── Features / What makes it different ── */
const FEATURES = [
  { num: "01", icon: <SearchIcon />, t: "Discovery & Requirements Workshop", s: "A structured 2–5 day workshop where we map your business processes, identify pain points, and define the exact scope of work. The output is a detailed requirements document and solution design — approved by your team before any development begins." },
  { num: "02", icon: <SettingsIcon />, t: "Solution Design & Architecture", s: "Technical architecture, module selection, integration map, data migration plan, and user role matrix — documented and signed off. No ambiguity about what will be built, how it connects to your existing systems, or who will use what." },
  { num: "03", icon: <CodeIcon />, t: "Agile Build with Fixed Milestones", s: "Development runs in 2-week sprints within the fixed scope. Each sprint delivers testable functionality. You see working software every 2 weeks — not just at the end. Scope changes follow a formal Change Request process with transparent cost impact." },
  { num: "04", icon: <DatabaseIcon />, t: "Data Migration with Validation", s: "Your existing data — customers, vendors, products, opening balances, historical transactions — migrated with field-level mapping, transformation rules, and validation reports. Parallel run confirms accuracy before the old system is retired." },
  { num: "05", icon: <MonitorIcon />, t: "UAT, Training & Go-Live", s: "User Acceptance Testing with your team, role-based training sessions (recorded for future reference), and a structured go-live checklist. Cut-over plan with rollback strategy — every risk identified and mitigated before the switch." },
  { num: "06", icon: <ShieldIcon />, t: "90-Day Hypercare & Handover", s: "Post go-live, our team provides 90 days of priority support — bug fixes within 24 hours, configuration adjustments, and user hand-holding. At the end, full documentation and knowledge transfer ensure your team can operate independently." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Discover", s: "Map requirements in a structured workshop" },
  { icon: <SettingsIcon />, t: "Design", s: "Solution architecture & sign-off" },
  { icon: <CodeIcon />, t: "Build", s: "Sprint-based development with demos" },
  { icon: <RocketIcon />, t: "Go Live", s: "UAT, training, cut-over & hypercare" },
] as const;

/* ── Project types ── */
const PROJECT_TYPES = [
  { t: "ERP Implementation", sub: "Greenfield Odoo, Zoho, or Salesforce setup", timeline: "8–16 weeks", active: true },
  { t: "ERP Migration", sub: "Tally, QuickBooks, or legacy system migration", timeline: "6–12 weeks", active: true },
  { t: "AI Module Build", sub: "Custom AI feature with ERP integration", timeline: "4–10 weeks", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Magento / Shopify", color: "#F46F25" },
  { name: "Python / AI", color: "#3776AB" },
  { name: "React / Next.js", color: "#00C2FF" },
  { name: "Custom Modules", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "What happens if the scope needs to change mid-project?", a: "Scope changes are handled through a formal Change Request (CR) process. You describe the change, we assess the impact on timeline and cost, and you approve or decline before any work is done. CRs are transparent — you always know the exact cost of a scope change before committing. The original scope continues unaffected." },
  { q: "How is the fixed price calculated?", a: "We estimate effort based on the detailed requirements from the Discovery workshop — broken down by module, feature, integration, and migration complexity. The price is presented as a line-item breakdown so you can see exactly what each component costs. No hidden fees, no ambiguous 'project management overhead' — every hour is accounted for." },
  { q: "What does the 3-month post-launch support cover?", a: "Bug fixes (within 24 hours for critical issues), configuration adjustments, user support queries, and minor enhancements that don't require new development. If something breaks or doesn't work as specified, we fix it at no extra cost. After 90 days, you can transition to a Retainer model for ongoing support or engage on a per-ticket basis." },
  { q: "Can I see working software before the final delivery?", a: "Yes. We run 2-week sprints within the fixed scope. At the end of each sprint, you see a demo of working functionality — not slides or mockups. You can test, provide feedback, and confirm alignment with requirements. This means issues are caught early, not at the final UAT." },
  { q: "What if the project is delivered late?", a: "Our Statement of Work includes a delivery timeline with milestone dates. If we miss a milestone due to factors within our control, we escalate internally and add resources at our cost. Persistent delays trigger penalty clauses defined in the contract. We have a 94% on-time delivery rate across 254+ projects." },
  { q: "How long does a typical project-based engagement take?", a: "Single-module ERP implementations take 4–8 weeks. Full ERP implementations with multiple modules, integrations, and data migration take 8–16 weeks. AI module builds with ERP integration take 4–10 weeks. Complex multi-entity deployments take 12–20 weeks. Timeline is defined and agreed before work begins." },
] as const;

/* ── Component ── */
export function ProjectBasedContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + project timeline right ═══ */}
      <section className="pb-hero">
        <div className="pb-hero-glow pb-hero-glow-1" aria-hidden="true" />
        <div className="pb-hero-glow pb-hero-glow-2" aria-hidden="true" />
        <div className="pb-hero-dots" aria-hidden="true" />
        <div className="pb-hero-inner">
          <div className="pb-hero-content">
            <div className="pb-hero-badge rev">
              <span className="pb-hero-badge-dot" />
              Engagement Model 01
            </div>
            <h1 className="pb-hero-h rev">
              Project-Based<br />Engagement.<br />
              <span className="acc">Fixed scope.<br />Fixed price.<br />Delivered.</span>
            </h1>
            <p className="pb-hero-sub rev">
              Defined deliverables, milestone-based delivery, dedicated project manager, and 3-month post-launch support — <strong>from discovery to go-live.</strong>
            </p>
            <div className="pb-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Start your project</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">How it works</a>
            </div>
            {/* stat pills */}
            <div className="pb-hero-stats rev">
              <div className="pb-hero-stat">
                <span className="pb-hero-stat-n">254+</span>
                <span className="pb-hero-stat-l">Projects delivered</span>
              </div>
              <span className="pb-hero-stat-div" />
              <div className="pb-hero-stat">
                <span className="pb-hero-stat-n">94%</span>
                <span className="pb-hero-stat-l">On-time delivery</span>
              </div>
              <span className="pb-hero-stat-div" />
              <div className="pb-hero-stat">
                <span className="pb-hero-stat-n">90 days</span>
                <span className="pb-hero-stat-l">Free hypercare</span>
              </div>
            </div>
          </div>

          {/* Project timeline mockup */}
          <div className="pb-timeline rev">
            <div className="pb-timeline-hdr">
              <div className="pb-timeline-live">
                <span className="pb-timeline-live-dot" />
                Live
              </div>
              <div className="pb-timeline-title">Project Timeline</div>
            </div>
            <div className="pb-timeline-list">
              {MILESTONES.map((m) => {
                const pct = m.status === "done" ? 100 : m.status === "active" ? 55 : 0;
                return (
                  <div key={m.wk} className={`pb-ms pb-ms-${m.status}`}>
                    <div className="pb-ms-top">
                      <span className="pb-ms-wk">{m.wk}</span>
                      <span className={`pb-ms-status pb-ms-status-${m.status}`}>
                        {m.status === "done" ? "Done" : m.status === "active" ? "In Progress" : "Upcoming"}
                      </span>
                    </div>
                    <div className="pb-ms-phase">{m.phase}</div>
                    <div className="pb-ms-progress">
                      <div className={`pb-ms-progress-fill pb-ms-progress-${m.status}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="pb-ms-tasks">{m.tasks} tasks</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED — 4 cards ═══ */}
      <section className="pb-ops">
        <div className="pb-ops-inner">
          <div className="pb-ops-hdr rev">
            <div className="eyebrow">What&apos;s included</div>
            <h2>Scope. Manage. Deliver.<br /><span>Support.</span></h2>
          </div>
          <div className="pb-ops-grid rev">
            {INCLUDED.map((item) => (
              <div key={item.t} className={`pb-op pb-op-${item.color}`}>
                <div className="pb-op-icon">{item.icon}</div>
                <div className="pb-op-t">{item.t}</div>
                <p className="pb-op-s">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="pb-feat" id="features">
        <div className="pb-feat-inner">
          <div className="pb-feat-hdr rev">
            <div className="eyebrow lt">How it works</div>
            <h2>Six phases.<br /><span>Complete project lifecycle.</span></h2>
          </div>
          <div className="pb-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`pb-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="pb-feat-row-num">{f.num}</div>
                <div className="pb-feat-row-icon">{f.icon}</div>
                <div className="pb-feat-row-body">
                  <div className="pb-feat-row-t">{f.t}</div>
                  <p className="pb-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="pb-proc" id="process">
        <div className="pb-proc-inner">
          <div className="pb-proc-hdr rev">
            <div className="eyebrow">At a glance</div>
            <h2>Four stages to<br /><span>your go-live.</span></h2>
          </div>
          <div className="pb-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="pb-proc-step-wrap">
                {i > 0 && <div className="pb-proc-dots" />}
                <div className="pb-proc-step">
                  <div className="pb-proc-step-icon">{p.icon}</div>
                  <div className="pb-proc-step-t">{p.t}</div>
                  <div className="pb-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to start</div>
              <h3>Have a project <span>with clear requirements?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get a fixed-price proposal</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECT TYPES — split ═══ */}
      <section className="pb-multi" id="project-types">
        <div className="pb-multi-inner">
          <div className="pb-multi-hdr rev">
            <div className="eyebrow lt">Project types</div>
            <h2>One model.<br /><span>Every project.</span></h2>
          </div>
          <div className="pb-multi-split rev">
            <div className="pb-multi-left">
              <div className="pb-multi-big-n">254+</div>
              <div className="pb-multi-big-l">Projects delivered on fixed scope &amp; price</div>
              <p className="pb-multi-big-s">ERP implementations, system migrations, and AI module builds — all delivered with the same rigour: defined scope, milestone approval, dedicated PM, and 90-day hypercare.</p>
            </div>
            <div className="pb-multi-right">
              {PROJECT_TYPES.map((pt) => (
                <div key={pt.t} className={`pb-multi-loc${pt.active ? "" : " inactive"}`}>
                  <div className="pb-multi-loc-t">{pt.t}</div>
                  <div className="pb-multi-loc-sub">{pt.sub}</div>
                  <div className="pb-multi-loc-stat">{pt.timeline}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="pb-plat">
        <div className="pb-plat-inner rev">
          <div className="pb-plat-label">Technologies we deliver projects in</div>
          <div className="pb-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="pb-plat-badge">
                <span className="pb-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="pb-faq" id="faq">
        <div className="pb-faq-inner">
          <div className="pb-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Project-Based Engagement.</span></h2>
          </div>
          <div className="pb-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="pb-faq-item">
                <summary className="pb-faq-q">{f.q}</summary>
                <p className="pb-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why project-based works</div>
              <h3>Most agencies estimate,<br /><span>we commit.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">94%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>on-time delivery rate across 254+ projects.</strong>
                  That&apos;s because we scope before we promise, break work into milestones, and assign a dedicated PM who owns the outcome — not just the timeline.
                </div>
              </div>
              <p>Every project-based engagement comes with four guarantees — written into the Statement of Work, not just the proposal.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Fixed price — no overruns</div>
                <p className="oi-closer-commit-b">The price in the Statement of Work is the price you pay. Period. No hidden fees, no ambiguous change orders, no invoice surprises at the end of the project.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><FlagIcon /></div>
                <div className="oi-closer-commit-t">Milestone approval before next phase</div>
                <p className="oi-closer-commit-b">You review and approve each milestone with defined acceptance criteria. No phase begins until the previous one is signed off. Full control over quality and direction at every stage.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><HeartIcon /></div>
                <div className="oi-closer-commit-t">90-day hypercare — included free</div>
                <p className="oi-closer-commit-b">After go-live, we stay for 90 days. Bug fixes, config tweaks, user support, and minor enhancements — at zero additional cost. You never go live alone.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Named PM &amp; engineers — in the contract</div>
                <p className="oi-closer-commit-b">No juniors, no bait-and-switch. The project manager and engineers proposed are the ones who deliver. Every team member is named in the Statement of Work.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free discovery call</div>
              <h4>Get your fixed-price proposal in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your discovery call</span>
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
            <h2>One team for <span>your project.</span></h2>
            <p>Three channels. Senior engineers. Proposal in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Share your requirements for a fixed-price proposal. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a senior project manager about your requirements.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP engineers, AI specialists, and project managers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Named PM &amp; engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 94% on-time delivery</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Fixed-price contract</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
