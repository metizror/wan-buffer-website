export function HomeModels() {
  return (
    <section className="models" id="models">
      <div className="m-hdr rev">
        <div className="eyebrow">How to Work With Us</div>
        <h2 className="sec-h">
          Four Ways to <span className="acc">Engage</span>
        </h2>
        <p className="sec-p">
          Choose the model that fits your challenge — from fixed-scope projects to our breakthrough AI Agent + Human
          Team hybrid model.
        </p>
      </div>

      <div className="m-grid rev">
        <div className="m-card" id="mc0">
          <div className="m-num">Model 01</div>
          <span className="m-icon">🎯</span>
          <div className="m-name">Project-Based Engagement</div>
          <p className="m-sub">Fixed scope, fixed price, defined delivery — ERP or AI projects with clear boundaries.</p>
          <div className="m-div" />
          <ul className="m-feats">
            <li className="m-feat">Defined scope, timeline &amp; milestones</li>
            <li className="m-feat">Fixed-price transparent contract</li>
            <li className="m-feat">Dedicated Project Manager from Day 1</li>
            <li className="m-feat">ERP implementation or AI module delivery</li>
            <li className="m-feat">3-month post-launch support included</li>
          </ul>
          <a className="m-btn" href="/#contact">
            <span>Start a Project</span>
          </a>
        </div>

        <div className="m-card ai-feat" id="mc1">
          <span className="m-badge new">⚡ New Model</span>
          <div className="m-num">Model 02</div>
          <span className="m-icon">🤖</span>
          <div className="m-name">AI Agent + Human Team</div>
          <p className="m-sub">
            Our most innovative model — AI agents handle repetitive execution while our engineers focus on strategy,
            custom logic, and continuous improvement.
          </p>
          <div className="m-div" />
          <ul className="m-feats">
            <li className="m-feat">AI agents execute routine ERP tasks autonomously</li>
            <li className="m-feat">Senior engineers manage exceptions &amp; custom logic</li>
            <li className="m-feat">50–70% lower cost vs. fully human teams</li>
            <li className="m-feat">Continuous learning — agents improve over time</li>
            <li className="m-feat">Full transparency dashboard &amp; audit logs</li>
            <li className="m-feat">Ideal for ongoing ERP operations &amp; automation</li>
          </ul>
          <a className="m-btn" href="/#contact">
            <span>Explore This Model →</span>
          </a>
        </div>

        <div className="m-card feat" id="mc2">
          <span className="m-badge popular">Most Popular</span>
          <div className="m-num">Model 03</div>
          <span className="m-icon">👥</span>
          <div className="m-name">Dedicated Team</div>
          <p className="m-sub">
            Your offshore ERP + AI engineering squad — fully dedicated, deeply embedded in your workflows.
          </p>
          <div className="m-div" />
          <ul className="m-feats">
            <li className="m-feat">2–15 engineers, 100% dedicated to you</li>
            <li className="m-feat">Mix of ERP, AI, and mobile engineers</li>
            <li className="m-feat">Direct Slack / Jira / daily standups</li>
            <li className="m-feat">Scale up or down month-to-month</li>
            <li className="m-feat">Senior tech lead + AI specialist included</li>
          </ul>
          <a className="m-btn" href="/#contact">
            <span>Build My Team</span>
          </a>
        </div>

        <div className="m-card" id="mc3">
          <div className="m-num">Model 04</div>
          <span className="m-icon">🔄</span>
          <div className="m-name">Retainer Model</div>
          <p className="m-sub">
            Ongoing ERP support, AI optimisation, and managed platform evolution — a strategic long-term partnership.
          </p>
          <div className="m-div" />
          <ul className="m-feats">
            <li className="m-feat">Monthly sprint-based development</li>
            <li className="m-feat">Priority SLA — bug fixes within 24h</li>
            <li className="m-feat">Quarterly AI + ERP system health audits</li>
            <li className="m-feat">Proactive Odoo upgrade planning</li>
            <li className="m-feat">Flexible hours pool each month</li>
          </ul>
          <a className="m-btn" href="/#contact">
            <span>Get a Retainer</span>
          </a>
        </div>
      </div>
    </section>
  );
}

