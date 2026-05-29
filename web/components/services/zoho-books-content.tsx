/* ────────────────────────────────────────────────────────────────────────
   ZOHO BOOKS & FINANCE — unique page design
   Centered hero + ledger mockup · Finance module grid · Tax compliance
   showcase · Automation cards with stat bars · Receipt-style process ·
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
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Ledger mockup ── */
const LEDGER_ROWS = [
  { date: "15 Mar", desc: "Invoice #INV-4821", debit: "₹4,82,350", credit: "—", balance: "₹12,45,800" },
  { date: "16 Mar", desc: "Vendor payment — Alpha Ltd", debit: "—", credit: "₹1,28,000", balance: "₹11,17,800" },
  { date: "18 Mar", desc: "GST collected — Q4", debit: "₹86,823", credit: "—", balance: "₹12,04,623" },
  { date: "20 Mar", desc: "Bank reconciliation adjustment", debit: "—", credit: "₹2,450", balance: "₹12,02,173" },
] as const;

/* ── Finance modules ── */
const MODULES = [
  { icon: <WalletIcon />, num: "01", t: "Invoicing & Billing", s: "Automated invoice generation, recurring billing, payment reminders, and multi-currency support. Invoices generate from sales orders, match to deliveries, and track payment status — all within Zoho Books." },
  { icon: <DatabaseIcon />, num: "02", t: "Bank Reconciliation", s: "Connect bank feeds directly to Zoho Books. AI-powered matching categorises transactions automatically, flags discrepancies, and reconciles accounts daily — not monthly." },
  { icon: <ShieldIcon />, num: "03", t: "GST & VAT Compliance", s: "Automated GST e-invoicing, GSTR filing, Input Tax Credit tracking, and VAT calculations for GCC markets. Tax rules update automatically when regulations change." },
  { icon: <BarChartIcon />, num: "04", t: "Financial Reporting", s: "Profit & loss, balance sheet, cash flow, ageing reports, and custom dashboards — generated in real time from live transactional data. Schedule and auto-distribute to stakeholders." },
  { icon: <PackageIcon />, num: "05", t: "Expense Management", s: "Employee expense submissions, receipt OCR, policy-based approval routing, and automatic reimbursement posting. Expense data flows directly into your general ledger." },
  { icon: <RefreshIcon />, num: "06", t: "Multi-Entity & Multi-Currency", s: "Manage multiple companies, branches, or subsidiaries from a single Zoho Books instance. Inter-company transactions, currency conversion, and consolidated reporting built in." },
] as const;

/* ── Tax compliance details ── */
const TAX_FEATURES = [
  "GST e-invoicing with IRN generation",
  "GSTR-1, GSTR-3B, and GSTR-9 auto-filing",
  "Input Tax Credit reconciliation",
  "GCC VAT compliance (UAE, Saudi, Kuwait)",
  "TDS/TCS calculation and deduction",
  "Multi-state GST registration support",
] as const;

