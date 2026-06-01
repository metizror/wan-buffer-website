import { ArrowRightIcon } from "@/components/services/odoo-service-icons";

export function GdprContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux legal-hero-center" aria-labelledby="gdpr-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          gdpr
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Legal</div>
          </div>
          <h1 id="gdpr-hero-title" className="oi-hero-lux-h rev">
            GDPR <span className="ai">Compliance</span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Learn about how we comply with the General Data Protection Regulation (GDPR) to protect your personal data.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Contact us</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="pp-body" aria-label="GDPR compliance content">
        <div className="pp-body-inner">

          <div className="pp-section rev">
            <p>
              Your personal data is treated very seriously at wanbuffer.com. All our interactions with visitors to our
              website, as well as potential and current clients, have been amended considering the EU General Data
              Protection Regulation (GDPR), which took effect on May 25, 2018.
            </p>
            <p>
              Wanbuffer.com serves as both a controller and processor of personal data and has taken all necessary steps
              to ensure full compliance with GDPR requirements.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">What Is the Purpose of the GDPR Privacy Policy?</h2>
            <p>
              A new data protection law is called GDPR. It is applied to all nations doing business with EU members as
              well. The GDPR regulation intends to give people more control over the data that is gathered, stored, and
              utilized about them.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">The GDPR Regulation Seeks To</h2>
            <ul className="pp-list">
              <li>Bring all EU directives and laws relating to personal data into compliance</li>
              <li>Performance cookies to keep track of the URLs that led you to the Wanbuffer Websites and the pages you visited there</li>
              <li>Make the handling of personal data transparent and equitable</li>
              <li>Increase the data controllers&apos; accountability for collected personal information</li>
              <li>Improved monitoring of Personal Data Protection Act compliance</li>
            </ul>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">How Wanbuffer Complies with GDPR</h2>
            <p>
              Wanbuffer has taken the following steps to ensure compliance with the General Data Protection Regulation:
            </p>
            <ul className="pp-list">
              <li>Reviewed each operation and process that requires personal data administration</li>
              <li>Revised our privacy policy to comply with GDPR regulations</li>
              <li>Established guidelines for data management across all divisions of the company</li>
              <li>Updated email templates and cookie policy for greater transparency</li>
              <li>Enhanced network security and monitored all devices connected to the network</li>
              <li>Ensured the use of licensed software across the company to prevent data leaking</li>
            </ul>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Our Data Protection Obligations</h2>
            <p>
              Wanbuffer&apos;s personal data protection obligations include the following measures:
            </p>
            <ul className="pp-list">
              <li>Access and share only authorised collected data with proper consent</li>
              <li>Implement appropriate data protection policies across the organisation</li>
              <li>Set secure password policies and monitor hardware devices regularly</li>
              <li>Use encryption protocols and track all software updates</li>
              <li>Implement safe access permissions for authorised personnel with confidentiality agreements</li>
              <li>Promptly notify relevant parties of any data breaches</li>
            </ul>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Contact Us</h2>
            <p>
              If you have any concerns regarding how your personal data is handled or would like to exercise your data
              protection rights, please contact us at{" "}
              <a href="mailto:info@wanbuffer.com" className="pp-link">info@wanbuffer.com</a>.
            </p>
            <p>
              For more details on the personal information we collect and how it is used, please refer to
              our <a href="/privacy-policy" className="pp-link">Privacy Policy</a> and{" "}
              <a href="/cookie-policy" className="pp-link">Cookie Policy</a>.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
