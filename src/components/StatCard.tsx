import React from "react";

export type StatCardTrend = "up" | "down" | "neutral";

export interface StatCardProps {
  label: string;
  value: string | number;
  trend?: StatCardTrend;
}

export function StatCard({ label, value, trend = "neutral" }: StatCardProps) {
  return (
    <div
      data-trend={trend}
      style={{
        background: "#ffffff",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        padding: "16px 20px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: "#757575",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#212121",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        {trend !== "neutral" && (
          <span
            aria-label={trend === "up" ? "trending up" : "trending down"}
            style={{
              fontSize: "16px",
              color: trend === "up" ? "#2e7d32" : "#c62828",
            }}
          >
            {trend === "up" ? "↑" : "↓"}
          </span>
        )}
      </div>
    </div>
  );
}
