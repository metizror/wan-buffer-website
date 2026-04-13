export function HomeContact() {
  return (
    <section className="cta-wrap" id="contact">
      <div className="cta-l rev">
        <div className="eyebrow">Let's Build Together</div>
        <h2 className="sec-h">
          Ready to Make Your
          <br />
          ERP <span className="acc">Intelligent?</span>
        </h2>
        <p className="sec-p">
          Talk to an AI + ERP specialist — not a sales rep — within 24 hours. We'll map your biggest automation
          opportunities in the first call.
        </p>
        <div className="cta-promises">
          <div className="cta-p">Free AI + ERP readiness assessment (60 min)</div>
          <div className="cta-p">Automation opportunity map in 5 business days</div>
          <div className="cta-p">Transparent ROI estimate with real benchmarks</div>
          <div className="cta-p">NDA signed before any data is shared</div>
        </div>
      </div>
      <div className="cta-r rev">
        <div className="cta-form-title">Book a Discovery Call</div>
        <div className="form-wrap">
          <div className="form-inner">
            <div className="form-row">
              <input className="fi" type="text" placeholder="First Name *" />
              <input className="fi" type="text" placeholder="Last Name *" />
            </div>
            <input className="fi" type="email" placeholder="Business Email *" />
            <input className="fi" type="text" placeholder="Company Name *" />
            <div className="form-row">
              <select className="fi" defaultValue="">
                <option value="" disabled>
                  I need...
                </option>
                <option>AI Agent Implementation</option>
                <option>ERP + AI Integration</option>
                <option>Odoo Implementation</option>
                <option>Odoo Customisation</option>
                <option>Odoo Migration / Upgrade</option>
                <option>Dedicated Dev Team</option>
                <option>Workflow Automation</option>
                <option>Mobile Application</option>
              </select>
              <select className="fi" defaultValue="">
                <option value="" disabled>
                  Engagement Model
                </option>
                <option>Project-Based</option>
                <option>AI Agent + Human Team</option>
                <option>Dedicated Team</option>
                <option>Retainer Model</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <textarea className="fi" rows={3} placeholder="Describe your challenge or automation goal..."></textarea>
            <button className="f-btn" type="button">
              <span>Request Discovery Call →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

