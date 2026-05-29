import "server-only";
import bcrypt from "bcryptjs";
import { getDb } from "./mongodb";
import type { AdminUser } from "./definitions";

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
  password: string
): Promise<void> {
  const c = await col();

  const passwordHash = await bcrypt.hash(password, 12);
  await c.insertOne({
    displayName,
    email,
    passwordHash,
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  } as AdminUser);

  await c.createIndex({ email: 1 }, { unique: true });
}

export async function verifyPassword(
  plainPassword: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hash);
}
