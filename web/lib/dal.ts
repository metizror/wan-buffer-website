import "server-only";
import { getSession } from "./session";
import type { SessionPayload } from "./definitions";

export async function verifySession(): Promise<SessionPayload | null> {
  const session = await getSession();
  if (!session?.userId) return null;
  return session;
}
