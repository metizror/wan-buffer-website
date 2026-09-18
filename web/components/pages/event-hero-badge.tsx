import Image from "next/image";
import type { EventHeroBadge as EventHeroBadgeData } from "@/lib/events-data";

const LOGO_WHITE =
  "https://res.cloudinary.com/dghplu26l/image/upload/f_auto,q_auto,w_320/v1719489724/logo-white_eoxbqc.png";

interface EventHeroBadgeProps {
  badge: EventHeroBadgeData;
}

/**
 * Expo lanyard badge for the event detail hero: a strap hanging from the top
 * of the section, a clip, and a card carrying the headline and booth number.
 */
export function EventHeroBadge({ badge }: EventHeroBadgeProps) {
  return (
    <div className="oi-evt-badge-wrap" aria-label={`Booth ${badge.booth}`}>
      <div className="oi-evt-badge-strap" aria-hidden="true">
        <span>Wan Buffer</span>
      </div>
      <div className="oi-evt-badge-clip" aria-hidden="true">
        <span className="oi-evt-badge-crimp" />
        <span className="oi-evt-badge-ring" />
        <span className="oi-evt-badge-swivel" />
        <span className="oi-evt-badge-hook" />
      </div>
      <div className="oi-evt-badge-card">
        <span className="oi-evt-badge-slot" aria-hidden="true" />
        <p className="oi-evt-badge-headline">
          {badge.headline}
          <span>{badge.tagline}</span>
        </p>
        <div className="oi-evt-badge-foot">
          <Image
            src={LOGO_WHITE}
            alt="Wan Buffer"
            width={160}
            height={44}
            className="oi-evt-badge-logo"
          />
          <div className="oi-evt-badge-booth">
            <span>Booth No:</span>
            <strong>{badge.booth}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
