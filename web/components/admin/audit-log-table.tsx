"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  AUDIT_ACTIONS,
  AUDIT_ACTION_LABELS,
  type AuditAction,
  type AuditDiffEntry,
} from "@/lib/definitions";
import { relativeTime } from "@/lib/relative-time";

const PER_PAGE = 20;

const ACTION_BADGE: Record<AuditAction, string> = {
  create: "adm-badge-green",
  update: "adm-badge-blue",
  delete: "adm-badge-red",
  restore: "adm-badge-green",
  bulk: "adm-badge-gray",
};

const ENTITY_TYPES = [
  { value: "blog", label: "Blog" },
  { value: "portfolio", label: "Portfolio" },
  { value: "user", label: "User" },
  { value: "seo", label: "SEO" },
];

interface AuditLogRow {
  _id: string;
  userId: string;
  userEmail: string;
  action: AuditAction;
  entityType: string;
  entityId: string;
  entityName: string;
  diff?: Record<string, AuditDiffEntry> | null;
  timestamp: string | Date;
}

interface Props {
  initialLogs: AuditLogRow[];
  initialTotal: number;
  initialTotalPages: number;
}

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

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return "—";
  if (typeof value === "string") return value.length > 120 ? value.slice(0, 120) + "…" : value;
  try {
    const s = JSON.stringify(value);
    return s.length > 120 ? s.slice(0, 120) + "…" : s;
  } catch {
    return String(value);
  }
}

export function AuditLogTable({
  initialLogs,
  initialTotal,
  initialTotalPages,
}: Props) {
  const [logs, setLogs] = useState<AuditLogRow[]>(initialLogs);
  const [total, setTotal] = useState(initialTotal);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [entityType, setEntityType] = useState("");
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchLogs = useCallback(
    async (page: number, searchVal: string, typeVal: string, actionVal: string) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(PER_PAGE));
        if (searchVal.trim()) params.set("search", searchVal.trim());
        if (typeVal) params.set("entityType", typeVal);
        if (actionVal) params.set("action", actionVal);

        const res = await fetch(`/api/admin/audit-log?${params}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setLogs(data.logs);
        setTotal(data.total);
        setTotalPages(data.totalPages);
        setCurrentPage(data.page);
      } catch {
        // keep current state
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isInitialMount.current) return;
    setCurrentPage(1);
    fetchLogs(1, search, entityType, action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entityType, action]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchLogs(1, search, entityType, action);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      fetchLogs(page, search, entityType, action);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [fetchLogs, search, entityType, action]
  );

  return (
    <div className="adm-table-wrap">
      <div className="adm-table-toolbar">
        <input
          placeholder="Search user or entity..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={entityType} onChange={(e) => setEntityType(e.target.value)}>
          <option value="">All entities</option>
          {ENTITY_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        <select value={action} onChange={(e) => setAction(e.target.value)}>
          <option value="">All actions</option>
          {AUDIT_ACTIONS.map((a) => (
            <option key={a} value={a}>
              {AUDIT_ACTION_LABELS[a]}
            </option>
          ))}
        </select>
        <span className="adm-table-count">
          {total} entr{total !== 1 ? "ies" : "y"}
        </span>
      </div>

      {loading ? (
        <div className="adm-empty">
          <p>Loading...</p>
        </div>
      ) : logs.length === 0 ? (
        <div className="adm-empty">
          <p>No audit entries found</p>
        </div>
      ) : (
        <>
          <table className="adm-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>User</th>
                <th>Action</th>
                <th>Entity</th>
                <th>Changes</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => {
                const diffKeys = log.diff ? Object.keys(log.diff) : [];
                const isOpen = expanded === log._id;
                return (
                  <tr key={log._id}>
                    <td
                      style={{ whiteSpace: "nowrap" }}
                      title={new Date(log.timestamp).toLocaleString()}
                    >
                      {relativeTime(log.timestamp)}
                    </td>
                    <td>{log.userEmail}</td>
                    <td>
                      <span className={`adm-badge ${ACTION_BADGE[log.action]}`}>
                        {AUDIT_ACTION_LABELS[log.action]}
                      </span>
                    </td>
                    <td>
                      <span className="adm-badge adm-badge-gray">
                        {log.entityType}
                      </span>{" "}
                      <strong>{log.entityName || "—"}</strong>
                    </td>
                    <td>
                      {diffKeys.length === 0 ? (
                        <span style={{ color: "#94a3b8" }}>—</span>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="adm-diff-toggle"
                            onClick={() =>
                              setExpanded(isOpen ? null : log._id)
                            }
                          >
                            {isOpen
                              ? "Hide"
                              : `${diffKeys.length} field${
                                  diffKeys.length !== 1 ? "s" : ""
                                }`}
                          </button>
                          {isOpen && log.diff && (
                            <div className="adm-diff">
                              {diffKeys.map((field) => (
                                <span key={field} className="adm-diff-row">
                                  <span className="adm-diff-field">{field}</span>
                                  {": "}
                                  <span className="adm-diff-from">
                                    {formatValue(log.diff![field].from)}
                                  </span>
                                  {" → "}
                                  <span className="adm-diff-to">
                                    {formatValue(log.diff![field].to)}
                                  </span>
                                </span>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
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
                    <span key={`dots-${i}`} className="adm-page-dots">
                      ...
                    </span>
                  ) : (
                    <button
                      key={p}
                      className={`adm-page-num${
                        currentPage === p ? " active" : ""
                      }`}
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
  );
}
