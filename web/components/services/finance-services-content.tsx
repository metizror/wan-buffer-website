/* ────────────────────────────────────────────────────────────────────────
   FINANCE & SERVICES — unique page design
   Hero split + reconciliation ledger mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-entity section ·
   Platforms · FAQ · Closer · Support
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

/* ── Reconciliation ledger mockup ── */
const LEDGER_ENTRIES = [
  { ref: "TXN-80421", desc: "Wire transfer — Acme Corp", amount: "+$24,500.00", match: "matched" as const },
  { ref: "TXN-80422", desc: "Card payment — Azure Sub", amount: "-$1,240.00", match: "matched" as const },
  { ref: "TXN-80423", desc: "NEFT — Supplier INV-3391", amount: "-$8,750.00", match: "pending" as const },
  { ref: "TXN-80424", desc: "ACH deposit — Client retainer", amount: "+$15,000.00", match: "matched" as const },
  { ref: "TXN-80425", desc: "Duplicate debit — flagged", amount: "-$3,200.00", match: "flagged" as const },
  { ref: "TXN-80426", desc: "SWIFT — EUR conversion", amount: "+$41,870.00", match: "matched" as const },
] as const;

/* ── Finance operations ── */
const OPERATIONS = [
  { icon: <RefreshIcon />, t: "Auto-Reconciliation", s: "AI-powered bank reconciliation that matches transactions to invoices, payments, and journal entries automatically — handling partial payments, multi-currency conversions, and split transactions.", color: "ai" as const },
  { icon: <ShieldIcon />, t: "Fraud Detection", s: "Machine learning models that flag anomalous transactions, duplicate payments, unusual vendor patterns, and policy violations in real time — reducing financial fraud exposure by up to 70%.", color: "green" as const },
  { icon: <TargetIcon />, t: "Lead Scoring", s: "Predictive AI that scores prospects based on engagement signals, firmographic data, deal velocity, and conversion probability — so your sales team focuses on the deals most likely to close.", color: "purple" as const },
  { icon: <BarChartIcon />, t: "Revenue Analytics", s: "Real-time dashboards for revenue recognition, cash flow forecasting, margin analysis, and DSO tracking. Drill from company-level financials to individual transaction and client-level detail.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <RefreshIcon />, t: "Automated Bank Reconciliation", s: "AI matches bank statement lines to ERP transactions using reference numbers, amounts, dates, and counterparty names. Handles partial payments, split transactions, and multi-currency entries. Unmatched items are flagged for review — reducing manual reconciliation time by up to 85%." },
  { num: "02", icon: <ShieldIcon />, t: "AI Fraud Detection & AML", s: "ML models trained on your transaction data flag anomalies — duplicate invoices, unusual payment patterns, out-of-policy expenses, and potential money laundering signals. Risk scores assigned per transaction with automated escalation workflows and audit-ready investigation trails." },
  { num: "03", icon: <TargetIcon />, t: "Predictive Lead Scoring", s: "AI analyses CRM activity, email engagement, website behaviour, firmographic data, and historical win rates to score every lead. Automated lead routing based on score thresholds — hot leads to closers, warm leads to nurture sequences, cold leads to re-engagement campaigns." },
  { num: "04", icon: <WalletIcon />, t: "Revenue Recognition & Billing", s: "ASC 606 and IFRS 15 compliant revenue recognition across subscription, project, milestone, and usage-based billing models. Automated invoice generation, dunning sequences, and payment reminders — with multi-currency and multi-entity consolidation." },
  { num: "05", icon: <EyeIcon />, t: "KYC & Compliance Automation", s: "Automated Know Your Customer workflows — document collection, identity verification, risk assessment, and ongoing monitoring. Configurable for RBI, FCA, SEC, and DFSA regulatory frameworks with automated reporting and audit trails." },
  { num: "06", icon: <BarChartIcon />, t: "Financial Analytics & Forecasting", s: "Cash flow forecasting, budget-vs-actual analysis, and scenario modelling powered by ML. Real-time P&L, balance sheet, and cash flow dashboards with drill-down from consolidated financials to individual journal entries." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map financial workflows, compliance & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up reconciliation, AI models & rules" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer financial data with full audit trail" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-entity locations ── */
const ENTITIES = [
  { t: "Primary Holding Entity", sub: "Consolidated financials & group reporting", accounts: 240, active: true },
  { t: "Operating Subsidiary", sub: "Revenue operations & client billing", accounts: 85, active: true },
  { t: "Offshore Entity", sub: "Multi-currency & regulatory compliance", accounts: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo CRM", color: "#714B67" },
  { name: "Odoo Invoicing", color: "#714B67" },
  { name: "Plaid / Yodlee", color: "#00D084" },
  { name: "Stripe / Razorpay", color: "#635BFF" },
  { name: "Salesforce CRM", color: "#00A1E0" },
  { name: "Custom AI Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How does automated bank reconciliation handle partial payments?", a: "The AI matching engine identifies partial payments by comparing cumulative amounts against open invoices. When a bank line matches 60% of an invoice, the system creates a partial reconciliation and keeps the remaining balance open. Split payments across multiple invoices and multi-currency conversions are handled automatically — no manual journal entries required." },
  { q: "How does AI fraud detection reduce false positives?", a: "Our ML models are trained on your specific transaction patterns — not generic rules. The system learns what is normal for your business and only flags genuine anomalies. Risk scores are assigned per transaction, so your team can prioritise high-risk items. Feedback loops (marking false positives) improve the model continuously. Clients typically see 70% fewer false positives compared to rule-based systems." },
  { q: "Can lead scoring integrate with our existing CRM?", a: "Yes. We integrate with Odoo CRM, Salesforce, HubSpot, and Zoho CRM. Lead scores sync bidirectionally — the AI model pulls engagement data from your CRM and pushes scores back for routing and prioritisation. Sales teams see scores directly in their pipeline view." },
  { q: "Do you support multi-entity financial consolidation?", a: "Yes. We configure inter-company transactions, elimination entries, and multi-currency consolidation across parent and subsidiary entities. Each entity maintains its own chart of accounts, tax configuration, and regulatory compliance — while consolidated reporting rolls up automatically for group-level financials." },
  { q: "Is the system compliant with ASC 606 / IFRS 15 revenue recognition?", a: "Yes. We configure revenue recognition rules for subscription, milestone, percentage-of-completion, and usage-based models — fully compliant with ASC 606 and IFRS 15. Contract modifications, variable consideration, and multi-element arrangements are all supported with automated journal entries and disclosure reporting." },
  { q: "How long does a finance ERP implementation take?", a: "Single-entity setup with reconciliation and basic analytics takes 4–6 weeks. Full finance ERP with fraud detection, lead scoring, and compliance automation takes 10–16 weeks. Multi-entity operations with consolidation and regulatory reporting take 14–24 weeks." },
] as const;

/* ── Component ── */
export function FinanceServicesContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + reconciliation ledger right ═══ */}
      <section className="fs-hero">
        <div className="fs-hero-glow fs-hero-glow-1" aria-hidden="true" />
        <div className="fs-hero-glow fs-hero-glow-2" aria-hidden="true" />
        <div className="fs-hero-dots" aria-hidden="true" />
        <div className="fs-hero-inner">
          <div className="fs-hero-content">
            <div className="fs-hero-badge rev">
              <span className="fs-hero-badge-dot" />
              Finance &amp; Services
            </div>
            <h1 className="fs-hero-h rev">
              Finance &amp;<br />Services.<br />
              <span className="acc">Every transaction.<br />Every risk.<br />Managed.</span>
            </h1>
            <p className="fs-hero-sub rev">
              Automated bank reconciliation, AI fraud detection, predictive lead scoring, revenue recognition, and compliance automation — <strong>integrated into your ERP.</strong>
            </p>
            <div className="fs-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your finance audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="fs-hero-stats rev">
              <div className="fs-hero-stat">
                <span className="fs-hero-stat-n">85%</span>
                <span className="fs-hero-stat-l">Faster reconciliation</span>
              </div>
              <span className="fs-hero-stat-div" />
              <div className="fs-hero-stat">
                <span className="fs-hero-stat-n">70%</span>
                <span className="fs-hero-stat-l">Fewer fraud false positives</span>
              </div>
              <span className="fs-hero-stat-div" />
              <div className="fs-hero-stat">
                <span className="fs-hero-stat-n">3×</span>
                <span className="fs-hero-stat-l">Lead conversion lift</span>
              </div>
            </div>
          </div>

          {/* Reconciliation ledger mockup */}
          <div className="fs-ledger rev">
            <div className="fs-ledger-hdr">
              <div className="fs-ledger-live">
                <span className="fs-ledger-live-dot" />
                Live
              </div>
              <div className="fs-ledger-title">Auto-Reconciliation</div>
            </div>
            <div className="fs-ledger-list">
              {LEDGER_ENTRIES.map((e) => (
                <div key={e.ref} className={`fs-entry fs-entry-${e.match}`}>
                  <div className="fs-entry-top">
                    <span className="fs-entry-ref">{e.ref}</span>
                    <span className={`fs-entry-match fs-entry-match-${e.match}`}>
                      {e.match === "matched" ? "Matched" : e.match === "pending" ? "Pending" : "Flagged"}
                    </span>
                  </div>
                  <div className="fs-entry-desc">{e.desc}</div>
                  <div className={`fs-entry-amount${e.amount.startsWith("+") ? " credit" : " debit"}`}>{e.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="fs-ops">
        <div className="fs-ops-inner">
          <div className="fs-ops-hdr rev">
            <div className="eyebrow">Finance operations</div>
            <h2>Reconcile. Detect. Score.<br /><span>Report.</span></h2>
          </div>
          <div className="fs-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`fs-op fs-op-${op.color}`}>
                <div className="fs-op-icon">{op.icon}</div>
                <div className="fs-op-t">{op.t}</div>
                <p className="fs-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="fs-feat" id="features">
        <div className="fs-feat-inner">
          <div className="fs-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete financial control.</span></h2>
          </div>
          <div className="fs-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`fs-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="fs-feat-row-num">{f.num}</div>
                <div className="fs-feat-row-icon">{f.icon}</div>
                <div className="fs-feat-row-body">
                  <div className="fs-feat-row-t">{f.t}</div>
                  <p className="fs-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="fs-proc" id="process">
        <div className="fs-proc-inner">
          <div className="fs-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>intelligent finance.</span></h2>
          </div>
          <div className="fs-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="fs-proc-step-wrap">
                {i > 0 && <div className="fs-proc-dots" />}
                <div className="fs-proc-step">
                  <div className="fs-proc-step-icon">{p.icon}</div>
                  <div className="fs-proc-step-t">{p.t}</div>
                  <div className="fs-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want your finance <span>running on AI?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a finance engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-ENTITY — split ═══ */}
      <section className="fs-multi" id="multi-entity">
        <div className="fs-multi-inner">
          <div className="fs-multi-hdr rev">
            <div className="eyebrow lt">Multi-entity</div>
            <h2>One system.<br /><span>Every entity.</span></h2>
          </div>
          <div className="fs-multi-split rev">
            <div className="fs-multi-left">
              <div className="fs-multi-big-n">3+</div>
              <div className="fs-multi-big-l">Legal entities managed from one ERP</div>
              <p className="fs-multi-big-s">Holdings, subsidiaries, and offshore entities — all orchestrated from a single system with inter-company transactions, elimination entries, multi-currency consolidation, and unified group reporting.</p>
            </div>
            <div className="fs-multi-right">
              {ENTITIES.map((ent) => (
                <div key={ent.t} className={`fs-multi-loc${ent.active ? "" : " inactive"}`}>
                  <div className="fs-multi-loc-t">{ent.t}</div>
                  <div className="fs-multi-loc-sub">{ent.sub}</div>
                  {ent.accounts > 0 && <div className="fs-multi-loc-stat">{ent.accounts} GL accounts</div>}
                  {!ent.active && <div className="fs-multi-loc-stat">Regulatory integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="fs-plat">
        <div className="fs-plat-inner rev">
          <div className="fs-plat-label">Finance &amp; services integrations</div>
          <div className="fs-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="fs-plat-badge">
                <span className="fs-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="fs-faq" id="faq">
        <div className="fs-faq-inner">
          <div className="fs-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Finance &amp; Services ERP.</span></h2>
          </div>
          <div className="fs-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="fs-faq-item">
                <summary className="fs-faq-q">{f.q}</summary>
                <p className="fs-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your finance partner</div>
              <h3>Most ERPs track transactions,<br /><span>not financial intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">62%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of finance teams still reconcile bank statements manually.</strong>
                  Source: Deloitte CFO Survey, 2024. The result is delayed month-end close, undetected discrepancies, missed fraud signals, and zero predictive visibility into cash flow — problems that compound as transaction volume grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer finance deployment covers the full financial lifecycle — not just bookkeeping. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Automated reconciliation from day one</div>
                <p className="oi-closer-commit-b">Every bank statement line is auto-matched to your ERP transactions. Partial payments, multi-currency, and split entries handled automatically. Manual reconciliation becomes the exception, not the rule.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy &amp; speed targets</div>
                <p className="oi-closer-commit-b">Reconciliation match rates, fraud detection precision, and month-end close timelines are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">AI-first fraud &amp; compliance</div>
                <p className="oi-closer-commit-b">Every transaction is risk-scored by ML. Every compliance check is automated. No manual-only controls, no spreadsheet-based monitoring — data-driven financial governance.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior finance engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your financial workflows is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free finance audit</div>
              <h4>Get your finance ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your finance audit</span>
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
            <div className="eyebrow lt">Finance support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior finance engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For reconciliation rules, fraud model tuning, and compliance configuration questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Payment processing failures or reconciliation sync issues. Answered by a senior finance engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring finance ERP engineers and compliance automation specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior finance engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
