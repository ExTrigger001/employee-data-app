import React, { useState } from "react";
import { Link } from "react-router-dom";

function EmployeeList(props) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter employees based on search term
  const filteredEmployees = props.employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search employees..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "15px", padding: "8px", width: "80%" }}
      />

      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.EmployeeId}>
            <Link to={`/employees/${employee.EmployeeId}`}>{employee.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
