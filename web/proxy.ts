import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { lookupRedirect } from "@/lib/redirect-lookup";

const secretKey = process.env.SESSION_SECRET!;
const encodedKey = new TextEncoder().encode(secretKey);

async function decryptToken(token: string | undefined) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as { userId?: string };
  } catch {
    return null;
  }
}

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // ── Admin auth guard ──
  if (path.startsWith("/admin") && !path.startsWith("/admin/login")) {
    const token = request.cookies.get("session")?.value;
    const session = await decryptToken(token);
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  if (path === "/admin/login") {
    const token = request.cookies.get("session")?.value;
    const session = await decryptToken(token);
    if (session?.userId) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // ── URL redirect lookup (skip API, admin, static, and file requests) ──
  if (
    !path.startsWith("/api/") &&
    !path.startsWith("/admin") &&
    !path.startsWith("/_next/") &&
    !path.includes(".")
  ) {
    try {
      const match = await lookupRedirect(path);
      if (match) {
        const destination = match.newUrl.startsWith("http")
          ? match.newUrl
          : new URL(match.newUrl, request.url).toString();

        return NextResponse.redirect(destination, {
          status: match.isPermanent ? 301 : 302,
        });
      }
    } catch {
      // If lookup fails, continue normally
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
