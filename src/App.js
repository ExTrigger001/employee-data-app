import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./EmployeeList";

function App() {
  const employees = [
    { EmployeeId: 1, name: "John Doe" },
    { EmployeeId: 2, name: "Jane Smith" },
    { EmployeeId: 3, name: "Michael Johnson" },
  ];

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeList employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
