import React from "react";

export interface SaveCancelButtonGroupProps {
  onSave: () => void;
  onCancel: () => void;
  disabled?: boolean;
  saveLabel?: string;
  cancelLabel?: string;
}

export function SaveCancelButtonGroup({
  onSave,
  onCancel,
  disabled = false,
  saveLabel = "Save",
  cancelLabel = "Cancel",
}: SaveCancelButtonGroupProps) {
  return (
    <div role="group" aria-label="Save or cancel actions" style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <button
        type="button"
        onClick={onCancel}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #CBD5E1",
          background: "#fff",
          color: "#475569",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        {cancelLabel}
      </button>
      <button
        type="button"
        onClick={onSave}
        disabled={disabled}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: disabled ? "#93C5FD" : "#2563EB",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 600,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {saveLabel}
      </button>
    </div>
  );
}
