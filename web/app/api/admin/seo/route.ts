import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import {
  syncSeoPages,
  listSeoPages,
  getSeoStats,
} from "@/lib/seo-service";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const category = searchParams.get("category") || undefined;
  const search = searchParams.get("search") || undefined;

  // Keep the catalogue fresh: seed rows for any new blogs/apps/pages first.
  await syncSeoPages();

  const [pages, stats] = await Promise.all([
    listSeoPages({ category, search }),
    getSeoStats(),
  ]);

  return NextResponse.json({ pages, stats });
}
