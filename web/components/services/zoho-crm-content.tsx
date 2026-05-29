/* ────────────────────────────────────────────────────────────────────────
   ZOHO CRM IMPLEMENTATION — unique page design
   Hero split + CRM pipeline mock · Why-Zoho value cards · Service
   feature blocks · Process bar · Advantage cards · FAQ · Closer · Support
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

/* ── CRM pipeline mockup ── */
const PIPELINE_STAGES = [
  { stage: "Lead In", deals: 24, value: "₹18.5L", color: "rgba(0,194,255,.15)" },
  { stage: "Qualified", deals: 16, value: "₹14.2L", color: "rgba(124,58,237,.15)" },
  { stage: "Proposal", deals: 9, value: "₹11.8L", color: "rgba(251,191,36,.15)" },
  { stage: "Negotiation", deals: 5, value: "₹8.4L", color: "rgba(16,163,127,.15)" },
  { stage: "Won", deals: 3, value: "₹6.1L", color: "rgba(34,197,94,.15)" },
] as const;

/* ── Why Zoho ── */
const WHY_ZOHO = [
  { icon: <WalletIcon />, n: "60–80%", l: "Lower cost vs SAP/Oracle", s: "Enterprise-grade CRM at a fraction of legacy ERP pricing. Perfect for growing businesses that need power without the price tag." },
  { icon: <TrendingUpIcon />, n: "45+", l: "Integrated apps", s: "CRM, Books, Inventory, People, Desk, Analytics, Creator — one ecosystem that eliminates data silos and multi-vendor complexity." },
  { icon: <CloudIcon />, n: "99.9%", l: "Uptime SLA", s: "Cloud-native architecture with built-in redundancy, automatic backups, and enterprise-grade security — no on-premise infrastructure to maintain." },
  { icon: <ShieldIcon />, n: "GDPR", l: "Compliant by default", s: "Built-in data encryption, two-factor authentication, role-based access, and GDPR/CCPA compliance tools — security isn't an add-on." },
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <SettingsIcon />, num: "01", t: "CRM Setup & Configuration", b: "We configure your Zoho CRM from scratch — modules, fields, layouts, pipeline stages, scoring rules, and automation workflows. Every configuration maps to your actual sales process, not a generic template.", bullets: ["Custom pipeline stages and deal fields", "Lead scoring and assignment rules", "Territory and role-based access setup", "Custom views, filters, and dashboards"] },
  { icon: <ZapIcon />, num: "02", t: "Workflow Automation", b: "Automate repetitive sales tasks — lead assignment, follow-up reminders, deal stage transitions, email sequences, and approval routing. Your sales team sells instead of doing admin.", bullets: ["Auto lead assignment by territory/round-robin", "Email sequence triggers on deal stage change", "Approval workflows for discounts and contracts", "Task creation and SLA monitoring"] },
  { icon: <CodeIcon />, num: "03", t: "Custom Module Development", b: "When standard modules aren't enough, we build custom ones using Zoho Creator and Deluge scripting. Custom objects, related lists, client portals, and industry-specific workflows — built for your exact operations.", bullets: ["Zoho Creator custom applications", "Deluge scripting for complex logic", "Client-facing portals and forms", "Industry-specific module development"] },
  { icon: <RefreshIcon />, num: "04", t: "Data Migration & Cleanup", b: "We migrate your data from spreadsheets, legacy CRMs, or other platforms into Zoho — with full deduplication, field mapping, validation, and relationship preservation. No data loss, no broken references.", bullets: ["Migration from Salesforce, HubSpot, or spreadsheets", "Automated deduplication and cleanup", "Field mapping with validation rules", "Historical data preservation"] },
  { icon: <GridIcon />, num: "05", t: "Third-Party Integration", b: "Connect Zoho CRM to your entire tech stack — accounting, eCommerce, marketing, communication, and payment platforms. Real-time bi-directional sync via APIs, webhooks, and Zoho Flow.", bullets: ["Zoho ↔ Shopify/Magento sync", "Razorpay/Stripe payment integration", "Google Workspace and Microsoft 365", "WhatsApp, Slack, and email platforms"] },
  { icon: <UsersIcon />, num: "06", t: "Training & Adoption", b: "We train your team role by role — sales reps learn pipeline management, managers learn reporting, admins learn configuration. Adoption isn't optional; it's engineered into the rollout plan.", bullets: ["Role-based training sessions", "Video guides and documentation", "Admin training for self-service changes", "30-day post-launch adoption support"] },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Discover", s: "Audit sales process, map pipeline" },
  { num: "02", t: "Configure", s: "Set up CRM, automations, integrations" },
  { num: "03", t: "Migrate", s: "Transfer data, validate, deduplicate" },
  { num: "04", t: "Train", s: "Role-based training, adoption plan" },
  { num: "05", t: "Optimise", s: "Monitor, refine, scale" },
] as const;

