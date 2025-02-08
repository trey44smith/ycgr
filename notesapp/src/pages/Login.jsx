// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/memberships");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>
          <Link to="/" className="brand-title">
            You Can Get Rich
          </Link>
        </h1>
      </div>

      <div className="main-container">
        <div className="form-card">
          <h2 className="form-title">Sign in to your account</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-button">
              Sign in
            </button>
          </form>

          <div className="footer-text">
            Don't have an account?{" "}
            <Link to="/signup" className="link">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
