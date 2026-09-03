import Link from "next/link";

const FEATURED = [
  {
    href: "/blogs/essential-odoo-integrations-us-companies-need-2025",
    category: "Odoo · Integrations",
    title: "Essential Odoo Integrations US Companies Need in 2025",
    meta: "Shopify, Amazon & QuickBooks",
    featured: true,
  },
  {
    href: "/blogs/why-generic-erp-fails-for-oil-and-gas-suppliers",
    category: "Oil & Gas · ERP",
    title: "Why Generic ERP Fails for Oil and Gas Suppliers",
    meta: "Project-based procurement",
  },
  {
    href: "/blogs/dedicated-engineering-teams-vs-in-house-hiring",
    category: "Strategy · Teams",
    title: "Dedicated Engineering Teams vs In-House Hiring for ERP",
    meta: "Delivery models",
  },
] as const;

export function HomeInsights() {
  const featured = FEATURED[0];
  const rest = FEATURED.slice(1);

  return (
    <section className="insights" id="insights">
      <div className="ins-hdr rev">
        <div>
          <div className="eyebrow">Latest Thinking</div>
          <h2 className="sec-h">
            AI + ERP <span className="acc">Insights</span>
          </h2>
        </div>
        <Link className="link-r" href="/blogs">
          All Articles →
        </Link>
      </div>
      <div className="ins-grid rev">
        <Link className="ins-main" href={featured.href} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="ins-c">
            <span className="ins-cat">{featured.category}</span>
            <div className="ins-title">{featured.title}</div>
            <div className="ins-meta">{featured.meta}</div>
          </div>
        </Link>
        {rest.map((item) => (
          <div key={item.href} className="ins-card">
            <div>
              <span className="ins-cat">{item.category}</span>
              <div className="ins-title">{item.title}</div>
              <div className="ins-meta">{item.meta}</div>
            </div>
            <Link className="ins-link" href={item.href}>
              Read Article →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
