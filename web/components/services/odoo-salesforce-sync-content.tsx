/* ────────────────────────────────────────────────────────────────────────
   ODOO ↔ SALESFORCE SYNC — unique page design
   Centered hero + bridge diagram · Data mapping table · Architecture
   3-panel · Sync data pills · Use case grid · FAQ · Closer · Support
──────────────────────────────────────────────────────────────────────── */

import Link from "next/link";

import {
  ArrowRightIcon,
  ArrowsIcon,
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

/* ── Data mapping rows ── */
const MAPPINGS = [
  { odoo: "res.partner (Contacts)", sf: "Account / Contact", direction: "bi" as const, icon: <UsersIcon /> },
  { odoo: "crm.lead (Leads)", sf: "Lead / Opportunity", direction: "bi" as const, icon: <TrendingUpIcon /> },
  { odoo: "sale.order (Quotations)", sf: "Quote / Opportunity Product", direction: "odoo-to-sf" as const, icon: <PackageIcon /> },
  { odoo: "account.move (Invoices)", sf: "Custom Object / Report", direction: "odoo-to-sf" as const, icon: <WalletIcon /> },
  { odoo: "product.product", sf: "Product2 / PricebookEntry", direction: "bi" as const, icon: <GridIcon /> },
  { odoo: "stock.picking (Delivery)", sf: "Fulfilment Object", direction: "odoo-to-sf" as const, icon: <PackageIcon /> },
] as const;

/* ── Architecture layers ── */
const ARCH_PANELS = [
  { t: "Odoo ERP", sub: "Source of truth for operations", items: ["Sales orders & invoices", "Inventory & warehouse", "Manufacturing & procurement", "Accounting & HR"], color: "#714B67" },
  { t: "Sync Engine", sub: "Real-time middleware", items: ["Field mapping & transformation", "Conflict resolution rules", "Error handling & retry", "Audit logging"], color: "var(--ai)" },
  { t: "Salesforce CRM", sub: "Source of truth for sales", items: ["Leads & opportunities", "Accounts & contacts", "Campaigns & forecasts", "Reports & dashboards"], color: "#00A1E0" },
] as const;

/* ── What syncs — data type pills ── */
const SYNC_DATA = [
  "Contacts & Accounts", "Leads & Opportunities", "Quotations & Orders",
  "Invoices & Payments", "Products & Prices", "Delivery Status",
  "Campaign Data", "Custom Fields", "Attachments & Notes",
] as const;

/* ── Use cases ── */
const USE_CASES = [
  { icon: <TrendingUpIcon />, num: "01", t: "Sales closes in Salesforce, fulfilment runs in Odoo", s: "Sales reps manage pipeline in Salesforce. When a deal closes, the sales order, customer record, and product details sync to Odoo automatically — triggering procurement, manufacturing, and delivery without manual re-entry." },
  { icon: <WalletIcon />, num: "02", t: "Invoices in Odoo, visibility in Salesforce", s: "Finance creates invoices in Odoo. Payment status, outstanding amounts, and credit limits sync back to Salesforce — so sales reps see customer financial health without switching systems." },
  { icon: <PackageIcon />, num: "03", t: "Product catalogue stays in sync", s: "Add a product in Odoo with pricing, stock levels, and specs. It appears in Salesforce for quoting within seconds — no manual imports, no stale catalogues, no pricing mismatches." },
  { icon: <UsersIcon />, num: "04", t: "One customer record, two systems", s: "Customer data entered in either system syncs to the other — address changes, contact additions, account merges. Conflict rules ensure the master record wins when both change simultaneously." },
] as const;

/* ── Capabilities ── */
const CAPABILITIES = [
  { icon: <RefreshIcon />, t: "Real-Time Bi-Directional Sync", s: "Changes in either system propagate to the other within seconds — not hours, not batch overnight. Webhooks and change-data-capture ensure near-instant synchronisation." },
  { icon: <SettingsIcon />, t: "Configurable Field Mapping", s: "Map any Odoo field to any Salesforce field — including custom fields, related records, and computed values. Transformation rules handle data format differences automatically." },
  { icon: <ShieldIcon />, t: "Conflict Resolution", s: "When both systems update the same record simultaneously, configurable rules decide which wins — by timestamp, by system-of-record designation, or by field-level priority." },
  { icon: <EyeIcon />, t: "Full Audit Trail", s: "Every sync event is logged — what changed, when, which system initiated, and whether it succeeded. Error logs include full payloads for debugging." },
  { icon: <ZapIcon />, t: "Error Handling & Retry", s: "Failed syncs are queued, retried automatically, and escalated with full context. No silent failures — every error surfaces in your monitoring dashboard." },
  { icon: <MonitorIcon />, t: "Monitoring Dashboard", s: "Real-time visibility into sync health — records synced, errors, latency, and throughput. Alerts trigger when sync falls behind or error rates spike." },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Is the sync real-time or batch?", a: "Real-time. Changes propagate via webhooks and change-data-capture within seconds. We also support scheduled batch sync for high-volume historical migrations or specific use cases where real-time isn't required." },
  { q: "What happens when both systems update the same record?", a: "Configurable conflict resolution rules decide which update wins — by timestamp, by designated system-of-record, or by field-level priority. Conflicts are logged with full before/after data for audit." },
  { q: "Can you sync custom fields and custom objects?", a: "Yes. The field mapping engine supports standard and custom fields, custom objects, related records, and computed values. We map your specific data model — not just standard Salesforce/Odoo fields." },
  { q: "What if a sync fails?", a: "Failed records are automatically queued, retried with exponential backoff, and escalated to your monitoring dashboard with full error context. No silent failures — every exception is tracked and resolved." },
  { q: "How long does setup take?", a: "Typical sync implementations take 4–8 weeks. Simple contact/lead sync can go live in 2–3 weeks. Complex multi-object bidirectional sync with custom conflict rules takes 6–10 weeks." },
  { q: "Do you support Salesforce ↔ Odoo migration (one-time transfer)?", a: "Yes. We handle full one-time data migration in either direction — with field mapping, deduplication, validation, and relationship preservation — as well as ongoing real-time sync." },
] as const;

/* ── Component ── */
export function OdooSalesforceSyncContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + bridge diagram ═══ */}
      <section className="os-hero">
        <div className="os-hero-glow os-hero-glow-1" aria-hidden="true" />
        <div className="os-hero-glow os-hero-glow-2" aria-hidden="true" />
        <div className="os-hero-inner">
          <div className="os-hero-badge rev">
            <span className="os-hero-badge-dot" />
            Bi-directional integration
          </div>
          <h1 className="os-hero-h rev">
            Odoo ↔ Salesforce<br />
            <span className="acc">Sync.</span>
          </h1>
          <p className="os-hero-sub rev">
            Real-time bi-directional sync between Odoo ERP and Salesforce CRM. Contacts, leads, orders, invoices, and products — <strong>one source of truth across both systems.</strong>
          </p>
          <div className="os-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your integration roadmap</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#architecture">See the architecture</a>
          </div>

          {/* Bridge diagram */}
          <div className="os-bridge rev">
            <div className="os-bridge-node os-bridge-odoo">
              <div className="os-bridge-node-dot" style={{ background: "#714B67" }} />
              <span>Odoo ERP</span>
            </div>
            <div className="os-bridge-arrows">
              <div className="os-bridge-arrow os-bridge-arrow-r"><ArrowRightIcon /></div>
              <div className="os-bridge-label">Real-time sync</div>
              <div className="os-bridge-arrow os-bridge-arrow-l"><ArrowRightIcon /></div>
            </div>
            <div className="os-bridge-node os-bridge-sf">
              <div className="os-bridge-node-dot" style={{ background: "#00A1E0" }} />
              <span>Salesforce CRM</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DATA MAPPING TABLE ═══ */}
      <section className="os-map" id="mapping">
        <div className="os-map-inner">
          <div className="os-map-hdr rev">
            <div className="eyebrow">Data mapping</div>
            <h2>What syncs where.<br /><span>Field by field.</span></h2>
          </div>
          <div className="os-map-table rev">
            <div className="os-map-thead">
              <span>Odoo Model</span>
              <span>Direction</span>
              <span>Salesforce Object</span>
            </div>
            {MAPPINGS.map((m) => (
              <div key={m.odoo} className="os-map-row">
                <div className="os-map-cell os-map-odoo">
                  <div className="os-map-cell-icon">{m.icon}</div>
                  <span>{m.odoo}</span>
                </div>
                <div className="os-map-cell os-map-dir">
                  <span className={`os-map-dir-badge ${m.direction}`}>
                    {m.direction === "bi" ? "↔" : "→"}
                  </span>
                </div>
                <div className="os-map-cell os-map-sf">
                  <span>{m.sf}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARCHITECTURE — 3-panel ═══ */}
      <section className="os-arch" id="architecture">
        <div className="os-arch-inner">
          <div className="os-arch-hdr rev">
            <div className="eyebrow lt">Architecture</div>
            <h2>Three layers.<br /><span>Zero data loss.</span></h2>
          </div>
          <div className="os-arch-panels rev">
            {ARCH_PANELS.map((p, i) => (
              <div key={p.t} className="os-arch-panel-wrap">
                {i > 0 && <div className="os-arch-conn"><ArrowsIcon /></div>}
                <div className="os-arch-panel" style={{ borderTopColor: p.color }}>
                  <div className="os-arch-panel-t">{p.t}</div>
                  <div className="os-arch-panel-sub">{p.sub}</div>
                  <div className="os-arch-panel-items">
                    {p.items.map((item) => (
                      <div key={item.slice(0, 20)} className="os-arch-panel-item"><CheckIcon /><span>{item}</span></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SYNC DATA PILLS ═══ */}
      <section className="os-data">
        <div className="os-data-inner rev">
          <div className="os-data-label">Data types we sync</div>
          <div className="os-data-pills">
            {SYNC_DATA.map((d) => (
              <span key={d} className="os-data-pill">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITIES — 3×2 grid ═══ */}
      <section className="os-caps" id="capabilities">
        <div className="os-caps-inner">
          <div className="os-caps-hdr rev">
            <div className="eyebrow">Sync capabilities</div>
            <h2>Enterprise-grade<br /><span>integration engine.</span></h2>
          </div>
          <div className="os-caps-grid rev">
            {CAPABILITIES.map((c) => (
              <div key={c.t} className="os-cap">
                <div className="os-cap-icon">{c.icon}</div>
                <div className="os-cap-t">{c.t}</div>
                <p className="os-cap-s">{c.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — 2×2 numbered grid ═══ */}
      <section className="os-use" id="use-cases">
        <div className="os-use-inner">
          <div className="os-use-hdr rev">
            <div className="eyebrow lt">Use cases</div>
            <h2>How teams use<br /><span>the sync in practice.</span></h2>
          </div>
          <div className="os-use-grid rev">
            {USE_CASES.map((uc) => (
              <div key={uc.num} className="os-use-card">
                <div className="os-use-card-head">
                  <div className="os-use-card-num">{uc.num}</div>
                  <div className="os-use-card-icon">{uc.icon}</div>
                </div>
                <div className="os-use-card-t">{uc.t}</div>
                <p className="os-use-card-s">{uc.s}</p>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to connect</div>
              <h3>Want Odoo and Salesforce <span>talking to each other?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an integration engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="os-faq" id="faq">
        <div className="os-faq-inner">
          <div className="os-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Odoo ↔ Salesforce sync.</span></h2>
          </div>
          <div className="os-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="os-faq-item">
                <summary className="os-faq-q">{f.q}</summary>
                <p className="os-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your integration partner</div>
              <h3>Most CRM-ERP integrations<br /><span>break on day two.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">60%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of system integrations fail to maintain data consistency after 90 days.</strong>
                  Source: MuleSoft, 2024. The problem is integrations built for the happy path — no conflict resolution, no error handling, no monitoring. When edge cases hit, data diverges silently.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer sync deployment is engineered for exceptions first. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Real-time, not batch</div>
                <p className="oi-closer-commit-b">Changes sync within seconds via webhooks and CDC. No overnight batch jobs, no stale data, no manual exports between systems.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Zero data loss guarantee</div>
                <p className="oi-closer-commit-b">Every record is tracked. Failed syncs are queued, retried, and escalated. Full audit trail with before/after data for every sync event.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Full monitoring included</div>
                <p className="oi-closer-commit-b">Real-time sync dashboard with error rates, latency metrics, throughput graphs, and automated alerts. No blind spots in your integration.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior integration engineers</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who designs your sync architecture is the one who builds, deploys, and supports it — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free integration audit</div>
              <h4>Get your sync roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your integration audit</span>
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
            <div className="eyebrow lt">Integration support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior integration engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For field mapping, sync rules, and error resolution. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Sync pipeline failures or data consistency issues. Answered by a senior integration engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring integration engineers and API developers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
