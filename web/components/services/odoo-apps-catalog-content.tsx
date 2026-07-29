"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  getAllOdooApps,
  getRotatingFeaturedOdooApp,
  ODOO_APP_CATEGORIES,
  ODOO_APP_VERSIONS,
  type OdooAppCategory,
  type OdooAppVersion,
} from "@/lib/odoo-apps-data";
import { OdooAppImage } from "./odoo-app-image";
import { ArrowRightIcon, CheckIcon } from "./odoo-service-icons";

const STATS = [
  { n: "31", l: "Odoo apps published", g: false },
  { n: "365", l: "Days free support", g: true },
  { n: "254+", l: "Happy customers", g: false },
  { n: "17 / 18 / 19", l: "Odoo versions supported", g: false },
] as const;

const WHY_POINTS = [
  {
    title: "Built for real Odoo teams",
    body: "Our apps extend standard Odoo workflows instead of replacing them. That means cleaner adoption, fewer surprises at go-live, and less retraining for your users.",
  },
  {
    title: "Supported after purchase",
    body: "Every module includes 365 days of support from Wan Buffer. If you need help with installation, configuration, or a bug fix, you can reach our team directly.",
  },
  {
    title: "Ready for multiple environments",
    body: "Use the same app on Odoo Online, Odoo.sh, or on premise. We publish for Odoo 17, 18, and 19 so you can match the version your business runs today.",
  },
] as const;

