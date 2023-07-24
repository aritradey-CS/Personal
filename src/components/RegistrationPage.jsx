import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import the Link component

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = () => {
    // Form validation and other logic can be added here

    // Create an object with registration data
    const userData = { username, email, password };

    // Store the data in localStorage as a JSON string
    localStorage.setItem("userData", JSON.stringify(userData));

    // Set registrationSuccess to true
    setRegistrationSuccess(true);
  };

  if (registrationSuccess) {
    return (
      <>
        <p>Registration Successful! Please proceed to login.</p>
        {/* You can also add a link/button to redirect to the login page */}
        <Link to="/login">Go to Login</Link>
      </>
    );
  }

  return (
    <div>
      <h1>Registration Page</h1>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationPage;
