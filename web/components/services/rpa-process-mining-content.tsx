/* ────────────────────────────────────────────────────────────────────────
   RPA & PROCESS MINING — unique page design
   Centered hero + process-map mockup · Comparison stat bar ·
   Staggered capability cards · Horizontal node pipeline ·
   ROI counters · Platform grid · Closer · Support
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

/* ── Process map nodes ── */
const PROCESS_MAP = [
  { t: "Invoice received", status: "start" as const },
  { t: "Manual data entry", status: "bottleneck" as const },
  { t: "Approval routing", status: "slow" as const },
  { t: "3-way match", status: "bottleneck" as const },
  { t: "Payment posted", status: "end" as const },
] as const;

/* ── Comparison stats ── */
const COMPARISONS = [
  { label: "Invoice processing", manual: "48 hrs", automated: "< 5 sec" },
  { label: "Error rate", manual: "15–23%", automated: "< 0.2%" },
  { label: "Staff hours / week", manual: "120 hrs", automated: "8 hrs" },
  { label: "Cost per transaction", manual: "₹85", automated: "₹4" },
] as const;

/* ── Capabilities — staggered cards ── */
const CAPABILITIES = [
  { icon: <SearchIcon />, num: "01", t: "Process Discovery", s: "We mine your ERP event logs to map every real process path — not the documented ideal, but what actually happens. Every bottleneck, rework loop, and deviation surfaces automatically.", accent: "ai" as const },
  { icon: <EyeIcon />, num: "02", t: "Bottleneck Analysis", s: "Process mining pinpoints exactly where time is lost — which approval gates stall, which handoffs create delays, and which exceptions consume the most manual effort.", accent: "red" as const },
  { icon: <CpuIcon />, num: "03", t: "Bot Development", s: "Purpose-built RPA bots that execute repetitive tasks across your ERP — data entry, file transfers, reconciliation, report generation, and cross-system updates.", accent: "ai" as const },
  { icon: <ShieldIcon />, num: "04", t: "Exception Handling", s: "Bots don't just follow the happy path. We engineer exception routing, fallback logic, and human-in-the-loop escalation for every edge case your operations encounter.", accent: "red" as const },
  { icon: <RefreshIcon />, num: "05", t: "Continuous Mining", s: "Process mining doesn't stop at discovery. We run continuous conformance checks that compare actual execution against the optimised model — catching drift before it becomes waste.", accent: "ai" as const },
  { icon: <MonitorIcon />, num: "06", t: "Bot Orchestration", s: "Manage all your RPA bots from a single control centre — scheduling, monitoring, error handling, and performance dashboards with full audit trails.", accent: "red" as const },
] as const;

/* ── Methodology — horizontal connected circles ── */
const METHOD = [
  { icon: <SearchIcon />, t: "Mine", s: "Extract event logs from your ERP and map real process flows" },
  { icon: <EyeIcon />, t: "Analyse", s: "Identify bottlenecks, deviations, and automation candidates" },
  { icon: <CodeIcon />, t: "Build", s: "Develop and test RPA bots on real production data" },
  { icon: <RocketIcon />, t: "Deploy", s: "Roll out bots with monitoring, alerts, and fallback logic" },
  { icon: <RefreshIcon />, t: "Optimise", s: "Continuous mining validates improvements and catches drift" },
] as const;

/* ── ROI counters ── */
const ROI = [
  { n: "80%", l: "Manual tasks eliminated", icon: <ZapIcon /> },
  { n: "95%", l: "Error reduction", icon: <ShieldIcon /> },
  { n: "12×", l: "Faster processing", icon: <ClockIcon /> },
  { n: "6 mo", l: "Avg payback period", icon: <TrendingUpIcon /> },
] as const;