/* ── Advantages ── */
const ADVANTAGES = [
  { icon: <TargetIcon />, t: "Sales-Process-First Approach", s: "We map your actual sales process before touching Zoho. CRM is configured to match how your team sells — not the other way around. No generic templates, no configuration drift." },
  { icon: <CheckCircleIcon />, t: "Pre-Agreed Adoption KPIs", s: "User login rates, pipeline updates, and automation usage are tracked from day one. If adoption drops below target, we intervene with additional training — at our cost." },
  { icon: <UsersIcon />, t: "Senior CRM Consultants Only", s: "No juniors, no outsourcing. The consultant who maps your sales process is the one who configures, migrates, trains, and supports — named in the contract." },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How long does a Zoho CRM implementation take?", a: "Typical implementations take 4–8 weeks depending on complexity. Simple setups with standard pipelines can go live in 2–3 weeks. Complex multi-department deployments with custom modules and migrations take 8–12 weeks." },
  { q: "Can you migrate data from our existing CRM (Salesforce, HubSpot)?", a: "Yes. We handle full data migration from Salesforce, HubSpot, Pipedrive, spreadsheets, and legacy databases. Migration includes field mapping, deduplication, validation, and relationship preservation." },
  { q: "Do you integrate Zoho CRM with accounting and eCommerce platforms?", a: "Yes. We integrate Zoho CRM with Zoho Books, QuickBooks, Tally, Shopify, Magento, WooCommerce, Razorpay, Stripe, Google Workspace, Microsoft 365, WhatsApp, and Slack — via APIs, Zoho Flow, or custom connectors." },
  { q: "What ongoing support do you provide after go-live?", a: "Every implementation includes 90 days of hypercare — bug fixes, configuration adjustments, and user support. After that, we offer SLA-based annual maintenance contracts with guaranteed response times." },
  { q: "Is Zoho CRM suitable for enterprises or just small businesses?", a: "Zoho CRM serves businesses of all sizes. With Zoho One (45+ apps), custom modules via Creator, and enterprise-grade security, it handles complex multi-department operations at a fraction of SAP/Oracle pricing." },
  { q: "Can Zoho CRM be customised for our specific industry?", a: "Absolutely. We build industry-specific modules, fields, workflows, and reports using Zoho Creator and Deluge scripting. Manufacturing, real estate, logistics, healthcare, and eCommerce — each gets a purpose-built configuration." },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Zoho CRM", color: "#D32011" },
  { name: "Zoho One", color: "#D32011" },
  { name: "Zoho Books", color: "#2F855A" },
  { name: "Zoho Creator", color: "#E65100" },
  { name: "Zoho Desk", color: "#1A73E8" },
  { name: "Zoho Analytics", color: "#7B1FA2" },
  { name: "Zoho People", color: "#00897B" },
  { name: "Zoho Inventory", color: "#0277BD" },
] as const;

