import { ALLOWED, getUploadedImage } from "@/lib/upload-service";

// Images are stored at runtime, so this can never be prerendered.
export const dynamic = "force-dynamic";

/** Extensions we are willing to serve, inverted from the upload allowlist. */
const EXTENSIONS = new Set(Object.values(ALLOWED));

// Deliberately strict: the keys we generate are slug + uuid + extension, so
// anything else is either a dead link or someone probing.
const SEGMENT = /^[A-Za-z0-9._-]+$/;

const notFound = () => new Response("Not found", { status: 404 });

export async function GET(
  _request: Request,
  ctx: RouteContext<"/uploads/[...path]">
) {
  const { path: segments } = await ctx.params;

  if (
    segments.length === 0 ||
    segments.some((s) => s === "." || s === ".." || !SEGMENT.test(s))
  ) {
    return notFound();
  }

  const last = segments[segments.length - 1];
  const ext = last.slice(last.lastIndexOf(".") + 1).toLowerCase();
  if (!EXTENSIONS.has(ext)) return notFound();

  const image = await getUploadedImage(segments.join("/"));
  if (!image) return notFound();

  return new Response(new Uint8Array(image.bytes), {
    headers: {
      // Trust what we recorded at upload time, not the extension in the URL.
      "Content-Type": image.contentType,
      "Content-Length": String(image.size),
      // Keys carry a uuid, so a given URL always holds the same bytes.
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
