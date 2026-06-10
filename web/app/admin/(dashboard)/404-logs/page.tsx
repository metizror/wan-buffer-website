import { getPaginatedNotFoundLogs, getNotFoundStats } from "@/lib/notfound-service";
import { NotFoundLogsTable } from "@/components/admin/notfound-logs-table";

export default async function NotFoundLogsPage() {
  const [result, stats] = await Promise.all([
    getPaginatedNotFoundLogs({ page: 1, limit: 20 }),
    getNotFoundStats(),
  ]);

  return (
    <>
      <div className="adm-page-header">
        <h1>404 Logs</h1>
      </div>

      <div className="adm-stats">
        <div className="adm-stat-card">
          <h3>Total 404 Hits</h3>
          <div className="adm-stat-value">{stats.total}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Unique URLs</h3>
          <div className="adm-stat-value">{stats.topUrls.length}</div>
        </div>
      </div>

      <NotFoundLogsTable
        initialLogs={JSON.parse(JSON.stringify(result.logs))}
        initialTotal={result.total}
        initialTotalPages={result.totalPages}
        initialStats={JSON.parse(JSON.stringify(stats))}
      />
    </>
  );
}
