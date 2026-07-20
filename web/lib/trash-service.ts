import "server-only";
import {
  listDeletedBlogs,
  restoreBlog,
  hardDeleteBlog,
} from "./blog-service";
import {
  listDeletedPortfolio,
  restorePortfolioItem,
  hardDeletePortfolioItem,
} from "./portfolio-service";

/** Entity types that participate in the trash (soft-delete-aware collections). */
export const TRASH_ENTITY_TYPES = ["blog", "portfolio"] as const;
export type TrashEntityType = (typeof TRASH_ENTITY_TYPES)[number];

export interface TrashItem {
  entityType: TrashEntityType;
  id: string;
  name: string;
  /** Secondary descriptor, e.g. blog category or portfolio type. */
  meta: string;
  deletedAt: Date | null;
}

export function isTrashEntityType(value: unknown): value is TrashEntityType {
  return (
    typeof value === "string" &&
    (TRASH_ENTITY_TYPES as readonly string[]).includes(value)
  );
}

/** All soft-deleted items across trash-aware collections, newest-deleted first. */
export async function listTrash(): Promise<TrashItem[]> {
  const [blogs, portfolio] = await Promise.all([
    listDeletedBlogs(),
    listDeletedPortfolio(),
  ]);

  const items: TrashItem[] = [
    ...blogs.map((b) => ({
      entityType: "blog" as const,
      id: b._id as string,
      name: b.title,
      meta: b.category,
      deletedAt: b.deletedAt,
    })),
    ...portfolio.map((p) => ({
      entityType: "portfolio" as const,
      id: p._id as string,
      name: p.title,
      meta: p.type,
      deletedAt: p.deletedAt,
    })),
  ];

  return items.sort((a, b) => {
    const ta = a.deletedAt ? new Date(a.deletedAt).getTime() : 0;
    const tb = b.deletedAt ? new Date(b.deletedAt).getTime() : 0;
    return tb - ta;
  });
}

/** Restore a soft-deleted item (clears deletedAt). */
export async function restoreItem(
  entityType: TrashEntityType,
  id: string
): Promise<boolean> {
  if (entityType === "blog") return restoreBlog(id);
  return restorePortfolioItem(id);
}

/** Permanently remove a soft-deleted item. */
export async function purgeItem(
  entityType: TrashEntityType,
  id: string
): Promise<boolean> {
  if (entityType === "blog") return hardDeleteBlog(id);
  return hardDeletePortfolioItem(id);
}
