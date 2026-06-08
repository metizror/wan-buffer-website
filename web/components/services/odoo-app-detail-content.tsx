import Link from "next/link";

import type { OdooApp } from "@/lib/odoo-apps-data";
import { getRelatedOdooApps } from "@/lib/odoo-apps-data";
import { OdooAppFaqSection } from "./odoo-app-faq";
import { OdooAppImage } from "./odoo-app-image";
import { ArrowRightIcon, CheckIcon } from "./odoo-service-icons";

interface OdooAppDetailContentProps {
  app: OdooApp;
}

export function OdooAppDetailContent({ app }: OdooAppDetailContentProps) {
  const relatedApps = getRelatedOdooApps(app.slug);

  return (
    <main className="svc-page">
      <section className="oi-hero-lux oa-detail-hero">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          app
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oa-breadcrumb rev">
            <Link href="/odoo/apps">Odoo Apps</Link>
            <span aria-hidden="true">/</span>
            <span>{app.name}</span>
          </div>

          <div className="oa-detail-hero-row rev">
            <div className="oa-detail-hero-copy">
              <div className="oi-hero-lux-eyebrow">
                Odoo App, {app.technicalName}
              </div>
              <h1 className="oi-hero-lux-h">
                <span className="ln">{app.name}</span>
              </h1>
              <p className="oi-hero-lux-sub">{app.description}</p>

              <div className="oa-detail-tags">
                {app.categories.map((category) => (
                  <span key={category} className="oa-cat">
                    {category}
                  </span>
                ))}
                {app.versions.map((version) => (
                  <span key={version} className="oa-version-tag">
                    v{version}
                  </span>
                ))}
              </div>

              <div className="oi-hero-lux-cta">
                <a
                  className="oi-hero-lux-primary"
                  href={app.odooStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Buy on Odoo Apps</span>
                  <span className="oi-hero-lux-primary-circle">
                    <ArrowRightIcon />
                  </span>
                </a>
                <a className="oi-hero-lux-secondary" href="#contact">
                  Contact for demo
                </a>
              </div>
            </div>

            <aside className="oa-detail-panel">
              <div className="oa-store-cover-media">
                <OdooAppImage
                  src={app.cardImageSrc}
                  alt={`${app.name} store cover`}
                  width={629}
                  height={315}
                  cover
                  className="oa-store-cover-img"
                  priority
                  lazy={false}
                />
              </div>
              <div className="oa-detail-panel-body">
                <div className="oa-detail-panel-head">
                  <OdooAppImage
                    src={app.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    fixedSize
                    className="oa-detail-panel-icon-img"
                    aria-hidden
                  />
                  <div>
                    <div className="oa-detail-panel-price">{app.priceLabel}</div>
                    <div className="oa-detail-panel-note">Available on Odoo Apps Store</div>
                  </div>
                </div>
                <ul className="oa-detail-panel-list">
                  <li>
                    <CheckIcon />
                    <span>{app.license} license</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>365 days support included</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Community and Enterprise</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Online, Odoo.sh, and on premise</span>
                  </li>
                  {app.linesOfCode ? (
                    <li>
                      <CheckIcon />
                      <span>{app.linesOfCode} lines of code</span>
                    </li>
                  ) : null}
                </ul>
                <div className="oa-detail-panel-deps">
                  <span className="oa-detail-panel-deps-label">Dependencies</span>
                  <div className="oa-detail-panel-deps-list">
                    {app.dependencies.map((dependency) => (
                      <span key={dependency}>{dependency}</span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="oa-highlights">
        <div className="oa-highlights-inner">
          {app.highlights.map((item) => (
            <div key={item.title} className="oa-highlight-card rev">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="oa-overview">
        <div className="oa-overview-inner">
          <div className="oa-overview-copy rev">
            <div className="eyebrow">Overview</div>
            <h2 className="sec-h">
              Why teams install <span className="acc">{app.name}</span>
            </h2>
            {app.introParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="oa-overview-p">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="oa-overview-stats rev">
            {app.trustStats.map((stat) => (
              <div key={stat.label} className="oa-overview-stat">
                <div className="oa-overview-stat-n">{stat.value}</div>
                <div className="oa-overview-stat-l">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="oa-features">
        <div className="oa-features-inner">
          <div className="oa-features-head rev">
            <div className="eyebrow">Features</div>
            <h2 className="sec-h">
              What you get with <span className="acc">{app.name}</span>
            </h2>
            <p className="sec-p">{app.summary}</p>
          </div>

          <div className="oa-features-rich rev">
            {app.features.map((feature) => (
              <article key={feature.title} className="oa-feature-rich">
                {feature.imageSrc ? (
                  <div className="oa-feature-rich-media">
                    <OdooAppImage
                      src={feature.imageSrc}
                      alt={feature.title}
                      width={120}
                      height={120}
                      fixedSize
                      className="oa-feature-rich-img"
                    />
                  </div>
                ) : null}
                <div className="oa-feature-rich-body">
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="oa-screenshots">
        <div className="oa-screenshots-inner">
          <div className="oa-screenshots-head rev">
            <div className="eyebrow">Screenshots</div>
            <h2 className="sec-h">
              See the module <span className="acc">inside Odoo</span>
            </h2>
            <p className="sec-p">
              These screens come directly from the live module listing. Install it, assign access
              rights, and your team can start from the same views shown here.
            </p>
          </div>

          <div className="oa-screenshots-grid rev">
            {app.screenshots.map((shot) => (
              <figure key={shot.title} className="oa-shot">
                <div className="oa-shot-media">
                  <OdooAppImage
                    src={shot.src}
                    alt={shot.alt}
                    width={960}
                    height={600}
                    className="oa-shot-img"
                  />
                </div>
                <figcaption>
                  <h3>{shot.title}</h3>
                  <p>{shot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="oa-setup">
        <div className="oa-setup-inner">
          <div className="oa-setup-head rev">
            <div className="eyebrow">Setup guide</div>
            <h2 className="sec-h">
              How to configure <span className="acc">{app.name}</span>
            </h2>
            <p className="sec-p">
              Follow these steps after installation. Most teams can go live the same day once user
              access rights are set.
            </p>
          </div>

          <ol className="oa-setup-steps rev">
            {app.setupSteps.map((step, index) => (
              <li key={step.title}>
                <span className="oa-setup-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <OdooAppFaqSection appName={app.name} faqs={app.faqs} />

      {relatedApps.length > 0 ? (
        <section className="oa-related">
          <div className="oa-related-inner">
            <div className="oa-related-head rev">
              <div className="eyebrow">More apps</div>
              <h2 className="sec-h">
                Related <span className="acc">Odoo modules</span>
              </h2>
            </div>
            <div className="oa-related-grid rev">
              {relatedApps.map((related) => (
                <Link key={related.slug} className="oa-related-card" href={`/odoo/apps/${related.slug}`}>
                  <div className="oa-related-media oa-store-cover-media">
                    <OdooAppImage
                      src={related.cardImageSrc}
                      alt={related.name}
                      width={629}
                      height={315}
                      cover
                      className="oa-store-cover-img"
                    />
                  </div>
                  <span className="oa-related-cat">{related.categories[0]}</span>
                  <span className="oa-related-title">{related.name}</span>
                  <span className="oa-related-summary">{related.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="oa-services-link">
        <div className="oa-services-link-inner rev">
          <div>
            <div className="eyebrow">Need help?</div>
            <h2 className="sec-h">
              Implementation and <span className="acc">customization</span>
            </h2>
            <p className="sec-p">
              Our team can install, configure, and extend this module for your workflows. That
              includes a single app rollout or a full Odoo programme with training and support.
            </p>
          </div>
          <div className="oa-services-link-actions">
            <Link className="oa-card-primary" href="/odoo/implementation">
              Odoo Implementation
              <ArrowRightIcon />
            </Link>
            <Link className="oa-card-secondary" href="/odoo/odoo-customization-and-installation">
              Odoo Customisation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
