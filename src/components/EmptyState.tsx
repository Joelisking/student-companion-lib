import React from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 24px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "40px",
          marginBottom: "16px",
          lineHeight: 1,
          color: "#bdbdbd",
        }}
        aria-hidden="true"
      >
        📭
      </div>
      <div
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: "#424242",
          marginBottom: description ? "8px" : "0",
        }}
      >
        {title}
      </div>
      {description && (
        <div
          style={{
            fontSize: "14px",
            color: "#757575",
            maxWidth: "320px",
            lineHeight: "1.5",
            marginBottom: action ? "20px" : "0",
          }}
        >
          {description}
        </div>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
