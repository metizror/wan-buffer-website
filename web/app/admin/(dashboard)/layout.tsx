import { redirect } from "next/navigation";
import { verifySession } from "@/lib/dal";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { AdminHeader } from "@/components/admin/admin-header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();
  if (!session) redirect("/admin/login");

  return (
    <div className="adm-shell">
      <AdminSidebar role={session.role} />
      <div className="adm-main">
        <AdminHeader username={session.displayName} email={session.email} />
        <div className="adm-content">{children}</div>
      </div>
    </div>
  );
}
