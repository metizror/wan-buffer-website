"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  BLOG_CATEGORIES,
  BLOG_STATUS_LABELS,
  type BlogDocument,
  type BlogStatus,
} from "@/lib/definitions";
import { DeleteBlogDialog } from "./delete-blog-dialog";

const PER_PAGE = 10;

const STATUS_BADGE: Record<BlogStatus, string> = {
  published: "adm-badge-green",
  scheduled: "adm-badge-blue",
  draft: "adm-badge-yellow",
};

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

interface BlogTableProps {
  initialBlogs: BlogDocument[];
  initialTotal: number;
  initialTotalPages: number;
}

export function BlogTable({ initialBlogs, initialTotal, initialTotalPages }: BlogTableProps) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [total, setTotal] = useState(initialTotal);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<BlogDocument | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchBlogs = useCallback(
    async (page: number, searchVal: string, categoryVal: string, statusVal: string) => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.set("page", String(page));
        params.set("limit", String(PER_PAGE));
        if (searchVal.trim()) params.set("search", searchVal.trim());
        if (categoryVal) params.set("category", categoryVal);
        if (statusVal) params.set("status", statusVal);

        const res = await fetch(`/api/admin/blogs?${params}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setBlogs(data.blogs);
        setTotal(data.total);
        setTotalPages(data.totalPages);
        setCurrentPage(data.page);
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
    fetchBlogs(currentPage, search, category, status);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, category, status]);

  useEffect(() => {
    if (isInitialMount.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchBlogs(1, search, category, status);
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function handleDelete(id: string) {
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchBlogs(currentPage, search, category, status);
    }
    setDeleteTarget(null);
  }

  async function togglePublish(blog: BlogDocument) {
    const nextStatus: BlogStatus =
      blog.status === "published" ? "draft" : "published";
    const res = await fetch(`/api/admin/blogs/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: nextStatus }),
    });
    if (res.ok) {
      setBlogs(
        blogs.map((b) =>
          b._id === blog._id
            ? { ...b, status: nextStatus, isPublished: nextStatus === "published" }
            : b
        )
      );
    }
  }

  async function runBulk(action: "publish" | "unpublish" | "delete") {
    if (selected.size === 0) return;
    if (action === "delete" && !confirm(`Delete ${selected.size} selected blog(s)?`)) {
      return;
    }
    const res = await fetch(`/api/admin/blogs/bulk`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ids: Array.from(selected) }),
    });
    if (res.ok) {
      fetchBlogs(currentPage, search, category, status);
    }
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function toggleSelectAll() {
    setSelected((prev) => {
      if (prev.size === blogs.length) return new Set();
      return new Set(blogs.map((b) => b._id!));
    });
  }

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const allSelected = blogs.length > 0 && selected.size === blogs.length;

  return (
    <>
      <div className="adm-table-wrap">
        <div className="adm-table-toolbar">
          <input
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={status} onChange={(e) => { setStatus(e.target.value); setCurrentPage(1); }}>
            <option value="">All Status</option>
            {(Object.keys(BLOG_STATUS_LABELS) as BlogStatus[]).map((s) => (
              <option key={s} value={s}>
                {BLOG_STATUS_LABELS[s]}
              </option>
            ))}
          </select>
          <select value={category} onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}>
            <option value="">All Categories</option>
            {BLOG_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <span className="adm-table-count">
            {total} blog{total !== 1 ? "s" : ""}
          </span>
        </div>

        {selected.size > 0 && (
          <div className="adm-bulk-bar">
            <span>{selected.size} selected</span>
            <div className="adm-actions">
              <button
                className="adm-btn adm-btn-secondary adm-btn-sm"
                onClick={() => runBulk("publish")}
              >
                Publish
              </button>
              <button
                className="adm-btn adm-btn-ghost adm-btn-sm"
                onClick={() => runBulk("unpublish")}
              >
                Unpublish
              </button>
              <button
                className="adm-btn adm-btn-danger adm-btn-sm"
                onClick={() => runBulk("delete")}
              >
                Delete
              </button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="adm-empty">
            <p>Loading...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="adm-empty">
            <p>No blogs found</p>
          </div>
        ) : (
          <>
            <table className="adm-table">
              <thead>
                <tr>
                  <th style={{ width: 32 }}>
                    <input
                      type="checkbox"
                      checked={allSelected}
                      onChange={toggleSelectAll}
                      aria-label="Select all"
                    />
                  </th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selected.has(blog._id!)}
                        onChange={() => toggleSelect(blog._id!)}
                        aria-label={`Select ${blog.title}`}
                      />
                    </td>
                    <td style={{ maxWidth: 300 }}>
                      <strong>{blog.title}</strong>
                      {blog.hidden && (
                        <span className="adm-badge adm-badge-gray" style={{ marginLeft: 8 }}>
                          Hidden
                        </span>
                      )}
                    </td>
                    <td>{blog.category}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td>
                      <span className={`adm-badge ${STATUS_BADGE[blog.status]}`}>
                        {BLOG_STATUS_LABELS[blog.status]}
                      </span>
                    </td>
                    <td>
                      <div className="adm-actions">
                        <Link
                          href={`/admin/blogs/${blog._id}/edit`}
                          className="adm-btn adm-btn-secondary adm-btn-sm"
                        >
                          Edit
                        </Link>
                        <button
                          className="adm-btn adm-btn-ghost adm-btn-sm"
                          onClick={() => togglePublish(blog)}
                        >
                          {blog.status === "published" ? "Unpublish" : "Publish"}
                        </button>
                        <button
                          className="adm-btn adm-btn-danger adm-btn-sm"
                          onClick={() => setDeleteTarget(blog)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
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

      {deleteTarget && (
        <DeleteBlogDialog
          title={deleteTarget.title}
          onConfirm={() => handleDelete(deleteTarget._id!)}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </>
  );
}
