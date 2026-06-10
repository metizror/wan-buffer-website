import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import {
  getPaginatedNotFoundLogs,
  getNotFoundStats,
  clearNotFoundLogs,
} from "@/lib/notfound-service";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const search = searchParams.get("search") || undefined;

  const [result, stats] = await Promise.all([
    getPaginatedNotFoundLogs({ page, limit, search }),
    getNotFoundStats(),
  ]);

  return NextResponse.json({ ...result, stats });
}

export async function DELETE() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await clearNotFoundLogs();
  return NextResponse.json({ ok: true });
}
