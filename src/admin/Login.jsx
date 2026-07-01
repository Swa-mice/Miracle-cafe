import "./Login.css";

function Login({ setIsAdmin }) {
  const handleLogin = () => {
    setIsAdmin(true);
  };

  return (
    <section className="login">
      <h1>☕ Miracle Cafe</h1>

      <h2>Admin Login</h2>

      <input
        type="text"
        placeholder="Username"
      />

      <input
        type="password"
        placeholder="Password"
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </section>
  );
}

export default Login;