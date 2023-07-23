import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth(); // Use the useAuth hook
  const navigate = useNavigate(); // Add this line to use the useNavigate hook

  const handleLogin = () => {
    // Attempt login using the login function from the AuthContext
    const isAuthenticated = auth.login(username, password);

    if (isAuthenticated) {
      // Clear any previous error message
      setError("");

      // Redirect to the dashboard after successful login
      navigate("/dashboard");
    } else {
      // Set the error message for wrong login ID or password
      setError("Wrong Login ID or Password. Please try again.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default LoginPage;
