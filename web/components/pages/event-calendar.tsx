import type { WanBufferEvent } from "@/lib/events-data";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

/** "2026-09-22" → { y, m (0-based), d }, or null when malformed. */
function parseIsoDate(value: string): { y: number; m: number; d: number } | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const y = Number(match[1]);
  const m = Number(match[2]) - 1;
  const d = Number(match[3]);
  if (m < 0 || m > 11 || d < 1 || d > 31) return null;
  return { y, m, d };
}

interface EventCalendarProps {
  event: Pick<WanBufferEvent, "sortDate" | "endDate" | "title">;
}

/**
 * Static month grid with the event's days highlighted. Shown on the detail
 * page for multi-day events (those with an `endDate`) in place of a booking
 * form. Renders nothing if the dates are unparsable or span months.
 */
export function EventCalendar({ event }: EventCalendarProps) {
  const start = parseIsoDate(event.sortDate);
  const end = event.endDate ? parseIsoDate(event.endDate) : start;
  if (!start || !end || start.y !== end.y || start.m !== end.m || end.d < start.d) return null;

  const daysInMonth = new Date(start.y, start.m + 1, 0).getDate();
  // JS getDay(): 0 = Sunday. Shift so the grid starts on Monday.
  const leadingBlanks = (new Date(start.y, start.m, 1).getDay() + 6) % 7;
  const cells: (number | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const rangeLabel =
    start.d === end.d
      ? `${start.d} ${MONTHS[start.m]} ${start.y}`
      : `${start.d}–${end.d} ${MONTHS[start.m]} ${start.y}`;

  return (
    <div className="oi-evt-cal" role="group" aria-label={`${event.title}: ${rangeLabel}`}>
      <div className="oi-evt-cal-head">
        <span className="oi-evt-cal-month">
          {MONTHS[start.m]} {start.y}
        </span>
        <span className="oi-evt-cal-range">{rangeLabel}</span>
      </div>
      <div className="oi-evt-cal-grid" aria-hidden="true">
        {WEEKDAYS.map((w) => (
          <span key={w} className="oi-evt-cal-wd">
            {w}
          </span>
        ))}
        {cells.map((day, i) =>
          day === null ? (
            <span key={`b${i}`} className="oi-evt-cal-day blank" />
          ) : (
            <span
              key={day}
              className={
                day >= start.d && day <= end.d
                  ? `oi-evt-cal-day on${day === start.d ? " first" : ""}${day === end.d ? " last" : ""}`
                  : "oi-evt-cal-day"
              }
            >
              {day}
            </span>
          )
        )}
      </div>
    </div>
  );
}
