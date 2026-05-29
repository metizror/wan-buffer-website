"use client";

import { useState } from "react";

interface DeleteBlogDialogProps {
  title: string;
  onConfirm: () => Promise<void> | void;
  onCancel: () => void;
}

export function DeleteBlogDialog({
  title,
  onConfirm,
  onCancel,
}: DeleteBlogDialogProps) {
  const [deleting, setDeleting] = useState(false);

  async function handleConfirm() {
    setDeleting(true);
    await onConfirm();
    setDeleting(false);
  }

  return (
    <div className="adm-overlay" onClick={onCancel}>
      <div className="adm-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>Delete Blog</h3>
        <p>
          Are you sure you want to delete <strong>&ldquo;{title}&rdquo;</strong>?
          This action cannot be undone.
        </p>
        <div className="adm-dialog-actions">
          <button
            className="adm-btn adm-btn-secondary"
            onClick={onCancel}
            disabled={deleting}
          >
            Cancel
          </button>
          <button
            className="adm-btn adm-btn-danger"
            onClick={handleConfirm}
            disabled={deleting}
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}
