import Link from "next/link";
import { requireRole } from "@/lib/dal";
import { listAdmins } from "@/lib/user-service";
import { PageHeader } from "@/components/admin/form-fields";
import { UsersTable } from "@/components/admin/users-table";

export default async function UsersPage() {
  const session = await requireRole(["super-admin", "admin"]);
  const users = await listAdmins();
  const isSuperAdmin = session.role === "super-admin";

  return (
    <>
      <PageHeader
        title="Users"
        subtitle="Manage admin accounts, roles, and access."
        actions={
          isSuperAdmin ? (
            <Link
              href="/admin/users/new"
              className="adm-btn adm-btn-primary adm-btn-sm"
            >
              + New user
            </Link>
          ) : undefined
        }
      />
      <UsersTable
        initialUsers={users}
        currentUserId={session.userId}
        currentUserRole={session.role}
      />
    </>
  );
}
