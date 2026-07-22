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
  TrendingUpIcon,
  TrophyIcon,
  UsersIcon,
  WalletIcon,
} from "./odoo-service-icons";

/* ── Data ── */
const PHASES = [
  { icon: <UsersIcon/>, title: "Requirement gathering", body: "We sit with your team to learn how you actually work today — the real workflows, the spreadsheets on the side, and the gaps standard Odoo leaves behind.", tag: "Gather", ai: false, outcome: "Requirements brief", duration: "2–3 days", deliverables: ["Stakeholder interviews", "Process map", "Priority list", "Open questions"] },
  { icon: <SearchIcon/>, title: "Fit-gap analysis", body: "We compare what standard Odoo already does against what you need — so you only ever pay to build the parts that genuinely don't exist yet.", tag: "Scope", ai: false, outcome: "Gap analysis", duration: "3–5 days", deliverables: ["Fit-gap matrix", "Config vs custom split", "Scope boundaries", "Risk flags"] },
  { icon: <EyeIcon/>, title: "Feasibility study", body: "Before we commit, we confirm each change can be built without slowing Odoo down, breaking features you rely on, or trapping you on an old version.", tag: "Feasibility", ai: true, outcome: "Go / no-go", duration: "3–5 days", deliverables: ["Technical assessment", "Upgrade-safety check", "Performance impact", "Recommendation"] },
  { icon: <WalletIcon/>, title: "Estimation", body: `You get a clear, itemized estimate — cost, timeline, and approach — with no vague "it depends." Nothing moves forward until you've approved it.`, tag: "Estimate", ai: false, outcome: "Signed estimate", duration: "2–4 days", deliverables: ["Cost breakdown", "Timeline", "Resource plan", "Assumptions"] },
  { icon: <CheckCircleIcon/>, title: "Your sign-off", body: "Nothing gets built until you've reviewed the scope and given the green light. Your approval is the start gate — and it locks scope on both sides.", tag: "Approve", ai: false, outcome: "Approved SoW", duration: "1–2 days", deliverables: ["SoW sign-off", "Locked scope", "Kickoff date", "Single point of contact"] },
  { icon: <CodeIcon/>, title: "Development", body: "Our Odoo developers build to Odoo's own standards — native modules, not bolt-on hacks — so the work stays clean, maintainable, and upgrade-safe.", tag: "Build", ai: true, outcome: "Staging build", duration: "Scope-based", deliverables: ["Working modules", "Code to Odoo standards", "Staging build", "Progress check-ins"] },
  { icon: <ShieldIcon/>, title: "Testing", body: "We test against your real scenarios, not just the happy path — including the edge cases that usually only surface weeks after go-live.", tag: "QA", ai: true, outcome: "Test report", duration: "3–7 weeks", deliverables: ["Functional tests", "Edge-case checks", "Integration tests", "Fix log"] },
  { icon: <RocketIcon/>, title: "Delivery & support", body: "We ship to production with documentation your team can actually use — then stay on for support, monitoring, and improvements. Go-live is the start, not the end.", tag: "Deliver", ai: false, outcome: "Live & supported", duration: "Ongoing", deliverables: ["Production deploy", "Handover docs", "Team walkthrough", "Support window"] },
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
  { n: "7+", l: "Years in the business", g: false },
  { n: "254+", l: "Projects completed", g: false },
  { n: "84%", l: "Repeated clients", g: true },
  { n: "50+", l: "Proficient engineers", g: false },
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
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln"><span className="ai">Customization</span></span>
          </h1>
          <p className="oi-hero-lux-sub rev">
          Out-of-the-box Odoo gets you 80% of the way. The last 20% — the part that matches how your business actually runs — is where most ERP projects stall. That's the part we build. Wan Buffer maps what standard Odoo already covers, finds the gaps, and engineers the rest around your workflows.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Discuss Your Customization </span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#phases">See how we work</a>
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
              <h2>A process that protects your<br /><span>budget and timeline.</span></h2>
              <div className="oi-meth-intro-l-meta">
                <span className="oi-meth-intro-l-meta-k">Process</span>
                <span className="oi-meth-intro-l-meta-v">
                  <span className="oi-meth-intro-l-meta-dot" />
                  Odoo customization &amp; installation
                </span>
              </div>
            </div>
            <div className="oi-meth-intro-r">
              <p>No surprises, no scope creep mid-build. Every customization runs through the same eight steps — and you know exactly what you walk away with at each one.</p>
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

      {/* BENTO — magazine spread */}
      <section className="oi-bento-sec" id="why-us">
        <div className="oi-bento-inner">

          {/* Header: intro + credentials card */}
          <div className="oi-bento-hdr rev">
            <div className="oi-bento-hdr-l">
              <div className="eyebrow">Why Wan Buffer</div>
              <h2>Why teams choose us as their<br /><span>Odoo partner.</span></h2>
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
