"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { BLOG_CATEGORIES, type BlogDocument } from "@/lib/definitions";
import { DeleteBlogDialog } from "./delete-blog-dialog";

const PER_PAGE = 10;

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
  const [loading, setLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<BlogDocument | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchBlogs = useCallback(async (page: number, searchVal: string, categoryVal: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(PER_PAGE));
      if (searchVal.trim()) params.set("search", searchVal.trim());
      if (categoryVal) params.set("category", categoryVal);

      const res = await fetch(`/api/admin/blogs?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setBlogs(data.blogs);
      setTotal(data.total);
      setTotalPages(data.totalPages);
      setCurrentPage(data.page);
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
    fetchBlogs(currentPage, search, category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, category]);

  useEffect(() => {
    if (isInitialMount.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchBlogs(1, search, category);
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function handleDelete(id: string) {
    const res = await fetch(`/api/admin/blogs/${id}`, { method: "DELETE" });
    if (res.ok) {
      // Refetch current page to keep pagination in sync
      fetchBlogs(currentPage, search, category);
    }
    setDeleteTarget(null);
  }

  async function togglePublish(blog: BlogDocument) {
    const res = await fetch(`/api/admin/blogs/${blog._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isPublished: !blog.isPublished }),
    });
    if (res.ok) {
      setBlogs(
        blogs.map((b) =>
          b._id === blog._id ? { ...b, isPublished: !b.isPublished } : b
        )
      );
    }
  }

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="adm-table-wrap">
        <div className="adm-table-toolbar">
          <input
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
                    <td style={{ maxWidth: 300 }}>
                      <strong>{blog.title}</strong>
                    </td>
                    <td>{blog.category}</td>
                    <td>{blog.author}</td>
                    <td>{blog.date}</td>
                    <td>
                      <span
                        className={`adm-badge ${blog.isPublished ? "adm-badge-green" : "adm-badge-yellow"}`}
                      >
                        {blog.isPublished ? "Published" : "Draft"}
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
                          {blog.isPublished ? "Unpublish" : "Publish"}
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
