/* ────────────────────────────────────────────────────────────────────────
   GCC & MIDDLE EAST — unique page design
   Hero split + compliance dashboard mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-country section ·
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
  { country: "UAE", tax: "5% VAT", currency: "AED", status: "compliant" as const, reg: "FTA registered" },
  { country: "Saudi Arabia", tax: "15% VAT", currency: "SAR", status: "compliant" as const, reg: "ZATCA Phase 2" },
  { country: "Qatar", tax: "0% VAT", currency: "QAR", status: "compliant" as const, reg: "GTA registered" },
  { country: "Kuwait", tax: "0% VAT", currency: "KWD", status: "pending" as const, reg: "VAT pending" },
  { country: "Bahrain", tax: "10% VAT", currency: "BHD", status: "compliant" as const, reg: "NBR registered" },
  { country: "Oman", tax: "5% VAT", currency: "OMR", status: "compliant" as const, reg: "Tax Authority" },
] as const;

/* ── GCC operations ── */
const OPERATIONS = [
  { icon: <MonitorIcon />, t: "Arabic RTL Interface", s: "Full Arabic right-to-left UI across every module — invoices, reports, customer portals, and POS screens. Bilingual English-Arabic switching for mixed-language teams with Arabic PDF generation.", color: "ai" as const },
  { icon: <ShieldIcon />, t: "GCC VAT Compliance", s: "Country-specific VAT configurations for UAE FTA, Saudi ZATCA (Phase 2 e-invoicing), Bahrain NBR, and Oman Tax Authority. Automated VAT return generation, reverse charge handling, and designated zone rules.", color: "green" as const },
  { icon: <WalletIcon />, t: "Multi-Currency Operations", s: "Six GCC currencies plus USD, EUR, and GBP — with real-time exchange rate feeds, automatic gain/loss calculations, and multi-currency bank reconciliation. Inter-company transactions across currency boundaries.", color: "purple" as const },
  { icon: <UsersIcon />, t: "WPS Payroll & HR", s: "UAE WPS-compliant salary processing, Saudi GOSI contributions, end-of-service gratuity calculations, and labour law leave entitlements — configured per GCC country with automated SIF file generation.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <MonitorIcon />, t: "Arabic UI & Bilingual Operations", s: "Complete RTL Arabic interface across all ERP modules — not just translated labels but proper right-to-left layout for forms, reports, dashboards, and printed documents. Users switch between English and Arabic with one click. Arabic PDF invoices, delivery notes, and contracts generated with proper font rendering." },
  { num: "02", icon: <ShieldIcon />, t: "GCC VAT & E-Invoicing", s: "UAE 5% VAT with FTA return format, Saudi 15% VAT with ZATCA Phase 2 XML e-invoicing (Fatoorah), Bahrain 10% VAT with NBR filing, Oman 5% VAT, and Qatar/Kuwait zero-rate configurations. Reverse charge mechanism, designated zone rules, and tourist refund handling included." },
  { num: "03", icon: <WalletIcon />, t: "Multi-Currency & Exchange Rates", s: "AED, SAR, QAR, KWD, BHD, OMR plus international currencies — all active simultaneously. Central bank rate feeds update automatically. Realised and unrealised gain/loss calculations, multi-currency ageing reports, and cross-currency inter-company settlement." },
  { num: "04", icon: <UsersIcon />, t: "WPS Payroll & Labour Compliance", s: "UAE WPS salary file generation (SIF format), Saudi GOSI social insurance, Qatar labour law compliance, and Bahrain SIO contributions. End-of-service gratuity (EOSB) per country, annual leave accrual rules, and air ticket entitlement tracking — all configured per employee nationality and contract type." },
  { num: "05", icon: <GridIcon />, t: "Free Zone & Mainland Configurations", s: "Separate entity configurations for DMCC, JAFZA, DAFZA, SAIF Zone, and mainland operations — each with its own VAT treatment, licence requirements, and reporting. Inter-entity transactions between free zone and mainland with proper tax handling." },
  { num: "06", icon: <BarChartIcon />, t: "GCC Regulatory Reporting", s: "Automated regulatory reports — UAE Economic Substance Regulations (ESR), Saudi Zakat returns, UBO declarations, and AML compliance reporting. Country-specific chart of accounts, financial statement formats, and audit-ready documentation." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map GCC operations, entities & compliance gaps" },
  { icon: <SettingsIcon />, t: "Localise", s: "Configure VAT, payroll, currency & Arabic UI" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer data with multi-currency balances" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with bilingual training & parallel run" },
] as const;

/* ── Multi-country locations ── */
const COUNTRIES = [
  { t: "UAE Operations", sub: "Dubai, Abu Dhabi & free zone entities", entities: 4, active: true },
  { t: "Saudi Arabia", sub: "Riyadh & Jeddah with ZATCA compliance", entities: 2, active: true },
  { t: "Qatar / Kuwait / Bahrain", sub: "Regional expansion & compliance", entities: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo ERP", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo HR / Payroll", color: "#714B67" },
  { name: "ZATCA E-Invoicing", color: "#006A4E" },
  { name: "UAE FTA", color: "#D32011" },
  { name: "WPS Banking", color: "#0070F2" },
  { name: "Custom Localisation", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you configure Arabic RTL interface across all Odoo modules?", a: "Yes. We configure full right-to-left Arabic UI across every module — sales, purchase, accounting, inventory, HR, and POS. This includes RTL form layouts, Arabic PDF generation for invoices and contracts, bilingual customer portals, and one-click language switching for teams that operate in both English and Arabic." },
  { q: "How do you handle different VAT rates across GCC countries?", a: "Each GCC country is configured as a separate fiscal position with its own VAT rate, tax codes, and return format. UAE (5%), Saudi Arabia (15%), Bahrain (10%), Oman (5%), and Qatar/Kuwait (0%) all coexist in one system. Inter-company transactions across countries handle reverse charge and zero-rating automatically." },
  { q: "Is Saudi ZATCA Phase 2 e-invoicing supported?", a: "Yes. We configure ZATCA Phase 2 (Fatoorah) compliance — XML e-invoice generation, QR code embedding, cryptographic stamping, and real-time reporting to the ZATCA portal. Simplified and standard tax invoices, credit notes, and debit notes all comply with the required schema." },
  { q: "Can you handle WPS payroll for UAE employees?", a: "Yes. We configure UAE WPS-compliant payroll — salary structures per contract type, overtime calculation per labour law, leave salary computation, and automated SIF file generation for bank upload. End-of-service gratuity (EOSB) calculates per the UAE labour law based on basic salary and years of service." },
  { q: "Do you support free zone entities with different VAT treatments?", a: "Yes. We configure separate entities for each free zone (DMCC, JAFZA, DAFZA, SAIF Zone) and mainland operations. Each entity has its own VAT registration, licence tracking, and reporting. Inter-entity transactions between free zone and mainland handle designated zone rules and VAT reverse charge automatically." },
  { q: "How long does a GCC localisation implementation take?", a: "Single-country setup with VAT, Arabic UI, and payroll takes 4–6 weeks. Multi-country GCC deployment with inter-company transactions takes 10–16 weeks. Full regional rollout across 3+ countries with ZATCA e-invoicing and multi-entity consolidation takes 14–24 weeks." },
] as const;

/* ── Component ── */
export function GccMiddleEastContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + compliance dashboard right ═══ */}
      <section className="gc-hero">
        <div className="gc-hero-glow gc-hero-glow-1" aria-hidden="true" />
        <div className="gc-hero-glow gc-hero-glow-2" aria-hidden="true" />
        <div className="gc-hero-dots" aria-hidden="true" />
        <div className="gc-hero-inner">
          <div className="gc-hero-content">
            <div className="gc-hero-badge rev">
              <span className="gc-hero-badge-dot" />
              GCC &amp; Middle East
            </div>
            <h1 className="gc-hero-h rev">
              GCC &amp;<br />Middle East.<br />
              <span className="acc">Every country.<br />Every currency.<br />Compliant.</span>
            </h1>
            <p className="gc-hero-sub rev">
              Arabic RTL interface, GCC VAT compliance, multi-currency operations, WPS payroll, and e-invoicing — <strong>localised for your ERP.</strong>
            </p>
            <div className="gc-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your GCC audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="gc-hero-stats rev">
              <div className="gc-hero-stat">
                <span className="gc-hero-stat-n">6</span>
                <span className="gc-hero-stat-l">GCC countries</span>
              </div>
              <span className="gc-hero-stat-div" />
              <div className="gc-hero-stat">
                <span className="gc-hero-stat-n">100%</span>
                <span className="gc-hero-stat-l">VAT compliant</span>
              </div>
              <span className="gc-hero-stat-div" />
              <div className="gc-hero-stat">
                <span className="gc-hero-stat-n">9+</span>
                <span className="gc-hero-stat-l">Currencies live</span>
              </div>
            </div>
          </div>

          {/* Compliance dashboard mockup */}
          <div className="gc-comp rev">
            <div className="gc-comp-hdr">
              <div className="gc-comp-live">
                <span className="gc-comp-live-dot" />
                Live
              </div>
              <div className="gc-comp-title">GCC Compliance</div>
            </div>
            <div className="gc-comp-list">
              {COMPLIANCE_ITEMS.map((c) => (
                <div key={c.country} className={`gc-row gc-row-${c.status}`}>
                  <div className="gc-row-top">
                    <span className="gc-row-country">{c.country}</span>
                    <span className={`gc-row-status gc-row-status-${c.status}`}>
                      {c.status === "compliant" ? "Compliant" : "Pending"}
                    </span>
                  </div>
                  <div className="gc-row-mid">
                    <span className="gc-row-tax">{c.tax}</span>
                    <span className="gc-row-curr">{c.currency}</span>
                  </div>
                  <div className="gc-row-reg">{c.reg}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="gc-ops">
        <div className="gc-ops-inner">
          <div className="gc-ops-hdr rev">
            <div className="eyebrow">GCC operations</div>
            <h2>Localise. Comply. Trade.<br /><span>Scale.</span></h2>
          </div>
          <div className="gc-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`gc-op gc-op-${op.color}`}>
                <div className="gc-op-icon">{op.icon}</div>
                <div className="gc-op-t">{op.t}</div>
                <p className="gc-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="gc-feat" id="features">
        <div className="gc-feat-inner">
          <div className="gc-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete GCC readiness.</span></h2>
          </div>
          <div className="gc-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`gc-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="gc-feat-row-num">{f.num}</div>
                <div className="gc-feat-row-icon">{f.icon}</div>
                <div className="gc-feat-row-body">
                  <div className="gc-feat-row-t">{f.t}</div>
                  <p className="gc-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="gc-proc" id="process">
        <div className="gc-proc-inner">
          <div className="gc-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>GCC-ready ERP.</span></h2>
          </div>
          <div className="gc-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="gc-proc-step-wrap">
                {i > 0 && <div className="gc-proc-dots" />}
                <div className="gc-proc-step">
                  <div className="gc-proc-step-icon">{p.icon}</div>
                  <div className="gc-proc-step-t">{p.t}</div>
                  <div className="gc-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to expand</div>
              <h3>Want your ERP <span>GCC-compliant?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a GCC localisation engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-COUNTRY — split ═══ */}
      <section className="gc-multi" id="multi-country">
        <div className="gc-multi-inner">
          <div className="gc-multi-hdr rev">
            <div className="eyebrow lt">Multi-country</div>
            <h2>One system.<br /><span>Every GCC market.</span></h2>
          </div>
          <div className="gc-multi-split rev">
            <div className="gc-multi-left">
              <div className="gc-multi-big-n">6</div>
              <div className="gc-multi-big-l">GCC countries supported from one ERP</div>
              <p className="gc-multi-big-s">UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman — all orchestrated from a single system with country-specific VAT, payroll, and compliance configurations and unified multi-currency group reporting.</p>
            </div>
            <div className="gc-multi-right">
              {COUNTRIES.map((ctry) => (
                <div key={ctry.t} className={`gc-multi-loc${ctry.active ? "" : " inactive"}`}>
                  <div className="gc-multi-loc-t">{ctry.t}</div>
                  <div className="gc-multi-loc-sub">{ctry.sub}</div>
                  {ctry.entities > 0 && <div className="gc-multi-loc-stat">{ctry.entities} legal entities</div>}
                  {!ctry.active && <div className="gc-multi-loc-stat">Expansion ready</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="gc-plat">
        <div className="gc-plat-inner rev">
          <div className="gc-plat-label">GCC &amp; Middle East integrations</div>
          <div className="gc-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="gc-plat-badge">
                <span className="gc-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="gc-faq" id="faq">
        <div className="gc-faq-inner">
          <div className="gc-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>GCC &amp; Middle East ERP.</span></h2>
          </div>
          <div className="gc-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="gc-faq-item">
                <summary className="gc-faq-q">{f.q}</summary>
                <p className="gc-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your GCC partner</div>
              <h3>Most ERPs offer translation,<br /><span>not true localisation.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">70%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of GCC businesses run ERPs not fully localised for their country.</strong>
                  Source: Gulf Business Technology Report, 2024. The result is manual VAT calculations, non-compliant e-invoices, payroll errors, and zero Arabic UI — problems that trigger audit findings and regulatory penalties.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer GCC deployment covers full localisation — not just language translation. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><MonitorIcon /></div>
                <div className="oi-closer-commit-t">True Arabic RTL — not just translated labels</div>
                <p className="oi-closer-commit-b">Full right-to-left layout across every screen, form, report, and PDF. Arabic font rendering, bilingual switching, and Arabic customer portals — not a translation overlay on an English UI.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">VAT &amp; e-invoicing audit-ready</div>
                <p className="oi-closer-commit-b">Country-specific VAT configurations, automated return generation, and ZATCA Phase 2 e-invoicing — tested and validated against regulatory requirements before go-live.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><WalletIcon /></div>
                <div className="oi-closer-commit-t">Multi-currency from day one</div>
                <p className="oi-closer-commit-b">All GCC currencies active simultaneously with automated exchange rate feeds. Inter-company transactions, gain/loss calculations, and multi-currency bank reconciliation configured — not patched in later.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior GCC engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your GCC operations is the one who localises, migrates, trains, and supports — named in the contract. Arabic and English fluent.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free GCC audit</div>
              <h4>Get your localisation roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your GCC audit</span>
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
            <div className="eyebrow lt">GCC support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior GCC localisation engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For VAT configuration, Arabic UI, and payroll setup questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">VAT filing failures or e-invoicing sync issues. Answered by a senior GCC engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring GCC localisation engineers and Arabic ERP specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior GCC engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> ZATCA compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
