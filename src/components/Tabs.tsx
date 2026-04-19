import React, { useState } from "react";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultIndex?: number;
}

export function Tabs({ tabs, defaultIndex = 0 }: TabsProps) {
  const [active, setActive] = useState(defaultIndex);

  return (
    <div style={{ width: "100%" }}>
      <div
        role="tablist"
        style={{
          display: "flex",
          borderBottom: "2px solid #e0e0e0",
          marginBottom: "24px",
          gap: "4px",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            style={{
              padding: "10px 20px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: active === i ? 600 : 400,
              color: active === i ? "#4f46e5" : "#757575",
              borderBottom: active === i ? "2px solid #4f46e5" : "2px solid transparent",
              marginBottom: "-2px",
              transition: "color 0.15s, border-color 0.15s",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[active]?.content}</div>
    </div>
  );
}
