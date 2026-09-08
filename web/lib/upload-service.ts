import "server-only";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

/**
 * Where uploaded files live on disk.
 *
 * Deliberately NOT under `public/`: Next.js resolves that directory when the
 * build is produced, so anything written there at runtime is never served. It
 * also has to sit outside the release directory, or blue/green deploys would
 * drop every upload on the next release. Set `UPLOAD_DIR` to an absolute path
 * on a persistent volume in production; the default only suits local dev.
 */
export const UPLOADS_DIR =
  process.env.UPLOAD_DIR || path.join(process.cwd(), "var", "uploads");

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
 * Persist an uploaded image under `UPLOADS_DIR/YYYY/MM/` and return its
 * site-relative URL. Throws on unsupported type or oversize input.
 */
export async function saveUploadedImage(file: File): Promise<SavedUpload> {
  const ext = ALLOWED[file.type];
  if (!ext) {
    throw new Error(
      "Unsupported file type. Allowed: JPG, JPEG, PNG, WebP."
    );
  }
  if (file.size > MAX_BYTES) {
    throw new Error("File is too large (max 8 MB).");
  }

  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const dir = path.join(UPLOADS_DIR, year, month);
  await mkdir(dir, { recursive: true });

  const unique = crypto.randomUUID().slice(0, 8);
  const filename = `${slugifyBase(file.name)}-${unique}.${ext}`;

  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), bytes);

  return {
    url: `${UPLOADS_URL_PREFIX}/${year}/${month}/${filename}`,
    name: file.name,
    size: file.size,
    type: file.type,
  };
}
