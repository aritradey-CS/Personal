// App.js
import React from "react";
import "./components/App.css";
import { Routes, Route,} from "react-router-dom"; // Don't forget to import Navigate
import { useNavigate } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";
import Dashboard from "./components/Dashboard";
import AddWebsite from "./components/AddWebsite";
import { AuthProvider, useAuth } from "./components/AuthContext";

function App() {
  const welcomeMessage = "Welcome to our Website!";
  const auth = useAuth();

  const handleRegistrationSuccess = () => {
    console.log("Registration successful. Redirecting to login page...");
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home welcomeMessage={welcomeMessage} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegistrationPage onRegistrationSuccess={handleRegistrationSuccess} />}
        />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <ProtectedRoute path="/dashboard" element={<Dashboard />} />
        <ProtectedRoute path="/add-website" element={<AddWebsite />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
