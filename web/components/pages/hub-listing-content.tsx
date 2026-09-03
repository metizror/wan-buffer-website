import Link from "next/link";
import { ArrowRightIcon } from "@/components/services/odoo-service-icons";

export interface HubItem {
  href: string;
  icon: string;
  title: string;
  body: string;
  pills: string[];
}

interface HubListingContentProps {
  eyebrow: string;
  titleLines: [string, string];
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  items: HubItem[];
  closerTitle: string;
  closerBody: string;
}

export function HubListingContent({
  eyebrow,
  titleLines,
  subtitle,
  primaryCta,
  secondaryCta,
  items,
  closerTitle,
  closerBody,
}: HubListingContentProps) {
  return (
    <main className="svc-page">
      <section className="oi-hero-lux">
        <div className="oi-hero-lux-grid" aria-hidden="true" />
        <div className="oi-hero-lux-mesh" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-1" aria-hidden="true" />
        <span className="oi-hero-lux-orb oi-hero-lux-orb-2" aria-hidden="true" />
        <div className="oi-hero-lux-inner">
          <div className="oi-hero-lux-top rev">
            <div className="oi-hero-lux-eyebrow">{eyebrow}</div>
          </div>
          <h1 className="oi-hero-lux-h rev">
            <span className="ln">{titleLines[0]}</span>
            <span className="ln">
              <span className="ai">{titleLines[1]}</span>
            </span>
          </h1>
          <p className="oi-hero-lux-sub rev">{subtitle}</p>
          <div className="oi-hero-lux-cta rev">
            <Link className="oi-hero-lux-primary" href={primaryCta.href}>
              <span>{primaryCta.label}</span>
              <span className="oi-hero-lux-primary-circle">
                <ArrowRightIcon />
              </span>
            </Link>
            <Link className="oi-hero-lux-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="oi-bento-sec">
        <div className="oi-bento-inner">
          <div className="oi-bento rev">
            {items.map((it) => (
              <Link key={it.href} href={it.href} className="oi-bento-card" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="oi-bento-card-head">
                  <div className="oi-bento-icon" style={{ fontSize: "1.75rem", lineHeight: 1 }} aria-hidden>
                    {it.icon}
                  </div>
                </div>
                <div className="oi-bento-card-t">{it.title}</div>
                <p className="oi-bento-card-b">{it.body}</p>
                <div className="card-pills" style={{ marginTop: "auto", paddingTop: 16 }}>
                  {it.pills.map((p) => (
                    <span key={p} className="pill pill-red">
                      {p}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="oi-closer" id="contact">
        <div className="oi-closer-inner">
          <div className="oi-closer-cta rev">
            <div className="oi-closer-cta-l">
              <h4>{closerTitle}</h4>
              <p style={{ marginTop: 16, maxWidth: 520, opacity: 0.85, lineHeight: 1.65 }}>{closerBody}</p>
            </div>
            <div className="oi-closer-cta-r">
              <Link className="oi-cta-big" href="/contact-us">
                <span>Talk to an engineer</span>
                <span className="oi-cta-big-arrow">
                  <ArrowRightIcon />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