/* ── Use cases ── */
const USE_CASES = [
  { icon: <WalletIcon />, t: "Invoice Processing", s: "Bots extract data from invoices, match against POs, route for approval, and post to your ERP — end to end." },
  { icon: <UsersIcon />, t: "Employee Onboarding", s: "Trigger IT provisioning, payroll setup, benefits enrollment, and training assignments from a single HR action." },
  { icon: <PackageIcon />, t: "Order Fulfilment", s: "Auto-generate pick lists, update inventory, create shipping labels, and notify customers — zero manual steps." },
  { icon: <DatabaseIcon />, t: "Data Migration", s: "Bots migrate, validate, and reconcile data between ERP systems — faster and more accurate than manual transfers." },
  { icon: <BarChartIcon />, t: "Report Generation", s: "Scheduled bots compile, format, and distribute operational reports to stakeholders — daily, weekly, or on-demand." },
  { icon: <GridIcon />, t: "Cross-System Sync", s: "Keep ERP, CRM, HR, and accounting systems in real-time sync — no batch jobs, no CSV exports, no manual bridging." },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo", color: "#714B67" },
  { name: "Zoho", color: "#D32011" },
  { name: "Salesforce", color: "#00A1E0" },
  { name: "SAP", color: "#0070F2" },
  { name: "UiPath", color: "#FA4616" },
  { name: "Power Automate", color: "#0078D4" },
  { name: "Automation Anywhere", color: "#FF6B00" },
  { name: "Custom Bots", color: "#00C2FF" },
] as const;

