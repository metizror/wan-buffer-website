import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import {
  getRedirectById,
  updateRedirect,
  deleteRedirect,
} from "@/lib/redirect-service";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const redirect = await getRedirectById(id);
  if (!redirect) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ redirect });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { id } = await params;
    const body = await request.json();

    const update: Record<string, unknown> = {};
    if (typeof body.oldUrl === "string") update.oldUrl = body.oldUrl.trim();
    if (typeof body.newUrl === "string") update.newUrl = body.newUrl.trim();
    if (typeof body.isPermanent === "boolean") update.isPermanent = body.isPermanent;
    if (typeof body.isActive === "boolean") update.isActive = body.isActive;

    if (update.oldUrl && update.newUrl && update.oldUrl === update.newUrl) {
      return NextResponse.json(
        { error: "Old URL and new URL cannot be the same" },
        { status: 400 }
      );
    }

    const redirect = await updateRedirect(id, update);
    if (!redirect) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json({ redirect });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A redirect for this old URL already exists"
        : "Failed to update redirect";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const ok = await deleteRedirect(id);
  if (!ok) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
