/* ────────────────────────────────────────────────────────────────────────
   INVENTORY & WMS — unique page design
   Hero split + bin grid mock · Operations cards · Alternating feature
   rows · Dotted process flow · Multi-warehouse section ·
   Platforms · Closer · Support
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

/* ── Bin grid mockup ── */
const BIN_GRID = [
  { bin: "A1", sku: "VAL-482", qty: 342, status: "full" as const },
  { bin: "A2", sku: "PMP-119", qty: 18, status: "low" as const },
  { bin: "A3", sku: "FIT-339", qty: 0, status: "empty" as const },
  { bin: "B1", sku: "FLG-775", qty: 561, status: "full" as const },
  { bin: "B2", sku: "GAU-208", qty: 47, status: "low" as const },
  { bin: "B3", sku: "BRK-610", qty: 230, status: "full" as const },
] as const;

/* ── Warehouse operations ── */
const OPERATIONS = [
  { icon: <PackageIcon />, t: "Receiving", s: "Inbound goods receipt with barcode scanning, quality inspection gates, and automatic putaway rules by product type, size, or velocity.", color: "ai" as const },
  { icon: <SearchIcon />, t: "Picking", s: "Wave picking, batch picking, and zone picking strategies — optimised routes that minimise travel time and maximise picker productivity.", color: "green" as const },
  { icon: <GridIcon />, t: "Packing", s: "Pack station workflows with box selection rules, weight verification, shipping label generation, and packing slip automation.", color: "purple" as const },
  { icon: <RocketIcon />, t: "Shipping", s: "Carrier integration, rate shopping, tracking number generation, and automated customer notifications — from packed to dispatched in seconds.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Bin Location Management", s: "Define zones, aisles, racks, and bins. Map your physical warehouse layout digitally. Every product has a precise home — and the system knows exactly where it is." },
  { num: "02", icon: <ShieldIcon />, t: "Lot & Serial Tracking", s: "Full traceability from receipt to delivery. Track lots for batch products, serial numbers for individual items. Essential for manufacturing, pharma, and food industries." },
  { num: "03", icon: <MonitorIcon />, t: "Barcode & Mobile Scanning", s: "Warehouse staff scan barcodes for receiving, picking, packing, and cycle counts. Mobile-first interface works on any Android/iOS device — no expensive hardware required." },
  { num: "04", icon: <RefreshIcon />, t: "Automated Replenishment", s: "When pick-face bins run low, the system triggers internal transfers from reserve stock automatically. Sales-driven reorder rules trigger purchase orders from suppliers." },
  { num: "05", icon: <BarChartIcon />, t: "Inventory Valuation", s: "FIFO, LIFO, average cost, and standard cost methods — calculated in real time. Multi-currency valuation for international operations. Landed cost tracking included." },
  { num: "06", icon: <EyeIcon />, t: "Real-Time Dashboards", s: "Stock levels, movement history, ageing analysis, dead stock reports, and warehouse KPIs — live from your ERP. Drill from summary to individual transaction." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Audit", s: "Map warehouse layout & current processes" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up bins, rules, routes & automations" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer stock data with full validation" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-warehouse locations ── */
const LOCATIONS = [
  { t: "Main Warehouse", sub: "Primary storage & fulfilment centre", bins: 480, active: true },
  { t: "Regional Hub", sub: "Satellite distribution point", bins: 120, active: true },
  { t: "3PL Partner", sub: "Third-party logistics integration", bins: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "Odoo Barcode", color: "#714B67" },
  { name: "Zoho Inventory", color: "#D32011" },
  { name: "SAP WM", color: "#0070F2" },
  { name: "ShipStation", color: "#00B4D8" },
  { name: "Shiprocket", color: "#E63946" },
  { name: "Custom WMS", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you set up multi-warehouse operations in Odoo?", a: "Yes. We configure multi-warehouse setups with inter-warehouse transfers, warehouse-specific reorder rules, and cross-dock workflows. Each warehouse gets its own bin locations, routes, and picking strategies." },
  { q: "Do you support barcode scanning?", a: "Yes. We configure barcode-based operations for receiving, picking, packing, inventory adjustments, and cycle counts. Works with Odoo Barcode on any Android/iOS device — no specialised hardware needed." },
  { q: "Can you integrate with shipping carriers?", a: "Yes. We integrate with Shiprocket, ShipStation, DHL, FedEx, BlueDart, and custom carrier APIs — automated label generation, tracking updates, and rate shopping." },
  { q: "How do you handle lot and serial tracking?", a: "We configure lot tracking for batch products and serial tracking for individual items — with full traceability from supplier receipt through production to customer delivery." },
  { q: "What inventory valuation methods do you support?", a: "FIFO, LIFO, average cost, and standard cost — configured per product category. Multi-currency valuation and landed cost tracking are included for international operations." },
  { q: "How long does a WMS implementation take?", a: "Simple single-warehouse setups take 3–4 weeks. Multi-warehouse with barcode, lot tracking, and carrier integration takes 6–10 weeks. Complex 3PL or manufacturing environments take 8–12 weeks." },
] as const;

/* ── Component ── */
export function InventoryWmsContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + bin grid right ═══ */}
      <section className="iw-hero">
        <div className="iw-hero-glow iw-hero-glow-1" aria-hidden="true" />
        <div className="iw-hero-glow iw-hero-glow-2" aria-hidden="true" />
        <div className="iw-hero-inner">
          <div className="iw-hero-content">
            <div className="iw-hero-badge rev">
              <span className="iw-hero-badge-dot" />
              Inventory &amp; WMS
            </div>
            <h1 className="iw-hero-h rev">
              Inventory<br />&amp; WMS.<br />
              <span className="acc">Every bin. Every SKU. Real time.</span>
            </h1>
            <p className="iw-hero-sub rev">
              Multi-warehouse management, bin location tracking, lot &amp; serial control, barcode scanning, and pick-pack-ship workflows — <strong>integrated into your ERP.</strong>
            </p>
            <div className="iw-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your warehouse audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
          </div>

          {/* Bin grid mockup */}
          <div className="iw-bins rev">
            <div className="iw-bins-title">Warehouse A — Bin Map</div>
            <div className="iw-bins-grid">
              {BIN_GRID.map((b) => (
                <div key={b.bin} className={`iw-bin iw-bin-${b.status}`}>
                  <div className="iw-bin-id">{b.bin}</div>
                  <div className="iw-bin-sku">{b.sku}</div>
                  <div className="iw-bin-qty">{b.qty} units</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="iw-ops">
        <div className="iw-ops-inner">
          <div className="iw-ops-hdr rev">
            <div className="eyebrow">Warehouse operations</div>
            <h2>Receive. Pick. Pack.<br /><span>Ship.</span></h2>
          </div>
          <div className="iw-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`iw-op iw-op-${op.color}`}>
                <div className="iw-op-icon">{op.icon}</div>
                <div className="iw-op-t">{op.t}</div>
                <p className="iw-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="iw-feat" id="features">
        <div className="iw-feat-inner">
          <div className="iw-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete warehouse control.</span></h2>
          </div>
          <div className="iw-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`iw-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="iw-feat-row-num">{f.num}</div>
                <div className="iw-feat-row-icon">{f.icon}</div>
                <div className="iw-feat-row-body">
                  <div className="iw-feat-row-t">{f.t}</div>
                  <p className="iw-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="iw-proc" id="process">
        <div className="iw-proc-inner">
          <div className="iw-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>warehouse automation.</span></h2>
          </div>
          <div className="iw-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="iw-proc-step-wrap">
                {i > 0 && <div className="iw-proc-dots" />}
                <div className="iw-proc-step">
                  <div className="iw-proc-step-icon">{p.icon}</div>
                  <div className="iw-proc-step-t">{p.t}</div>
                  <div className="iw-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to optimise</div>
              <h3>Want your warehouse <span>running on autopilot?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a WMS engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-WAREHOUSE — split ═══ */}
      <section className="iw-multi" id="multi-warehouse">
        <div className="iw-multi-inner">
          <div className="iw-multi-hdr rev">
            <div className="eyebrow lt">Multi-warehouse</div>
            <h2>One system.<br /><span>Every warehouse.</span></h2>
          </div>
          <div className="iw-multi-split rev">
            <div className="iw-multi-left">
              <div className="iw-multi-big-n">3+</div>
              <div className="iw-multi-big-l">Warehouses managed from one ERP</div>
              <p className="iw-multi-big-s">Inter-warehouse transfers, cross-dock workflows, and warehouse-specific reorder rules — all orchestrated from a single system with real-time visibility across every location.</p>
            </div>
            <div className="iw-multi-right">
              {LOCATIONS.map((loc) => (
                <div key={loc.t} className={`iw-multi-loc${loc.active ? "" : " inactive"}`}>
                  <div className="iw-multi-loc-t">{loc.t}</div>
                  <div className="iw-multi-loc-sub">{loc.sub}</div>
                  {loc.bins > 0 && <div className="iw-multi-loc-bins">{loc.bins} bins configured</div>}
                  {!loc.active && <div className="iw-multi-loc-bins">API integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="iw-plat">
        <div className="iw-plat-inner rev">
          <div className="iw-plat-label">WMS &amp; inventory integrations</div>
          <div className="iw-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="iw-plat-badge">
                <span className="iw-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="iw-faq" id="faq">
        <div className="iw-faq-inner">
          <div className="iw-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Inventory &amp; WMS.</span></h2>
          </div>
          <div className="iw-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="iw-faq-item">
                <summary className="iw-faq-q">{f.q}</summary>
                <p className="iw-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your WMS partner</div>
              <h3>Most inventory systems<br /><span>track stock, not operations.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">34%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of warehouses still run without a WMS.</strong>
                  Source: Statista, 2024. The result is misplaced stock, slow picking, shipping errors, and zero visibility into warehouse performance — problems that compound as order volume grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer WMS deployment covers the full warehouse lifecycle — not just stock counting. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Physical layout mapped digitally</div>
                <p className="oi-closer-commit-b">We map your actual warehouse — zones, aisles, racks, and bins — into the WMS. Every product has a precise digital home that matches its physical location.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed accuracy targets</div>
                <p className="oi-closer-commit-b">Picking accuracy, inventory accuracy, and order fulfilment speed are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><MonitorIcon /></div>
                <div className="oi-closer-commit-t">Barcode-first operations</div>
                <p className="oi-closer-commit-b">Every warehouse operation — receiving, picking, packing, counting — is barcode-driven. No manual entry, no paper-based processes, no data gaps.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior WMS engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your warehouse is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free warehouse audit</div>
              <h4>Get your WMS roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your warehouse audit</span>
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
            <div className="eyebrow lt">WMS support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior WMS engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For bin configuration, picking rules, and barcode setup questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Stock sync failures or warehouse operation incidents. Answered by a senior WMS engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring WMS engineers and supply chain specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior WMS engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
