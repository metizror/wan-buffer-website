import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import {
  getPortfolioById,
  updatePortfolioItem,
  softDeletePortfolioItem,
} from "@/lib/portfolio-service";
import { logAudit, shallowDiff } from "@/lib/audit-service";
import { portfolioFormSchema } from "@/lib/definitions";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const item = await getPortfolioById(id);
  if (!item) {
    return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
  }

  return NextResponse.json({ item });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const parsed = portfolioFormSchema.partial().safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const before = await getPortfolioById(id);
    const item = await updatePortfolioItem(id, parsed.data);
    if (!item) {
      return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
    }

    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "update",
      entityType: "portfolio",
      entityId: id,
      entityName: item.title,
      diff: before
        ? shallowDiff(
            before as unknown as Record<string, unknown>,
            item as unknown as Record<string, unknown>
          )
        : null,
    });

    return NextResponse.json({ item });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A portfolio item with this slug already exists"
        : "Failed to update portfolio item";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const existing = await getPortfolioById(id);
  const deleted = await softDeletePortfolioItem(id);
  if (!deleted) {
    return NextResponse.json({ error: "Portfolio item not found" }, { status: 404 });
  }

  await logAudit({
    userId: session.userId,
    userEmail: session.email,
    action: "delete",
    entityType: "portfolio",
    entityId: id,
    entityName: existing?.title ?? id,
  });

  return NextResponse.json({ success: true });
}
