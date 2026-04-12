import React from "react";

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ title, children, footer }: CardProps) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        padding: "16px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {title && (
        <div
          style={{
            fontSize: "16px",
            fontWeight: 600,
            color: "#212121",
            marginBottom: "12px",
          }}
        >
          {title}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div
          style={{
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
