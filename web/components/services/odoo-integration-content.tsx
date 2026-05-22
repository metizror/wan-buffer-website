/* Odoo ERP integration — legacy PHP copy; layout matches /odoo/implementation (oi-* system). */

import Image from "next/image";

import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  ClockIcon,
  HeartIcon,
  MailIcon,
  PhoneCallIcon,
  ShieldIcon,
} from "./odoo-service-icons";

const WHY_BOXES = [
  "Enables the use of everyday applications.",
  "Complete control over your company.",
  "Business operations that are simple.",
  "A larger customer base and greater reachability.",
  "Several reputable tools assist you in running your business.",
] as const;

export function OdooIntegrationContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-int-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">odoo</div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Odoo ERP services</div>
          </div>
          <h1 id="oi-int-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Odoo</span>
            <span className="ln">
              <span className="ai">Integration</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Are you looking for <strong>Odoo ERP Integration?</strong>
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Contact us</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#intro">
              Overview
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We integrate</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Payment gateways</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">eCommerce</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Social &amp; SMS</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Shipping</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Biometrics &amp; APIs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-meth" id="intro">
        <div className="oi-meth-inner">
          <div className="oi-meth-intro oi-int-meth-intro rev">
            <div className="oi-int-split-media">
              <Image
                src="/odoo/integration/odoo-integration-1.webp"
                alt="Odoo integration"
                width={723}
                height={684}
                className="oi-int-img"
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <div className="oi-meth-intro-l">
                <div className="eyebrow">Odoo integration</div>
                <h2>
                  Do You Require
                  <br />
                  <span>Odoo ERP Integration?</span>
                </h2>
              </div>
              <p className="oi-int-split-lead">
                Integrate your Odoo platform with your everyday applications and tools to take your business to the next level.
              </p>
              <div className="eyebrow oi-int-eyebrow-tight">Services for Odoo integration</div>
              <div className="oi-int-svc-stack">
                <p>Odoo integration allows you to use one-of-a-kind tools to help you run your business.</p>
                <p>Odoo ERP integration, on the other hand, should be handled by professionals.</p>
                <p>We are a trusted expert, providing flawless Odoo solutions &amp; services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-rmap" id="why-integration">
        <div className="oi-rmap-inner">
          <div className="oi-int-why-head rev">
            <div className="eyebrow">Integration</div>
            <h2 className="sec-h">
              Why Is Odoo ERP <span className="acc">Integration Required?</span>
            </h2>
            <p className="sec-p">
              Odoo is a completely open-source business management solution that serves as a single solution for all of your business functions &amp; will improve all aspects of your business.
            </p>
            <p className="sec-p">
              Odoo acts as a one-size-fits-all solution for your business, from product procurement to sales; recruitment to payroll management; manufacturing to repairs; inventory management to logistic operations; invoicing to accounting management.
            </p>
            <p className="sec-p">
              Integrating your Odoo platform with unique Odoo modules or Odoo apps, as well as other third-party apps, is critical.
            </p>
          </div>
          <ul className="oi-int-why-grid" aria-label="Why integration matters">
            {WHY_BOXES.map((text) => (
              <li key={text} className="oi-int-why-cell">
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="oi-bento-sec" aria-labelledby="oi-int-split2-title">
        <div className="oi-bento-inner">
          <div className="oi-meth-intro oi-int-meth-intro rev">
            <div className="oi-int-split-media">
              <Image
                src="/odoo/integration/odoo-integration-2.webp"
                alt="What Odoo integration means"
                width={683}
                height={526}
                className="oi-int-img"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="oi-meth-intro-l" id="oi-int-split2-title">
              <div className="eyebrow">What it means</div>
              <h2>
                What Does Odoo
                <br />
                <span>Integration Imply?</span>
              </h2>
              <p className="oi-int-split-lead">
                Odoo integration will assist you in integrating Odoo into your business operations, allowing you to run your business the way it was intended. Odoo is an open-source ERP, which means you can add custom operations modules to support your business. Odoo allows you to add and remove modules as your business evolves. An organisation will benefit from having a distinct platform that can be changed based on its business needs and preferences.
              </p>
            </div>
          </div>

          <div className="oi-meth-intro oi-int-meth-intro rev">
            <div className="oi-int-split-media">
              <Image
                src="/odoo/integration/odoo-integration-3.webp"
                alt="Solutions for Odoo integration"
                width={683}
                height={526}
                className="oi-int-img"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div className="oi-meth-intro-l">
              <div className="eyebrow">Solutions</div>
              <h2>
                Solutions For
                <br />
                <span>Odoo Integration</span>
              </h2>
              <p className="oi-int-split-lead">
                We believe that combining Odoo with other operational application tools will enable effective management and control of the business. As a result, we provide ultimate integration solutions with a variety of well-known solutions, such as Payment Gateways, Social Media Platforms, eCommerce Platforms, Text message service providers, Docparser, advanced biometric devices, shipping integrators, and Payment Aquirers, to meet the needs of a company&apos;s business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-supp" id="support">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Odoo support</div>
            <h2>
              Odoo <span>Support</span>
            </h2>
            <p>
              Odoo Support is a central point of contact to talk to any time you have a business question. The customer support teams are available 24/7 - we are here to help you whenever and wherever, take a look at our customer service page.
            </p>
          </div>

          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Online now
              </span>
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Email &amp; Chat Support.</div>
              <a className="oi-supp-title-v2" href="#contact">
                Contact form
              </a>
              <p className="oi-supp-body-v2">For written enquiries and follow-ups through the site contact flow.</p>
              <a className="oi-supp-cta-v2" href="#contact">
                Open contact form <ArrowRightIcon />
              </a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Urgent issues
              </span>
              <div className="oi-supp-icon-v2">
                <PhoneCallIcon />
              </div>
              <div className="oi-supp-label">Phone Number</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">
                +91 99041 22699
              </a>
              <p className="oi-supp-body-v2">Production-down incidents and time-sensitive decisions. Answered by a senior consultant.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">
                Call now <ArrowRightIcon />
              </a>
            </div>

            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                We&apos;re hiring
              </span>
              <div className="oi-supp-icon-v2">
                <BriefcaseIcon />
              </div>
              <div className="oi-supp-label">Careers</div>
              <a className="oi-supp-title-v2" href="#contact">
                Careers enquiry
              </a>
              <p className="oi-supp-body-v2">Hiring and career enquiries. You can also reach the team by phone.</p>
              <a className="oi-supp-cta-v2" href="tel:+918511593381">
                +91 85115 93381 <ArrowRightIcon />
              </a>
            </div>
          </div>

          <div className="oi-supp-commit rev">
            <span className="oi-supp-commit-item">
              <CheckIcon /> Senior-led only
            </span>
            <span className="oi-supp-commit-item">
              <ClockIcon /> SLA in writing
            </span>
            <span className="oi-supp-commit-item">
              <ShieldIcon /> NDA-protected
            </span>
            <span className="oi-supp-commit-item">
              <HeartIcon /> 90-day hypercare
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
