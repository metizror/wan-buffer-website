"use client";

export function HomeLeadPopup() {
  return (
    <div className="popup-overlay" id="leadPopup">
      <div className="popup-box">
        <div className="popup-topbar"></div>
        <div className="popup-inner" id="popupMain">
          <div className="popup-left">
            <div>
              <div className="popup-badge">AI-Powered ERP</div>
              <div className="popup-left-title">Free AI + ERP Readiness Assessment</div>
              <p className="popup-left-body">
                Discover exactly where AI can automate your ERP workflows and accelerate operations — delivered in 5
                business days.
              </p>
            </div>
            <div className="popup-perks">
              <div className="popup-perk">60-min session with an AI + ERP specialist</div>
              <div className="popup-perk">Automation opportunity mapping report</div>
              <div className="popup-perk">ROI estimate with real benchmarks</div>
              <div className="popup-perk">NDA signed before any data is shared</div>
            </div>
          </div>
          <div className="popup-right">
            <button className="popup-close" type="button" onClick={() => (window as any).closePopup?.()}>
              ✕
            </button>
            <div className="popup-right-title">Get Your Free Assessment</div>
            <p className="popup-right-sub">30 seconds to fill. Response within 4 hours.</p>
            <div className="popup-form">
              <div className="pfi-row">
                <input className="pfi" type="text" placeholder="Your Name *" id="pName" />
                <input className="pfi" type="text" placeholder="Company *" id="pCompany" />
              </div>
              <input className="pfi" type="email" placeholder="Business Email *" id="pEmail" />
              <select className="pfi" id="pService" defaultValue="">
                <option value="" disabled>
                  Primary interest
                </option>
                <option>AI Agent Implementation</option>
                <option>ERP + AI Integration</option>
                <option>Odoo Implementation</option>
                <option>Workflow Automation</option>
                <option>Dedicated Dev Team</option>
                <option>Not sure — need advice</option>
              </select>
              <button type="button" className="popup-submit" onClick={() => (window as any).submitPopup?.()}>
                <span>Get my free assessment →</span>
              </button>
              <p className="popup-disclaimer">No spam. No sales pressure.</p>
            </div>
          </div>
        </div>
        <div className="popup-success" id="popupSuccess">
          <div className="popup-success-icon">🎉</div>
          <div className="popup-success-title">You're All Set!</div>
          <p className="popup-success-body">We'll reach out within 4 business hours with your assessment schedule.</p>
        </div>
      </div>
    </div>
  );
}

