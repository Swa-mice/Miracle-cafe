import "./Login.css";
import { useState } from "react";

function Login({ setIsAdmin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      username === "admin" &&
      password === "2026"
    ) {
      setIsAdmin(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section className="login-container">

      <div className="login-card">

        <h1>☕ Miracle Cafe</h1>

        <p>Admin Dashboard Login</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="login-error">
            {error}
          </p>
        )}

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </section>
  );
}

export default Login;