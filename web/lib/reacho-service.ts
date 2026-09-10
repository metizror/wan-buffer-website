const REACHO_API_URL = process.env.REACHO_API_URL ?? "https://reacho.live/api/v1/leads";

export type ReachoLead = {
  waId: string;
  name: string;
  notes: string;
  source: string;
};

export async function createReachoLead(lead: ReachoLead): Promise<void> {
  const apiKey = process.env.REACHO_API_KEY;
  if (!apiKey) {
    throw new Error("REACHO_API_KEY is not configured");
  }

  const response = await fetch(REACHO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      waId: lead.waId,
      name: lead.name,
      stage: "NEW",
      source: lead.source,
      notes: lead.notes,
    }),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });

  if (!response.ok) {
    // Body is intentionally not logged: it may echo the request payload (PII).
    throw new Error(`Reacho responded with ${response.status}`);
  }
}
