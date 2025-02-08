import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Memberships from "./pages/Memberships";
import Features from "./pages/Features";
import Budget from "./pages/Budget";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

Amplify.configure({
  Auth: {
    Cognito: {
      region: "us-west-1",
      userPoolId: "us-west-1_TjenGVZBx",
      userPoolClientId: "43n3muk7fgao9sf28ec9qkm7p7",
    },
  },
});

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/memberships" element={<Memberships />} />
          {/* Protected routes */}
          <Route
            path="/budget"
            element={
              <ProtectedRoute>
                <Budget />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
