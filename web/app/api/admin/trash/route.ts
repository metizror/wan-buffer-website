import { NextResponse } from "next/server";
import { verifySession, hasRole } from "@/lib/dal";
import { listTrash } from "@/lib/trash-service";

export async function GET() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if (!hasRole(session, ["super-admin", "admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const items = await listTrash();
  return NextResponse.json({ items });
}
