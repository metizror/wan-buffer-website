import "server-only";
import { Binary } from "mongodb";
import { getDb } from "./mongodb";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB — well under the 16 MB BSON doc limit

/**
 * Uploaded images live in Mongo, not on disk.
 *
 * The filesystem is not an option here: `public/` is resolved when the build is
 * produced, so runtime writes there are never served, and every other directory
 * sits inside a release that `deploy-release.sh` replaces on the next deploy.
 * Blue/green also runs two instances at once, which would each see only their
 * own uploads. The database is the one store that is already shared by both
 * colors and outlives every release, and it needs no server-side provisioning.
 */
const COLLECTION = "uploads";

/** Public URL prefix these files are served from (see app/uploads/[...path]). */
export const UPLOADS_URL_PREFIX = "/uploads";

// SVG is deliberately absent: it can carry <script>, and anything served from
// /uploads runs on our own origin.
export const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

export interface SavedUpload {
  url: string;
  name: string;
  size: number;
  type: string;
}

/** One stored image. `_id` is the site-relative key, e.g. "2026/09/hero-1a2b3c4d.png". */
interface UploadDocument {
  _id: string;
  data: Binary;
  contentType: string;
  size: number;
  name: string;
  createdAt: Date;
}

function col() {
  return getDb().then((db) => db.collection<UploadDocument>(COLLECTION));
}

function slugifyBase(name: string): string {
  const base = name.replace(/\.[^.]+$/, "");
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 60) || "file"
  );
}

/**
 * Persist an uploaded image under a `YYYY/MM/` key and return its site-relative
 * URL. Throws on unsupported type or oversize input.
 */
export async function saveUploadedImage(file: File): Promise<SavedUpload> {
  const ext = ALLOWED[file.type];
  if (!ext) {
    throw new Error("Unsupported file type. Allowed: JPG, JPEG, PNG, WebP.");
  }
  if (file.size > MAX_BYTES) {
    throw new Error("File is too large (max 8 MB).");
  }

  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const unique = crypto.randomUUID().slice(0, 8);
  const key = `${year}/${month}/${slugifyBase(file.name)}-${unique}.${ext}`;

  const bytes = Buffer.from(await file.arrayBuffer());
  // Re-check after reading: `file.size` is a claim until the bytes are in hand.
  if (bytes.byteLength > MAX_BYTES) {
    throw new Error("File is too large (max 8 MB).");
  }

  await (await col()).insertOne({
    _id: key,
    data: new Binary(bytes),
    contentType: file.type,
    size: bytes.byteLength,
    name: file.name,
    createdAt: now,
  });

  return {
    url: `${UPLOADS_URL_PREFIX}/${key}`,
    name: file.name,
    size: bytes.byteLength,
    type: file.type,
  };
}

/** Look up a stored image by its site-relative key. */
export async function getUploadedImage(key: string) {
  const doc = await (await col()).findOne({ _id: key });
  if (!doc) return null;
  return {
    bytes: doc.data.buffer,
    contentType: doc.contentType,
    size: doc.size,
  };
}
