"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormField, FormSelect, FormActions } from "./form-fields";
import { ROLES, ROLE_LABELS, type Role } from "@/lib/definitions";

interface UserFormProps {
  mode: "create" | "edit";
  currentUserRole: Role;
  isSelf: boolean;
  initialData?: {
    _id?: string;
    displayName: string;
    email: string;
    role: Role;
    isActive: boolean;
  };
}

const ROLE_OPTIONS = ROLES.map((r) => ({ value: r, label: ROLE_LABELS[r] }));

export function UserForm({
  mode,
  currentUserRole,
  isSelf,
  initialData,
}: UserFormProps) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [resetInfo, setResetInfo] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [displayName, setDisplayName] = useState(
    initialData?.displayName || ""
  );
  const [email, setEmail] = useState(initialData?.email || "");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>(initialData?.role || "editor");
  const [isActive, setIsActive] = useState(initialData?.isActive ?? true);

  // A super-admin manages roles/active state; anyone else editing self cannot.
  const canManagePrivileges = currentUserRole === "super-admin";

  function buildBody() {
    if (mode === "create") {
      return { displayName, email, password, role, isActive };
    }
    const body: Record<string, unknown> = { displayName, email };
    if (password) body.password = password;
    if (canManagePrivileges) {
      body.role = role;
      body.isActive = isActive;
    }
    return body;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      const url =
        mode === "edit"
          ? `/api/admin/users/${initialData?._id}`
          : "/api/admin/users";
      const method = mode === "edit" ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildBody()),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to save");
        return;
      }
      router.push("/admin/users");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  async function handleResetPassword() {
    setError("");
    setResetInfo("");
    setGeneratedPassword("");
    if (!initialData?._id) return;
    try {
      const res = await fetch(
        `/api/admin/users/${initialData._id}/reset-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to reset password");
        return;
      }
      if (data.password) {
        setGeneratedPassword(data.password);
        setResetInfo("A new password was generated. Copy it now — it won't be shown again.");
      } else {
        setResetInfo("Password reset.");
      }
    } catch {
      setError("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="adm-login-error">{error}</div>}

      <div className="adm-form-card">
        <h2>Account</h2>
        <div className="adm-form-grid">
          <FormField
            label="Display Name"
            name="displayName"
            value={displayName}
            onChange={setDisplayName}
            placeholder="Full name"
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={setEmail}
            placeholder="user@example.com"
            required
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder={mode === "edit" ? "••••••" : "At least 6 characters"}
            hint={
              mode === "edit"
                ? "Leave blank to keep the current password"
                : "At least 6 characters"
            }
            required={mode === "create"}
          />
          <FormSelect
            label="Role"
            name="role"
            value={role}
            onChange={(v) => setRole(v as Role)}
            options={ROLE_OPTIONS}
            disabled={!canManagePrivileges}
            hint={
              canManagePrivileges ? undefined : "You cannot change your own role"
            }
          />
        </div>

        {canManagePrivileges && (
          <div className="adm-toggle">
            <button
              type="button"
              className={`adm-toggle-switch ${isActive ? "active" : ""}`}
              disabled={isSelf}
              onClick={() => !isSelf && setIsActive(!isActive)}
            />
            <label onClick={() => !isSelf && setIsActive(!isActive)}>
              {isActive ? "Active" : "Inactive"}
              {isSelf && " (you cannot deactivate your own account)"}
            </label>
          </div>
        )}
      </div>

      {mode === "edit" && (
        <div className="adm-form-card">
          <h2>Reset Password</h2>
          <p className="adm-hint">
            Generate a strong random password for this account.
          </p>
          {resetInfo && (
            <p className="adm-hint" style={{ color: "#15803d" }}>
              {resetInfo}
            </p>
          )}
          {generatedPassword && (
            <p style={{ fontFamily: "monospace", fontWeight: 600 }}>
              {generatedPassword}
            </p>
          )}
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={handleResetPassword}
          >
            Generate new password
          </button>
        </div>
      )}

      <div className="adm-form-card">
        <FormActions
          saving={saving}
          submitLabel={mode === "create" ? "Create User" : "Update User"}
          onCancel={() => router.push("/admin/users")}
        />
      </div>
    </form>
  );
}
