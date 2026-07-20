"use client";

import { useRef, useState } from "react";

interface ImageUploadProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  hint?: string;
  /** Allow pasting/editing the URL directly in addition to uploading. */
  allowUrlInput?: boolean;
}

export function ImageUpload({
  label,
  value,
  onChange,
  hint,
  allowUrlInput = true,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Upload failed");
        return;
      }
      onChange(data.url);
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="adm-field">
      <label>{label}</label>

      <div className="adm-imgupload">
        <div className="adm-imgupload-preview">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="Selected upload preview" />
          ) : (
            <span className="adm-imgupload-empty">No image</span>
          )}
        </div>

        <div className="adm-imgupload-controls">
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
          <button
            type="button"
            className="adm-btn adm-btn-secondary adm-btn-sm"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
          >
            {uploading ? "Uploading..." : value ? "Replace" : "Upload image"}
          </button>
          {value && (
            <button
              type="button"
              className="adm-btn adm-btn-ghost adm-btn-sm"
              onClick={() => onChange("")}
              disabled={uploading}
            >
              Remove
            </button>
          )}
        </div>
      </div>

      {allowUrlInput && (
        <input
          className="adm-imgupload-url"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="or paste an image URL"
        />
      )}

      {hint && !error && <p className="adm-hint">{hint}</p>}
      {error && <p className="adm-field-error">{error}</p>}
    </div>
  );
}
