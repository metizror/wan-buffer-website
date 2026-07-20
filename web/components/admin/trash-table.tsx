"use client";

import { useState } from "react";
import type { Role } from "@/lib/definitions";
import { relativeTime } from "@/lib/relative-time";

interface TrashRow {
  entityType: "blog" | "portfolio";
  id: string;
  name: string;
  meta: string;
  deletedAt: string | Date | null;
}

interface Props {
  initialItems: TrashRow[];
  currentUserRole: Role;
}

const TYPE_BADGE: Record<TrashRow["entityType"], string> = {
  blog: "adm-badge-blue",
  portfolio: "adm-badge-green",
};

export function TrashTable({ initialItems, currentUserRole }: Props) {
  const [items, setItems] = useState<TrashRow[]>(initialItems);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [purgeTarget, setPurgeTarget] = useState<TrashRow | null>(null);

  const isSuperAdmin = currentUserRole === "super-admin";

  function rowKey(item: TrashRow) {
    return `${item.entityType}:${item.id}`;
  }

  async function handleRestore(item: TrashRow) {
    setError("");
    setBusyId(rowKey(item));
    try {
      const res = await fetch("/api/admin/trash/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entityType: item.entityType, id: item.id }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setItems((prev) => prev.filter((i) => rowKey(i) !== rowKey(item)));
      } else {
        setError(data.error || "Failed to restore item");
      }
    } finally {
      setBusyId(null);
    }
  }

  async function handlePurge(item: TrashRow) {
    setError("");
    setBusyId(rowKey(item));
    try {
      const res = await fetch("/api/admin/trash/purge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ entityType: item.entityType, id: item.id }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setItems((prev) => prev.filter((i) => rowKey(i) !== rowKey(item)));
      } else {
        setError(data.error || "Failed to purge item");
      }
    } finally {
      setBusyId(null);
      setPurgeTarget(null);
    }
  }

  return (
    <div className="adm-table-wrap">
      <div className="adm-table-toolbar">
        <span className="adm-table-count">
          {items.length} item{items.length !== 1 ? "s" : ""} in trash
        </span>
      </div>

      {error && <div className="adm-bulk-bar">{error}</div>}

      {items.length === 0 ? (
        <div className="adm-empty">
          <p>Trash is empty</p>
        </div>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Deleted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const key = rowKey(item);
              const busy = busyId === key;
              return (
                <tr key={key}>
                  <td>
                    <span className={`adm-badge ${TYPE_BADGE[item.entityType]}`}>
                      {item.entityType}
                    </span>
                    {item.meta && (
                      <span
                        className="adm-badge adm-badge-gray"
                        style={{ marginLeft: 8 }}
                      >
                        {item.meta}
                      </span>
                    )}
                  </td>
                  <td>
                    <strong>{item.name || "—"}</strong>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>
                    {item.deletedAt ? relativeTime(item.deletedAt) : "—"}
                  </td>
                  <td>
                    <div className="adm-actions">
                      <button
                        className="adm-btn adm-btn-secondary adm-btn-sm"
                        disabled={busy}
                        onClick={() => handleRestore(item)}
                      >
                        {busy ? "..." : "Restore"}
                      </button>
                      {isSuperAdmin && (
                        <button
                          className="adm-btn adm-btn-danger adm-btn-sm"
                          disabled={busy}
                          onClick={() => setPurgeTarget(item)}
                        >
                          Purge
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {purgeTarget && (
        <div className="adm-overlay" onClick={() => setPurgeTarget(null)}>
          <div className="adm-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Purge permanently</h3>
            <p>
              Permanently delete{" "}
              <strong>&ldquo;{purgeTarget.name}&rdquo;</strong> (
              {purgeTarget.entityType})? This cannot be undone.
            </p>
            <div className="adm-dialog-actions">
              <button
                className="adm-btn adm-btn-secondary"
                onClick={() => setPurgeTarget(null)}
                disabled={busyId === rowKey(purgeTarget)}
              >
                Cancel
              </button>
              <button
                className="adm-btn adm-btn-danger"
                onClick={() => handlePurge(purgeTarget)}
                disabled={busyId === rowKey(purgeTarget)}
              >
                {busyId === rowKey(purgeTarget) ? "Purging..." : "Purge"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
