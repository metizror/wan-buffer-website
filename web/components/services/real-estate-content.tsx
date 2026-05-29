/* ────────────────────────────────────────────────────────────────────────
   REAL ESTATE — unique page design
   Hero split + unit inventory mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-property section ·
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

/* ── Unit inventory mockup ── */
const UNITS = [
  { unit: "T1-1204", type: "2 BHK", area: "1,180 sqft", price: "$245K", status: "available" as const },
  { unit: "T1-0806", type: "3 BHK", area: "1,650 sqft", price: "$380K", status: "reserved" as const },
  { unit: "T2-0312", type: "Studio", area: "520 sqft", price: "$115K", status: "sold" as const },
  { unit: "T2-1501", type: "Penthouse", area: "3,200 sqft", price: "$890K", status: "available" as const },
  { unit: "C-G04", type: "Retail", area: "2,400 sqft", price: "$18/sqft", status: "leased" as const },
  { unit: "C-201", type: "Office", area: "4,800 sqft", price: "$22/sqft", status: "available" as const },
] as const;

/* ── Real estate operations ── */
const OPERATIONS = [
  { icon: <UsersIcon />, t: "Property CRM", s: "Unified lead management across walk-ins, digital campaigns, broker referrals, and portals — with automated follow-ups, site visit scheduling, and full pipeline visibility from enquiry to handover.", color: "ai" as const },
  { icon: <SparklesIcon />, t: "AI Lead Scoring", s: "Machine learning models that score every lead based on engagement signals, budget match, property preference, and conversion probability — so your sales team focuses on buyers ready to close.", color: "green" as const },
  { icon: <RefreshIcon />, t: "Lease Lifecycle", s: "End-to-end lease management from application through approval, execution, renewal, and termination — with automated rent escalation, security deposit tracking, and tenant communication workflows.", color: "purple" as const },
  { icon: <BarChartIcon />, t: "Revenue Analytics", s: "Real-time dashboards for sales velocity, occupancy rates, rental yield, broker performance, and collection efficiency. Drill from portfolio level down to individual unit and tenant.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <UsersIcon />, t: "Property CRM & Lead Management", s: "Capture leads from websites, portals (99acres, Bayut, Zillow), walk-ins, and broker referrals into a unified pipeline. Automated follow-up sequences, site visit scheduling, document collection, and deal tracking — with full audit trail from first enquiry to unit handover." },
  { num: "02", icon: <SparklesIcon />, t: "AI-Powered Lead Scoring", s: "ML models trained on your historical conversion data score every lead by budget fit, location preference, engagement recency, and behavioural signals. Hot leads auto-route to senior agents. Warm leads enter nurture sequences. Cold leads trigger re-engagement campaigns — maximising conversion rates." },
  { num: "03", icon: <RefreshIcon />, t: "Lease Lifecycle Management", s: "Manage the full lease cycle — tenant application, credit check, lease drafting, execution, rent collection, escalation schedules, maintenance requests, renewal negotiation, and termination. Automated alerts for renewals 90/60/30 days before expiry with tenant portal access." },
  { num: "04", icon: <GridIcon />, t: "Unit Inventory & Availability", s: "Real-time unit inventory across towers, floors, and configurations — with status tracking (available, reserved, sold, leased). Interactive floor plans, price lists with payment plan options, and automated booking workflows with document generation." },
  { num: "05", icon: <WalletIcon />, t: "Broker Commission & Payouts", s: "Define commission structures per project, per broker tier, and per unit type. Automated commission calculation on booking confirmation, milestone-based payouts, TDS deduction, and reconciliation. Broker portal for deal submission and payout tracking." },
  { num: "06", icon: <BarChartIcon />, t: "Collection & Revenue Analytics", s: "Payment schedule tracking per unit with automated reminders for upcoming and overdue instalments. Collection efficiency dashboards, ageing analysis, and revenue recognition by project. Cash flow forecasting for ongoing and upcoming projects." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map sales flow, leasing & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up CRM, units, leases & AI models" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer property data with lead history" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-property locations ── */
const PROPERTIES = [
  { t: "Residential Tower", sub: "Multi-tower sales & handover management", units: 480, active: true },
  { t: "Commercial Complex", sub: "Office & retail lease management", units: 65, active: true },
  { t: "Co-Living / Co-Working", sub: "Short-term lease & booking engine", units: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo CRM", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo Website", color: "#714B67" },
  { name: "99acres / Bayut", color: "#D32011" },
  { name: "Zillow / Realtor", color: "#006AFF" },
  { name: "Razorpay / Stripe", color: "#635BFF" },
  { name: "Custom PropTech", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you manage unit inventory across multiple towers and configurations?", a: "Yes. We configure unit inventory by project, tower, floor, and unit type — with real-time status tracking (available, reserved, blocked, sold, leased). Each unit carries its own price, area, floor plan, payment schedule, and booking history. Interactive availability views and automated booking workflows are included." },
  { q: "How does AI lead scoring improve conversion rates?", a: "Our ML models analyse your historical conversion data to identify patterns — budget match, location preference, engagement frequency, response time, and site visit behaviour. Every new lead gets a real-time score. Sales teams see scores in their pipeline view and prioritise accordingly. Clients typically see 25–40% improvement in lead-to-booking conversion rates." },
  { q: "Can you automate the entire lease lifecycle?", a: "Yes. We configure the full cycle — tenant application, document collection, credit/background checks, lease drafting with template generation, digital execution, rent collection with automated reminders, annual escalation calculations, maintenance request handling, renewal workflows, and termination with security deposit reconciliation." },
  { q: "Do you support broker commission tracking and payouts?", a: "Yes. Commission structures are defined per project, per broker tier, and per unit type — flat fee, percentage of sale value, or slab-based. Commissions calculate automatically on booking confirmation. Milestone-based payouts, TDS deduction, and reconciliation are handled by the system. Brokers get portal access to track their deals and payouts." },
  { q: "Can you integrate with property portals like 99acres, Bayut, or Zillow?", a: "Yes. We integrate with major portals — leads from 99acres, Bayut, MagicBricks, Zillow, Realtor.com, and Property Finder flow directly into your CRM with source attribution. Listing sync pushes your inventory to portals automatically so availability stays current across all channels." },
  { q: "How long does a real estate ERP implementation take?", a: "Single-project CRM with lead scoring takes 3–5 weeks. Full real estate ERP with lease lifecycle, unit inventory, and broker management takes 8–14 weeks. Multi-project portfolio with PropTech integrations and tenant portals takes 12–20 weeks." },
] as const;

/* ── Component ── */
export function RealEstateContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + unit inventory right ═══ */}
      <section className="re2-hero">
        <div className="re2-hero-glow re2-hero-glow-1" aria-hidden="true" />
        <div className="re2-hero-glow re2-hero-glow-2" aria-hidden="true" />
        <div className="re2-hero-dots" aria-hidden="true" />
        <div className="re2-hero-inner">
          <div className="re2-hero-content">
            <div className="re2-hero-badge rev">
              <span className="re2-hero-badge-dot" />
              Real Estate
            </div>
            <h1 className="re2-hero-h rev">
              Real Estate<br />ERP.<br />
              <span className="acc">Every lead.<br />Every unit.<br />Managed.</span>
            </h1>
            <p className="re2-hero-sub rev">
              Property CRM, AI lead scoring, lease lifecycle management, unit inventory, and broker commission tracking — <strong>integrated into your ERP.</strong>
            </p>
            <div className="re2-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your real estate audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="re2-hero-stats rev">
              <div className="re2-hero-stat">
                <span className="re2-hero-stat-n">40%</span>
                <span className="re2-hero-stat-l">Higher conversion</span>
              </div>
              <span className="re2-hero-stat-div" />
              <div className="re2-hero-stat">
                <span className="re2-hero-stat-n">95%</span>
                <span className="re2-hero-stat-l">Collection efficiency</span>
              </div>
              <span className="re2-hero-stat-div" />
              <div className="re2-hero-stat">
                <span className="re2-hero-stat-n">500+</span>
                <span className="re2-hero-stat-l">Units / project</span>
              </div>
            </div>
          </div>

          {/* Unit inventory mockup */}
          <div className="re2-units rev">
            <div className="re2-units-hdr">
              <div className="re2-units-live">
                <span className="re2-units-live-dot" />
                Live
              </div>
              <div className="re2-units-title">Unit Inventory</div>
            </div>
            <div className="re2-units-grid">
              {UNITS.map((u) => (
                <div key={u.unit} className={`re2-unit re2-unit-${u.status}`}>
                  <div className="re2-unit-top">
                    <span className="re2-unit-id">{u.unit}</span>
                    <span className={`re2-unit-status re2-unit-status-${u.status}`}>
                      {u.status === "available" ? "Available" : u.status === "reserved" ? "Reserved" : u.status === "sold" ? "Sold" : "Leased"}
                    </span>
                  </div>
                  <div className="re2-unit-type">{u.type}</div>
                  <div className="re2-unit-bottom">
                    <span className="re2-unit-area">{u.area}</span>
                    <span className="re2-unit-price">{u.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="re2-ops">
        <div className="re2-ops-inner">
          <div className="re2-ops-hdr rev">
            <div className="eyebrow">Real estate operations</div>
            <h2>Capture. Score. Lease.<br /><span>Collect.</span></h2>
          </div>
          <div className="re2-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`re2-op re2-op-${op.color}`}>
                <div className="re2-op-icon">{op.icon}</div>
                <div className="re2-op-t">{op.t}</div>
                <p className="re2-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="re2-feat" id="features">
        <div className="re2-feat-inner">
          <div className="re2-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete property control.</span></h2>
          </div>
          <div className="re2-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`re2-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="re2-feat-row-num">{f.num}</div>
                <div className="re2-feat-row-icon">{f.icon}</div>
                <div className="re2-feat-row-body">
                  <div className="re2-feat-row-t">{f.t}</div>
                  <p className="re2-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="re2-proc" id="process">
        <div className="re2-proc-inner">
          <div className="re2-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>smarter real estate.</span></h2>
          </div>
          <div className="re2-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="re2-proc-step-wrap">
                {i > 0 && <div className="re2-proc-dots" />}
                <div className="re2-proc-step">
                  <div className="re2-proc-step-icon">{p.icon}</div>
                  <div className="re2-proc-step-t">{p.t}</div>
                  <div className="re2-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to scale</div>
              <h3>Want your portfolio <span>running on AI?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a real estate engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-PROPERTY — split ═══ */}
      <section className="re2-multi" id="multi-property">
        <div className="re2-multi-inner">
          <div className="re2-multi-hdr rev">
            <div className="eyebrow lt">Multi-property</div>
            <h2>One system.<br /><span>Every project.</span></h2>
          </div>
          <div className="re2-multi-split rev">
            <div className="re2-multi-left">
              <div className="re2-multi-big-n">500+</div>
              <div className="re2-multi-big-l">Units managed from one ERP</div>
              <p className="re2-multi-big-s">Residential towers, commercial complexes, and co-living spaces — all orchestrated from a single system with unified CRM, centralised collections, and real-time occupancy and sales analytics across every property.</p>
            </div>
            <div className="re2-multi-right">
              {PROPERTIES.map((prop) => (
                <div key={prop.t} className={`re2-multi-loc${prop.active ? "" : " inactive"}`}>
                  <div className="re2-multi-loc-t">{prop.t}</div>
                  <div className="re2-multi-loc-sub">{prop.sub}</div>
                  {prop.units > 0 && <div className="re2-multi-loc-stat">{prop.units} units</div>}
                  {!prop.active && <div className="re2-multi-loc-stat">Booking engine</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="re2-plat">
        <div className="re2-plat-inner rev">
          <div className="re2-plat-label">Real estate &amp; PropTech integrations</div>
          <div className="re2-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="re2-plat-badge">
                <span className="re2-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="re2-faq" id="faq">
        <div className="re2-faq-inner">
          <div className="re2-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Real Estate ERP.</span></h2>
          </div>
          <div className="re2-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="re2-faq-item">
                <summary className="re2-faq-q">{f.q}</summary>
                <p className="re2-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your real estate partner</div>
              <h3>Most CRMs track leads,<br /><span>not property intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">65%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of real estate firms still manage leads and leases on spreadsheets.</strong>
                  Source: JLL PropTech Report, 2024. The result is lost leads, missed follow-ups, lease renewal gaps, and zero visibility into portfolio performance — problems that compound as your inventory grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer real estate deployment covers the full property lifecycle — not just lead capture. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Unified CRM — every lead source, one pipeline</div>
                <p className="oi-closer-commit-b">Every lead — portals, walk-ins, brokers, digital campaigns — flows into a single pipeline with automated follow-ups, site visit scheduling, and full conversion tracking. No leads lost between channels.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed conversion &amp; collection targets</div>
                <p className="oi-closer-commit-b">Lead-to-booking conversion rates, collection efficiency, and lease renewal rates are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">AI-first lead scoring &amp; automation</div>
                <p className="oi-closer-commit-b">Every lead is ML-scored. Every follow-up is automated. Every renewal is system-triggered. No manual lead sorting, no missed follow-ups — data-driven property management.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior real estate engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your operations is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free property audit</div>
              <h4>Get your real estate ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your real estate audit</span>
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
            <div className="eyebrow lt">Real estate support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior real estate engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For CRM setup, lease configuration, and commission rule questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">CRM sync failures or booking system incidents. Answered by a senior real estate engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring real estate ERP engineers and PropTech specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior property engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
