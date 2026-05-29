/* ────────────────────────────────────────────────────────────────────────
   DEDICATED TEAM — dedicated page
   Hero split + team roster mock · What's included · Roles available ·
   Process flow · FAQ · Closer · Support
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

/* ── Team roster mockup ── */
const ROSTER = [
  { role: "Tech Lead", skill: "Odoo + Python", exp: "8 yrs", status: "active" as const },
  { role: "ERP Functional", skill: "Odoo Accounting", exp: "6 yrs", status: "active" as const },
  { role: "AI/ML Engineer", skill: "LangChain + GPT", exp: "5 yrs", status: "active" as const },
  { role: "Full-Stack Dev", skill: "React + Node", exp: "4 yrs", status: "active" as const },
  { role: "QA Engineer", skill: "Automation + Manual", exp: "5 yrs", status: "active" as const },
  { role: "Mobile Dev", skill: "Flutter + React Native", exp: "4 yrs", status: "bench" as const },
] as const;

/* ── What's included ── */
const INCLUDED = [
  { icon: <UsersIcon />, t: "100% Dedicated Engineers", s: "Your team works exclusively on your projects — no shared resources, no split attention. Every engineer is 100% allocated to you with full-time availability during your working hours.", color: "ai" as const },
  { icon: <MonitorIcon />, t: "Direct Communication", s: "Slack channels, Jira boards, daily standups, and weekly sprint reviews — your dedicated team operates as an extension of your in-house team with zero communication lag.", color: "green" as const },
  { icon: <TrendingUpIcon />, t: "Month-to-Month Scaling", s: "Add engineers when workload peaks, release them when it eases. No long-term lock-ins — scale from 2 to 15 engineers with just 2 weeks' notice. You pay only for what you need.", color: "purple" as const },
  { icon: <StarIcon />, t: "Senior Tech Lead Included", s: "Every team includes a senior tech lead who owns architecture, code quality, and sprint planning — plus an AI specialist when your project involves automation or ML components.", color: "red" as const },
] as const;

