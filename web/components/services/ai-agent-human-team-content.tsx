/* ────────────────────────────────────────────────────────────────────────
   AI AGENT + HUMAN TEAM — dedicated page
   Hero split + agent dashboard mock · How it works · What agents do ·
   What humans do · Process flow · FAQ · Closer · Support
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

/* ── Agent dashboard mockup ── */
const AGENTS = [
  { name: "Invoice Agent", tasks: 342, accuracy: 99, saved: "18h", status: "running" as const },
  { name: "Reconciliation Agent", tasks: 128, accuracy: 97, saved: "12h", status: "running" as const },
  { name: "Data Entry Agent", tasks: 567, accuracy: 98, saved: "24h", status: "running" as const },
  { name: "QA & Test Agent", tasks: 89, accuracy: 96, saved: "8h", status: "paused" as const },
  { name: "Report Generator", tasks: 45, accuracy: 100, saved: "6h", status: "running" as const },
  { name: "Procurement Agent", tasks: 73, accuracy: 95, saved: "10h", status: "learning" as const },
] as const;

/* ── The split — what AI does vs what humans do ── */
const AI_DOES = [
  { icon: <ZapIcon />, t: "Routine Data Entry", s: "AI agents enter vendor invoices, customer orders, inventory receipts, and journal entries into your ERP — reading source documents, validating data, and posting with 98%+ accuracy." },
  { icon: <RefreshIcon />, t: "Bank Reconciliation", s: "Agents match bank statement lines to ERP transactions automatically — handling partial payments, multi-currency, and split entries. Unmatched items are flagged for human review." },
  { icon: <MonitorIcon />, t: "Automated Testing & QA", s: "After every configuration change, AI agents run regression tests across affected modules — verifying that workflows, calculations, and integrations still work correctly." },
  { icon: <BarChartIcon />, t: "Report Generation", s: "Scheduled and on-demand reports — financial statements, inventory summaries, sales analytics — generated automatically and delivered to the right stakeholders." },
  { icon: <PackageIcon />, t: "Procurement Monitoring", s: "Agents monitor stock levels, track lead times, and generate purchase order suggestions when reorder points are reached — routing through approval workflows." },
  { icon: <SearchIcon />, t: "Data Validation & Cleanup", s: "Continuous data quality monitoring — duplicate detection, missing field alerts, format standardisation, and master data consistency checks running 24/7." },
] as const;

