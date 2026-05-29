/* ────────────────────────────────────────────────────────────────────────
   HIRE ERP DEVELOPERS — dedicated page
   Hero split + talent pool mock · Why hire from us · Roles available ·
   Process flow · Engagement options · FAQ · Closer · Support
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

/* ── Talent pool mockup ── */
const TALENT = [
  { id: "DEV-041", role: "Odoo Technical Lead", stack: "Python · OWL · PostgreSQL", exp: "8 yrs", avail: "now" as const },
  { id: "DEV-042", role: "Odoo Functional Consultant", stack: "Accounting · MRP · Inventory", exp: "6 yrs", avail: "now" as const },
  { id: "DEV-043", role: "Salesforce Developer", stack: "Apex · Lightning · Flows", exp: "5 yrs", avail: "now" as const },
  { id: "DEV-044", role: "Zoho CRM Specialist", stack: "Deluge · Zoho One · APIs", exp: "4 yrs", avail: "now" as const },
  { id: "DEV-045", role: "Odoo Integration Engineer", stack: "REST · XML-RPC · Webhooks", exp: "5 yrs", avail: "2-week" as const },
  { id: "DEV-046", role: "ERP QA Engineer", stack: "Selenium · Odoo · Cypress", exp: "4 yrs", avail: "now" as const },
] as const;

/* ── Why hire from us ── */
const WHY_US = [
  { icon: <ShieldIcon />, t: "Pre-Vetted & Tested", s: "Every developer passes a 4-stage vetting process — technical assessment, ERP platform certification check, live coding challenge, and cultural fit interview. Only 8% of applicants make it to our bench.", color: "ai" as const },
  { icon: <UsersIcon />, t: "100% Dedicated to You", s: "No shared resources, no split attention. Your developer works exclusively on your projects with full-time availability during your working hours — just like an in-house hire, without the overhead.", color: "green" as const },
  { icon: <ClockIcon />, t: "Onboarded in 1–2 Weeks", s: "From requirement to onboarded developer in 5–10 business days. You interview, approve, and we handle contracts, infrastructure, and workspace. Your developer is productive from Day 1.", color: "purple" as const },
  { icon: <TrendingUpIcon />, t: "Scale Month-to-Month", s: "Add or release developers with 2 weeks' notice. No annual contracts, no penalties. Start with one developer, scale to a team of 10 — the model flexes with your project needs.", color: "red" as const },
] as const;

