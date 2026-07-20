import { NextResponse } from "next/server";
import { verifySession, hasRole } from "@/lib/dal";
import { purgeItem, isTrashEntityType } from "@/lib/trash-service";
import { logAudit } from "@/lib/audit-service";

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Permanent deletion is super-admin only.
  if (!hasRole(session, ["super-admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { entityType, id } = body ?? {};
    if (!isTrashEntityType(entityType) || typeof id !== "string" || !id) {
      return NextResponse.json(
        { error: "Expected { entityType: 'blog' | 'portfolio', id: string }" },
        { status: 400 }
      );
    }

    const purged = await purgeItem(entityType, id);
    if (!purged) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "delete",
      entityType,
      entityId: id,
      entityName: `Purged ${entityType} (permanent)`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to purge item" }, { status: 400 });
  }
}
