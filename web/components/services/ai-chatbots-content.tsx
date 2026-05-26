/* ────────────────────────────────────────────────────────────────────────
   AI CHATBOTS & COPILOTS — unique page design
   Chat-mockup hero · Copilot type cards · Alternating feature rows ·
   Numbered step path · Platform showcase · Closer · Support
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
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Chat conversation mock ── */
const CHAT_MSGS = [
  { from: "user" as const, text: "What's our top-selling product this quarter?" },
  { from: "bot" as const, text: "SKU-4821 (Industrial Valve Set) leads with ₹18.2L revenue — up 23% vs Q2. Want the full breakdown by region?" },
  { from: "user" as const, text: "Yes, and flag any customers at churn risk." },
  { from: "bot" as const, text: "Report generated. 3 accounts flagged with >70% churn probability. I've routed alerts to your CRM team." },
] as const;

/* ── Copilot types ── */
const COPILOTS = [
  { icon: <SearchIcon />, t: "Query Copilot", s: "Ask questions in plain English and get instant answers from your ERP data. No SQL, no reports menu, no waiting for IT. Revenue by region, stock levels by warehouse, overdue invoices by client — answered in seconds.", accent: "ai" as const, stat: { n: "10×", l: "Faster data access" } },
  { icon: <ZapIcon />, t: "Action Copilot", s: "Trigger ERP workflows through conversation. Create purchase orders, approve expenses, update inventory, send follow-ups — all from a chat interface with built-in approval gates.", accent: "red" as const, stat: { n: "73%", l: "Fewer manual clicks" } },
  { icon: <BarChartIcon />, t: "Insight Copilot", s: "Get proactive alerts and AI-generated summaries. Daily sales digests, anomaly notifications, forecast updates, and KPI snapshots — delivered before you ask.", accent: "purple" as const, stat: { n: "24/7", l: "Always-on intelligence" } },
] as const;

/* ── Use cases — alternating feature rows ── */
const USE_CASES = [
  { icon: <WalletIcon />, t: "Finance & Accounting", sub: "Natural language financial queries", b: "Ask your chatbot for cash flow summaries, outstanding receivables, or month-end status — and get formatted answers with drill-down links. Approve expenses, trigger payment runs, and reconcile accounts through conversation.", bullets: ["\"Show me all overdue invoices above ₹5L\"", "\"Approve pending expense reports under ₹50K\"", "\"What's our cash position across all banks?\""] },
  { icon: <PackageIcon />, t: "Inventory & Procurement", sub: "Conversational stock management", b: "Check stock levels, create purchase orders, and trigger reorder workflows — without opening a single ERP screen. The copilot knows your reorder rules, preferred vendors, and approval hierarchies.", bullets: ["\"How much of SKU-3392 is in Warehouse B?\"", "\"Create a PO for 500 units from Vendor Alpha\"", "\"What items are below reorder point today?\""] },
  { icon: <UsersIcon />, t: "HR & Employee Self-Service", sub: "Instant answers for your workforce", b: "Employees ask about leave balances, payslips, policies, and onboarding tasks. HR teams get AI-drafted responses to common queries, freeing them for strategic work.", bullets: ["\"How many sick days do I have left?\"", "\"Show me the onboarding checklist for new hires\"", "\"What's the travel reimbursement policy?\""] },
  { icon: <TrendingUpIcon />, t: "Sales & CRM", sub: "AI-assisted pipeline management", b: "Sales reps query deal status, get AI-scored lead priorities, and trigger follow-up sequences — all from Slack, Teams, or WhatsApp. No CRM tab-switching required.", bullets: ["\"What deals are closing this week?\"", "\"Score my top 10 leads by conversion probability\"", "\"Send a follow-up email to Acme Corp\""] },
] as const;

