import React, { createContext, useContext, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export function PrivateRoute({ element, ...rest }) {
  const auth = useAuth();

  return auth.isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    // Return null when the user is not authenticated
    <Navigate to="/login" replace={true} />
  );
}
