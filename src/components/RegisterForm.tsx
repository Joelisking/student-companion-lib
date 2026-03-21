import React, { useState } from "react";

export interface RegisterFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
  }) => void | Promise<void>;
  errorMessage?: string;
  isLoading?: boolean;
}

export function RegisterForm({ onSubmit, errorMessage, isLoading = false }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  function validate() {
    const next: { name?: string; email?: string; password?: string } = {};
    if (!name) {
      next.name = "Name is required";
    }
    if (!email) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Enter a valid email address";
    }
    if (!password) {
      next.password = "Password is required";
    } else if (password.length < 8) {
      next.password = "Password must be at least 8 characters";
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
    onSubmit({ name, email, password });
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
        <label htmlFor="register-name" style={labelStyle}>Name</label>
        <input
          id="register-name"
          type="text"
          value={name}
          placeholder="Your full name"
          onChange={(e) => setName(e.target.value)}
          aria-describedby={errors.name ? "register-name-error" : undefined}
          style={{ ...inputStyle, borderColor: errors.name ? "#EF4444" : "#CBD5E1" }}
        />
        {errors.name && (
          <span id="register-name-error" role="alert" style={errorStyle}>
            {errors.name}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="register-email" style={labelStyle}>Email</label>
        <input
          id="register-email"
          type="email"
          value={email}
          placeholder="you@example.com"
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={errors.email ? "register-email-error" : undefined}
          style={{ ...inputStyle, borderColor: errors.email ? "#EF4444" : "#CBD5E1" }}
        />
        {errors.email && (
          <span id="register-email-error" role="alert" style={errorStyle}>
            {errors.email}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="register-password" style={labelStyle}>Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          placeholder="Min. 8 characters"
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby={errors.password ? "register-password-error" : undefined}
          style={{ ...inputStyle, borderColor: errors.password ? "#EF4444" : "#CBD5E1" }}
        />
        {errors.password && (
          <span id="register-password-error" role="alert" style={errorStyle}>
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
        {isLoading ? "Creating account…" : "Create Account"}
      </button>
    </form>
  );
}
