import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { seedPortfolioFromStatic } from "@/lib/portfolio-service";
import { logAudit } from "@/lib/audit-service";

/**
 * One-time migration endpoint: imports the static case studies into the
 * `portfolio` collection. Idempotent — existing slugs are skipped. Must be
 * triggered manually (POST) after review; it is never auto-run.
 */
export async function POST() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await seedPortfolioFromStatic();
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "bulk",
      entityType: "portfolio",
      entityId: "",
      entityName: `Seed ${result.inserted} case stud${
        result.inserted !== 1 ? "ies" : "y"
      }`,
      diff: {
        inserted: { from: null, to: result.inserted },
        skipped: { from: null, to: result.skipped },
      },
    });
    return NextResponse.json({
      success: true,
      ...result,
      message: `Seed complete: ${result.inserted} inserted, ${result.skipped} skipped (${result.total} static case studies).`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Seed failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
