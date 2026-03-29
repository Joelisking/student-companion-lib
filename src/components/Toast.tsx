import React, { useEffect } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onDismiss: () => void;
}

export function Toast({
  message,
  type = "info",
  duration = 4000,
  onDismiss,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-type={type}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        padding: "12px 16px",
        borderRadius: "6px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        minWidth: "240px",
        maxWidth: "400px",
        background: background[type],
        color: "#fff",
        fontSize: "14px",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onDismiss}
        aria-label="Dismiss notification"
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          cursor: "pointer",
          fontSize: "16px",
          lineHeight: 1,
          padding: "0",
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  );
}

const background: Record<ToastType, string> = {
  success: "#2e7d32",
  error: "#c62828",
  info: "#1565c0",
  warning: "#e65100",
};
