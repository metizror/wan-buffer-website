/* ────────────────────────────────────────────────────────────────────────
   AI AGENTS FOR ERP — service page
   Hero luxe · Stats band · Methodology cards · Chaptered roadmap ·
   Bento · Closer · Clean support
──────────────────────────────────────────────────────────────────────── */

import {
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
  { icon: <SearchIcon/>, title: "ERP audit & AI readiness assessment", body: "We map your existing ERP workflows, data quality, and process bottlenecks to identify exactly where AI agents will deliver the highest ROI — before writing a single line of code.", tag: "Discover", ai: false, outcome: "AI opportunity map", duration: "1–2 weeks", deliverables: ["Process mapping", "Data quality audit", "ROI projections", "Agent feasibility report"] },
  { icon: <CpuIcon/>, title: "Agent architecture & design", body: "We design autonomous agent architectures tailored to your ERP — defining decision boundaries, tool access, memory systems, and human-in-the-loop checkpoints for safe, reliable automation.", tag: "Design", ai: true, outcome: "Agent blueprints", duration: "2–3 weeks", deliverables: ["Agent topology diagram", "Tool & API specs", "Guardrail definitions", "Approval workflows"] },
  { icon: <CodeIcon/>, title: "Agent development & training", body: "Our engineers build, fine-tune, and test AI agents against your real ERP data. Each agent is purpose-built for specific tasks — procurement, invoicing, inventory, or customer service.", tag: "Build", ai: true, outcome: "Agents deployed", duration: "4–6 weeks", deliverables: ["Custom AI agents", "LLM fine-tuning", "Regression test suite", "Sprint demos"] },
  { icon: <DatabaseIcon/>, title: "ERP integration & data pipeline", body: "Agents connect directly to your ERP via secure APIs. We build real-time data pipelines so agents always work with live, accurate information — never stale exports or CSV dumps.", tag: "Integrate", ai: false, outcome: "Live data sync", duration: "2–3 weeks", deliverables: ["API integrations", "Data pipeline setup", "Security hardening", "Latency benchmarks"] },
  { icon: <EyeIcon/>, title: "Testing & human-in-the-loop validation", body: "Every agent action is validated in a sandbox before production. We configure approval gates, confidence thresholds, and escalation paths so your team stays in control.", tag: "Validate", ai: true, outcome: "Production-ready", duration: "1–2 weeks", deliverables: ["UAT sign-off", "Confidence calibration", "Escalation workflows", "Edge-case testing"] },
  { icon: <RocketIcon/>, title: "Go-live & continuous learning", body: "Agents launch in production with full monitoring. Post-deployment, they learn from corrections and feedback — getting smarter and more accurate with every interaction.", tag: "Launch", ai: true, outcome: "Live & learning", duration: "1 week + 90 days hypercare", deliverables: ["Production deployment", "Monitoring dashboards", "Feedback loops", "Performance reviews"] },
] as const;

const ROADMAP_CHAPTERS = [
  { chapter: "01", tag: "Foundation", title: "Assess & Architect", desc: "Evaluate your ERP landscape, identify high-impact automation targets, and design agent architectures that align with your business goals and compliance requirements.", accent: "ai" as const,
    steps: [
      { n: "01", icon: <TargetIcon/>, title: "Identify automation targets", body: "We pinpoint the ERP tasks where AI agents deliver the most value — repetitive, rule-heavy, and error-prone workflows that drain your team's time.", deliverable: "Opportunity matrix" },
      { n: "02", icon: <WalletIcon/>, title: "Quantify business impact", body: "Every agent we propose comes with projected time savings, cost reduction, and accuracy improvements — backed by your real data.", deliverable: "ROI forecast" },
      { n: "03", icon: <BarChartIcon/>, title: "Design agent architecture", body: "We define the agent's decision framework, tool integrations, memory systems, and escalation rules — engineered for reliability at scale.", deliverable: "Architecture spec" },
      { n: "04", icon: <ShieldIcon/>, title: "Set governance guardrails", body: "Approval thresholds, audit trails, and human override controls are defined upfront — so AI agents operate within boundaries your team trusts.", deliverable: "Governance framework" },
    ]},
  { chapter: "02", tag: "Construction", title: "Build & Integrate", desc: "Develop purpose-built AI agents, connect them to your ERP through secure APIs, and validate every action against real business data before production.", accent: "r" as const,
    steps: [
      { n: "05", icon: <MilestoneIcon/>, title: "Build task-specific agents", body: "Each agent is purpose-built — procurement agents handle POs, finance agents process invoices, inventory agents optimise reorder points.", deliverable: "Deployed agents" },
      { n: "06", icon: <CloudIcon/>, title: "Connect ERP data pipelines", body: "Real-time, bi-directional data sync between your agents and ERP modules — no batch jobs, no stale data, no manual exports.", deliverable: "Live integration" },
      { n: "07", icon: <CheckCircleIcon/>, title: "Sandbox testing", body: "Agents run against production-mirror data in isolated environments. Every decision is logged, reviewed, and validated before go-live.", deliverable: "UAT sign-off" },
      { n: "08", icon: <UsersIcon/>, title: "Team enablement", body: "Your team learns to monitor agents, handle escalations, and fine-tune behaviour — turning them into AI operations experts.", deliverable: "Trained team" },
    ]},
  { chapter: "03", tag: "Operations", title: "Launch & Evolve", desc: "Deploy agents to production with full observability, then continuously improve their accuracy and expand their capabilities as your business grows.", accent: "r" as const,
    steps: [
      { n: "09", icon: <ZapIcon/>, title: "Production deployment", body: "Controlled rollout with rollback capability. Agents go live department by department — never a risky big-bang launch.", deliverable: "Live agents" },
      { n: "10", icon: <BookOpenIcon/>, title: "Monitor & optimise", body: "Real-time dashboards track agent accuracy, latency, and business impact. We tune continuously based on actual performance data.", deliverable: "Performance baseline" },
      { n: "11", icon: <TrendingUpIcon/>, title: "Scale & expand", body: "Once initial agents prove ROI, we scale to new departments and workflows — each expansion faster than the last.", deliverable: "Expansion roadmap" },
    ]},
] as const;

