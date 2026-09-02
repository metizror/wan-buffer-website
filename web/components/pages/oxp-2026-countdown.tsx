"use client";

import { useEffect, useState } from "react";

/** Event opens 11 Sep 2026, 09:00 IST. */
const EVENT_START = Date.parse("2026-09-11T09:00:00+05:30");

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function remainingFrom(now: number): Remaining | null {
  const ms = EVENT_START - now;
  if (ms <= 0) return null;
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

/**
 * Hero countdown. Starts empty so the server render and the first client render
 * agree, then fills in on mount — the clock cannot match across the two.
 */
export function Oxp2026Countdown() {
  const [left, setLeft] = useState<Remaining | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const tick = () => {
      setLeft(remainingFrom(Date.now()));
      setStarted(true);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!started) return null;

  if (!left) {
    return (
      <div className="oxp26-countdown oxp26-countdown-live">
        <span className="oxp26-countdown-live-dot" aria-hidden="true" />
        Odoo Experience 2026 India is happening now
      </div>
    );
  }

  const units = [
    { value: left.days, label: left.days === 1 ? "Day" : "Days" },
    { value: left.hours, label: "Hours" },
    { value: left.minutes, label: "Minutes" },
    { value: left.seconds, label: "Seconds" },
  ];

  return (
    <div className="oxp26-countdown" aria-label="Time remaining until Odoo Experience 2026 India">
      <span className="oxp26-countdown-label">Countdown to the event</span>
      <div className="oxp26-countdown-units">
        {units.map((unit) => (
          <div key={unit.label} className="oxp26-countdown-unit">
            <span className="oxp26-countdown-n">{String(unit.value).padStart(2, "0")}</span>
            <span className="oxp26-countdown-l">{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
