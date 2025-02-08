// src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  signIn,
  signUp,
  confirmSignUp,
  signOut,
  getCurrentUser,
} from "aws-amplify/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null);
    }
    setLoading(false);
  }

  const handleSignUp = async (email, password) => {
    try {
      const { userId } = await signUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
      return userId;
    } catch (error) {
      throw error;
    }
  };

  const handleConfirmSignUp = async (email, code) => {
    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code,
      });
    } catch (error) {
      throw error;
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      if (isSignedIn) {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        return currentUser;
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  const value = {
    user,
    loading,
    signUp: handleSignUp,
    confirmSignUp: handleConfirmSignUp,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
