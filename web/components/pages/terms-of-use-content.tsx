import { ArrowRightIcon } from "@/components/services/odoo-service-icons";

export function TermsOfUseContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux legal-hero-center" aria-labelledby="tou-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          terms
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Legal</div>
          </div>
          <h1 id="tou-hero-title" className="oi-hero-lux-h rev">
            Terms of <span className="ai">Use</span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Please read these terms carefully before using our website. By accessing wanbuffer.com, you agree to be bound
            by these terms and conditions.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Contact us</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">Last updated</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">22 November 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pp-body" aria-label="Terms of use content">
        <div className="pp-body-inner">

          <div className="pp-section rev">
            <h2 className="pp-h2">Terms</h2>
            <p>
              By using the website at wanbuffer you accept these terms of service, all applicable laws and regulations,
              and the responsibility for adhering to any local laws that may be in force there. You are not permitted to
              use or access this website if you disagree with any of these terms. This website&apos;s content is shielded
              by relevant copyright and trademark laws.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Use License</h2>
            <p>
              You are given permission to temporarily download one copy of the content (data or software) from the
              wanbuffer.com website for personal, non-commercial transitory viewing only. This is a licence grant, not a
              transfer of title, and you are not permitted to:
            </p>
            <ul className="pp-list">
              <li>Change or replicate the content</li>
              <li>Use the content for any commercial purpose or for any non-commercial public display</li>
              <li>Try to decompile or reverse-engineer any software on the wanbuffer.com website</li>
              <li>Remove any copyright or other proprietary notices from the content</li>
              <li>Transfer the materials to another individual or mirror the materials on any other server</li>
            </ul>
            <p>
              If you do not abide by these terms and conditions, your license to use the Website will automatically
              expire. Wan Buffer reserves the right to terminate this licence at any time. Upon termination of your
              licence or your viewing of these materials, you must delete any downloaded materials in your possession,
              whether in electronic or printed form.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Disclaimer</h2>
            <p>
              The information on the website of wanbuffer.com is given &ldquo;as is.&rdquo; Wan Buffer makes no
              warranties, either express or implied, and hereby disclaims and negates all other warranties, including
              without limitation implied warranties or conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other rights.
            </p>
            <p>
              Furthermore, wanbuffer.com makes no representations or guarantees regarding the reliability of using the
              content on its website or otherwise in connection with such materials or any websites connected to this
              website.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Limitations</h2>
            <p>
              Wan Buffer or its suppliers shall not be held liable for any damages (including, without limitation,
              damages for data loss or profit, or as a result of business interruption) resulting from the use or
              inability to use the materials on wanbuffer.com&apos;s website, even if wanbuffer.com or an authorised
              representative of wanbuffer.com has been notified orally or in writing of the possibility of such damages.
              Some jurisdictions do not permit restrictions on implied warranties or limitations of liability for
              incidental or consequential damages, so these limitations may not apply to you.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">The Precision of the Materials</h2>
            <p>
              Technical, grammatical, or photographic errors could be included in the content on the wanbuffer website.
              Wan Buffer disclaims all responsibility for the accuracy, completeness, and currentness of any material on
              its website. Wan Buffer reserves the right to modify the content on its website at any time without prior
              notice. However, Wan Buffer makes no commitment to update the materials.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Links</h2>
            <p>
              Wan Buffer has not examined all of the websites that are connected to its own and is not liable for their
              contents. The inclusion of any link does not imply that Wan Buffer endorses the website. The use of any
              such linked website is at the user&apos;s own risk.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Modifications</h2>
            <p>
              Wan Buffer may change these terms of service for its website at any time without prior notice. By using
              this website, you agree to be bound by the current version of these terms of service.
            </p>
          </div>

          <div className="pp-section rev">
            <h2 className="pp-h2">Rule of Law</h2>
            <p>
              These terms and conditions shall be governed by and construed in accordance with the laws of India, and
              you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
