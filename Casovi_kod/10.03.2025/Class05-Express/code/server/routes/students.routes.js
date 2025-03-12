import express from "express";
import {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../services/students.service.js";

const router = express.Router();
router.get("/students", (req, res) => {
  const queryData = req.query;
  console.log(queryData);
  try {
    const students = getStudents(queryData);
    res.send(students);
  } catch (error) {
    res.sendStatus(500);
  }
});

// 2.Get student by id
router.get("/students/:id", (req, res) => {
  // za da ostavime mesto za placeholder za id se praj : i imeto kako kaj nas sto e id
  const studentId = req.params.id; // deka kaj nas pisi :id i to znaci .id inace mozi da se zemi so sakame,dali host,port, i slicno
  try {
    const student = getStudentsById(studentId);
    res.status(200).send(student);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 3.Delete a student by Id
router.delete("/students/:id", (req, res) => {
  const studentId = req.params.id;
  try {
    deleteStudent(studentId);
    res.send(200).json({ success: true });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 4. Add new student
router.post("/students", (req, res) => {
  const newStudentData = req.body;
  console.log(newStudentData);
  try {
    const createdStudent = addStudent(newStudentData);
    res.send(200).send(createdStudent);
  } catch (error) {
    res.send(500);
  }
});

// 5. update Student Info
router.patch("/students/:id", (req, res) => {
  //   console.log(req.body);
  const studentUpdates = req.body;
  const studentId = req.params.id;
  //   console.log(studentUpdates, studentId);
  try {
    const updatedStudent = updateStudent(studentId, studentUpdates);
    console.log(updatedStudent);
    res.send(200).send(updatedStudent);
  } catch (error) {
    if (error.message === "Student not found") {
      res.status(404).send(error.message);
    } else {
      res.status(500);
    }
  }
});
export { router };
