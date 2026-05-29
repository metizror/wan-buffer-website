/* ────────────────────────────────────────────────────────────────────────
   INDIA MARKET — unique page design
   Hero split + GST compliance dashboard mock · Operations cards ·
   Alternating feature rows · Dotted process flow · Multi-state section ·
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

/* ── GST compliance dashboard mockup ── */
const GST_ITEMS = [
  { return: "GSTR-1", period: "May 2026", invoices: 842, status: "filed" as const },
  { return: "GSTR-3B", period: "May 2026", invoices: 842, status: "filed" as const },
  { return: "E-Invoice", period: "Live", invoices: 127, status: "active" as const },
  { return: "E-Way Bill", period: "Live", invoices: 64, status: "active" as const },
  { return: "TDS Return", period: "Q1 FY27", invoices: 38, status: "pending" as const },
  { return: "TCS Return", period: "Q1 FY27", invoices: 15, status: "pending" as const },
] as const;

/* ── India operations ── */
const OPERATIONS = [
  { icon: <ShieldIcon />, t: "GST E-Invoicing & E-Way Bill", s: "Automated IRN generation via NIC portal, QR code embedding on invoices, and e-way bill creation from delivery orders — with GSTR-1 and GSTR-3B return preparation directly from your ERP.", color: "ai" as const },
  { icon: <WalletIcon />, t: "Razorpay & UPI Payments", s: "Official Razorpay integration for payment links, subscription billing, UPI autopay, and payment gateway checkout — with automatic reconciliation of settlements against ERP invoices.", color: "green" as const },
  { icon: <SettingsIcon />, t: "MRP & Manufacturing", s: "Full manufacturing ERP with multi-level BOM, production scheduling, work centre routing, and quality control — configured for Indian manufacturing with excise-era cost structures and PLI scheme tracking.", color: "purple" as const },
  { icon: <UsersIcon />, t: "India Payroll & Compliance", s: "EPF, ESI, professional tax, and income tax (TDS on salary) calculations per state — with automated monthly challans, Form 16 generation, and PF/ESI return filing integration.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <ShieldIcon />, t: "GST E-Invoicing & Returns", s: "Automated e-invoice generation via NIC API — IRN, QR code, and signed JSON for every B2B invoice. GSTR-1 auto-population from sales data, GSTR-3B summary preparation, and GSTR-2B reconciliation against purchase invoices. Multi-GSTIN support for businesses registered in multiple states." },
  { num: "02", icon: <WalletIcon />, t: "Razorpay & Payment Integration", s: "Official Razorpay partner integration — payment links on invoices, subscription billing with auto-charge, UPI autopay for recurring collections, and payment gateway for eCommerce checkout. Settlement reconciliation matches Razorpay payouts to ERP invoices automatically. Paytm, PhonePe, and NEFT/RTGS also supported." },
  { num: "03", icon: <SettingsIcon />, t: "MRP & Production for India", s: "Multi-level BOM with job-work (Section 143 of CGST) tracking, production scheduling across work centres, and quality inspection at each stage. Configured for Indian manufacturing — HSN code mapping, production incentive tracking (PLI scheme), and excise-equivalent cost allocation." },
  { num: "04", icon: <RefreshIcon />, t: "TDS/TCS Automation", s: "Automated TDS deduction on vendor payments (Section 194C, 194J, 194H, etc.) and TCS collection on sales (Section 206C). Quarterly return preparation (26Q, 27Q, 27EQ), Form 16/16A generation, and challan reconciliation — all from within your ERP." },
  { num: "05", icon: <UsersIcon />, t: "India Payroll — EPF, ESI & PT", s: "Salary structures per CTC with automatic EPF (12% employee + 12% employer), ESI (0.75% + 3.25%), professional tax per state, and income tax calculation. Monthly ECR file generation for PF, ESI challan preparation, and Form 16 generation at year-end." },
  { num: "06", icon: <BarChartIcon />, t: "India Business Analytics", s: "GST-ready P&L and balance sheet in Schedule III format. State-wise revenue analysis, HSN-wise sales summary, and MSME vendor payment monitoring (Section 43B(h)). Real-time dashboards for collection efficiency, GST liability, and input tax credit utilisation." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map business flows, GST & compliance gaps" },
  { icon: <SettingsIcon />, t: "Localise", s: "Configure GST, TDS, payroll & payments" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer data with opening balances & ITC" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-state locations ── */
const STATES = [
  { t: "Head Office — Gujarat", sub: "Manufacturing & corporate operations", gstins: 3, active: true },
  { t: "Branch — Maharashtra", sub: "Sales & distribution hub", gstins: 2, active: true },
  { t: "New State Expansion", sub: "Multi-state GST registration", gstins: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo MRP", color: "#714B67" },
  { name: "Razorpay", color: "#2D70F6" },
  { name: "GST NIC Portal", color: "#006A4E" },
  { name: "Tally Migration", color: "#D32011" },
  { name: "Custom India ERP", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you automate GST e-invoicing directly from Odoo?", a: "Yes. We configure direct NIC API integration — every B2B invoice above the threshold automatically generates an IRN, receives a signed QR code, and stores the JSON response. Credit notes and debit notes are also e-invoice enabled. Multi-GSTIN support means businesses registered in multiple states generate e-invoices under the correct GSTIN automatically." },
  { q: "How does Razorpay integration work with the ERP?", a: "We integrate Razorpay as an official partner — payment links are generated from ERP invoices, subscription billing auto-charges customers on schedule, and UPI autopay handles recurring collections. When Razorpay settles funds to your bank, the system auto-reconciles settlements against open invoices — no manual matching required." },
  { q: "Can you handle TDS on vendor payments and TCS on sales?", a: "Yes. TDS sections (194C, 194J, 194H, 194Q, etc.) are configured per vendor category with automatic deduction at payment time. TCS on sales (206C) applies per product category. Quarterly returns (26Q, 27Q, 27EQ), Form 16A certificates, and challan preparation are automated from within the ERP." },
  { q: "Do you support Indian payroll with EPF, ESI, and professional tax?", a: "Yes. Salary structures are configured per CTC with automatic calculation of EPF (employee and employer share), ESI contributions, professional tax per state, income tax (TDS on salary per slab), and LWF where applicable. Monthly ECR files for PF, ESI challans, and year-end Form 16 generation are all automated." },
  { q: "Can you migrate from Tally to Odoo?", a: "Yes. We have a proven Tally-to-Odoo migration methodology — chart of accounts mapping, opening balances with GST input credit, customer/vendor masters with GSTIN, inventory with HSN codes, and historical transaction data. Parallel run validates data accuracy before Tally is retired." },
  { q: "How long does an India ERP implementation take?", a: "Single-entity setup with GST, Razorpay, and basic payroll takes 3–5 weeks. Full India ERP with MRP, multi-GSTIN, TDS/TCS, and e-invoicing takes 8–14 weeks. Multi-state operations with Tally migration and manufacturing takes 12–20 weeks." },
] as const;

/* ── Component ── */
export function IndiaMarketContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + GST dashboard right ═══ */}
      <section className="in-hero">
        <div className="in-hero-glow in-hero-glow-1" aria-hidden="true" />
        <div className="in-hero-glow in-hero-glow-2" aria-hidden="true" />
        <div className="in-hero-dots" aria-hidden="true" />
        <div className="in-hero-inner">
          <div className="in-hero-content">
            <div className="in-hero-badge rev">
              <span className="in-hero-badge-dot" />
              India Market
            </div>
            <h1 className="in-hero-h rev">
              India<br />Market.<br />
              <span className="acc">Every GSTIN.<br />Every state.<br />Compliant.</span>
            </h1>
            <p className="in-hero-sub rev">
              GST e-invoicing, Razorpay payments, TDS/TCS automation, MRP for manufacturing, and India payroll — <strong>built into your ERP.</strong>
            </p>
            <div className="in-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your India ERP audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="in-hero-stats rev">
              <div className="in-hero-stat">
                <span className="in-hero-stat-n">100%</span>
                <span className="in-hero-stat-l">GST compliant</span>
              </div>
              <span className="in-hero-stat-div" />
              <div className="in-hero-stat">
                <span className="in-hero-stat-n">28+</span>
                <span className="in-hero-stat-l">States supported</span>
              </div>
              <span className="in-hero-stat-div" />
              <div className="in-hero-stat">
                <span className="in-hero-stat-n">Razorpay</span>
                <span className="in-hero-stat-l">Official partner</span>
              </div>
            </div>
          </div>

          {/* GST compliance dashboard mockup */}
          <div className="in-gst rev">
            <div className="in-gst-hdr">
              <div className="in-gst-live">
                <span className="in-gst-live-dot" />
                Live
              </div>
              <div className="in-gst-title">GST Compliance</div>
            </div>
            <div className="in-gst-grid">
              {GST_ITEMS.map((g) => (
                <div key={g.return} className={`in-gst-row in-gst-row-${g.status}`}>
                  <div className="in-gst-row-top">
                    <span className="in-gst-row-name">{g.return}</span>
                    <span className={`in-gst-row-status in-gst-row-status-${g.status}`}>
                      {g.status === "filed" ? "Filed" : g.status === "active" ? "Active" : "Pending"}
                    </span>
                  </div>
                  <div className="in-gst-row-mid">
                    <span className="in-gst-row-period">{g.period}</span>
                    <span className="in-gst-row-count">{g.invoices} docs</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="in-ops">
        <div className="in-ops-inner">
          <div className="in-ops-hdr rev">
            <div className="eyebrow">India operations</div>
            <h2>Invoice. Collect. Manufacture.<br /><span>Comply.</span></h2>
          </div>
          <div className="in-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`in-op in-op-${op.color}`}>
                <div className="in-op-icon">{op.icon}</div>
                <div className="in-op-t">{op.t}</div>
                <p className="in-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="in-feat" id="features">
        <div className="in-feat-inner">
          <div className="in-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete India readiness.</span></h2>
          </div>
          <div className="in-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`in-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="in-feat-row-num">{f.num}</div>
                <div className="in-feat-row-icon">{f.icon}</div>
                <div className="in-feat-row-body">
                  <div className="in-feat-row-t">{f.t}</div>
                  <p className="in-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="in-proc" id="process">
        <div className="in-proc-inner">
          <div className="in-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>India-ready ERP.</span></h2>
          </div>
          <div className="in-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="in-proc-step-wrap">
                {i > 0 && <div className="in-proc-dots" />}
                <div className="in-proc-step">
                  <div className="in-proc-step-icon">{p.icon}</div>
                  <div className="in-proc-step-t">{p.t}</div>
                  <div className="in-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to go live</div>
              <h3>Want your ERP <span>India-compliant?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an India ERP engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-STATE — split ═══ */}
      <section className="in-multi" id="multi-state">
        <div className="in-multi-inner">
          <div className="in-multi-hdr rev">
            <div className="eyebrow lt">Multi-state</div>
            <h2>One system.<br /><span>Every state.</span></h2>
          </div>
          <div className="in-multi-split rev">
            <div className="in-multi-left">
              <div className="in-multi-big-n">28+</div>
              <div className="in-multi-big-l">Indian states supported from one ERP</div>
              <p className="in-multi-big-s">Multi-GSTIN registration, state-wise professional tax, inter-state e-way bills, and branch-level P&amp;L — all orchestrated from a single system with unified GST reporting and consolidated financials.</p>
            </div>
            <div className="in-multi-right">
              {STATES.map((st) => (
                <div key={st.t} className={`in-multi-loc${st.active ? "" : " inactive"}`}>
                  <div className="in-multi-loc-t">{st.t}</div>
                  <div className="in-multi-loc-sub">{st.sub}</div>
                  {st.gstins > 0 && <div className="in-multi-loc-stat">{st.gstins} GSTINs active</div>}
                  {!st.active && <div className="in-multi-loc-stat">Registration ready</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="in-plat">
        <div className="in-plat-inner rev">
          <div className="in-plat-label">India market integrations</div>
          <div className="in-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="in-plat-badge">
                <span className="in-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="in-faq" id="faq">
        <div className="in-faq-inner">
          <div className="in-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>India Market ERP.</span></h2>
          </div>
          <div className="in-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="in-faq-item">
                <summary className="in-faq-q">{f.q}</summary>
                <p className="in-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your India ERP partner</div>
              <h3>Most ERPs bolt on GST,<br /><span>not build it in.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">67%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of Indian businesses still file GST returns from data outside their ERP.</strong>
                  Source: ClearTax Industry Report, 2024. The result is reconciliation gaps, missed ITC, TDS errors, and audit notices — problems that multiply every filing cycle.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer India deployment covers full GST compliance from within the ERP — not via external tools. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">GST e-invoicing &amp; returns from day one</div>
                <p className="oi-closer-commit-b">Every B2B invoice generates an IRN automatically. GSTR-1, GSTR-3B, and GSTR-2B reconciliation run from within the ERP — no external filing tools, no data exports, no reconciliation gaps.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed compliance targets</div>
                <p className="oi-closer-commit-b">E-invoice success rate, GSTR filing accuracy, TDS deduction completeness, and reconciliation match rate are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Razorpay &amp; UPI from within your ERP</div>
                <p className="oi-closer-commit-b">Payment links, subscription billing, UPI autopay, and settlement reconciliation — all integrated. Customers pay from your invoice. Settlements match automatically. No manual bank reconciliation.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior India ERP engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your Indian business is the one who configures GST, payroll, MRP, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free India audit</div>
              <h4>Get your India ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your India audit</span>
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
            <div className="eyebrow lt">India support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior India ERP engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For GST setup, Razorpay configuration, and payroll compliance questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">E-invoice failures or GST filing sync issues. Answered by a senior India ERP engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring India ERP engineers and GST compliance specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior India engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> GST compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
