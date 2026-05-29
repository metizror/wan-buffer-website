/* ────────────────────────────────────────────────────────────────────────
   AI GOVERNANCE & ETHICS — unique page design
   Centered hero + trust badge · 3-col pillar cards · Vertical rail
   framework · Compliance badge grid · Do/Don't checklist ·
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
  CrossIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Trust principles ── */
const PRINCIPLES = [
  "Transparency", "Fairness", "Accountability", "Privacy", "Security", "Explainability",
] as const;

/* ── Pillars ── */
const PILLARS = [
  { icon: <EyeIcon />, num: "01", t: "Explainability & Transparency", s: "Every AI decision comes with a reasoning trail. Feature importance scores, confidence intervals, and decision paths are logged and surfaced — so stakeholders understand why the AI acted, not just what it did.", points: ["Feature importance for every prediction", "Confidence scores on all outputs", "Decision audit trails accessible to non-technical users", "Model card documentation for every deployed model"] },
  { icon: <ShieldIcon />, num: "02", t: "Bias Detection & Fairness", s: "We test every model for demographic, statistical, and operational bias before deployment. Continuous monitoring catches drift post-launch. Fairness metrics are pre-agreed and tracked weekly.", points: ["Pre-deployment bias audits across protected attributes", "Fairness metrics defined before training begins", "Continuous post-deployment monitoring for distributional drift", "Automated alerts when fairness thresholds are breached"] },
  { icon: <TargetIcon />, num: "03", t: "Risk Management & Controls", s: "AI systems operate within defined boundaries. Human-in-the-loop checkpoints, confidence thresholds, and automated kill switches ensure high-risk decisions always involve human oversight.", points: ["Confidence-gated automation with human escalation", "Automated rollback triggers for anomalous outputs", "Risk classification for every AI use case", "Incident response playbooks for AI failures"] },
] as const;

/* ── Framework sections (vertical rail) ── */
const FRAMEWORK = [
  { icon: <SearchIcon />, t: "Assessment & Classification", b: "Every AI use case is classified by risk level — low, medium, high, or critical — before development begins. Classification drives the governance controls applied: low-risk systems get lighter oversight, critical systems get full human-in-the-loop governance.", deliverables: ["Risk classification matrix", "Use-case registry", "Control mapping"] },
  { icon: <DatabaseIcon />, t: "Data Governance & Privacy", b: "We audit every data source for quality, consent, and compliance. PII is identified, tagged, and handled according to GDPR, CCPA, and industry-specific regulations. Data lineage is tracked from source to model output.", deliverables: ["Data lineage map", "PII inventory", "Consent audit"] },
  { icon: <CpuIcon />, t: "Model Development Standards", b: "Every model follows our development standard — version control, reproducible training, documented hyperparameters, and mandatory evaluation against holdout data. No model reaches production without passing our quality gates.", deliverables: ["Model cards", "Evaluation reports", "Version registry"] },
  { icon: <MonitorIcon />, t: "Monitoring & Incident Response", b: "Post-deployment, we monitor accuracy, fairness, latency, and drift continuously. Automated alerts trigger when metrics deviate from baselines. Every incident is logged, investigated, and resolved with a published root-cause analysis.", deliverables: ["Monitoring dashboard", "Alert pipelines", "Incident playbook"] },
  { icon: <RefreshIcon />, t: "Continuous Review & Improvement", b: "Governance is not a one-time audit. We conduct quarterly reviews of all deployed AI systems — reassessing risk levels, revalidating fairness metrics, and updating controls as regulations and business requirements evolve.", deliverables: ["Quarterly review reports", "Updated risk registers", "Compliance evidence packs"] },
] as const;

/* ── Compliance standards ── */
const STANDARDS = [
  { name: "GDPR", sub: "EU Data Protection" },
  { name: "SOC 2", sub: "Security Controls" },
  { name: "ISO 27001", sub: "Information Security" },
  { name: "EU AI Act", sub: "AI Regulation" },
  { name: "CCPA", sub: "California Privacy" },
  { name: "HIPAA", sub: "Healthcare Data" },
  { name: "PCI DSS", sub: "Payment Security" },
  { name: "NIST AI RMF", sub: "Risk Framework" },
] as const;