const BENTO_DATA = [
  { icon: <CpuIcon/>, t: "Purpose-built ERP agents", b: "Not generic chatbots — agents engineered for specific ERP tasks like procurement, invoicing, inventory management, and order processing.", tag: "Specialisation", size: "feature", ai: true, variant: "", stat: { n: "100%", l: "Task-specific" } },
  { icon: <PackageIcon/>, t: "Multi-ERP compatibility", b: "Agents that work across Odoo, Zoho, Salesforce, SAP, and hybrid ERP environments — no vendor lock-in.", tag: "Platforms", size: "", ai: false, variant: "glow-red", mini: { n: "5+", l: "ERP platforms" } },
  { icon: <RefreshIcon/>, t: "Self-improving accuracy", b: "Agents learn from corrections and feedback loops — getting more accurate with every interaction, not less.", tag: "Learning", size: "", ai: true, variant: "glow-ai", mini: { n: "99.2%", l: "Accuracy target" } },
  { icon: <SparklesIcon/>, t: "Enterprise-grade security", b: "SOC 2 compliant architecture, encrypted data pipelines, role-based access, and full audit trails on every agent action.", tag: "Security", size: "wide", ai: false, variant: "pattern", mini: { n: "0", l: "Data leaks" } },
  { icon: <ClockIcon/>, t: "24/7 autonomous operation", b: "Agents work around the clock — processing invoices at midnight, updating inventory at dawn, generating reports before your team arrives.", tag: "Uptime", size: "", ai: true, variant: "glow-ai", mini: { n: "24/7", l: "Always on" } },
  { icon: <TrophyIcon/>, t: "Measurable ROI from week one", b: "Every deployment includes pre-agreed KPIs. We track time saved, errors eliminated, and costs reduced — in writing.", tag: "Results", size: "", ai: false, variant: "glow-red", mini: { n: "40%", l: "Avg cost reduction" } },
  { icon: <GridIcon/>, t: "All major ERP modules", b: "Agents for finance, procurement, HR, inventory, manufacturing, CRM, and project management — covering the full ERP stack.", tag: "Coverage", size: "wide", ai: false, variant: "pattern", mini: { n: "9+", l: "Modules" } },
  { icon: <MonitorIcon/>, t: "Real-time observability", b: "Live dashboards showing agent decisions, confidence scores, escalations, and business impact — full transparency, zero black boxes.", tag: "Monitoring", size: "", ai: true, variant: "glow-ai", mini: { n: "100%", l: "Explainable" } },
] as const;

const STATS = [
  { n: "73%", l: "Tasks automated", g: false },
  { n: "40%", l: "Cost reduction", g: true },
  { n: "99.2%", l: "Agent accuracy", g: false },
  { n: "24/7", l: "Autonomous operation", g: false },
] as const;

