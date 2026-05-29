/* ────────────────────────────────────────────────────────────────────────
   SMART INVENTORY MANAGEMENT — unique page design
   Hero split + shelf mockup · Pain-point scroll band · Full-width
   feature rows · Zigzag path methodology · Asymmetric results ·
   Platform badges · Closer · Support
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

/* ── Shelf mockup rows ── */
const SHELF_ROWS = [
  { sku: "SKU-4821", name: "Industrial Valve Set", stock: 342, reorder: 200, status: "healthy" as const },
  { sku: "SKU-1190", name: "Hydraulic Pump Unit", stock: 18, reorder: 50, status: "low" as const },
  { sku: "SKU-3392", name: "Copper Fitting Pack", stock: 0, reorder: 100, status: "out" as const },
  { sku: "SKU-7750", name: "Stainless Flange Ring", stock: 561, reorder: 150, status: "healthy" as const },
  { sku: "SKU-2088", name: "Pressure Gauge Kit", stock: 47, reorder: 60, status: "low" as const },
] as const;

/* ── Pain points ── */
const PAINS = [
  "Stockouts costing revenue",
  "Overstock tying up capital",
  "Manual reorder guesswork",
  "No real-time visibility",
  "Disconnected warehouses",
  "Spreadsheet-based planning",
] as const;

/* ── Features — full-width rows ── */
const FEATURES = [
  { icon: <TrendingUpIcon />, t: "AI Demand Forecasting", s: "ML models predict demand 30–90 days ahead by analysing historical sales, seasonality, market trends, and promotional calendars. Every SKU, every warehouse, every channel — updated daily.", stat: { n: "92%", l: "Forecast accuracy" } },
  { icon: <RefreshIcon />, t: "Automated Reordering", s: "Dynamic reorder points adjust automatically based on demand predictions, supplier lead times, and carrying costs. Purchase orders generate and route for approval without manual intervention.", stat: { n: "85%", l: "Fewer manual POs" } },
  { icon: <EyeIcon />, t: "Real-Time Stock Visibility", s: "Live dashboards showing stock levels, in-transit quantities, reserved stock, and available-to-promise — across every warehouse, every bin location, in real time.", stat: { n: "100%", l: "SKU visibility" } },
  { icon: <GridIcon />, t: "Multi-Warehouse Orchestration", s: "Intelligent allocation across warehouses based on proximity, stock levels, and fulfilment cost. Inter-warehouse transfers trigger automatically when demand patterns shift.", stat: { n: "3+", l: "Warehouses synced" } },
  { icon: <ShieldIcon />, t: "Safety Stock Optimisation", s: "ML calculates optimal safety stock for every SKU — balancing service level targets against carrying costs. No more blanket rules that overstock slow movers and understock fast ones.", stat: { n: "45%", l: "Less excess stock" } },
  { icon: <BarChartIcon />, t: "Inventory Analytics & Reporting", s: "Turn rate, days-on-hand, dead stock identification, ABC/XYZ classification, and cost-of-carry analysis — automated, accurate, and updated without manual spreadsheet work.", stat: { n: "Daily", l: "Auto-reports" } },
] as const;

/* ── How it works — zigzag path ── */
const STEPS = [
  { num: "01", icon: <DatabaseIcon />, t: "Connect your ERP", b: "We connect to your Odoo, Zoho, SAP, or Salesforce inventory modules via secure APIs. Historical data is ingested and validated — no manual exports required." },
  { num: "02", icon: <CpuIcon />, t: "Train demand models", b: "ML models train on your sales history, seasonal patterns, and supplier data. We benchmark multiple algorithms and deploy only the most accurate for your specific product mix." },
  { num: "03", icon: <SettingsIcon />, t: "Configure automation", b: "Reorder rules, safety stock formulas, and approval workflows are configured to match your procurement policies. Every rule is testable before go-live." },
  { num: "04", icon: <RocketIcon />, t: "Go live & optimise", b: "Dashboards, alerts, and automated POs go live. Continuous monitoring ensures models stay accurate as demand patterns evolve — retraining triggers automatically." },
] as const;

