import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { seedEventsFromStatic } from "@/lib/events-service";
import { logAudit } from "@/lib/audit-service";

/** One-shot import of the static events shipped with the codebase. Idempotent. */
export async function POST() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await seedEventsFromStatic();
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "bulk",
      entityType: "event",
      entityId: "",
      entityName: `Seed events (${result.inserted} imported, ${result.skipped} skipped)`,
    });
    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Failed to seed events" }, { status: 500 });
  }
}
