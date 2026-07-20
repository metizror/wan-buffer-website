import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { setSeoActive } from "@/lib/seo-service";
import { logAudit } from "@/lib/audit-service";

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const ids: unknown = body?.ids;
    const isActive: unknown = body?.isActive;

    if (
      !Array.isArray(ids) ||
      ids.some((id) => typeof id !== "string") ||
      typeof isActive !== "boolean"
    ) {
      return NextResponse.json(
        { error: "Expected { ids: string[], isActive: boolean }" },
        { status: 400 }
      );
    }

    const modified = await setSeoActive(ids as string[], isActive);
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "bulk",
      entityType: "seo",
      entityId: "",
      entityName: `${isActive ? "Activate" : "Deactivate"} ${modified} page${
        modified !== 1 ? "s" : ""
      }`,
      diff: {
        isActive: { from: null, to: isActive },
        ids: { from: null, to: ids },
      },
    });
    return NextResponse.json({ modified });
  } catch {
    return NextResponse.json(
      { error: "Failed to update SEO pages" },
      { status: 400 }
    );
  }
}
