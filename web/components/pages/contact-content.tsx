import Link from "next/link";
import { HomeLogoBar } from "@/components/home/logo-bar";

function decodeCfEmail(hash: string): string | null {
  if (!hash || hash.length < 4 || hash.length % 2 !== 0) return null;
  const key = Number.parseInt(hash.slice(0, 2), 16);
  if (Number.isNaN(key)) return null;

  const chars: number[] = [];
  for (let i = 2; i < hash.length; i += 2) {
    const b = Number.parseInt(hash.slice(i, i + 2), 16);
    if (Number.isNaN(b)) return null;
    chars.push(b ^ key);
  }

  return String.fromCharCode(...chars);
}

const careersEmail = decodeCfEmail("056d774572646b6770636360772b6c6b");
const quickEmail = decodeCfEmail("fe8d9f929b8dbe899f909c8b98989b8cd09d9193");

const quickCards = [
  {
    k: "Schedule a call",
    v: "Free consultation",
    body: "With our experts for free consultation.",
    href: "https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians",
    hrefLabel: "Let's discuss your project →",
  },
  {
    k: "Contact us",
    v: "+91 99041 22699",
    body: "Call us to connect with the right specialist quickly.",
    href: "tel:+919904122699",
    hrefLabel: "Call now →",
  },
  {
    k: "Privacy policy",
    v: "Data usage & consent",
    body: "We will add your information to our CRM for contacting you regarding your request. For more details, please consult our privacy policy.",
    href: "https://wanbuffer.com/privacy-policy.php",
    hrefLabel: "Read privacy policy →",
  },
] as const;

const hiringPlans = [
  {
    icon: "⏱️",
    title: "Flexible hours",
    body: "We understand that different projects have different needs. We offer flexible hourly hiring options. You only pay for the time and resources used, with weekly billing and configurable duration. You will be granted all source code authorisation.",
    tag: "Hourly",
    ai: false,
  },
  {
    icon: "🧑‍💻",
    title: "Dedicated resource",
    body: "Hire professionals monthly. You are guaranteed 160 hours based on your availability and time zone, with immediate access to resources. This plan can be fixed-price so you always know what you are paying for.",
    tag: "Monthly",
    ai: true,
  },
  {
    icon: "🤝",
    title: "Hire a team",
    body: "Build your ideal team from skilled developers, designers, testers, and engineers. Communicate via email, Skype, Google Meet, or Zoom and participate in the agile development process.",
    tag: "Squad",
    ai: false,
  },
] as const;

