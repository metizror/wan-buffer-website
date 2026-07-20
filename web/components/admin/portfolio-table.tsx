"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import {
  PORTFOLIO_TYPES,
  PORTFOLIO_TYPE_LABELS,
  type PortfolioItem,
  type PortfolioType,
} from "@/lib/definitions";

const TYPE_BADGE: Record<PortfolioType, string> = {
  work: "adm-badge-green",
  "case-study": "adm-badge-blue",
};

interface PortfolioTableProps {
  initialItems: PortfolioItem[];
  categories: string[];
}

export function PortfolioTable({ initialItems, categories }: PortfolioTableProps) {
  const [items, setItems] = useState(initialItems);
  const [typeFilter, setTypeFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async (type: string, category: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (type) params.set("type", type);
      if (category) params.set("category", category);
      const res = await fetch(`/api/admin/portfolio?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setItems(data.items);
    } catch {
      // keep current state
    } finally {
      setLoading(false);
    }
  }, []);

  async function handleReorder(id: string, direction: "up" | "down") {
    const res = await fetch(`/api/admin/portfolio/reorder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, direction }),
    });
    if (res.ok) refetch(typeFilter, categoryFilter);
  }

  async function handleDelete(item: PortfolioItem) {
    if (!confirm(`Delete "${item.title}"? This can be restored from the database.`)) {
      return;
    }
    const res = await fetch(`/api/admin/portfolio/${item._id}`, {
      method: "DELETE",
    });
    if (res.ok) refetch(typeFilter, categoryFilter);
  }

  return (
    <div className="adm-table-wrap">
      <div className="adm-table-toolbar">
        <select
          value={typeFilter}
          onChange={(e) => {
            setTypeFilter(e.target.value);
            refetch(e.target.value, categoryFilter);
          }}
        >
          <option value="">All Types</option>
          {PORTFOLIO_TYPES.map((t) => (
            <option key={t} value={t}>
              {PORTFOLIO_TYPE_LABELS[t]}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            refetch(typeFilter, e.target.value);
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
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      {loading ? (
        <div className="adm-empty">
          <p>Loading...</p>
        </div>
      ) : items.length === 0 ? (
        <div className="adm-empty">
          <p>No portfolio items found</p>
        </div>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Category</th>
              <th style={{ width: 120 }}>Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item._id}>
                <td style={{ maxWidth: 320 }}>
                  <strong>{item.title}</strong>
                </td>
                <td>
                  <span className={`adm-badge ${TYPE_BADGE[item.type]}`}>
                    {PORTFOLIO_TYPE_LABELS[item.type]}
                  </span>
                </td>
                <td>{item.category || "—"}</td>
                <td>
                  <div className="adm-actions">
                    <button
                      type="button"
                      className="adm-btn adm-btn-ghost adm-btn-sm"
                      onClick={() => handleReorder(item._id!, "up")}
                      disabled={index === 0}
                      aria-label="Move up"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="adm-btn adm-btn-ghost adm-btn-sm"
                      onClick={() => handleReorder(item._id!, "down")}
                      disabled={index === items.length - 1}
                      aria-label="Move down"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <span className="adm-table-count">{item.order}</span>
                  </div>
                </td>
                <td>
                  <div className="adm-actions">
                    <Link
                      href={`/admin/portfolio/${item._id}/edit`}
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
