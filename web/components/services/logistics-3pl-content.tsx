/* ────────────────────────────────────────────────────────────────────────
   LOGISTICS & 3PL — unique page design
   Hero split + shipment tracker mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-hub section ·
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

/* ── Shipment tracker mockup ── */
const SHIPMENTS = [
  { awb: "AWB-90241", origin: "Mumbai", dest: "Dubai", carrier: "DHL Express", sla: "On time", status: "in-transit" as const },
  { awb: "AWB-90242", origin: "Delhi", dest: "London", carrier: "FedEx", sla: "On time", status: "delivered" as const },
  { awb: "AWB-90243", origin: "Chennai", dest: "New York", carrier: "Maersk", sla: "At risk", status: "in-transit" as const },
  { awb: "AWB-90244", origin: "Jebel Ali", dest: "Riyadh", carrier: "Aramex", sla: "On time", status: "dispatched" as const },
  { awb: "AWB-90245", origin: "Ahmedabad", dest: "Toronto", carrier: "Blue Dart", sla: "Breached", status: "delayed" as const },
  { awb: "AWB-90246", origin: "Pune", dest: "Frankfurt", carrier: "DHL Freight", sla: "On time", status: "in-transit" as const },
] as const;

/* ── Logistics operations ── */
const OPERATIONS = [
  { icon: <GridIcon />, t: "Smart WMS", s: "AI-powered warehouse management with intelligent putaway, wave picking, cross-docking, and real-time bin utilisation — optimised for 3PL multi-client operations with client-specific SLAs.", color: "ai" as const },
  { icon: <SparklesIcon />, t: "Route AI & Optimisation", s: "Machine learning models that calculate optimal delivery routes based on distance, traffic patterns, vehicle capacity, delivery windows, and priority — reducing fuel costs by up to 22%.", color: "green" as const },
  { icon: <EyeIcon />, t: "SLA Monitoring", s: "Real-time SLA tracking per client, per lane, and per carrier. Automated alerts when shipments approach breach thresholds. SLA compliance dashboards for client reporting and penalty management.", color: "purple" as const },
  { icon: <PackageIcon />, t: "Shipment Tracking", s: "End-to-end visibility from pickup to proof of delivery. Multi-carrier tracking aggregation, milestone updates, exception alerts, and customer-facing tracking portals — all from one system.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <GridIcon />, t: "Multi-Client WMS", s: "Warehouse operations partitioned by client — dedicated zones, bin locations, picking rules, and billing rates per client. Shared infrastructure, isolated operations. Real-time stock visibility per client with automated replenishment alerts." },
  { num: "02", icon: <SparklesIcon />, t: "AI Route Optimisation", s: "ML-powered route planning that considers vehicle capacity, delivery windows, traffic patterns, fuel costs, and driver hours. Dynamic re-routing when conditions change. Reduces total kilometres driven by up to 18% and delivery time by 25%." },
  { num: "03", icon: <EyeIcon />, t: "SLA Tracking & Penalty Management", s: "Define SLAs per client, per service level, and per lane — transit time, on-time delivery, damage rates, and inventory accuracy. Real-time breach alerts, automated penalty calculations, and compliance dashboards for client review meetings." },
  { num: "04", icon: <MonitorIcon />, t: "Carrier Management & Rate Shopping", s: "Centralised carrier database with contract rates, lane-specific pricing, and volumetric weight rules. Automated rate comparison at booking time — always selecting the optimal carrier for cost, speed, and SLA compliance." },
  { num: "05", icon: <WalletIcon />, t: "Automated 3PL Billing", s: "Activity-based billing — storage per pallet-day, pick-and-pack per order, value-added services per unit. Automated invoice generation per client with full audit trail. Revenue recognition tied to actual warehouse and transport activity." },
  { num: "06", icon: <BarChartIcon />, t: "Fleet & Transport Analytics", s: "Real-time dashboards for fleet utilisation, cost per km, on-time performance, delivery density, and driver productivity. Drill from company-level KPIs to individual vehicle and route performance." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map logistics flows, SLAs & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up WMS, routes, carriers & billing" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer client data with rate & SLA records" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-hub locations ── */
const HUBS = [
  { t: "Central Distribution Hub", sub: "Primary fulfilment & cross-dock facility", docks: 24, active: true },
  { t: "Regional Last-Mile Centre", sub: "Urban delivery & returns processing", docks: 8, active: true },
  { t: "Bonded Warehouse", sub: "Customs-bonded storage & forwarding", docks: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "Odoo Fleet", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "ShipStation", color: "#00B4D8" },
  { name: "Shiprocket", color: "#E63946" },
  { name: "Google Maps API", color: "#4285F4" },
  { name: "Custom TMS", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you manage multi-client warehouse operations in one system?", a: "Yes. We configure client-partitioned warehouse operations — each client gets dedicated zones, bin locations, picking strategies, and billing rates. Stock visibility, inbound/outbound operations, and reporting are fully isolated per client, while your team manages everything from a single interface." },
  { q: "How does AI route optimisation reduce delivery costs?", a: "Our ML models analyse historical delivery data, real-time traffic, vehicle capacity, delivery time windows, and fuel costs to calculate optimal routes. The system dynamically re-routes when conditions change — road closures, traffic jams, or priority shipment insertions. Clients typically see 18–22% reduction in fuel costs and 25% faster deliveries." },
  { q: "Can you track SLAs per client and per service level?", a: "Yes. We define SLA parameters per client, per service tier (express, standard, economy), and per lane (origin-destination pair). The system monitors transit time, on-time delivery percentage, damage rates, and inventory accuracy in real time — with automated alerts at 80% and 95% breach thresholds." },
  { q: "Do you support automated 3PL billing?", a: "Yes. We configure activity-based billing — storage per pallet-day, handling per unit, pick-and-pack per order, value-added services per activity. Invoices are generated automatically per billing cycle with full activity breakdown. Revenue recognition ties directly to actual warehouse and transport operations." },
  { q: "Can you integrate with multiple carriers and shipping platforms?", a: "Yes. We integrate with DHL, FedEx, Aramex, Blue Dart, Shiprocket, ShipStation, and custom carrier APIs. Rate shopping compares carriers at booking time. Tracking numbers, milestone updates, and proof of delivery flow back into the ERP automatically from every carrier." },
  { q: "How long does a logistics ERP implementation take?", a: "Single-warehouse 3PL setup takes 4–6 weeks. Full logistics ERP with multi-client WMS, route AI, and carrier integration takes 10–16 weeks. Enterprise multi-hub operations with customs, bonded warehousing, and fleet management take 14–24 weeks." },
] as const;

/* ── Component ── */
export function Logistics3plContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + shipment tracker right ═══ */}
      <section className="lg-hero">
        <div className="lg-hero-glow lg-hero-glow-1" aria-hidden="true" />
        <div className="lg-hero-glow lg-hero-glow-2" aria-hidden="true" />
        <div className="lg-hero-dots" aria-hidden="true" />
        <div className="lg-hero-inner">
          <div className="lg-hero-content">
            <div className="lg-hero-badge rev">
              <span className="lg-hero-badge-dot" />
              Logistics &amp; 3PL
            </div>
            <h1 className="lg-hero-h rev">
              Logistics<br />&amp; 3PL.<br />
              <span className="acc">Every shipment.<br />Every SLA.<br />Tracked.</span>
            </h1>
            <p className="lg-hero-sub rev">
              Smart warehouse management, AI route optimisation, SLA monitoring, carrier management, and automated 3PL billing — <strong>integrated into your ERP.</strong>
            </p>
            <div className="lg-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your logistics audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="lg-hero-stats rev">
              <div className="lg-hero-stat">
                <span className="lg-hero-stat-n">40+</span>
                <span className="lg-hero-stat-l">Carrier integrations</span>
              </div>
              <span className="lg-hero-stat-div" />
              <div className="lg-hero-stat">
                <span className="lg-hero-stat-n">98.5%</span>
                <span className="lg-hero-stat-l">SLA compliance</span>
              </div>
              <span className="lg-hero-stat-div" />
              <div className="lg-hero-stat">
                <span className="lg-hero-stat-n">500+</span>
                <span className="lg-hero-stat-l">Shipments / day</span>
              </div>
            </div>
          </div>

          {/* Shipment tracker mockup */}
          <div className="lg-tracker rev">
            <div className="lg-tracker-hdr">
              <div className="lg-tracker-live">
                <span className="lg-tracker-live-dot" />
                Live
              </div>
              <div className="lg-tracker-title">Shipment Tracker</div>
            </div>
            <div className="lg-tracker-list">
              {SHIPMENTS.map((s) => {
                const pct = s.status === "delivered" ? 100 : s.status === "in-transit" ? 62 : s.status === "dispatched" ? 30 : 45;
                return (
                  <div key={s.awb} className={`lg-ship lg-ship-${s.status}`}>
                    <div className="lg-ship-top">
                      <span className="lg-ship-awb">{s.awb}</span>
                      <span className={`lg-ship-sla lg-ship-sla-${s.sla.toLowerCase().replace(" ", "-")}`}>{s.sla}</span>
                    </div>
                    <div className="lg-ship-route">
                      <span className="lg-ship-origin">{s.origin}</span>
                      <span className="lg-ship-arrow">→</span>
                      <span className="lg-ship-dest">{s.dest}</span>
                    </div>
                    <div className="lg-ship-progress">
                      <div className={`lg-ship-progress-fill lg-ship-progress-${s.status}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="lg-ship-bottom">
                      <span className="lg-ship-carrier">{s.carrier}</span>
                      <span className={`lg-ship-status lg-ship-status-${s.status}`}>
                        {s.status === "in-transit" ? "In Transit" : s.status === "delivered" ? "Delivered" : s.status === "dispatched" ? "Dispatched" : "Delayed"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="lg-ops">
        <div className="lg-ops-inner">
          <div className="lg-ops-hdr rev">
            <div className="eyebrow">Logistics operations</div>
            <h2>Store. Route. Ship.<br /><span>Monitor.</span></h2>
          </div>
          <div className="lg-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`lg-op lg-op-${op.color}`}>
                <div className="lg-op-icon">{op.icon}</div>
                <div className="lg-op-t">{op.t}</div>
                <p className="lg-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="lg-feat" id="features">
        <div className="lg-feat-inner">
          <div className="lg-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete logistics control.</span></h2>
          </div>
          <div className="lg-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`lg-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="lg-feat-row-num">{f.num}</div>
                <div className="lg-feat-row-icon">{f.icon}</div>
                <div className="lg-feat-row-body">
                  <div className="lg-feat-row-t">{f.t}</div>
                  <p className="lg-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="lg-proc" id="process">
        <div className="lg-proc-inner">
          <div className="lg-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>intelligent logistics.</span></h2>
          </div>
          <div className="lg-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="lg-proc-step-wrap">
                {i > 0 && <div className="lg-proc-dots" />}
                <div className="lg-proc-step">
                  <div className="lg-proc-step-icon">{p.icon}</div>
                  <div className="lg-proc-step-t">{p.t}</div>
                  <div className="lg-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to optimise</div>
              <h3>Want your fleet <span>running on AI?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a logistics engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-HUB — split ═══ */}
      <section className="lg-multi" id="multi-hub">
        <div className="lg-multi-inner">
          <div className="lg-multi-hdr rev">
            <div className="eyebrow lt">Multi-hub</div>
            <h2>One system.<br /><span>Every hub.</span></h2>
          </div>
          <div className="lg-multi-split rev">
            <div className="lg-multi-left">
              <div className="lg-multi-big-n">3+</div>
              <div className="lg-multi-big-l">Distribution hubs managed from one ERP</div>
              <p className="lg-multi-big-s">Cross-dock operations, last-mile centres, and bonded warehouses — all orchestrated from a single system with real-time shipment visibility, SLA tracking, and automated carrier selection across every hub.</p>
            </div>
            <div className="lg-multi-right">
              {HUBS.map((hub) => (
                <div key={hub.t} className={`lg-multi-loc${hub.active ? "" : " inactive"}`}>
                  <div className="lg-multi-loc-t">{hub.t}</div>
                  <div className="lg-multi-loc-sub">{hub.sub}</div>
                  {hub.docks > 0 && <div className="lg-multi-loc-stat">{hub.docks} loading docks</div>}
                  {!hub.active && <div className="lg-multi-loc-stat">Customs integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="lg-plat">
        <div className="lg-plat-inner rev">
          <div className="lg-plat-label">Logistics &amp; 3PL integrations</div>
          <div className="lg-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="lg-plat-badge">
                <span className="lg-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="lg-faq" id="faq">
        <div className="lg-faq-inner">
          <div className="lg-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Logistics &amp; 3PL ERP.</span></h2>
          </div>
          <div className="lg-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="lg-faq-item">
                <summary className="lg-faq-q">{f.q}</summary>
                <p className="lg-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your logistics partner</div>
              <h3>Most ERPs track shipments,<br /><span>not logistics intelligence.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">61%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of 3PL providers still manage SLAs on spreadsheets.</strong>
                  Source: Gartner Supply Chain, 2024. The result is missed SLA penalties, unoptimised routes, manual billing errors, and zero visibility into per-client profitability — problems that compound as client count grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer logistics deployment covers the full supply chain lifecycle — not just shipment tracking. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><GridIcon /></div>
                <div className="oi-closer-commit-t">Multi-client WMS from day one</div>
                <p className="oi-closer-commit-b">Every client gets isolated warehouse operations — dedicated zones, picking rules, and billing rates — managed from a single system. No data leakage, no operational overlap.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed SLA &amp; cost targets</div>
                <p className="oi-closer-commit-b">On-time delivery rates, SLA compliance, and cost-per-shipment targets are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><SparklesIcon /></div>
                <div className="oi-closer-commit-t">AI-first routing &amp; carrier selection</div>
                <p className="oi-closer-commit-b">Every route is ML-optimised. Every carrier is selected by data — cost, speed, and SLA compliance history. No manual dispatch decisions, no gut-feel carrier picks.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior logistics engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your logistics is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free logistics audit</div>
              <h4>Get your 3PL roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your logistics audit</span>
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
            <div className="eyebrow lt">Logistics support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior logistics engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For WMS configuration, carrier setup, and billing rule questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Shipment sync failures or SLA breach incidents. Answered by a senior logistics engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring logistics ERP engineers and supply chain specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior logistics engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
