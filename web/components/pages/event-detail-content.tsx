import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon, CheckIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import type { WanBufferEvent } from "@/lib/events-data";

import { EventCalendar } from "./event-calendar";
import { EventHeroBadge } from "./event-hero-badge";

function locationLabel(location: WanBufferEvent["location"]): string {
  return location || "Online";
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
          <div className={`oi-evt-detail-hero-grid rev${
              event.hideHeroImage && !event.heroBadge ? " no-media" : ""
            }`}>
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
            {event.heroBadge ? (
              <EventHeroBadge badge={event.heroBadge} />
            ) : event.hideHeroImage ? null : (
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
            )}
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
                  {event.highlightsHeading || "Why you should tune in"}
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
            {event.endDate ? (
              <div className="oi-evt-aside-card">
                <h2 className="oi-evt-aside-title">Event dates</h2>
                <EventCalendar event={event} />
              </div>
            ) : null}
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
            {event.venueMap ? (
              <div className="oi-evt-aside-card oi-evt-map-card">
                <h2 className="oi-evt-aside-title">Venue map</h2>
                <div className="oi-evt-map">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(event.venueMap.query)}&output=embed`}
                    title={event.venueMap.label}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  className="oi-evt-aside-cta oi-evt-map-cta"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.venueMap.query)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <ArrowRightIcon />
                </a>
              </div>
            ) : null}
            <Link className="oi-evt-back" href="/event">
              ← All events
            </Link>
          </aside>
        </div>
      </section>

      {event.showcase ? (
        <section className="oi-evt-show" aria-labelledby="evt-showcase-title">
          <div className="oi-evt-show-inner">
            <div className="oi-evt-show-intro rev">
              <div className="eyebrow lt">{event.showcase.eyebrow}</div>
              <div className="oi-evt-show-brand">
                {event.showcase.icon ? (
                  <Image src={event.showcase.icon} alt="" width={84} height={84} className="oi-evt-show-icon" />
                ) : null}
                <h2 id="evt-showcase-title" className="oi-evt-show-title">
                  {event.showcase.name}
                </h2>
              </div>
              <p className="oi-evt-show-tagline">{event.showcase.tagline}</p>
              <p className="oi-evt-show-desc">{event.showcase.description}</p>
              <div className="oi-evt-show-actions">
                <a
                  className="oi-evt-show-cta"
                  href={event.showcase.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.showcase.urlLabel}
                  <ArrowRightIcon />
                </a>
                <Link className="oi-evt-show-cta ghost" href="/contact-us">
                  Book a demo at the stand
                </Link>
              </div>
            </div>
            <ul className="oi-evt-show-points rev">
              {event.showcase.points.map((point) => (
                <li key={point.title} className="oi-evt-show-point">
                  <span className="oi-evt-show-check">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {event.experts && event.experts.length > 0 ? (
        <section className="oi-evt-team section" aria-labelledby="evt-team-title">
          <div className="oi-evt-team-inner">
            <div className="oi-evt-team-hdr rev">
              <div className="eyebrow">Meet our expert</div>
              <h2 id="evt-team-title" className="sec-h">
                Talk to us <span className="ai">at the stand</span>
              </h2>
              <p>Book a one-to-one slot during the expo or walk in at Stand SE05.</p>
            </div>
            <div className="oi-evt-team-grid rev">
              {event.experts.map((expert) => (
                <article key={expert.name} className="oi-evt-team-card">
                  <span className="oi-evt-team-photo">
                    <Image
                      src={expert.photo}
                      alt={`${expert.name}, ${expert.role} at Wan Buffer`}
                      width={330}
                      height={330}
                      sizes="160px"
                    />
                  </span>
                  <h3>{expert.name}</h3>
                  <p className="oi-evt-team-role">{expert.role}</p>
                  <p className="oi-evt-team-bio">{expert.bio}</p>
                  {expert.booking ? (
                    <a
                      className="oi-evt-team-book"
                      href={expert.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a Meeting
                      <ArrowRightIcon />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
              <a className="oi-supp-title-v2" href="tel:+919904122699">
                +91 99041 22699
              </a>
              <p className="oi-supp-body-v2">Speak with our team directly.</p>
              <a className="oi-supp-cta-v2" href="tel:+919904122699">
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
