
import React from "react";

function Header() {
  return <h1>Student Management System</h1>;
}

function StudentList() {
  const students = [
    { id: 1, name: "Ravi", marks: 85 },
    { id: 2, name: "Sita", marks: 35 },
    { id: 3, name: "Arjun", marks: 75 },
    { id: 4, name: "Priya", marks: 90 },
    { id: 5, name: "Kiran", marks: 25 }
  ];

  return (
    <div>
      <h2>Student List</h2>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.id}. {student.name} - {student.marks}
            {" "}
            {student.marks >= 40 ? "PASS" : "FAIL"}
          </p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return <h3>Thank You!</h3>;
}

function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