/* ── Component ── */
export function AiAgentsErpContent() {
  return (
    <main className="svc-page">

      {/* HERO LUXE */}
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">AI</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">AI-powered ERP automation</div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">AI Agents for ERP.</span>
            <span className="ln"><span className="ai">Your workforce, amplified.</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Purpose-built AI agents that execute ERP tasks autonomously — from invoice processing to inventory optimisation. <strong>Reduce manual work by 73%</strong> while your team focuses on decisions that matter.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your AI roadmap</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#phases">See how it works</a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">Works with</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Odoo</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Zoho</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Salesforce</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">SAP</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Custom ERP</span>
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
              <h2>From ERP chaos<br /><span>to intelligent automation.</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Proven across</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  Manufacturing, Retail, Logistics &amp; Finance
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>Six structured phases take you from manual ERP operations to fully autonomous AI agents. Each phase is sign-off gated — nothing moves forward until you approve. Senior AI engineers lead every step, ensuring agents are accurate, secure, and aligned with your business rules.</p>
              <div className="oi-meth-intro-mini">
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">6</span><span className="oi-meth-mini-u">phases</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Sign-off gated</div>
                  <div className="oi-meth-mini-s">You approve every milestone.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">8–12</span><span className="oi-meth-mini-u">weeks</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">First agent live</div>
                  <div className="oi-meth-mini-s">From audit to production.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">100</span><span className="oi-meth-mini-u">%</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Human-in-the-loop</div>
                  <div className="oi-meth-mini-s">Full control, zero blind spots.</div>
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
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want AI agents working inside <span>your ERP?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an AI engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="oi-rmap" id="roadmap">
        <div className="oi-rmap-inner">

          <div className="oi-rmap-hdr rev">
            <div>
              <div className="eyebrow">Deployment roadmap</div>
              <h2>Eleven stages.<br /><span>Full transparency.</span></h2>
            </div>
            <div className="oi-rmap-hdr-r">
              <p>Every stage in your AI agent deployment is <strong>sign-off gated</strong> — a phase only begins once you&apos;ve accepted the one before it. No scope drift, no surprise costs, no agents running unchecked. Designed for enterprises that demand <strong>accountability and control</strong>.</p>
              <div className="oi-rmap-overview-row">
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot" />
                  <div>
                    <div className="oi-rmap-overview-t">Human-in-the-loop</div>
                    <div className="oi-rmap-overview-s">You control every decision.</div>
                  </div>
                </div>
                <div className="oi-rmap-overview">
                  <span className="oi-rmap-overview-dot r" />
                  <div>
                    <div className="oi-rmap-overview-t">Production-proven</div>
                    <div className="oi-rmap-overview-s">Across 10+ industries.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          {ROADMAP_CHAPTERS.map((c) => (
            <div key={c.chapter} className={`oi-rmap-chapter ${c.accent}`} data-cols={c.steps.length === 3 ? "3" : "2"}>
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

      {/* BENTO — why Wan Buffer */}
      <section className="oi-bento-sec" id="why-us">
        <div className="oi-bento-inner">

          <div className="oi-bento-hdr rev">
            <div className="oi-bento-hdr-l">
              <div className="eyebrow">Why Wan Buffer</div>
              <h2>What sets our<br /><span>AI agents apart.</span></h2>
            </div>
            <div className="oi-bento-hdr-r">
              <p>We don&apos;t bolt generic chatbots onto your ERP. We engineer task-specific AI agents that understand your business rules, speak your data language, and operate with enterprise-grade reliability.</p>
              <div className="oi-bento-credit">
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n r">73<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Tasks automated</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n">40<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Cost reduction</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n ai">99.2<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Agent accuracy</div>
                </div>
              </div>
            </div>
          </div>

          <div className="oi-bento-hero rev">
            <div className="oi-bento-hero-icon"><CpuIcon /></div>
            <div className="oi-bento-hero-body">
              <div className="oi-bento-hero-tag">Purpose-built AI agents</div>
              <div className="oi-bento-hero-t">Not chatbots. Autonomous agents that execute real ERP tasks — procurement, invoicing, inventory, and beyond.</div>
              <p className="oi-bento-hero-b">Every agent is designed for a specific ERP workflow, trained on your business data, and governed by approval rules you define. They don&apos;t just suggest — they act.</p>
            </div>
            <div className="oi-bento-hero-stat">
              <div className="oi-bento-hero-stat-n">73%</div>
              <div className="oi-bento-hero-stat-l">Reduction in manual<br />ERP tasks</div>
            </div>
          </div>

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

      {/* CLOSER — commitments + CTA */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your AI partner</div>
              <h3>Most AI projects fail.<br /><span>Ours don&apos;t. Here&apos;s why.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">85%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of enterprise AI projects never reach production.</strong>
                  Source: Gartner, 2024. The reason isn&apos;t the technology — it&apos;s the approach. Generic AI bolted onto legacy systems without domain expertise, governance, or measurable outcomes.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer AI agent deployment is built around four non-negotiable commitments. They&apos;re in the contract, tracked weekly, and never compromised.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Human-in-the-loop always</div>
                <p className="oi-closer-commit-b">Every AI agent has configurable approval gates. High-value decisions require human sign-off. You define the thresholds — we enforce them.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Accuracy rates, time savings, and cost reductions are defined before deployment. If agents don&apos;t hit the numbers, we fix them — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full explainability</div>
                <p className="oi-closer-commit-b">No black boxes. Every agent decision comes with a reasoning trail — why it acted, what data it used, and how confident it was.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior AI engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your agents are the ones who build, deploy, and support them — by name.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free AI audit</div>
              <h4>Get your AI agent roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your AI audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#support">Or talk to our AI team first</a>
            </div>
          </div>

        </div>
      </section>

      {/* SUPPORT */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">AI agent support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior AI engineers. SLA in writing.</p>
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
              <p className="oi-supp-body-v2">For detailed questions, agent behaviour reviews, and full ticket history. First reply in under 2 hours.</p>
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
              <p className="oi-supp-body-v2">Agent malfunction or production incidents. Answered by a senior AI engineer — not a call centre.</p>
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
              <p className="oi-supp-body-v2">Hiring AI engineers and ML specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior AI engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
