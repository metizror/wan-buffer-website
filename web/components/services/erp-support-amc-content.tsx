/* ────────────────────────────────────────────────────────────────────────
   ERP SUPPORT & AMC — unique page design
   Centered hero + SLA panel · Plan comparison cards · Service pills ·
   SLA gauge metrics · 3-step process · Platforms · FAQ ·
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
  CrossIcon,
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

/* ── SLA panel mockup ── */
const SLA_PANEL = [
  { label: "Uptime", value: "99.9%", color: "green" as const },
  { label: "Tickets resolved", value: "847", color: "ai" as const },
  { label: "Avg response", value: "< 2 hrs", color: "ai" as const },
  { label: "Client satisfaction", value: "4.9/5", color: "green" as const },
] as const;

/* ── Support plans ── */
const PLANS = [
  {
    name: "Essential", tag: "For small teams", color: "var(--ai)",
    features: [
      { t: "Bug fixes & patches", included: true },
      { t: "Email support (business hours)", included: true },
      { t: "Monthly health check", included: true },
      { t: "Configuration changes (5/mo)", included: true },
      { t: "Phone support 24×7", included: false },
      { t: "Version upgrades", included: false },
      { t: "Dedicated account manager", included: false },
    ],
    response: "< 8 hrs",
  },
  {
    name: "Professional", tag: "Most popular", color: "#7C3AED",
    features: [
      { t: "Bug fixes & patches", included: true },
      { t: "Email + chat support", included: true },
      { t: "Weekly health checks", included: true },
      { t: "Configuration changes (15/mo)", included: true },
      { t: "Phone support (extended hours)", included: true },
      { t: "Annual version upgrade", included: true },
      { t: "Dedicated account manager", included: false },
    ],
    response: "< 4 hrs",
  },
  {
    name: "Enterprise", tag: "For mission-critical ERP", color: "var(--red)",
    features: [
      { t: "Bug fixes & patches", included: true },
      { t: "Email + chat + phone 24×7", included: true },
      { t: "Daily health monitoring", included: true },
      { t: "Unlimited configuration changes", included: true },
      { t: "Phone support 24×7", included: true },
      { t: "Priority version upgrades", included: true },
      { t: "Dedicated account manager", included: true },
    ],
    response: "< 1 hr",
  },
] as const;

/* ── What's included ── */
const SERVICES = [
  "Bug fixes", "Security patches", "Performance tuning", "Configuration changes",
  "User management", "Report adjustments", "Integration monitoring", "Version upgrades",
  "Data cleanup", "Quarterly reviews", "Training refreshers", "Emergency hotline",
] as const;

/* ── SLA metrics ── */
const METRICS = [
  { label: "Uptime SLA", value: "99.9%", percent: 99.9 },
  { label: "First response", value: "< 2 hrs", percent: 92 },
  { label: "Resolution rate", value: "97%", percent: 97 },
  { label: "Client retention", value: "94%", percent: 94 },
] as const;

/* ── Process ── */
const PROCESS_STEPS = [
  { icon: <MailIcon />, t: "Report", s: "Submit a ticket via email, chat, phone, or the client portal. Every issue is logged, prioritised, and assigned automatically." },
  { icon: <SettingsIcon />, t: "Resolve", s: "A senior engineer investigates, communicates the fix plan, implements the solution, and verifies resolution with you." },
  { icon: <EyeIcon />, t: "Review", s: "Root cause analysis is documented. Preventive measures are applied. Monthly reports track trends and recurring patterns." },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "Custom ERP", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "What does an ERP AMC typically include?", a: "Bug fixes, security patches, configuration changes, user management, performance monitoring, quarterly health checks, version upgrades, and emergency support — depending on your plan tier." },
  { q: "What are the SLA response times?", a: "Essential: < 8 hours. Professional: < 4 hours. Enterprise: < 1 hour. Critical production-down issues get immediate response on Professional and Enterprise plans." },
  { q: "Can you support ERP systems you didn't implement?", a: "Yes. We conduct a thorough audit of your existing setup, document the configuration, and onboard it to our support system. A discovery period of 2–4 weeks ensures we understand your environment before SLAs kick in." },
  { q: "Do you handle version upgrades?", a: "Yes. Professional and Enterprise plans include annual version upgrades — full migration, testing, data validation, and rollback planning. We handle the entire upgrade lifecycle." },
  { q: "Is there a minimum contract period?", a: "AMC contracts run annually with the option to start with a 6-month trial. Month-to-month support is available at a premium for businesses that need flexibility." },
  { q: "How do you handle emergency issues?", a: "Enterprise plan includes 24/7 phone hotline with < 1 hour response. Professional plan has extended-hours phone support. All plans include email-based emergency escalation with SLA guarantees." },
] as const;

