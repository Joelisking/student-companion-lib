import React, { useState } from "react";

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
  errorMessage?: string;
}

export function LoginForm({ onSubmit, errorMessage }: LoginFormProps) {
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

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={errors.email ? "login-email-error" : undefined}
        />
        {errors.email && (
          <span id="login-email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby={
            errors.password ? "login-password-error" : undefined
          }
        />
        {errors.password && (
          <span id="login-password-error" role="alert">
            {errors.password}
          </span>
        )}
      </div>
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <button type="submit">Log In</button>
    </form>
  );
}
