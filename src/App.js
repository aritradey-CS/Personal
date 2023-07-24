import React from "react";
import "./components/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Dashboard from "./components/Dashboard";
import AddWebsite from "./components/AddWebsite";
import { AuthProvider, PrivateRoute } from "./components/AuthContext";

function App() {
  const welcomeMessage = "Welcome to our Website!";
  const handleRegistrationSuccess = () => {
    console.log("Registration successful. Redirecting to the login page...");
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home welcomeMessage={welcomeMessage} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/register"
            element={
              <RegistrationPage
                onRegistrationSuccess={handleRegistrationSuccess}
              />
            }
          />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <PrivateRoute path="/dashboard" element={<Dashboard />} />
          <PrivateRoute path="/add-website" element={<AddWebsite />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
