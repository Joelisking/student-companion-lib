import React, { useState } from "react";

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
  errorMessage?: string;
  isLoading?: boolean;
}

export function LoginForm({ onSubmit, errorMessage, isLoading = false }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  function validate() {
    const next: { email?: string; password?: string } = {};
    if (!email) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!password) {
      next.password = "Password is required";
    }
    return next;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setErrors(next);
      return;
    }
    setErrors({});
    onSubmit({ email, password });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #CBD5E1",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#1E293B",
    background: "#F8FAFC",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 500,
    color: "#475569",
    marginBottom: "6px",
  };

  const errorStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    color: "#EF4444",
    marginTop: "4px",
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <label htmlFor="login-email" style={labelStyle}>Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={errors.email ? "login-email-error" : undefined}
          style={{ ...inputStyle, borderColor: errors.email ? "#EF4444" : "#CBD5E1" }}
        />
        {errors.email && (
          <span id="login-email-error" role="alert" style={errorStyle}>
            {errors.email}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="login-password" style={labelStyle}>Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby={errors.password ? "login-password-error" : undefined}
          style={{ ...inputStyle, borderColor: errors.password ? "#EF4444" : "#CBD5E1" }}
        />
        {errors.password && (
          <span id="login-password-error" role="alert" style={errorStyle}>
            {errors.password}
          </span>
        )}
      </div>
      {errorMessage && (
        <p role="alert" style={{ fontSize: "13px", color: "#EF4444", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "8px", padding: "10px 12px", margin: 0 }}>
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: "100%",
          padding: "11px",
          background: isLoading ? "#93C5FD" : "#2563EB",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: 600,
          cursor: isLoading ? "not-allowed" : "pointer",
          transition: "background 0.15s",
        }}
      >
        {isLoading ? "Signing in…" : "Log In"}
      </button>
    </form>
  );
}
