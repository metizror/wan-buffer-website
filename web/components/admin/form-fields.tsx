import type { ReactNode } from "react";

/* ── Shared types ── */

type Option = string | { value: string; label: string };

function normalizeOptions(options: Option[]): { value: string; label: string }[] {
  return options.map((o) =>
    typeof o === "string" ? { value: o, label: o } : o
  );
}

interface FieldWrapperProps {
  label: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

/**
 * Labeled control wrapper — renders a label, an arbitrary control (children),
 * an optional hint line, and an optional error. Used directly for custom
 * controls; the field components below build on it.
 */
export function FieldWrapper({
  label,
  htmlFor,
  hint,
  error,
  required,
  fullWidth,
  children,
}: FieldWrapperProps) {
  return (
    <div className={`adm-field${fullWidth ? " adm-form-full" : ""}`}>
      <label htmlFor={htmlFor}>
        {label}
        {required && <span className="adm-required"> *</span>}
      </label>
      {children}
      {hint && !error && <p className="adm-hint">{hint}</p>}
      {error && <p className="adm-field-error">{error}</p>}
    </div>
  );
}

/* ── FormField (text-like input) ── */

interface FormFieldProps {
  label: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "url" | "number" | "date" | "password";
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  hint,
  error,
  required,
  disabled,
  fullWidth,
}: FormFieldProps) {
  return (
    <FieldWrapper
      label={label}
      htmlFor={name}
      hint={hint}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </FieldWrapper>
  );
}

/* ── FormTextArea ── */

interface FormTextAreaProps {
  label: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  rows?: number;
  fullWidth?: boolean;
  /** Show a live "n / max" character counter. */
  maxCount?: number;
}

export function FormTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  hint,
  error,
  required,
  disabled,
  rows = 3,
  fullWidth = true,
  maxCount,
}: FormTextAreaProps) {
  const counter =
    maxCount != null ? `${value.length} / ${maxCount}` : undefined;
  const mergedHint = counter
    ? hint
      ? `${hint} · ${counter}`
      : counter
    : hint;

  return (
    <FieldWrapper
      label={label}
      htmlFor={name}
      hint={mergedHint}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        disabled={disabled}
      />
    </FieldWrapper>
  );
}

/* ── FormSelect ── */

interface FormSelectProps {
  label: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  hint,
  error,
  required,
  disabled,
  fullWidth,
}: FormSelectProps) {
  return (
    <FieldWrapper
      label={label}
      htmlFor={name}
      hint={hint}
      error={error}
      required={required}
      fullWidth={fullWidth}
    >
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        disabled={disabled}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {normalizeOptions(options).map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
}

/* ── FormActions (Save / Cancel + optional secondary) ── */

interface FormActionsProps {
  saving?: boolean;
  submitLabel?: string;
  savingLabel?: string;
  onCancel?: () => void;
  cancelLabel?: string;
  /** Optional third action, rendered on the left (e.g. "Save draft", "Preview"). */
  secondary?: { label: string; onClick: () => void; disabled?: boolean };
}

export function FormActions({
  saving,
  submitLabel = "Save",
  savingLabel = "Saving...",
  onCancel,
  cancelLabel = "Cancel",
  secondary,
}: FormActionsProps) {
  return (
    <div className="adm-form-actions">
      {secondary && (
        <button
          type="button"
          className="adm-btn adm-btn-ghost adm-form-actions-left"
          onClick={secondary.onClick}
          disabled={secondary.disabled || saving}
        >
          {secondary.label}
        </button>
      )}
      {onCancel && (
        <button
          type="button"
          className="adm-btn adm-btn-secondary"
          onClick={onCancel}
          disabled={saving}
        >
          {cancelLabel}
        </button>
      )}
      <button type="submit" className="adm-btn adm-btn-primary" disabled={saving}>
        {saving ? savingLabel : submitLabel}
      </button>
    </div>
  );
}

/* ── PageHeader (title + subtitle + right-side actions) ── */

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="adm-page-header">
      <div className="adm-page-header-text">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {actions && <div className="adm-page-header-actions">{actions}</div>}
    </div>
  );
}