/* ── Roles available ── */
const ROLES = [
  { num: "01", icon: <CpuIcon />, t: "Odoo Functional Consultants", s: "Business process experts who configure Odoo modules — Accounting, MRP, Inventory, Sales, Purchase, HR, and Project. They map your workflows, design solutions, train users, and own functional delivery. 4–8 years Odoo-specific experience." },
  { num: "02", icon: <CodeIcon />, t: "Odoo Technical Developers", s: "Python/OWL developers who build custom modules, write server actions, create computed fields, develop reports (QWeb), and extend Odoo core. PostgreSQL, XML views, and ORM expertise. Senior developers with 4–8 years on Odoo." },
  { num: "03", icon: <RefreshIcon />, t: "Odoo Integration Engineers", s: "REST API, XML-RPC, and webhook specialists who connect Odoo to Shopify, Magento, Salesforce, payment gateways, shipping carriers, and custom systems. Experienced with real-time sync, error handling, and retry logic." },
  { num: "04", icon: <DatabaseIcon />, t: "Salesforce Developers", s: "Apex, Lightning Web Components, Flows, and SOQL experts. CRM customisation, AppExchange integration, and Salesforce-to-ERP bidirectional sync. Certified Salesforce developers with 4–6 years experience." },
  { num: "05", icon: <SettingsIcon />, t: "Zoho CRM & One Specialists", s: "Deluge scripting, Zoho CRM customisation, Zoho Books configuration, and Zoho One cross-module automation. API integration with external systems and custom function development. 3–6 years Zoho platform experience." },
  { num: "06", icon: <ShieldIcon />, t: "ERP QA & Automation Engineers", s: "Manual and automated testing for ERP workflows — Selenium, Cypress, and custom Odoo test frameworks. Regression testing, integration testing, UAT coordination, and test automation pipeline setup. 3–5 years ERP testing experience." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Share Requirements", s: "Tell us the role, skills & experience level" },
  { icon: <UsersIcon />, t: "Review Profiles", s: "We send 2–3 pre-vetted candidates in 48h" },
  { icon: <MonitorIcon />, t: "Interview & Approve", s: "You interview each candidate directly" },
  { icon: <RocketIcon />, t: "Onboard & Start", s: "Developer starts within 1–2 weeks" },
] as const;

/* ── Engagement options ── */
const OPTIONS = [
  { t: "Single Developer", sub: "One dedicated ERP engineer for focused work", start: "1 week onboard", active: true },
  { t: "Small Team (2–4)", sub: "Developer + functional consultant + QA", start: "1–2 weeks onboard", active: true },
  { t: "Full Squad (5–15)", sub: "Complete ERP engineering team with tech lead", start: "2–4 weeks onboard", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo 16/17/18", color: "#714B67" },
  { name: "Zoho One", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Python", color: "#3776AB" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "REST / XML-RPC", color: "#22C55E" },
  { name: "JavaScript / OWL", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How do you vet ERP developers before proposing them?", a: "Every developer goes through a 4-stage process: (1) Technical assessment — platform-specific coding test for Odoo/Salesforce/Zoho. (2) Certification verification — we confirm ERP platform certifications. (3) Live coding challenge — a real-world ERP problem solved in a timed session. (4) Cultural fit interview — communication, collaboration, and work ethic assessment. Only 8% of applicants pass all four stages." },
  { q: "Can I interview the developers before they start?", a: "Yes. We send 2–3 pre-vetted profiles within 48 hours of receiving your requirements. You interview each candidate via video call, assess technical fit, and approve your choice. If no one fits, we send a fresh batch within 3 days. You always have the final say." },
  { q: "What if a developer isn't the right fit after starting?", a: "If a developer isn't working out in the first 2 weeks, we replace them at no additional cost. No penalty, no gap — we have bench capacity to provide an immediate replacement. After the initial 2-week trial period, replacements require 1 week of notice." },
  { q: "How does communication and time zone overlap work?", a: "Developers join your Slack, Jira, or any tools you use. We guarantee a minimum 4-hour daily overlap with your working hours — more if your timezone is closer to IST. Daily standups, sprint planning, and code reviews happen on your schedule." },
  { q: "What's the difference between hiring from you vs a freelancer?", a: "Freelancers are unvetted, have split attention across clients, and disappear when better gigs come along. Our developers are pre-vetted through a 4-stage process, 100% dedicated to you, backed by our account management and bench replacement guarantee. You get freelancer flexibility with enterprise reliability." },
  { q: "How does pricing work?", a: "Pricing is per-developer, per-month — transparent and all-inclusive. No hidden fees for project management, tools, or infrastructure. Rates vary by platform (Odoo/Salesforce/Zoho), role (functional/technical), and seniority (mid/senior/lead). Month-to-month billing with no long-term lock-ins." },
] as const;

/* ── Component ── */
export function HireErpContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + talent pool right ═══ */}
      <section className="he-hero">
        <div className="he-hero-glow he-hero-glow-1" aria-hidden="true" />
        <div className="he-hero-glow he-hero-glow-2" aria-hidden="true" />
        <div className="he-hero-dots" aria-hidden="true" />
        <div className="he-hero-inner">
          <div className="he-hero-content">
            <div className="he-hero-badge rev">
              <span className="he-hero-badge-dot" />
              Hire ERP Developers
            </div>
            <h1 className="he-hero-h rev">
              Hire ERP<br />Developers.<br />
              <span className="acc">Pre-vetted.<br />Dedicated.<br />Onboarded fast.</span>
            </h1>
            <p className="he-hero-sub rev">
              Odoo, Zoho, and Salesforce engineers — pre-vetted, 100% dedicated to you, and onboarded in 1–2 weeks. <strong>Scale month-to-month.</strong>
            </p>
            <div className="he-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Hire a developer</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#roles">See available roles</a>
            </div>
            {/* stat pills */}
            <div className="he-hero-stats rev">
              <div className="he-hero-stat">
                <span className="he-hero-stat-n">8%</span>
                <span className="he-hero-stat-l">Acceptance rate</span>
              </div>
              <span className="he-hero-stat-div" />
              <div className="he-hero-stat">
                <span className="he-hero-stat-n">48h</span>
                <span className="he-hero-stat-l">Profile delivery</span>
              </div>
              <span className="he-hero-stat-div" />
              <div className="he-hero-stat">
                <span className="he-hero-stat-n">1–2 wk</span>
                <span className="he-hero-stat-l">Onboarding</span>
              </div>
            </div>
          </div>

          {/* Talent pool mockup */}
          <div className="he-pool rev">
            <div className="he-pool-hdr">
              <div className="he-pool-live">
                <span className="he-pool-live-dot" />
                Live
              </div>
              <div className="he-pool-title">Talent Pool</div>
            </div>
            <div className="he-pool-list">
              {TALENT.map((t) => (
                <div key={t.id} className={`he-dev he-dev-${t.avail}`}>
                  <div className="he-dev-top">
                    <span className="he-dev-role">{t.role}</span>
                    <span className={`he-dev-avail he-dev-avail-${t.avail}`}>
                      {t.avail === "now" ? "Available" : "2 Weeks"}
                    </span>
                  </div>
                  <div className="he-dev-mid">
                    <span className="he-dev-stack">{t.stack}</span>
                    <span className="he-dev-exp">{t.exp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US — 4 cards ═══ */}
      <section className="he-ops">
        <div className="he-ops-inner">
          <div className="he-ops-hdr rev">
            <div className="eyebrow">Why hire from us</div>
            <h2>Vetted. Dedicated. Fast.<br /><span>Flexible.</span></h2>
          </div>
          <div className="he-ops-grid rev">
            {WHY_US.map((item) => (
              <div key={item.t} className={`he-op he-op-${item.color}`}>
                <div className="he-op-icon">{item.icon}</div>
                <div className="he-op-t">{item.t}</div>
                <p className="he-op-s">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROLES — alternating rows ═══ */}
      <section className="he-feat" id="roles">
        <div className="he-feat-inner">
          <div className="he-feat-hdr rev">
            <div className="eyebrow lt">Available roles</div>
            <h2>Six ERP disciplines.<br /><span>Hire by role.</span></h2>
          </div>
          <div className="he-feat-list">
            {ROLES.map((f, i) => (
              <div key={f.num} className={`he-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="he-feat-row-num">{f.num}</div>
                <div className="he-feat-row-icon">{f.icon}</div>
                <div className="he-feat-row-body">
                  <div className="he-feat-row-t">{f.t}</div>
                  <p className="he-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="he-proc" id="process">
        <div className="he-proc-inner">
          <div className="he-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>your developer.</span></h2>
          </div>
          <div className="he-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="he-proc-step-wrap">
                {i > 0 && <div className="he-proc-dots" />}
                <div className="he-proc-step">
                  <div className="he-proc-step-icon">{p.icon}</div>
                  <div className="he-proc-step-t">{p.t}</div>
                  <div className="he-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to hire</div>
              <h3>Need an ERP developer <span>who starts this month?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get profiles in 48 hours</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT OPTIONS — split ═══ */}
      <section className="he-multi" id="options">
        <div className="he-multi-inner">
          <div className="he-multi-hdr rev">
            <div className="eyebrow lt">Engagement options</div>
            <h2>One developer.<br /><span>Or a full squad.</span></h2>
          </div>
          <div className="he-multi-split rev">
            <div className="he-multi-left">
              <div className="he-multi-big-n">50+</div>
              <div className="he-multi-big-l">ERP developers on our vetted bench</div>
              <p className="he-multi-big-s">From a single Odoo developer for focused module work to a 15-person squad with tech lead, functional consultants, and QA — your hiring scales with your project, month to month.</p>
            </div>
            <div className="he-multi-right">
              {OPTIONS.map((o) => (
                <div key={o.t} className={`he-multi-loc${o.active ? "" : " inactive"}`}>
                  <div className="he-multi-loc-t">{o.t}</div>
                  <div className="he-multi-loc-sub">{o.sub}</div>
                  <div className="he-multi-loc-stat">{o.start}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="he-plat">
        <div className="he-plat-inner rev">
          <div className="he-plat-label">Technologies our ERP developers work with</div>
          <div className="he-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="he-plat-badge">
                <span className="he-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="he-faq" id="faq">
        <div className="he-faq-inner">
          <div className="he-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Hiring ERP Developers.</span></h2>
          </div>
          <div className="he-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="he-faq-item">
                <summary className="he-faq-q">{f.q}</summary>
                <p className="he-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why hire through us</div>
              <h3>Most outsourcing is a gamble,<br /><span>ours is a guarantee.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">8%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>acceptance rate — only 8 out of 100 applicants make it to our bench.</strong>
                  That means every developer you interview has already passed technical assessments, certification checks, live coding challenges, and cultural fit screening. You hire from the top, not the pool.
                </div>
              </div>
              <p>Every hire comes with four guarantees — written into the agreement.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">4-stage vetting — no exceptions</div>
                <p className="oi-closer-commit-b">Technical test, certification check, live coding, and cultural fit. Every developer. No shortcuts. The same rigour whether you hire one developer or fifteen.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">You interview and approve every hire</div>
                <p className="oi-closer-commit-b">2–3 profiles in 48 hours. You interview directly. You choose. If none fit, we send a fresh batch in 3 days. Your standards, our sourcing.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Free replacement in the first 2 weeks</div>
                <p className="oi-closer-commit-b">If a developer isn&apos;t the right fit in the first 2 weeks, we replace them at zero cost. No gap, no penalty — immediate bench replacement.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Month-to-month — no lock-ins ever</div>
                <p className="oi-closer-commit-b">Add or release developers with 2 weeks&apos; notice. No annual contracts, no minimum terms, no exit penalties. We earn your renewal every month.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start hiring today</div>
              <h4>Get developer profiles in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Hire a developer</span>
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
            <h2>One call to <span>hire your developer.</span></h2>
            <p>Three channels. Pre-vetted profiles in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Share your requirements for matched developer profiles. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a hiring manager about your developer needs.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">ERP developers — join our vetted bench and work with global clients.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Apply now <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> 4-stage vetting</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 48h profile delivery</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Free 2-week replacement</span>
            <span className="oi-supp-commit-item"><HeartIcon /> No lock-ins</span>
          </div>
        </div>
      </section>
    </main>
  );
}
