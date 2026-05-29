/* ────────────────────────────────────────────────────────────────────────
   FINANCE & ACCOUNTING — unique page design
   Centered hero + P&L card · Capability grid · Region compliance
   bands · Automation split · Process bar · Platforms · FAQ ·
   Closer · Support
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

/* ── P&L mockup ── */
const PL_ROWS = [
  { label: "Revenue", value: "₹2,84,50,000", type: "revenue" as const },
  { label: "Cost of Goods Sold", value: "₹1,42,18,000", type: "expense" as const },
  { label: "Gross Profit", value: "₹1,42,32,000", type: "subtotal" as const },
  { label: "Operating Expenses", value: "₹68,40,000", type: "expense" as const },
  { label: "Net Profit", value: "₹73,92,000", type: "profit" as const },
] as const;

/* ── Capabilities ── */
const CAPABILITIES = [
  { icon: <WalletIcon />, num: "01", t: "Accounts Payable & Receivable", s: "Automated invoice processing, payment scheduling, ageing analysis, and dunning sequences. AP and AR workflows that reduce manual effort by 80% while eliminating payment delays." },
  { icon: <DatabaseIcon />, num: "02", t: "Bank Reconciliation", s: "Automated bank feed imports, AI-powered transaction matching, and exception flagging. Daily reconciliation instead of monthly — closing the books in hours, not weeks." },
  { icon: <RefreshIcon />, num: "03", t: "Multi-Currency Operations", s: "Real-time exchange rate updates, automatic gain/loss calculations, and multi-currency reporting. Handle transactions in any currency — your books stay accurate across borders." },
  { icon: <BarChartIcon />, num: "04", t: "Financial Reporting", s: "P&L, balance sheet, cash flow, trial balance, and custom reports — generated in real time. Schedule auto-delivery to leadership. Drill from summary to individual journal entries." },
  { icon: <MonitorIcon />, num: "05", t: "Financial Consolidation", s: "Consolidate financials across multiple entities, subsidiaries, and currencies into a single view. Inter-company eliminations and minority interest calculations handled automatically." },
  { icon: <ShieldIcon />, num: "06", t: "Budgeting & Cost Control", s: "Set budgets by department, project, or cost centre. Track actuals vs budget in real time. Automated alerts when spend approaches thresholds — before the budget is blown." },
] as const;

/* ── Regional compliance ── */
const REGIONS = [
  { region: "India", color: "#FF9933", items: ["GST e-invoicing with IRN", "GSTR-1, 3B, 9 auto-filing", "TDS/TCS auto-deduction", "Input Tax Credit reconciliation", "Multi-state registration"] },
  { region: "GCC & Middle East", color: "#00A1E0", items: ["UAE VAT compliance", "Saudi Arabia VAT", "Kuwait & Bahrain tax", "Arabic-language invoicing", "WPS payroll integration"] },
  { region: "USA & Europe", color: "#7C3AED", items: ["GAAP & IFRS compliance", "Multi-state sales tax", "EU VAT reverse charge", "GDPR financial data handling", "1099 / W-2 reporting"] },
] as const;

