/* ────────────────────────────────────────────────────────────────────────
   HIRE AI ENGINEERS — dedicated page
   Hero split + AI talent pool mock · Why hire from us · Roles available ·
   Process flow · Engagement options · FAQ · Closer · Support
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

/* ── AI talent pool mockup ── */
const TALENT = [
  { id: "AI-071", role: "LangChain Agent Developer", stack: "Python · LangChain · GPT-4", exp: "5 yrs", avail: "now" as const },
  { id: "AI-072", role: "ML Engineer", stack: "TensorFlow · PyTorch · Scikit", exp: "6 yrs", avail: "now" as const },
  { id: "AI-073", role: "NLP / LLM Specialist", stack: "Transformers · BERT · Claude", exp: "4 yrs", avail: "now" as const },
  { id: "AI-074", role: "Computer Vision Engineer", stack: "OpenCV · YOLO · TensorRT", exp: "5 yrs", avail: "2-week" as const },
  { id: "AI-075", role: "Data Engineer (AI)", stack: "Spark · Airflow · dbt", exp: "5 yrs", avail: "now" as const },
  { id: "AI-076", role: "MLOps Engineer", stack: "MLflow · Docker · K8s", exp: "4 yrs", avail: "now" as const },
] as const;

/* ── Why hire from us ── */
const WHY_US = [
  { icon: <ShieldIcon />, t: "AI-Specific Vetting", s: "Every AI engineer passes a 4-stage process — ML fundamentals assessment, framework-specific coding challenge (LangChain/TensorFlow/PyTorch), system design interview, and portfolio review of deployed AI projects. Only 6% of applicants qualify.", color: "ai" as const },
  { icon: <UsersIcon />, t: "100% Dedicated to You", s: "No shared resources, no split attention. Your AI engineer works exclusively on your projects — building models, training pipelines, and deploying agents for your business alone.", color: "green" as const },
  { icon: <ClockIcon />, t: "Onboarded in 1–2 Weeks", s: "From requirement to productive AI engineer in 5–10 business days. You interview, approve, and we handle everything else. Your engineer starts building from Day 1 — not ramping up for a month.", color: "purple" as const },
  { icon: <CpuIcon />, t: "ERP + AI Integration Expertise", s: "Our AI engineers don't just build models in isolation — they integrate AI directly into ERP workflows. Predictive analytics in Odoo, AI agents for Salesforce, document AI for accounting — applied AI, not academic AI.", color: "red" as const },
] as const;

/* ── Roles available ── */
const ROLES = [
  { num: "01", icon: <SparklesIcon />, t: "LangChain & AI Agent Developers", s: "Build autonomous AI agents using LangChain, LlamaIndex, and CrewAI. Multi-step reasoning, tool use, memory management, and ERP integration. These engineers build agents that execute real business tasks — not chatbot demos." },
  { num: "02", icon: <CpuIcon />, t: "ML & Deep Learning Engineers", s: "TensorFlow, PyTorch, and Scikit-learn specialists who build predictive models — demand forecasting, anomaly detection, lead scoring, and recommendation engines. From data preparation through model training to production deployment." },
  { num: "03", icon: <CodeIcon />, t: "NLP & LLM Specialists", s: "GPT-4, Claude, Gemini, and open-source LLM fine-tuning. RAG pipeline development, semantic search, text classification, entity extraction, and conversational AI. Experts in prompt engineering, embedding strategies, and context window optimisation." },
  { num: "04", icon: <EyeIcon />, t: "Computer Vision Engineers", s: "OpenCV, YOLO, and TensorRT specialists for visual inspection, document OCR, defect detection, and object recognition. From model training with custom datasets to edge deployment on production hardware." },
  { num: "05", icon: <DatabaseIcon />, t: "Data Engineers (AI Pipeline)", s: "Spark, Airflow, and dbt experts who build the data infrastructure that feeds your AI models. ETL pipelines, feature stores, data lakes, and real-time streaming — the plumbing that makes AI work at scale." },
  { num: "06", icon: <CloudIcon />, t: "MLOps & AI Infrastructure", s: "MLflow, Weights & Biases, Docker, and Kubernetes specialists who productionise AI models. CI/CD for ML, model versioning, A/B testing, monitoring, and auto-scaling. They ensure your AI runs reliably in production — not just in notebooks." },
] as const;

