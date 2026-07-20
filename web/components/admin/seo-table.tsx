"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import {
  PAGE_CATEGORIES,
  PAGE_CATEGORY_LABELS,
  type PageCategory,
} from "@/lib/definitions";
import { SeoEditModal, type SeoPageClient } from "./seo-edit-modal";

const CATEGORY_BADGE: Record<PageCategory, string> = {
  blog: "adm-badge-blue",
  work: "adm-badge-green",
  policy: "adm-badge-gray",
  product: "adm-badge-yellow",
  static: "adm-badge-gray",
};

function scoreClass(score: number): string {
  if (score >= 80) return "adm-seo-score-good";
  if (score >= 50) return "adm-seo-score-mid";
  return "adm-seo-score-bad";
}

interface Props {
  initialPages: SeoPageClient[];
}

export function SeoTable({ initialPages }: Props) {
  const [pages, setPages] = useState<SeoPageClient[]>(initialPages);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [editing, setEditing] = useState<SeoPageClient | null>(null);

  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchPages = useCallback(
    async (categoryVal: string, searchVal: string) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        if (categoryVal !== "all") params.set("category", categoryVal);
        if (searchVal.trim()) params.set("search", searchVal.trim());
        const res = await fetch(`/api/admin/seo?${params}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPages(data.pages);
        setSelected(new Set());
      } catch {
        // keep current state
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchPages(category, search), 350);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search]);

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const allSelected = pages.length > 0 && selected.size === pages.length;

  function toggleSelectAll() {
    if (allSelected) setSelected(new Set());
    else setSelected(new Set(pages.map((p) => p._id)));
  }

  async function bulkSetActive(isActive: boolean) {
    if (selected.size === 0) return;
    const res = await fetch("/api/admin/seo/bulk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: Array.from(selected), isActive }),
    });
    if (res.ok) fetchPages(category, search);
  }

  async function toggleActive(page: SeoPageClient) {
    const res = await fetch(`/api/admin/seo/${page._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !page.isActive }),
    });
    if (res.ok) {
      const data = await res.json();
      setPages((prev) =>
        prev.map((p) => (p._id === page._id ? data.page : p))
      );
    }
  }

  function handleSaved(updated: SeoPageClient) {
    setPages((prev) => prev.map((p) => (p._id === updated._id ? updated : p)));
    setEditing(null);
  }

  return (
    <>
      <div className="adm-table-wrap">
        <div className="adm-table-toolbar">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            {PAGE_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {PAGE_CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
          <input
            placeholder="Search slug or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="adm-table-count">
            {pages.length} page{pages.length !== 1 ? "s" : ""}
          </span>
        </div>

        {selected.size > 0 && (
          <div className="adm-bulk-bar">
            <span>{selected.size} selected</span>
            <div className="adm-actions">
              <button
                className="adm-btn adm-btn-secondary adm-btn-sm"
                onClick={() => bulkSetActive(true)}
              >
                Set Active
              </button>
              <button
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => bulkSetActive(false)}
              >
                Set Inactive
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="adm-empty">
            <p>Loading...</p>
          </div>
        ) : pages.length === 0 ? (
          <div className="adm-empty">
            <p>No pages found</p>
          </div>
        ) : (
          <table className="adm-table">
            <thead>
              <tr>
                <th style={{ width: 32 }}>
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th>Slug</th>
                <th>Title</th>
                <th>Category</th>
                <th>Active</th>
                <th>Score</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((p) => (
                <tr key={p._id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selected.has(p._id)}
                      onChange={() => toggleSelect(p._id)}
                    />
                  </td>
                  <td style={{ wordBreak: "break-all", maxWidth: 280 }}>
                    <strong>{p.slug}</strong>
                  </td>
                  <td style={{ maxWidth: 260 }}>{p.title}</td>
                  <td>
                    <span className={`adm-badge ${CATEGORY_BADGE[p.category]}`}>
                      {PAGE_CATEGORY_LABELS[p.category]}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`adm-toggle-switch${p.isActive ? " active" : ""}`}
                      onClick={() => toggleActive(p)}
                      aria-label={p.isActive ? "Active" : "Inactive"}
                    />
                  </td>
                  <td>
                    <span className={`adm-seo-score ${scoreClass(p.lastSeoScore)}`}>
                      {p.lastSeoScore}
                    </span>
                  </td>
                  <td>
                    <div className="adm-actions">
                      <button
                        className="adm-btn adm-btn-secondary adm-btn-sm"
                        onClick={() => setEditing(p)}
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {editing && (
        <SeoEditModal
          page={editing}
          onClose={() => setEditing(null)}
          onSaved={handleSaved}
        />
      )}
    </>
  );
}
