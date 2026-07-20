import { NextResponse, type NextRequest } from "next/server";
import { verifySession, hasRole } from "@/lib/dal";
import { listAuditLogs } from "@/lib/audit-service";
import { AUDIT_ACTIONS, type AuditAction } from "@/lib/definitions";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!hasRole(session, ["super-admin", "admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const entityType = searchParams.get("entityType") || undefined;
  const search = searchParams.get("search") || undefined;
  const actionParam = searchParams.get("action") || undefined;
  const action = AUDIT_ACTIONS.includes(actionParam as AuditAction)
    ? (actionParam as AuditAction)
    : undefined;

  const result = await listAuditLogs({
    page,
    limit,
    entityType,
    action,
    search,
  });
  return NextResponse.json(result);
}