/* ── Results — asymmetric ── */
const HERO_STAT = { n: "60%", l: "Reduction in stockouts", sub: "Average across our inventory management deployments — measured, tracked, and verified against pre-agreed baselines." };
const MINI_STATS = [
  { n: "45%", l: "Less excess stock" },
  { n: "85%", l: "Fewer manual POs" },
  { n: "4.2×", l: "ROI in 6 months" },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho Inventory", color: "#D32011" },
  { name: "SAP", color: "#0070F2" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "Shopify", color: "#96BF48" },
  { name: "Amazon", color: "#FF9900" },
  { name: "WooCommerce", color: "#96588A" },
  { name: "Custom WMS", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function SmartInventoryContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + shelf mockup right ═══ */}
      <section className="si-hero">
        <div className="si-hero-glow si-hero-glow-1" aria-hidden="true" />
        <div className="si-hero-glow si-hero-glow-2" aria-hidden="true" />
        <div className="si-hero-inner">
          <div className="si-hero-content">
            <div className="si-hero-badge rev">
              <span className="si-hero-badge-dot" />
              Smart inventory management
            </div>
            <h1 className="si-hero-h rev">
              Smart Inventory<br />Management.<br />
              <span className="acc">Stock that thinks ahead.</span>
            </h1>
            <p className="si-hero-sub rev">
              AI-powered inventory that predicts demand, automates reordering, and eliminates stockouts — <strong>across every warehouse, every SKU, in real time.</strong>
            </p>
            <div className="si-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your inventory audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#how-it-works">See how it works</a>
            </div>
          </div>

          {/* Shelf mockup */}
          <div className="si-shelf rev">
            <div className="si-shelf-bar">
              <span className="si-shelf-bar-col">SKU</span>
              <span className="si-shelf-bar-col si-shelf-grow">Product</span>
              <span className="si-shelf-bar-col">Stock</span>
              <span className="si-shelf-bar-col">Status</span>
            </div>
            {SHELF_ROWS.map((row) => (
              <div key={row.sku} className={`si-shelf-row si-shelf-${row.status}`}>
                <span className="si-shelf-sku">{row.sku}</span>
                <span className="si-shelf-name si-shelf-grow">{row.name}</span>
                <span className="si-shelf-stock">{row.stock}</span>
                <span className={`si-shelf-badge ${row.status}`}>
                  {row.status === "healthy" ? "Healthy" : row.status === "low" ? "Low" : "Out"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAIN POINTS — scrolling band ═══ */}
      <section className="si-pains">
        <div className="si-pains-inner rev">
          <div className="si-pains-label">Problems we solve</div>
          <div className="si-pains-scroll">
            {PAINS.map((p) => (
              <span key={p} className="si-pain">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — full-width horizontal rows ═══ */}
      <section className="si-feat" id="features">
        <div className="si-feat-inner">
          <div className="si-feat-hdr rev">
            <div className="eyebrow">Core features</div>
            <h2>Six AI-powered capabilities.<br /><span>Zero guesswork.</span></h2>
          </div>
          <div className="si-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.t} className="si-feat-row rev">
                <div className="si-feat-row-icon">{f.icon}</div>
                <div className="si-feat-row-body">
                  <div className="si-feat-row-t">{f.t}</div>
                  <p className="si-feat-row-s">{f.s}</p>
                </div>
                <div className="si-feat-row-stat">
                  <div className="si-feat-stat-n">{f.stat.n}</div>
                  <div className="si-feat-stat-l">{f.stat.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — zigzag path ═══ */}
      <section className="si-how" id="how-it-works">
        <div className="si-how-inner">
          <div className="si-how-hdr rev">
            <div className="eyebrow lt">How it works</div>
            <h2>Four steps to<br /><span>intelligent inventory.</span></h2>
          </div>
          <div className="si-how-grid rev">
            {STEPS.map((s, i) => (
              <div key={s.num} className={`si-how-step${i % 2 === 1 ? " si-how-step-offset" : ""}`}>
                <div className="si-how-step-num">{s.num}</div>
                <div className="si-how-step-icon">{s.icon}</div>
                <div className="si-how-step-t">{s.t}</div>
                <p className="si-how-step-b">{s.b}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to optimise</div>
              <h3>Want AI managing <span>your inventory?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTS — asymmetric split ═══ */}
      <section className="si-results" id="results">
        <div className="si-results-inner">
          <div className="si-results-hdr rev">
            <div className="eyebrow">Proven results</div>
            <h2>Numbers that<br /><span>prove the ROI.</span></h2>
          </div>
          <div className="si-results-split rev">
            <div className="si-results-hero">
              <div className="si-results-hero-n">{HERO_STAT.n}</div>
              <div className="si-results-hero-l">{HERO_STAT.l}</div>
              <p className="si-results-hero-sub">{HERO_STAT.sub}</p>
            </div>
            <div className="si-results-minis">
              {MINI_STATS.map((s) => (
                <div key={s.l} className="si-results-mini">
                  <div className="si-results-mini-n">{s.n}</div>
                  <div className="si-results-mini-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="si-plat">
        <div className="si-plat-inner rev">
          <div className="si-plat-label">Integrates with your inventory stack</div>
          <div className="si-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="si-plat-badge">
                <span className="si-plat-badge-dot" style={{ background: p.color }} />
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
              <div className="eyebrow">Choosing your inventory partner</div>
              <h3>Most inventory systems<br /><span>report the past, not the future.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">43%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of businesses still manage inventory with spreadsheets.</strong>
                  Source: Wasp Barcode, 2024. The result is chronic stockouts, excess stock, and planning decisions based on last month&apos;s data — not tomorrow&apos;s demand.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer inventory deployment is built around four commitments — written into the contract and tracked weekly.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">SKU-level accuracy</div>
                <p className="oi-closer-commit-b">Demand models forecast at the individual SKU level — not broad category averages. Every product gets its own prediction based on its own demand pattern.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed KPIs</div>
                <p className="oi-closer-commit-b">Stockout reduction, excess stock decrease, and forecast accuracy are defined before development. If we miss targets, we keep working — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Continuous retraining</div>
                <p className="oi-closer-commit-b">Models retrain automatically as demand patterns evolve. Seasonal shifts, new products, and market changes are absorbed without manual intervention.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who design your inventory system are the ones who build, deploy, and support it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free inventory audit</div>
              <h4>Get your optimisation roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your inventory audit</span>
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
            <div className="eyebrow lt">Inventory support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For reorder configuration, forecast questions, and dashboard support. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Stock sync failures or automation incidents. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring supply chain engineers and ML specialists. Mention the role you are interested in.</p>
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
