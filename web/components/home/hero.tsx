import type { ReactNode } from "react";

interface HomeHeroProps {
  children?: ReactNode;
}

export function HomeHero(_props: HomeHeroProps) {
  return (
    <>
      {/* ══ ① HERO ══ */}
      <section className="hero">
        <div className="hero-l">
          <canvas id="heroCanvas" />
          <div className="hero-circuit" aria-hidden="true" />
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
          <div className="hero-l-c">
            <div className="hero-dualb">
              <span className="hb hb-erp">ERP Solutions</span>
              <div className="hb-sep" />
              <span className="hb hb-ai">⚡ AI-Enabled</span>
            </div>
            <h1 className="hero-h1">
              <span className="w w1">ERP.</span>
              <br />
              <span className="w w2">Intelligent.</span>
              <br />
              <span className="w w3">At</span> <span className="w w4">Scale.</span>
            </h1>
            <p className="hero-sub">
              The specialist{" "}
              <strong style={{ color: "rgba(255,255,255,.85)", fontWeight: 600 }}>
                Odoo AI implementation partner
              </strong>{" "}
              for mid-market enterprises — embedding AI agents, predictive analytics, and ERP automation services
              directly into Odoo 17 so your operations run themselves.
            </p>
            <div className="hero-caps">
              <span className="h-cap erp-c">Odoo ERP</span>
              <span className="h-cap ai-c">AI Agents</span>
              <span className="h-cap erp-c">ERP Implementation</span>
              <span className="h-cap ai-c">Workflow Automation</span>
              <span className="h-cap ai-c">Predictive Analytics</span>
              <span className="h-cap erp-c">Mobile &amp; Web Apps</span>
            </div>
            <div className="hero-actions">
              <a className="btn-ai" href="/#ai-services">
                <span>Explore AI Services ⚡</span>
              </a>
              <a className="btn-r" href="/#contact">
                <span>Book a Call</span>
              </a>
              <a className="btn-o" href="/#models">
                Engagement Models
              </a>
            </div>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-r-c">
            <div className="hero-badge">
              <div className="odoo-o">O</div>
              <div className="odoo-t">
                Odoo Partner<span>Globally Accredited · Since 2018</span>
              </div>
            </div>
            <div className="ai-indicator">
              <div className="ai-pulse" />
              <span className="ai-ind-t">AI Capabilities Active — Agents · Automation · Analytics</span>
            </div>
            <div className="stats-grid">
              <div className="s-cell">
                <div className="s-num">
                  <span id="c1">0</span>
                  <sup>+</sup>
                </div>
                <div className="s-lbl">Years of Execution</div>
              </div>
              <div className="s-cell">
                <div className="s-num">
                  <span id="c2">0</span>
                  <sup>+</sup>
                </div>
                <div className="s-lbl">Projects Delivered</div>
              </div>
              <div className="s-cell">
                <div className="s-num">
                  <span id="c3">0</span>
                  <sup>%</sup>
                </div>
                <div className="s-lbl">Client Retention</div>
              </div>
              <div className="s-cell">
                <div className="s-num">
                  <span id="c4">0</span>
                  <sup>+</sup>
                </div>
                <div className="s-lbl">Certified Engineers</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

