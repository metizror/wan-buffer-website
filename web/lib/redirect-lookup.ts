import { getDb } from "./mongodb";

type RedirectHit = { newUrl: string; isPermanent: boolean } | null;

const redirectCache = new Map<string, { at: number; value: RedirectHit }>();
const CACHE_TTL_MS = 60_000;
const LOOKUP_TIMEOUT_MS = 80;

export async function lookupRedirect(pathname: string): Promise<{
  newUrl: string;
  isPermanent: boolean;
} | null> {
  let normalized = pathname.trim();
  if (!normalized.startsWith("/")) normalized = "/" + normalized;
  if (normalized.length > 1 && normalized.endsWith("/"))
    normalized = normalized.slice(0, -1);

  const cached = redirectCache.get(normalized);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return cached.value;
  }

  const lookup = async (): Promise<RedirectHit> => {
    const db = await getDb();
    const doc = await db
      .collection("redirects")
      .findOne({ oldUrl: normalized, isActive: true });
    if (!doc) return null;
    return {
      newUrl: doc.newUrl as string,
      isPermanent: doc.isPermanent as boolean,
    };
  };

  const value = await Promise.race([
    lookup(),
    new Promise<RedirectHit>((resolve) =>
      setTimeout(() => resolve(null), LOOKUP_TIMEOUT_MS),
    ),
  ]);

  redirectCache.set(normalized, { at: Date.now(), value });
  return value;
}
