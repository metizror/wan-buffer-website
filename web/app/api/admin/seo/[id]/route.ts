import { NextResponse } from "next/server";
import { verifySession } from "@/lib/dal";
import { getSeoPageById, updateSeoPage } from "@/lib/seo-service";
import { logAudit, shallowDiff } from "@/lib/audit-service";
import { seoPageUpdateSchema } from "@/lib/definitions";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const page = await getSeoPageById(id);
  if (!page) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ page });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();
    const parsed = seoPageUpdateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    // Reject invalid custom JSON-LD before it reaches the page head.
    const jsonld = parsed.data.schemaJsonld?.trim();
    if (jsonld) {
      try {
        JSON.parse(jsonld);
      } catch {
        return NextResponse.json(
          { error: "Custom JSON-LD is not valid JSON" },
          { status: 400 }
        );
      }
    }

    const before = await getSeoPageById(id);
    const page = await updateSeoPage(id, parsed.data);
    if (!page) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "update",
      entityType: "seo",
      entityId: id,
      entityName: page.title || page.slug,
      diff: before
        ? shallowDiff(
            before as unknown as Record<string, unknown>,
            page as unknown as Record<string, unknown>
          )
        : null,
    });
    return NextResponse.json({ page });
  } catch {
    return NextResponse.json(
      { error: "Failed to update SEO page" },
      { status: 400 }
    );
  }
}
