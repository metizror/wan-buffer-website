import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { verifySession } from "@/lib/dal";
import { getDb } from "@/lib/mongodb";
import { createSession } from "@/lib/session";

const updateProfileSchema = z.object({
  displayName: z.string().min(3, "Display name must be at least 3 characters").optional(),
  currentPassword: z.string().optional(),
  newPassword: z.string().min(6, "New password must be at least 6 characters").optional(),
}).refine(
  (data) => {
    if (data.newPassword && !data.currentPassword) return false;
    return true;
  },
  { message: "Current password is required to set a new password", path: ["currentPassword"] }
);

export async function PUT(request: Request) {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const parsed = updateProfileSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { displayName, currentPassword, newPassword } = parsed.data;
    const db = await getDb();
    const col = db.collection("admin_users");
    const user = await col.findOne({ _id: new ObjectId(session.userId) as unknown as undefined });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updates: Record<string, unknown> = { updatedAt: new Date() };

    if (displayName) {
      updates.displayName = displayName;
    }

    if (newPassword && currentPassword) {
      const valid = await bcrypt.compare(currentPassword, user.passwordHash);
      if (!valid) {
        return NextResponse.json(
          { error: "Current password is incorrect" },
          { status: 400 }
        );
      }
      updates.passwordHash = await bcrypt.hash(newPassword, 12);
    }

    await col.updateOne(
      { _id: new ObjectId(session.userId) as unknown as undefined },
      { $set: updates }
    );

    // Refresh session if displayName changed
    if (displayName) {
      await createSession(session.userId, displayName);
    }

    return NextResponse.json({ success: true, message: "Profile updated successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 });
  }
}
