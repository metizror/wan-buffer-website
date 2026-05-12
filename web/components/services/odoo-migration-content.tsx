import Link from "next/link";

const migrationAspects = [
  {
    icon: "🧩",
    title: "Migration Of Odoo Apps",
    body: "To be compatible with the new Odoo version, the applications and add-ons that are required for the new version will require coding changes. Odoo's code is written in Python, so any new changes should be made using more advanced code. Furthermore, the user expects the application's front end to function similarly to that of other similar apps, but with more advanced features.",
    tag: "Apps",
    ai: true,
  },
  {
    icon: "📤",
    title: "Data Transfer",
    body: "Existing data transfer is another aspect of migration that requires special attention. Existing data must be compatible with the new platform and applications. The tables should also be modified, mapped, and imported to be compatible with the new version.",
    tag: "Data",
    ai: false,
  },
  {
    icon: "🧪",
    title: "Evaluating Migration",
    body: "Even if all of the changes to the applications and data are made, sophisticated testing under extreme conditions is still required to demonstrate the new platform's durability and reliability. The performance and usability factors should be checked for quality.",
    tag: "QA",
    ai: true,
  },
  {
    icon: "⭐",
    title: "Migration's Importance",
    body: "Users can upgrade to the new version of Odoo, which is better, faster, and more reliable than the previous one, by using the Odoo migration. Odoo is a business management software that is constantly updated with new versions, incorporating advanced operations and adding new features to help businesses run more efficiently. As a result, the user would benefit because the company's productivity would increase. Furthermore, the migration will result in fewer time-consuming Odoo operations, simplified operations terminologies, and integration of the company's advancement in operations.",
    tag: "Why",
    ai: false,
  },
] as const;

export function OdooMigrationContent() {
  return (
    <main className="svc-page">
      <section className="ai-strip" style={{ borderTop: "none" }}>
        <div className="ai-strip-inner rev">
          <div className="ai-strip-left">
            <div className="ai-strip-label">Odoo ERP services</div>
            <h1 className="ai-strip-h">
              Odoo migration <span className="ai">service</span>
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
              Odoo users must update their existing versions to the new ones available because Odoo is management software
              that releases new updates and versions frequently.
            </p>
            <p
              className="ai-strip-h"
              style={{
                fontSize: "clamp(14px,1.5vw,16px)",
                fontWeight: 400,
                marginTop: 14,
                lineHeight: 1.75,
                color: "rgba(255,255,255,.48)",
              }}
            >
              Furthermore, in a way that no other platform has, this migration will integrate the Odoo platform&apos;s new
              features and advancements with the existing company operations.
            </p>
            <p
              className="ai-strip-h"
              style={{
                fontSize: "clamp(14px,1.5vw,16px)",
                fontWeight: 400,
                marginTop: 14,
                lineHeight: 1.75,
                color: "rgba(255,255,255,.48)",
              }}
            >
              While the migration is taking place, two things should be kept in mind:
            </p>
            <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a className="btn-r" href="#contact">
                <span>Discuss your migration</span>
              </a>
              <Link className="btn-o" href="/odoo/implementation">
                Implementation
              </Link>
            </div>
          </div>
          <div className="ai-strip-right" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="ai-pillar" data-n="1">
              <div className="ai-pillar-icon">📊</div>
              <div className="ai-pillar-t">To begin with</div>
              <div className="ai-pillar-s">
                To begin with, the data is available; however, users require access to their existing reports, customer and
                vendor information, payment documents, financial data, and other information.
              </div>
            </div>
            <div className="ai-pillar" data-n="2">
              <div className="ai-pillar-icon">🔌</div>
              <div className="ai-pillar-t">Second</div>
              <div className="ai-pillar-s">
                Second, the company&apos;s application and specific add-ons should be available to users in the new version
                with the same functionality as before while also adding new features.
              </div>
            </div>
            <div className="ai-pillar" data-n="3" style={{ gridColumn: "1 / -1" }}>
              <div className="ai-pillar-icon">⚠️</div>
              <div className="ai-pillar-t">Given the importance</div>
              <div className="ai-pillar-s">
                Given the importance of these features and the need for them in the new version, the Odoo migration should be
                handled with caution and by a knowledgeable individual or team.
              </div>
            </div>
            <div className="ai-pillar" data-n="4" style={{ gridColumn: "1 / -1" }}>
              <div className="ai-pillar-icon">🤝</div>
              <div className="ai-pillar-t">Odoo partners</div>
              <div className="ai-pillar-s">
                It is always preferable for a platform user to seek the assistance of Odoo partners for Odoo-related aspects of
                their business, such as Odoo migration. These partners are well-trained, certified, and resource-rich to assist
                you with the migration process.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyus" id="aspects">
        <div className="why-hdr rev">
          <div>
            <div className="eyebrow">What migration involves</div>
            <h2 className="sec-h">
              Apps, data, testing,
              <br />
              <span className="acc">and business value</span>
            </h2>
          </div>
          <div className="why-hdr-r">
            <div className="why-cta-row">
              <a className="btn-r" href="#contact">
                <span>Plan a safe upgrade</span>
              </a>
            </div>
          </div>
        </div>

        <div className="why-grid rev">
          {migrationAspects.map((item) => (
            <div key={item.title} className={`why-card${item.ai ? " ai-card" : ""}`}>
              <div className="why-icon">{item.icon}</div>
              <div className="why-num">{item.tag}</div>
              <div className="why-title">{item.title}</div>
              <p className="why-body">{item.body}</p>
              <span className="why-stat">Odoo migration</span>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-support" id="support">
        <div className="rev" style={{ maxWidth: 720, marginBottom: 36 }}>
          <div className="eyebrow lt">Odoo support</div>
          <h2 className="sec-h light">
            Your <span className="ai">central contact</span>
          </h2>
          <p className="sec-p light" style={{ marginTop: 14 }}>
            Odoo Support is a central point of contact to talk to any time you have a business question. The customer support
            teams are available 24/7 — we are here to help you whenever and wherever; take a look at our{" "}
            <Link className="link-r" href="/contact-us" style={{ color: "var(--ai)" }}>
              customer service page
            </Link>
            .
          </p>
        </div>
        <div className="svc-support-grid rev">
          <div className="svc-support-card">
            <div className="svc-support-k">Email &amp; chat support</div>
            <a className="svc-support-v" href="mailto:sales@wanbuffer.com" style={{ display: "inline-block" }}>
              sales@wanbuffer.com
            </a>
            <p className="svc-support-p">Written support for detailed questions, attachments, and ticket history.</p>
          </div>
          <div className="svc-support-card">
            <div className="svc-support-k">Phone number</div>
            <a className="svc-support-v" href="tel:+919904122699" style={{ display: "inline-block" }}>
              +91 99041 22699
            </a>
            <p className="svc-support-p">For urgent production issues and time-sensitive decisions.</p>
          </div>
          <div className="svc-support-card">
            <div className="svc-support-k">Career</div>
            <a className="svc-support-v" href="mailto:hr@wanbuffer.in" style={{ display: "inline-block" }}>
              hr@wanbuffer.in
            </a>
            <a className="svc-support-v" href="tel:+918511593381" style={{ display: "inline-block", marginTop: 8 }}>
              +91 85115 93381
            </a>
            <p className="svc-support-p">Hiring and career enquiries — please mention the role you are interested in.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