/* ── Component ── */
export function ErpSupportAmcContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + SLA panel ═══ */}
      <section className="sa-hero">
        <div className="sa-hero-glow sa-hero-glow-1" aria-hidden="true" />
        <div className="sa-hero-glow sa-hero-glow-2" aria-hidden="true" />
        <div className="sa-hero-inner">
          <div className="sa-hero-badge rev">
            <span className="sa-hero-badge-dot" />
            ERP support &amp; AMC
          </div>
          <h1 className="sa-hero-h rev">
            ERP Support<br />
            <span className="acc">&amp; AMC.</span>
          </h1>
          <p className="sa-hero-sub rev">
            SLA-based ERP support — bug fixes, configuration changes, version upgrades, performance monitoring, and 24/7 emergency response. <strong>Your ERP, always running.</strong>
          </p>
          <div className="sa-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your support plan</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#plans">Compare plans</a>
          </div>

          {/* SLA panel */}
          <div className="sa-sla rev">
            {SLA_PANEL.map((s) => (
              <div key={s.label} className={`sa-sla-item sa-sla-${s.color}`}>
                <div className="sa-sla-value">{s.value}</div>
                <div className="sa-sla-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLAN COMPARISON ═══ */}
      <section className="sa-plans" id="plans">
        <div className="sa-plans-inner">
          <div className="sa-plans-hdr rev">
            <div className="eyebrow">Support plans</div>
            <h2>Three tiers.<br /><span>Choose your level.</span></h2>
            <p>Every plan includes senior engineers, documented SLAs, and monthly reporting. Scale up or down as your business needs change.</p>
          </div>
          <div className="sa-plans-grid rev">
            {PLANS.map((plan) => (
              <div key={plan.name} className="sa-plan" style={{ borderTopColor: plan.color }}>
                <div className="sa-plan-tag" style={{ color: plan.color }}>{plan.tag}</div>
                <div className="sa-plan-name">{plan.name}</div>
                <div className="sa-plan-response">
                  <span className="sa-plan-response-label">Response time</span>
                  <span className="sa-plan-response-value">{plan.response}</span>
                </div>
                <div className="sa-plan-features">
                  {plan.features.map((f) => (
                    <div key={f.t} className={`sa-plan-feat${f.included ? "" : " disabled"}`}>
                      <span className="sa-plan-feat-icon">{f.included ? <CheckIcon /> : <CrossIcon />}</span>
                      <span>{f.t}</span>
                    </div>
                  ))}
                </div>
                <a className="sa-plan-cta" href="#contact" style={{ background: plan.color, borderColor: plan.color }}>Get {plan.name} plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED — service pills ═══ */}
      <section className="sa-services">
        <div className="sa-services-inner rev">
          <div className="sa-services-label">What&apos;s included in every plan</div>
          <div className="sa-services-pills">
            {SERVICES.map((s) => (
              <span key={s} className="sa-services-pill"><CheckIcon />{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SLA METRICS — gauge cards ═══ */}
      <section className="sa-metrics" id="sla">
        <div className="sa-metrics-inner">
          <div className="sa-metrics-hdr rev">
            <div className="eyebrow">SLA performance</div>
            <h2>Numbers we&apos;re<br /><span>held to.</span></h2>
          </div>
          <div className="sa-metrics-grid rev">
            {METRICS.map((m) => (
              <div key={m.label} className="sa-metric">
                <div className="sa-metric-ring">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" strokeWidth="5" stroke="rgba(0,194,255,.08)" />
                    <circle cx="40" cy="40" r="34" fill="none" strokeWidth="5" strokeLinecap="round"
                      strokeDasharray={`${m.percent * 2.136} 213.6`}
                      transform="rotate(-90 40 40)"
                      stroke="var(--ai)" />
                  </svg>
                  <div className="sa-metric-ring-value">{m.value}</div>
                </div>
                <div className="sa-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — 3 steps ═══ */}
      <section className="sa-proc" id="process">
        <div className="sa-proc-inner">
          <div className="sa-proc-hdr rev">
            <div className="eyebrow lt">How support works</div>
            <h2>Report. Resolve.<br /><span>Review.</span></h2>
          </div>
          <div className="sa-proc-steps rev">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.t} className="sa-proc-step-wrap">
                {i > 0 && <div className="sa-proc-conn"><ArrowRightIcon /></div>}
                <div className="sa-proc-step">
                  <div className="sa-proc-step-icon">{s.icon}</div>
                  <div className="sa-proc-step-t">{s.t}</div>
                  <p className="sa-proc-step-s">{s.s}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to secure your ERP</div>
              <h3>Want SLA-backed support for <span>your ERP?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to our support team</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="sa-plat">
        <div className="sa-plat-inner rev">
          <div className="sa-plat-label">ERP platforms we support</div>
          <div className="sa-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="sa-plat-badge">
                <span className="sa-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="sa-faq" id="faq">
        <div className="sa-faq-inner">
          <div className="sa-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>ERP support &amp; AMC.</span></h2>
          </div>
          <div className="sa-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="sa-faq-item">
                <summary className="sa-faq-q">{f.q}</summary>
                <p className="sa-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your support partner</div>
              <h3>Most ERP support<br /><span>is reactive, not preventive.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">40%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of ERP downtime is caused by preventable issues.</strong>
                  Source: Panorama Consulting, 2024. The problem is support that waits for tickets instead of monitoring proactively — catching performance degradation, security gaps, and configuration drift before they cause outages.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer AMC includes proactive monitoring, not just reactive ticket resolution. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><MonitorIcon /></div>
                <div className="oi-closer-commit-t">Proactive monitoring</div>
                <p className="oi-closer-commit-b">We don&apos;t wait for tickets. Health checks, performance monitoring, and security scans run on schedule — catching issues before your team notices them.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ClockIcon /></div>
                <div className="oi-closer-commit-t">SLA-guaranteed response</div>
                <p className="oi-closer-commit-b">Response times are contractual — not aspirational. Enterprise: &lt; 1 hour. Professional: &lt; 4 hours. Essential: &lt; 8 hours. Penalties apply if we miss.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><BarChartIcon /></div>
                <div className="oi-closer-commit-t">Monthly reporting</div>
                <p className="oi-closer-commit-b">Tickets resolved, response times, system health, and recommendations — delivered monthly. Full transparency into what we did and what&apos;s coming next.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer assigned to your account knows your system inside out — named in the contract, consistent across every interaction.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free ERP health check</div>
              <h4>Get your support plan in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your health check</span>
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
            <div className="eyebrow lt">Get support now</div>
            <h2>One team for <span>every issue.</span></h2>
            <p>Three channels. Senior engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Submit a ticket</a>
              <p className="oi-supp-body-v2">For bug reports, configuration requests, and general queries. SLA-tracked from first response.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open ticket <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />24×7 hotline</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Emergency phone</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Production-down emergencies. Answered by a senior engineer within your SLA window.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring ERP support engineers and account managers.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA guaranteed</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Proactive monitoring</span>
            <span className="oi-supp-commit-item"><HeartIcon /> Monthly reporting</span>
          </div>
        </div>
      </section>
    </main>
  );
}
