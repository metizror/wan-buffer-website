/* ────────────────────────────────────────────────────────────────────────
   AUTOMATED INVOICE PROCESSING — unique page design
   Centered hero + invoice doc mockup · Step strip · Gradient-top
   capability cards · Comparison table · Dark stat row ·
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

/* ── Invoice document mockup fields ── */
const INVOICE_FIELDS = [
  { label: "Vendor", value: "Alpha Industrial Ltd.", confidence: 98 },
  { label: "Invoice #", value: "INV-2026-04871", confidence: 99 },
  { label: "Amount", value: "₹4,82,350.00", confidence: 97 },
  { label: "Date", value: "12 Mar 2026", confidence: 99 },
  { label: "PO Reference", value: "PO-7821", confidence: 96 },
  { label: "Due Date", value: "11 Apr 2026", confidence: 98 },
] as const;

/* ── Processing pipeline steps ── */
const PIPELINE = [
  { num: "01", t: "Receive", icon: <MailIcon /> },
  { num: "02", t: "Extract", icon: <SearchIcon /> },
  { num: "03", t: "Match", icon: <DatabaseIcon /> },
  { num: "04", t: "Approve", icon: <CheckCircleIcon /> },
  { num: "05", t: "Post", icon: <WalletIcon /> },
] as const;

/* ── Capabilities ── */
const CAPABILITIES = [
  { icon: <SearchIcon />, t: "AI-Powered OCR", s: "Extract vendor name, invoice number, line items, amounts, tax, and dates from any format — PDF, scan, photo, or email attachment. No templates needed. The AI learns your vendor formats automatically.", gradient: "ai" as const },
  { icon: <DatabaseIcon />, t: "Intelligent 3-Way Match", s: "Automatically match invoices against purchase orders and goods receipts. Discrepancies are flagged with specific mismatch details — quantity, price, or delivery date — and routed for resolution.", gradient: "purple" as const },
  { icon: <CheckCircleIcon />, t: "Smart Approval Routing", s: "Invoices route to the right approver based on amount, department, vendor, and exception type. Approval hierarchies mirror your ERP permission model — no configuration drift.", gradient: "ai" as const },
  { icon: <ShieldIcon />, t: "Fraud Detection", s: "ML models flag duplicate invoices, suspicious amounts, unusual vendors, and payment pattern anomalies before they reach approval. Every flag includes reasoning for the reviewer.", gradient: "red" as const },
  { icon: <WalletIcon />, t: "Auto Payment Scheduling", s: "Approved invoices automatically schedule for payment based on vendor terms, early-payment discounts, and cash flow optimisation rules. ERP journal entries post without manual intervention.", gradient: "purple" as const },
  { icon: <MonitorIcon />, t: "Real-Time AP Dashboard", s: "Live visibility into invoice status, approval bottlenecks, ageing analysis, and cash flow impact. Drill down from summary to individual invoice with one click.", gradient: "red" as const },
] as const;

/* ── Before / After comparison ── */
const COMPARISONS = [
  { metric: "Processing time per invoice", before: "45 minutes", after: "< 30 seconds" },
  { metric: "Data entry errors", before: "15–23%", after: "< 0.5%" },
  { metric: "3-way match rate", before: "Manual · 2 hrs", after: "Auto · instant" },
  { metric: "Approval cycle", before: "48 hours", after: "< 2 hours" },
  { metric: "Cost per invoice", before: "₹120–180", after: "₹8–12" },
  { metric: "Touchless rate", before: "0%", after: "78%" },
] as const;

