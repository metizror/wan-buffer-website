/* ────────────────────────────────────────────────────────────────────────
   SALESFORCE CRM SETUP — unique page design
   Hero split + cloud hub · Scrolling cloud cards · Numbered service
   grid · Inline step bar · Industry pills · FAQ · Closer · Support
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

/* ── Cloud ecosystem hub ── */
const CLOUDS = [
  { name: "Sales Cloud", icon: <TrendingUpIcon />, color: "#00A1E0" },
  { name: "Service Cloud", icon: <HeartIcon />, color: "#1B96FF" },
  { name: "Marketing Cloud", icon: <MailIcon />, color: "#FF6B00" },
  { name: "Experience Cloud", icon: <UsersIcon />, color: "#2E844A" },
  { name: "Commerce Cloud", icon: <PackageIcon />, color: "#7B1FA2" },
] as const;

/* ── Cloud detail cards ── */
const CLOUD_CARDS = [
  { icon: <TrendingUpIcon />, t: "Sales Cloud", s: "Pipeline management, lead scoring, opportunity tracking, forecasting, and CPQ — configured for your B2B or B2C sales process. Every stage, field, and automation maps to how your team actually sells.", features: ["Lead & opportunity management", "Sales forecasting & pipelines", "Quote-to-cash automation", "Territory & team management"] },
  { icon: <HeartIcon />, t: "Service Cloud", s: "Case management, service console, knowledge base, and omnichannel routing — configured for your support workflows. SLA tracking, escalation rules, and customer satisfaction metrics built in.", features: ["Case management & routing", "Service console & knowledge base", "SLA tracking & escalation", "Omnichannel support"] },
  { icon: <MailIcon />, t: "Marketing Cloud", s: "Journey Builder, email automation, audience segmentation, and campaign analytics — connected to your CRM data. Marketing and sales share one source of truth.", features: ["Journey Builder campaigns", "Email & SMS automation", "Audience segmentation", "Campaign ROI analytics"] },
  { icon: <UsersIcon />, t: "Experience Cloud", s: "Customer portals, partner communities, and self-service sites — branded, secure, and connected to your CRM. Reduce support tickets by letting customers help themselves.", features: ["Customer self-service portals", "Partner community sites", "Branded experiences", "CRM-connected content"] },
  { icon: <CodeIcon />, t: "Lightning Development", s: "Custom Lightning components, Apex triggers, Visualforce pages, and AppExchange integrations — built for your specific business logic when out-of-the-box isn't enough.", features: ["Custom Lightning components", "Apex & Visualforce development", "AppExchange integrations", "Custom objects & workflows"] },
  { icon: <SparklesIcon />, t: "Einstein Analytics", s: "AI-powered insights, predictive lead scoring, opportunity scoring, and automated activity capture — intelligence layered on top of your CRM data.", features: ["Predictive lead scoring", "Opportunity insights", "Automated activity capture", "AI-powered forecasting"] },
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <SettingsIcon />, num: "01", t: "CRM Configuration", s: "Objects, fields, page layouts, record types, validation rules, and permission sets — configured to match your sales process, not a generic template." },
  { icon: <ZapIcon />, num: "02", t: "Workflow Automation", s: "Process Builder, Flow, and Apex triggers for lead assignment, email alerts, field updates, approval processes, and cross-object automation." },
  { icon: <RefreshIcon />, num: "03", t: "Data Migration", s: "Full migration from HubSpot, Zoho, Pipedrive, or spreadsheets — with deduplication, field mapping, relationship preservation, and validation." },
  { icon: <GridIcon />, num: "04", t: "Integration", s: "Connect Salesforce to your ERP, marketing, accounting, and communication platforms via APIs, MuleSoft, or custom middleware." },
  { icon: <MonitorIcon />, num: "05", t: "Reports & Dashboards", s: "Custom report types, dashboard components, scheduled reports, and Einstein Analytics — real-time visibility for every stakeholder." },
  { icon: <UsersIcon />, num: "06", t: "Training & Adoption", s: "Role-based training for reps, managers, and admins. In-app guidance, documentation, and 30-day post-launch adoption tracking." },
] as const;