/* ── Roles available ── */
const ROLES = [
  { num: "01", icon: <CpuIcon />, t: "ERP Functional Consultants", s: "Domain experts in Odoo, Zoho, and Salesforce — business process mapping, module configuration, workflow design, and user training. They bridge the gap between your business requirements and the technical implementation." },
  { num: "02", icon: <CodeIcon />, t: "ERP Technical Developers", s: "Python/Odoo, Java/Salesforce, and Deluge/Zoho developers who build custom modules, write integrations, develop reports, and extend ERP functionality. Senior developers with 4–8 years of platform-specific experience." },
  { num: "03", icon: <SparklesIcon />, t: "AI & ML Engineers", s: "Python, LangChain, TensorFlow, and OpenAI specialists who build AI agents, predictive models, document processing pipelines, and intelligent automation — integrated directly into your ERP workflows." },
  { num: "04", icon: <MonitorIcon />, t: "Full-Stack & Mobile Developers", s: "React, Next.js, Node.js, Flutter, and React Native developers for customer portals, mobile apps, dashboards, and frontend experiences that connect to your ERP backend." },
  { num: "05", icon: <ShieldIcon />, t: "QA & Automation Engineers", s: "Manual and automated testing — Selenium, Cypress, and custom test frameworks for ERP workflows. Regression testing after every sprint, integration testing for APIs, and UAT coordination with your team." },
  { num: "06", icon: <SettingsIcon />, t: "DevOps & Infrastructure", s: "AWS, Azure, and GCP deployment, CI/CD pipelines, Odoo.sh management, Docker/Kubernetes orchestration, and monitoring setup. They keep your ERP infrastructure secure, fast, and available." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Define", s: "Share requirements & team composition" },
  { icon: <UsersIcon />, t: "Match", s: "We propose pre-vetted engineers" },
  { icon: <MonitorIcon />, t: "Interview", s: "You interview & approve every hire" },
  { icon: <RocketIcon />, t: "Launch", s: "Team onboards in 1–2 weeks" },
] as const;

/* ── Team sizes ── */
const TEAM_SIZES = [
  { t: "Starter Team (2–4)", sub: "Ideal for single-module ERP work", setup: "1 week onboard", active: true },
  { t: "Growth Team (5–8)", sub: "Multi-module development & AI features", setup: "2 weeks onboard", active: true },
  { t: "Enterprise Team (9–15)", sub: "Full product engineering & multi-ERP", setup: "3–4 weeks onboard", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Python / AI", color: "#3776AB" },
  { name: "React / Next.js", color: "#00C2FF" },
  { name: "Flutter / Mobile", color: "#027DFD" },
  { name: "AWS / Azure", color: "#FF9900" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How quickly can a dedicated team be assembled?", a: "A 2–4 person starter team can be onboarded within 1–2 weeks. Growth teams (5–8 engineers) typically take 2–3 weeks. Enterprise teams (9–15 engineers) take 3–4 weeks as we match specific skill requirements — ERP functional consultants, AI/ML engineers, mobile developers, and QA specialists. You interview and approve every team member before they start." },
  { q: "Do I get to choose and interview the engineers?", a: "Yes. We propose 2–3 pre-vetted candidates for each role based on your requirements. You interview them, assess technical fit, and approve every hire. If someone isn't the right fit during the first 2 weeks, we replace them at no additional cost. You build the team — we source and manage the bench." },
  { q: "How does communication and project management work?", a: "Your team joins your Slack workspace, Jira/Asana board, and any other tools you use. Daily standups (15 min), weekly sprint planning, and bi-weekly sprint reviews are standard. The tech lead owns sprint delivery and reports directly to your project stakeholder. Time zone overlap is guaranteed — minimum 4 hours of real-time collaboration daily." },
  { q: "Can I scale the team up or down?", a: "Yes. Add or remove engineers month-to-month with 2 weeks' notice. There are no long-term lock-ins. Team changes take effect at the next sprint boundary so ongoing work isn't disrupted. If you need a specialist for just one sprint (e.g., a DevOps engineer for deployment), we accommodate that too." },
  { q: "What's included beyond engineering hours?", a: "Every team includes a senior tech lead (at no extra charge for teams of 4+), sprint management, code reviews, architecture guidance, and transparent time tracking. You also get monthly performance reviews, skill development plans, and a dedicated account manager as your single point of contact for team operations." },
  { q: "How does pricing work for dedicated teams?", a: "Pricing is per-engineer, per-month — transparent and predictable. Rates vary by role and seniority. There are no hidden fees for project management, tools, or infrastructure. You see a clear breakdown before committing. Month-to-month billing with no long-term contracts required — though multi-month commitments get preferential rates." },
] as const;

/* ── Component ── */
export function DedicatedTeamContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + team roster right ═══ */}
      <section className="dt-hero">
        <div className="dt-hero-glow dt-hero-glow-1" aria-hidden="true" />
        <div className="dt-hero-glow dt-hero-glow-2" aria-hidden="true" />
        <div className="dt-hero-dots" aria-hidden="true" />
        <div className="dt-hero-inner">
          <div className="dt-hero-content">
            <div className="dt-hero-badge rev">
              <span className="dt-hero-badge-dot" />
              Engagement Model 03
            </div>
            <h1 className="dt-hero-h rev">
              Dedicated<br />Team.<br />
              <span className="acc">Your engineers.<br />Your workflow.<br />Your pace.</span>
            </h1>
            <p className="dt-hero-sub rev">
              2–15 engineers, 100% dedicated to you. ERP, AI, and mobile talent embedded in your workflows — <strong>scale month-to-month.</strong>
            </p>
            <div className="dt-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Build my team</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#roles">See available roles</a>
            </div>
            {/* stat pills */}
            <div className="dt-hero-stats rev">
              <div className="dt-hero-stat">
                <span className="dt-hero-stat-n">2–15</span>
                <span className="dt-hero-stat-l">Engineers per team</span>
              </div>
              <span className="dt-hero-stat-div" />
              <div className="dt-hero-stat">
                <span className="dt-hero-stat-n">1–2 wk</span>
                <span className="dt-hero-stat-l">Team onboarding</span>
              </div>
              <span className="dt-hero-stat-div" />
              <div className="dt-hero-stat">
                <span className="dt-hero-stat-n">84%</span>
                <span className="dt-hero-stat-l">Client retention</span>
              </div>
            </div>
          </div>

          {/* Team roster mockup */}
          <div className="dt-roster rev">
            <div className="dt-roster-hdr">
              <div className="dt-roster-live">
                <span className="dt-roster-live-dot" />
                Live
              </div>
              <div className="dt-roster-title">Your Team</div>
            </div>
            <div className="dt-roster-list">
              {ROSTER.map((r) => (
                <div key={r.role} className={`dt-member dt-member-${r.status}`}>
                  <div className="dt-member-top">
                    <span className="dt-member-role">{r.role}</span>
                    <span className={`dt-member-status dt-member-status-${r.status}`}>
                      {r.status === "active" ? "Active" : "On Bench"}
                    </span>
                  </div>
                  <div className="dt-member-mid">
                    <span className="dt-member-skill">{r.skill}</span>
                    <span className="dt-member-exp">{r.exp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED — 4 cards ═══ */}
      <section className="dt-ops">
        <div className="dt-ops-inner">
          <div className="dt-ops-hdr rev">
            <div className="eyebrow">What&apos;s included</div>
            <h2>Hire. Embed. Scale.<br /><span>Retain.</span></h2>
          </div>
          <div className="dt-ops-grid rev">
            {INCLUDED.map((item) => (
              <div key={item.t} className={`dt-op dt-op-${item.color}`}>
                <div className="dt-op-icon">{item.icon}</div>
                <div className="dt-op-t">{item.t}</div>
                <p className="dt-op-s">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROLES — alternating rows ═══ */}
      <section className="dt-feat" id="roles">
        <div className="dt-feat-inner">
          <div className="dt-feat-hdr rev">
            <div className="eyebrow lt">Available roles</div>
            <h2>Six disciplines.<br /><span>Build your ideal team.</span></h2>
          </div>
          <div className="dt-feat-list">
            {ROLES.map((f, i) => (
              <div key={f.num} className={`dt-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="dt-feat-row-num">{f.num}</div>
                <div className="dt-feat-row-icon">{f.icon}</div>
                <div className="dt-feat-row-body">
                  <div className="dt-feat-row-t">{f.t}</div>
                  <p className="dt-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="dt-proc" id="process">
        <div className="dt-proc-inner">
          <div className="dt-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>your team.</span></h2>
          </div>
          <div className="dt-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="dt-proc-step-wrap">
                {i > 0 && <div className="dt-proc-dots" />}
                <div className="dt-proc-step">
                  <div className="dt-proc-step-icon">{p.icon}</div>
                  <div className="dt-proc-step-t">{p.t}</div>
                  <div className="dt-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to build</div>
              <h3>Need engineers <span>who feel in-house?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get team proposals in 48h</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TEAM SIZES — split ═══ */}
      <section className="dt-multi" id="team-sizes">
        <div className="dt-multi-inner">
          <div className="dt-multi-hdr rev">
            <div className="eyebrow lt">Team sizes</div>
            <h2>One model.<br /><span>Every scale.</span></h2>
          </div>
          <div className="dt-multi-split rev">
            <div className="dt-multi-left">
              <div className="dt-multi-big-n">15</div>
              <div className="dt-multi-big-l">Maximum engineers per dedicated team</div>
              <p className="dt-multi-big-s">From a 2-person starter team for focused module work to a 15-person enterprise squad for full product engineering — your team composition and size evolve with your needs, month to month.</p>
            </div>
            <div className="dt-multi-right">
              {TEAM_SIZES.map((ts) => (
                <div key={ts.t} className={`dt-multi-loc${ts.active ? "" : " inactive"}`}>
                  <div className="dt-multi-loc-t">{ts.t}</div>
                  <div className="dt-multi-loc-sub">{ts.sub}</div>
                  <div className="dt-multi-loc-stat">{ts.setup}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="dt-plat">
        <div className="dt-plat-inner rev">
          <div className="dt-plat-label">Technologies our teams work with</div>
          <div className="dt-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="dt-plat-badge">
                <span className="dt-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="dt-faq" id="faq">
        <div className="dt-faq-inner">
          <div className="dt-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Dedicated Teams.</span></h2>
          </div>
          <div className="dt-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="dt-faq-item">
                <summary className="dt-faq-q">{f.q}</summary>
                <p className="dt-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why dedicated teams win</div>
              <h3>Most agencies rotate engineers,<br /><span>we dedicate them.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">84%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>client retention rate for dedicated team engagements.</strong>
                  That&apos;s because dedicated engineers build deep context in your codebase, your business logic, and your workflows — context that compounds every month and makes the team more effective over time.
                </div>
              </div>
              <p>Every dedicated team comes with four guarantees — written into the agreement.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">100% dedicated — no resource sharing</div>
                <p className="oi-closer-commit-b">Every engineer on your team works exclusively on your projects. No split allocation, no shared attention, no context-switching between clients. Verified by transparent time tracking.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">You interview and approve every hire</div>
                <p className="oi-closer-commit-b">We propose candidates. You interview them. You approve. If someone isn&apos;t the right fit in the first 2 weeks, we replace them at no cost. Your team, your choice.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Scale month-to-month — no lock-ins</div>
                <p className="oi-closer-commit-b">Add or remove engineers with 2 weeks&apos; notice. No annual contracts, no penalties, no minimum terms. We earn your renewal every month through results.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><StarIcon /></div>
                <div className="oi-closer-commit-t">Senior tech lead included free (4+ team)</div>
                <p className="oi-closer-commit-b">Teams of 4 or more include a senior tech lead at no extra cost — owning architecture, code quality, sprint planning, and technical decision-making for your project.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free team proposal</div>
              <h4>Get your team composition in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Build my team</span>
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
            <h2>One call to <span>build your team.</span></h2>
            <p>Three channels. Senior engineers. Team proposals in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Share your tech stack and team needs for a tailored proposal. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a senior engagement manager about your team requirements.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP engineers, AI specialists, and full-stack developers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> 100% dedicated</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 1–2 week onboarding</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> You approve every hire</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 84% retention rate</span>
          </div>
        </div>
      </section>
    </main>
  );
}
