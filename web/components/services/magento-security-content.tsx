/* ────────────────────────────────────────────────────────────────────────
   MAGENTO SECURITY & AMC — unique page design
   Centered hero + security scan · Threat stats · Security services
   grid · AMC plan comparison · Process · FAQ · Closer · Support
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

/* ── Security scan mockup ── */
const SCAN_ITEMS = [
  { check: "Security patches", status: "pass" as const },
  { check: "PCI DSS compliance", status: "pass" as const },
  { check: "SSL/TLS configuration", status: "pass" as const },
  { check: "Admin URL hardening", status: "pass" as const },
  { check: "Malware scan", status: "pass" as const },
  { check: "2FA enabled", status: "pass" as const },
] as const;

/* ── Threat stats ── */
const THREATS = [
  { n: "87%", l: "Of Magento stores have unpatched vulnerabilities", icon: <ShieldIcon /> },
  { n: "37%", l: "Of eCommerce breaches target Magento", icon: <EyeIcon /> },
  { n: "₹1.2Cr", l: "Average cost of a Magento data breach", icon: <WalletIcon /> },
] as const;

/* ── Security services ── */
const SERVICES = [
  { icon: <ShieldIcon />, t: "Security Patch Management", s: "Every Adobe/Magento security patch tested, applied, and validated within 48 hours of release. Regression testing ensures patches don't break your customisations.", color: "red" as const },
  { icon: <EyeIcon />, t: "Vulnerability Scanning", s: "Automated weekly scans for known CVEs, SQL injection, XSS, CSRF, and Magento-specific attack vectors. Reports delivered with severity ratings and remediation steps.", color: "ai" as const },
  { icon: <CodeIcon />, t: "Malware Detection & Removal", s: "File integrity monitoring, JavaScript injection detection, and database scanning. If malware is found, we isolate, remove, and harden the attack vector — with a full incident report.", color: "red" as const },
  { icon: <CloudIcon />, t: "WAF & Firewall Configuration", s: "Web Application Firewall rules tuned for Magento — blocking bot attacks, brute force attempts, and known exploit patterns while allowing legitimate traffic.", color: "ai" as const },
  { icon: <SettingsIcon />, t: "PCI DSS Compliance", s: "Full PCI DSS self-assessment questionnaire support, security configuration review, and remediation for all 12 PCI requirements. Audit-ready documentation included.", color: "red" as const },
  { icon: <RefreshIcon />, t: "SSL & Certificate Management", s: "SSL certificate installation, renewal automation, HSTS configuration, mixed content resolution, and OCSP stapling. Green padlock guaranteed across every page.", color: "ai" as const },
] as const;

/* ── AMC plans ── */
const SECURITY_AMC = {
  name: "Security AMC", color: "var(--red)",
  features: [
    { t: "Security patches within 48 hrs", included: true },
    { t: "Weekly vulnerability scanning", included: true },
    { t: "Malware monitoring & removal", included: true },
    { t: "WAF management", included: true },
    { t: "PCI compliance support", included: true },
    { t: "SSL certificate management", included: true },
    { t: "Bug fixes & code changes", included: false },
    { t: "Version upgrades", included: false },
    { t: "Performance optimisation", included: false },
  ],
  response: "< 4 hrs (security)",
} as const;

const FULL_AMC = {
  name: "Full AMC", color: "var(--ai)",
  features: [
    { t: "Everything in Security AMC", included: true },
    { t: "Bug fixes & configuration changes", included: true },
    { t: "Performance monitoring & tuning", included: true },
    { t: "Annual version upgrade", included: true },
    { t: "Module compatibility updates", included: true },
    { t: "Monthly health reports", included: true },
    { t: "Dedicated account manager", included: true },
    { t: "Priority phone support 24×7", included: true },
    { t: "Quarterly security audit", included: true },
  ],
  response: "< 2 hrs (all issues)",
} as const;