/* ── Process ── */
const PROCESS = [
  { num: "01", t: "Discovery", s: "Map sales process & requirements" },
  { num: "02", t: "Architecture", s: "Design data model & automations" },
  { num: "03", t: "Build", s: "Configure, customise & integrate" },
  { num: "04", t: "Validate", s: "Test with real data & users" },
  { num: "05", t: "Launch", s: "Deploy, train & optimise" },
] as const;

/* ── Industries ── */
const INDUSTRIES = [
  "B2B SaaS", "Manufacturing", "Financial Services", "Healthcare",
  "Retail & eCommerce", "Real Estate", "Education", "Logistics",
  "Energy & Utilities", "Professional Services", "Nonprofits", "Construction",
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How long does a Salesforce CRM setup take?", a: "Typical setups take 4–10 weeks. Simple Sales Cloud configurations can go live in 3–4 weeks. Multi-cloud deployments with custom Lightning development and complex integrations take 8–12 weeks." },
  { q: "Can you migrate data from HubSpot, Zoho, or Pipedrive?", a: "Yes. We handle full migration including contacts, companies, deals/opportunities, activities, attachments, and custom fields — with deduplication, validation, and relationship preservation." },
  { q: "Do you integrate Salesforce with ERP systems?", a: "Yes. We integrate Salesforce with Odoo, SAP, Zoho, QuickBooks, and custom ERPs via REST/SOAP APIs, MuleSoft, or Salesforce Connect. Real-time bi-directional sync, not batch exports." },
  { q: "Which Salesforce edition do you recommend?", a: "It depends on your team size and requirements. We audit your needs and recommend the right edition — Essentials, Professional, Enterprise, or Unlimited — so you don't overpay for features you won't use." },
  { q: "Do you build custom Lightning components?", a: "Yes. When standard functionality isn't enough, we build custom Lightning Web Components, Apex classes, and Visualforce pages — following Salesforce development best practices and security guidelines." },
  { q: "What ongoing support do you provide?", a: "Every implementation includes 90 days of hypercare. After that, we offer SLA-based managed services — admin support, configuration changes, user management, and quarterly health checks." },
] as const;

