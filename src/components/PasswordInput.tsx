import React, { useState } from "react";

export interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
}

export function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  id,
  disabled = false,
  required = false,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const inputStyle: React.CSSProperties = {
    flex: 1,
    padding: "10px 12px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "#1E293B",
    background: "transparent",
    cursor: disabled ? "not-allowed" : "text",
    minWidth: 0,
  };

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: `1px solid ${error ? "#EF4444" : "#CBD5E1"}`,
    borderRadius: "8px",
    background: disabled ? "#F1F5F9" : "#F8FAFC",
    overflow: "hidden",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#475569",
    marginBottom: "6px",
  };

  const toggleStyle: React.CSSProperties = {
    padding: "0 12px",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    color: "#64748B",
    fontWeight: 500,
    whiteSpace: "nowrap",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={inputId} style={labelStyle}>
        {label}
      </label>
      <div style={wrapperStyle}>
        <input
          id={inputId}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "••••••••"}
          disabled={disabled}
          required={required}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          style={inputStyle}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          style={toggleStyle}
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && (
        <span
          id={`${inputId}-error`}
          role="alert"
          style={{ fontSize: "12px", color: "#EF4444", marginTop: "4px" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