/* ── Do / Don't ── */
const DOS = [
  "Log every AI decision with full reasoning trail",
  "Test for bias before and after deployment",
  "Define human-in-the-loop checkpoints for high-risk actions",
  "Document model limitations alongside capabilities",
  "Conduct quarterly governance reviews of all AI systems",
  "Encrypt data in transit and at rest across all pipelines",
] as const;

const DONTS = [
  "Deploy models without bias testing on real data",
  "Use AI for decisions without explainability requirements",
  "Allow unsupervised AI actions on financial transactions",
  "Skip data consent audits for training data sources",
  "Treat governance as a one-time checkbox exercise",
  "Rely on accuracy alone — fairness metrics matter equally",
] as const;

/* ── Component ── */
export function AiGovernanceContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — centered with trust badge ═══ */}
      <section className="ag-hero">
        <div className="ag-hero-glow ag-hero-glow-1" aria-hidden="true" />
        <div className="ag-hero-glow ag-hero-glow-2" aria-hidden="true" />
        <div className="ag-hero-inner">
          <div className="ag-hero-badge rev">
            <span className="ag-hero-badge-dot" />
            AI governance &amp; ethics
          </div>
          <h1 className="ag-hero-h rev">
            AI Governance<br />
            <span className="acc">&amp; Ethics.</span>
          </h1>
          <p className="ag-hero-sub rev">
            Deploy AI responsibly. Bias auditing, explainability, compliance automation, and ethical guidelines — <strong>built into every model, pipeline, and agent</strong> we deliver. Not bolted on after.
          </p>
          <div className="ag-hero-ctas rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Get your governance audit</span>
              <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
            </a>
            <a className="oi-hero-lux-secondary" href="#framework">See the framework</a>
          </div>

          {/* Trust shield + principles */}
          <div className="ag-trust rev">
            <div className="ag-trust-shield"><ShieldIcon /></div>
            <div className="ag-trust-pills">
              {PRINCIPLES.map((p) => (
                <span key={p} className="ag-trust-pill">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PILLARS — 3 tall column cards ═══ */}
      <section className="ag-pillars" id="pillars">
        <div className="ag-pillars-inner">
          <div className="ag-pillars-hdr rev">
            <div className="eyebrow">Three pillars</div>
            <h2>Governance built on<br /><span>principles, not paperwork.</span></h2>
          </div>
          <div className="ag-pillars-grid rev">
            {PILLARS.map((p) => (
              <div key={p.num} className="ag-pillar">
                <div className="ag-pillar-top">
                  <div className="ag-pillar-num">{p.num}</div>
                  <div className="ag-pillar-icon">{p.icon}</div>
                </div>
                <div className="ag-pillar-t">{p.t}</div>
                <p className="ag-pillar-s">{p.s}</p>
                <div className="ag-pillar-points">
                  {p.points.map((pt) => (
                    <div key={pt.slice(0, 30)} className="ag-pillar-point">
                      <CheckIcon /><span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FRAMEWORK — vertical rail ═══ */}
      <section className="ag-fw" id="framework">
        <div className="ag-fw-inner">
          <div className="ag-fw-hdr rev">
            <div className="eyebrow lt">Governance framework</div>
            <h2>Five-stage governance<br /><span>lifecycle.</span></h2>
            <p>Every AI system we deploy passes through this framework — from initial risk classification to continuous post-deployment review. Each stage is documented, auditable, and aligned with international standards.</p>
          </div>
          <div className="ag-fw-rail">
            {FRAMEWORK.map((f, i) => (
              <div key={f.t} className="ag-fw-block rev">
                <div className="ag-fw-block-rail">
                  <div className="ag-fw-block-dot" />
                  {i < FRAMEWORK.length - 1 && <div className="ag-fw-block-line" />}
                </div>
                <div className="ag-fw-block-body">
                  <div className="ag-fw-block-icon">{f.icon}</div>
                  <div className="ag-fw-block-t">{f.t}</div>
                  <p className="ag-fw-block-b">{f.b}</p>
                  <div className="ag-fw-block-delivs">
                    {f.deliverables.map((d) => (
                      <span key={d} className="ag-fw-block-deliv"><FlagIcon />{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to govern</div>
              <h3>Want this framework applied to <span>your AI systems?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a governance lead</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPLIANCE — standard badge grid ═══ */}
      <section className="ag-comp" id="compliance">
        <div className="ag-comp-inner">
          <div className="ag-comp-hdr rev">
            <div className="eyebrow">Compliance coverage</div>
            <h2>Standards we<br /><span>build for.</span></h2>
          </div>
          <div className="ag-comp-grid rev">
            {STANDARDS.map((s) => (
              <div key={s.name} className="ag-comp-card">
                <div className="ag-comp-card-name">{s.name}</div>
                <div className="ag-comp-card-sub">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DO / DON'T CHECKLIST ═══ */}
      <section className="ag-check" id="checklist">
        <div className="ag-check-inner">
          <div className="ag-check-hdr rev">
            <div className="eyebrow lt">Governance checklist</div>
            <h2>What responsible AI<br /><span>looks like in practice.</span></h2>
          </div>
          <div className="ag-check-grid rev">
            <div className="ag-check-col ag-check-do">
              <div className="ag-check-col-head do">Always do</div>
              {DOS.map((d) => (
                <div key={d.slice(0, 30)} className="ag-check-item">
                  <span className="ag-check-icon do"><CheckIcon /></span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
            <div className="ag-check-col ag-check-dont">
              <div className="ag-check-col-head dont">Never do</div>
              {DONTS.map((d) => (
                <div key={d.slice(0, 30)} className="ag-check-item">
                  <span className="ag-check-icon dont"><CrossIcon /></span>
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CLOSER ═══ */}
      <section className="oi-closer" id="why-us">
        <div className="oi-closer-inner">
          <div className="oi-closer-hdr rev">
            <div className="oi-closer-hdr-l">
              <div className="eyebrow">Choosing your governance partner</div>
              <h3>AI without governance<br /><span>is a liability, not an asset.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">60%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of enterprises have no formal AI governance framework.</strong>
                  Source: MIT Sloan, 2024. Without governance, AI systems accumulate risk silently — biased decisions, compliance violations, and unexplainable outputs that erode trust and invite regulatory action.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer AI deployment includes governance by default — not as an add-on. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><EyeIcon /></div>
                <div className="oi-closer-commit-t">Explainability by default</div>
                <p className="oi-closer-commit-b">Every model ships with reasoning trails, feature importance, and confidence scores. No black boxes — ever. If we can&apos;t explain it, we don&apos;t deploy it.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Bias tested before launch</div>
                <p className="oi-closer-commit-b">Every model undergoes bias auditing across relevant attributes before production. Fairness metrics are pre-agreed and continuously monitored post-deployment.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Regulatory alignment</div>
                <p className="oi-closer-commit-b">GDPR, EU AI Act, SOC 2, and industry-specific regulations mapped to every AI system. Compliance evidence packs generated automatically for audit readiness.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior governance leads</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The governance specialists who design your framework are the ones who audit, monitor, and report — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free governance audit</div>
              <h4>Get your AI governance roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your governance audit</span>
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
            <div className="eyebrow lt">Governance support</div>
            <h2>One team for <span>questions &amp; audits.</span></h2>
            <p>Three channels. Senior governance specialists. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For governance questions, compliance reviews, and audit evidence requests. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">AI incidents, compliance escalations, or bias alerts. Answered by a senior governance lead.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring AI ethics specialists and governance engineers. Mention the role you are interested in.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior governance leads</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> SOC 2 compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
