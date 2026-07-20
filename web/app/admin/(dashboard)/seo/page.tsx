import { requireRole } from "@/lib/dal";
import { syncSeoPages, listSeoPages, getSeoStats } from "@/lib/seo-service";
import { PageHeader } from "@/components/admin/form-fields";
import { SeoTable } from "@/components/admin/seo-table";

export default async function SeoPage() {
  await requireRole([]);

  // Auto-seed any new blogs/apps/case studies/static pages, then load.
  await syncSeoPages();
  const [pages, stats] = await Promise.all([listSeoPages(), getSeoStats()]);

  return (
    <>
      <PageHeader
        title="SEO Manager"
        subtitle="Manage meta tags, social cards, robots directives, schema, and sitemap inclusion for every page."
      />

      <div className="adm-stats">
        <div className="adm-stat-card">
          <h3>Total Pages</h3>
          <div className="adm-stat-value">{stats.total}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Active</h3>
          <div className="adm-stat-value">{stats.active}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Inactive</h3>
          <div className="adm-stat-value">{stats.inactive}</div>
        </div>
      </div>

      <SeoTable initialPages={JSON.parse(JSON.stringify(pages))} />
    </>
  );
}
