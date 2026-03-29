import React from "react";

export type BannerType = "success" | "error" | "info" | "warning";

export interface BannerProps {
  message: string;
  type?: BannerType;
  onDismiss?: () => void;
}

export function Banner({ message, type = "info", onDismiss }: BannerProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      data-type={type}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "12px 16px",
        borderRadius: "4px",
        border: `1px solid ${borderColor[type]}`,
        background: background[type],
        color: textColor[type],
        fontSize: "14px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span aria-hidden="true">{icon[type]}</span>
        {message}
      </span>
      {onDismiss && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss alert"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: textColor[type],
            fontSize: "16px",
            lineHeight: 1,
            padding: "0",
            flexShrink: 0,
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
}

const background: Record<BannerType, string> = {
  success: "#e8f5e9",
  error: "#ffebee",
  info: "#e3f2fd",
  warning: "#fff8e1",
};

const borderColor: Record<BannerType, string> = {
  success: "#a5d6a7",
  error: "#ef9a9a",
  info: "#90caf9",
  warning: "#ffe082",
};

const textColor: Record<BannerType, string> = {
  success: "#1b5e20",
  error: "#b71c1c",
  info: "#0d47a1",
  warning: "#e65100",
};

const icon: Record<BannerType, string> = {
  success: "✓",
  error: "✕",
  info: "ℹ",
  warning: "⚠",
};
