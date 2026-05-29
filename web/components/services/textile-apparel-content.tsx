/* ────────────────────────────────────────────────────────────────────────
   TEXTILE & APPAREL — unique page design
   Hero split + size-colour matrix mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-unit section ·
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

/* ── Size-colour matrix mockup ── */
const MATRIX = {
  style: "FW-26 / Denim Trucker Jacket",
  colours: ["Indigo", "Black", "Stone"],
  sizes: ["S", "M", "L", "XL"],
  data: [
    [24, 60, 80, 48],
    [18, 45, 62, 36],
    [12, 30, 40, 20],
  ] as const,
} as const;

/* ── Apparel operations ── */
const OPERATIONS = [
  { icon: <GridIcon />, t: "Style-Level BOM", s: "Define bills of materials per style, per colourway — fabric, trims, labels, thread, and packaging. Automatic consumption calculation from marker efficiency and cut-plan ratios.", color: "ai" as const },
  { icon: <FlagIcon />, t: "Season & Collection Planning", s: "Plan collections by season, delivery window, and buyer. Tech-pack to production timeline with milestone tracking, sampling status, and fabric booking deadlines.", color: "green" as const },
  { icon: <SparklesIcon />, t: "AI Reorder & Forecasting", s: "Machine learning models that analyse sell-through rates, size curves, and seasonal trends to trigger reorders before stockouts — reducing lost sales by up to 35%.", color: "purple" as const },
  { icon: <PackageIcon />, t: "Fabric & Trim Inventory", s: "Track fabric by roll, lot, width, weight, and shade. Trim inventory by size, colour, and minimum order quantity. Automatic shade-lot matching for production batches.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Style-Level BOM Management", s: "Define BOMs at the style level with variants for every size and colourway. Fabric consumption calculated from marker length, width, and lay-plan efficiency. Trims, labels, packaging, and thread quantities auto-scale across the size matrix." },
  { num: "02", icon: <FlagIcon />, t: "Season & Collection Planning", s: "Plan entire seasons with delivery windows, buyer allocations, and production milestones. Track tech-pack approval, sampling rounds, pre-production sign-off, and bulk delivery dates — with automated alerts when timelines slip." },
  { num: "03", icon: <SparklesIcon />, t: "AI-Powered Reorder Intelligence", s: "ML models trained on your sell-through data, size-curve patterns, and seasonal trends. Automated reorder suggestions by style, size, and colour — with confidence scores and margin-aware quantity recommendations." },
  { num: "04", icon: <PackageIcon />, t: "Fabric Roll & Shade-Lot Tracking", s: "Every fabric roll tracked by supplier lot, shade, width, weight, and defect mapping. Shade-lot grouping ensures colour consistency across production batches. Automatic remnant tracking after spreading and cutting." },
  { num: "05", icon: <TargetIcon />, t: "Cut-Plan Optimisation", s: "Marker efficiency calculation, lay-plan generation, and fabric utilisation tracking per style. Size-ratio-based cut orders that maximise fabric usage — reducing wastage by up to 12% compared to manual planning." },
  { num: "06", icon: <BarChartIcon />, t: "Garment Costing & Margin Analysis", s: "Real-time cost sheets per style — fabric, trims, CMT (cut-make-trim), overheads, and logistics. Compare quoted vs actual cost at any stage. Margin analysis by style, buyer, and season with drill-down to component level." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Discover", s: "Map production flow, styles & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up BOMs, seasons, matrix & AI models" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer style data with fabric & trim records" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel season run" },
] as const;

/* ── Multi-unit locations ── */
const UNITS = [
  { t: "Cutting & Sewing Unit", sub: "Primary garment production facility", lines: 14, active: true },
  { t: "Fabric Warehouse", sub: "Roll storage, inspection & issue", lines: 0, rolls: 2400, active: true },
  { t: "Contract Manufacturer", sub: "Third-party CMT integration", lines: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo MRP", color: "#714B67" },
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "Odoo Purchase", color: "#714B67" },
  { name: "Odoo Sales", color: "#714B67" },
  { name: "Shopify / Magento", color: "#96BF48" },
  { name: "PLM / Tech-Pack", color: "#7C3AED" },
  { name: "Custom AI Models", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you handle size-colour matrix inventory in Odoo?", a: "Yes. We configure product variants using a size × colour matrix with full inventory tracking per SKU. Stock levels, reorder rules, and warehouse operations all work at the individual variant level — so you always know exactly how many units of Style X / Size M / Colour Indigo are in stock." },
  { q: "How does style-level BOM work for different colourways?", a: "Each style has a master BOM that defines fabric, trims, labels, and packaging. Colour variants inherit the structure but reference colour-specific materials — Indigo fabric, Black thread, matching labels. Fabric quantities are calculated from marker efficiency and cut-plan ratios, not flat estimates." },
  { q: "Can the AI reorder system handle seasonal demand patterns?", a: "Yes. Our ML models are specifically trained on seasonal fashion data — sell-through velocity, size-curve shifts between seasons, and promotional impact. The system distinguishes between continuity styles (ongoing reorder) and seasonal styles (one-time buys with clearance logic)." },
  { q: "Do you support fabric roll tracking with shade-lot matching?", a: "Yes. Every roll is tracked by supplier lot, shade band, width, weight, GSM, and defect map. When production orders are created, the system groups rolls by shade lot to ensure colour consistency across the entire batch — critical for garment quality." },
  { q: "Can you integrate with our existing PLM or tech-pack system?", a: "Yes. We integrate with PLM tools like Centric, Lectra, and Browzwear, as well as custom tech-pack systems. Style data, BOM structures, and measurement specs flow from PLM into the ERP. Sampling status and approval workflows are bidirectional." },
  { q: "How long does a textile and apparel ERP implementation take?", a: "Single-unit garment production setup takes 4–6 weeks. Full textile ERP with season planning, AI reorder, and fabric tracking takes 10–16 weeks. Multi-unit operations with PLM integration and contract manufacturer portals take 14–22 weeks." },
] as const;

/* ── Component ── */
export function TextileApparelContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + size-colour matrix right ═══ */}
      <section className="ta-hero">
        <div className="ta-hero-glow ta-hero-glow-1" aria-hidden="true" />
        <div className="ta-hero-glow ta-hero-glow-2" aria-hidden="true" />
        <div className="ta-hero-inner">
          <div className="ta-hero-content">
            <div className="ta-hero-badge rev">
              <span className="ta-hero-badge-dot" />
              Textile &amp; Apparel
            </div>
            <h1 className="ta-hero-h rev">
              Textile &amp;<br />Apparel.<br />
              <span className="acc">Every style. Every size. Planned.</span>
            </h1>
            <p className="ta-hero-sub rev">
              Style-level BOM management, season planning, AI-powered reorder, size-colour matrix inventory, and cut-plan optimisation — <strong>integrated into your ERP.</strong>
            </p>
            <div className="ta-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your apparel audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Size-colour matrix mockup */}
          <div className="ta-matrix rev">
            <div className="ta-matrix-title">{MATRIX.style}</div>
            <div className="ta-matrix-table">
              {/* Header row */}
              <div className="ta-matrix-row ta-matrix-header">
                <div className="ta-matrix-cell ta-matrix-label" />
                {MATRIX.sizes.map((s) => (
                  <div key={s} className="ta-matrix-cell ta-matrix-size">{s}</div>
                ))}
              </div>
              {/* Data rows */}
              {MATRIX.colours.map((colour, ci) => (
                <div key={colour} className="ta-matrix-row">
                  <div className="ta-matrix-cell ta-matrix-colour">
                    <span className={`ta-matrix-swatch ta-swatch-${ci}`} />
                    {colour}
                  </div>
                  {MATRIX.data[ci].map((qty, si) => (
                    <div key={`${ci}-${si}`} className={`ta-matrix-cell ta-matrix-qty${qty <= 20 ? " low" : ""}`}>
                      {qty}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="ta-matrix-footer">
              <span className="ta-matrix-total">Total: {MATRIX.data.flat().reduce((a, b) => a + b, 0)} units</span>
              <span className="ta-matrix-tag">3 colours · 4 sizes</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="ta-ops">
        <div className="ta-ops-inner">
          <div className="ta-ops-hdr rev">
            <div className="eyebrow">Apparel operations</div>
            <h2>Design. Plan. Produce.<br /><span>Reorder.</span></h2>
          </div>
          <div className="ta-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`ta-op ta-op-${op.color}`}>
                <div className="ta-op-icon">{op.icon}</div>
                <div className="ta-op-t">{op.t}</div>
                <p className="ta-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="ta-feat" id="features">
        <div className="ta-feat-inner">
          <div className="ta-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete apparel control.</span></h2>
          </div>
          <div className="ta-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`ta-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="ta-feat-row-num">{f.num}</div>
                <div className="ta-feat-row-icon">{f.icon}</div>
                <div className="ta-feat-row-body">
                  <div className="ta-feat-row-t">{f.t}</div>
                  <p className="ta-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="ta-proc" id="process">
        <div className="ta-proc-inner">
          <div className="ta-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>smarter production.</span></h2>
          </div>
          <div className="ta-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="ta-proc-step-wrap">
                {i > 0 && <div className="ta-proc-dots" />}
                <div className="ta-proc-step">
                  <div className="ta-proc-step-icon">{p.icon}</div>
                  <div className="ta-proc-step-t">{p.t}</div>
                  <div className="ta-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to streamline</div>
              <h3>Want your collections <span>delivered on time?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an apparel engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-UNIT — split ═══ */}
      <section className="ta-multi" id="multi-unit">
        <div className="ta-multi-inner">
          <div className="ta-multi-hdr rev">
            <div className="eyebrow lt">Multi-unit</div>
            <h2>One system.<br /><span>Every facility.</span></h2>
          </div>
          <div className="ta-multi-split rev">
            <div className="ta-multi-left">
              <div className="ta-multi-big-n">3+</div>
              <div className="ta-multi-big-l">Production units managed from one ERP</div>
              <p className="ta-multi-big-s">In-house cutting and sewing, fabric warehouses, and contract manufacturers — all orchestrated from a single system with real-time visibility across every unit, every style, and every delivery window.</p>
            </div>
            <div className="ta-multi-right">
              {UNITS.map((u) => (
                <div key={u.t} className={`ta-multi-loc${u.active ? "" : " inactive"}`}>
                  <div className="ta-multi-loc-t">{u.t}</div>
                  <div className="ta-multi-loc-sub">{u.sub}</div>
                  {u.lines > 0 && <div className="ta-multi-loc-stat">{u.lines} sewing lines</div>}
                  {u.rolls && u.rolls > 0 && <div className="ta-multi-loc-stat">{u.rolls.toLocaleString()} rolls tracked</div>}
                  {!u.active && <div className="ta-multi-loc-stat">API integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ta-plat">
        <div className="ta-plat-inner rev">
          <div className="ta-plat-label">Textile &amp; apparel integrations</div>
          <div className="ta-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ta-plat-badge">
                <span className="ta-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ta-faq" id="faq">
        <div className="ta-faq-inner">
          <div className="ta-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Textile &amp; Apparel ERP.</span></h2>
          </div>
          <div className="ta-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ta-faq-item">
                <summary className="ta-faq-q">{f.q}</summary>
                <p className="ta-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your apparel partner</div>
              <h3>Most ERPs track inventory,<br /><span>not style-level intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">58%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of garment manufacturers still plan production on spreadsheets.</strong>
                  Source: McKinsey Fashion Report, 2024. The result is missed delivery windows, excess fabric waste, size-ratio imbalances, and zero visibility into per-style profitability — problems that compound every season.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer apparel deployment covers the full style lifecycle — not just inventory counting. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Full size-colour matrix control</div>
                <p className="oi-closer-commit-b">Every style tracked across every size and colourway — from fabric booking through cutting, sewing, and packing to dispatch. No blind spots in your size matrix.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed on-time delivery targets</div>
                <p className="oi-closer-commit-b">Season delivery hit-rates, fabric utilisation, and production schedule adherence are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">AI-first reorder &amp; forecasting</div>
                <p className="oi-closer-commit-b">Every reorder decision is data-driven — sell-through velocity, size-curve analysis, and seasonal trends. No gut-feel replenishment, no overstock surprises.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior apparel engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your production is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free apparel audit</div>
              <h4>Get your textile ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your apparel audit</span>
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
            <div className="eyebrow lt">Apparel support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior apparel engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For BOM configuration, season setup, and fabric tracking questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production line stoppages or inventory sync failures. Answered by a senior apparel engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring textile ERP engineers and fashion-tech specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior apparel engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
