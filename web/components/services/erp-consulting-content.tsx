/* ────────────────────────────────────────────────────────────────────────
   ERP CONSULTING — unique page design
   Hero split + roadmap mock · Phase strip · Service cards with
   watermark icons · Callout block · Platform + industry grid ·
   Closer · Support
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

/* ── Roadmap mockup ── */
const ROADMAP = [
  { phase: "Phase 1", t: "Discovery & audit", weeks: "Weeks 1–2", status: "done" as const },
  { phase: "Phase 2", t: "Vendor evaluation", weeks: "Weeks 3–4", status: "done" as const },
  { phase: "Phase 3", t: "Roadmap & budget", weeks: "Week 5", status: "active" as const },
  { phase: "Phase 4", t: "Implementation kickoff", weeks: "Week 6+", status: "pending" as const },
] as const;

/* ── Consulting phases ── */
const PHASES = [
  { num: "01", t: "Assess", s: "Audit current processes & pain points" },
  { num: "02", t: "Select", s: "Evaluate vendors & recommend platform" },
  { num: "03", t: "Plan", s: "Build roadmap, budget & change plan" },
  { num: "04", t: "Implement", s: "Oversee deployment & integration" },
  { num: "05", t: "Optimise", s: "Post-launch review & continuous improvement" },
] as const;

/* ── Services ── */
const SERVICES = [
  { icon: <SearchIcon />, t: "Business Process Audit", s: "We map every process across sales, procurement, finance, HR, and operations — documenting workflows, bottlenecks, manual workarounds, and data silos. This becomes the foundation for your ERP scope.", deliverables: ["Process maps", "Gap analysis", "Pain-point register"] },
  { icon: <TargetIcon />, t: "Vendor Selection & Scoring", s: "We evaluate ERP platforms against your specific requirements — functionality, scalability, total cost of ownership, integration needs, and industry fit. Objective scoring, not vendor bias.", deliverables: ["Vendor scorecard", "TCO comparison", "Recommendation report"] },
  { icon: <BarChartIcon />, t: "ROI & Business Case", s: "We quantify the expected return — time saved, errors eliminated, revenue impact, and cost reduction — so your leadership team approves the investment with confidence, not faith.", deliverables: ["ROI projection", "Payback timeline", "Executive summary"] },
  { icon: <MonitorIcon />, t: "Implementation Roadmap", s: "We design a phased rollout plan — scope, milestones, resource requirements, risk mitigation, and go-live criteria. Every phase is sign-off gated with clear deliverables.", deliverables: ["Phase plan", "Resource matrix", "Risk register"] },
  { icon: <UsersIcon />, t: "Change Management", s: "We build the adoption strategy — stakeholder mapping, communication plans, training programmes, and resistance mitigation. ERP success is 30% technology and 70% people.", deliverables: ["Stakeholder map", "Communication plan", "Training roadmap"] },
  { icon: <RefreshIcon />, t: "Post-Implementation Review", s: "After go-live, we audit the deployment against original KPIs — what worked, what didn't, and what needs optimisation. This becomes the basis for continuous improvement.", deliverables: ["Performance audit", "Optimisation plan", "Lessons learned"] },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "Microsoft Dynamics", color: "#0078D4" },
  { name: "Custom ERP", color: "#00C2FF" },
] as const;

/* ── Industries ── */
const INDUSTRIES = [
  "Manufacturing", "Retail & eCommerce", "Logistics & 3PL", "Oil & Gas",
  "Real Estate", "Healthcare", "Finance & Services", "Construction",
  "Textile & Apparel", "Steel & Fabrication", "Education", "Hospitality",
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Why do I need ERP consulting before implementation?", a: "Without consulting, teams jump into implementation with unclear scope, wrong vendor choice, or incomplete requirements — leading to budget overruns, delays, and low adoption. Consulting defines the what and why before the how." },
  { q: "Are you tied to a specific ERP vendor?", a: "No. We are platform-agnostic. We evaluate Odoo, Zoho, Salesforce, SAP, Microsoft Dynamics, and custom solutions objectively — recommending the platform that best fits your requirements and budget." },
  { q: "How long does a consulting engagement take?", a: "Typical engagements run 4–6 weeks. A business process audit takes 1–2 weeks. Vendor selection adds 1–2 weeks. Roadmap and business case take another 1–2 weeks. Complex multi-entity organisations may take 8–10 weeks." },
  { q: "What deliverables do I get?", a: "Every engagement produces documented deliverables — process maps, gap analysis, vendor scorecards, ROI projections, implementation roadmap, resource matrix, and change management plan. All yours to keep." },
  { q: "Can you also handle the implementation?", a: "Yes. Many clients engage us for consulting first, then continue with implementation. However, we also deliver standalone consulting if you have an in-house team or another implementation partner." },
  { q: "What does ERP consulting cost?", a: "Consulting is scoped based on organisation size, number of departments, and complexity. We provide fixed-price proposals after a free discovery call — no hourly billing surprises." },
] as const;

