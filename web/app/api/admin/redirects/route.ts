import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import { getAllRedirects, createRedirect } from "@/lib/redirect-service";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const search = request.nextUrl.searchParams.get("search") || undefined;
  const redirects = await getAllRedirects({ search });
  return NextResponse.json({ redirects });
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const oldUrl = typeof body.oldUrl === "string" ? body.oldUrl.trim() : "";
    const newUrl = typeof body.newUrl === "string" ? body.newUrl.trim() : "";

    if (!oldUrl || !newUrl) {
      return NextResponse.json(
        { error: "Both old URL and new URL are required" },
        { status: 400 }
      );
    }

    if (oldUrl === newUrl) {
      return NextResponse.json(
        { error: "Old URL and new URL cannot be the same" },
        { status: 400 }
      );
    }

    const redirect = await createRedirect({
      oldUrl,
      newUrl,
      isPermanent: body.isPermanent ?? true,
      isActive: body.isActive ?? true,
    });

    return NextResponse.json({ redirect }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A redirect for this old URL already exists"
        : "Failed to create redirect";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
