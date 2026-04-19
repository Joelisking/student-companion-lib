import React from "react";

export interface AvatarInitialsProps {
  name: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizes = {
  sm: { box: 32, font: 13 },
  md: { box: 40, font: 16 },
  lg: { box: 56, font: 22 },
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function AvatarInitials({ name, size = "md", color = "#4f46e5" }: AvatarInitialsProps) {
  const { box, font } = sizes[size];
  return (
    <div
      aria-label={name}
      style={{
        width: box,
        height: box,
        borderRadius: "50%",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          color: "#ffffff",
          fontSize: font,
          fontWeight: 600,
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        {getInitials(name)}
      </span>
    </div>
  );
}
