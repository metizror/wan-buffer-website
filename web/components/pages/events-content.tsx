import Link from "next/link";

import { ArrowRightIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import { EVENT_COUNT } from "@/lib/events-data";

import { EventsListing } from "./events-listing";

export function EventsContent() {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux" aria-labelledby="oi-evt-hero-title">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          events
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">Events &amp; webinars</div>
          </div>
          <h1 id="oi-evt-hero-title" className="oi-hero-lux-h rev">
            <span className="ln">Wan Buffer&apos;s</span>
            <span className="ln">
              <span className="ai">Upcoming Events</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">
            IT conferences, webinars, and industry events hosted or attended by Wan Buffer—USA, UK, India, UAE, Europe,
            Kuwait, France, and beyond.
          </p>
          <div className="oi-hero-lux-cta rev">
            <a className="oi-hero-lux-primary" href="#contact">
              <span>Chat now</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </a>
            <a className="oi-hero-lux-secondary" href="#events-list">
              Browse events
            </a>
          </div>
          <div className="oi-hero-lux-foot rev">
            <span className="oi-hero-lux-foot-l">We host</span>
            <div className="oi-hero-lux-foot-items">
              <span className="oi-hero-lux-foot-item">Webinars</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Expos</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Odoo demos</span>
              <span className="oi-hero-lux-foot-sep">/</span>
              <span className="oi-hero-lux-foot-item">Talk shows</span>
            </div>
          </div>
        </div>
      </section>

      <section className="oi-host-intro-band" aria-label="About our events">
        <div className="oi-host-intro-band-inner rev">
          <p>
            Stay up to date with Wan Buffer at cutting-edge technology events—learn about Odoo, AI-powered marketing,
            email verification, and innovations in software development. Filter by keyword, location, or category to find
            sessions that matter to you.
          </p>
          <a className="oi-host-intro-cta" href="#events-list">
            View all events
          </a>
        </div>
      </section>

      <section className="oi-evt-promo rev" aria-label="Odoo Community Days">
        <div className="oi-evt-promo-inner">
          <div>
            <p className="oi-evt-promo-eyebrow">Featured</p>
            <h2 className="oi-evt-promo-title">Odoo Community Days India 2025</h2>
            <p className="oi-evt-promo-dates">13 – 14 August 2025</p>
          </div>
          <a
            href="https://wanbuffer.com/odoo-community-day/"
            className="oi-evt-promo-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
            <ArrowRightIcon />
          </a>
        </div>
      </section>

      <section className="oi-evt-list section alt" id="events-list" aria-label="Event listings">
        <div className="oi-evt-list-inner">
          <EventsListing />
        </div>
      </section>

      <section className="oi-supp" id="contact" aria-labelledby="oi-evt-support-title">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Get in touch</div>
            <h2 id="oi-evt-support-title">
              Planning an event <span>with us?</span>
            </h2>
            <p>
              Reach out for speaking engagements, expo booths, or custom Odoo webinars—we&apos;ll help you share knowledge
              with your audience.
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
              <p className="oi-supp-body-v2">Book a webinar, expo booth, or partnership conversation.</p>
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
              <a className="oi-supp-title-v2" href="tel:+919825555555">
                +91 98255 55555
              </a>
              <p className="oi-supp-body-v2">Speak with our team about upcoming events and collaborations.</p>
              <a className="oi-supp-cta-v2" href="tel:+919825555555">
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
              <div className="oi-supp-label">Event listings</div>
              <a className="oi-supp-title-v2" href="#events-list">
                {EVENT_COUNT} events
              </a>
              <p className="oi-supp-body-v2">
                Browse webinars, expos, and talk shows—with full detail pages on this site.
              </p>
              <a className="oi-supp-cta-v2" href="#events-list">
                Back to events <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
