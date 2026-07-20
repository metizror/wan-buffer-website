import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySession } from "@/lib/dal";
import { getBlogById, updateBlog, deleteBlog } from "@/lib/blog-service";
import { logAudit, shallowDiff } from "@/lib/audit-service";
import { blogFormSchema } from "@/lib/definitions";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const blog = await getBlogById(id);
  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json({ blog });
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
    const parsed = blogFormSchema.partial().safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const before = await getBlogById(id);
    const blog = await updateBlog(id, parsed.data);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    await logAudit({
      userId: session.userId,
      userEmail: session.email,
      action: "update",
      entityType: "blog",
      entityId: id,
      entityName: blog.title,
      diff: before
        ? shallowDiff(
            before as unknown as Record<string, unknown>,
            blog as unknown as Record<string, unknown>
          )
        : null,
    });

    return NextResponse.json({ blog });
  } catch (err: unknown) {
    const message =
      err instanceof Error && err.message.includes("duplicate key")
        ? "A blog with this slug already exists"
        : "Failed to update blog";
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
  const existing = await getBlogById(id);
  const deleted = await deleteBlog(id);
  if (!deleted) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  await logAudit({
    userId: session.userId,
    userEmail: session.email,
    action: "delete",
    entityType: "blog",
    entityId: id,
    entityName: existing?.title ?? id,
  });

  return NextResponse.json({ success: true });
}
