import { getAllRedirects } from "@/lib/redirect-service";
import { RedirectsTable } from "@/components/admin/redirects-table";

export default async function RedirectsPage() {
  const redirects = await getAllRedirects();
  const activeCount = redirects.filter((r) => r.isActive).length;

  return (
    <>
      <div className="adm-stats">
        <div className="adm-stat-card">
          <h3>Total Redirects</h3>
          <div className="adm-stat-value">{redirects.length}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Active</h3>
          <div className="adm-stat-value">{activeCount}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Inactive</h3>
          <div className="adm-stat-value">{redirects.length - activeCount}</div>
        </div>
      </div>

      <RedirectsTable initialRedirects={JSON.parse(JSON.stringify(redirects))} />
    </>
  );
}