/* ── Component ── */
export function ErpConsultingContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + roadmap right ═══ */}
      <section className="ec-hero">
        <div className="ec-hero-glow ec-hero-glow-1" aria-hidden="true" />
        <div className="ec-hero-glow ec-hero-glow-2" aria-hidden="true" />
        <div className="ec-hero-inner">
          <div className="ec-hero-content">
            <div className="ec-hero-badge rev">
              <span className="ec-hero-badge-dot" />
              ERP consulting
            </div>
            <h1 className="ec-hero-h rev">
              ERP<br />Consulting.<br />
              <span className="acc">Strategy before software.</span>
            </h1>
            <p className="ec-hero-sub rev">
              Platform-agnostic ERP consulting — business audit, vendor selection, implementation roadmap, and ROI planning. <strong>Before a single line of code is written.</strong>
            </p>
            <div className="ec-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Book a free discovery call</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#services">See our services</a>
            </div>
          </div>

          {/* Roadmap mockup */}
          <div className="ec-roadmap rev">
            <div className="ec-roadmap-title">Implementation Roadmap</div>
            {ROADMAP.map((r, i) => (
              <div key={r.phase} className={`ec-roadmap-item ec-roadmap-${r.status}`}>
                <div className="ec-roadmap-marker">
                  <div className="ec-roadmap-dot" />
                  {i < ROADMAP.length - 1 && <div className="ec-roadmap-line" />}
                </div>
                <div className="ec-roadmap-body">
                  <div className="ec-roadmap-phase">{r.phase}</div>
                  <div className="ec-roadmap-t">{r.t}</div>
                  <div className="ec-roadmap-weeks">{r.weeks}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHASE STRIP ═══ */}
      <section className="ec-phases">
        <div className="ec-phases-inner rev">
          {PHASES.map((p, i) => (
            <div key={p.num} className="ec-phase">
              {i > 0 && <div className="ec-phase-arrow"><ArrowRightIcon /></div>}
              <div className="ec-phase-content">
                <div className="ec-phase-num">{p.num}</div>
                <div className="ec-phase-t">{p.t}</div>
                <div className="ec-phase-s">{p.s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SERVICES — cards with deliverables ═══ */}
      <section className="ec-svc" id="services">
        <div className="ec-svc-inner">
          <div className="ec-svc-hdr rev">
            <div className="eyebrow">Consulting services</div>
            <h2>Six deliverables.<br /><span>Complete clarity.</span></h2>
            <p>Every consulting engagement produces documented, actionable deliverables — not slide decks that sit in a drawer. Each output drives the next phase of your ERP journey.</p>
          </div>
          <div className="ec-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.t} className="ec-svc-card">
                <div className="ec-svc-card-icon">{s.icon}</div>
                <div className="ec-svc-card-t">{s.t}</div>
                <p className="ec-svc-card-s">{s.s}</p>
                <div className="ec-svc-card-delivs">
                  {s.deliverables.map((d) => (
                    <span key={d} className="ec-svc-card-deliv"><FlagIcon />{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALLOUT — why consulting first ═══ */}
      <section className="ec-callout">
        <div className="ec-callout-inner rev">
          <div className="ec-callout-stat">70%</div>
          <div className="ec-callout-body">
            <h3>of ERP implementations exceed budget or timeline.</h3>
            <p>The root cause is almost never the software. It&apos;s unclear scope, wrong vendor choice, and missing change management. Consulting eliminates these risks before implementation begins.</p>
            <span className="ec-callout-src">Source: Panorama Consulting, 2024</span>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS & INDUSTRIES ═══ */}
      <section className="ec-plat-ind">
        <div className="ec-plat-ind-inner">
          <div className="ec-plat-ind-block rev">
            <div className="ec-plat-ind-label">Platforms we consult on</div>
            <div className="ec-plat-ind-row">
              {PLATFORMS.map((p) => (
                <span key={p.name} className="ec-plat-badge">
                  <span className="ec-plat-badge-dot" style={{ background: p.color }} />
                  {p.name}
                </span>
              ))}
            </div>
          </div>
          <div className="ec-plat-ind-divider" />
          <div className="ec-plat-ind-block rev">
            <div className="ec-plat-ind-label">Industries we serve</div>
            <div className="ec-plat-ind-row">
              {INDUSTRIES.map((ind) => (
                <span key={ind} className="ec-ind-pill">{ind}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ec-faq" id="faq">
        <div className="ec-faq-inner">
          <div className="ec-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>ERP consulting.</span></h2>
          </div>
          <div className="ec-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ec-faq-item">
                <summary className="ec-faq-q">{f.q}</summary>
                <p className="ec-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your ERP consultant</div>
              <h3>Most consultants sell software.<br /><span>We sell clarity.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">55%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of businesses regret their ERP vendor choice within 2 years.</strong>
                  Source: Mint Jutras, 2024. The cause is vendor selection driven by demos and pricing — not by objective scoring against real business requirements.
                </div>
              </div>
              <p>That&apos;s why Wan Buffer consulting is platform-agnostic. We recommend the ERP that fits your business — not the one that pays us the highest margin.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">Platform-agnostic advice</div>
                <p className="oi-closer-commit-b">We evaluate every major ERP platform objectively. Our recommendation is based on your requirements and budget — not vendor partnerships or reseller margins.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Documented deliverables</div>
                <p className="oi-closer-commit-b">Every engagement produces process maps, vendor scorecards, ROI projections, and implementation roadmaps. Yours to keep — whether you implement with us or not.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><BarChartIcon /></div>
                <div className="oi-closer-commit-t">Quantified ROI</div>
                <p className="oi-closer-commit-b">We don&apos;t deliver hand-wavy benefits. Time savings, cost reduction, and revenue impact are quantified with your actual data — giving leadership a business case they can approve.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior consultants only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The consultant who audits your business is the one who delivers the roadmap — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free discovery call</div>
              <h4>Get your ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your discovery call</span>
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
            <div className="eyebrow lt">Consulting support</div>
            <h2>One team for <span>questions &amp; guidance.</span></h2>
            <p>Three channels. Senior ERP consultants. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For scope questions, vendor comparisons, and roadmap clarifications. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Time-sensitive vendor decisions or board presentations. Answered by a senior ERP consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP consultants and business analysts.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior consultants only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Platform-agnostic</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day support</span>
          </div>
        </div>
      </section>
    </main>
  );
}