/* ── How it works — 4 steps ── */
const STEPS = [
  { num: "01", icon: <SearchIcon />, t: "Audit & scope", b: "We map your ERP data model, identify high-value conversational use cases, and define the chatbot's scope — what it can query, what it can action, and what requires human approval." },
  { num: "02", icon: <CpuIcon />, t: "Build & train", b: "Purpose-built NLU models trained on your ERP schema, business terminology, and approval workflows. No generic chatbot templates — every response maps to your real data." },
  { num: "03", icon: <CloudIcon />, t: "Integrate & deploy", b: "Deploy to Slack, Teams, WhatsApp, or a custom web widget. Secure API connections to your ERP ensure real-time data with role-based access controls." },
  { num: "04", icon: <RefreshIcon />, t: "Learn & improve", b: "Continuous learning from user interactions. The copilot gets smarter with every conversation — expanding its vocabulary, refining answers, and suggesting new automations." },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "Slack", color: "#4A154B" },
  { name: "Microsoft Teams", color: "#6264A7" },
  { name: "WhatsApp", color: "#25D366" },
  { name: "Custom Web Widget", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function AiChatbotsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — chat mockup left, text right ═══ */}
      <section className="cb-hero">
        <div className="cb-hero-glow cb-hero-glow-1" aria-hidden="true" />
        <div className="cb-hero-glow cb-hero-glow-2" aria-hidden="true" />
        <div className="cb-hero-inner">

          {/* Chat mockup */}
          <div className="cb-chat rev">
            <div className="cb-chat-bar">
              <span className="cb-chat-bar-dot" /><span className="cb-chat-bar-dot y" /><span className="cb-chat-bar-dot g" />
              <span className="cb-chat-bar-title">Wan Buffer Copilot</span>
              <span className="cb-chat-bar-status">Online</span>
            </div>
            <div className="cb-chat-body">
              {CHAT_MSGS.map((msg, i) => (
                <div key={i} className={`cb-msg ${msg.from}`}>
                  <div className="cb-msg-bubble">{msg.text}</div>
                </div>
              ))}
              <div className="cb-chat-typing">
                <span /><span /><span />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="cb-hero-content">
            <div className="cb-hero-badge rev">
              <span className="cb-hero-badge-dot" />
              AI chatbots &amp; copilots
            </div>
            <h1 className="cb-hero-h rev">
              Talk to your ERP.<br />
              <span className="acc">It talks back.</span>
            </h1>
            <p className="cb-hero-sub rev">
              AI chatbots and copilots that let your team query data, trigger workflows, and generate reports using natural language — <strong>directly inside Odoo, Zoho, Salesforce, and SAP.</strong>
            </p>
            <div className="cb-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your copilot roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#how-it-works">See how it works</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COPILOT TYPES — 3 large horizontal cards ═══ */}
      <section className="cb-types" id="copilots">
        <div className="cb-types-inner">
          <div className="cb-types-hdr rev">
            <div className="eyebrow">Three copilot modes</div>
            <h2>One interface.<br /><span>Three superpowers.</span></h2>
          </div>
          <div className="cb-types-list rev">
            {COPILOTS.map((cp) => (
              <div key={cp.t} className={`cb-type-card cb-accent-${cp.accent}`}>
                <div className="cb-type-card-left">
                  <div className="cb-type-card-icon">{cp.icon}</div>
                  <div>
                    <div className="cb-type-card-t">{cp.t}</div>
                    <p className="cb-type-card-s">{cp.s}</p>
                  </div>
                </div>
                <div className="cb-type-card-stat">
                  <div className="cb-type-stat-n">{cp.stat.n}</div>
                  <div className="cb-type-stat-l">{cp.stat.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — alternating feature rows ═══ */}
      <section className="cb-cases" id="use-cases">
        <div className="cb-cases-inner">
          <div className="cb-cases-hdr rev">
            <div className="eyebrow lt">Use cases by department</div>
            <h2>Every department.<br /><span>One conversation away.</span></h2>
            <p>Your chatbot speaks the language of every team — finance, procurement, HR, and sales. Each use case is engineered with your ERP schema, approval rules, and business terminology built in.</p>
          </div>

          {USE_CASES.map((uc, i) => (
            <div key={uc.t} className={`cb-case-row${i % 2 === 1 ? " alt" : ""} rev`}>
              <div className="cb-case-visual">
                <div className="cb-case-visual-icon">{uc.icon}</div>
                <div className="cb-case-visual-label">{uc.sub}</div>
                <div className="cb-case-prompts">
                  {uc.bullets.map((b) => (
                    <div key={b.slice(0, 30)} className="cb-case-prompt">{b}</div>
                  ))}
                </div>
              </div>
              <div className="cb-case-copy">
                <div className="cb-case-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="cb-case-t">{uc.t}</h3>
                <p className="cb-case-b">{uc.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ HOW IT WORKS — numbered step path ═══ */}
      <section className="cb-steps" id="how-it-works">
        <div className="cb-steps-inner">
          <div className="cb-steps-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>From concept to<br /><span>live copilot in 8 weeks.</span></h2>
          </div>
          <div className="cb-steps-grid rev">
            {STEPS.map((s, i) => (
              <div key={s.num} className="cb-step">
                {i > 0 && <div className="cb-step-conn" />}
                <div className="cb-step-num">{s.num}</div>
                <div className="cb-step-icon">{s.icon}</div>
                <div className="cb-step-t">{s.t}</div>
                <p className="cb-step-b">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to build</div>
              <h3>Want a copilot inside <span>your ERP?</span></h3>
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

      {/* ═══ PLATFORMS — dark split showcase ═══ */}
      <section className="cb-plat">
        <div className="cb-plat-inner rev">
          <div className="cb-plat-left">
            <div className="cb-plat-stat-n">8+</div>
            <div className="cb-plat-stat-l">Platforms supported</div>
            <p className="cb-plat-desc">Deploy your copilot wherever your team already works — ERP, messaging apps, or a custom web widget.</p>
          </div>
          <div className="cb-plat-badges">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="cb-plat-badge">
                <span className="cb-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your AI partner</div>
              <h3>Most chatbot projects<br /><span>deliver demos, not production tools.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">80%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of enterprise chatbot projects fail to reach production.</strong>
                  Source: Gartner, 2024. The cause is rarely the NLU — it&apos;s chatbots built without access to real business data, proper security, or integration with the systems people actually use.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer copilot is built on four non-negotiable commitments — written into the contract and tracked weekly.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><DatabaseIcon /></div>
                <div className="oi-closer-commit-t">Real ERP data, not mocks</div>
                <p className="oi-closer-commit-b">Your copilot queries live ERP data through secure APIs — not cached snapshots or demo databases. Every answer reflects your current business state.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Role-based access built in</div>
                <p className="oi-closer-commit-b">The copilot respects your ERP permission model. A sales rep sees sales data. A finance lead sees financial data. No leaks, no shortcuts.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Fully auditable actions</div>
                <p className="oi-closer-commit-b">Every query, every action, every approval triggered by the copilot is logged with user, timestamp, and reasoning trail — ready for compliance review.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior AI engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your copilot are the ones who build, deploy, and support it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free AI audit</div>
              <h4>Get your copilot roadmap in <span>48 hours.</span></h4>
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

      {/* ═══ SUPPORT ═══ */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Copilot support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior AI engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For copilot behaviour questions, NLU tuning requests, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Copilot downtime or incorrect actions in production. Answered by a senior AI engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring NLU engineers and conversational AI specialists. Mention the role you are interested in.</p>
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
