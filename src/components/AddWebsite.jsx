import React, { useState, useContext } from "react";
import './add-website.css';
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AddWebsite = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [website, setWebsite] = useState("");
  const [loginID, setLoginID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new data object
    const newData = {
      website,
      loginID,
      password,
    };

    // Get the current user data
    const userData = auth.user;

    // Update the savedData array
    const updatedData = [...(userData.savedData || []), newData];

    // Update the user's data in the AuthContext
    auth.setUser({ ...userData, savedData: updatedData });

    // Reset the form fields
    setWebsite("");
    setLoginID("");
    setPassword("");

    // Redirect back to the dashboard
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Add Website</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for website, loginID, password */}
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="text"
          placeholder="Login ID"
          value={loginID}
          onChange={(e) => setLoginID(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddWebsite;