/* ── Component ── */
export function RpaProcessMiningContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered + process-map mockup ═══ */}
      <section className="rp-hero">
        <div className="rp-hero-glow rp-hero-glow-1" aria-hidden="true" />
        <div className="rp-hero-glow rp-hero-glow-2" aria-hidden="true" />
        <div className="rp-hero-grid-bg" aria-hidden="true" />
        <div className="rp-hero-inner">
          <div className="rp-hero-badge rev">
            <span className="rp-hero-badge-dot" />
            RPA &amp; process mining
          </div>
          <h1 className="rp-hero-h rev">
            RPA &amp; Process<br />
            <span className="acc">Mining.</span>
          </h1>
          <p className="rp-hero-sub rev">
            Process mining reveals what&apos;s actually happening inside your ERP. RPA eliminates the waste it finds. <strong>End-to-end automation</strong> — from discovery to production bots.
          </p>
          <div className="rp-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your automation audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#methodology">See the methodology</a>
          </div>

          {/* Process map mockup */}
          <div className="rp-pmap rev">
            <div className="rp-pmap-label">Mined process — Invoice-to-Payment</div>
            <div className="rp-pmap-track">
              {PROCESS_MAP.map((node, i) => (
                <div key={node.t} className="rp-pmap-node-wrap">
                  {i > 0 && <div className="rp-pmap-conn"><span /></div>}
                  <div className={`rp-pmap-node rp-pmap-${node.status}`}>
                    <div className="rp-pmap-node-t">{node.t}</div>
                    <div className="rp-pmap-node-badge">
                      {node.status === "bottleneck" ? "Bottleneck" : node.status === "slow" ? "Slow" : node.status === "start" ? "Start" : "End"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON — horizontal stat bar ═══ */}
      <section className="rp-compare">
        <div className="rp-compare-inner rev">
          {COMPARISONS.map((c) => (
            <div key={c.label} className="rp-compare-item">
              <div className="rp-compare-label">{c.label}</div>
              <div className="rp-compare-vals">
                <span className="rp-compare-manual">{c.manual}</span>
                <span className="rp-compare-arrow">→</span>
                <span className="rp-compare-auto">{c.automated}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CAPABILITIES — staggered 2-col cards ═══ */}
      <section className="rp-caps" id="capabilities">
        <div className="rp-caps-inner">
          <div className="rp-caps-hdr rev">
            <div className="eyebrow">Core capabilities</div>
            <h2>Mine the process.<br /><span>Automate the waste.</span></h2>
            <p>Process mining shows you what&apos;s really happening. RPA bots fix it. Together they form a continuous improvement loop that keeps your ERP operations lean and error-free.</p>
          </div>
          <div className="rp-caps-grid rev">
            {CAPABILITIES.map((cap) => (
              <div key={cap.num} className={`rp-cap rp-cap-${cap.accent}`}>
                <div className="rp-cap-head">
                  <div className="rp-cap-num">{cap.num}</div>
                  <div className="rp-cap-icon">{cap.icon}</div>
                </div>
                <div className="rp-cap-t">{cap.t}</div>
                <p className="rp-cap-s">{cap.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ METHODOLOGY — horizontal connected circles ═══ */}
      <section className="rp-meth" id="methodology">
        <div className="rp-meth-inner">
          <div className="rp-meth-hdr rev">
            <div className="eyebrow lt">Methodology</div>
            <h2>Five phases.<br /><span>Continuous improvement.</span></h2>
          </div>
          <div className="rp-meth-nodes rev">
            {METHOD.map((m, i) => (
              <div key={m.t} className="rp-meth-node-wrap">
                {i > 0 && <div className="rp-meth-line" />}
                <div className="rp-meth-node">
                  <div className="rp-meth-node-circle">{m.icon}</div>
                  <div className="rp-meth-node-t">{m.t}</div>
                  <div className="rp-meth-node-s">{m.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to automate</div>
              <h3>Want RPA and process mining for <span>your ERP?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to an automation engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ROI — large inline stat counters ═══ */}
      <section className="rp-roi" id="results">
        <div className="rp-roi-inner">
          <div className="rp-roi-hdr rev">
            <div className="eyebrow">Proven ROI</div>
            <h2>Numbers that justify<br /><span>the investment.</span></h2>
          </div>
          <div className="rp-roi-grid rev">
            {ROI.map((r) => (
              <div key={r.l} className="rp-roi-item">
                <div className="rp-roi-icon">{r.icon}</div>
                <div className="rp-roi-n">{r.n}</div>
                <div className="rp-roi-l">{r.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ USE CASES — 3×2 compact grid ═══ */}
      <section className="rp-use" id="use-cases">
        <div className="rp-use-inner">
          <div className="rp-use-hdr rev">
            <div className="eyebrow lt">Use cases</div>
            <h2>Bots for every<br /><span>repetitive task.</span></h2>
          </div>
          <div className="rp-use-grid rev">
            {USE_CASES.map((uc) => (
              <div key={uc.t} className="rp-use-card">
                <div className="rp-use-card-icon">{uc.icon}</div>
                <div className="rp-use-card-t">{uc.t}</div>
                <p className="rp-use-card-s">{uc.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="rp-plat">
        <div className="rp-plat-inner rev">
          <div className="rp-plat-label">RPA platforms &amp; ERP integrations</div>
          <div className="rp-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="rp-plat-badge">
                <span className="rp-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="why-us">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your RPA partner</div>
              <h3>Most RPA projects<br /><span>automate the wrong things.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">50%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of RPA implementations fail to deliver expected ROI.</strong>
                  Source: EY, 2024. The root cause is automating processes without first understanding them. Teams build bots for documented workflows that don&apos;t match reality — then wonder why exceptions flood in.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer RPA engagement starts with process mining — not bot development. We commit to four guarantees, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><SearchIcon /></div>
                <div className="oi-closer-commit-t">Mining before building</div>
                <p className="oi-closer-commit-b">We never build a bot without first mining the actual process. Event log analysis reveals the real workflow — not the documented ideal that nobody follows.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed ROI targets</div>
                <p className="oi-closer-commit-b">Time saved, errors eliminated, and cost reduction are defined before bot development. If we miss the numbers, we keep working — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Exception handling built in</div>
                <p className="oi-closer-commit-b">Every bot ships with exception routing, fallback logic, and human escalation paths. No bot runs unattended without a safety net.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineers who mine your processes are the ones who build, deploy, and support the bots — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free process audit</div>
              <h4>Get your RPA roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your process audit</span>
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
            <div className="eyebrow lt">RPA support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior automation engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For bot configuration, process mining queries, and ticket history. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Bot failures or production incidents. Answered by a senior engineer — not a call centre.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring RPA developers and process mining specialists. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior engineers only</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
