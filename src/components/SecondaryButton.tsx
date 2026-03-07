import React from "react";

export interface SecondaryButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function SecondaryButton({
  label,
  onClick,
  disabled = false,
  type = "button",
}: SecondaryButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
