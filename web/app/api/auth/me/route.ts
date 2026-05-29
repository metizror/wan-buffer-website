import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { verifySession } from "@/lib/dal";
import { getDb } from "@/lib/mongodb";

export async function GET() {
  const session = await verifySession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const db = await getDb();
  const user = await db
    .collection("admin_users")
    .findOne(
      { _id: new ObjectId(session.userId) as unknown as undefined },
      { projection: { passwordHash: 0 } }
    );

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      _id: user._id.toString(),
      displayName: user.displayName,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
}
