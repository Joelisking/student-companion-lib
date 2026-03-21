import React from "react";

export interface SecondaryButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

export function SecondaryButton({
  label,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
    >
      {label}
    </button>
  );
}
