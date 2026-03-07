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
    <div>
      <button type="button" onClick={onCancel}>
        {cancelLabel}
      </button>
      <button type="button" onClick={onSave} disabled={disabled}>
        {saveLabel}
      </button>
    </div>
  );
}
