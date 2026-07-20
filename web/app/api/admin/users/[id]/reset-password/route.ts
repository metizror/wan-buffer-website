import { NextResponse, type NextRequest } from "next/server";
import { randomBytes } from "crypto";
import { verifySession, hasRole } from "@/lib/dal";
import { updateAdminUser } from "@/lib/user-service";
import { logAudit } from "@/lib/audit-service";
import { passwordResetSchema } from "@/lib/definitions";

/** Generate a strong, URL-safe random password (~16 chars). */
function generatePassword(): string {
  return randomBytes(12).toString("base64url");
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const isSelf = session.userId === id;
  // Super-admin can reset anyone's password; admin/editor only their own.
  if (!hasRole(session, ["super-admin"]) && !isSelf) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    // Body is optional — no body means "generate a random password".
    const body = await request.json().catch(() => ({}));
    const parsed = passwordResetSchema.safeParse(body ?? {});
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const generated = !parsed.data.password;
    const newPassword = parsed.data.password ?? generatePassword();

    const user = await updateAdminUser(id, { password: newPassword });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Log the reset only — password material is deliberately excluded.
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "update",
      entityType: "user",
      entityId: id,
      entityName: user.email,
      diff: { password: { from: null, to: "(reset)" } },
    });

    // Only echo the password back when the server generated it.
    return NextResponse.json({
      success: true,
      password: generated ? newPassword : undefined,
    });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to reset password";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
