// src/pages/SignUp.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./SignUp.css";

const SignUp = () => {
  const [step, setStep] = useState("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState("");
  const { signUp, confirmSignUp } = useAuth();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      await signUp(email, password);
      setStep("confirm");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleConfirmation = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await confirmSignUp(email, confirmationCode);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <h1>
          <Link to="/" className="brand-title">
            You Can Get Rich
          </Link>
        </h1>
      </div>

      <div className="main-container">
        <div className="form-card">
          <h2 className="form-title">
            {step === "signup" ? "Create your account" : "Verify your email"}
          </h2>

          {step === "signup" ? (
            <form onSubmit={handleSignUp}>
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

              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  className="form-input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-button">
                Sign up
              </button>
            </form>
          ) : (
            <form onSubmit={handleConfirmation}>
              <div className="form-group">
                <label htmlFor="code" className="form-label">
                  Confirmation Code
                </label>
                <input
                  id="code"
                  type="text"
                  required
                  className="form-input"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
              </div>

              {error && <div className="error-message">{error}</div>}

              <button type="submit" className="submit-button">
                Verify
              </button>

              <button
                type="button"
                onClick={() => setStep("signup")}
                className="back-button">
                Back to sign up
              </button>
            </form>
          )}

          <div className="footer-text">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
