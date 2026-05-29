import { NextResponse, type NextRequest } from "next/server";
import { getPaginatedBlogs } from "@/lib/blog-service";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const search = searchParams.get("search") || undefined;
  const category = searchParams.get("category") || undefined;

  const result = await getPaginatedBlogs({
    page,
    limit,
    search,
    category,
    published: true,
  });

  return NextResponse.json(result);
}
