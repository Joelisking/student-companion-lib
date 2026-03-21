import React from "react";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectDropdownProps {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  id?: string;
  disabled?: boolean;
  placeholder?: string;
  required?: boolean;
}

export function SelectDropdown({
  label,
  options,
  value,
  onChange,
  error,
  id,
  disabled = false,
  placeholder,
  required = false,
}: SelectDropdownProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: `1px solid ${error ? "#EF4444" : "#CBD5E1"}`,
    borderRadius: "8px",
    fontSize: "14px",
    color: value ? "#1E293B" : "#94A3B8",
    background: disabled ? "#F1F5F9" : "#F8FAFC",
    outline: "none",
    boxSizing: "border-box",
    cursor: disabled ? "not-allowed" : "pointer",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748B' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 12px center",
    paddingRight: "32px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#475569",
    marginBottom: "6px",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label htmlFor={inputId} style={labelStyle}>
        {label}
      </label>
      <select
        id={inputId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        required={required}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        style={selectStyle}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
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
