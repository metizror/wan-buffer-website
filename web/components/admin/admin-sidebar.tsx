"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/blogs", label: "Blogs", icon: "📝" },
  { href: "/admin/profile", label: "Profile", icon: "👤" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="adm-sidebar">
      <div className="adm-sidebar-brand">
        <h2>Wan Buffer</h2>
        <span>Admin Panel</span>
      </div>
      <ul className="adm-sidebar-nav">
        {navItems.map((item) => {
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
