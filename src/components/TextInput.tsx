import React from "react";

export interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
}

export function TextInput({
  label,
  value,
  onChange,
  placeholder,
  error,
  id,
  disabled = false,
  required = false,
}: TextInputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: `1px solid ${error ? "#EF4444" : "#CBD5E1"}`,
    borderRadius: "8px",
    fontSize: "14px",
    color: "#1E293B",
    background: disabled ? "#F1F5F9" : "#F8FAFC",
    outline: "none",
    boxSizing: "border-box",
    cursor: disabled ? "not-allowed" : "text",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#475569",
    marginBottom: "6px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      <label htmlFor={inputId} style={labelStyle}>
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        style={inputStyle}
      />
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
