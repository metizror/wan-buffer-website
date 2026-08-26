"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  EVENT_STATUSES,
  EVENT_STATUS_LABELS,
  type EventDocument,
  type EventStatus,
} from "@/lib/definitions";

const STATUS_BADGE: Record<EventStatus, string> = {
  published: "adm-badge-green",
  draft: "adm-badge-gray",
};

interface EventsTableProps {
  initialItems: EventDocument[];
  categories: string[];
}

export function EventsTable({ initialItems, categories }: EventsTableProps) {
  const [items, setItems] = useState(initialItems);
  const [statusFilter, setStatusFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const refetch = useCallback(async (status: string, category: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (status) params.set("status", status);
      if (category) params.set("category", category);
      const res = await fetch(`/api/admin/events?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setItems(data.items);
    } catch {
      // keep current state
    } finally {
      setLoading(false);
    }
  }, []);

  async function toggleStatus(item: EventDocument) {
    const next: EventStatus = item.status === "published" ? "draft" : "published";
    setBusyId(item._id!);
    try {
      const res = await fetch(`/api/admin/events/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });
      if (res.ok) {
        setItems((prev) =>
          prev.map((i) => (i._id === item._id ? { ...i, status: next } : i))
        );
      }
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(item: EventDocument) {
    if (!confirm(`Delete "${item.title}"? It can be restored from Trash.`)) {
      return;
    }
    const res = await fetch(`/api/admin/events/${item._id}`, { method: "DELETE" });
    if (res.ok) refetch(statusFilter, categoryFilter);
  }

  return (
    <div className="adm-table-wrap">
      <div className="adm-table-toolbar">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            refetch(e.target.value, categoryFilter);
          }}
        >
          <option value="">All Statuses</option>
          {EVENT_STATUSES.map((s) => (
            <option key={s} value={s}>
              {EVENT_STATUS_LABELS[s]}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            refetch(statusFilter, e.target.value);
          }}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="adm-table-count">
          {items.length} event{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      {loading ? (
        <div className="adm-empty">
          <p>Loading...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="adm-empty">
          <p>No events found</p>
        </div>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Categories</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td style={{ maxWidth: 320 }}>
                  <strong>{item.title}</strong>
                  <br />
                  <span className="adm-hint">/event/{item.slug}</span>
                </td>
                <td style={{ whiteSpace: "nowrap" }}>{item.dateLabel || "—"}</td>
                <td>{item.location || "—"}</td>
                <td>{item.categories?.join(", ") || "—"}</td>
                <td>
                  <span className={`adm-badge ${STATUS_BADGE[item.status]}`}>
                    {EVENT_STATUS_LABELS[item.status]}
                  </span>
                </td>
                <td>
                  <div className="adm-actions">
                    <button
                      type="button"
                      className="adm-btn adm-btn-ghost adm-btn-sm"
                      onClick={() => toggleStatus(item)}
                      disabled={busyId === item._id}
                    >
                      {busyId === item._id
                        ? "..."
                        : item.status === "published"
                          ? "Unpublish"
                          : "Publish"}
                    </button>
                    <Link
                      href={`/admin/events/${item._id}/edit`}
                      className="adm-btn adm-btn-secondary adm-btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="adm-btn adm-btn-danger adm-btn-sm"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
