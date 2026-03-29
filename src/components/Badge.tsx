import React from "react";

export type BadgeVariant = "default" | "success" | "warning" | "error";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      data-variant={variant}
      style={{
        display: "inline-block",
        padding: "2px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "18px",
        background: background[variant],
        color: textColor[variant],
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

const background: Record<BadgeVariant, string> = {
  default: "#e0e0e0",
  success: "#e8f5e9",
  warning: "#fff8e1",
  error: "#ffebee",
};

const textColor: Record<BadgeVariant, string> = {
  default: "#424242",
  success: "#1b5e20",
  warning: "#e65100",
  error: "#b71c1c",
};
