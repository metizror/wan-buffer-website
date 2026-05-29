"use client";

import { useState, useCallback, useEffect, useRef } from "react";

import { BLOG_CATEGORIES } from "@/lib/definitions";
import type { BlogDocument } from "@/lib/definitions";
import type { PaginatedResult } from "@/lib/definitions";
import { calculateReadTime } from "@/lib/read-time";

type BlogCategory = (typeof BLOG_CATEGORIES)[number] | "All";

const PER_PAGE = 10;

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="16" height="16">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden width="16" height="16">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
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

interface BlogsListingProps {
  initialData: PaginatedResult;
}

export function BlogsListing({ initialData }: BlogsListingProps) {
  const [keyword, setKeyword] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [currentPage, setCurrentPage] = useState(initialData.page);
  const [blogs, setBlogs] = useState<BlogDocument[]>(initialData.blogs);
  const [total, setTotal] = useState(initialData.total);
  const [totalPages, setTotalPages] = useState(initialData.totalPages);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const allCategories: BlogCategory[] = ["All", ...BLOG_CATEGORIES];

  const fetchBlogs = useCallback(async (page: number, search: string, category: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("page", String(page));
      params.set("limit", String(PER_PAGE));
      if (search.trim()) params.set("search", search.trim());
      if (category && category !== "All") params.set("category", category);

      const res = await fetch(`/api/blogs?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data: PaginatedResult = await res.json();
      setBlogs(data.blogs);
      setTotal(data.total);
      setTotalPages(data.totalPages);
      setCurrentPage(data.page);
    } catch {
      // keep current state on error
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch on page/category change (not on initial mount)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    fetchBlogs(currentPage, keyword, activeCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, activeCategory]);

  // Debounced search
  useEffect(() => {
    if (isInitialMount.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      fetchBlogs(1, keyword, activeCategory);
    }, 400);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  const startIdx = (currentPage - 1) * PER_PAGE + 1;
  const endIdx = Math.min(currentPage * PER_PAGE, total);
  const hasFilters = keyword.trim() !== "" || activeCategory !== "All";

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    const el = document.getElementById("blog-list");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const clearFilters = useCallback(() => {
    setKeyword("");
    setActiveCategory("All");
    setCurrentPage(1);
    fetchBlogs(1, "", "All");
  }, [fetchBlogs]);

  return (
    <>
      {/* Filters */}
      <div className="bl-filters">
        <div className="bl-search-wrap">
          <span className="bl-search-icon"><SearchIcon /></span>
          <input
            className="bl-search"
            type="text"
            placeholder="Search articles..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="bl-cats">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`bl-cat${activeCategory === cat ? " active" : ""}`}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="bl-count">
        <span>
          {total > 0 ? (
            <>Showing <strong>{startIdx}–{endIdx}</strong> of {total} articles</>
          ) : (
            <>0 articles found</>
          )}
        </span>
        {hasFilters && (
          <button className="bl-clear" type="button" onClick={clearFilters}>
            Clear filters
          </button>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="bl-loading">
          <div className="bl-spinner" />
        </div>
      )}

      {/* Blog grid */}
      {!loading && blogs.length === 0 ? (
        <div className="bl-empty">
          <p>No articles match your filters.</p>
          <button className="bl-clear" type="button" onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      ) : !loading ? (
        <>
          <div className="bl-grid">
            {blogs.map((post) => (
              <a
                key={post.slug}
                className="bl-card"
                href={`/blogs/${post.slug}`}
              >
                <div className="bl-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="bl-card-img"
                    src={post.imageSrc}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
                <div className="bl-card-body">
                  <div className="bl-card-meta">
                    <span className="bl-card-cat">{post.category}</span>
                  </div>
                  <h3 className="bl-card-title">{post.title}</h3>
                  <p className="bl-card-excerpt">{post.excerpt}</p>
                  <div className="bl-card-foot">
                    <div className="bl-card-author">
                      <UserIcon />
                      <span>{post.author}</span>
                    </div>
                    <div className="bl-card-read">
                      <ClockIcon />
                      <span>{calculateReadTime(post.content)}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bl-pagination" role="navigation" aria-label="Blog pagination">
              <button
                className="bl-page-btn bl-page-prev"
                type="button"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Previous page"
              >
                <ChevronLeftIcon />
                <span>Prev</span>
              </button>

              <div className="bl-page-numbers">
                {getPageNumbers(currentPage, totalPages).map((p, i) =>
                  p === "..." ? (
                    <span key={`dots-${i}`} className="bl-page-dots">...</span>
                  ) : (
                    <button
                      key={p}
                      className={`bl-page-num${currentPage === p ? " active" : ""}`}
                      type="button"
                      onClick={() => goToPage(p)}
                      aria-label={`Page ${p}`}
                      aria-current={currentPage === p ? "page" : undefined}
                    >
                      {p}
                    </button>
                  )
                )}
              </div>

              <button
                className="bl-page-btn bl-page-next"
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Next page"
              >
                <span>Next</span>
                <ChevronRightIcon />
              </button>

              <div className="bl-page-info">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          )}
        </>
      ) : null}
    </>
  );
}
