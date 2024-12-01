import React, { useState } from "react";

const RoleManagement = () => {
  const [roles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ]);

  return (
    <div className="role-management">
      <h2>Role Management</h2>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong>: {role.permissions.join(", ")}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;