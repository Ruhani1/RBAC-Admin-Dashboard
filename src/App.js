import React from "react";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>RBAC Admin Dashboard</h1>
      <div className="section-container">
        <UserManagement />
        <RoleManagement />
      </div>
    </div>
  );
}
export default App;