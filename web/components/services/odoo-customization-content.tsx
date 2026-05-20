/* Odoo customization & installation — service page (single methodology + supporting sections). */

import type { CSSProperties } from "react";

import { OdooCustomizationFaq } from "./odoo-customization-faq";
import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  CloudIcon,
  CodeIcon,
  CpuIcon,
  CrossIcon,
  EyeIcon,
  GridIcon,
  HeartIcon,
  MailIcon,
  MonitorIcon,
  PhoneCallIcon,
  RefreshIcon,
  RocketIcon,
  SearchIcon,
  ShieldIcon,
  SparklesIcon,
  StarIcon,
  TrendingUpIcon,
  TrophyIcon,
  UsersIcon,
  WalletIcon,
} from "./odoo-service-icons";

/* ── Data ── */
const PHASES = [
  { icon: <UsersIcon/>, title: "Requirement gathering", body: "We set up a meeting for you and our technical team so that we can get more information about your requirements and demands.", tag: "Gather", ai: false, outcome: "Requirements doc", duration: "2–3 days", deliverables: ["Stakeholder session", "Requirements log", "Priority list", "Open questions"] },
  { icon: <SearchIcon/>, title: "Scope analysis", body: "We perform a gap analysis between the functionalities that are currently available in Odoo and the needs that you have outlined.", tag: "Scope", ai: false, outcome: "Gap analysis", duration: "3–5 days", deliverables: ["Fit-gap matrix", "Standard vs custom map", "Scope boundaries", "Risk notes"] },
  { icon: <EyeIcon/>, title: "Feasibility study", body: "An investigation into whether the suggested changes can be made in Odoo without lowering its performance or removing any of the features that come standard with the platform.", tag: "Feasibility", ai: true, outcome: "Go / no-go", duration: "3–5 days", deliverables: ["Technical assessment", "Performance impact", "Standard feature check", "Recommendation"] },
  { icon: <WalletIcon/>, title: "Estimation", body: "You will be provided with an estimate of the total cost, the length of time it will take, and the implementation approach.", tag: "Estimate", ai: false, outcome: "Signed estimate", duration: "2–4 days", deliverables: ["Cost breakdown", "Timeline", "Resource plan", "Assumptions"] },
  { icon: <CheckCircleIcon/>, title: "Customer approval", body: "To move forward, we await your approval before doing so.", tag: "Approve", ai: false, outcome: "Approval received", duration: "Your pace", deliverables: ["SoW sign-off", "Phase kickoff", "Communication plan", "Project charter"] },
  { icon: <CodeIcon/>, title: "Development", body: "Development of the platform will take place in accordance with the demands and specifications, as well as Odoo and partner standards.", tag: "Build", ai: true, outcome: "Modules built", duration: "2–8 weeks", deliverables: ["Custom modules", "Code reviews", "Standards compliance", "Sprint demos"] },
  { icon: <ShieldIcon/>, title: "Testing", body: "To determine the level of reliability, we perform multiple integrated tests in addition to unit testing.", tag: "QA", ai: true, outcome: "QA passed", duration: "1–2 weeks", deliverables: ["Unit tests", "Integration tests", "UAT scripts", "Defect log"] },
  { icon: <RocketIcon/>, title: "Delivery", body: "You receive the modules after they have been finished, tested, and evaluated.", tag: "Deliver", ai: false, outcome: "Modules live", duration: "2–5 days", deliverables: ["Deployment pack", "Release notes", "Handover session", "Support transition"] },
] as const;

const GOLD_FEATURES = [
  { icon: <WalletIcon/>, t: "Reasonably priced methods", b: "Takes into account all variables and does not alter settings that are already in place." },
  { icon: <CpuIcon/>, t: "Technical + functional depth", b: "Comprehensive understanding of both technical and functional aspects." },
  { icon: <ShieldIcon/>, t: "Standards & conventions", b: "Strict adherence to established norms and protocols—with superior coding conventions." },
  { icon: <RefreshIcon/>, t: "Long-term performance", b: "Facilitation of routine maintenance and consistent efficiency through operation." },
] as const;

const COMPARE = [
  { row: "Pricing approach", g: "Poor quality, low-cost options", p: "Reasonably priced methods" },
  { row: "Default functionality", g: "May cause default features to fail", p: "Does not alter existing settings" },
  { row: "Platform knowledge", g: "Limited inner workings", p: "Deep technical & functional grasp" },
  { row: "Development norms", g: "Possible detour from standards", p: "Strict adherence to protocols" },
  { row: "Code quality", g: "Weakened coding requirements", p: "Superior coding conventions" },
  { row: "Maintenance", g: "Challenges with upkeep", p: "Routine maintenance facilitated" },
  { row: "Performance", g: "Long-term performance risk", p: "Consistent efficiency in operation" },
] as const;

