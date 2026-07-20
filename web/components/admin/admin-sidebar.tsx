"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Role } from "@/lib/definitions";

interface NavItem {
  href: string;
  label: string;
  icon: string;
  /** When set, only these roles see the item. Omit = visible to all roles. */
  roles?: Role[];
}

const navItems: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/blogs", label: "Blogs", icon: "📝" },
  { href: "/admin/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/admin/seo", label: "SEO", icon: "🔎" },
  { href: "/admin/redirects", label: "Redirects", icon: "🔀" },
  { href: "/admin/404-logs", label: "404 Logs", icon: "🚫" },
  {
    href: "/admin/users",
    label: "Users",
    icon: "👥",
    roles: ["super-admin", "admin"],
  },
  {
    href: "/admin/audit-log",
    label: "Audit Log",
    icon: "📜",
    roles: ["super-admin", "admin"],
  },
  {
    href: "/admin/trash",
    label: "Trash",
    icon: "🗑️",
    roles: ["super-admin", "admin"],
  },
  { href: "/admin/profile", label: "Profile", icon: "👤" },
];

export function AdminSidebar({ role }: { role: Role }) {
  const pathname = usePathname();
  const items = navItems.filter(
    (item) => !item.roles || item.roles.includes(role)
  );

  return (
    <aside className="adm-sidebar">
      <div className="adm-sidebar-brand">
        <h2>Wan Buffer</h2>
        <span>Admin Panel</span>
      </div>
      <ul className="adm-sidebar-nav">
        {items.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={isActive ? "active" : undefined}
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
