import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { ALLOWED, UPLOADS_DIR } from "@/lib/upload-service";

// Files appear on disk after the build, so this can never be prerendered.
export const dynamic = "force-dynamic";

/** Extension -> Content-Type, inverted from the upload allowlist. */
const CONTENT_TYPES: Record<string, string> = Object.fromEntries(
  Object.entries(ALLOWED).map(([mime, ext]) => [ext, mime])
);

// Deliberately strict: the filenames we generate are slug + uuid + extension,
// so anything else is either an old link or someone probing for traversal.
const SEGMENT = /^[A-Za-z0-9._-]+$/;

/**
 * Serve an uploaded image.
 *
 * `public/` is resolved at build time, so uploads written at runtime are not
 * reachable through it — they are read from `UPLOADS_DIR` here instead.
 */
export async function GET(
  _request: Request,
  ctx: RouteContext<"/uploads/[...path]">
) {
  const { path: segments } = await ctx.params;

  if (
    segments.length === 0 ||
    segments.some((s) => s === "." || s === ".." || !SEGMENT.test(s))
  ) {
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(segments[segments.length - 1]).slice(1).toLowerCase();
  const contentType = CONTENT_TYPES[ext];
  if (!contentType) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(UPLOADS_DIR, ...segments);
  // Belt and braces: the segment check already rules traversal out, but resolve
  // and compare anyway so a future change to that regex can't open a hole.
  const root = path.resolve(UPLOADS_DIR);
  if (!path.resolve(filePath).startsWith(root + path.sep)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const info = await stat(filePath);
    if (!info.isFile()) return new Response("Not found", { status: 404 });

    const bytes = await readFile(filePath);
    return new Response(new Uint8Array(bytes), {
      headers: {
        "Content-Type": contentType,
        "Content-Length": String(info.size),
        // Filenames carry a uuid, so a given URL always holds the same bytes.
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
