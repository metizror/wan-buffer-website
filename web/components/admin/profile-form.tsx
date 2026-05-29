"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileFormProps {
  user: {
    displayName: string;
    email: string;
  };
}

export function ProfileForm({ user }: ProfileFormProps) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(user.displayName);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword && newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    setSaving(true);

    const body: Record<string, string> = {};
    if (displayName !== user.displayName) {
      body.displayName = displayName;
    }
    if (newPassword) {
      body.currentPassword = currentPassword;
      body.newPassword = newPassword;
    }

    if (Object.keys(body).length === 0) {
      setError("No changes to save");
      setSaving(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/update-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to update");
        return;
      }

      setSuccess("Profile updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      router.refresh();
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="adm-login-error">{error}</div>}
      {success && (
        <div style={{
          background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0",
          borderRadius: 8, padding: "0.75rem 1rem", fontSize: "0.875rem", marginBottom: "1rem"
        }}>
          {success}
        </div>
      )}

      <div className="adm-form-card">
        <h2>Profile Information</h2>
        <div className="adm-form-grid">
          <div className="adm-field">
            <label>Display Name</label>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="adm-field">
            <label>Email</label>
            <input value={user.email} disabled style={{ opacity: 0.6, cursor: "not-allowed" }} />
          </div>
        </div>
      </div>

      <div className="adm-form-card">
        <h2>Change Password</h2>
        <p style={{ color: "#64748b", fontSize: "0.8125rem", margin: "0 0 1rem" }}>
          Leave blank if you don&apos;t want to change your password.
        </p>
        <div className="adm-form-grid">
          <div className="adm-form-full adm-field">
            <label>Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              autoComplete="current-password"
            />
          </div>
          <div className="adm-field">
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              autoComplete="new-password"
            />
          </div>
          <div className="adm-field">
            <label>Confirm New Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              autoComplete="new-password"
            />
          </div>
        </div>
      </div>

      <div className="adm-form-actions">
        <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>
          {saving ? "Saving..." : "Update Profile"}
        </button>
      </div>
    </form>
  );
}
