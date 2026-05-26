import Link from "next/link";

import { ArrowRightIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import { BLOG_COUNT } from "@/lib/blogs-data";

import { BlogsListing } from "./blogs-listing";

export function BlogsContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="bl-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          blog
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Insights &amp; articles</div>
          </div>
          <h1 id="bl-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Wan Buffer</span>
            <span className="ln">
              <span className="ai">Insights Hub</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            Deep dives into ERP strategy, Odoo engineering, AI automation, and industry-specific digital transformation — written by the engineers who build it.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Talk to our team</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#blog-list">
              Browse articles
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">Topics</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">ERP</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Odoo</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Manufacturing</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Logistics</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">AI</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-host-intro-band" aria-label="About our blog">
        <div className="oi-host-intro-band-inner rev">
          <p>
            Practical insights from our engineering and consulting teams — covering ERP implementation strategy, Odoo customisation, industry-specific automation, and digital transformation playbooks for manufacturing, logistics, oil &amp; gas, and more.
          </p>
          <a className="oi-host-intro-cta" href="#blog-list">
            View all articles
          </a>
        </div>
      </section>

      <section className="bl-list section alt" id="blog-list" aria-label="Blog listings">
        <div className="bl-list-inner">
          <BlogsListing />
        </div>
      </section>

      <section className="oi-supp" id="contact" aria-labelledby="bl-support-title">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Get in touch</div>
            <h2 id="bl-support-title">
              Have a project <span>in mind?</span>
            </h2>
            <p>
              Reach out for ERP consulting, Odoo implementation, or AI automation — our engineering team is ready to help.
            </p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 live">
                <span className="oi-supp-status-v2-dot" />
                Available
              </span>
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Email &amp; enquiries</div>
              <Link className="oi-supp-title-v2" href="/contact-us">
                Contact us
              </Link>
              <p className="oi-supp-body-v2">Book a discovery call or discuss your ERP requirements.</p>
              <Link className="oi-supp-cta-v2" href="/contact-us">
                Open contact form <ArrowRightIcon />
              </Link>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 urgent">
                <span className="oi-supp-status-v2-dot" />
                Direct line
              </span>
              <div className="oi-supp-icon-v2">
                <PhoneCallIcon />
              </div>
              <div className="oi-supp-label">Phone</div>
              <a className="oi-supp-title-v2" href="tel:+919904122699">
                +91 99041 22699
              </a>
              <p className="oi-supp-body-v2">Speak with our team about your project or partnership.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">
                Call now <ArrowRightIcon />
              </a>
            </div>
            <div className="oi-supp-card">
              <span className="oi-supp-status-v2 hiring">
                <span className="oi-supp-status-v2-dot" />
                Archive
              </span>
              <div className="oi-supp-icon-v2">
                <ArrowRightIcon />
              </div>
              <div className="oi-supp-label">All articles</div>
              <a className="oi-supp-title-v2" href="#blog-list">
                {BLOG_COUNT} articles
              </a>
              <p className="oi-supp-body-v2">
                Browse all insights on ERP, Odoo, manufacturing, and more.
              </p>
              <a className="oi-supp-cta-v2" href="#blog-list">
                Back to articles <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
