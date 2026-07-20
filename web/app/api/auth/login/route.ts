import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/definitions";
import {
  findAdminByEmail,
  verifyPassword,
  updateLastLogin,
} from "@/lib/admin-service";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;
    const user = await findAdminByEmail(email);

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Deactivated accounts cannot sign in. Treat a missing flag as active so
    // pre-existing accounts (seeded before this field) are not locked out.
    if (user.isActive === false) {
      return NextResponse.json(
        { error: "This account has been deactivated" },
        { status: 403 }
      );
    }

    const role = user.role ?? "admin";
    await createSession(
      user._id!.toString(),
      user.displayName,
      user.email,
      role
    );
    await updateLastLogin(user._id!.toString());

    return NextResponse.json({
      success: true,
      user: { displayName: user.displayName, email: user.email, role },
    });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
