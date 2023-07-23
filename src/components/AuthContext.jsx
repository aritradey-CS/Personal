// AuthContext.js
import React, { createContext, useContext, useState } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom"; // Don't forget to import useNavigate

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const login = (username, password) => {
    // Retrieve the stored data from localStorage
    const storedData = localStorage.getItem("userData");
    const userData = JSON.parse(storedData);

    // Check if entered credentials match the stored data
    if (userData && username === userData.username && password === userData.password) {
      setUser(userData);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user !== null;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, navigate }}>
      {children}
    </AuthContext.Provider>
  );
}

export function PrivateRoute({ element, ...rest }) {
  const auth = useAuth(); // Access the useAuth hook

  return auth.isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    
    Navigate("/login")
  );
}