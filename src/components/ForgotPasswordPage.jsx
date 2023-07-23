// components/ForgotPasswordPage.jsx
import React, { useState } from "react";

const ForgotPasswordPage = (props) => {
  const [resetEmail, setResetEmail] = useState("");

  const handleResetPassword = () => {
    // Implement your "Forgot Password" logic here (e.g., send reset password email)
    console.log("Reset Password for Email:", resetEmail);
  };

  return (
    <div>
      <h2>Forgot Password Page</h2>
      <div>
        <p>Enter your email to reset your password:</p>
        <input
          type="email"
          id="resetEmail"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <button onClick={handleResetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
