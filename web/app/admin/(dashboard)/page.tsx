import Link from "next/link";
import { getBlogStats } from "@/lib/blog-service";

export default async function AdminDashboard() {
  const stats = await getBlogStats();

  return (
    <>
      <div className="adm-page-header">
        <h1>Dashboard</h1>
        <Link href="/admin/blogs/new" className="adm-btn adm-btn-primary adm-btn-sm">
          + New Blog
        </Link>
      </div>

      <div className="adm-stats">
        <div className="adm-stat-card">
          <h3>Total Blogs</h3>
          <div className="adm-stat-value">{stats.total}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Published</h3>
          <div className="adm-stat-value">{stats.published}</div>
        </div>
        <div className="adm-stat-card">
          <h3>Drafts</h3>
          <div className="adm-stat-value">{stats.draft}</div>
        </div>
      </div>

      {stats.byCategory.length > 0 && (
        <div className="adm-form-card">
          <h2>Blogs by Category</h2>
          <table className="adm-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {stats.byCategory.map((s) => (
                <tr key={s.category}>
                  <td>{s.category}</td>
                  <td>{s.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
