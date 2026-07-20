import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { reorderPortfolio } from "@/lib/portfolio-service";

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const id = typeof body.id === "string" ? body.id : "";
    const direction = body.direction === "down" ? "down" : "up";

    if (!id) {
      return NextResponse.json({ error: "Missing item id" }, { status: 400 });
    }

    const moved = await reorderPortfolio(id, direction);
    if (!moved) {
      return NextResponse.json(
        { error: "Nothing to swap (already at the edge)" },
        { status: 200 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to reorder" }, { status: 400 });
  }
}
