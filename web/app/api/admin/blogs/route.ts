import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import { getPaginatedBlogs, createBlog } from "@/lib/blog-service";
import { blogFormSchema } from "@/lib/definitions";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const search = searchParams.get("search") || undefined;
  const category = searchParams.get("category") || undefined;

  const result = await getPaginatedBlogs({ page, limit, search, category });
  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = blogFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const blog = await createBlog(parsed.data);
    return NextResponse.json({ blog }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A blog with this slug already exists"
        : "Failed to create blog";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
