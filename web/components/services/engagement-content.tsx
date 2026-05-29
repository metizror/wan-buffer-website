/* ────────────────────────────────────────────────────────────────────────
   ENGAGEMENT MODELS — dedicated page
   Hero · 4 model deep-dives · How to choose · Process flow ·
   FAQ · Closer · Support
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

/* ── Model data ── */
const MODELS = [
  {
    num: "01",
    icon: "🎯",
    name: "Project-Based Engagement",
    tag: null,
    tagType: null,
    sub: "Fixed scope, fixed price, defined delivery — ERP or AI projects with clear boundaries. Ideal when you know exactly what you need and want predictable cost and timeline.",
    features: [
      "Defined scope, timeline & milestones",
      "Fixed-price transparent contract",
      "Dedicated Project Manager from Day 1",
      "ERP implementation or AI module delivery",
      "3-month post-launch support included",
      "Change requests managed via formal CR process",
    ],
    bestFor: ["New ERP implementations", "Single-module deployments", "Migration projects", "AI feature builds with clear specs"],
    timeline: "4–16 weeks",
    teamSize: "2–8 engineers",
    cta: "Start a Project",
    color: "ai" as const,
  },
  {
    num: "02",
    icon: "🤖",
    name: "AI Agent + Human Team",
    tag: "New Model",
    tagType: "new" as const,
    sub: "Our most innovative model — AI agents handle repetitive execution while senior engineers focus on strategy, custom logic, and continuous improvement. 50–70% lower cost vs fully human teams.",
    features: [
      "AI agents execute routine ERP tasks autonomously",
      "Senior engineers manage exceptions & custom logic",
      "50–70% lower cost vs. fully human teams",
      "Continuous learning — agents improve over time",
      "Full transparency dashboard & audit logs",
      "Ideal for ongoing ERP operations & automation",
    ],
    bestFor: ["Ongoing ERP operations", "Data entry & reconciliation", "Automated testing & QA", "Repetitive workflow automation"],
    timeline: "Ongoing — monthly",
    teamSize: "AI agents + 1–3 engineers",
    cta: "Explore This Model",
    color: "green" as const,
  },
  {
    num: "03",
    icon: "👥",
    name: "Dedicated Team",
    tag: "Most Popular",
    tagType: "popular" as const,
    sub: "Your offshore ERP + AI engineering squad — fully dedicated, deeply embedded in your workflows. Scale up or down month-to-month as your needs evolve.",
    features: [
      "2–15 engineers, 100% dedicated to you",
      "Mix of ERP, AI, and mobile engineers",
      "Direct Slack / Jira / daily standups",
      "Scale up or down month-to-month",
      "Senior tech lead + AI specialist included",
      "Transparent time tracking & sprint reports",
    ],
    bestFor: ["Long-term product development", "Multi-module ERP rollouts", "Continuous feature development", "Teams needing full-time bandwidth"],
    timeline: "Ongoing — monthly",
    teamSize: "2–15 engineers",
    cta: "Build My Team",
    color: "purple" as const,
  },
  {
    num: "04",
    icon: "🔄",
    name: "Retainer Model",
    tag: null,
    tagType: null,
    sub: "Ongoing ERP support, AI optimisation, and managed platform evolution — a strategic long-term partnership with priority SLA and proactive system health management.",
    features: [
      "Monthly sprint-based development",
      "Priority SLA — bug fixes within 24h",
      "Quarterly AI + ERP system health audits",
      "Proactive Odoo upgrade planning",
      "Flexible hours pool each month",
      "Dedicated account manager & engineer",
    ],
    bestFor: ["Post-implementation support", "Ongoing ERP maintenance", "Gradual system evolution", "Businesses needing priority SLA"],
    timeline: "6–12 month contracts",
    teamSize: "1–4 engineers",
    cta: "Get a Retainer",
    color: "red" as const,
  },
] as const;

