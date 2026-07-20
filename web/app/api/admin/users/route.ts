import { NextResponse, type NextRequest } from "next/server";
import { verifySession, hasRole } from "@/lib/dal";
import { listAdmins, createAdminUser } from "@/lib/user-service";
import { logAudit } from "@/lib/audit-service";
import { userCreateSchema, ROLES, type Role } from "@/lib/definitions";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // View users list: super-admin + admin only.
  if (!hasRole(session, ["super-admin", "admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { searchParams } = request.nextUrl;
  const roleParam = searchParams.get("role") || undefined;
  const role = ROLES.includes(roleParam as Role) ? (roleParam as Role) : undefined;
  const search = searchParams.get("search") || undefined;

  const users = await listAdmins({ role, search });
  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  // Create user: super-admin only.
  if (!hasRole(session, ["super-admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const parsed = userCreateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const user = await createAdminUser(parsed.data);
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "create",
      entityType: "user",
      entityId: user._id ?? "",
      entityName: user.email,
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to create user";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
