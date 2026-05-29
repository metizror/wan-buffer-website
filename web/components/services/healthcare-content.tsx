/* ────────────────────────────────────────────────────────────────────────
   HEALTHCARE — unique page design
   Hero split + patient queue mock · Operations cards · Alternating
   feature rows · Dotted process flow · Multi-facility section ·
   Platforms · FAQ · Closer · Support
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
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
} from "./odoo-service-icons";

/* ── Patient queue mockup ── */
const PATIENTS = [
  { id: "PT-1042", name: "A. Sharma", dept: "Cardiology", time: "09:15 AM", status: "in-consult" as const },
  { id: "PT-1043", name: "R. Patel", dept: "Orthopaedics", time: "09:30 AM", status: "waiting" as const },
  { id: "PT-1044", name: "M. Khan", dept: "Radiology", time: "09:45 AM", status: "checked-in" as const },
  { id: "PT-1045", name: "S. Nair", dept: "Dermatology", time: "10:00 AM", status: "in-consult" as const },
  { id: "PT-1046", name: "J. Thomas", dept: "Lab / Pathology", time: "10:15 AM", status: "billing" as const },
  { id: "PT-1047", name: "D. Gupta", dept: "General Medicine", time: "10:30 AM", status: "scheduled" as const },
] as const;

/* ── Healthcare operations ── */
const OPERATIONS = [
  { icon: <UsersIcon />, t: "Patient Flow Management", s: "End-to-end patient journey from registration through consultation, diagnostics, treatment, and discharge — with real-time queue visibility, wait-time alerts, and automated bed management.", color: "ai" as const },
  { icon: <WalletIcon />, t: "Billing Automation", s: "Automated charge capture, insurance claims processing, co-pay calculation, and revenue cycle management. Reduces billing errors by up to 40% and accelerates collections by 3× compared to manual processes.", color: "green" as const },
  { icon: <SparklesIcon />, t: "Scheduling AI", s: "ML-powered appointment scheduling that optimises provider utilisation, reduces no-shows with predictive alerts, and auto-suggests rescheduling when cancellations occur — maximising clinic throughput.", color: "purple" as const },
  { icon: <ShieldIcon />, t: "Compliance & Security", s: "HIPAA, NABH, and GDPR-ready configurations with role-based access, audit trails, consent management, and encrypted patient data — built into every module from day one.", color: "red" as const },
] as const;

