import React from "react";

export interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  isLoading?: boolean;
}

export function PrimaryButton({
  label,
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
  isLoading = false,
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-busy={isLoading || undefined}
      aria-disabled={disabled || isLoading || undefined}
    >
      {label}
    </button>
  );
}
