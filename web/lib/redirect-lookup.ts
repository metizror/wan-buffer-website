import { getDb } from "./mongodb";

export async function lookupRedirect(pathname: string): Promise<{
  newUrl: string;
  isPermanent: boolean;
} | null> {
  let normalized = pathname.trim();
  if (!normalized.startsWith("/")) normalized = "/" + normalized;
  if (normalized.length > 1 && normalized.endsWith("/"))
    normalized = normalized.slice(0, -1);

  const db = await getDb();
  const doc = await db
    .collection("redirects")
    .findOne({ oldUrl: normalized, isActive: true });

  if (!doc) return null;
  return {
    newUrl: doc.newUrl as string,
    isPermanent: doc.isPermanent as boolean,
  };
}