/* ── Results ── */
const STATS = [
  { icon: <ZapIcon />, n: "78%", l: "Touchless processing" },
  { icon: <ClockIcon />, n: "<30s", l: "Avg processing time" },
  { icon: <ShieldIcon />, n: "99.5%", l: "Extraction accuracy" },
  { icon: <TrendingUpIcon />, n: "12×", l: "Faster than manual" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho Books", color: "#D32011" },
  { name: "SAP", color: "#0070F2" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Xero", color: "#13B5EA" },
  { name: "Tally", color: "#264C8D" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Custom ERP", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function AutoInvoiceContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + invoice mockup ═══ */}
      <section className="iv-hero">
        <div className="iv-hero-glow iv-hero-glow-1" aria-hidden="true" />
        <div className="iv-hero-glow iv-hero-glow-2" aria-hidden="true" />
        <div className="iv-hero-inner">
          <div className="iv-hero-badge rev">
            <span className="iv-hero-badge-dot" />
            Automated invoice processing
          </div>
          <h1 className="iv-hero-h rev">
            Automated Invoice<br />
            <span className="acc">Processing.</span>
          </h1>
          <p className="iv-hero-sub rev">
            AI-powered OCR extracts, validates, matches, and routes invoices for approval — <strong>in seconds, not days.</strong> From email attachment to ERP journal entry, fully automated.
          </p>
          <div className="iv-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your AP automation audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#capabilities">See capabilities</a>
          </div>

          {/* Invoice document mockup */}
          <div className="iv-doc rev">
            <div className="iv-doc-bar">
              <span className="iv-doc-bar-icon"><MailIcon /></span>
              <span className="iv-doc-bar-title">AI-Extracted Invoice Data</span>
              <span className="iv-doc-bar-badge">98% avg confidence</span>
            </div>
            <div className="iv-doc-fields">
              {INVOICE_FIELDS.map((f) => (
                <div key={f.label} className="iv-doc-field">
                  <div className="iv-doc-field-label">{f.label}</div>
                  <div className="iv-doc-field-value">{f.value}</div>
                  <div className="iv-doc-field-conf">{f.confidence}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PIPELINE STEP STRIP ═══ */}
      <section className="iv-pipe">
        <div className="iv-pipe-inner rev">
          {PIPELINE.map((s, i) => (
            <div key={s.num} className="iv-pipe-step-wrap">
              {i > 0 && <div className="iv-pipe-conn" />}
              <div className="iv-pipe-step">
                <div className="iv-pipe-step-icon">{s.icon}</div>
                <div className="iv-pipe-step-t">{s.t}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CAPABILITIES — gradient-top cards ═══ */}
      <section className="iv-caps" id="capabilities">
        <div className="iv-caps-inner">
          <div className="iv-caps-hdr rev">
            <div className="eyebrow">Core capabilities</div>
            <h2>Six AI engines.<br /><span>One invoice pipeline.</span></h2>
            <p>Every capability is purpose-built for accounts payable — not generic document processing. Models train on your vendor formats, learn your approval rules, and integrate directly with your ERP ledger.</p>
          </div>
          <div className="iv-caps-grid rev">
            {CAPABILITIES.map((c) => (
              <div key={c.t} className={`iv-cap iv-cap-${c.gradient}`}>
                <div className="iv-cap-icon">{c.icon}</div>
                <div className="iv-cap-t">{c.t}</div>
                <p className="iv-cap-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER — comparison table ═══ */}
      <section className="iv-compare" id="comparison">
        <div className="iv-compare-inner">
          <div className="iv-compare-hdr rev">
            <div className="eyebrow lt">The transformation</div>
            <h2>Manual vs.<br /><span>automated.</span></h2>
          </div>
          <div className="iv-compare-table rev">
            <div className="iv-compare-thead">
              <span className="iv-compare-th">Metric</span>
              <span className="iv-compare-th iv-compare-th-before">Manual</span>
              <span className="iv-compare-th iv-compare-th-after">Automated</span>
            </div>
            {COMPARISONS.map((c) => (
              <div key={c.metric} className="iv-compare-row">
                <span className="iv-compare-metric">{c.metric}</span>
                <span className="iv-compare-before">{c.before}</span>
                <span className="iv-compare-after">{c.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESULTS — dark stat row ═══ */}
      <section className="iv-stats">
        <div className="iv-stats-inner rev">
          {STATS.map((s) => (
            <div key={s.l} className="iv-stat">
              <div className="iv-stat-icon">{s.icon}</div>
              <div className="iv-stat-n">{s.n}</div>
              <div className="iv-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="iv-plat">
        <div className="iv-plat-inner rev">
          <div className="iv-plat-label">Integrates with your accounting stack</div>
          <div className="iv-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="iv-plat-badge">
                <span className="iv-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="why-us">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your AP automation partner</div>
              <h3>Most AP automation<br /><span>only handles the easy invoices.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">62%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of invoices still require manual intervention after &quot;automation.&quot;</strong>
                  Source: Ardent Partners, 2024. The gap is exception handling — most AP tools choke on non-standard formats, partial matches, and multi-currency invoices.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer AP deployment is engineered for exceptions first — not just the happy path. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">Template-free extraction</div>
                <p className="oi-closer-commit-b">Our AI learns your vendor formats automatically — no manual template setup. New vendors are handled from invoice one, not after manual training.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Extraction accuracy, touchless rate, and processing speed are defined before development. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Fraud detection built in</div>
                <p className="oi-closer-commit-b">Duplicate detection, amount anomaly flagging, and vendor verification run on every invoice — automatically, before it reaches an approver.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your AP pipeline are the ones who build, deploy, and support it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free AP audit</div>
              <h4>Get your invoice automation roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your AP audit</span>
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
            <div className="eyebrow lt">AP support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For extraction accuracy, matching rules, and approval workflow questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Pipeline failures or extraction incidents. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring OCR engineers and AP automation specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
