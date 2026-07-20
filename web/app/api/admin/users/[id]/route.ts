import { NextResponse, type NextRequest } from "next/server";
import { verifySession, hasRole } from "@/lib/dal";
import {
  getAdminById,
  updateAdminUser,
  deleteAdminUser,
} from "@/lib/user-service";
import { logAudit, shallowDiff } from "@/lib/audit-service";
import { userUpdateSchema } from "@/lib/definitions";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const isSelf = session.userId === id;
  // View a user: super-admin + admin, or the user themselves.
  if (!hasRole(session, ["super-admin", "admin"]) && !isSelf) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const user = await getAdminById(id);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  return NextResponse.json({ user });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const isSelf = session.userId === id;
  const isSuperAdmin = hasRole(session, ["super-admin"]);

  // Only a super-admin may edit other users; anyone may edit their own profile.
  if (!isSuperAdmin && !isSelf) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const parsed = userUpdateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const data = { ...parsed.data };

    // A non-super-admin editing self cannot change their own role or active flag.
    if (!isSuperAdmin) {
      delete data.role;
      delete data.isActive;
    }

    // No one may deactivate their own account.
    if (isSelf && data.isActive === false) {
      return NextResponse.json(
        { error: "You cannot deactivate your own account" },
        { status: 400 }
      );
    }

    const before = await getAdminById(id);
    const user = await updateAdminUser(id, data);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // shallowDiff runs over SafeAdminUser (no passwordHash) — never leaks secrets.
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "update",
      entityType: "user",
      entityId: id,
      entityName: user.email,
      diff: before
        ? shallowDiff(
            before as unknown as Record<string, unknown>,
            user as unknown as Record<string, unknown>
          )
        : null,
    });
    return NextResponse.json({ user });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to update user";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Delete user: super-admin only.
  if (!hasRole(session, ["super-admin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;

  // Cannot delete your own account.
  if (session.userId === id) {
    return NextResponse.json(
      { error: "You cannot delete your own account" },
      { status: 400 }
    );
  }

  try {
    const existing = await getAdminById(id);
    const deleted = await deleteAdminUser(id);
    if (!deleted) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "delete",
      entityType: "user",
      entityId: id,
      entityName: existing?.email ?? id,
    });
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to delete user";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