export function OdooAppsCatalogContent() {
  const apps = getAllOdooApps();
  const featuredApp = getRotatingFeaturedOdooApp(apps);
  const [category, setCategory] = useState<OdooAppCategory | "All">("All");
  const [version, setVersion] = useState<OdooAppVersion | "All">("All");
  const [query, setQuery] = useState("");

  const filteredApps = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return apps.filter((app) => {
      const matchesCategory = category === "All" || app.categories.includes(category);
      const matchesVersion = version === "All" || app.versions.includes(version);
      const matchesQuery =
        !normalizedQuery ||
        app.name.toLowerCase().includes(normalizedQuery) ||
        app.summary.toLowerCase().includes(normalizedQuery) ||
        app.technicalName.toLowerCase().includes(normalizedQuery) ||
        app.categories.some((item) => item.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesVersion && matchesQuery;
    });
  }, [apps, category, query, version]);

  return (
    <main className="svc-page">
      <section className="oi-hero-lux oa-catalog-hero">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-mark" aria-hidden="true">
          apps
        </div>
        <div className="oi-hero-lux-inner">
          <div className="oa-detail-hero-row rev">
            <div className="oa-detail-hero-copy">
              <div className="oi-hero-lux-eyebrow">Odoo Apps by Wan Buffer</div>
              <h1 className="oi-hero-lux-h">
                <span className="ln">Production-ready</span>
                <span className="ln">
                  <span className="ai">Odoo modules.</span>
                </span>
              </h1>
              <p className="oi-hero-lux-sub">
                Browse modules for sales, inventory, accounting, and productivity. Each listing
                includes screenshots, setup notes, and{" "}
                <strong>365 days of included support</strong> on the Odoo Apps Store.
              </p>

              <div className="oa-hero-pills">
                <span className="oa-hero-pill">31 published apps</span>
                <span className="oa-hero-pill">365-day support</span>
                <span className="oa-hero-pill">Odoo 17, 18, and 19</span>
              </div>

              <div className="oi-hero-lux-cta">
                <a className="oi-hero-lux-primary" href="#apps-catalog">
                  <span>Browse all apps</span>
                  <span className="oi-hero-lux-primary-circle">
                    <ArrowRightIcon />
                  </span>
                </a>
                <a className="oi-hero-lux-secondary" href="#contact">
                  Request a demo
                </a>
              </div>

              <div className="oi-hero-lux-foot">
                <span className="oi-hero-lux-foot-l">Available on</span>
                <div className="oi-hero-lux-foot-items">
                  <span className="oi-hero-lux-foot-item">Odoo Online</span>
                  <span className="oi-hero-lux-foot-sep">/</span>
                  <span className="oi-hero-lux-foot-item">Odoo.sh</span>
                  <span className="oi-hero-lux-foot-sep">/</span>
                  <span className="oi-hero-lux-foot-item">On Premise</span>
                </div>
              </div>
            </div>

            <aside className="oa-detail-panel oa-featured-panel">
              <div className="oa-featured-panel-badge">Featured app</div>
              <div className="oa-store-cover-media">
                <OdooAppImage
                  src={featuredApp.cardImageSrc}
                  alt={`${featuredApp.name} store cover`}
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
                    src={featuredApp.iconSrc}
                    alt=""
                    width={48}
                    height={48}
                    fixedSize
                    className="oa-detail-panel-icon-img"
                    aria-hidden
                  />
                  <div>
                    <h2 className="oa-featured-panel-name">{featuredApp.name}</h2>
                    <div className="oa-detail-panel-note">{featuredApp.priceLabel}</div>
                  </div>
                </div>

                <p className="oa-featured-panel-summary">{featuredApp.summary}</p>

                <div className="oa-detail-tags oa-featured-panel-tags">
                  {featuredApp.categories.map((item) => (
                    <span key={item} className="oa-cat">
                      {item}
                    </span>
                  ))}
                  {featuredApp.versions.slice(0, 2).map((item) => (
                    <span key={item} className="oa-version-tag">
                      v{item}
                    </span>
                  ))}
                </div>

                <div className="oa-featured-panel-actions">
                  <Link className="oa-featured-panel-primary" href={`/odoo/apps/${featuredApp.slug}`}>
                    View app details
                    <ArrowRightIcon />
                  </Link>
                  <a
                    className="oa-featured-panel-secondary"
                    href={featuredApp.odooStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Odoo Apps Store
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="oi-stats-band" aria-label="Odoo apps highlights">
        <div className="oi-stats-band-inner">
          {STATS.map((stat) => (
            <div key={stat.l} className="oi-stats-band-item">
              <div className={`oi-stats-band-n${stat.g ? " gold" : ""}`}>{stat.n}</div>
              <div className="oi-stats-band-l">{stat.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="oa-catalog" id="apps-catalog">
        <div className="oa-catalog-inner">
          <div className="oa-catalog-head rev">
            <div className="eyebrow">App catalog</div>
            <h2 className="sec-h">
              Explore our <span className="acc">Odoo Apps</span>
            </h2>
            <p className="sec-p">
              Filter by category or Odoo version. Each card opens a full app page with screenshots,
              setup steps, FAQs, and a direct link to the Odoo Apps Store listing.
            </p>
          </div>

          <div className="oa-filters rev">
            <label className="oa-search">
              <span className="oa-search-label">Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by app name or module"
                aria-label="Search Odoo apps"
              />
            </label>

            <div className="oa-filter-group">
              <span className="oa-filter-label">Category</span>
              <div className="oa-filter-chips">
                <button
                  type="button"
                  className={`oa-chip${category === "All" ? " active" : ""}`}
                  onClick={() => setCategory("All")}
                >
                  All
                </button>
                {ODOO_APP_CATEGORIES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`oa-chip${category === item ? " active" : ""}`}
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="oa-filter-group">
              <span className="oa-filter-label">Odoo version</span>
              <div className="oa-filter-chips">
                <button
                  type="button"
                  className={`oa-chip${version === "All" ? " active" : ""}`}
                  onClick={() => setVersion("All")}
                >
                  All
                </button>
                {ODOO_APP_VERSIONS.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={`oa-chip${version === item ? " active" : ""}`}
                    onClick={() => setVersion(item)}
                  >
                    v{item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredApps.length === 0 ? (
            <div className="oa-empty rev">
              <p>No apps match your filters yet. Try another category or clear your search.</p>
            </div>
          ) : (
            <div className="oa-grid rev">
              {filteredApps.map((app) => (
                <article key={app.slug} className="oa-card">
                  <Link className="oa-card-link" href={`/odoo/apps/${app.slug}`}>
                    <div className="oa-card-media">
                      <OdooAppImage
                        src={app.cardImageSrc}
                        alt={app.name}
                        width={640}
                        height={360}
                        cover
                        className="oa-card-img"
                      />
                    </div>

                    <div className="oa-card-body">
                      <div className="oa-card-top">
                        <OdooAppImage
                          src={app.iconSrc}
                          alt=""
                          width={40}
                          height={40}
                          fixedSize
                          className="oa-card-icon-img"
                          aria-hidden
                        />
                        <div className="oa-card-badges">
                          {featuredApp.slug === app.slug ? (
                            <span className="oa-badge featured">Featured</span>
                          ) : null}
                          <span className="oa-badge">{app.priceLabel}</span>
                        </div>
                      </div>

                      <div className="oa-card-cats">
                        {app.categories.map((item) => (
                          <span key={item} className="oa-cat">
                            {item}
                          </span>
                        ))}
                      </div>

                      <h3 className="oa-card-title">{app.name}</h3>
                      <p className="oa-card-summary">{app.summary}</p>

                      <ul className="oa-card-meta">
                        <li>
                          <CheckIcon />
                          <span>{app.versions.map((item) => `v${item}`).join(", ")}</span>
                        </li>
                        <li>
                          <CheckIcon />
                          <span>{app.license} license</span>
                        </li>
                      </ul>
                    </div>
                  </Link>

                  <div className="oa-card-actions">
                    <a
                      className="oa-card-secondary"
                      href={app.odooStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Odoo Apps Store
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="oa-catalog-note rev">
            <p>
              More apps are being added to this catalog. Need help choosing or installing modules?{" "}
              <Link href="/odoo/implementation">Talk to our Odoo implementation team</Link> or{" "}
              <Link href="/odoo/odoo-customization-and-installation">request custom development</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="oa-why">
        <div className="oa-why-inner">
          <div className="oa-why-head rev">
            <div className="eyebrow">Why Wan Buffer apps</div>
            <h2 className="sec-h">
              Apps you can <span className="acc">actually roll out</span>
            </h2>
            <p className="sec-p">
              We have shipped more than 50 custom Odoo modules and supported 254+ customers across
              20+ countries. The apps in this catalog are the same modules we use on client projects,
              published for teams that want a proven solution without starting from scratch.
            </p>
          </div>
          <div className="oa-why-grid rev">
            {WHY_POINTS.map((point) => (
              <article key={point.title} className="oa-why-card">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
