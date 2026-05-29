/* ────────────────────────────────────────────────────────────────────────
   STEEL & METAL FABRICATION — unique page design
   Hero split + heat tracker mock · Operations cards · Alternating feature
   rows · Dotted process flow · Multi-facility section ·
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

/* ── Heat tracker mockup ── */
const HEAT_LOTS = [
  { heat: "HT-24-0871", grade: "SS 304L", thick: "6 mm", weight: "2.4 T", status: "in-stock" as const },
  { heat: "HT-24-0872", grade: "MS IS-2062", thick: "12 mm", weight: "5.1 T", status: "cutting" as const },
  { heat: "HT-24-0873", grade: "SA 516-70", thick: "20 mm", weight: "3.8 T", status: "welding" as const },
  { heat: "HT-24-0874", grade: "SS 316L", thick: "8 mm", weight: "1.9 T", status: "in-stock" as const },
  { heat: "HT-24-0875", grade: "EN-8", thick: "Ø65 mm", weight: "0.7 T", status: "machining" as const },
  { heat: "HT-24-0876", grade: "MS IS-2062", thick: "16 mm", weight: "4.3 T", status: "qc-hold" as const },
] as const;

/* ── Fabrication operations ── */
const OPERATIONS = [
  { icon: <ShieldIcon />, t: "Heat Traceability", s: "End-to-end heat number tracking from mill test certificate through cutting, welding, and assembly to final dispatch. Every piece traces back to its source plate, coil, or bar.", color: "ai" as const },
  { icon: <GridIcon />, t: "BOM & Nesting", s: "Multi-level fabrication BOMs with weight-based costing, cut-list generation, and nesting optimisation that minimises scrap on plates, coils, and bars.", color: "green" as const },
  { icon: <SettingsIcon />, t: "Production Scheduling", s: "Job-shop scheduling across cutting, bending, welding, machining, and surface treatment — with real-time capacity tracking and bottleneck visibility per work centre.", color: "purple" as const },
  { icon: <BarChartIcon />, t: "Weight & Cost Tracking", s: "Automatic weight calculation from dimensions and grade density. Real-time material cost tracking per job, per heat, and per piece — with scrap valuation built in.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <ShieldIcon />, t: "Heat Number Tracking", s: "Every plate, coil, pipe, and bar is tracked by heat number from goods receipt to final dispatch. Mill test certificates (MTCs) are linked to inventory and flow through to cut pieces, weldments, and assemblies — full traceability for EN 10204, ASME, and ISO audits." },
  { num: "02", icon: <GridIcon />, t: "Multi-Level Fabrication BOM", s: "Define assembly BOMs with sub-assemblies, weldments, bought-out components, and consumables. Weight-based and length-based material quantities calculate automatically from drawings. Revision control and engineering change orders built in." },
  { num: "03", icon: <SettingsIcon />, t: "Production Scheduling & Job Tracking", s: "Drag-and-drop Gantt scheduling across cutting, bending, rolling, welding, machining, and painting work centres. Real-time progress tracking per job — from raw material issue to final assembly and dispatch." },
  { num: "04", icon: <PackageIcon />, t: "Coil, Plate & Bar Inventory", s: "Manage stock by heat, grade, thickness, width, length, and weight. Automatic remnant tracking after cutting operations. Multi-location inventory with inter-warehouse transfers and minimum stock alerts by grade." },
  { num: "05", icon: <TargetIcon />, t: "Cut Optimisation & Nesting", s: "Nesting algorithms that maximise material utilisation on plates and coils. Cut-list generation from BOMs with automatic assignment of stock plates by grade and thickness — reducing scrap by up to 15%." },
  { num: "06", icon: <EyeIcon />, t: "Quality & Inspection Management", s: "Stage-gate inspections at incoming, in-process, and final stages. Dimensional checks, weld inspection (NDT/RT/UT), surface treatment verification — all linked to heat numbers with digital sign-off and non-conformance workflows." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Survey", s: "Map fabrication processes, grades & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up heats, BOMs, routing & quality gates" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer stock data with heat & MTC records" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-facility locations ── */
const FACILITIES = [
  { t: "Main Fabrication Shop", sub: "Cutting, welding & heavy assembly", bays: 8, active: true },
  { t: "CNC Machining Centre", sub: "Precision machining & finishing", bays: 4, active: true },
  { t: "Project Site", sub: "On-site erection & installation", bays: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo MRP", color: "#714B67" },
  { name: "Odoo Quality", color: "#714B67" },
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "Odoo Project", color: "#714B67" },
  { name: "AutoCAD / SolidWorks", color: "#C1272D" },
  { name: "Nesting Software", color: "#22C55E" },
  { name: "Custom Steel ERP", color: "#F59E0B" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you track heat numbers through cutting and welding operations?", a: "Yes. Every piece cut from a plate, coil, or bar inherits the original heat number and MTC. When pieces are welded into assemblies, the system maintains a full genealogy — which heats went into which weldment. This traceability is maintained through to final dispatch and is audit-ready for EN 10204, ASME, and ISO requirements." },
  { q: "How do you handle weight-based costing for steel?", a: "Material quantities in BOMs are calculated from dimensions (length, width, thickness) and grade-specific density. Actual weight is captured at goods receipt and after cutting. Scrap from cutting operations is valued separately. The result is accurate per-job and per-piece costing based on actual material consumption — not estimates." },
  { q: "Can you manage plate remnants and offcuts?", a: "Yes. When a plate is cut, the system automatically creates remnant inventory records with the remaining dimensions, weight, and original heat number. Remnants are prioritised in the nesting algorithm for future jobs before new plates are issued — reducing scrap and material cost." },
  { q: "Do you support both structural steel and sheet metal fabrication?", a: "Yes. We configure for structural steel (beams, columns, trusses, plate girders), sheet metal (enclosures, ducts, tanks), pressure vessel fabrication, pipe spool fabrication, and general CNC machining. Each type gets its own routing, quality protocols, and BOM structure." },
  { q: "Can you integrate with nesting and CAD software?", a: "Yes. We integrate with nesting tools like SigmaNEST, ProNest, and Lantek, as well as CAD systems like AutoCAD, SolidWorks, and Tekla. BOM data flows from drawings into the ERP, and cut-lists flow from the ERP into nesting software." },
  { q: "How long does a steel fabrication ERP implementation take?", a: "Single-workshop setup with heat tracking and basic BOM takes 4–6 weeks. Full fabrication ERP with nesting integration, quality management, and multi-facility takes 10–16 weeks. Complex project-based fabrication with site erection tracking takes 14–22 weeks." },
] as const;

/* ── Component ── */
export function SteelMetalContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + heat tracker right ═══ */}
      <section className="sm-hero">
        <div className="sm-hero-glow sm-hero-glow-1" aria-hidden="true" />
        <div className="sm-hero-glow sm-hero-glow-2" aria-hidden="true" />
        <div className="sm-hero-inner">
          <div className="sm-hero-content">
            <div className="sm-hero-badge rev">
              <span className="sm-hero-badge-dot" />
              Steel &amp; Metal Fabrication
            </div>
            <h1 className="sm-hero-h rev">
              Steel &amp; Metal<br />Fabrication.<br />
              <span className="acc">Every heat. Every piece. Traced.</span>
            </h1>
            <p className="sm-hero-sub rev">
              Heat number tracking, multi-level fabrication BOMs, production scheduling, cut optimisation, and full quality traceability — <strong>integrated into your ERP.</strong>
            </p>
            <div className="sm-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your fabrication audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Heat tracker mockup */}
          <div className="sm-heats rev">
            <div className="sm-heats-title">Heat Inventory — Live Tracker</div>
            <div className="sm-heats-grid">
              {HEAT_LOTS.map((h) => (
                <div key={h.heat} className={`sm-heat sm-heat-${h.status}`}>
                  <div className="sm-heat-hdr">
                    <span className="sm-heat-id">{h.heat}</span>
                    <span className={`sm-heat-status sm-heat-status-${h.status}`}>
                      {h.status === "in-stock" ? "In Stock" : h.status === "cutting" ? "Cutting" : h.status === "welding" ? "Welding" : h.status === "machining" ? "Machining" : "QC Hold"}
                    </span>
                  </div>
                  <div className="sm-heat-meta">
                    <span className="sm-heat-grade">{h.grade}</span>
                    <span className="sm-heat-dim">{h.thick}</span>
                  </div>
                  <div className="sm-heat-weight">{h.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="sm-ops">
        <div className="sm-ops-inner">
          <div className="sm-ops-hdr rev">
            <div className="eyebrow">Fabrication operations</div>
            <h2>Track. Cut. Weld.<br /><span>Dispatch.</span></h2>
          </div>
          <div className="sm-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`sm-op sm-op-${op.color}`}>
                <div className="sm-op-icon">{op.icon}</div>
                <div className="sm-op-t">{op.t}</div>
                <p className="sm-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="sm-feat" id="features">
        <div className="sm-feat-inner">
          <div className="sm-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete fabrication control.</span></h2>
          </div>
          <div className="sm-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`sm-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="sm-feat-row-num">{f.num}</div>
                <div className="sm-feat-row-icon">{f.icon}</div>
                <div className="sm-feat-row-body">
                  <div className="sm-feat-row-t">{f.t}</div>
                  <p className="sm-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="sm-proc" id="process">
        <div className="sm-proc-inner">
          <div className="sm-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>digital fabrication.</span></h2>
          </div>
          <div className="sm-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="sm-proc-step-wrap">
                {i > 0 && <div className="sm-proc-dots" />}
                <div className="sm-proc-step">
                  <div className="sm-proc-step-icon">{p.icon}</div>
                  <div className="sm-proc-step-t">{p.t}</div>
                  <div className="sm-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to modernise</div>
              <h3>Want your shop floor <span>running on data?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a fabrication engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-FACILITY — split ═══ */}
      <section className="sm-multi" id="multi-facility">
        <div className="sm-multi-inner">
          <div className="sm-multi-hdr rev">
            <div className="eyebrow lt">Multi-facility</div>
            <h2>One system.<br /><span>Every workshop.</span></h2>
          </div>
          <div className="sm-multi-split rev">
            <div className="sm-multi-left">
              <div className="sm-multi-big-n">3+</div>
              <div className="sm-multi-big-l">Fabrication facilities managed from one ERP</div>
              <p className="sm-multi-big-s">Inter-facility material transfers, centralised heat tracking, and site-specific production scheduling — all orchestrated from a single system with real-time visibility across every workshop, yard, and project site.</p>
            </div>
            <div className="sm-multi-right">
              {FACILITIES.map((fac) => (
                <div key={fac.t} className={`sm-multi-loc${fac.active ? "" : " inactive"}`}>
                  <div className="sm-multi-loc-t">{fac.t}</div>
                  <div className="sm-multi-loc-sub">{fac.sub}</div>
                  {fac.bays > 0 && <div className="sm-multi-loc-stat">{fac.bays} production bays</div>}
                  {!fac.active && <div className="sm-multi-loc-stat">Field integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="sm-plat">
        <div className="sm-plat-inner rev">
          <div className="sm-plat-label">Steel &amp; fabrication integrations</div>
          <div className="sm-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="sm-plat-badge">
                <span className="sm-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sm-faq" id="faq">
        <div className="sm-faq-inner">
          <div className="sm-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Steel &amp; Metal Fabrication ERP.</span></h2>
          </div>
          <div className="sm-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="sm-faq-item">
                <summary className="sm-faq-q">{f.q}</summary>
                <p className="sm-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your fabrication partner</div>
              <h3>Most ERPs track jobs,<br /><span>not material traceability.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">68%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of fabricators still track heats on paper or spreadsheets.</strong>
                  Source: FMA, 2024. The result is failed audits, untraceable material, scrap that cannot be valued, and zero visibility into per-job material cost — problems that compound as order complexity grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer fabrication deployment covers the full material lifecycle — not just job costing. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Full heat traceability — receipt to dispatch</div>
                <p className="oi-closer-commit-b">Every piece in your shop traces back to its source plate, coil, or bar — with MTC, grade, and heat number linked through every cutting, welding, and assembly operation.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed scrap &amp; accuracy targets</div>
                <p className="oi-closer-commit-b">Material utilisation rates, inventory accuracy, and production schedule adherence are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Weight-based costing per job &amp; per piece</div>
                <p className="oi-closer-commit-b">No estimated weights, no flat-rate material costs. Actual weight from goods receipt flows through to cut pieces and assemblies — giving you true per-job profitability.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior fabrication engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who surveys your shop is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free fabrication audit</div>
              <h4>Get your steel ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your fabrication audit</span>
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
            <div className="eyebrow lt">Fabrication support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior fabrication engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For BOM configuration, heat tracking rules, and nesting setup questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production stoppage or heat traceability break. Answered by a senior fabrication engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring steel ERP engineers and fabrication domain specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior fabrication engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