/* ── Process flow ── */
const PROCESS = [
  { icon: <SearchIcon />, t: "Share Requirements", s: "Tell us the AI role, stack & experience" },
  { icon: <UsersIcon />, t: "Review Profiles", s: "We send 2–3 pre-vetted AI engineers in 48h" },
  { icon: <MonitorIcon />, t: "Interview & Approve", s: "You interview each candidate directly" },
  { icon: <RocketIcon />, t: "Onboard & Start", s: "Engineer starts within 1–2 weeks" },
] as const;

/* ── Engagement options ── */
const OPTIONS = [
  { t: "Single AI Engineer", sub: "One dedicated specialist for focused AI work", start: "1 week onboard", active: true },
  { t: "AI Pod (2–4)", sub: "ML engineer + data engineer + MLOps", start: "1–2 weeks onboard", active: true },
  { t: "Full AI Team (5–10)", sub: "Complete AI engineering squad with tech lead", start: "2–4 weeks onboard", active: false },
] as const;

/* ── Platforms ── */
const PLATFORMS = [
  { name: "LangChain", color: "#22C55E" },
  { name: "OpenAI / GPT-4", color: "#10A37F" },
  { name: "Claude / Anthropic", color: "#7C3AED" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "PyTorch", color: "#EE4C2C" },
  { name: "Python", color: "#3776AB" },
  { name: "AWS SageMaker", color: "#FF9900" },
] as const;

/* ── FAQ ── */
const FAQS = [
  { q: "How do you vet AI engineers differently from regular developers?", a: "AI engineers go through a specialised 4-stage vetting: (1) ML fundamentals — statistics, linear algebra, and algorithm theory. (2) Framework-specific coding — build a working model or agent in LangChain/TensorFlow/PyTorch within a timed session. (3) System design — architect an end-to-end ML pipeline for a real business problem. (4) Portfolio review — we evaluate deployed AI projects, not just Kaggle notebooks. Only 6% pass all four stages." },
  { q: "Can your AI engineers integrate with our existing ERP?", a: "Yes — that's our differentiator. Our AI engineers have direct experience integrating AI into ERP systems — predictive analytics in Odoo dashboards, AI agents that execute Salesforce workflows, document processing that auto-posts to accounting modules. They build applied AI that plugs into your business operations, not standalone models." },
  { q: "What's the difference between an ML engineer and an AI agent developer?", a: "ML engineers build predictive models — demand forecasting, anomaly detection, classification. AI agent developers build autonomous systems using LangChain, LlamaIndex, or CrewAI — agents that reason, use tools, maintain memory, and execute multi-step business tasks. Different skill sets for different problems. We help you choose the right role." },
  { q: "Can I hire for a short-term AI project (2–3 months)?", a: "Yes. While our model is month-to-month, many clients hire for specific AI initiatives — building a recommendation engine, deploying a document AI pipeline, or creating an AI agent for customer support. The engineer is 100% dedicated for the duration and can be released with 2 weeks' notice when the project completes." },
  { q: "What if I need an AI engineer with a very niche specialisation?", a: "Tell us the exact stack, domain, and experience level. If the skill exists on our bench, we send profiles in 48 hours. If it requires a targeted search, we extend to 1–2 weeks. Niche roles we've filled recently: reinforcement learning for supply chain, medical imaging with DICOM, and Arabic NLP for GCC clients." },
  { q: "How does pricing compare to hiring in-house?", a: "Our AI engineers cost 40–60% less than equivalent in-house hires in the US/EU — including the cost of vetting, management overhead, and infrastructure. Month-to-month pricing means you pay only when you need capacity. No recruitment fees, no benefits overhead, no notice period costs when scaling down." },
] as const;

