"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * One-off import of the events that ship as static data in lib/events-data.ts.
 * Idempotent: slugs already in the database are skipped.
 */
export function EventsSeedButton() {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleSeed() {
    if (!confirm("Import the built-in events into the database? Existing events are left untouched.")) {
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/admin/events/seed", { method: "POST" });
      if (res.ok) router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      className="adm-btn adm-btn-secondary adm-btn-sm"
      onClick={handleSeed}
      disabled={busy}
    >
      {busy ? "Importing..." : "Import built-in events"}
    </button>
  );
}
