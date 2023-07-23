// Home.jsx
import React, { useState } from "react";
import { useAuth } from "./AuthContext"; // Check the path here
import { Link, useNavigate } from "react-router-dom"; // Import the Link and useNavigate components

const Home = (props) => {
  const auth = useAuth();
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Form validation and other login logic can be added here

    // Call the login function from the AuthContext to validate credentials
    const loginSuccess = auth.login(loginID, password);

    if (loginSuccess) {
      // Clear any previous error message
      setError("");

      // Redirect to the dashboard page after successful login
      navigate("/dashboard");
    } else {
      setError("Wrong Login ID or Password. Please try again.");
    }
  };

  return (
    <div className="container">
      {auth.isAuthenticated() ? (
        <>
          <h1>{props.welcomeMessage}</h1>
          {/* Display other content for logged-in users */}
          <button onClick={() => auth.logout()}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome to our Website!</h1>
          <div className="form-group">
            <label>Login ID:</label>
            <input
              type="text"
              value={loginID}
              onChange={(e) => setLoginID(e.target.value)}
              placeholder="Enter your Login ID"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          <button>Forgot Password</button>
          <div className="create-account-link">
            <p>Don't have an account?</p>
            <Link to="/register">Create a new account</Link>
          </div>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Home;
