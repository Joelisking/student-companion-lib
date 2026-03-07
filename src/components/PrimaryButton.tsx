import React from "react";

export interface PrimaryButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function PrimaryButton({
  label,
  onClick,
  disabled = false,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
