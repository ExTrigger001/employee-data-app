import React, { useState, useEffect } from "react";
import "./App.css";

function EmployeeForm() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  // Load saved data from local storage when app starts
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Function to add a new employee
  const addEmployee = () => {
    if (!name || !email || !position) return alert("Please fill all fields");

    const newEmployee = { name, email, position };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);

    // Save to local storage
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    // Clear the input fields
    setName("");
    setEmail("");
    setPosition("");
  };

  return (
    <div className="container">
      <h1>Employee Data Form</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>

      <h2>Saved Employees</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} — {emp.email} — {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeForm;
