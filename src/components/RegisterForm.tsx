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

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="register-name">Name</label>
        <input
          id="register-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby={errors.name ? "register-name-error" : undefined}
        />
        {errors.name && (
          <span id="register-name-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby={errors.email ? "register-email-error" : undefined}
        />
        {errors.email && (
          <span id="register-email-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby={
            errors.password ? "register-password-error" : undefined
          }
        />
        {errors.password && (
          <span id="register-password-error" role="alert">
            {errors.password}
          </span>
        )}
      </div>
      {errorMessage && <p role="alert">{errorMessage}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Loading..." : "Register"}
      </button>
    </form>
  );
}
