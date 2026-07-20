import "server-only";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";
import { getDb } from "./mongodb";
import type {
  AdminUser,
  Role,
  SafeAdminUser,
  UserCreateData,
  UserUpdateData,
} from "./definitions";

function col() {
  return getDb().then((db) => db.collection<AdminUser>("admin_users"));
}

function oid(id: string) {
  return new ObjectId(id) as unknown as AdminUser["_id"];
}

/** Strip the password hash and stringify the _id for a document returned to callers. */
function serialize(doc: Omit<AdminUser, "passwordHash"> & { _id?: unknown }): SafeAdminUser {
  return { ...doc, _id: doc._id?.toString() } as SafeAdminUser;
}

/** True for a MongoDB duplicate-key (unique index) violation. */
function isDuplicateKeyError(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    (err as { code?: number }).code === 11000
  );
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Count active super-admins, optionally excluding one id (the one being changed). */
export async function countActiveSuperAdmins(excludeId?: string): Promise<number> {
  const c = await col();
  const filter: Record<string, unknown> = { role: "super-admin", isActive: true };
  if (excludeId && ObjectId.isValid(excludeId)) {
    filter._id = { $ne: oid(excludeId) };
  }
  return c.countDocuments(filter);
}

/**
 * Guard against an action that would leave zero active super-admins. `target` is
 * the account being changed; `willBeActiveSuperAdmin` is its state after the
 * change (false for a delete). Throws when the target is the last active
 * super-admin and the change would drop it below one.
 */
async function assertNotLastActiveSuperAdmin(
  target: Pick<SafeAdminUser, "_id" | "role" | "isActive">,
  willBeActiveSuperAdmin: boolean
): Promise<void> {
  const isCurrentlyActiveSuper =
    target.role === "super-admin" && target.isActive;
  if (isCurrentlyActiveSuper && !willBeActiveSuperAdmin) {
    const others = await countActiveSuperAdmins(target._id);
    if (others === 0) {
      throw new Error("Cannot remove the last active super-admin");
    }
  }
}

export async function listAdmins(
  options: { role?: Role; search?: string } = {}
): Promise<SafeAdminUser[]> {
  const c = await col();
  const filter: Record<string, unknown> = {};
  if (options.role) filter.role = options.role;
  if (options.search?.trim()) {
    const escaped = escapeRegex(options.search.trim());
    filter.$or = [
      { displayName: { $regex: escaped, $options: "i" } },
      { email: { $regex: escaped, $options: "i" } },
    ];
  }
  const docs = await c
    .find(filter, { projection: { passwordHash: 0 } })
    .sort({ createdAt: -1 })
    .toArray();
  return docs.map((d) => serialize(d as Omit<AdminUser, "passwordHash">));
}

export async function getAdminById(id: string): Promise<SafeAdminUser | null> {
  if (!ObjectId.isValid(id)) return null;
  const c = await col();
  const doc = await c.findOne(
    { _id: oid(id) },
    { projection: { passwordHash: 0 } }
  );
  return doc ? serialize(doc as Omit<AdminUser, "passwordHash">) : null;
}

export async function createAdminUser(
  data: UserCreateData
): Promise<SafeAdminUser> {
  const c = await col();
  await c.createIndex({ email: 1 }, { unique: true });

  const passwordHash = await bcrypt.hash(data.password, 12);
  const now = new Date();
  const doc = {
    displayName: data.displayName,
    email: data.email,
    passwordHash,
    role: data.role,
    isActive: data.isActive ?? true,
    lastLoginAt: null,
    createdAt: now,
    updatedAt: now,
  } as AdminUser;

  try {
    const result = await c.insertOne(doc);
    return serialize({
      _id: result.insertedId,
      displayName: doc.displayName,
      email: doc.email,
      role: doc.role,
      isActive: doc.isActive,
      lastLoginAt: doc.lastLoginAt,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    });
  } catch (err) {
    if (isDuplicateKeyError(err)) {
      throw new Error("A user with this email already exists");
    }
    throw err;
  }
}

export async function updateAdminUser(
  id: string,
  data: UserUpdateData
): Promise<SafeAdminUser | null> {
  if (!ObjectId.isValid(id)) return null;
  const c = await col();

  const target = await getAdminById(id);
  if (!target) return null;

  // Block a role/active change that would remove the last active super-admin.
  const resultingRole = data.role ?? target.role;
  const resultingActive =
    data.isActive === undefined ? target.isActive : data.isActive;
  await assertNotLastActiveSuperAdmin(
    target,
    resultingRole === "super-admin" && resultingActive
  );

  const set: Record<string, unknown> = { updatedAt: new Date() };
  if (data.displayName !== undefined) set.displayName = data.displayName;
  if (data.email !== undefined) set.email = data.email;
  if (data.role !== undefined) set.role = data.role;
  if (data.isActive !== undefined) set.isActive = data.isActive;
  // Never overwrite the hash with an empty password — blank means "keep current".
  if (data.password) set.passwordHash = await bcrypt.hash(data.password, 12);

  try {
    const result = await c.findOneAndUpdate(
      { _id: oid(id) },
      { $set: set },
      { returnDocument: "after", projection: { passwordHash: 0 } }
    );
    return result ? serialize(result as Omit<AdminUser, "passwordHash">) : null;
  } catch (err) {
    if (isDuplicateKeyError(err)) {
      throw new Error("A user with this email already exists");
    }
    throw err;
  }
}

export async function setAdminActive(
  id: string,
  isActive: boolean
): Promise<SafeAdminUser | null> {
  return updateAdminUser(id, { isActive });
}

export async function deleteAdminUser(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const c = await col();

  const target = await getAdminById(id);
  if (!target) return false;

  // A deleted account is no longer an active super-admin.
  await assertNotLastActiveSuperAdmin(target, false);

  const result = await c.deleteOne({ _id: oid(id) });
  return result.deletedCount === 1;
}