const BENTO_DATA = [
  { icon: <BookOpenIcon/>, t: "50+ Odoo blogs", b: "Odoo's potential is explored in more than 50 blogs from our team.", tag: "Knowledge", size: "", ai: false, variant: "glow-red", mini: { n: "50+", l: "Blogs" } },
  { icon: <RefreshIcon/>, t: "All Odoo releases", b: "Skilled in using any and all Odoo releases.", tag: "Versions", size: "", ai: true, variant: "glow-ai", mini: { n: "All", l: "Releases" } },
  { icon: <SparklesIcon/>, t: "Outstanding final products", b: "Quality deliverables backed by stringent rules for writing code.", tag: "Quality", size: "wide", ai: false, variant: "pattern", mini: { n: "4+", l: "Years exp." } },
  { icon: <TrophyIcon/>, t: "100+ happy clients", b: "Across a hundred happy clients all over the world.", tag: "Clients", size: "", ai: false, variant: "glow-red", mini: { n: "100+", l: "Clients" } },
  { icon: <GridIcon/>, t: "All Odoo modules", b: "Compatibility with all Odoo modules, both technically and functionally.", tag: "Modules", size: "", ai: true, variant: "glow-ai", mini: { n: "All", l: "Modules" } },
  { icon: <CloudIcon/>, t: "Community & enterprise", b: "Service available in business and public versions.", tag: "Editions", size: "wide", ai: false, variant: "pattern", mini: { n: "2", l: "Editions" } },
  { icon: <MonitorIcon/>, t: "UI & UX specialists", b: "Developers who specialize in user interface and user experience.", tag: "UI/UX", size: "", ai: true, variant: "glow-ai", mini: { n: "20+", l: "Free apps" } },
] as const;

const STATS = [
  { n: "4+", l: "Years experience", g: false },
  { n: "100+", l: "Happy clients", g: false },
  { n: "20+", l: "Free Odoo apps", g: false },
  { n: "Gold", l: "Odoo partner", g: true },
] as const;

