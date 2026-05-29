import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

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

  // Protect /admin routes except /admin/login
  if (path.startsWith("/admin") && !path.startsWith("/admin/login")) {
    const token = request.cookies.get("session")?.value;
    const session = await decryptToken(token);
    if (!session?.userId) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // If logged in and visiting /admin/login, redirect to dashboard
  if (path === "/admin/login") {
    const token = request.cookies.get("session")?.value;
    const session = await decryptToken(token);
    if (session?.userId) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