/* ── How to choose ── */
const CHOOSER = [
  { q: "I know exactly what I need — fixed scope, fixed budget", a: "Project-Based", model: "01" },
  { q: "I want AI doing the repetitive work, humans on strategy", a: "AI Agent + Human Team", model: "02" },
  { q: "I need a full engineering team embedded in my workflows", a: "Dedicated Team", model: "03" },
  { q: "I need ongoing support with priority SLA", a: "Retainer Model", model: "04" },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Discovery", s: "30-min call to understand your challenge" },
  { icon: <SettingsIcon />, t: "Proposal", s: "Model recommendation with scope & pricing" },
  { icon: <UsersIcon />, t: "Team Setup", s: "Engineers assigned & onboarded in 48h" },
  { icon: <RocketIcon />, t: "Kickoff", s: "Sprint 1 starts within one week" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How do I choose between Project-Based and Dedicated Team?", a: "Project-Based is ideal when you have a well-defined scope with clear deliverables — an ERP implementation, a specific module build, or a migration. Dedicated Team is better when work is ongoing, scope evolves over time, or you need consistent engineering bandwidth. If you're unsure, start with a project-based engagement and transition to a dedicated team once you see the value." },
  { q: "How does the AI Agent + Human Team model actually work?", a: "AI agents handle repetitive ERP tasks — data entry, reconciliation, report generation, testing, and routine configurations. Senior human engineers handle strategy, custom logic, exception management, and continuous improvement. You get a transparency dashboard showing exactly what the AI agents are doing, with full audit logs. The cost is 50–70% lower than a fully human team because AI handles the volume work." },
  { q: "Can I switch between engagement models?", a: "Yes. Many clients start with a Project-Based engagement for their initial ERP implementation, then move to a Retainer or Dedicated Team for ongoing development. We design contracts with transition clauses so you can switch models without disruption or penalty." },
  { q: "What's included in the 3-month post-launch support?", a: "For Project-Based engagements, the 3-month hypercare period includes bug fixes, configuration adjustments, user support, and minor enhancements — at no additional cost. After 3 months, you can transition to a Retainer for ongoing support or engage us on a per-ticket basis." },
  { q: "How quickly can a Dedicated Team be assembled?", a: "We can have a 2–4 person team onboarded within 1–2 weeks. Larger teams (8–15 engineers) typically take 2–4 weeks to assemble, as we match specific skill requirements — ERP functional consultants, AI/ML engineers, mobile developers, and QA specialists." },
  { q: "What happens if I need to scale my team up or down?", a: "Dedicated Team and Retainer models are designed for flexibility. You can add or remove engineers month-to-month with 2 weeks' notice. There are no long-term lock-ins — we earn your business every month. Team changes take effect at the next sprint boundary." },
] as const;

/* ── Component ── */
export function EngagementContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO ═══ */}
      <section className="eg-hero">
        <div className="eg-hero-glow eg-hero-glow-1" aria-hidden="true" />
        <div className="eg-hero-glow eg-hero-glow-2" aria-hidden="true" />
        <div className="eg-hero-dots" aria-hidden="true" />
        <div className="eg-hero-inner">
          <div className="eg-hero-content">
            <div className="eg-hero-badge rev">
              <span className="eg-hero-badge-dot" />
              Engagement Models
            </div>
            <h1 className="eg-hero-h rev">
              Four Ways<br />to Engage.<br />
              <span className="acc">One goal.<br />Your success.</span>
            </h1>
            <p className="eg-hero-sub rev">
              From fixed-scope projects to our breakthrough AI Agent + Human Team hybrid — choose the partnership model that fits your challenge, timeline, and budget.
            </p>
            <div className="eg-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Book a discovery call</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#models">Compare models</a>
            </div>
            {/* stat pills */}
            <div className="eg-hero-stats rev">
              <div className="eg-hero-stat">
                <span className="eg-hero-stat-n">4</span>
                <span className="eg-hero-stat-l">Engagement models</span>
              </div>
              <span className="eg-hero-stat-div" />
              <div className="eg-hero-stat">
                <span className="eg-hero-stat-n">48h</span>
                <span className="eg-hero-stat-l">Team onboarding</span>
              </div>
              <span className="eg-hero-stat-div" />
              <div className="eg-hero-stat">
                <span className="eg-hero-stat-n">254+</span>
                <span className="eg-hero-stat-l">Projects delivered</span>
              </div>
            </div>
          </div>

          {/* Quick chooser mockup */}
          <div className="eg-chooser rev">
            <div className="eg-chooser-hdr">
              <div className="eg-chooser-live">
                <span className="eg-chooser-live-dot" />
                Interactive
              </div>
              <div className="eg-chooser-title">Find Your Model</div>
            </div>
            <div className="eg-chooser-list">
              {CHOOSER.map((c) => (
                <div key={c.model} className="eg-chooser-row">
                  <div className="eg-chooser-q">{c.q}</div>
                  <div className="eg-chooser-a">
                    <span className="eg-chooser-arrow">→</span>
                    <span className="eg-chooser-model">Model {c.model}: {c.a}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MODELS — 4 deep-dive cards ═══ */}
      <section className="eg-models" id="models">
        <div className="eg-models-inner">
          <div className="eg-models-hdr rev">
            <div className="eyebrow">Engagement models</div>
            <h2>Four models.<br /><span>Every scenario covered.</span></h2>
          </div>
          <div className="eg-models-list">
            {MODELS.map((m) => (
              <div key={m.num} className={`eg-model eg-model-${m.color} rev`} id={`model-${m.num}`}>
                <div className="eg-model-left">
                  <div className="eg-model-num-row">
                    <span className="eg-model-num">Model {m.num}</span>
                    {m.tag && <span className={`eg-model-tag eg-model-tag-${m.tagType}`}>{m.tagType === "new" ? "⚡ " : ""}{m.tag}</span>}
                  </div>
                  <span className="eg-model-icon">{m.icon}</span>
                  <div className="eg-model-name">{m.name}</div>
                  <p className="eg-model-sub">{m.sub}</p>
                  <div className="eg-model-meta">
                    <div className="eg-model-meta-item">
                      <ClockIcon />
                      <span>{m.timeline}</span>
                    </div>
                    <div className="eg-model-meta-item">
                      <UsersIcon />
                      <span>{m.teamSize}</span>
                    </div>
                  </div>
                  <a className="eg-model-cta" href="#contact">
                    <span>{m.cta}</span>
                    <ArrowRightIcon />
                  </a>
                </div>
                <div className="eg-model-right">
                  <div className="eg-model-section">
                    <div className="eg-model-section-t">What&apos;s included</div>
                    <ul className="eg-model-feats">
                      {m.features.map((f) => (
                        <li key={f.slice(0, 20)} className="eg-model-feat"><CheckIcon /><span>{f}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div className="eg-model-section">
                    <div className="eg-model-section-t">Best for</div>
                    <ul className="eg-model-bests">
                      {m.bestFor.map((b) => (
                        <li key={b.slice(0, 20)} className="eg-model-best">{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="eg-proc" id="process">
        <div className="eg-proc-inner">
          <div className="eg-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>your team.</span></h2>
          </div>
          <div className="eg-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="eg-proc-step-wrap">
                {i > 0 && <div className="eg-proc-dots" />}
                <div className="eg-proc-step">
                  <div className="eg-proc-step-icon">{p.icon}</div>
                  <div className="eg-proc-step-t">{p.t}</div>
                  <div className="eg-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to start</div>
              <h3>Not sure which model <span>fits your project?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book a 30-min discovery call</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="eg-faq" id="faq">
        <div className="eg-faq-inner">
          <div className="eg-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Engagement Models.</span></h2>
          </div>
          <div className="eg-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="eg-faq-item">
                <summary className="eg-faq-q">{f.q}</summary>
                <p className="eg-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why our engagement works</div>
              <h3>Most agencies sell hours,<br /><span>not outcomes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">84%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>client retention rate across all engagement models.</strong>
                  That means 84% of clients who start with us continue working with us — because we deliver measurable outcomes, not just billable hours.
                </div>
              </div>
              <p>Every engagement model comes with four guarantees — written into the contract, not just the sales pitch.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs &amp; success metrics</div>
                <p className="oi-closer-commit-b">Every engagement defines measurable outcomes before work begins — delivery milestones, performance targets, or SLA thresholds. If we miss them, we iterate at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full transparency — always</div>
                <p className="oi-closer-commit-b">Time tracking, sprint reports, AI agent dashboards, and cost breakdowns are visible to you at all times. No black boxes, no surprise invoices, no hidden costs.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Flexible transitions between models</div>
                <p className="oi-closer-commit-b">Start project-based, move to a dedicated team, add AI agents, or switch to a retainer — contracts include transition clauses so you can evolve without penalty.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only — named in the contract</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing, no bait-and-switch. The engineers proposed are the ones who do the work. Every team member is named in the agreement.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free discovery call</div>
              <h4>Get your engagement recommendation in <span>24 hours.</span></h4>
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
            <div className="eyebrow lt">Get in touch</div>
            <h2>One team for <span>every question.</span></h2>
            <p>Three channels. Senior engineers. Responds within 2 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">For engagement model questions, pricing, and team composition. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a senior engagement manager about your project needs.</p>
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
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 48h team onboarding</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Named in contract</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 84% retention rate</span>
          </div>
        </div>
      </section>
    </main>
  );
}