/* ── Automation cards ── */
const AUTOMATIONS = [
  { icon: <ZapIcon />, t: "Invoice Automation", s: "Invoices generate from sales orders, apply tax rules, attach supporting documents, and email to clients — zero manual steps from order to collection.", percent: 85 },
  { icon: <RefreshIcon />, t: "Reconciliation Automation", s: "Bank feeds import daily, AI matches transactions to ledger entries, and exception reports flag unmatched items for review. Monthly close drops from days to hours.", percent: 90 },
  { icon: <MailIcon />, t: "Payment Follow-Up", s: "Automated payment reminders trigger at configurable intervals. Overdue invoices escalate to collections workflows. Cash application posts automatically on receipt.", percent: 78 },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Audit existing books", b: "We audit your current accounting setup — chart of accounts, tax configuration, bank connections, and reporting gaps." },
  { num: "02", t: "Configure Zoho Books", b: "Chart of accounts, tax rules, invoice templates, approval workflows, and bank feed connections — configured to match your exact financial operations." },
  { num: "03", t: "Migrate financial data", b: "Opening balances, customer/vendor records, historical transactions, and outstanding invoices — migrated with full validation and reconciliation." },
  { num: "04", t: "Integrate systems", b: "Connect Zoho Books to CRM, Inventory, Payroll, eCommerce, and payment gateways — real-time sync, no batch jobs." },
  { num: "05", t: "Train & go live", b: "Role-based training for accountants, managers, and approvers. Parallel-run validation before full switchover." },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can Zoho Books handle Indian GST compliance?", a: "Yes. Zoho Books supports GST e-invoicing with IRN generation, automated GSTR-1/3B/9 filing, Input Tax Credit reconciliation, TDS/TCS calculations, and multi-state GST registration. Tax rules update automatically when GSTN regulations change." },
  { q: "Does Zoho Books integrate with bank accounts?", a: "Yes. Zoho Books connects directly to bank feeds via Yodlee and open banking APIs. Transactions import daily, AI auto-categorises them, and reconciliation highlights unmatched entries for review." },
  { q: "Can you migrate data from Tally, QuickBooks, or spreadsheets?", a: "Yes. We handle full migration from Tally, QuickBooks, Xero, and spreadsheets — including chart of accounts, opening balances, customer/vendor masters, historical transactions, and outstanding invoices with full validation." },
  { q: "Is Zoho Books suitable for multi-entity businesses?", a: "Yes. Zoho Books supports multiple organisations from a single account. Inter-company transactions, multi-currency, and consolidated financial reporting across entities are built in." },
  { q: "What integrations does Zoho Books support?", a: "Zoho Books integrates with Zoho CRM, Zoho Inventory, Zoho People, Shopify, Razorpay, Stripe, PayPal, Google Workspace, Slack, and custom applications via API and Zoho Flow." },
  { q: "What ongoing support do you provide after implementation?", a: "Every implementation includes 90 days of hypercare — configuration adjustments, tax rule updates, and user support. After that, we offer SLA-based annual maintenance contracts." },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Zoho Books", color: "#2F855A" },
  { name: "Zoho Invoice", color: "#D32011" },
  { name: "Zoho Expense", color: "#E65100" },
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Zoho Inventory", color: "#0277BD" },
  { name: "Razorpay", color: "#3395FF" },
  { name: "Tally", color: "#264C8D" },
  { name: "Stripe", color: "#635BFF" },
] as const;

