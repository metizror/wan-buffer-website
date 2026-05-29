/* ────────────────────────────────────────────────────────────────────────
   USA & EUROPE — unique page design
   Hero split + compliance dashboard mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-region section ·
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

/* ── Compliance dashboard mockup ── */
const COMPLIANCE_ITEMS = [
  { region: "USA — Federal", rule: "SOX Reporting", currency: "USD", status: "compliant" as const },
  { region: "USA — Multi-State", rule: "Sales Tax (Avalara)", currency: "USD", status: "compliant" as const },
  { region: "EU — GDPR", rule: "Data Protection", currency: "EUR", status: "compliant" as const },
  { region: "EU — VAT OSS", rule: "One-Stop Shop", currency: "EUR", status: "compliant" as const },
  { region: "UK — Post-Brexit", rule: "UK VAT + MTD", currency: "GBP", status: "compliant" as const },
  { region: "Canada", rule: "GST/HST + PST", currency: "CAD", status: "pending" as const },
] as const;

/* ── USA & Europe operations ── */
const OPERATIONS = [
  { icon: <RefreshIcon />, t: "Salesforce CRM Sync", s: "Bidirectional Salesforce-ERP integration — leads, contacts, opportunities, and quotes sync in real time. Sales teams work in Salesforce while operations run in the ERP. Zero double data entry.", color: "ai" as const },
  { icon: <ShieldIcon />, t: "GDPR Compliance", s: "Data protection by design — consent management, right-to-erasure workflows, data portability exports, breach notification protocols, and DPA-ready configurations. Built into every module from day one.", color: "green" as const },
  { icon: <WalletIcon />, t: "EU VAT & US Sales Tax", s: "EU VAT with OSS (One-Stop Shop) for cross-border B2C, reverse charge for B2B, and intra-community supplies. US multi-state sales tax with Avalara or TaxJar integration for nexus-aware calculation.", color: "purple" as const },
  { icon: <BarChartIcon />, t: "SOX & Regulatory Reporting", s: "SOX-compliant audit trails, segregation of duties, and financial controls. GAAP and IFRS dual reporting, inter-company eliminations, and multi-currency consolidation for transatlantic operations.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <RefreshIcon />, t: "Salesforce ↔ ERP Sync", s: "Real-time bidirectional integration between Salesforce CRM and your ERP. Leads, contacts, accounts, opportunities, quotes, and won deals flow seamlessly. Sales orders created in Salesforce auto-generate ERP sales orders, delivery orders, and invoices — with status updates pushing back to Salesforce." },
  { num: "02", icon: <ShieldIcon />, t: "GDPR Data Protection", s: "Consent tracking per contact with purpose-specific opt-in records. Right-to-erasure workflows that anonymise personal data across all modules. Data portability exports in machine-readable format. Breach notification workflows with 72-hour DPA alerting. Data Processing Agreement (DPA) templates built in." },
  { num: "03", icon: <WalletIcon />, t: "EU VAT & OSS Compliance", s: "Standard, reduced, and zero-rate VAT per EU member state. OSS (One-Stop Shop) for cross-border B2C digital and physical goods — single VAT return for all EU sales. Intra-community supply and acquisition with reverse charge. UK post-Brexit VAT with Making Tax Digital (MTD) integration." },
  { num: "04", icon: <MonitorIcon />, t: "US Multi-State Sales Tax", s: "Nexus-aware sales tax calculation via Avalara AvaTax or TaxJar integration. Economic nexus thresholds monitored per state. Tax-exempt certificate management. Automated sales tax return preparation and filing for every state where you have nexus." },
  { num: "05", icon: <EyeIcon />, t: "SOX Compliance & Audit Trails", s: "Segregation of duties enforcement, approval hierarchies, and immutable audit logs across financial transactions. SOX Section 404 internal control documentation. User access reviews, role-based permissions, and change management trails — all auditor-ready." },
  { num: "06", icon: <BarChartIcon />, t: "GAAP / IFRS Dual Reporting", s: "Parallel chart of accounts for US GAAP and IFRS reporting. Revenue recognition per ASC 606 and IFRS 15. Lease accounting per ASC 842 and IFRS 16. Multi-currency consolidation with inter-company elimination for transatlantic group reporting." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map operations, tax nexus & compliance gaps" },
  { icon: <SettingsIcon />, t: "Localise", s: "Configure tax, GDPR, Salesforce & reporting" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer data with multi-currency balances" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-region locations ── */
const REGIONS = [
  { t: "USA Operations", sub: "Multi-state sales tax & SOX compliance", entities: 3, active: true },
  { t: "EU Operations", sub: "VAT OSS, GDPR & IFRS reporting", entities: 4, active: true },
  { t: "UK / Canada Expansion", sub: "Post-Brexit VAT & GST/HST compliance", entities: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Salesforce CRM", color: "#00A1E0" },
  { name: "Avalara AvaTax", color: "#F36F21" },
  { name: "Stripe", color: "#635BFF" },
  { name: "QuickBooks Migration", color: "#2CA01C" },
  { name: "AWS / Azure", color: "#FF9900" },
  { name: "Custom Localisation", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How does the Salesforce-ERP sync work?", a: "We configure real-time bidirectional sync — Salesforce leads, contacts, accounts, and opportunities map to ERP partners and CRM records. When a deal is won in Salesforce, a sales order auto-creates in the ERP with line items, pricing, and tax. Delivery status, invoice status, and payment status push back to Salesforce so sales teams have full visibility without leaving their CRM." },
  { q: "How do you handle GDPR compliance within the ERP?", a: "We configure consent tracking per contact with purpose-specific records (marketing, analytics, contractual). Right-to-erasure requests trigger an anonymisation workflow that removes personal data across all modules — CRM, sales, invoicing, and support — while preserving financial records required by law. Data portability exports and breach notification workflows are included." },
  { q: "Can you handle EU VAT across multiple member states?", a: "Yes. We configure VAT rates per EU country, OSS (One-Stop Shop) for cross-border B2C sales, intra-community supply/acquisition with reverse charge, and triangulation rules for drop-ship scenarios. UK post-Brexit VAT, customs declarations, and Making Tax Digital (MTD) filing are also supported." },
  { q: "How does US multi-state sales tax work?", a: "We integrate Avalara AvaTax or TaxJar for real-time, nexus-aware sales tax calculation. The system monitors economic nexus thresholds per state, applies the correct rate at the city/county/state level, manages tax-exempt certificates, and prepares sales tax returns for every state where you have obligation. Tax is calculated at the point of sale — no manual lookups." },
  { q: "Do you support GAAP and IFRS parallel reporting?", a: "Yes. We configure parallel chart of accounts or adjustment layers that allow financial statements in both US GAAP and IFRS. Revenue recognition differences (ASC 606 vs IFRS 15), lease accounting (ASC 842 vs IFRS 16), and consolidation rules are handled — enabling auditor-ready reporting under both standards from a single ERP." },
  { q: "How long does a USA & Europe ERP implementation take?", a: "Single-region setup (US-only or EU-only) with tax, Salesforce sync, and compliance takes 6–10 weeks. Full transatlantic deployment with GDPR, SOX, multi-state tax, and EU VAT OSS takes 12–20 weeks. Multi-entity operations with GAAP/IFRS dual reporting and UK/Canada expansion take 16–28 weeks." },
] as const;

/* ── Component ── */
export function UsaEuropeContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + compliance dashboard right ═══ */}
      <section className="ue-hero">
        <div className="ue-hero-glow ue-hero-glow-1" aria-hidden="true" />
        <div className="ue-hero-glow ue-hero-glow-2" aria-hidden="true" />
        <div className="ue-hero-dots" aria-hidden="true" />
        <div className="ue-hero-inner">
          <div className="ue-hero-content">
            <div className="ue-hero-badge rev">
              <span className="ue-hero-badge-dot" />
              USA &amp; Europe
            </div>
            <h1 className="ue-hero-h rev">
              USA &amp;<br />Europe.<br />
              <span className="acc">Every regulation.<br />Every currency.<br />Covered.</span>
            </h1>
            <p className="ue-hero-sub rev">
              Salesforce CRM sync, GDPR compliance, EU VAT OSS, US multi-state sales tax, and SOX reporting — <strong>localised for your ERP.</strong>
            </p>
            <div className="ue-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your compliance audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="ue-hero-stats rev">
              <div className="ue-hero-stat">
                <span className="ue-hero-stat-n">50+</span>
                <span className="ue-hero-stat-l">US states + EU countries</span>
              </div>
              <span className="ue-hero-stat-div" />
              <div className="ue-hero-stat">
                <span className="ue-hero-stat-n">GDPR</span>
                <span className="ue-hero-stat-l">Compliant by design</span>
              </div>
              <span className="ue-hero-stat-div" />
              <div className="ue-hero-stat">
                <span className="ue-hero-stat-n">SOX</span>
                <span className="ue-hero-stat-l">Audit-ready</span>
              </div>
            </div>
          </div>

          {/* Compliance dashboard mockup */}
          <div className="ue-comp rev">
            <div className="ue-comp-hdr">
              <div className="ue-comp-live">
                <span className="ue-comp-live-dot" />
                Live
              </div>
              <div className="ue-comp-title">Compliance Status</div>
            </div>
            <div className="ue-comp-list">
              {COMPLIANCE_ITEMS.map((c) => (
                <div key={c.region} className={`ue-row ue-row-${c.status}`}>
                  <div className="ue-row-top">
                    <span className="ue-row-region">{c.region}</span>
                    <span className={`ue-row-status ue-row-status-${c.status}`}>
                      {c.status === "compliant" ? "Compliant" : "Pending"}
                    </span>
                  </div>
                  <div className="ue-row-mid">
                    <span className="ue-row-rule">{c.rule}</span>
                    <span className="ue-row-curr">{c.currency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="ue-ops">
        <div className="ue-ops-inner">
          <div className="ue-ops-hdr rev">
            <div className="eyebrow">Transatlantic operations</div>
            <h2>Sync. Protect. Tax.<br /><span>Report.</span></h2>
          </div>
          <div className="ue-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`ue-op ue-op-${op.color}`}>
                <div className="ue-op-icon">{op.icon}</div>
                <div className="ue-op-t">{op.t}</div>
                <p className="ue-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="ue-feat" id="features">
        <div className="ue-feat-inner">
          <div className="ue-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete Western compliance.</span></h2>
          </div>
          <div className="ue-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`ue-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="ue-feat-row-num">{f.num}</div>
                <div className="ue-feat-row-icon">{f.icon}</div>
                <div className="ue-feat-row-body">
                  <div className="ue-feat-row-t">{f.t}</div>
                  <p className="ue-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="ue-proc" id="process">
        <div className="ue-proc-inner">
          <div className="ue-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>transatlantic ERP.</span></h2>
          </div>
          <div className="ue-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="ue-proc-step-wrap">
                {i > 0 && <div className="ue-proc-dots" />}
                <div className="ue-proc-step">
                  <div className="ue-proc-step-icon">{p.icon}</div>
                  <div className="ue-proc-step-t">{p.t}</div>
                  <div className="ue-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to expand</div>
              <h3>Want your ERP <span>compliant across borders?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a compliance engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-REGION — split ═══ */}
      <section className="ue-multi" id="multi-region">
        <div className="ue-multi-inner">
          <div className="ue-multi-hdr rev">
            <div className="eyebrow lt">Multi-region</div>
            <h2>One system.<br /><span>Both continents.</span></h2>
          </div>
          <div className="ue-multi-split rev">
            <div className="ue-multi-left">
              <div className="ue-multi-big-n">7+</div>
              <div className="ue-multi-big-l">Entities managed across USA &amp; Europe</div>
              <p className="ue-multi-big-s">US operations, EU subsidiaries, and UK/Canada expansion — all orchestrated from a single system with Salesforce CRM sync, cross-border tax compliance, GDPR data protection, and unified multi-currency group reporting.</p>
            </div>
            <div className="ue-multi-right">
              {REGIONS.map((r) => (
                <div key={r.t} className={`ue-multi-loc${r.active ? "" : " inactive"}`}>
                  <div className="ue-multi-loc-t">{r.t}</div>
                  <div className="ue-multi-loc-sub">{r.sub}</div>
                  {r.entities > 0 && <div className="ue-multi-loc-stat">{r.entities} legal entities</div>}
                  {!r.active && <div className="ue-multi-loc-stat">Expansion ready</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ue-plat">
        <div className="ue-plat-inner rev">
          <div className="ue-plat-label">USA &amp; Europe integrations</div>
          <div className="ue-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ue-plat-badge">
                <span className="ue-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ue-faq" id="faq">
        <div className="ue-faq-inner">
          <div className="ue-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>USA &amp; Europe ERP.</span></h2>
          </div>
          <div className="ue-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ue-faq-item">
                <summary className="ue-faq-q">{f.q}</summary>
                <p className="ue-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your transatlantic partner</div>
              <h3>Most ERPs cover one region,<br /><span>not both.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">74%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of businesses expanding across the Atlantic use separate systems for US and EU.</strong>
                  Source: Gartner CFO Survey, 2024. The result is duplicated data, inconsistent reporting, compliance gaps in the newer region, and no consolidated financial view — problems that multiply with each new entity.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer transatlantic deployment covers both regions from a single ERP — not bolted-on add-ons. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Salesforce sync — bidirectional, real-time</div>
                <p className="oi-closer-commit-b">Sales teams stay in Salesforce. Operations run in the ERP. Data flows both ways in real time — no exports, no manual sync, no stale records. Configured and tested before go-live.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">GDPR &amp; SOX compliant from day one</div>
                <p className="oi-closer-commit-b">Data protection, consent management, audit trails, and segregation of duties configured before the first user logs in — not retrofitted after an audit finding.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Tax compliance across all jurisdictions</div>
                <p className="oi-closer-commit-b">EU VAT OSS, US multi-state sales tax, UK post-Brexit VAT, and Canadian GST/HST — all calculated automatically at the point of sale with filing-ready returns. No manual tax lookups.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior compliance engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your transatlantic operations is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free compliance audit</div>
              <h4>Get your transatlantic ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your compliance audit</span>
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
            <div className="eyebrow lt">USA &amp; Europe support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior compliance engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For Salesforce sync, tax configuration, and GDPR setup questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Tax sync failures or Salesforce integration incidents. Answered by a senior compliance engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring compliance ERP engineers and Salesforce integration specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior compliance engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> GDPR + SOX ready</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
