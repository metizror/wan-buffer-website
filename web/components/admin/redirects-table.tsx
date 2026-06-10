"use client";

import { useState, useCallback, useEffect, useRef } from "react";

interface RedirectEntry {
  _id: string;
  oldUrl: string;
  newUrl: string;
  isPermanent: boolean;
  isActive: boolean;
  createdAt: string;
}

interface Props {
  initialRedirects: RedirectEntry[];
}

export function RedirectsTable({ initialRedirects }: Props) {
  const [redirects, setRedirects] = useState(initialRedirects);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formOldUrl, setFormOldUrl] = useState("");
  const [formNewUrl, setFormNewUrl] = useState("");
  const [formPermanent, setFormPermanent] = useState(true);

  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const fetchRedirects = useCallback(async (searchVal: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchVal.trim()) params.set("search", searchVal.trim());
      const res = await fetch(`/api/admin/redirects?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setRedirects(data.redirects);
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
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchRedirects(search), 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  function resetForm() {
    setFormOldUrl("");
    setFormNewUrl("");
    setFormPermanent(true);
    setEditId(null);
    setShowForm(false);
    setError("");
  }

  function startEdit(r: RedirectEntry) {
    setFormOldUrl(r.oldUrl);
    setFormNewUrl(r.newUrl);
    setFormPermanent(r.isPermanent);
    setEditId(r._id);
    setShowForm(true);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formOldUrl.trim() || !formNewUrl.trim()) {
      setError("Both URLs are required");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const body = {
        oldUrl: formOldUrl.trim(),
        newUrl: formNewUrl.trim(),
        isPermanent: formPermanent,
      };

      const url = editId
        ? `/api/admin/redirects/${editId}`
        : "/api/admin/redirects";
      const method = editId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to save");
        return;
      }

      resetForm();
      fetchRedirects(search);
    } catch {
      setError("Failed to save redirect");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this redirect?")) return;
    const res = await fetch(`/api/admin/redirects/${id}`, { method: "DELETE" });
    if (res.ok) fetchRedirects(search);
  }

  async function toggleActive(r: RedirectEntry) {
    const res = await fetch(`/api/admin/redirects/${r._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: !r.isActive }),
    });
    if (res.ok) {
      setRedirects(
        redirects.map((item) =>
          item._id === r._id ? { ...item, isActive: !item.isActive } : item
        )
      );
    }
  }

  return (
    <>
      <div className="adm-page-header">
        <h1>URL Redirects</h1>
        {!showForm && (
          <button
            className="adm-btn adm-btn-primary adm-btn-sm"
            onClick={() => { resetForm(); setShowForm(true); }}
          >
            + Add Redirect
          </button>
        )}
      </div>

      {showForm && (
        <div className="adm-form-card">
          <h2>{editId ? "Edit Redirect" : "Add New Redirect"}</h2>
          {error && <div className="adm-login-error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="adm-form-grid">
              <div className="adm-field">
                <label>Old URL (from)</label>
                <input
                  type="text"
                  placeholder="/odoo/old-page"
                  value={formOldUrl}
                  onChange={(e) => setFormOldUrl(e.target.value)}
                />
              </div>
              <div className="adm-field">
                <label>New URL (redirect to)</label>
                <input
                  type="text"
                  placeholder="/odoo/new-page or https://example.com/page"
                  value={formNewUrl}
                  onChange={(e) => setFormNewUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="adm-toggle" style={{ margin: "0.75rem 0" }}>
              <button
                type="button"
                className={`adm-toggle-switch${formPermanent ? " active" : ""}`}
                onClick={() => setFormPermanent(!formPermanent)}
              />
              <label onClick={() => setFormPermanent(!formPermanent)}>
                Permanent redirect (301) {!formPermanent && "- Temporary (302)"}
              </label>
            </div>
            <div className="adm-form-actions">
              <button
                type="button"
                className="adm-btn adm-btn-secondary"
                onClick={resetForm}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="adm-btn adm-btn-primary"
                disabled={saving}
              >
                {saving ? "Saving..." : editId ? "Update Redirect" : "Add Redirect"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="adm-table-wrap">
        <div className="adm-table-toolbar">
          <input
            placeholder="Search URLs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="adm-table-count">
            {redirects.length} redirect{redirects.length !== 1 ? "s" : ""}
          </span>
        </div>

        {loading ? (
          <div className="adm-empty">
            <p>Loading...</p>
          </div>
        ) : redirects.length === 0 ? (
          <div className="adm-empty">
            <p>No redirects found</p>
          </div>
        ) : (
          <table className="adm-table">
            <thead>
              <tr>
                <th>Old URL</th>
                <th>Redirects To</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {redirects.map((r) => (
                <tr key={r._id}>
                  <td style={{ wordBreak: "break-all", maxWidth: 280 }}>
                    <strong>{r.oldUrl}</strong>
                  </td>
                  <td style={{ wordBreak: "break-all", maxWidth: 280 }}>
                    {r.newUrl}
                  </td>
                  <td>
                    <span className={`adm-badge ${r.isPermanent ? "adm-badge-green" : "adm-badge-yellow"}`}>
                      {r.isPermanent ? "301" : "302"}
                    </span>
                  </td>
                  <td>
                    <span className={`adm-badge ${r.isActive ? "adm-badge-green" : "adm-badge-yellow"}`}>
                      {r.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <div className="adm-actions">
                      <button
                        className="adm-btn adm-btn-secondary adm-btn-sm"
                        onClick={() => startEdit(r)}
                      >
                        Edit
                      </button>
                      <button
                        className="adm-btn adm-btn-ghost adm-btn-sm"
                        onClick={() => toggleActive(r)}
                      >
                        {r.isActive ? "Disable" : "Enable"}
                      </button>
                      <button
                        className="adm-btn adm-btn-danger adm-btn-sm"
                        onClick={() => handleDelete(r._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