/* ── Component ── */
export function ZohoBooksContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + ledger mockup ═══ */}
      <section className="zb-hero">
        <div className="zb-hero-glow zb-hero-glow-1" aria-hidden="true" />
        <div className="zb-hero-glow zb-hero-glow-2" aria-hidden="true" />
        <div className="zb-hero-inner">
          <div className="zb-hero-badge rev">
            <span className="zb-hero-badge-dot" />
            Zoho Books &amp; Finance
          </div>
          <h1 className="zb-hero-h rev">
            Zoho Books<br />
            <span className="acc">&amp; Finance.</span>
          </h1>
          <p className="zb-hero-sub rev">
            Automated invoicing, bank reconciliation, GST/VAT compliance, and financial reporting — <strong>end-to-end accounting automation</strong> built on Zoho Books, configured for your business.
          </p>
          <div className="zb-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your finance audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#services">See our services</a>
          </div>

          {/* Ledger mockup */}
          <div className="zb-ledger rev">
            <div className="zb-ledger-bar">
              <span className="zb-ledger-bar-title">General Ledger — March 2026</span>
            </div>
            <div className="zb-ledger-head">
              <span>Date</span><span>Description</span><span>Debit</span><span>Credit</span><span>Balance</span>
            </div>
            {LEDGER_ROWS.map((r) => (
              <div key={r.desc} className="zb-ledger-row">
                <span className="zb-ledger-date">{r.date}</span>
                <span className="zb-ledger-desc">{r.desc}</span>
                <span className="zb-ledger-debit">{r.debit}</span>
                <span className="zb-ledger-credit">{r.credit}</span>
                <span className="zb-ledger-bal">{r.balance}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MODULES — 2×3 grid ═══ */}
      <section className="zb-mods" id="services">
        <div className="zb-mods-inner">
          <div className="zb-mods-hdr rev">
            <div className="eyebrow">Finance modules</div>
            <h2>Six modules.<br /><span>Complete financial control.</span></h2>
            <p>Every module is configured for your specific chart of accounts, tax rules, and approval hierarchies. Not a generic accounting setup — a finance system built for how your business actually operates.</p>
          </div>
          <div className="zb-mods-grid rev">
            {MODULES.map((m) => (
              <div key={m.num} className="zb-mod">
                <div className="zb-mod-num">{m.num}</div>
                <div className="zb-mod-icon">{m.icon}</div>
                <div className="zb-mod-t">{m.t}</div>
                <p className="zb-mod-s">{m.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TAX COMPLIANCE — focused dark section ═══ */}
      <section className="zb-tax">
        <div className="zb-tax-inner rev">
          <div className="zb-tax-left">
            <div className="zb-tax-icon-wrap"><ShieldIcon /></div>
            <div className="eyebrow lt">Tax compliance</div>
            <h2>GST, VAT &amp; TDS.<br /><span>Automated.</span></h2>
            <p>Tax compliance isn&apos;t a feature we bolt on — it&apos;s engineered into every transaction. From GST e-invoicing in India to VAT calculations in the GCC, your books stay compliant without manual intervention.</p>
          </div>
          <div className="zb-tax-right">
            {TAX_FEATURES.map((f) => (
              <div key={f.slice(0, 25)} className="zb-tax-item">
                <CheckCircleIcon />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATION — cards with stat bars ═══ */}
      <section className="zb-auto" id="automation">
        <div className="zb-auto-inner">
          <div className="zb-auto-hdr rev">
            <div className="eyebrow">Automation</div>
            <h2>Automate the work<br /><span>your accountants hate.</span></h2>
          </div>
          <div className="zb-auto-grid rev">
            {AUTOMATIONS.map((a) => (
              <div key={a.t} className="zb-auto-card">
                <div className="zb-auto-card-icon">{a.icon}</div>
                <div className="zb-auto-card-t">{a.t}</div>
                <p className="zb-auto-card-s">{a.s}</p>
                <div className="zb-auto-card-stat">
                  <div className="zb-auto-card-stat-bar">
                    <div className="zb-auto-card-stat-fill" style={{ width: `${a.percent}%` }} />
                  </div>
                  <span className="zb-auto-card-stat-n">{a.percent}%</span>
                  <span className="zb-auto-card-stat-l">Automation rate</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — receipt-style vertical ═══ */}
      <section className="zb-proc" id="process">
        <div className="zb-proc-inner">
          <div className="zb-proc-hdr rev">
            <div className="eyebrow lt">Implementation process</div>
            <h2>Five steps to<br /><span>automated finance.</span></h2>
          </div>
          <div className="zb-proc-list">
            {PROCESS.map((p, i) => (
              <div key={p.num} className="zb-proc-item rev">
                <div className="zb-proc-item-num">{p.num}</div>
                <div className="zb-proc-item-body">
                  <div className="zb-proc-item-t">{p.t}</div>
                  <p className="zb-proc-item-b">{p.b}</p>
                </div>
                {i < PROCESS.length - 1 && <div className="zb-proc-item-dashes" />}
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want Zoho Books configured for <span>your finance team?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a finance consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ INTEGRATIONS ═══ */}
      <section className="zb-int">
        <div className="zb-int-inner rev">
          <div className="zb-int-label">Connects with your finance stack</div>
          <div className="zb-int-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="zb-int-badge">
                <span className="zb-int-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="zb-faq" id="faq">
        <div className="zb-faq-inner">
          <div className="zb-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Zoho Books implementation.</span></h2>
          </div>
          <div className="zb-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="zb-faq-item">
                <summary className="zb-faq-q">{f.q}</summary>
                <p className="zb-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your finance partner</div>
              <h3>Most accounting automation<br /><span>digitises paperwork, not processes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">55%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of finance teams still close books manually each month.</strong>
                  Source: BlackLine, 2024. The problem isn&apos;t the software — it&apos;s implementations that automate invoice creation without automating reconciliation, approvals, and reporting.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer finance deployment automates the full cycle — from invoice to reconciliation to reporting. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Full-cycle automation</div>
                <p className="oi-closer-commit-b">Invoice creation, approval routing, payment tracking, bank reconciliation, and financial reporting — every step automated, not just the first one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Tax compliance built in</div>
                <p className="oi-closer-commit-b">GST, VAT, TDS/TCS rules configured and tested before go-live. Tax regulation updates applied automatically — no manual rule maintenance.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Reconciliation accuracy, invoice processing speed, and month-end close time are defined before development. If we miss targets, we keep iterating.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior finance consultants</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who audits your books is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free finance audit</div>
              <h4>Get your Zoho Books roadmap in <span>48 hours.</span></h4>
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
            <p>Three channels. Senior finance consultants. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For tax configuration, reconciliation rules, and reporting questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Bank feed failures or tax filing issues. Answered by a senior finance consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring Zoho finance consultants and integration developers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior finance consultants</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
