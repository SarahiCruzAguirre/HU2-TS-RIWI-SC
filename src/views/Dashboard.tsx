import React from "react";
import { User } from "../interfaces/User";

interface Props {
  user: User;
  onLogout: () => void;
}

// Simple landing page the user sees right after authentication
const Dashboard: React.FC<Props> = ({ user, onLogout }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <div className="avatar">{user.username[0].toUpperCase()}</div>
        <h2>Welcome, {user.username}</h2>
        <p className="email">{user.email}</p>
        <span className="badge">{user.role ?? "user"}</span>
        <button className="logout-btn" onClick={onLogout}>
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
