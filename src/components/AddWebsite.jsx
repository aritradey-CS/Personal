import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AddWebsite = () => {
  const auth = useAuth();
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
    auth.updateUser({ ...userData, savedData: updatedData });

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
        {/* Form fields and submit button */}
      </form>
    </div>
  );
};

export default AddWebsite;