/* ── Process ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Audit", s: "Full security assessment of your Magento store" },
  { icon: <ShieldIcon />, t: "Harden", s: "Patch, configure, and lock down every attack surface" },
  { icon: <EyeIcon />, t: "Monitor", s: "Continuous scanning, alerting, and incident response" },
  { icon: <RefreshIcon />, t: "Maintain", s: "Ongoing patches, updates, and compliance reviews" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How quickly do you apply Magento security patches?", a: "Within 48 hours of release. Every patch is tested on a staging environment, validated against your customisations, and deployed to production with zero downtime." },
  { q: "Do you help with PCI DSS compliance?", a: "Yes. We support PCI DSS self-assessment (SAQ A, A-EP, D), configure all 12 PCI requirements, remediate gaps, and provide audit-ready documentation." },
  { q: "What happens if my store gets hacked?", a: "Our AMC includes incident response — we isolate the breach, remove malware, patch the vulnerability, restore from clean backups if needed, and deliver a full incident report with preventive measures." },
  { q: "Do you provide a Web Application Firewall?", a: "Yes. We configure and manage WAF rules (Cloudflare, Sucuri, or AWS WAF) tuned specifically for Magento — blocking attacks while allowing legitimate checkout and admin traffic." },
  { q: "What's the difference between Security AMC and Full AMC?", a: "Security AMC covers patches, scanning, malware removal, WAF, and PCI compliance. Full AMC adds bug fixes, performance tuning, version upgrades, module updates, and dedicated account management." },
  { q: "Can you secure a Magento store you didn't build?", a: "Yes. We conduct a thorough security audit, document the current state, remediate existing vulnerabilities, and onboard the store to our monitoring and AMC system." },
] as const;

/* ── Component ── */
export function MagentoSecurityContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + security scan ═══ */}
      <section className="ms-hero">
        <div className="ms-hero-glow ms-hero-glow-1" aria-hidden="true" />
        <div className="ms-hero-glow ms-hero-glow-2" aria-hidden="true" />
        <div className="ms-hero-inner">
          <div className="ms-hero-badge rev">
            <span className="ms-hero-badge-dot" />
            Magento security &amp; AMC
          </div>
          <h1 className="ms-hero-h rev">
            Magento Security<br />
            <span className="acc">&amp; AMC.</span>
          </h1>
          <p className="ms-hero-sub rev">
            Security patches, PCI compliance, malware scanning, WAF configuration, and SLA-based maintenance — <strong>your Magento store, always secure and maintained.</strong>
          </p>
          <div className="ms-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your security audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#plans">Compare AMC plans</a>
          </div>

          {/* Security scan */}
          <div className="ms-scan rev">
            <div className="ms-scan-bar">
              <span className="ms-scan-bar-icon"><ShieldIcon /></span>
              <span className="ms-scan-bar-title">Security Scan Report</span>
              <span className="ms-scan-bar-badge">6/6 passed</span>
            </div>
            <div className="ms-scan-list">
              {SCAN_ITEMS.map((s) => (
                <div key={s.check} className="ms-scan-item">
                  <span className="ms-scan-item-check"><CheckCircleIcon /></span>
                  <span className="ms-scan-item-label">{s.check}</span>
                  <span className="ms-scan-item-status">Passed</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THREAT STATS ═══ */}
      <section className="ms-threats">
        <div className="ms-threats-inner rev">
          {THREATS.map((t) => (
            <div key={t.l.slice(0, 20)} className="ms-threat">
              <div className="ms-threat-icon">{t.icon}</div>
              <div className="ms-threat-n">{t.n}</div>
              <div className="ms-threat-l">{t.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ SECURITY SERVICES ═══ */}
      <section className="ms-svc" id="services">
        <div className="ms-svc-inner">
          <div className="ms-svc-hdr rev">
            <div className="eyebrow">Security services</div>
            <h2>Six layers of<br /><span>Magento protection.</span></h2>
            <p>Every service is delivered by senior Magento security engineers who understand both the platform&apos;s attack surface and the PCI compliance requirements for eCommerce.</p>
          </div>
          <div className="ms-svc-grid rev">
            {SERVICES.map((s) => (
              <div key={s.t} className={`ms-svc-card ms-svc-${s.color}`}>
                <div className="ms-svc-card-icon">{s.icon}</div>
                <div className="ms-svc-card-t">{s.t}</div>
                <p className="ms-svc-card-s">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AMC PLANS — side-by-side ═══ */}
      <section className="ms-plans" id="plans">
        <div className="ms-plans-inner">
          <div className="ms-plans-hdr rev">
            <div className="eyebrow lt">AMC plans</div>
            <h2>Two plans.<br /><span>Choose your coverage.</span></h2>
          </div>
          <div className="ms-plans-grid rev">
            {[SECURITY_AMC, FULL_AMC].map((plan) => (
              <div key={plan.name} className="ms-plan" style={{ borderTopColor: plan.color }}>
                <div className="ms-plan-name">{plan.name}</div>
                <div className="ms-plan-response">
                  <span className="ms-plan-response-label">Response time</span>
                  <span className="ms-plan-response-value">{plan.response}</span>
                </div>
                <div className="ms-plan-features">
                  {plan.features.map((f) => (
                    <div key={f.t} className={`ms-plan-feat${f.included ? "" : " disabled"}`}>
                      <span className="ms-plan-feat-icon">{f.included ? <CheckIcon /> : <CrossIcon />}</span>
                      <span>{f.t}</span>
                    </div>
                  ))}
                </div>
                <a className="ms-plan-cta" href="#contact" style={{ background: plan.color, borderColor: plan.color }}>Get {plan.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="ms-proc" id="process">
        <div className="ms-proc-inner">
          <div className="ms-proc-hdr rev">
            <div className="eyebrow">Our process</div>
            <h2>Audit. Harden.<br /><span>Monitor. Maintain.</span></h2>
          </div>
          <div className="ms-proc-steps rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="ms-proc-step-wrap">
                {i > 0 && <div className="ms-proc-conn"><ArrowRightIcon /></div>}
                <div className="ms-proc-step">
                  <div className="ms-proc-step-icon">{p.icon}</div>
                  <div className="ms-proc-step-t">{p.t}</div>
                  <p className="ms-proc-step-s">{p.s}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to secure</div>
              <h3>Want your Magento store <span>locked down?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your security audit</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ms-faq" id="faq">
        <div className="ms-faq-inner">
          <div className="ms-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Magento security.</span></h2>
          </div>
          <div className="ms-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ms-faq-item">
                <summary className="ms-faq-q">{f.q}</summary>
                <p className="ms-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your security partner</div>
              <h3>Most Magento stores<br /><span>are one patch behind a breach.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">87%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of Magento stores run with unpatched security vulnerabilities.</strong>
                  Source: Sansec, 2024. The root cause is stores without an AMC — security patches released by Adobe go unapplied for months, leaving known vulnerabilities wide open.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer AMC includes 48-hour patch deployment and continuous vulnerability monitoring — not just annual audits.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">48-hour patch deployment</div>
                <p className="oi-closer-commit-b">Every Adobe security patch tested and deployed within 48 hours. No delays, no backlog, no excuses.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Continuous monitoring</div>
                <p className="oi-closer-commit-b">Weekly vulnerability scans, file integrity monitoring, and malware detection. Threats caught before they become breaches.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">PCI compliance maintained</div>
                <p className="oi-closer-commit-b">All 12 PCI DSS requirements monitored and maintained continuously — not just at audit time. Compliance documentation always current.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior security engineers</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who audits your store is the one who patches, monitors, and responds — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free security scan</div>
              <h4>Get your security report in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your security audit</span>
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
            <div className="eyebrow lt">Security support</div>
            <h2>One team for <span>threats &amp; fixes.</span></h2>
            <p>Three channels. Senior security engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For patch queries, compliance questions, and scan reports. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />24×7 hotline</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Emergency phone</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Active breaches or security incidents. Answered by a senior security engineer immediately.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring security engineers and DevSecOps specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><ShieldIcon /> 48-hr patch SLA</span>
            <span className="oi-supp-commit-item"><EyeIcon /> Continuous monitoring</span>
            <span className="oi-supp-commit-item"><CheckIcon /> PCI compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> Incident response</span>
          </div>
        </div>
      </section>
    </main>
  );
}