/* ── Component ── */
export function OdooCustomizationContent() {
  return (
    <main className="svc-page">

      {/* HERO LUXE */}
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">odoo</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo ERP services</div>
            <div className="oi-hero-lux-pin">
              <span className="oi-hero-lux-pin-dot" />
              <StarIcon />
              <span>Odoo Gold Partner</span>
            </div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln"><span className="ai">Customization</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Business applications must be tailored to individual users—with preferences and needs built in. <strong>Odoo offers a complete solution</strong>, and Wan Buffer evaluates what else is necessary, then designs a plan to implement those features.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Discuss customization</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#phases">See the eight steps</a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We deliver</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Custom modules</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Installation</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Community &amp; Enterprise</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Open HRMS</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">UI / UX</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="oi-stats-band">
        <div className="oi-stats-band-inner">
          {STATS.map((s) => (
            <div key={s.l} className="oi-stats-band-item">
              <div className={`oi-stats-band-n${s.g ? " gold" : ""}`}>{s.n}</div>
              <div className="oi-stats-band-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="oi-meth" id="phases">
        <div className="oi-meth-inner">
          <div className="oi-meth-intro rev">
            <div className="oi-meth-intro-l">
              <div className="eyebrow">Methodology</div>
              <h2>Eight steps.<br /><span>From gather to delivery.</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Process</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  Odoo customization &amp; installation
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>Our elevated customisation services help customers maximise the value of their application and progress toward organisational objectives. Expanding on Odoo&apos;s modularization, our tech support staff help you meet your specific requirements.</p>
              <div className="oi-meth-intro-mini">
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">8</span><span className="oi-meth-mini-u">steps</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Sign-off gated</div>
                  <div className="oi-meth-mini-s">Each one ends in your acceptance.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">12–16</span><span className="oi-meth-mini-u">weeks</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Typical timeline</div>
                  <div className="oi-meth-mini-s">End-to-end, discovery → go-live.</div>
                </div>
                <div className="oi-meth-mini">
                  <div className="oi-meth-mini-row"><span className="oi-meth-mini-n">100</span><span className="oi-meth-mini-u">%</span></div>
                  <div className="oi-meth-mini-bar" />
                  <div className="oi-meth-mini-l">Senior-led</div>
                  <div className="oi-meth-mini-s">Never juniors or shadow staffing.</div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="oi-meth-strip rev"
            data-cols={PHASES.length}
            style={{ "--oi-meth-cols": PHASES.length } as CSSProperties}
          >
            {PHASES.map((phase, i) => (
              <div key={phase.tag} className={`oi-meth-strip-step${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-strip-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="oi-meth-strip-label">{phase.tag}</div>
              </div>
            ))}
          </div>

          <div className="oi-meth-grid rev" data-cols={PHASES.length}>
            {PHASES.map((phase, i) => (
              <div key={phase.title} className={`oi-meth-card${phase.ai ? " ai" : ""}`}>
                <div className="oi-meth-card-head">
                  <div className="oi-meth-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="oi-meth-card-icon">{phase.icon}</div>
                </div>
                <div className="oi-meth-card-tag">{phase.tag}</div>
                <div className="oi-meth-card-title">{phase.title}</div>
                <p className="oi-meth-card-body">{phase.body}</p>
                <div className="oi-meth-card-deliv-l">What you walk away with</div>
                <div className="oi-meth-card-deliv">
                  {phase.deliverables.map((d) => (
                    <div key={d} className="oi-meth-card-deliv-item">
                      <span className="oi-meth-card-deliv-icon"><CheckIcon /></span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
                <div className="oi-meth-card-foot">
                  <div className="oi-meth-card-foot-l">
                    <span className="oi-meth-card-foot-k">{phase.duration}</span>
                    <span className="oi-meth-card-foot-v">{phase.outcome}</span>
                  </div>
                  <span className="oi-meth-card-foot-arrow"><ArrowRightIcon /></span>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready when you are</div>
              <h3>Ready to tailor Odoo to <span>your business?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a consultant</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOLD PARTNER */}
      <section className="oi-gp" id="gold-partner">
        <div className="oi-gp-inner">
          <div className="oi-gp-hdr rev">
            <div className="eyebrow">Why experts matter</div>
            <h2 className="sec-h">Why experts need <span className="acc">to do it</span></h2>
          </div>

          <div className="oi-gp-spotlight rev">
            <div className="oi-gp-spotlight-top">
              <div className="oi-gp-spotlight-l">
                <div className="oi-gp-spotlight-head">
                  <div className="oi-gp-badge-lg">
                    <StarIcon />
                    <span className="oi-gp-badge-lg-t">Odoo Gold Partner · Certified</span>
                  </div>
                </div>
                <h3>Expert partners deliver maintainable customization—<span>non-experts risk your defaults.</span></h3>
              </div>
              <div className="oi-gp-spotlight-stat">
                <div className="oi-gp-spotlight-stat-n">Gold</div>
                <div className="oi-gp-spotlight-stat-l">Tier-1<br />Partner Status</div>
              </div>
            </div>
            <div className="oi-gp-features">
              {GOLD_FEATURES.map((f) => (
                <div key={f.t} className="oi-gp-feature">
                  <div className="oi-gp-feature-icon">{f.icon}</div>
                  <div>
                    <div className="oi-gp-feature-t">{f.t}</div>
                    <div className="oi-gp-feature-b">{f.b}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="oi-gp-spotlight-meta">
              <div className="oi-gp-meta-item"><StarIcon /> Tier-1 Certified</div>
              <div className="oi-gp-meta-item"><CheckCircleIcon /> Methodology audited</div>
              <div className="oi-gp-meta-item"><HeartIcon /> 254+ verifiable references</div>
            </div>
          </div>

          <div className="oi-gp-compare-wrap rev">
            <div className="oi-gp-recommend"><StarIcon /> Recommended</div>
            <div className="oi-gp-compare">
              <div className="oi-gp-compare-hdr">
                <div>Decision factor</div>
                <div>Non-expert partner</div>
                <div><StarIcon /> Expert partner</div>
              </div>
              {COMPARE.map((c) => (
                <div key={c.row} className="oi-gp-compare-row">
                  <div>{c.row}</div>
                  <div><span className="oi-gp-cell-content"><span className="oi-gp-cross"><CrossIcon /></span>{c.g}</span></div>
                  <div><span className="oi-gp-cell-content"><span className="oi-gp-check"><CheckIcon /></span>{c.p}</span></div>
                </div>
              ))}
            </div>
          </div>

          <div className="oi-gp-cta rev">
            <div className="oi-gp-cta-l">
              <a className="oi-cta-big" href="#contact">
                <span>Engage Wan Buffer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
            <span className="oi-gp-cta-note">
              <strong>Day-1 cost is a number.</strong> Lifecycle cost is the truth.
            </span>
          </div>
        </div>
      </section>

      {/* BENTO — magazine spread */}
      <section className="oi-bento-sec" id="why-us">
        <div className="oi-bento-inner">

          {/* Header: intro + credentials card */}
          <div className="oi-bento-hdr rev">
            <div className="oi-bento-hdr-l">
              <div className="eyebrow">Why Wan Buffer</div>
              <h2>What you get<br /><span>on the ground.</span></h2>
            </div>
            <div className="oi-bento-hdr-r">
              <p>Finding the source of technical issues is something our staff can help with. We ship outstanding final products with stringent rules for writing code—and creators of the Open Human Resource Management System.</p>
              <div className="oi-bento-credit">
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n r">254<span style={{ fontSize: ".7em" }}>+</span></div>
                  <div className="oi-bento-credit-l">Projects shipped</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n">7<span style={{ fontSize: ".7em" }}>+ yrs</span></div>
                  <div className="oi-bento-credit-l">Senior avg</div>
                </div>
                <div className="oi-bento-credit-cell">
                  <div className="oi-bento-credit-n ai">100<span style={{ fontSize: ".7em" }}>%</span></div>
                  <div className="oi-bento-credit-l">Peer reviewed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero feature banner */}
          <div className="oi-bento-hero rev">
            <div className="oi-bento-hero-icon"><CpuIcon /></div>
            <div className="oi-bento-hero-body">
              <div className="oi-bento-hero-tag">Why Wan Buffer Services</div>
              <div className="oi-bento-hero-t">Odoo apps have contributed over 20 free modules—and UI/UX developers on every engagement.</div>
              <p className="oi-bento-hero-b">Compatibility with all Odoo modules, technically and functionally. Service in community and enterprise editions. Skilled across any Odoo release.</p>
            </div>
            <div className="oi-bento-hero-stat">
              <div className="oi-bento-hero-stat-n">0</div>
              <div className="oi-bento-hero-stat-l">Critical regressions<br />in last 24 months</div>
            </div>
          </div>

          {/* 3-col card grid (7 supporting features) */}
          <div className="oi-bento rev">
            {BENTO_DATA.map((b, i) => (
              <div key={b.t} className={`oi-bento-card${b.ai ? " ai" : ""}`}>
                <div className="oi-bento-card-head">
                  <div className="oi-bento-card-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="oi-bento-icon">{b.icon}</div>
                </div>
                <div className="oi-bento-card-tag">{b.tag}</div>
                <div className="oi-bento-card-t">{b.t}</div>
                <p className="oi-bento-card-b">{b.b}</p>
                {"mini" in b && b.mini && (
                  <div className="oi-bento-card-foot">
                    <div className="oi-bento-card-stat">
                      <span className={`oi-bento-card-stat-n${b.ai ? " ai" : " r"}`}>{b.mini.n}</span>
                      <span className="oi-bento-card-stat-l">{b.mini.l}</span>
                    </div>
                    <span className="oi-bento-card-arrow"><ArrowRightIcon /></span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSER — manifesto + commitments + CTA */}
      <section className="oi-closer" id="capabilities">
        <div className="oi-closer-inner">

          {/* Top: sharp insight + manifesto */}
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your partner</div>
              <h3>Customization rarely fails on paper.<br /><span>It fails in execution.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">1 in 3<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>low-cost customization breaks default Odoo behaviour.</strong>
                  Non-expert partners may not account for all variables, weaken coding standards, and create long-term performance problems—while expert partners maintain efficiency and maintainability.
                </div>
              </div>
              <p>That&apos;s why Wan Buffer follows an eight-step customization process—with your approval at every gate.</p>
            </div>
          </div>

          {/* Commitments grid */}
          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior consultants only</div>
                <p className="oi-closer-commit-b">Average 7+ years on Odoo. No juniors and no shadow staffing — the name on the SoW is the person doing the work.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CheckCircleIcon /></div>
                <div className="oi-closer-commit-t">Fixed-price phases</div>
                <p className="oi-closer-commit-b">Scope, deliverables, and price agreed in writing before each phase begins. No scope drift, no surprise invoices.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">90-day hypercare</div>
                <p className="oi-closer-commit-b">Senior support included for 90 days post go-live. We stay until your team is genuinely independent — not billed extra.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Methodology, not theory</div>
                <p className="oi-closer-commit-b">Eight-step methodology refined across 254+ go-lives. Each phase has acceptance criteria — and you sign off.</p>
              </div>
            </div>
          </div>

          {/* Bottom: closing CTA */}
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Last decision before the work begins</div>
              <h4>Get a customization estimate in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Start customization</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
              <a className="oi-closer-cta-link" href="#faq">Read FAQs first</a>
            </div>
          </div>

        </div>
      </section>

      <OdooCustomizationFaq />

      {/* SUPPORT (clean) */}
      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Odoo support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Odoo Support is a central point of contact any time you have a business question. Customer support teams are available 24/7—we are here to help you whenever and wherever.</p>
          </div>

          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Online now
              </span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For detailed questions, screenshots, and full ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 × 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production-down incidents and time-sensitive decisions. Answered by a senior consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                We&apos;re hiring
              </span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring and career enquiries. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior-led only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> NDA-protected</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