/* ── Automation metrics ── */
const AUTO_METRIC = { n: "70%", l: "Faster month-end close", sub: "Average reduction in month-end closing time across our finance implementations — from 12 days to under 4 days." };
const AUTO_FEATURES = [
  { icon: <ZapIcon />, t: "Automated journal entries from sales, purchases, and inventory" },
  { icon: <RefreshIcon />, t: "Daily bank reconciliation with AI matching" },
  { icon: <MailIcon />, t: "Scheduled report generation and email distribution" },
  { icon: <ShieldIcon />, t: "Tax calculation and filing with zero manual intervention" },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Audit", s: "Map chart of accounts & current processes" },
  { num: "02", t: "Configure", s: "Set up modules, tax rules & workflows" },
  { num: "03", t: "Migrate", s: "Transfer balances, masters & history" },
  { num: "04", t: "Go live", s: "Parallel run, validate & switch over" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Zoho Books", color: "#2F855A" },
  { name: "SAP FICO", color: "#0070F2" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Xero", color: "#13B5EA" },
  { name: "Tally", color: "#264C8D" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Which ERP platforms do you implement for finance?", a: "We implement finance modules on Odoo, Zoho Books, SAP FICO, QuickBooks, Xero, and Tally. Our recommendation depends on your organisation size, compliance requirements, and existing tech stack." },
  { q: "Can you handle multi-country, multi-currency operations?", a: "Yes. We configure multi-currency transactions, automatic exchange rate updates, gain/loss calculations, and multi-entity consolidation. Common for businesses operating across India, UAE, USA, and Europe." },
  { q: "Do you support Indian GST e-invoicing?", a: "Yes. We configure GST e-invoicing with IRN generation, automated GSTR-1/3B/9 filing, TDS/TCS deduction, Input Tax Credit reconciliation, and multi-state GST registration — all within your ERP." },
  { q: "How do you handle data migration from legacy accounting systems?", a: "We migrate opening balances, chart of accounts, customer/vendor masters, outstanding invoices, and historical transactions — with full validation, reconciliation, and audit trail." },
  { q: "Can you automate month-end closing?", a: "Yes. We automate journal entries, accruals, depreciation, reconciliation, and report generation — reducing month-end close from weeks to days. Pre/post-close checklists are built into the workflow." },
  { q: "What ongoing support do you provide?", a: "Every implementation includes 90 days of hypercare. After that, we offer SLA-based support — tax rule updates, configuration changes, year-end closing support, and quarterly health checks." },
] as const;

/* ── Component ── */
export function FinanceAccountingContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + P&L card ═══ */}
      <section className="fa-hero">
        <div className="fa-hero-glow fa-hero-glow-1" aria-hidden="true" />
        <div className="fa-hero-glow fa-hero-glow-2" aria-hidden="true" />
        <div className="fa-hero-inner">
          <div className="fa-hero-badge rev">
            <span className="fa-hero-badge-dot" />
            Finance &amp; accounting
          </div>
          <h1 className="fa-hero-h rev">
            Finance &amp;<br />
            <span className="acc">Accounting.</span>
          </h1>
          <p className="fa-hero-sub rev">
            Multi-currency operations, GST e-invoicing, GCC VAT compliance, bank reconciliation, and financial consolidation — <strong>end-to-end ERP finance</strong> across Odoo, Zoho, SAP, and QuickBooks.
          </p>
          <div className="fa-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your finance audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#capabilities">See capabilities</a>
          </div>

          {/* P&L card */}
          <div className="fa-pl rev">
            <div className="fa-pl-bar">Profit &amp; Loss — FY 2025–26</div>
            {PL_ROWS.map((r) => (
              <div key={r.label} className={`fa-pl-row fa-pl-${r.type}`}>
                <span className="fa-pl-label">{r.label}</span>
                <span className="fa-pl-value">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — numbered grid ═══ */}
      <section className="fa-caps" id="capabilities">
        <div className="fa-caps-inner">
          <div className="fa-caps-hdr rev">
            <div className="eyebrow">Core capabilities</div>
            <h2>Six finance modules.<br /><span>Complete control.</span></h2>
            <p>Every module is configured for your chart of accounts, tax jurisdiction, and approval hierarchy — not a generic accounting setup.</p>
          </div>
          <div className="fa-caps-grid rev">
            {CAPABILITIES.map((c) => (
              <div key={c.num} className="fa-cap">
                <div className="fa-cap-num">{c.num}</div>
                <div className="fa-cap-icon">{c.icon}</div>
                <div className="fa-cap-t">{c.t}</div>
                <p className="fa-cap-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ REGIONAL COMPLIANCE — 3 bands ═══ */}
      <section className="fa-regions" id="compliance">
        <div className="fa-regions-inner">
          <div className="fa-regions-hdr rev">
            <div className="eyebrow lt">Regional compliance</div>
            <h2>Tax rules for<br /><span>every market.</span></h2>
          </div>
          <div className="fa-regions-list">
            {REGIONS.map((r) => (
              <div key={r.region} className="fa-region rev" style={{ borderLeftColor: r.color }}>
                <div className="fa-region-name" style={{ color: r.color }}>{r.region}</div>
                <div className="fa-region-items">
                  {r.items.map((item) => (
                    <span key={item.slice(0, 20)} className="fa-region-item"><CheckIcon />{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATION — split ═══ */}
      <section className="fa-auto" id="automation">
        <div className="fa-auto-inner">
          <div className="fa-auto-hdr rev">
            <div className="eyebrow">Automation</div>
            <h2>Automate the close.<br /><span>Free your finance team.</span></h2>
          </div>
          <div className="fa-auto-split rev">
            <div className="fa-auto-left">
              <div className="fa-auto-big-n">{AUTO_METRIC.n}</div>
              <div className="fa-auto-big-l">{AUTO_METRIC.l}</div>
              <p className="fa-auto-big-s">{AUTO_METRIC.sub}</p>
            </div>
            <div className="fa-auto-right">
              {AUTO_FEATURES.map((f) => (
                <div key={f.t.slice(0, 25)} className="fa-auto-feat">
                  <div className="fa-auto-feat-icon">{f.icon}</div>
                  <span>{f.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="fa-proc" id="process">
        <div className="fa-proc-inner">
          <div className="fa-proc-hdr rev">
            <div className="eyebrow lt">Implementation</div>
            <h2>Four steps to<br /><span>automated finance.</span></h2>
          </div>
          <div className="fa-proc-bar rev">
            {PROCESS.map((p) => (
              <div key={p.num} className="fa-proc-step">
                <div className="fa-proc-step-num">{p.num}</div>
                <div className="fa-proc-step-t">{p.t}</div>
                <div className="fa-proc-step-s">{p.s}</div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want your finance on <span>autopilot?</span></h3>
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

      {/* ═══ PLATFORMS ═══ */}
      <section className="fa-plat">
        <div className="fa-plat-inner rev">
          <div className="fa-plat-label">ERP finance platforms we implement</div>
          <div className="fa-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="fa-plat-badge">
                <span className="fa-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="fa-faq" id="faq">
        <div className="fa-faq-inner">
          <div className="fa-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>ERP finance.</span></h2>
          </div>
          <div className="fa-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="fa-faq-item">
                <summary className="fa-faq-q">{f.q}</summary>
                <p className="fa-faq-a">{f.a}</p>
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
              <h3>Most ERP finance setups<br /><span>automate invoicing, not the close.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">58%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of finance teams still close books manually each month.</strong>
                  Source: BlackLine, 2024. The problem is ERP setups that automate invoice creation but leave reconciliation, accruals, and reporting as manual spreadsheet exercises.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer finance deployment automates the full cycle — from journal entry to consolidated report.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Full-cycle automation</div>
                <p className="oi-closer-commit-b">From journal entries through reconciliation to consolidated reporting — every step automated, not just AP and AR.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Tax compliance built in</div>
                <p className="oi-closer-commit-b">GST, VAT, TDS, sales tax — configured and tested before go-live. Regulation updates applied automatically. Audit-ready from day one.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Close time, reconciliation accuracy, and reporting delivery are defined before development. If we miss targets, we keep iterating.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior finance consultants</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who audits your books is the one who configures, migrates, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free finance audit</div>
              <h4>Get your finance roadmap in <span>48 hours.</span></h4>
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
              <p className="oi-supp-body-v2">For tax rules, reconciliation, and reporting questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Bank feed failures, tax filing issues, or closing deadlines. Answered by a senior finance consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP finance consultants and accounting specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior finance consultants</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Tax compliance built in</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
