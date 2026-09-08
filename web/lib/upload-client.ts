/** Client-side counterpart to `upload-service`: same limits, checked before the
 *  bytes ever leave the browser so bad files fail instantly. */

export const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // keep in sync with upload-service
const UPLOAD_TIMEOUT_MS = 60_000;

// Mirrors upload-service; SVG is excluded there for the same XSS reason.
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

/** Human-readable reason the file can't be uploaded, or "" when it's fine. */
export function checkImageFile(file: File): string {
  if (!ALLOWED_TYPES.includes(file.type)) {
    return "Unsupported file type. Allowed: JPG, JPEG, PNG, WebP.";
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    const mb = (file.size / 1024 / 1024).toFixed(1);
    return `File is too large (${mb} MB). The limit is 8 MB.`;
  }
  return "";
}

/**
 * POST a picked file to the upload API and return its saved, site-relative URL.
 *
 * Aborts rather than spinning forever if the request stalls, and reads the
 * status before the body so a proxy's HTML error page (502/504/413) surfaces as
 * a real message instead of a JSON parse failure.
 */
export async function uploadImage(file: File): Promise<string> {
  const reason = checkImageFile(file);
  if (reason) throw new Error(reason);

  const fd = new FormData();
  fd.append("file", file);

  let res: Response;
  try {
    res = await fetch("/api/upload", {
      method: "POST",
      body: fd,
      signal: AbortSignal.timeout(UPLOAD_TIMEOUT_MS),
    });
  } catch (err) {
    if (err instanceof DOMException && err.name === "TimeoutError") {
      throw new Error(
        "Upload timed out after 60s. The server or proxy never responded."
      );
    }
    throw new Error("Upload failed: could not reach the server.");
  }

  if (!res.ok) {
    // Our route answers JSON; a proxy in front of it may not.
    const body = await res.text();
    let message = "";
    try {
      message = (JSON.parse(body) as { error?: string }).error ?? "";
    } catch {
      /* not JSON — fall through to the status line */
    }
    if (res.status === 401) message ||= "Your session expired. Sign in again.";
    if (res.status === 413) message ||= "The server rejected the file as too large.";
    throw new Error(message || `Upload failed (HTTP ${res.status}).`);
  }

  const data = (await res.json()) as { url?: string };
  if (!data.url) throw new Error("Upload succeeded but returned no URL.");
  return data.url;
}

/** `accept` for file inputs, so the picker never offers a type we reject. */
export const IMAGE_ACCEPT = ALLOWED_TYPES.join(",");