/* ── Component ── */
export function HireAiContent() {
  return (
    <main className="svc-page">

      {/* ═══ HERO — text left + AI talent pool right ═══ */}
      <section className="ha-hero">
        <div className="ha-hero-glow ha-hero-glow-1" aria-hidden="true" />
        <div className="ha-hero-glow ha-hero-glow-2" aria-hidden="true" />
        <div className="ha-hero-dots" aria-hidden="true" />
        <div className="ha-hero-inner">
          <div className="ha-hero-content">
            <div className="ha-hero-badge rev">
              <span className="ha-hero-badge-dot" />
              Hire AI Engineers
            </div>
            <h1 className="ha-hero-h rev">
              Hire AI<br />Engineers.<br />
              <span className="acc">LangChain.<br />GPT. ML.<br />Deployed.</span>
            </h1>
            <p className="ha-hero-sub rev">
              LangChain, OpenAI, TensorFlow, and Python AI specialists — pre-vetted, 100% dedicated, and onboarded in 1–2 weeks. <strong>Applied AI, not academic AI.</strong>
            </p>
            <div className="ha-hero-ctas rev">
              <a className="oi-hero-lux-primary" href="#contact">
                <span>Hire an AI engineer</span>
                <span className="oi-hero-lux-primary-circle"><ArrowRightIcon /></span>
              </a>
              <a className="oi-hero-lux-secondary" href="#roles">See available roles</a>
            </div>
            {/* stat pills */}
            <div className="ha-hero-stats rev">
              <div className="ha-hero-stat">
                <span className="ha-hero-stat-n">6%</span>
                <span className="ha-hero-stat-l">Acceptance rate</span>
              </div>
              <span className="ha-hero-stat-div" />
              <div className="ha-hero-stat">
                <span className="ha-hero-stat-n">48h</span>
                <span className="ha-hero-stat-l">Profile delivery</span>
              </div>
              <span className="ha-hero-stat-div" />
              <div className="ha-hero-stat">
                <span className="ha-hero-stat-n">40–60%</span>
                <span className="ha-hero-stat-l">Cost savings</span>
              </div>
            </div>
          </div>

          {/* AI talent pool mockup */}
          <div className="ha-pool rev">
            <div className="ha-pool-hdr">
              <div className="ha-pool-live">
                <span className="ha-pool-live-dot" />
                Live
              </div>
              <div className="ha-pool-title">AI Talent Pool</div>
            </div>
            <div className="ha-pool-list">
              {TALENT.map((t) => (
                <div key={t.id} className={`ha-dev ha-dev-${t.avail}`}>
                  <div className="ha-dev-top">
                    <span className="ha-dev-role">{t.role}</span>
                    <span className={`ha-dev-avail ha-dev-avail-${t.avail}`}>
                      {t.avail === "now" ? "Available" : "2 Weeks"}
                    </span>
                  </div>
                  <div className="ha-dev-mid">
                    <span className="ha-dev-stack">{t.stack}</span>
                    <span className="ha-dev-exp">{t.exp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY US — 4 cards ═══ */}
      <section className="ha-ops">
        <div className="ha-ops-inner">
          <div className="ha-ops-hdr rev">
            <div className="eyebrow">Why hire AI from us</div>
            <h2>Vetted. Applied. Integrated.<br /><span>Deployed.</span></h2>
          </div>
          <div className="ha-ops-grid rev">
            {WHY_US.map((item) => (
              <div key={item.t} className={`ha-op ha-op-${item.color}`}>
                <div className="ha-op-icon">{item.icon}</div>
                <div className="ha-op-t">{item.t}</div>
                <p className="ha-op-s">{item.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ROLES — alternating rows ═══ */}
      <section className="ha-feat" id="roles">
        <div className="ha-feat-inner">
          <div className="ha-feat-hdr rev">
            <div className="eyebrow lt">Available roles</div>
            <h2>Six AI disciplines.<br /><span>Hire by specialisation.</span></h2>
          </div>
          <div className="ha-feat-list">
            {ROLES.map((f, i) => (
              <div key={f.num} className={`ha-feat-row${i % 2 === 1 ? " alt" : ""} rev`}>
                <div className="ha-feat-row-num">{f.num}</div>
                <div className="ha-feat-row-icon">{f.icon}</div>
                <div className="ha-feat-row-body">
                  <div className="ha-feat-row-t">{f.t}</div>
                  <p className="ha-feat-row-s">{f.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS — dotted flow ═══ */}
      <section className="ha-proc" id="process">
        <div className="ha-proc-inner">
          <div className="ha-proc-hdr rev">
            <div className="eyebrow">How it works</div>
            <h2>Four steps to<br /><span>your AI engineer.</span></h2>
          </div>
          <div className="ha-proc-flow rev">
            {PROCESS.map((p, i) => (
              <div key={p.t} className="ha-proc-step-wrap">
                {i > 0 && <div className="ha-proc-dots" />}
                <div className="ha-proc-step">
                  <div className="ha-proc-step-icon">{p.icon}</div>
                  <div className="ha-proc-step-t">{p.t}</div>
                  <div className="ha-proc-step-s">{p.s}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="oi-meth-footer rev">
            <div className="oi-meth-footer-l">
              <div className="oi-meth-footer-l-eyebrow">Ready to hire</div>
              <h3>Need an AI engineer <span>who ships to production?</span></h3>
            </div>
            <div className="oi-meth-footer-r">
              <a className="oi-cta-big" href="#contact">
                <span>Get AI profiles in 48 hours</span>
                <span className="oi-cta-big-arrow"><ArrowRightIcon /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT OPTIONS — split ═══ */}
      <section className="ha-multi" id="options">
        <div className="ha-multi-inner">
          <div className="ha-multi-hdr rev">
            <div className="eyebrow lt">Engagement options</div>
            <h2>One engineer.<br /><span>Or a full AI pod.</span></h2>
          </div>
          <div className="ha-multi-split rev">
            <div className="ha-multi-left">
              <div className="ha-multi-big-n">30+</div>
              <div className="ha-multi-big-l">AI engineers on our vetted bench</div>
              <p className="ha-multi-big-s">From a single LangChain specialist for an agent build to a 10-person AI squad with ML engineers, data engineers, and MLOps — your hiring scales with your AI ambitions, month to month.</p>
            </div>
            <div className="ha-multi-right">
              {OPTIONS.map((o) => (
                <div key={o.t} className={`ha-multi-loc${o.active ? "" : " inactive"}`}>
                  <div className="ha-multi-loc-t">{o.t}</div>
                  <div className="ha-multi-loc-sub">{o.sub}</div>
                  <div className="ha-multi-loc-stat">{o.start}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="ha-plat">
        <div className="ha-plat-inner rev">
          <div className="ha-plat-label">Technologies our AI engineers work with</div>
          <div className="ha-plat-row">
            {PLATFORMS.map((p) => (
              <span key={p.name} className="ha-plat-badge">
                <span className="ha-plat-badge-dot" style={{ background: p.color }} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="ha-faq" id="faq">
        <div className="ha-faq-inner">
          <div className="ha-faq-hdr rev">
            <div className="eyebrow">Frequently asked questions</div>
            <h2>Common questions about<br /><span>Hiring AI Engineers.</span></h2>
          </div>
          <div className="ha-faq-list rev">
            {FAQS.map((f) => (
              <details key={f.q.slice(0, 30)} className="ha-faq-item">
                <summary className="ha-faq-q">{f.q}</summary>
                <p className="ha-faq-a">{f.a}</p>
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
              <div className="eyebrow">Why hire AI through us</div>
              <h3>Most AI hires build demos,<br /><span>ours ship to production.</span></h3>
            </div>
            <div className="oi-closer-hdr-r">
              <div className="oi-closer-insight">
                <div className="oi-closer-insight-stat">6%<span></span></div>
                <div className="oi-closer-insight-body">
                  <strong>acceptance rate — only 6 out of 100 AI applicants make it to our bench.</strong>
                  That means every engineer you interview has passed ML fundamentals, framework coding challenges, system design, and deployed-project portfolio review. You hire from the top, not the hype.
                </div>
              </div>
              <p>Every AI hire comes with four guarantees — written into the agreement.</p>
            </div>
          </div>

          <div>
            <div className="oi-closer-commits-l">What we commit to · in writing</div>
            <div className="oi-closer-commits rev">
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">01</div>
                <div className="oi-closer-commit-icon"><ShieldIcon /></div>
                <div className="oi-closer-commit-t">AI-specific 4-stage vetting</div>
                <p className="oi-closer-commit-b">ML theory, framework coding, system design, and portfolio review. Every AI engineer. No generalists relabelled as AI specialists.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">02</div>
                <div className="oi-closer-commit-icon"><CpuIcon /></div>
                <div className="oi-closer-commit-t">ERP integration expertise included</div>
                <p className="oi-closer-commit-b">Our AI engineers build models that plug into ERP workflows — not standalone notebooks. Odoo, Salesforce, and Zoho integration experience is verified during vetting.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">03</div>
                <div className="oi-closer-commit-icon"><RefreshIcon /></div>
                <div className="oi-closer-commit-t">Free replacement in the first 2 weeks</div>
                <p className="oi-closer-commit-b">If an AI engineer isn&apos;t the right fit, we replace them at zero cost. No gap, no penalty — immediate bench replacement from our AI-specialist pool.</p>
              </div>
              <div className="oi-closer-commit">
                <div className="oi-closer-commit-num">04</div>
                <div className="oi-closer-commit-icon"><TrendingUpIcon /></div>
                <div className="oi-closer-commit-t">Month-to-month — no lock-ins ever</div>
                <p className="oi-closer-commit-b">Add or release AI engineers with 2 weeks&apos; notice. No annual contracts, no minimum terms. Scale your AI capacity with your project pipeline.</p>
              </div>
            </div>
          </div>

          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <div className="oi-closer-cta-eyebrow">Start hiring today</div>
              <h4>Get AI engineer profiles in <span>48 hours.</span></h4>
            </div>
            <div className="oi-closer-cta-r">
              <a className="oi-cta-big" href="#contact">
                <span>Hire an AI engineer</span>
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
            <div className="eyebrow lt">Get started</div>
            <h2>One call to <span>hire your AI engineer.</span></h2>
            <p>Three channels. Pre-vetted AI profiles in 48 hours.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live"><span className="oi-supp-status-v2-dot" />Online now</span>
              <div className="oi-supp-icon-v2"><MailIcon /></div>
              <div className="oi-supp-label">Email &amp; chat</div>
              <a className="oi-supp-title-v2" href="#contact">Written enquiry</a>
              <p className="oi-supp-body-v2">Share your AI requirements for matched engineer profiles. First reply in under 2 hours.</p>
              <a className="oi-supp-cta-v2" href="#contact">Open contact form <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent"><span className="oi-supp-status-v2-dot" />Direct line</span>
              <div className="oi-supp-icon-v2"><PhoneCallIcon /></div>
              <div className="oi-supp-label">Phone · 24 &times; 7</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">+91 99041 22699</a>
              <p className="oi-supp-body-v2">Speak directly to a hiring manager about your AI team needs.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">Call now <ArrowRightIcon /></a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring"><span className="oi-supp-status-v2-dot" />We&apos;re hiring</span>
              <div className="oi-supp-icon-v2"><BriefcaseIcon /></div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="tel:+918511593381">+91 85115 93381</a>
              <p className="oi-supp-body-v2">AI/ML engineers — join our bench and work with global clients on production AI.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">Apply now <ArrowRightIcon /></a>
            </div>
          </div>
          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item"><CheckIcon /> 4-stage AI vetting</span>
            <span className="oi-supp-commit-item"><ClockIcon /> 48h profile delivery</span>
            <span className="oi-supp-commit-item"><ShieldIcon /> Free 2-week replacement</span>
            <span className="oi-supp-commit-item"><HeartIcon /> No lock-ins</span>
          </div>
        </div>
      </section>
    </main>
  );
}
