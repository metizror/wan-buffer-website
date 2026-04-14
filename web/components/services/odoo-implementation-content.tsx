const implementationPhases = [
  {
    icon: "🔍",
    title: "Analysis of requirements",
    body: "We first understand your company's requirements. It is extremely difficult to create the right solution without fully grasping and evaluating your business needs. We keep your goals at the centre of every decision.",
    tag: "Discovery",
    ai: false,
  },
  {
    icon: "🛠️",
    title: "Development & personalisation",
    body: "After understanding your needs, we proceed with Odoo ERP development. Modules are built to serve your business better, following industry norms and standards.",
    tag: "Build",
    ai: true,
  },
  {
    icon: "⚙️",
    title: "Odoo installation & configuration",
    body: "We provide configuration flexibility aligned to your business. ERP functions and analysis tools are tuned so your teams get the highest practical level of customisation on their screens.",
    tag: "Configure",
    ai: false,
  },
  {
    icon: "📤",
    title: "Data transfer",
    body: "Data transfer is a vital part of ERP implementation. We move data from legacy software, spreadsheets, older Odoo versions, and more into your new Odoo ERP with care and validation.",
    tag: "Migrate",
    ai: true,
  },
  {
    icon: "🎓",
    title: "Assistance & training",
    body: "Odoo's breadth makes training essential. After go-live, we train end users through live sessions, recordings, and documentation so adoption sticks.",
    tag: "Enable",
    ai: false,
  },
  {
    icon: "🚀",
    title: "Going live",
    body: "We stay with you through launch and stabilisation so unclear edge cases are handled quickly and your ERP supports the business from day one.",
    tag: "Launch",
    ai: true,
  },
] as const;

const roadmapSteps = [
  { n: "01", icon: "🎯", title: "Defining business objectives", body: "We align on the outcomes you need so recommendations map to measurable goals." },
  { n: "02", icon: "💰", title: "Allocation of finances", body: "Budget clarity early so scope, phases, and hosting choices stay realistic." },
  { n: "03", icon: "📊", title: "Choosing the most appropriate ERP", body: "If Odoo is the fit, we document why and how each app supports your processes." },
  { n: "04", icon: "🤝", title: "Picking the right implementation partner", body: "Experience, methodology, and post-go-live support matter as much as technical skill." },
  { n: "05", icon: "📐", title: "Specifying implementation stages", body: "Phased delivery with clear milestones reduces risk and keeps teams productive." },
  { n: "06", icon: "☁️", title: "Selecting the most suitable plan", body: "Hosting, integrations, and SLAs are chosen to match performance and compliance needs." },
  { n: "07", icon: "📥", title: "Transfer of data", body: "Legacy data is cleaned, mapped, and reconciled before cutover." },
  { n: "08", icon: "✅", title: "Testing", body: "The full stack is thoroughly tested before go-live so finance, inventory, and sales flows behave as agreed." },
  { n: "09", icon: "📚", title: "Teaching", body: "Users learn the system in the context of their real jobs—not generic demos." },
  { n: "10", icon: "🌐", title: "Going live", body: "Controlled cutover with rollback thinking and hypercare when you need it." },
  { n: "11", icon: "🛡️", title: "Assistance & upkeep", body: "Ongoing support keeps Odoo aligned as your business and regulations evolve." },
] as const;

const whyBuffer = [
  { icon: "💻", title: "Exceptional engineering discipline", body: "Clean, maintainable Odoo code that survives upgrades and audits.", ai: false },
  { icon: "📦", title: "Strong Odoo Apps footprint", body: "Deep experience shipping modules the community and enterprises actually use.", ai: true },
  { icon: "🧩", title: "Skilled across Odoo versions", body: "From older instances to Odoo 17/18—we plan migrations with zero surprises.", ai: false },
  { icon: "✨", title: "Uncompromised quality", body: "Reviews, automated checks, and partner-grade standards on every delivery.", ai: false },
  { icon: "⏱️", title: "Years of execution", body: "Long-running programmes across manufacturing, services, and distribution.", ai: true },
  { icon: "🏆", title: "Thousands of success stories", body: "A track record you can verify through references and shipped projects.", ai: false },
  { icon: "📑", title: "All major Odoo domains", body: "Accounting, inventory, MRP, CRM, HR, eCommerce, and custom verticals.", ai: true },
  { icon: "🎨", title: "UI & UX depth", body: "Interfaces your teams enjoy using—not cluttered forms bolted together.", ai: false },
] as const;

