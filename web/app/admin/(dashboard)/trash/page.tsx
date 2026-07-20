import { requireRole } from "@/lib/dal";
import { listTrash } from "@/lib/trash-service";
import { PageHeader } from "@/components/admin/form-fields";
import { TrashTable } from "@/components/admin/trash-table";

export default async function TrashPage() {
  const session = await requireRole(["super-admin", "admin"]);
  const items = await listTrash();

  return (
    <>
      <PageHeader
        title="Trash"
        subtitle="Soft-deleted blogs and portfolio items. Restore them, or purge permanently."
      />
      <TrashTable initialItems={items} currentUserRole={session.role} />
    </>
  );
}
