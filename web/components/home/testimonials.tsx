"use client";

export function HomeTestimonials() {
  return (
    <section className="testimonials" id="testimonials">
      {/* Header */}
      <div className="test-hdr rev">
        <div>
          <div className="eyebrow lt">Client Testimonials &amp; Reviews</div>
          <h2 className="sec-h light">
            What Our <span className="ai">Clients Say</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--B)",
              fontSize: "clamp(13px,1.4vw,15px)",
              fontWeight: 300,
              color: "rgba(255,255,255,.45)",
              marginTop: 10,
              maxWidth: 520,
            }}
          >
            Real results, real businesses. Our client reviews reflect the impact of ERP implementation and AI automation
            done right.
          </p>
        </div>
      </div>

      {/* Platform trust bar */}
      <div className="test-trust-bar rev">
        <div className="ttb-badge">
          <span className="ttb-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="ttb-score">5.0</span>
          <span className="ttb-label">Clutch</span>
        </div>
        <div className="ttb-badge">
          <span className="ttb-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="ttb-score">4.9</span>
          <span className="ttb-label">GoodFirms</span>
        </div>
        <div className="ttb-badge">
          <span className="ttb-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
          <span className="ttb-score">4.9</span>
          <span className="ttb-label">Google</span>
        </div>
        <div className="ttb-sep"></div>
        <div className="ttb-stat">
          <span className="ttb-stat-num">254+</span>
          <span className="ttb-stat-label">Projects Delivered</span>
        </div>
        <div className="ttb-stat">
          <span className="ttb-stat-num">84%</span>
          <span className="ttb-stat-label">Client Retention</span>
        </div>
        <div className="ttb-stat">
          <span className="ttb-stat-num">20+</span>
          <span className="ttb-stat-label">Nations Served</span>
        </div>
        <div className="ttb-stat">
          <span className="ttb-stat-num">7+</span>
          <span className="ttb-stat-label">Years Experience</span>
        </div>
      </div>

      {/* Featured hero testimonial */}
      <div className="test-hero rev" id="testHero">
        <div className="test-hero-q">
          <p className="test-hero-text" id="heroText">
            Wan Buffer didn&rsquo;t just implement Odoo &mdash; they embedded{" "}
            <strong>AI agents into our procurement workflow</strong> that now raise purchase orders automatically. Before
            go-live they mapped our ROI with real numbers, then delivered on every metric. That level of accountability
            is <strong>extremely rare in technology</strong>. We cut manual data entry by 80% in our first quarter and
            haven&rsquo;t looked back.
          </p>
          <div className="test-hero-author">
            <div className="test-hero-avatar" id="heroAv" style={{ background: "linear-gradient(135deg,#D81C55,#A8143F)" }}>
              RM
            </div>
            <div className="test-hero-info">
              <div className="test-hero-name" id="heroName">
                Rajesh Mehta
              </div>
              <div className="test-hero-role" id="heroRole">
                Chief Operating Officer &middot; Paramount Textiles, Ahmedabad India
              </div>
            </div>
            <span className="test-hero-tag" id="heroTag">
              AI Agent + Human Team
            </span>
          </div>
        </div>

        <div className="test-hero-side">
          <div
            className="test-mini active"
            data-name="Fatima Al-Rashidi"
            data-role="Operations Director &middot; Gulf Logistics Co, Kuwait"
            data-av="FA"
            data-bg="linear-gradient(135deg,#00C2FF,#008FCC)"
            data-tag="Dedicated Team"
            data-text="Wan Buffer&rsquo;s predictive replenishment AI on top of Odoo transformed our supply chain. They understood our regional compliance needs in Kuwait &mdash; VAT, Arabic UI, GCC regulations &mdash; without us even asking. &lt;strong&gt;34% less overstock, 60% fewer stockouts&lt;/strong&gt; across 4 warehouses in under 3 months."
            onClick={(e) => (window as any).swapHeroTest?.(e.currentTarget)}
          >
            <div className="test-mini-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="test-mini-text">
              &ldquo;34% less overstock and 60% fewer stockouts across 4 warehouses. They understood our Kuwait compliance
              needs without us asking.&rdquo;
            </p>
            <div className="test-mini-author">
              <div className="test-mini-av" style={{ background: "linear-gradient(135deg,#00C2FF,#008FCC)" }}>
                FA
              </div>
              <div>
                <div className="test-mini-name">Fatima Al-Rashidi</div>
                <div className="test-mini-co">Gulf Logistics Co. &middot; Kuwait</div>
              </div>
            </div>
          </div>

          <div
            className="test-mini"
            data-name="Mohammed Al-Sabah"
            data-role="Chief Executive Officer &middot; Arabian Properties Group, Dubai UAE"
            data-av="MS"
            data-bg="linear-gradient(135deg,#1a237e,#283593)"
            data-tag="Dedicated Team"
            data-text="Wan Buffer built our entire real estate CRM and property management system on Odoo from scratch &mdash; property portal, broker commission tracking, investor reporting, and lease management. The &lt;strong&gt;AI lead scoring module increased broker conversions by 28%&lt;/strong&gt;. Best technology investment we&rsquo;ve made in a decade."
            onClick={(e) => (window as any).swapHeroTest?.(e.currentTarget)}
          >
            <div className="test-mini-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="test-mini-text">
              &ldquo;AI lead scoring module increased broker conversion rate by 28%. Best technology investment we&rsquo;ve
              made in a decade.&rdquo;
            </p>
            <div className="test-mini-author">
              <div className="test-mini-av" style={{ background: "linear-gradient(135deg,#1a237e,#283593)" }}>
                MS
              </div>
              <div>
                <div className="test-mini-name">Mohammed Al-Sabah</div>
                <div className="test-mini-co">Arabian Properties &middot; Dubai, UAE</div>
              </div>
            </div>
          </div>

          <div
            className="test-mini"
            data-name="Pierre Dubois"
            data-role="Chief Technology Officer &middot; MedTech Solutions SAS, Paris France"
            data-av="PD"
            data-bg="linear-gradient(135deg,#6c757d,#495057)"
            data-tag="Retainer Model"
            data-text="We&rsquo;ve been on retainer with Wan Buffer for 2 years. Every quarter they audit our Odoo system, identify AI enhancements, and ship them. The proactive approach means we&rsquo;re always ahead of bottlenecks. <strong>They know our system better than we do</strong> &mdash; it feels less like a vendor, more like an in-house tech team."
            onClick={(e) => (window as any).swapHeroTest?.(e.currentTarget)}
          >
            <div className="test-mini-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="test-mini-text">
              &ldquo;Feels less like a vendor, more like an in-house tech team. On retainer 2 years &mdash; they audit and
              enhance our Odoo every quarter.&rdquo;
            </p>
            <div className="test-mini-author">
              <div className="test-mini-av" style={{ background: "linear-gradient(135deg,#6c757d,#495057)" }}>
                PD
              </div>
              <div>
                <div className="test-mini-name">Pierre Dubois</div>
                <div className="test-mini-co">MedTech Solutions SAS &middot; Paris</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

