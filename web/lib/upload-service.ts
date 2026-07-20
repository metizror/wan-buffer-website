import "server-only";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB

const ALLOWED: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
  "image/avif": "avif",
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
 * Persist an uploaded image under `public/uploads/YYYY/MM/` and return its
 * site-relative URL. Throws on unsupported type or oversize input.
 */
export async function saveUploadedImage(file: File): Promise<SavedUpload> {
  const ext = ALLOWED[file.type];
  if (!ext) {
    throw new Error(
      "Unsupported file type. Allowed: JPG, PNG, WebP, GIF, SVG, AVIF."
    );
  }
  if (file.size > MAX_BYTES) {
    throw new Error("File is too large (max 8 MB).");
  }

  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const dir = path.join(process.cwd(), "public", "uploads", year, month);
  await mkdir(dir, { recursive: true });

  const unique = crypto.randomUUID().slice(0, 8);
  const filename = `${slugifyBase(file.name)}-${unique}.${ext}`;

  const bytes = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(dir, filename), bytes);

  return {
    url: `/uploads/${year}/${month}/${filename}`,
    name: file.name,
    size: file.size,
    type: file.type,
  };
}
