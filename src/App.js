import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";

function App() {
  const employees = [
    { EmployeeId: 1, name: "John Doe" },
    { EmployeeId: 2, name: "Jane Smith" },
    { EmployeeId: 3, name: "Michael Johnson" },
    { EmployeeId: 4, name: "Sarah Wilson" },
    { EmployeeId: 5, name: "David Brown" },
    { EmployeeId: 6, name: "Emily Davis" },
    { EmployeeId: 7, name: "Chris Lee" },
    { EmployeeId: 8, name: "Robert Taylor" },
    { EmployeeId: 9, name: "Sophia Martinez" },
    { EmployeeId: 10, name: "Daniel Anderson" },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EmployeeList employees={employees} />} />
      </Routes>
    </div>
  );
}

export default App;
