/* ────────────────────────────────────────────────────────────────────────
   MANUFACTURING — unique page design
   Hero split + production dashboard mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-plant section ·
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

/* ── Production dashboard mockup ── */
const PROD_LINES = [
  { line: "L1", product: "AXLE-HD-42", progress: 87, status: "running" as const },
  { line: "L2", product: "BRG-STD-19", progress: 63, status: "running" as const },
  { line: "L3", product: "GBX-PRO-08", progress: 100, status: "done" as const },
  { line: "L4", product: "PLT-CNC-55", progress: 34, status: "running" as const },
  { line: "L5", product: "VLV-SS-71", progress: 0, status: "idle" as const },
  { line: "L6", product: "SHF-AL-23", progress: 52, status: "alert" as const },
] as const;

/* ── Manufacturing operations ── */
const OPERATIONS = [
  { icon: <SettingsIcon />, t: "Production Planning", s: "Master production scheduling with AI-driven demand forecasting, capacity planning, and automated work order generation across multiple work centres.", color: "ai" as const },
  { icon: <ShieldIcon />, t: "Quality Control", s: "AI-powered quality gates at every stage — incoming inspection, in-process checks, and final QC with automated defect detection and hold protocols.", color: "green" as const },
  { icon: <CpuIcon />, t: "Predictive Maintenance", s: "Machine learning models that analyse sensor data, vibration patterns, and cycle counts to predict equipment failures before they cause downtime.", color: "purple" as const },
  { icon: <ZapIcon />, t: "Autonomous Procurement", s: "AI agents that monitor stock levels, lead times, and production schedules — triggering purchase orders automatically when materials need replenishment.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Multi-Level BOM Management", s: "Define complex bills of materials with unlimited nesting — sub-assemblies, by-products, co-products, and phantom BOMs. Version control and engineering change orders built in." },
  { num: "02", icon: <SettingsIcon />, t: "Work Centre Routing", s: "Configure production routes across work centres with operation sequencing, time studies, and capacity constraints. Real-time shop floor visibility shows exactly where every order stands." },
  { num: "03", icon: <SparklesIcon />, t: "AI Quality Gates", s: "Machine vision and statistical process control powered by AI. Automated pass/fail decisions at each production stage, with full traceability from raw material to finished goods." },
  { num: "04", icon: <TrendingUpIcon />, t: "Predictive Maintenance", s: "IoT sensor integration with ML models that forecast equipment degradation. Automated work orders triggered before failure — reducing unplanned downtime by up to 45%." },
  { num: "05", icon: <RefreshIcon />, t: "Autonomous Procurement Agents", s: "AI agents that analyse production schedules, current stock, supplier lead times, and price trends — generating purchase orders autonomously with approval workflows." },
  { num: "06", icon: <BarChartIcon />, t: "Shop Floor Intelligence", s: "Real-time OEE dashboards, production analytics, cycle time tracking, and AI-powered bottleneck detection. Drill from plant-level KPIs to individual machine performance." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { num: "01", icon: <SearchIcon />, t: "Assess", s: "Map production processes, BOMs & pain points" },
  { num: "02", icon: <SettingsIcon />, t: "Configure", s: "Set up MRP, routing, quality & AI models" },
  { num: "03", icon: <DatabaseIcon />, t: "Migrate", s: "Transfer product data with full BOM validation" },
  { num: "04", icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel production run" },
] as const;

/* ── Multi-plant locations ── */
const PLANTS = [
  { t: "Main Production Facility", sub: "Primary manufacturing & assembly plant", lines: 12, active: true },
  { t: "Regional Fabrication Unit", sub: "CNC machining & metal fabrication", lines: 6, active: true },
  { t: "Contract Manufacturer", sub: "Third-party production integration", lines: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo MRP", color: "#714B67" },
  { name: "Odoo Quality", color: "#714B67" },
  { name: "Odoo Maintenance", color: "#714B67" },
  { name: "Odoo PLM", color: "#714B67" },
  { name: "SAP PP", color: "#0070F2" },
  { name: "IoT Sensors", color: "#22C55E" },
  { name: "Custom AI Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you set up multi-level BOMs with sub-assemblies in Odoo?", a: "Yes. We configure multi-level bills of materials with unlimited nesting — sub-assemblies, phantom BOMs, by-products, and co-products. Each BOM level supports version control, engineering change orders, and cost roll-ups across the full product structure." },
  { q: "How does AI quality control work on the shop floor?", a: "We integrate AI models that perform visual inspection, statistical process control, and dimensional analysis at each production stage. Defects are flagged in real time with automated hold protocols. Every inspection result is traced back to the raw material lot, operator, and machine." },
  { q: "What does predictive maintenance require from our machines?", a: "IoT sensors capture vibration, temperature, pressure, and cycle count data from your equipment. Our ML models analyse this data to predict failures 2–4 weeks before they happen. Works with any machine that can be fitted with standard sensors — no proprietary hardware needed." },
  { q: "Can you handle both discrete and process manufacturing?", a: "Yes. We configure discrete manufacturing with work orders and routing, and process manufacturing with batch recipes, yield tracking, and co-product/by-product management. Mixed-mode environments are fully supported." },
  { q: "How do autonomous procurement agents work?", a: "AI agents continuously monitor production schedules, current inventory, supplier lead times, and price trends. When materials need replenishment, the agent generates a purchase order with the optimal quantity and supplier — routed through your existing approval workflow." },
  { q: "How long does a manufacturing ERP implementation take?", a: "Basic MRP setup takes 4–6 weeks. Full manufacturing ERP with quality gates, predictive maintenance, and AI agents takes 10–16 weeks. Complex multi-plant environments with IoT integration take 12–20 weeks." },
] as const;

/* ── Component ── */
export function ManufacturingContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + production dashboard right ═══ */}
      <section className="mf-hero">
        <div className="mf-hero-glow mf-hero-glow-1" aria-hidden="true" />
        <div className="mf-hero-glow mf-hero-glow-2" aria-hidden="true" />
        <div className="mf-hero-inner">
          <div className="mf-hero-content">
            <div className="mf-hero-badge rev">
              <span className="mf-hero-badge-dot" />
              Manufacturing ERP
            </div>
            <h1 className="mf-hero-h rev">
              Manufacturing<br />&amp; MRP.<br />
              <span className="acc">AI on the shop floor.</span>
            </h1>
            <p className="mf-hero-sub rev">
              Multi-level BOM management, work centre routing, AI quality gates, predictive maintenance, and autonomous procurement — <strong>integrated into your ERP.</strong>
            </p>
            <div className="mf-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your manufacturing audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Production dashboard mockup */}
          <div className="mf-dash rev">
            <div className="mf-dash-title">Production Lines — Live Status</div>
            <div className="mf-dash-grid">
              {PROD_LINES.map((l) => (
                <div key={l.line} className={`mf-line mf-line-${l.status}`}>
                  <div className="mf-line-hdr">
                    <span className="mf-line-id">{l.line}</span>
                    <span className={`mf-line-status mf-line-status-${l.status}`}>
                      {l.status === "running" ? "Running" : l.status === "done" ? "Complete" : l.status === "alert" ? "Alert" : "Idle"}
                    </span>
                  </div>
                  <div className="mf-line-product">{l.product}</div>
                  <div className="mf-line-bar">
                    <div className="mf-line-fill" style={{ width: `${l.progress}%` }} />
                  </div>
                  <div className="mf-line-pct">{l.progress}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="mf-ops">
        <div className="mf-ops-inner">
          <div className="mf-ops-hdr rev">
            <div className="eyebrow">Manufacturing operations</div>
            <h2>Plan. Produce. Inspect.<br /><span>Maintain.</span></h2>
          </div>
          <div className="mf-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`mf-op mf-op-${op.color}`}>
                <div className="mf-op-icon">{op.icon}</div>
                <div className="mf-op-t">{op.t}</div>
                <p className="mf-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="mf-feat" id="features">
        <div className="mf-feat-inner">
          <div className="mf-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete production control.</span></h2>
          </div>
          <div className="mf-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`mf-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="mf-feat-row-num">{f.num}</div>
                <div className="mf-feat-row-icon">{f.icon}</div>
                <div className="mf-feat-row-body">
                  <div className="mf-feat-row-t">{f.t}</div>
                  <p className="mf-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="mf-proc" id="process">
        <div className="mf-proc-inner">
          <div className="mf-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>intelligent manufacturing.</span></h2>
          </div>
          <div className="mf-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="mf-proc-step-wrap">
                {i > 0 && <div className="mf-proc-dots" aria-hidden="true" />}
                <div className="mf-proc-step">
                  <div className="mf-proc-step-icon">{p.icon}</div>
                  <div className="mf-proc-step-body">
                    <span className="mf-proc-step-num" aria-hidden="true">{p.num}</span>
                    <div className="mf-proc-step-t">{p.t}</div>
                    <div className="mf-proc-step-s">{p.s}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to transform</div>
              <h3>Want your factory <span>running on AI?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a manufacturing engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-PLANT — split ═══ */}
      <section className="mf-multi" id="multi-plant">
        <div className="mf-multi-inner">
          <div className="mf-multi-hdr rev">
            <div className="eyebrow lt">Multi-plant</div>
            <h2>One system.<br /><span>Every factory.</span></h2>
          </div>
          <div className="mf-multi-split rev">
            <div className="mf-multi-left">
              <div className="mf-multi-big-n">3+</div>
              <div className="mf-multi-big-l">Production facilities managed from one ERP</div>
              <p className="mf-multi-big-s">Inter-plant transfers, centralised BOM management, and plant-specific routing — all orchestrated from a single system with real-time production visibility across every location.</p>
            </div>
            <div className="mf-multi-right">
              {PLANTS.map((plant) => (
                <div key={plant.t} className={`mf-multi-loc${plant.active ? "" : " inactive"}`}>
                  <div className="mf-multi-loc-t">{plant.t}</div>
                  <div className="mf-multi-loc-sub">{plant.sub}</div>
                  {plant.lines > 0 && <div className="mf-multi-loc-lines">{plant.lines} production lines</div>}
                  {!plant.active && <div className="mf-multi-loc-lines">API integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="mf-plat">
        <div className="mf-plat-inner rev">
          <div className="mf-plat-label">Manufacturing &amp; MRP integrations</div>
          <div className="mf-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="mf-plat-badge">
                <span className="mf-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="mf-faq" id="faq">
        <div className="mf-faq-inner">
          <div className="mf-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Manufacturing ERP.</span></h2>
          </div>
          <div className="mf-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="mf-faq-item">
                <summary className="mf-faq-q">{f.q}</summary>
                <p className="mf-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your manufacturing partner</div>
              <h3>Most ERPs track orders,<br /><span>not production intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">72%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of manufacturers still rely on manual quality checks.</strong>
                  Source: Deloitte, 2024. The result is undetected defects, production waste, unplanned downtime, and zero visibility into equipment health — problems that compound as production scales.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer manufacturing deployment covers the full production lifecycle — not just order tracking. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Production flow mapped digitally</div>
                <p className="oi-closer-commit-b">We map your actual production — work centres, routing, BOMs, and quality checkpoints — into the MRP. Every product has a precise digital production blueprint that mirrors your shop floor.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed OEE targets</div>
                <p className="oi-closer-commit-b">Overall Equipment Effectiveness, defect rates, and production cycle times are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><CpuIcon /></div>
                <div className="oi-closer-commit-t">AI-first quality &amp; maintenance</div>
                <p className="oi-closer-commit-b">Every quality checkpoint is AI-powered. Every critical machine is sensor-monitored. No manual-only inspection, no reactive maintenance — data-driven decisions at every stage.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior manufacturing engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your production is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free manufacturing audit</div>
              <h4>Get your MRP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your manufacturing audit</span>
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
            <div className="eyebrow lt">Manufacturing support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior manufacturing engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For BOM configuration, routing setup, and quality gate questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production line stoppages or MRP sync failures. Answered by a senior manufacturing engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring manufacturing ERP engineers and AI/ML specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior MRP engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
