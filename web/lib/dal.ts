import "server-only";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import { getSession } from "./session";
import { getDb } from "./mongodb";
import type { AdminUser, Role, SessionPayload } from "./definitions";

export async function verifySession(): Promise<SessionPayload | null> {
  const session = await getSession();
  if (!session?.userId) return null;
  return session;
}

/**
 * Guard for admin pages/route-handlers. Returns the session when the caller is
 * authenticated AND holds one of the allowed roles. On failure it redirects
 * (login when unauthenticated, dashboard when the role is insufficient) so it
 * can be called at the top of any Server Component.
 *
 * Pass no roles to require only a valid session (any role).
 */
export async function requireRole(
  allowed: Role[] = []
): Promise<SessionPayload> {
  const session = await verifySession();
  if (!session) redirect("/admin/login");
  if (allowed.length > 0 && !allowed.includes(session.role)) {
    redirect("/admin");
  }
  return session;
}

/** True when the session role is one of `allowed` (no redirect). */
export function hasRole(
  session: SessionPayload | null,
  allowed: Role[]
): boolean {
  return !!session && allowed.includes(session.role);
}

/** Load the full admin record for the current session (password hash stripped). */
export async function getCurrentAdmin(): Promise<Omit<
  AdminUser,
  "passwordHash"
> | null> {
  const session = await verifySession();
  if (!session) return null;

  const db = await getDb();
  const user = await db
    .collection<AdminUser>("admin_users")
    .findOne(
      { _id: new ObjectId(session.userId) as unknown as AdminUser["_id"] },
      { projection: { passwordHash: 0 } }
    );

  if (!user) return null;
  return { ...user, _id: user._id?.toString() } as Omit<
    AdminUser,
    "passwordHash"
  >;
}