const HUMAN_DOES = [
  { icon: <CpuIcon />, t: "Strategy & Architecture", s: "Senior engineers design ERP architecture, plan module rollouts, and define automation strategies — the decisions that require business context and domain expertise." },
  { icon: <CodeIcon />, t: "Custom Development", s: "Complex custom modules, non-standard integrations, and business logic that requires creative problem-solving — work that AI cannot template." },
  { icon: <ShieldIcon />, t: "Exception Management", s: "When AI agents encounter edge cases, ambiguous data, or business rule conflicts — human engineers investigate, resolve, and feed the learning back into the agent." },
  { icon: <UsersIcon />, t: "Stakeholder Communication", s: "Client meetings, requirement workshops, training sessions, and change management — the human elements that build trust and drive adoption." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Audit", s: "Identify which tasks AI agents can handle" },
  { icon: <CpuIcon />, t: "Deploy", s: "Configure & train agents on your ERP data" },
  { icon: <EyeIcon />, t: "Monitor", s: "Transparency dashboard tracks every action" },
  { icon: <TrendingUpIcon />, t: "Improve", s: "Agents learn & accuracy improves over time" },
] as const;

/* ── Use cases ── */
const USE_CASES = [
  { t: "Ongoing ERP Operations", sub: "Daily data entry, reconciliation & reporting", savings: "60% cost reduction", active: true },
  { t: "Post-Implementation Support", sub: "Bug fixes, config changes & user support", savings: "50% cost reduction", active: true },
  { t: "Testing & Quality Assurance", sub: "Regression testing after every change", savings: "70% cost reduction", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "LangChain", color: "#22C55E" },
  { name: "OpenAI / Claude", color: "#7C3AED" },
  { name: "Python Agents", color: "#3776AB" },
  { name: "Custom AI Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "What exactly do AI agents do in this model?", a: "AI agents handle repetitive, rule-based ERP tasks — data entry, bank reconciliation, report generation, purchase order creation, test execution, and data validation. They read source documents, enter data into your ERP, validate against business rules, and flag exceptions for human review. Every action is logged in a transparency dashboard with full audit trail." },
  { q: "How is this different from RPA or simple automation?", a: "Traditional RPA follows rigid scripts that break when layouts change. Our AI agents understand context — they can read unstructured documents, handle format variations, learn from corrections, and improve over time. When an agent encounters something it hasn't seen before, it flags it for human review and learns from the resolution. RPA automates clicks. Our agents understand intent." },
  { q: "How do you ensure accuracy and prevent errors?", a: "Every agent action goes through validation rules before posting to your ERP. Confidence thresholds determine whether an action auto-posts or routes to human review. All actions are logged with full audit trails. Accuracy is tracked per agent, per task type, and per time period — visible in your transparency dashboard. Agents that dip below accuracy thresholds auto-pause for human investigation." },
  { q: "Can I see everything the AI agents are doing?", a: "Yes. The transparency dashboard shows every action every agent takes in real time — documents processed, fields extracted, records created, exceptions flagged, and accuracy metrics. Full audit logs are exportable for compliance. You have the same visibility as if a human team were doing the work — actually more, because every action is timestamped and logged." },
  { q: "How much does this actually save vs a fully human team?", a: "Typically 50–70% lower cost for the same output volume. The savings come from AI agents handling the volume work (data entry, reconciliation, testing) while senior engineers focus on strategy and exceptions — a much smaller, more senior team. Exact savings depend on your task mix; we model this during the audit phase before you commit." },
  { q: "What happens when an AI agent makes a mistake?", a: "Mistakes are caught by validation rules before they reach your ERP. When an agent is uncertain (below confidence threshold), it routes the item to human review rather than guessing. When a mistake does slip through, the human engineer corrects it and the correction is fed back into the agent's learning model — so the same mistake doesn't happen twice." },
] as const;

/* ── Component ── */
export function AiAgentHumanTeamContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + agent dashboard right ═══ */}
      <section className="ah-hero">
        <div className="ah-hero-glow ah-hero-glow-1" aria-hidden="true" />
        <div className="ah-hero-glow ah-hero-glow-2" aria-hidden="true" />
        <div className="ah-hero-dots" aria-hidden="true" />
        <div className="ah-hero-inner">
          <div className="ah-hero-content">
            <div className="ah-hero-badge rev">
              <span className="ah-hero-badge-dot" />
              Engagement Model 02
            </div>
            <h1 className="ah-hero-h rev">
              AI Agent +<br />Human Team.<br />
              <span className="acc">Agents execute.<br />Engineers think.<br />You save.</span>
            </h1>
            <p className="ah-hero-sub rev">
              AI agents handle repetitive ERP execution. Senior engineers handle strategy and exceptions. <strong>50–70% lower cost</strong> with full transparency dashboards.
            </p>
            <div className="ah-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Explore this model</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#ai-does">See what agents do</a>
            </div>
            {/* stat pills */}
            <div className="ah-hero-stats rev">
              <div className="ah-hero-stat">
                <span className="ah-hero-stat-n">50–70%</span>
                <span className="ah-hero-stat-l">Lower cost</span>
              </div>
              <span className="ah-hero-stat-div" />
              <div className="ah-hero-stat">
                <span className="ah-hero-stat-n">98%+</span>
                <span className="ah-hero-stat-l">Agent accuracy</span>
              </div>
              <span className="ah-hero-stat-div" />
              <div className="ah-hero-stat">
                <span className="ah-hero-stat-n">24/7</span>
                <span className="ah-hero-stat-l">Agent uptime</span>
              </div>
            </div>
          </div>

          {/* Agent dashboard mockup */}
          <div className="ah-dash rev">
            <div className="ah-dash-hdr">
              <div className="ah-dash-live">
                <span className="ah-dash-live-dot" />
                Live
              </div>
              <div className="ah-dash-title">Agent Dashboard</div>
            </div>
            <div className="ah-dash-list">
              {AGENTS.map((a) => (
                <div key={a.name} className={`ah-agent ah-agent-${a.status}`}>
                  <div className="ah-agent-top">
                    <span className="ah-agent-name">{a.name}</span>
                    <span className={`ah-agent-status ah-agent-status-${a.status}`}>
                      {a.status === "running" ? "Running" : a.status === "paused" ? "Paused" : "Learning"}
                    </span>
                  </div>
                  <div className="ah-agent-mid">
                    <span className="ah-agent-tasks">{a.tasks} tasks</span>
                    <span className="ah-agent-acc">{a.accuracy}% acc</span>
                  </div>
                  <div className="ah-agent-saved">{a.saved} saved this week</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT AI AGENTS DO — 6 rows ═══ */}
      <section className="ah-feat" id="ai-does">
        <div className="ah-feat-inner">
          <div className="ah-feat-hdr rev">
            <div className="eyebrow lt">What AI agents do</div>
            <h2>Six task categories.<br /><span>Handled autonomously.</span></h2>
          </div>
          <div className="ah-feat-list">
            {AI_DOES.map((f, i) => (
              <div key={f.t} className={`ah-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="ah-feat-row-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="ah-feat-row-icon">{f.icon}</div>
                <div className="ah-feat-row-body">
                  <div className="ah-feat-row-t">{f.t}</div>
                  <p className="ah-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT HUMANS DO — 4 cards ═══ */}
      <section className="ah-ops">
        <div className="ah-ops-inner">
          <div className="ah-ops-hdr rev">
            <div className="eyebrow">What senior engineers do</div>
            <h2>Strategy. Build. Resolve.<br /><span>Lead.</span></h2>
          </div>
          <div className="ah-ops-grid rev">
            {HUMAN_DOES.map((item, i) => {
              const colors = ["ai", "green", "purple", "red"] as const;
              return (
                <div key={item.t} className={`ah-op ah-op-${colors[i]}`}>
                  <div className="ah-op-icon">{item.icon}</div>
                  <div className="ah-op-t">{item.t}</div>
                  <p className="ah-op-s">{item.s}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="ah-proc" id="process">
        <div className="ah-proc-inner">
          <div className="ah-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>hybrid operations.</span></h2>
          </div>
          <div className="ah-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="ah-proc-step-wrap">
                {i > 0 && <div className="ah-proc-dots" />}
                <div className="ah-proc-step">
                  <div className="ah-proc-step-icon">{p.icon}</div>
                  <div className="ah-proc-step-t">{p.t}</div>
                  <div className="ah-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to try</div>
              <h3>Want to see AI agents <span>on your ERP data?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book a live demo</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — split ═══ */}
      <section className="ah-multi" id="use-cases">
        <div className="ah-multi-inner">
          <div className="ah-multi-hdr rev">
            <div className="eyebrow lt">Use cases</div>
            <h2>One model.<br /><span>Every operation.</span></h2>
          </div>
          <div className="ah-multi-split rev">
            <div className="ah-multi-left">
              <div className="ah-multi-big-n">70%</div>
              <div className="ah-multi-big-l">Maximum cost reduction vs fully human teams</div>
              <p className="ah-multi-big-s">ERP operations, post-implementation support, and quality assurance — AI agents handle the volume work while senior engineers handle the judgment calls. Exact savings modelled during your free audit.</p>
            </div>
            <div className="ah-multi-right">
              {USE_CASES.map((uc) => (
                <div key={uc.t} className={`ah-multi-loc${uc.active ? "" : " inactive"}`}>
                  <div className="ah-multi-loc-t">{uc.t}</div>
                  <div className="ah-multi-loc-sub">{uc.sub}</div>
                  <div className="ah-multi-loc-stat">{uc.savings}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ah-plat">
        <div className="ah-plat-inner rev">
          <div className="ah-plat-label">AI agent &amp; ERP integrations</div>
          <div className="ah-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ah-plat-badge">
                <span className="ah-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ah-faq" id="faq">
        <div className="ah-faq-inner">
          <div className="ah-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>AI Agent + Human Team.</span></h2>
          </div>
          <div className="ah-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ah-faq-item">
                <summary className="ah-faq-q">{f.q}</summary>
                <p className="ah-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why this model works</div>
              <h3>Most teams scale with people,<br /><span>we scale with AI.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">78h<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>saved per week on average by AI agents across our client base.</strong>
                  That&apos;s 78 hours of data entry, reconciliation, testing, and reporting that AI handles autonomously — freeing senior engineers to focus on work that actually requires human judgment.
                </div>
              </div>
              <p>Every AI Agent + Human Team engagement comes with four guarantees — written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full transparency dashboard</div>
                <p className="oi-closer-commit-b">Every agent action is visible in real time — documents processed, records created, exceptions flagged, accuracy metrics. You see everything. Full audit logs exportable for compliance.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy thresholds</div>
                <p className="oi-closer-commit-b">Accuracy targets defined per agent, per task type before deployment. Agents that drop below threshold auto-pause for human investigation. No silent failures.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Continuous learning — agents improve</div>
                <p className="oi-closer-commit-b">Every human correction is fed back into the agent&apos;s model. Accuracy improves month-over-month. The same mistake never happens twice. Your agents get smarter with every interaction.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers for judgment calls</div>
                <p className="oi-closer-commit-b">AI handles volume. Humans handle judgment. No juniors, no outsourcing — the senior engineers who design your agent workflows are the ones who manage exceptions and improve the system.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free AI audit</div>
              <h4>See your savings estimate in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your AI audit</span>
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
            <h2>One team for <span>your AI audit.</span></h2>
            <p>Three channels. Senior AI engineers. Savings estimate in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Describe your ERP operations for a personalised savings estimate. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a senior AI engineer about the hybrid model.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring AI/ML engineers and ERP automation specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior AI engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 24/7 agent uptime</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Full audit trails</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 50–70% cost savings</span>
          </div>
        </div>
      </section>
    </main>
  );
}