export function ContactContent() {
  return (
    <main className="svc-page">
      {/* HERO — same design system as Case Studies hero */}
      <section className="csh-hero">
        <div className="csh-hero-inner">

          {/* floating tags — left */}
          <div className="csh-tags csh-tags-left">
            <span className="csh-tag">Free Consultation</span>
            <span className="csh-tag">Web & Mobile Projects</span>
            <span className="csh-tag">ERP Implementation</span>
            <span className="csh-tag">AI Automation</span>
          </div>

          {/* centre content */}
          <div className="csh-centre rev">
            <h1 className="csh-h1">
              Get in<br />Touch<br />With Us
            </h1>

            {/* Clutch badge */}
            <div className="csh-clutch">
              <div className="csh-clutch-left">
                <span className="csh-clutch-reviewed">REVIEWED ON</span>
                <span className="csh-clutch-brand">Clutch</span>
              </div>
              <div className="csh-clutch-right">
                <span className="csh-clutch-stars">★★★★★</span>
                <span className="csh-clutch-rating">5.0 RATING</span>
              </div>
            </div>

            <p className="csh-desc">
              Connect with Wan Buffer&apos;s global team to discuss how we can empower your business. From ERP to AI
              automation — we&apos;re ready to turn your ideas into impactful software solutions.
            </p>

            <a
              className="csh-cta-btn"
              href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
              target="_blank"
              rel="noreferrer"
            >
              Book a Meeting
            </a>
          </div>

          {/* floating tags — right */}
          <div className="csh-tags csh-tags-right">
            <span className="csh-tag">Odoo Solutions</span>
            <span className="csh-tag">Implementation India</span>
            <span className="csh-tag">Implementation USA</span>
            <span className="csh-tag">Implementation UK</span>
          </div>
        </div>

        {/* circular badge */}
        <a
          className="csh-circle-badge"
          href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians"
          target="_blank"
          rel="noreferrer"
          aria-label="Let's Discuss your Project"
        >
          <svg viewBox="0 0 120 120" className="csh-circle-text-svg" aria-hidden="true">
            <path id="cu-circle-path" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none"/>
            <text className="csh-circle-text">
              <textPath href="#cu-circle-path" startOffset="0%">Get in Touch • Contact Us •&nbsp;</textPath>
            </text>
          </svg>
          <span className="csh-circle-arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      {/* Legacy: logos strip directly below hero */}
      <HomeLogoBar />

      <section className="svc-support" id="contact-options" style={{ paddingTop: "clamp(44px,6vw,72px)" }}>
        <div className="rev" style={{ maxWidth: 760, marginBottom: 34 }}>
          <div className="eyebrow lt">Let&apos;s get in touch</div>
          <h2 className="sec-h light">
            Choose the <span className="ai">fastest</span> path
          </h2>
          <p className="sec-p light" style={{ marginTop: 14 }}>
            If you have questions or inquiries, use the contact form below and we&apos;ll respond quickly. If you prefer
            a live discussion, schedule a call with an expert.
          </p>
        </div>

        <div className="svc-support-grid rev">
          {quickCards.map((c) => (
            <div key={c.k} className="svc-support-card">
              <div className="svc-support-k">{c.k}</div>
              <div className="svc-support-v">{c.v}</div>
              <p className="svc-support-p">{c.body}</p>
              <a className="link-r" href={c.href} style={{ marginTop: 12, color: "var(--ai)" }}>
                {c.hrefLabel}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="whyus" id="hire">
        <div className="why-hdr rev">
          <div>
            <div className="eyebrow">Hiring plans</div>
            <h2 className="sec-h">
              Hire skilled developers and teams
              <br />
              <span className="acc">for customised solutions</span>
            </h2>
          </div>
          <div className="why-hdr-r">
            <p className="sec-p">
              Choose the most suitable hiring plan and work with experienced developers, designers, testers and
              engineers to create personalised solutions for your business needs.
            </p>
            <div className="why-cta-row">
              <a className="btn-r" href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians" target="_blank" rel="noreferrer">
                <span>Order a consultation</span>
              </a>
            </div>
          </div>
        </div>

        <div className="why-grid rev">
          {hiringPlans.map((p, idx) => (
            <div key={p.title} className={`why-card${p.ai ? " ai-card" : ""}`}>
              <div className="why-icon">{p.icon}</div>
              <div className="why-num">{String(idx + 1).padStart(2, "0")}</div>
              <div className="why-title">{p.title}</div>
              <p className="why-body">{p.body}</p>
              <span className="why-stat">{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ai-strip" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }} id="discuss">
        <div className="ai-strip-inner rev">
          <div className="ai-strip-left">
            <div className="ai-strip-label">Let&apos;s discuss</div>
            <h2 className="ai-strip-h">
              Leave a request — we&apos;ll analyse your situation and help you choose an effective solution to{" "}
              <span className="ai">scale</span>
            </h2>
            <p
              className="ai-strip-h"
              style={{
                fontSize: "clamp(13px,1.35vw,15px)",
                fontWeight: 300,
                marginTop: 16,
                lineHeight: 1.8,
                color: "rgba(255,255,255,.45)",
              }}
            >
              We will add your information to our CRM for contacting you regarding your request. For more details,
              please consult our{" "}
              <a href="https://wanbuffer.com/privacy-policy.php" style={{ color: "var(--ai)", textDecoration: "underline" }}>
                privacy policy
              </a>
              .
            </p>
          </div>
          <div className="ai-strip-right" style={{ gridTemplateColumns: "1fr" }}>
            <div className="ai-pillar" data-n="→">
              <div className="ai-pillar-icon">🗓️</div>
              <div className="ai-pillar-t">Order a consultation</div>
              <div className="ai-pillar-s">
                Use our booking page to schedule a call. If you prefer email, use the quick contact address above.
              </div>
              <div style={{ marginTop: 12 }}>
                <a className="btn-ai" href="https://book-a-demo-wanbuffer-odoo-expert.odoo.com/book/WanBufferians" target="_blank" rel="noreferrer">
                  <span>Order a consultation →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

