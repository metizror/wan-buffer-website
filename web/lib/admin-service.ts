import "server-only";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type { AdminUser, Role } from "./definitions";

function col() {
  return getDb().then((db) => db.collection<AdminUser>("admin_users"));
}

export async function findAdminByEmail(
  email: string
): Promise<AdminUser | null> {
  const c = await col();
  return c.findOne({ email }) as Promise<AdminUser | null>;
}

export async function createAdmin(
  displayName: string,
  email: string,
  password: string,
  role: Role = "admin"
): Promise<void> {
  const c = await col();

  const passwordHash = await bcrypt.hash(password, 12);
  const now = new Date();
  await c.insertOne({
    displayName,
    email,
    passwordHash,
    role,
    isActive: true,
    lastLoginAt: null,
    createdAt: now,
    updatedAt: now,
  } as AdminUser);

  await c.createIndex({ email: 1 }, { unique: true });
}

export async function updateLastLogin(userId: string): Promise<void> {
  const c = await col();
  await c.updateOne(
    { _id: new ObjectId(userId) as unknown as AdminUser["_id"] },
    { $set: { lastLoginAt: new Date() } }
  );
}

export async function verifyPassword(
  plainPassword: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hash);
}
