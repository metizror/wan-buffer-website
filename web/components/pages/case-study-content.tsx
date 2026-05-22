import Link from "next/link";

import { ArrowRightIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import { CASE_STUDY_COUNT } from "@/lib/case-study-data";

import { CaseStudyListing } from "./case-study-listing";

export function CaseStudyContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-cs-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          works
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Our works</div>
          </div>
          <h1 id="oi-cs-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Software, Odoo &amp;</span>
            <span className="ln">
              <span className="ai">ERP Case Studies</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Explore real-world Odoo development, ERP implementation, web and mobile solutions, and custom software
            projects delivered by Wan Buffer across industries and regions.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#case-studies">
              <span>Browse projects</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <Link className="oi-hero-lux-secondary" href="/contact-us">
              Start a project
            </Link>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We deliver</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Odoo ERP</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">eCommerce</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Automation</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Integration</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-host-intro-band" aria-label="About our case studies">
        <div className="oi-host-intro-band-inner rev">
          <p>
            Since 2018, Wan Buffer has turned innovative ideas into effective software solutions. These case studies
            highlight measurable outcomes, delivery quality, and user-focused execution across manufacturing, retail,
            logistics, and more.
          </p>
          <a className="oi-host-intro-cta" href="#case-studies">
            View all case studies
          </a>
        </div>
      </section>

      <section className="oi-cs-list-section section alt" id="case-studies" aria-label="Case study portfolio">
        <div className="oi-cs-list-inner">
          <div className="oi-cs-grid-head rev">
            <div className="eyebrow">Portfolio</div>
            <h2 className="sec-h">
              Our <span className="ai">works</span>
            </h2>
            <p className="oi-cs-grid-sub">
              Filter by industry, region, or technology to find projects relevant to your business.
            </p>
          </div>
          <CaseStudyListing />
        </div>
      </section>

      <section className="oi-supp" id="contact">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Get in touch</div>
            <h2>
              Build something <span>similar?</span>
            </h2>
            <p>
              Discuss your Odoo, ERP, or custom software project with our team — {CASE_STUDY_COUNT} published case
              studies and counting.
            </p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Enquiries</div>
              <Link className="oi-supp-title-v2" href="/contact-us">
                Contact us
              </Link>
              <p className="oi-supp-body-v2">Tell us about your industry, stack, and goals.</p>
              <Link className="oi-supp-cta-v2" href="/contact-us">
                Open form <ArrowRightIcon />
              </Link>
            </div>
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <PhoneCallIcon />
              </div>
              <div className="oi-supp-label">Phone</div>
              <a className="oi-supp-title-v2" href="tel:+919825555555">
                +91 98255 55555
              </a>
              <p className="oi-supp-body-v2">Speak with our delivery team directly.</p>
              <a className="oi-supp-cta-v2" href="tel:+919825555555">
                Call now <ArrowRightIcon />
              </a>
            </div>
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <ArrowRightIcon />
              </div>
              <div className="oi-supp-label">Odoo services</div>
              <Link className="oi-supp-title-v2" href="/odoo/implementation">
                Odoo implementation
              </Link>
              <p className="oi-supp-body-v2">See how we deliver ERP projects end to end.</p>
              <Link className="oi-supp-cta-v2" href="/odoo/implementation">
                Learn more <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