/* ── Features ── */
const FEATURES = [
  { num: "01", icon: <UsersIcon />, t: "Patient Registration & Flow", s: "Unified patient master with demographics, insurance, and consent records. Digital registration kiosks, token-based queue management, and real-time department-wise patient flow dashboards — reducing average wait time by up to 35%." },
  { num: "02", icon: <WalletIcon />, t: "Automated Billing & Claims", s: "Charge capture linked to procedures, diagnostics, and pharmacy. Insurance eligibility verification, pre-authorisation workflows, claims submission (EDI 837), and denial management — with automatic co-pay and deductible calculation per encounter." },
  { num: "03", icon: <SparklesIcon />, t: "AI-Powered Scheduling", s: "Predictive scheduling that factors in provider availability, procedure duration, equipment needs, and historical no-show rates. Automated reminders via SMS and WhatsApp. Dynamic slot reallocation when cancellations occur." },
  { num: "04", icon: <MonitorIcon />, t: "EHR & EMR Integration", s: "Bidirectional integration with electronic health records — patient history, prescriptions, lab results, and imaging reports flow seamlessly between clinical and administrative systems. HL7 FHIR and API-based connectivity." },
  { num: "05", icon: <PackageIcon />, t: "Pharmacy & Inventory Management", s: "Drug inventory with batch and expiry tracking, automated reorder points, and controlled substance management. Prescription-to-dispense workflow with dosage verification and drug interaction alerts." },
  { num: "06", icon: <BarChartIcon />, t: "Healthcare Analytics & BI", s: "Real-time dashboards for patient volume, revenue per department, bed occupancy, average length of stay, and provider productivity. Drill from hospital-level KPIs to individual encounter-level data." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Assess", s: "Map patient journeys, workflows & pain points" },
  { icon: <SettingsIcon />, t: "Configure", s: "Set up modules, integrations & compliance" },
  { icon: <DatabaseIcon />, t: "Migrate", s: "Transfer patient data with full validation" },
  { icon: <RocketIcon />, t: "Go live", s: "Deploy with training & parallel run" },
] as const;

/* ── Multi-facility locations ── */
const FACILITIES = [
  { t: "Main Hospital", sub: "Multi-speciality inpatient & outpatient", beds: 250, active: true },
  { t: "Satellite Clinic", sub: "Outpatient consultations & diagnostics", beds: 0, ops: "120 visits/day", active: true },
  { t: "Diagnostic Centre", sub: "Lab, radiology & imaging services", beds: 0, active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "Odoo Healthcare", color: "#714B67" },
  { name: "Odoo Accounting", color: "#714B67" },
  { name: "Odoo Inventory", color: "#714B67" },
  { name: "HL7 FHIR", color: "#E63946" },
  { name: "Lab LIS", color: "#22C55E" },
  { name: "PACS / RIS", color: "#7C3AED" },
  { name: "Custom HMS", color: "#00C2FF" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "Can you manage patient flow across multiple departments in real time?", a: "Yes. We configure department-wise patient queues with token management, real-time wait-time displays, and automated routing. When a patient completes a consultation, the system can auto-queue them for the next step — lab, radiology, pharmacy, or billing — without manual intervention." },
  { q: "How does billing automation handle insurance claims?", a: "We configure end-to-end claims processing — insurance eligibility verification at registration, pre-authorisation workflows for procedures, automated charge capture linked to encounters, EDI 837 claim submission, ERA 835 remittance processing, and denial management with automated resubmission. Co-pays and deductibles calculate automatically per plan." },
  { q: "Can the scheduling AI reduce patient no-shows?", a: "Yes. Our ML model analyses historical no-show patterns by provider, time slot, and patient segment. It sends multi-channel reminders (SMS, WhatsApp, email) at optimised intervals and flags high-risk appointments. When cancellations occur, the system auto-offers vacant slots to waitlisted patients. Clients typically see 20–30% reduction in no-shows." },
  { q: "Do you support EHR/EMR integration?", a: "Yes. We integrate with major EHR systems using HL7 FHIR, REST APIs, and custom connectors. Patient demographics, clinical notes, prescriptions, lab results, and imaging reports sync bidirectionally between your clinical system and the administrative ERP — eliminating double data entry." },
  { q: "Is the system HIPAA and NABH compliant?", a: "Yes. We configure role-based access control, audit trails, consent management, data encryption at rest and in transit, and automated compliance reporting. The system is designed to meet HIPAA (US), NABH (India), GDPR (EU), and DHA (UAE) requirements out of the box." },
  { q: "How long does a healthcare ERP implementation take?", a: "Single-clinic setup takes 4–6 weeks. Multi-department hospital with billing automation and EHR integration takes 10–16 weeks. Multi-facility healthcare groups with pharmacy, lab integration, and AI scheduling take 14–24 weeks." },
] as const;

/* ── Component ── */
export function HealthcareContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + patient queue right ═══ */}
      <section className="hc-hero">
        <div className="hc-hero-glow hc-hero-glow-1" aria-hidden="true" />
        <div className="hc-hero-glow hc-hero-glow-2" aria-hidden="true" />
        <div className="hc-hero-dots" aria-hidden="true" />
        <div className="hc-hero-inner">
          <div className="hc-hero-content">
            <div className="hc-hero-badge rev">
              <span className="hc-hero-badge-dot" />
              Healthcare
            </div>
            <h1 className="hc-hero-h rev">
              Healthcare<br />ERP.<br />
              <span className="acc">Every patient.<br />Every claim.<br />Managed.</span>
            </h1>
            <p className="hc-hero-sub rev">
              Patient flow management, automated billing and claims, AI-powered scheduling, EHR integration, and compliance-ready reporting — <strong>integrated into your ERP.</strong>
            </p>
            <div className="hc-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Get your healthcare audit</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#features">See features</a>
            </div>
            {/* stat pills */}
            <div className="hc-hero-stats rev">
              <div className="hc-hero-stat">
                <span className="hc-hero-stat-n">35%</span>
                <span className="hc-hero-stat-l">Shorter wait times</span>
              </div>
              <span className="hc-hero-stat-div" />
              <div className="hc-hero-stat">
                <span className="hc-hero-stat-n">40%</span>
                <span className="hc-hero-stat-l">Fewer billing errors</span>
              </div>
              <span className="hc-hero-stat-div" />
              <div className="hc-hero-stat">
                <span className="hc-hero-stat-n">3×</span>
                <span className="hc-hero-stat-l">Faster collections</span>
              </div>
            </div>
          </div>

          {/* Patient queue mockup */}
          <div className="hc-queue rev">
            <div className="hc-queue-hdr">
              <div className="hc-queue-live">
                <span className="hc-queue-live-dot" />
                Live
              </div>
              <div className="hc-queue-title">Patient Queue</div>
            </div>
            <div className="hc-queue-list">
              {PATIENTS.map((p) => {
                const pct = p.status === "in-consult" ? 70 : p.status === "checked-in" ? 40 : p.status === "billing" ? 90 : p.status === "waiting" ? 20 : 5;
                return (
                  <div key={p.id} className={`hc-pt hc-pt-${p.status}`}>
                    <div className="hc-pt-top">
                      <span className="hc-pt-id">{p.id}</span>
                      <span className={`hc-pt-status hc-pt-status-${p.status}`}>
                        {p.status === "in-consult" ? "In Consult" : p.status === "waiting" ? "Waiting" : p.status === "checked-in" ? "Checked In" : p.status === "billing" ? "Billing" : "Scheduled"}
                      </span>
                    </div>
                    <div className="hc-pt-mid">
                      <span className="hc-pt-name">{p.name}</span>
                      <span className="hc-pt-time">{p.time}</span>
                    </div>
                    <div className="hc-pt-progress">
                      <div className={`hc-pt-progress-fill hc-pt-progress-${p.status}`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="hc-pt-dept">{p.dept}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OPERATIONS — 4 cards ═══ */}
      <section className="hc-ops">
        <div className="hc-ops-inner">
          <div className="hc-ops-hdr rev">
            <div className="eyebrow">Healthcare operations</div>
            <h2>Register. Treat. Bill.<br /><span>Analyse.</span></h2>
          </div>
          <div className="hc-ops-grid rev">
            {OPERATIONS.map((op) => (
              <div key={op.t} className={`hc-op hc-op-${op.color}`}>
                <div className="hc-op-icon">{op.icon}</div>
                <div className="hc-op-t">{op.t}</div>
                <p className="hc-op-s">{op.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES — alternating rows ═══ */}
      <section className="hc-feat" id="features">
        <div className="hc-feat-inner">
          <div className="hc-feat-hdr rev">
            <div className="eyebrow lt">Core features</div>
            <h2>Six capabilities.<br /><span>Complete healthcare control.</span></h2>
          </div>
          <div className="hc-feat-list">
            {FEATURES.map((f, i) => (
              <div key={f.num} className={`hc-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="hc-feat-row-num">{f.num}</div>
                <div className="hc-feat-row-icon">{f.icon}</div>
                <div className="hc-feat-row-body">
                  <div className="hc-feat-row-t">{f.t}</div>
                  <p className="hc-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="hc-proc" id="process">
        <div className="hc-proc-inner">
          <div className="hc-proc-hdr rev">
            <div className="eyebrow">Implementation process</div>
            <h2>Four steps to<br /><span>smarter healthcare.</span></h2>
          </div>
          <div className="hc-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="hc-proc-step-wrap">
                {i > 0 && <div className="hc-proc-dots" />}
                <div className="hc-proc-step">
                  <div className="hc-proc-step-icon">{p.icon}</div>
                  <div className="hc-proc-step-t">{p.t}</div>
                  <div className="hc-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to transform</div>
              <h3>Want your facility <span>running on AI?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Talk to a healthcare engineer</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MULTI-FACILITY — split ═══ */}
      <section className="hc-multi" id="multi-facility">
        <div className="hc-multi-inner">
          <div className="hc-multi-hdr rev">
            <div className="eyebrow lt">Multi-facility</div>
            <h2>One system.<br /><span>Every location.</span></h2>
          </div>
          <div className="hc-multi-split rev">
            <div className="hc-multi-left">
              <div className="hc-multi-big-n">3+</div>
              <div className="hc-multi-big-l">Healthcare facilities managed from one ERP</div>
              <p className="hc-multi-big-s">Hospitals, satellite clinics, and diagnostic centres — all orchestrated from a single system with unified patient records, centralised billing, and real-time operational visibility across every location.</p>
            </div>
            <div className="hc-multi-right">
              {FACILITIES.map((fac) => (
                <div key={fac.t} className={`hc-multi-loc${fac.active ? "" : " inactive"}`}>
                  <div className="hc-multi-loc-t">{fac.t}</div>
                  <div className="hc-multi-loc-sub">{fac.sub}</div>
                  {fac.beds > 0 && <div className="hc-multi-loc-stat">{fac.beds} beds</div>}
                  {"ops" in fac && fac.ops && <div className="hc-multi-loc-stat">{fac.ops}</div>}
                  {!fac.active && <div className="hc-multi-loc-stat">LIS / PACS integration</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="hc-plat">
        <div className="hc-plat-inner rev">
          <div className="hc-plat-label">Healthcare &amp; clinical integrations</div>
          <div className="hc-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="hc-plat-badge">
                <span className="hc-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="hc-faq" id="faq">
        <div className="hc-faq-inner">
          <div className="hc-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Healthcare ERP.</span></h2>
          </div>
          <div className="hc-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="hc-faq-item">
                <summary className="hc-faq-q">{f.q}</summary>
                <p className="hc-faq-a">{f.a}</p>
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
              <div className="eyebrow">Choosing your healthcare partner</div>
              <h3>Most ERPs track records,<br /><span>not patient outcomes.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">55%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>of clinics still process billing and claims manually.</strong>
                  Source: HIMSS, 2024. The result is claim denials, revenue leakage, scheduling conflicts, and zero visibility into per-department profitability — problems that compound as patient volume grows.
                </div>
              </div>
              <p>That&apos;s why every Wan Buffer healthcare deployment covers the full patient lifecycle — not just record-keeping. Four commitments, written into the contract.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Unified patient journey — end to end</div>
                <p className="oi-closer-commit-b">Every patient flows through registration, consultation, diagnostics, billing, and follow-up within a single system. No data silos, no manual hand-offs between departments.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><TargetIcon /></div>
                <div className="oi-closer-commit-t">Pre-agreed efficiency targets</div>
                <p className="oi-closer-commit-b">Patient wait times, billing accuracy, claim denial rates, and scheduling utilisation are defined before go-live. If we miss targets, we keep iterating — at our cost.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">Compliance built in — not bolted on</div>
                <p className="oi-closer-commit-b">HIPAA, NABH, GDPR, and DHA compliance configured from day one — role-based access, audit trails, consent workflows, and encrypted data storage in every module.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><UsersIcon /></div>
                <div className="oi-closer-commit-t">Senior healthcare engineers only</div>
                <p className="oi-closer-commit-b">No juniors, no outsourcing. The engineer who maps your patient flow is the one who configures, migrates, trains, and supports — named in the contract.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start with a free healthcare audit</div>
              <h4>Get your healthcare ERP roadmap in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Book your healthcare audit</span>
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
            <div className="eyebrow lt">Healthcare support</div>
            <h2>One team for <span>questions &amp; fixes.</span></h2>
            <p>Three channels. Senior healthcare engineers. SLA in writing.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written support</a>
              <p className="oi-supp-body-v2">For billing configuration, scheduling rules, and EHR integration questions. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Urgent issues</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Billing system down or patient flow disruption. Answered by a senior healthcare engineer.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">Hiring healthcare ERP engineers and clinical workflow specialists.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Reach the team <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> Senior healthcare engineers</span>
            <span className="oi-supp-commit-item"><ClockIcon /> SLA in writing</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> HIPAA compliant</span>
            <span className="oi-supp-commit-item"><HeartIcon /> 90-day hypercare</span>
          </div>
        </div>
      </section>
    </main>
  );
}