/* ── Component ── */
export function ZohoCrmContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + CRM pipeline right ═══ */}
      <section className="zc-hero">
        <div className="zc-hero-glow zc-hero-glow-1" aria-hidden="true" />
        <div className="zc-hero-glow zc-hero-glow-2" aria-hidden="true" />
        <div className="zc-hero-inner">
          <div className="zc-hero-content">
            <div className="zc-hero-badge rev">
              <span className="zc-hero-badge-dot" />
              Zoho CRM implementation
            </div>
            <h1 className="zc-hero-h rev">
              Zoho CRM<br />Implementation.<br />
              <span className="acc">Pipeline to profit.</span>
            </h1>
            <p className="zc-hero-sub rev">
              End-to-end Zoho CRM implementation — sales pipeline configuration, workflow automation, third-party integration, and data migration. <strong>From first deal to full-scale CRM operations.</strong>
            </p>
            <div className="zc-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your CRM roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#services">See our services</a>
            </div>
          </div>

          {/* CRM pipeline mockup */}
          <div className="zc-pipe rev">
            <div className="zc-pipe-bar">
              <span className="zc-pipe-bar-title">Sales Pipeline — Q3 2026</span>
              <span className="zc-pipe-bar-badge">5 stages</span>
            </div>
            <div className="zc-pipe-stages">
              {PIPELINE_STAGES.map((s) => (
                <div key={s.stage} className="zc-pipe-stage" style={{ background: s.color }}>
                  <div className="zc-pipe-stage-name">{s.stage}</div>
                  <div className="zc-pipe-stage-deals">{s.deals} deals</div>
                  <div className="zc-pipe-stage-value">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY ZOHO — value prop cards ═══ */}
      <section className="zc-why">
        <div className="zc-why-inner">
          <div className="zc-why-hdr rev">
            <div className="eyebrow">Why Zoho CRM</div>
            <h2>Enterprise power.<br /><span>Startup pricing.</span></h2>
          </div>
          <div className="zc-why-grid rev">
            {WHY_ZOHO.map((w) => (
              <div key={w.l} className="zc-why-card">
                <div className="zc-why-card-icon">{w.icon}</div>
                <div className="zc-why-card-n">{w.n}</div>
                <div className="zc-why-card-l">{w.l}</div>
                <p className="zc-why-card-s">{w.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — alternating feature blocks ═══ */}
      <section className="zc-svc" id="services">
        <div className="zc-svc-inner">
          <div className="zc-svc-hdr rev">
            <div className="eyebrow lt">Implementation services</div>
            <h2>Six services.<br /><span>One CRM partner.</span></h2>
            <p>Every service is delivered by senior Zoho consultants who understand both the platform and your business. No generic setups — every configuration maps to your actual sales process.</p>
          </div>

          {SERVICES.map((svc, i) => (
            <div key={svc.num} className={`zc-svc-block${i % 2 === 1 ? " alt" : ""} rev`}>
              <div className="zc-svc-block-meta">
                <div className="zc-svc-block-num">{svc.num}</div>
                <div className="zc-svc-block-icon">{svc.icon}</div>
              </div>
              <div className="zc-svc-block-body">
                <div className="zc-svc-block-t">{svc.t}</div>
                <p className="zc-svc-block-b">{svc.b}</p>
                <div className="zc-svc-block-bullets">
                  {svc.bullets.map((b) => (
                    <div key={b.slice(0, 25)} className="zc-svc-block-bullet"><CheckIcon /><span>{b}</span></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROCESS — horizontal progress bar ═══ */}
      <section className="zc-proc" id="process">
        <div className="zc-proc-inner">
          <div className="zc-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Five steps to<br /><span>CRM success.</span></h2>
          </div>
          <div className="zc-proc-bar rev">
            {PROCESS.map((p, i) => (
              <div key={p.num} className="zc-proc-step">
                <div className="zc-proc-step-fill" style={{ width: `${20 + i * 20}%` }} />
                <div className="zc-proc-step-content">
                  <div className="zc-proc-step-num">{p.num}</div>
                  <div className="zc-proc-step-t">{p.t}</div>
                  <div className="zc-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to implement</div>
              <h3>Want Zoho CRM configured for <span>your sales team?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a CRM consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ADVANTAGES ═══ */}
      <section className="zc-adv" id="why-us">
        <div className="zc-adv-inner">
          <div className="zc-adv-hdr rev">
            <div className="eyebrow lt">Why Wan Buffer</div>
            <h2>What sets our Zoho<br /><span>implementations apart.</span></h2>
          </div>
          <div className="zc-adv-grid rev">
            {ADVANTAGES.map((a) => (
              <div key={a.t} className="zc-adv-card">
                <div className="zc-adv-card-icon">{a.icon}</div>
                <div className="zc-adv-card-t">{a.t}</div>
                <p className="zc-adv-card-s">{a.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ZOHO ECOSYSTEM ═══ */}
      <section className="zc-eco">
        <div className="zc-eco-inner rev">
          <div className="zc-eco-label">Full Zoho ecosystem coverage</div>
          <div className="zc-eco-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="zc-eco-badge">
                <span className="zc-eco-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="zc-faq" id="faq">
        <div className="zc-faq-inner">
          <div className="zc-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Zoho CRM implementation.</span></h2>
          </div>
          <div className="zc-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="zc-faq-item">
                <summary className="zc-faq-q">{f.q}</summary>
                <p className="zc-faq-a">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your CRM partner</div>
              <h3>Most CRM implementations<br /><span>fail at adoption, not configuration.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">49%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of CRM implementations fail to meet expectations.</strong>
                  Source: Forrester, 2024. The root cause is almost never the software — it&apos;s implementations that prioritise features over sales process alignment and skip adoption planning entirely.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer CRM deployment starts with your sales process — not a feature checklist. We commit to four guarantees, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Sales-process-first</div>
                <p className="oi-closer-commit-b">We map your actual sales process before configuring a single field. CRM mirrors how your team sells — stages, handoffs, approvals, and follow-ups.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Adoption KPIs tracked</div>
                <p className="oi-closer-commit-b">Login rates, pipeline updates, and automation usage are tracked weekly. If adoption drops, we intervene with additional training — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Zero data loss migration</div>
                <p className="oi-closer-commit-b">Every record is mapped, validated, and reconciled during migration. Relationships, attachments, and history are preserved — verified before and after.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior CRM consultants only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who maps your process is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free CRM audit</div>
              <h4>Get your Zoho CRM roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your CRM audit</span>
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
            <div className="eyebrow lt">CRM support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior CRM consultants. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For CRM configuration, automation rules, and integration questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">CRM downtime or data sync failures. Answered by a senior CRM consultant — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring Zoho CRM consultants and integration developers. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior CRM consultants</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
