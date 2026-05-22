import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import type { WanBufferEvent } from "@/lib/events-data";

function locationLabel(location: WanBufferEvent["location"]): string {
  if (location === "Online") return "Online";
  return "Helipad Exhibition Centre, Gandhinagar, Gujarat, India";
}

interface EventDetailContentProps {
  event: WanBufferEvent;
}

export function EventDetailContent({ event }: EventDetailContentProps) {
  return (
    <main className="svc-page">
      <section className="oi-evt-detail-hero" aria-labelledby="oi-evt-detail-title">
        <div className="oi-evt-detail-hero-bg" aria-hidden="true" />
        <div className="oi-evt-detail-hero-inner">
          <div className="oi-evt-detail-hero-grid rev">
            <div className="oi-evt-detail-hero-copy">
              <div className="oi-evt-detail-tags">
                {event.categories.map((cat) => (
                  <span key={cat} className="oi-evt-tag">
                    {cat}
                  </span>
                ))}
              </div>
              <h1 id="oi-evt-detail-title" className="oi-evt-detail-title">
                {event.pageHeading}
              </h1>
              <p className="oi-evt-detail-lead">{event.excerpt}</p>
              <ul className="oi-evt-detail-quick-meta">
                <li>
                  <strong>Date</strong>
                  <span>{event.dateLabel}</span>
                </li>
                {event.time ? (
                  <li>
                    <strong>Time</strong>
                    <span>{event.time}</span>
                  </li>
                ) : null}
                <li>
                  <strong>Venue</strong>
                  <span>{locationLabel(event.location)}</span>
                </li>
                <li>
                  <strong>Price</strong>
                  <span>{event.priceLabel}</span>
                </li>
              </ul>
            </div>
            <div className="oi-evt-detail-hero-media">
              <Image
                src={event.imageSrc}
                alt={event.title}
                width={event.imageW}
                height={event.imageH}
                className="oi-evt-detail-hero-img"
                sizes="(max-width: 900px) 100vw, 480px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="oi-evt-detail-body section alt">
        <div className="oi-evt-detail-layout">
          <article className="oi-evt-detail-article rev">
            {event.introParagraphs.map((p) => (
              <p key={p.slice(0, 40)} className="oi-evt-detail-p">
                {p}
              </p>
            ))}

            {event.hosts && event.hosts.length > 0 ? (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">Hosts</h2>
                <ul className="oi-evt-hosts">
                  {event.hosts.map((host) => (
                    <li key={host.name} className="oi-evt-host">
                      <span className="oi-evt-host-name">{host.name}</span>
                      <span className="oi-evt-host-role">{host.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {event.highlights && event.highlights.length > 0 ? (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">
                  {event.slug.includes("pharmatech") ? "Why attend?" : "Why you should tune in"}
                </h2>
                <ul className="oi-train-highlights">
                  {event.highlights.map((item) => (
                    <li key={item.title} className="oi-train-highlight-row">
                      <span className="oi-train-highlight-icon" aria-hidden>
                        <CheckIcon />
                      </span>
                      <p>
                        <strong>{item.title}: </strong>
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {event.sections?.map((section) => (
              <div key={section.heading} className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">{section.heading}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="oi-evt-detail-p">
                    {p}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="oi-evt-detail-list">
                    {section.bullets.map((b) => (
                      <li key={b.slice(0, 40)}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {event.learnItems && event.learnItems.length > 0 ? (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">What you&apos;ll learn</h2>
                <ul className="oi-evt-detail-list">
                  {event.learnItems.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {event.audienceItems && event.audienceItems.length > 0 ? (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">Who should attend?</h2>
                <ul className="oi-evt-detail-list">
                  {event.audienceItems.map((item) => (
                    <li key={item.slice(0, 40)}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {event.closingParagraphs?.map((p) => (
              <p key={p.slice(0, 40)} className="oi-evt-detail-p">
                {p}
              </p>
            ))}

            {event.youtubeUrl ? (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">Watch the recording</h2>
                <a
                  href={event.youtubeUrl}
                  className="oi-evt-youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on YouTube
                  <ArrowRightIcon />
                </a>
              </div>
            ) : null}

            {event.hashtags ? (
              <p className="oi-evt-detail-tags-line">
                <span className="oi-evt-detail-tags-label">Tags</span>
                {event.hashtags}
              </p>
            ) : null}
          </article>

          <aside className="oi-evt-detail-aside rev">
            <div className="oi-evt-aside-card">
              <h2 className="oi-evt-aside-title">Event details</h2>
              <dl className="oi-evt-aside-dl">
                <div>
                  <dt>Date</dt>
                  <dd>{event.dateLabel}</dd>
                </div>
                {event.time ? (
                  <div>
                    <dt>Time</dt>
                    <dd>{event.time}</dd>
                  </div>
                ) : null}
                <div>
                  <dt>Venue</dt>
                  <dd>{locationLabel(event.location)}</dd>
                </div>
                <div>
                  <dt>Organized by</dt>
                  <dd>Wan Buffer Services</dd>
                </div>
                <div>
                  <dt>Admission</dt>
                  <dd>{event.priceLabel}</dd>
                </div>
              </dl>
              <Link className="oi-evt-aside-cta" href="/contact-us">
                Contact us
                <ArrowRightIcon />
              </Link>
            </div>
            <Link className="oi-evt-back" href="/event">
              ← All events
            </Link>
          </aside>
        </div>
      </section>

      <section className="oi-supp" id="contact">
        <div className="oi-supp-inner">
          <div className="oi-supp-hdr rev">
            <div className="eyebrow lt">Get in touch</div>
            <h2>
              Questions about <span>this event?</span>
            </h2>
            <p>Reach out for registrations, partnerships, or custom Odoo webinars with our team.</p>
          </div>
          <div className="oi-supp-grid rev">
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <MailIcon />
              </div>
              <div className="oi-supp-label">Email</div>
              <Link className="oi-supp-title-v2" href="/contact-us">
                Contact us
              </Link>
              <p className="oi-supp-body-v2">Send us your enquiry about this event.</p>
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
              <p className="oi-supp-body-v2">Speak with our team directly.</p>
              <a className="oi-supp-cta-v2" href="tel:+919825555555">
                Call now <ArrowRightIcon />
              </a>
            </div>
            <div className="oi-supp-card">
              <div className="oi-supp-icon-v2">
                <ArrowRightIcon />
              </div>
              <div className="oi-supp-label">More events</div>
              <Link className="oi-supp-title-v2" href="/event">
                Browse events
              </Link>
              <p className="oi-supp-body-v2">Explore webinars, expos, and talk shows.</p>
              <Link className="oi-supp-cta-v2" href="/event">
                View all <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
