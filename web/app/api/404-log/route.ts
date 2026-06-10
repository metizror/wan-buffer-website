import { NextResponse, type NextRequest } from "next/server";
import { logNotFound } from "@/lib/notfound-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const url = typeof body.url === "string" ? body.url : "";

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    await logNotFound({
      url,
      referrer: body.referrer ?? request.headers.get("referer"),
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        request.headers.get("x-real-ip"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to log" }, { status: 500 });
  }
}
