// src/EmployeeList.js
import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees available. Please add one using the form.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <Link to={`/employees/${employee.id}`}>
                {employee.name} — {employee.position}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
