"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export function HomeContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "discovery-call", page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(typeof json.error === "string" ? json.error : "Request failed");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We couldn't send your request. Please try again.");
    }
  }

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
          Talk to an AI + ERP specialist, not a sales rep, within 24 hours. We'll map your biggest automation
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
          <form className="form-inner" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <input className="fi" type="text" name="firstName" placeholder="First Name *" required maxLength={60} />
              <input className="fi" type="text" name="lastName" placeholder="Last Name *" required maxLength={60} />
            </div>
            <div className="form-row">
              <input className="fi" type="email" name="email" placeholder="Business Email *" required maxLength={254} />
              <input className="fi" type="tel" name="mobile" inputMode="tel" autoComplete="tel" placeholder="Mobile Number *" required maxLength={25} />
            </div>
            <input className="fi" type="text" name="company" placeholder="Company Name *" required maxLength={120} />
            <input className="fi-hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="form-row">
              <select className="fi" name="service" defaultValue="">
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
              <select className="fi" name="engagement" defaultValue="">
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
            <textarea className="fi" name="message" rows={3} maxLength={2000} placeholder="Describe your challenge or automation goal..."></textarea>
            <button className="f-btn" type="submit" disabled={status === "sending"}>
              <span>{status === "sending" ? "Sending..." : "Request Discovery Call →"}</span>
            </button>
            {status === "sent" && (
              <p className="form-msg ok" role="status">
                Thanks! We&apos;ve received your request and will get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="form-msg err" role="alert">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

