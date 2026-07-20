"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface AdminHeaderProps {
  username: string;
  email?: string;
  pageTitle?: string;
}

export function AdminHeader({ username, email, pageTitle }: AdminHeaderProps) {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <header className="adm-topbar">
      <h2 style={{ margin: 0, fontSize: "1rem", fontWeight: 600, color: "#0f172a" }}>
        {pageTitle || "Dashboard"}
      </h2>
      <div className="adm-topbar-user">
        <span>{email || username}</span>
        <button
          className="adm-btn adm-btn-ghost adm-btn-sm"
          onClick={handleLogout}
          disabled={loggingOut}
        >
          {loggingOut ? "..." : "Logout"}
        </button>
      </div>
    </header>
  );
}
