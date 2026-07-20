import { requireRole } from "@/lib/dal";
import { listAuditLogs } from "@/lib/audit-service";
import { PageHeader } from "@/components/admin/form-fields";
import { AuditLogTable } from "@/components/admin/audit-log-table";

export default async function AuditLogPage() {
  await requireRole(["super-admin", "admin"]);
  const initial = await listAuditLogs({ page: 1, limit: 20 });

  return (
    <>
      <PageHeader
        title="Audit Log"
        subtitle="A record of every create, update, delete, restore, and bulk action."
      />
      <AuditLogTable
        initialLogs={initial.logs.map((log) => ({ ...log, _id: log._id ?? "" }))}
        initialTotal={initial.total}
        initialTotalPages={initial.totalPages}
      />
    </>
  );
}
