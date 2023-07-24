import React from "react";
import { useAuth } from "./AuthContext";
import "./dashboard.css";

const Dashboard = () => {
  const auth = useAuth();
  const userData = auth.user;
  const savedData = userData?.savedData || [];

  return (
    <div>
      {auth.isAuthenticated() ? (
        <>
          <h1>Welcome to the Dashboard</h1>
          {savedData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Website</th>
                  <th>Login ID</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {savedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.website}</td>
                    <td>{item.loginID}</td>
                    <td>{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No data to display. Start adding your passwords and IDs!</p>
          )}
        </>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