/* ── Component ── */
export function SalesforceCrmContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + cloud hub right ═══ */}
      <section className="sf-hero">
        <div className="sf-hero-glow sf-hero-glow-1" aria-hidden="true" />
        <div className="sf-hero-glow sf-hero-glow-2" aria-hidden="true" />
        <div className="sf-hero-inner">
          <div className="sf-hero-content">
            <div className="sf-hero-badge rev">
              <span className="sf-hero-badge-dot" />
              Salesforce CRM setup
            </div>
            <h1 className="sf-hero-h rev">
              Salesforce CRM<br />Setup.<br />
              <span className="acc">Lead to close, automated.</span>
            </h1>
            <p className="sf-hero-sub rev">
              End-to-end Salesforce implementation — Sales Cloud, Service Cloud, Marketing Cloud, and custom Lightning development. <strong>From lead capture to closed deal, fully configured.</strong>
            </p>
            <div className="sf-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your CRM roadmap</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#clouds">See our cloud expertise</a>
            </div>
          </div>

          {/* Cloud hub */}
          <div className="sf-hub rev">
            <div className="sf-hub-center">
              <CloudIcon />
              <span>Salesforce</span>
            </div>
            <div className="sf-hub-ring">
              {CLOUDS.map((c, i) => (
                <div key={c.name} className="sf-hub-node" style={{ "--i": i, "--total": CLOUDS.length } as React.CSSProperties}>
                  <div className="sf-hub-node-icon" style={{ borderColor: `${c.color}40`, background: `${c.color}12` }}>
                    <span style={{ color: c.color }}>{c.icon}</span>
                  </div>
                  <div className="sf-hub-node-label">{c.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOUD CARDS — horizontal scroll ═══ */}
      <section className="sf-clouds" id="clouds">
        <div className="sf-clouds-inner">
          <div className="sf-clouds-hdr rev">
            <div>
              <div className="eyebrow">Cloud expertise</div>
              <h2>Six Salesforce clouds.<br /><span>One implementation partner.</span></h2>
            </div>
            <p>Every cloud is configured by certified consultants who understand both the platform and your industry. No generic templates — every setup maps to your actual business process.</p>
          </div>
          <div className="sf-clouds-scroll-wrap">
            <div className="sf-clouds-scroll rev">
              {CLOUD_CARDS.map((c) => (
                <div key={c.t} className="sf-cloud-card">
                  <div className="sf-cloud-card-icon">{c.icon}</div>
                  <div className="sf-cloud-card-t">{c.t}</div>
                  <p className="sf-cloud-card-s">{c.s}</p>
                  <div className="sf-cloud-card-feats">
                    {c.features.map((f) => (
                      <div key={f.slice(0, 20)} className="sf-cloud-card-feat"><CheckIcon /><span>{f}</span></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES — numbered grid ═══ */}
      <section className="sf-svc" id="services">
        <div className="sf-svc-inner">
          <div className="sf-svc-hdr rev">
            <div className="eyebrow lt">Implementation services</div>
            <h2>Six core services.<br /><span>Complete CRM delivery.</span></h2>
          </div>
          <div className="sf-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.num} className="sf-svc-card">
                <div className="sf-svc-card-num">{s.num}</div>
                <div className="sf-svc-card-icon">{s.icon}</div>
                <div className="sf-svc-card-t">{s.t}</div>
                <p className="sf-svc-card-s">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — inline step bar ═══ */}
      <section className="sf-proc" id="process">
        <div className="sf-proc-inner">
          <div className="sf-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Five phases to<br /><span>CRM success.</span></h2>
          </div>
          <div className="sf-proc-steps rev">
            {PROCESS.map((p, i) => (
              <div key={p.num} className="sf-proc-step">
                {i > 0 && <div className="sf-proc-conn" />}
                <div className="sf-proc-step-num">{p.num}</div>
                <div className="sf-proc-step-t">{p.t}</div>
                <div className="sf-proc-step-s">{p.s}</div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to implement</div>
              <h3>Want Salesforce configured for <span>your sales team?</span></h3>
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

      {/* ═══ INDUSTRIES — pill cloud ═══ */}
      <section className="sf-ind">
        <div className="sf-ind-inner rev">
          <div className="sf-ind-left">
            <div className="eyebrow lt">Industries we serve</div>
            <h2>Salesforce for<br /><span>every vertical.</span></h2>
          </div>
          <div className="sf-ind-pills">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="sf-ind-pill">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sf-faq" id="faq">
        <div className="sf-faq-inner">
          <div className="sf-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Salesforce implementation.</span></h2>
          </div>
          <div className="sf-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="sf-faq-item">
                <summary className="sf-faq-q">{f.q}</summary>
                <p className="sf-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your Salesforce partner</div>
              <h3>Most CRM setups<br /><span>configure features, not outcomes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">47%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of Salesforce implementations exceed budget or timeline.</strong>
                  Source: Nucleus Research, 2024. The root cause is starting with feature configuration instead of sales process mapping — building a CRM that matches the software, not the business.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer Salesforce deployment starts with your sales process — not the admin console. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Process-first configuration</div>
                <p className="oi-closer-commit-b">We map your sales process, approval chains, and handoffs before touching Salesforce. CRM mirrors your team — stages, fields, and automations match reality.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Adoption KPIs tracked</div>
                <p className="oi-closer-commit-b">Login rates, pipeline updates, and report usage are tracked weekly from day one. If adoption drops, we intervene with training — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Clean migration guaranteed</div>
                <p className="oi-closer-commit-b">Every record is mapped, validated, and reconciled. Relationships, attachments, and activity history are preserved — verified before and after.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Certified consultants only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who maps your process is the one who builds, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free CRM audit</div>
              <h4>Get your Salesforce roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your Salesforce audit</span>
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
            <div className="eyebrow lt">Salesforce support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Certified Salesforce consultants. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For CRM configuration, automation rules, and reporting questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">CRM downtime or data sync failures. Answered by a certified Salesforce consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring Salesforce developers and CRM consultants.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Certified consultants</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
