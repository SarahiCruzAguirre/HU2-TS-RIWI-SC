import React, { useState } from "react";
import { authenticate } from "../utils/auth";
import { User } from "../interfaces/User";

interface Props {
  onSuccess: (user: User) => void; // called when credentials are valid
}

const Login: React.FC<Props> = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Small delay to mimic a real async request
    setTimeout(() => {
      const user = authenticate(username, password);

      if (user) {
        // Redirect: swap the current view from Login to Dashboard
        onSuccess(user);
      } else {
        setError("Invalid username or password.");
      }

      setLoading(false);
    }, 600);
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="brand">
          <span className="brand-icon">⬡</span>
          <h1>Sign in</h1>
        </div>

        <div className="field">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            placeholder="admin"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Error message shown when authenticate returns null */}
        {error && <p className="error-msg">{error}</p>}

        <button className="submit-btn" type="submit" disabled={loading}>
          {loading ? "Checking…" : "Continue →"}
        </button>

        <p className="hint">
          Try: <code>admin / admin123</code> &nbsp;·&nbsp;{" "}
          <code>sara / 1234</code>
        </p>
      </form>
    </div>
  );
};

export default Login;
