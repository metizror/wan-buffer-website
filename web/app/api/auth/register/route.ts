import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/definitions";
import { createAdmin, findAdminByEmail } from "@/lib/admin-service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { displayName, email, password } = parsed.data;

    const existing = await findAdminByEmail(email);
    if (existing) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    await createAdmin(displayName, email, password);

    return NextResponse.json({
      success: true,
      message: `Admin "${displayName}" created successfully`,
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}
