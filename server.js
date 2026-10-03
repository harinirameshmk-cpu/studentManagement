const express = require("express");

const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Harini", department: "IT", year: 3 },
  { id: 2, name: "Akshaya", department: "CSE", year: 3 }
];

// GET all students
app.get("/api/students", (req, res) => {
  res.json(students);
});

// GET one student
app.get("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});

// POST a new student
app.post("/api/students", (req, res) => {
  const { name, department, year } = req.body;

  if (!name || !department || !year) {
    return res.status(400).json({
      message: "name, department and year are required"
    });
  }

  const student = {
    id: students.length ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name,
    department,
    year
  };

  students.push(student);

  res.status(201).json({
    message: "Student added successfully",
    student
  });
});

// PUT update student
app.put("/api/students/:id", (req, res) => {
  const student = students.find(s => s.id === Number(req.params.id));

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, department, year } = req.body;

  if (name) student.name = name;
  if (department) student.department = department;
  if (year) student.year = year;

  res.json({
    message: "Student updated successfully",
    student
  });
});

// DELETE student
app.delete("/api/students/:id", (req, res) => {
  const index = students.findIndex(s => s.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.json({
    message: "Student deleted successfully",
    student: deletedStudent
  });
});

app.get("/", (req, res) => {
  res.send("Student Management API is running");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
