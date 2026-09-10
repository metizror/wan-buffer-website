import { NextResponse, type NextRequest } from "next/server";
import { createReachoLead } from "@/lib/reacho-service";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map<string, number[]>();

const FORM_SOURCES = {
  "discovery-call": "Discovery Call form",
  "lead-popup": "Free Assessment popup",
} as const;

type FormSource = keyof typeof FORM_SOURCES;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (rateBuckets.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateBuckets.set(ip, recent);
  return false;
}

// Drops control characters (tab/newline kept) so notes stay readable in the CRM.
function text(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  let out = "";
  for (const ch of value) {
    const code = ch.charCodeAt(0);
    if (code === 9 || code === 10 || (code >= 32 && code !== 127)) out += ch;
  }
  return out.trim().slice(0, max);
}

function isEmail(value: string): boolean {
  return value.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never see this field.
  if (text(body.website, 10)) {
    return NextResponse.json({ ok: true });
  }

  const source = text(body.source, 30) as FormSource;
  if (!(source in FORM_SOURCES)) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const firstName = text(body.firstName, 60);
  const lastName = text(body.lastName, 60);
  const name = `${firstName} ${lastName}`.trim();
  const email = text(body.email, 254);
  const waId = text(body.mobile, 25).replace(/\D/g, "");
  const company = text(body.company, 120);
  const service = text(body.service, 80);
  const engagement = text(body.engagement, 80);
  const message = text(body.message, 2000);
  const page = text(body.page, 300);

  if (!name || !isEmail(email) || waId.length < 8 || waId.length > 15 || !company) {
    return NextResponse.json({ error: "Please fill in all required fields correctly." }, { status: 400 });
  }

  // Everything Reacho has no field for is folded into notes.
  const notes = [
    `Form: ${FORM_SOURCES[source]}`,
    `Email: ${email}`,
    `Company: ${company}`,
    service && `Service: ${service}`,
    engagement && `Engagement: ${engagement}`,
    message && `Message: ${message}`,
    page && `Page: ${page}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await createReachoLead({ waId, name, notes, source: "website" });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] lead delivery failed:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "We couldn't send your request. Please try again." }, { status: 502 });
  }
}
