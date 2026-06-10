"use client";

import { useState, useCallback, useEffect, useRef } from "react";

const PER_PAGE = 20;

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages: (number | "...")[] = [1];
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);
  return pages;
}

interface LogEntry {
  _id: string;
  url: string;
  referrer: string | null;
  userAgent: string | null;
  ip: string | null;
  createdAt: string;
}

interface TopUrl {
  url: string;
  count: number;
  lastHit: string;
}

interface Props {
  initialLogs: LogEntry[];
  initialTotal: number;
  initialTotalPages: number;
  initialStats: { total: number; topUrls: TopUrl[] };
}

export function NotFoundLogsTable({
  initialLogs,
  initialTotal,
  initialTotalPages,
  initialStats,
}: Props) {
  const [logs, setLogs] = useState(initialLogs);
  const [total, setTotal] = useState(initialTotal);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [stats, setStats] = useState(initialStats);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [clearing, setClearing] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchLogs = useCallback(async (page: number, searchVal: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(PER_PAGE));
      if (searchVal.trim()) params.set("search", searchVal.trim());

      const res = await fetch(`/api/admin/404-logs?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setLogs(data.logs);
      setTotal(data.total);
      setTotalPages(data.totalPages);
      setCurrentPage(data.page);
      setStats(data.stats);
    } catch {
      // keep current state
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    fetchLogs(currentPage, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (isInitialMount.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchLogs(1, search);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function handleClear() {
    if (!confirm("Are you sure you want to clear all 404 logs?")) return;
    setClearing(true);
    try {
      const res = await fetch("/api/admin/404-logs", { method: "DELETE" });
      if (res.ok) {
        setLogs([]);
        setTotal(0);
        setTotalPages(1);
        setCurrentPage(1);
        setStats({ total: 0, topUrls: [] });
      }
    } finally {
      setClearing(false);
    }
  }

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function truncate(str: string | null, len: number) {
    if (!str) return "-";
    return str.length > len ? str.slice(0, len) + "..." : str;
  }

  return (
    <>
      {stats.topUrls.length > 0 && (
        <div className="adm-form-card">
          <h2>Top 404 URLs</h2>
          <table className="adm-table">
            <thead>
              <tr>
                <th>URL</th>
                <th>Hits</th>
                <th>Last Hit</th>
              </tr>
            </thead>
            <tbody>
              {stats.topUrls.map((u) => (
                <tr key={u.url}>
                  <td style={{ wordBreak: "break-all" }}>{u.url}</td>
                  <td>
                    <span className="adm-badge adm-badge-yellow">{u.count}</span>
                  </td>
                  <td>{formatDate(u.lastHit)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="adm-table-wrap">
        <div className="adm-table-toolbar">
          <input
            placeholder="Search URLs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="adm-table-count">
            {total} log{total !== 1 ? "s" : ""}
          </span>
        </div>

        {loading ? (
          <div className="adm-empty">
            <p>Loading...</p>
          </div>
        ) : logs.length === 0 ? (
          <div className="adm-empty">
            <p>No 404 logs found</p>
          </div>
        ) : (
          <>
            <table className="adm-table">
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Referrer</th>
                  <th>IP</th>
                  <th>User Agent</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log._id}>
                    <td style={{ wordBreak: "break-all", maxWidth: 300 }}>
                      <strong>{log.url}</strong>
                    </td>
                    <td style={{ maxWidth: 200 }}>{truncate(log.referrer, 50)}</td>
                    <td>{log.ip || "-"}</td>
                    <td style={{ maxWidth: 200 }}>{truncate(log.userAgent, 60)}</td>
                    <td style={{ whiteSpace: "nowrap" }}>{formatDate(log.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {totalPages > 1 && (
              <div className="adm-pagination">
                <button
                  className="adm-page-btn"
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => goToPage(currentPage - 1)}
                >
                  &lsaquo; Prev
                </button>

                <div className="adm-page-numbers">
                  {getPageNumbers(currentPage, totalPages).map((p, i) =>
                    p === "..." ? (
                      <span key={`dots-${i}`} className="adm-page-dots">...</span>
                    ) : (
                      <button
                        key={p}
                        className={`adm-page-num${currentPage === p ? " active" : ""}`}
                        type="button"
                        onClick={() => goToPage(p)}
                      >
                        {p}
                      </button>
                    )
                  )}
                </div>

                <button
                  className="adm-page-btn"
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => goToPage(currentPage + 1)}
                >
                  Next &rsaquo;
                </button>

                <span className="adm-page-info">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {total > 0 && (
        <div style={{ marginTop: "1rem", textAlign: "right" }}>
          <button
            className="adm-btn adm-btn-danger adm-btn-sm"
            onClick={handleClear}
            disabled={clearing}
          >
            {clearing ? "Clearing..." : "Clear All Logs"}
          </button>
        </div>
      )}
    </>
  );
}
