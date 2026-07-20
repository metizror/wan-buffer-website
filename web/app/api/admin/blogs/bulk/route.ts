import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { bulkSetStatus, bulkSoftDelete } from "@/lib/blog-service";
import { logAudit } from "@/lib/audit-service";

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const action = body?.action as string | undefined;
    const ids = Array.isArray(body?.ids) ? (body.ids as string[]) : [];

    if (!action || ids.length === 0) {
      return NextResponse.json(
        { error: "action and ids are required" },
        { status: 400 }
      );
    }

    let affected = 0;
    switch (action) {
      case "publish":
        affected = await bulkSetStatus(ids, "published");
        break;
      case "unpublish":
        affected = await bulkSetStatus(ids, "draft");
        break;
      case "delete":
        affected = await bulkSoftDelete(ids);
        break;
      default:
        return NextResponse.json({ error: "Unknown action" }, { status: 400 });
    }

    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "bulk",
      entityType: "blog",
      entityId: "",
      entityName: `${action} ${affected} blog${affected !== 1 ? "s" : ""}`,
      diff: { action: { from: null, to: action }, ids: { from: null, to: ids } },
    });

    return NextResponse.json({ success: true, affected });
  } catch {
    return NextResponse.json({ error: "Bulk action failed" }, { status: 400 });
  }
}
