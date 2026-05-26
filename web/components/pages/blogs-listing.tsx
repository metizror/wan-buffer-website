"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  BLOG_CATEGORIES,
  BLOG_COUNT,
  BLOG_POSTS,
  type BlogCategory,
} from "@/lib/blogs-data";

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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14" aria-hidden>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function BlogsListing() {
  const [keyword, setKeyword] = useState("");
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");

  const filtered = useMemo(() => {
    const kw = keyword.trim().toLowerCase();
    return BLOG_POSTS.filter((post) => {
      if (activeCategory !== "All" && post.category !== activeCategory) return false;
      if (kw && !post.title.toLowerCase().includes(kw) && !post.excerpt.toLowerCase().includes(kw) && !post.author.toLowerCase().includes(kw)) return false;
      return true;
    });
  }, [keyword, activeCategory]);

  const hasFilters = keyword.trim() !== "" || activeCategory !== "All";

  return (
    <>
      {/* Filters */}
      <div className="bl-filters rev">
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
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`bl-cat${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <div className="bl-count rev">
        <span>
          Showing <strong>{filtered.length}</strong> of {BLOG_COUNT} articles
        </span>
        {hasFilters && (
          <button
            className="bl-clear"
            type="button"
            onClick={() => { setKeyword(""); setActiveCategory("All"); }}
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Blog grid */}
      {filtered.length === 0 ? (
        <div className="bl-empty rev">
          <p>No articles match your filters.</p>
          <button className="bl-clear" type="button" onClick={() => { setKeyword(""); setActiveCategory("All"); }}>
            Clear filters
          </button>
        </div>
      ) : (
        <div className="bl-grid rev">
          {filtered.map((post) => {
            const href = post.detail ? `/blogs/${post.slug}` : post.externalUrl;
            const isExternal = !post.detail;
            return (
            <a
              key={post.slug}
              className="bl-card"
              href={href}
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                  <span className="bl-card-date">{post.date}</span>
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
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </a>
            );
          })}
        </div>
      )}
    </>
  );
}
