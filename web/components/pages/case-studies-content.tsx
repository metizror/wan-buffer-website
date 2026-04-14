"use client";

import Link from "next/link";

const caseStudies = [
  {
    tag: "Case Study · Manufacturing · Odoo 17 + AI Automation",
    title: "Fabric mill cuts lead time 40% with Odoo MRP + AI",
    desc: "A Gujarat textile manufacturer deployed our AI Agent + Odoo MRP solution — autonomous procurement agents, predictive quality checks, and real-time shop floor intelligence — going live in 14 weeks.",
    metrics: [
      { v: "40%", l: "Lead time reduction" },
      { v: "80%", l: "Less manual data entry" },
      { v: "2.1×", l: "Throughput improvement" },
      { v: "14W", l: "Weeks to go-live" },
    ],
    details: [
      { k: "Industry", v: "Textile Manufacturing" },
      { k: "Odoo Modules", v: "MRP · Inventory · Purchase · Accounting · Quality" },
      { k: "AI Services", v: "AI Agents · Predictive Quality · Auto-PO" },
      { k: "Engagement Model", v: "AI Agent + Human Team" },
    ],
  },
] as const;

export function CaseStudiesContent() {
  return (
    <main className="svc-page">
      <section className="ai-strip" style={{ borderTop: "none" }}>
        <div className="ai-strip-inner rev">
          <div className="ai-strip-left">
            <div className="ai-strip-label">Case studies</div>
            <h1 className="ai-strip-h">
              Case studies of <span className="ai">Wan Buffer</span>
            </h1>
            <p
              className="ai-strip-h"
              style={{
                fontSize: "clamp(14px,1.5vw,16px)",
                fontWeight: 400,
                marginTop: 18,
                lineHeight: 1.75,
                color: "rgba(255,255,255,.48)",
              }}
            >
              Since 2018, we&apos;ve turned innovative ideas into effective software solutions for web, mobile, and SaaS
              platforms. These stories highlight delivery quality, measurable outcomes, and user-focused execution.
            </p>
            <div style={{ marginTop: 26, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a
                className="btn-ai"
                href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
                target="_blank"
                rel="noreferrer"
              >
                <span>Let&apos;s Discuss your Project</span>
              </a>
              <Link className="btn-o" href="/contact-us">
                Contact us
              </Link>
            </div>
          </div>

          <div className="ai-strip-right" style={{ gridTemplateColumns: "1fr" }}>
            <div className="ai-pillar" data-n="2018">
              <div className="ai-pillar-icon">🏁</div>
              <div className="ai-pillar-t">Since 2018</div>
              <div className="ai-pillar-s">Long-term partnerships across ERP, automation, mobile, web, and SaaS.</div>
            </div>
            <div className="ai-pillar" data-n="ROI">
              <div className="ai-pillar-icon">📈</div>
              <div className="ai-pillar-t">Measured outcomes</div>
              <div className="ai-pillar-s">We track implementation KPIs so you can see impact, not just output.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <div className="cs-hdr rev">
          <div>
            <div className="eyebrow lt">All case studies</div>
            <h2 className="sec-h light">
              Success stories with <span className="ai">details</span>
            </h2>
          </div>
          <Link className="link-r" href="/contact-us" style={{ color: "var(--ai)" }}>
            Start a project →
          </Link>
        </div>

        <div className="cs-grid">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="cs-card rev">
              <div className="cs-l">
                <div>
                  <div className="cs-tag">{cs.tag}</div>
                  <h3 className="cs-title">{cs.title}</h3>
                  <p className="cs-desc">{cs.desc}</p>
                </div>
                <div>
                  <div className="cs-metrics">
                    {cs.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="cs-mv">
                          {m.v.includes("%") ? (
                            <>
                              {m.v.replace("%", "")}
                              <span>%</span>
                            </>
                          ) : (
                            m.v
                          )}
                        </div>
                        <div className="cs-ml">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cs-r">
                {cs.details.map((d) => (
                  <div key={d.k} className="cs-d">
                    <div className="cs-dl">{d.k}</div>
                    <div className="cs-dv">{d.v}</div>
                  </div>
                ))}
                <div style={{ marginTop: 14 }}>
                  <a className="btn-ai" href="/contact-us" style={{ width: "100%", justifyContent: "center" }}>
                    <span>Build something similar →</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

