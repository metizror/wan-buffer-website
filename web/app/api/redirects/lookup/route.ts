import { NextResponse, type NextRequest } from "next/server";
import { findRedirectByUrl } from "@/lib/redirect-service";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ redirect: null });
  }

  const redirect = await findRedirectByUrl(url);
  if (!redirect) {
    return NextResponse.json({ redirect: null });
  }

  return NextResponse.json({
    redirect: { newUrl: redirect.newUrl, isPermanent: redirect.isPermanent },
  });
}
