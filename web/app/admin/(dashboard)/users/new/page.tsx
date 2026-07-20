import { requireRole } from "@/lib/dal";
import { UserForm } from "@/components/admin/user-form";

export default async function NewUserPage() {
  await requireRole(["super-admin"]);

  return (
    <>
      <div className="adm-page-header">
        <h1>New User</h1>
      </div>
      <UserForm mode="create" currentUserRole="super-admin" isSelf={false} />
    </>
  );
}
