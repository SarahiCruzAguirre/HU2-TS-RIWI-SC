import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./views/Dashboard";
import { User } from "./interfaces/User";
import "./App.css";

// Top-level router: shows Login or Dashboard based on auth state
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (user: User) => {
    setCurrentUser(user); // triggers redirect to Dashboard
  };

  const handleLogout = () => {
    setCurrentUser(null); // sends user back to Login
  };

  return (
    <div className="app">
      {currentUser ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onSuccess={handleLogin} />
      )}
    </div>
  );
};

export default App;
