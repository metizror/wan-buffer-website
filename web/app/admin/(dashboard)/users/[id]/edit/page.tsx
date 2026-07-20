import { notFound, redirect } from "next/navigation";
import { verifySession } from "@/lib/dal";
import { getAdminById } from "@/lib/user-service";
import { UserForm } from "@/components/admin/user-form";

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  const isSelf = session.userId === id;

  // Guard: super-admin may edit anyone; everyone else only their own account.
  if (session.role !== "super-admin" && !isSelf) {
    redirect("/admin");
  }

  const user = await getAdminById(id);
  if (!user) notFound();

  return (
    <>
      <div className="adm-page-header">
        <h1>Edit User</h1>
      </div>
      <UserForm
        mode="edit"
        currentUserRole={session.role}
        isSelf={isSelf}
        initialData={{
          _id: user._id,
          displayName: user.displayName,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
        }}
      />
    </>
  );
}
