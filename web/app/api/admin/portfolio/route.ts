import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import { listPortfolio, createPortfolioItem } from "@/lib/portfolio-service";
import { logAudit } from "@/lib/audit-service";
import {
  portfolioFormSchema,
  PORTFOLIO_TYPES,
  type PortfolioType,
} from "@/lib/definitions";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const typeParam = searchParams.get("type") || undefined;
  const type = PORTFOLIO_TYPES.includes(typeParam as PortfolioType)
    ? (typeParam as PortfolioType)
    : undefined;
  const category = searchParams.get("category") || undefined;

  const items = await listPortfolio({ type, category });
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = portfolioFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const item = await createPortfolioItem(parsed.data);
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "create",
      entityType: "portfolio",
      entityId: item._id ?? "",
      entityName: item.title,
    });
    return NextResponse.json({ item }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A portfolio item with this slug already exists"
        : "Failed to create portfolio item";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
