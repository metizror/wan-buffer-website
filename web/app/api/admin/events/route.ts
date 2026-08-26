import { NextResponse, type NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import { listEvents, createEvent } from "@/lib/events-service";
import { logAudit } from "@/lib/audit-service";
import { eventFormSchema, EVENT_STATUSES, type EventStatus } from "@/lib/definitions";

export async function GET(request: NextRequest) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = request.nextUrl;
  const statusParam = searchParams.get("status") || undefined;
  const status = EVENT_STATUSES.includes(statusParam as EventStatus)
    ? (statusParam as EventStatus)
    : undefined;
  const category = searchParams.get("category") || undefined;

  const items = await listEvents({ status, category });
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = eventFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const item = await createEvent(parsed.data);
    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "create",
      entityType: "event",
      entityId: item._id ?? "",
      entityName: item.title,
    });
    return NextResponse.json({ item }, { status: 201 });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "An event with this slug already exists"
        : "Failed to create event";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