export function OdooImplementationContent() {
  return (
    <main className="svc-page">
      <section className="ai-strip" style={{ borderTop: "none" }}>
        <div className="ai-strip-inner rev">
          <div className="ai-strip-left">
            <div className="ai-strip-label">Odoo ERP services</div>
            <h1 className="ai-strip-h">
              Odoo implementation <span className="ai">without the risk</span>
            </h1>
            <p className="ai-strip-h" style={{ fontSize: "clamp(14px,1.5vw,16px)", fontWeight: 400, marginTop: 18, lineHeight: 1.75, color: "rgba(255,255,255,.48)" }}>
              Odoo implementation can be difficult and costly when it is not led by experts. As an Odoo partner, we
              deliver a structured, user-friendly rollout tailored to your operations—using a methodology we have
              refined across many go-lives.
            </p>
            <div className="svc-flow" aria-label="Implementation flow">
              <span className="svc-flow-step">
                <span className="svc-flow-num">1</span> Examine requirements
              </span>
              <span className="svc-flow-step">
                <span className="svc-flow-num">2</span> Configure for your company
              </span>
              <span className="svc-flow-step">
                <span className="svc-flow-num">3</span> Build your platform
              </span>
              <span className="svc-flow-step">
                <span className="svc-flow-num">4</span> Prepare your teams
              </span>
              <span className="svc-flow-step">
                <span className="svc-flow-num">5</span> Support &amp; upkeep
              </span>
            </div>
            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a className="btn-r" href="#contact">
                <span>Plan your rollout</span>
              </a>
              <a className="btn-o" href="/">
                Back to home
              </a>
            </div>
          </div>
          <div className="ai-strip-right" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="ai-pillar" data-n="★">
              <div className="ai-pillar-icon">🏅</div>
              <div className="ai-pillar-t">Odoo expert partner</div>
              <div className="ai-pillar-s">
                We are among the experienced Odoo implementation companies—developing and deploying the platform to your
                requirements using standardised, proven practices without weakening core Odoo behaviour.
              </div>
            </div>
            <div className="ai-pillar" data-n="★">
              <div className="ai-pillar-icon">📋</div>
              <div className="ai-pillar-t">Method you can trust</div>
              <div className="ai-pillar-s">
                Requirements workshops, solution design, configuration sprints, data migration, UAT, training, and
                hypercare—each gated with sign-off so progress stays visible.
              </div>
            </div>
            <div className="ai-pillar" data-n="★" style={{ gridColumn: "1 / -1" }}>
              <div className="ai-pillar-icon">🌍</div>
              <div className="ai-pillar-t">Built for your regions</div>
              <div className="ai-pillar-s">
                Local tax, language, banking, and industry conventions are handled as part of implementation—not as an
                afterthought.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus" id="phases">
        <div className="why-hdr rev">
          <div>
            <div className="eyebrow">How we implement</div>
            <h2 className="sec-h">
              From requirements
              <br />
              <span className="acc">to confident go-live</span>
            </h2>
          </div>
          <div className="why-hdr-r">
            <p className="sec-p">
              Every phase below is staffed by senior consultants and engineers who have run comparable rollouts before.
              You always know what is happening next—and why it matters for your KPIs.
            </p>
            <div className="why-cta-row">
              <a className="btn-r" href="#contact">
                <span>Talk to a consultant</span>
              </a>
            </div>
          </div>
        </div>

        <div className="why-grid rev">
          {implementationPhases.map((phase) => (
            <div key={phase.title} className={`why-card${phase.ai ? " ai-card" : ""}`}>
              <div className="why-icon">{phase.icon}</div>
              <div className="why-num">{phase.tag}</div>
              <div className="why-title">{phase.title}</div>
              <p className="why-body">{phase.body}</p>
              <span className="why-stat">Odoo implementation</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-services" id="roadmap">
        <div className="ai-mesh" aria-hidden="true" />
        <div className="ai-serv-inner">
          <div className="ai-serv-hdr rev">
            <div>
              <div className="eyebrow ai" style={{ color: "var(--ai)" }}>
                Odoo setup
              </div>
              <h2 className="sec-h light">
                Eleven-stage <span className="ai">roadmap</span>
              </h2>
            </div>
            <div className="ai-serv-hdr-r" style={{ alignItems: "flex-start", textAlign: "left" }}>
              <p className="sec-p light" style={{ textAlign: "left" }}>
                A clear sequence from business goals through hosting, data, testing, training, go-live, and long-term
                support—so stakeholders see the full picture before work begins.
              </p>
            </div>
          </div>

          <div className="ai-use-wrap rev">
            <div className="ai-use-header">
              <div className="ai-use-label">Implementation lifecycle</div>
              <div className="ai-use-count">01 — 11</div>
            </div>
            <div className="ai-use-grid">
              {roadmapSteps.map((step) => (
                <div key={step.n} className="ai-use-card">
                  <span className="auc-num">{step.n}</span>
                  <div className="auc-icon-box">{step.icon}</div>
                  <div className="auc-title">{step.title}</div>
                  <p className="auc-body">{step.body}</p>
                  <span className="auc-module">Odoo setup</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="who-for" id="gold-partner">
        <div className="who-for-inner rev">
          <div className="who-for-left">
            <div className="eyebrow">Why a gold partner</div>
            <h2 className="who-for-h">
              Odoo Gold Partner: <span>what you gain</span>
            </h2>
            <p className="who-for-sub">
              If you are going to implement Odoo, it pays to work with trained, experienced specialists. An Odoo Gold
              Partner brings deep knowledge of implementation and standard apps—and is equipped to resolve technical and
              functional issues across your stack.
            </p>
            <p className="who-for-sub">
              Up-front pricing can look higher than generalist shops, but decisions should not stop at day-one cost.
              Over the life of the system, best-practice configuration, fewer rewrites, and faster issue resolution
              typically save far more than the gap in proposal totals.
            </p>
            <a className="btn-r" href="#contact">
              <span>Engage Wan Buffer</span>
            </a>
          </div>
          <div className="who-for-grid">
            <div className="who-card">
              <div className="who-card-icon">🧠</div>
              <div className="who-card-title">Certified depth</div>
              <p className="who-card-body">Functional and technical consultants who work in Odoo every day—not occasional freelancers.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">🔧</div>
              <div className="who-card-title">Fewer blind spots</div>
              <p className="who-card-body">Standard processes for upgrades, security, and performance so surprises are reduced before go-live.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">📈</div>
              <div className="who-card-title">Economical long term</div>
              <p className="who-card-body">Recommendations prioritise stable operations and clean upgrades over quick hacks.</p>
            </div>
            <div className="who-card">
              <div className="who-card-icon">🤝</div>
              <div className="who-card-title">Direct escalation paths</div>
              <p className="who-card-body">When issues are rare but critical, partner-level backing matters for your business continuity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus" id="why-us" style={{ borderBottom: "none" }}>
        <div className="why-hdr rev">
          <div>
            <div className="eyebrow">Why Wan Buffer</div>
            <h2 className="sec-h">
              What you get
              <br />
              <span className="acc">on the ground</span>
            </h2>
          </div>
          <div className="why-hdr-r">
            <p className="sec-p">
              We help you trace technical issues to root cause, ship maintainable code, and keep UX in mind so adoption
              actually happens after go-live.
            </p>
          </div>
        </div>
        <div className="why-grid rev">
          {whyBuffer.map((item) => (
            <div key={item.title} className={`why-card${item.ai ? " ai-card" : ""}`}>
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <p className="why-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="platforms" id="capabilities" style={{ borderTop: "1px solid var(--silver)" }}>
        <div className="plat-hdr rev">
          <div>
            <div className="eyebrow">Implementation of Odoo ERP</div>
            <h2 className="sec-h">
              Success depends on <span className="acc">your partner</span>
            </h2>
          </div>
          <div>
            <p className="sec-p" style={{ margin: 0 }}>
              The key to a successful business is implementing ERP correctly. Outcomes depend heavily on the team you
              choose. We bring Odoo implementation, integration, support and maintenance, customisation, and migration
              under one roof. We focus on high-quality code, a strong presence on Odoo Apps, and client satisfaction
              across the full lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="svc-support" id="support">
        <div className="rev" style={{ maxWidth: 720, marginBottom: 36 }}>
          <div className="eyebrow lt">Odoo support</div>
          <h2 className="sec-h light">
            One team for <span className="ai">questions and fixes</span>
          </h2>
          <p className="sec-p light" style={{ marginTop: 14 }}>
            Odoo support is your central contact whenever a business or technical question comes up. Our customer teams
            are available around the clock—reach out through the channels below or use the discovery form for structured
            onboarding.
          </p>
        </div>
        <div className="svc-support-grid rev">
          <div className="svc-support-card">
            <div className="svc-support-k">Email &amp; chat</div>
            <div className="svc-support-v">Written support</div>
            <p className="svc-support-p">Best for detailed questions, attachments, and ticket history.</p>
            <a className="link-r" href="#contact" style={{ marginTop: 12, color: "var(--ai)" }}>
              Open contact form →
            </a>
          </div>
          <div className="svc-support-card">
            <div className="svc-support-k">Phone</div>
            <a className="svc-support-v" href="tel:+919904122699" style={{ display: "inline-block" }}>
              +91 99041 22699
            </a>
            <p className="svc-support-p">For urgent production issues and time-sensitive decisions.</p>
          </div>
          <div className="svc-support-card">
            <div className="svc-support-k">Careers</div>
            <a className="svc-support-v" href="tel:+918511593381" style={{ display: "inline-block" }}>
              +91 85115 93381
            </a>
            <p className="svc-support-p">Hiring and career enquiries—please mention the role you are interested in.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
