"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ROLES,
  ROLE_LABELS,
  type Role,
  type SafeAdminUser,
} from "@/lib/definitions";
import { relativeTime } from "@/lib/relative-time";

const ROLE_BADGE: Record<Role, string> = {
  "super-admin": "adm-badge-blue",
  admin: "adm-badge-green",
  editor: "adm-badge-gray",
};

interface UsersTableProps {
  initialUsers: SafeAdminUser[];
  currentUserId: string;
  currentUserRole: Role;
}

export function UsersTable({
  initialUsers,
  currentUserId,
  currentUserRole,
}: UsersTableProps) {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deleteTarget, setDeleteTarget] = useState<SafeAdminUser | null>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isInitialMount = useRef(true);

  const isSuperAdmin = currentUserRole === "super-admin";

  const fetchUsers = useCallback(async (searchVal: string, roleVal: string) => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (searchVal.trim()) params.set("search", searchVal.trim());
      if (roleVal) params.set("role", roleVal);
      const res = await fetch(`/api/admin/users?${params}`);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setUsers(data.users);
    } catch {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    fetchUsers(search, role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role]);

  useEffect(() => {
    if (isInitialMount.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchUsers(search, role);
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  async function toggleActive(user: SafeAdminUser) {
    const next = !user.isActive;
    setError("");
    const res = await fetch(`/api/admin/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isActive: next }),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setUsers((prev) =>
        prev.map((u) => (u._id === user._id ? { ...u, isActive: next } : u))
      );
    } else {
      setError(data.error || "Failed to update user");
    }
  }

  async function handleDelete(user: SafeAdminUser) {
    setError("");
    const res = await fetch(`/api/admin/users/${user._id}`, {
      method: "DELETE",
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok) {
      setUsers((prev) => prev.filter((u) => u._id !== user._id));
    } else {
      setError(data.error || "Failed to delete user");
    }
    setDeleteTarget(null);
  }

  return (
    <div className="adm-table-wrap">
      <div className="adm-table-toolbar">
        <input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">All Roles</option>
          {ROLES.map((r) => (
            <option key={r} value={r}>
              {ROLE_LABELS[r]}
            </option>
          ))}
        </select>
        <span className="adm-table-count">
          {users.length} user{users.length !== 1 ? "s" : ""}
        </span>
      </div>

      {error && <div className="adm-bulk-bar">{error}</div>}

      {loading ? (
        <div className="adm-empty">
          <p>Loading...</p>
        </div>
      ) : users.length === 0 ? (
        <div className="adm-empty">
          <p>No users found</p>
        </div>
      ) : (
        <table className="adm-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last login</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const isYou = user._id === currentUserId;
              const canEdit = isSuperAdmin || isYou;
              const canDelete = isSuperAdmin && !isYou;
              const canToggle = isSuperAdmin && !isYou;
              return (
                <tr key={user._id}>
                  <td>
                    <strong>{user.displayName}</strong>
                    {isYou && (
                      <span
                        className="adm-badge adm-badge-gray"
                        style={{ marginLeft: 8 }}
                      >
                        You
                      </span>
                    )}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`adm-badge ${ROLE_BADGE[user.role]}`}>
                      {ROLE_LABELS[user.role]}
                    </span>
                  </td>
                  <td>
                    {user.lastLoginAt
                      ? relativeTime(user.lastLoginAt)
                      : "Never"}
                  </td>
                  <td>
                    <div className="adm-toggle">
                      <button
                        type="button"
                        className={`adm-toggle-switch ${
                          user.isActive ? "active" : ""
                        }`}
                        disabled={!canToggle}
                        title={
                          canToggle
                            ? undefined
                            : isYou
                            ? "You cannot change your own status"
                            : "Only a super-admin can change this"
                        }
                        onClick={() => canToggle && toggleActive(user)}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="adm-actions">
                      {canEdit && (
                        <Link
                          href={`/admin/users/${user._id}/edit`}
                          className="adm-btn adm-btn-secondary adm-btn-sm"
                        >
                          Edit
                        </Link>
                      )}
                      {canDelete && (
                        <button
                          className="adm-btn adm-btn-danger adm-btn-sm"
                          onClick={() => setDeleteTarget(user)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {deleteTarget && (
        <div className="adm-overlay" onClick={() => setDeleteTarget(null)}>
          <div className="adm-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Delete User</h3>
            <p>
              Delete <strong>{deleteTarget.displayName}</strong> (
              {deleteTarget.email})? This action cannot be undone.
            </p>
            <div className="adm-dialog-actions">
              <button
                className="adm-btn adm-btn-secondary"
                onClick={() => setDeleteTarget(null)}
              >
                Cancel
              </button>
              <button
                className="adm-btn adm-btn-danger"
                onClick={() => handleDelete(deleteTarget)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
