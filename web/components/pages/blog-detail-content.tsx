import Link from "next/link";

import { ArrowRightIcon, MailIcon, PhoneCallIcon } from "@/components/services/odoo-service-icons";
import type { BlogDocument } from "@/lib/definitions";
import { calculateReadTime } from "@/lib/read-time";

interface BlogDetailContentProps {
  post: BlogDocument;
  related: BlogDocument[];
}

export function BlogDetailContent({ post, related }: BlogDetailContentProps) {
  return (
    <main className="svc-page">
      {/* ═══ HERO ═══ */}
      <section className="oi-evt-detail-hero">
        <div className="oi-evt-detail-hero-bg" aria-hidden="true" />
        <div className="oi-evt-detail-hero-inner">
          <div className="oi-evt-detail-hero-grid">
            <div>
              <div className="oi-evt-detail-tags">
                <span className="bl-card-cat">{post.category}</span>
              </div>
              <h1 className="oi-evt-detail-title">{post.title}</h1>
              <p className="oi-evt-detail-lead">{post.excerpt}</p>
              <ul className="oi-evt-detail-quick-meta">
                <li>
                  <strong>Author</strong>
                  <span>{post.author}{post.authorRole ? ` · ${post.authorRole}` : ""}</span>
                </li>
                <li>
                  <strong>Read time</strong>
                  <span>{calculateReadTime(post.content)}</span>
                </li>
                <li>
                  <strong>Category</strong>
                  <span>{post.category}</span>
                </li>
              </ul>
            </div>
            <div className="oi-evt-detail-hero-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="oi-evt-detail-hero-img"
                src={post.imageSrc}
                alt={post.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <section className="oi-evt-detail-body section alt">
        <div className="oi-evt-detail-layout">
          <article className="oi-evt-detail-article">

            {/* Rich HTML content */}
            <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="oi-evt-detail-block">
                <h2 className="oi-evt-detail-h2">Frequently Asked Questions</h2>
                <div className="bd-faqs">
                  {post.faqs.map((faq) => (
                    <div key={faq.q.slice(0, 40)} className="bd-faq">
                      <h3 className="bd-faq-q">{faq.q}</h3>
                      <p className="bd-faq-a">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags line */}
            <div className="oi-evt-detail-tags-line">
              <span className="oi-evt-detail-tags-label">Tags</span>
              {post.category} · ERP · {post.author}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="oi-evt-detail-aside">
            <div className="bd-sidebar-card">
              <div className="bd-sidebar-card-label">About the author</div>
              <div className="bd-sidebar-author">{post.author}</div>
              {post.authorRole && <div className="bd-sidebar-role">{post.authorRole}</div>}
            </div>

            <div className="bd-sidebar-card">
              <div className="bd-sidebar-card-label">Need help?</div>
              <p className="bd-sidebar-text">Talk to our engineering team about your project requirements.</p>
              <Link className="bd-sidebar-cta" href="/contact-us">
                Contact us <ArrowRightIcon />
              </Link>
            </div>

            <Link className="bd-sidebar-back" href="/blogs">
              ← Back to all articles
            </Link>
          </aside>
        </div>
      </section>

      {/* ═══ RELATED POSTS ═══ */}
      {related.length > 0 && (
        <section className="bd-related">
          <div className="bd-related-inner">
            <h2 className="bd-related-h rev">Related articles</h2>
            <div className="bd-related-grid rev">
              {related.map((rp) => {
                return (
                  <a
                    key={rp.slug}
                    className="bl-card"
                    href={`/blogs/${rp.slug}`}
                  >
                    <div className="bl-card-media">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="bl-card-img" src={rp.imageSrc} alt={rp.title} loading="lazy" />
                    </div>
                    <div className="bl-card-body">
                      <div className="bl-card-meta">
                        <span className="bl-card-cat">{rp.category}</span>
                      </div>
                      <h3 className="bl-card-title">{rp.title}</h3>
                      <p className="bl-card-excerpt">{rp.excerpt}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
