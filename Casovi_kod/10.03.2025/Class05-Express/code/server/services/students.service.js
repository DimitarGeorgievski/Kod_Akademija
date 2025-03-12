import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currenFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currenFileURL);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "..", "data", "students.json");

// 1. Get students data
const getStudents = (queryData) => {
  const students = JSON.parse(
    fs.readFileSync(studentsPath, { encoding: "utf-8" })
  );
  let updatedStudents = [...students];
  if (queryData?.gender) {
    // za da ne padni kodo ako se dobie null ili undefined kodot nema da zastani so ovaj prasalnikot
    updatedStudents = updatedStudents.filter(
      (student) => student.gender === queryData.gender
    );
  }
  if (queryData?.country) {
    // za da ne padni kodo ako se dobie null ili undefined kodot nema da zastani so ovaj prasalnikot
    updatedStudents = updatedStudents.filter(
      (student) => student.country === queryData.country
    );
  }
  if (updatedStudents.length <= 0) {
    // za da ne padni kodo ako se dobie null ili undefined kodot nema da zastani so ovaj prasalnikot
    throw new Error("No students found!");
  }
  return updatedStudents;
};

// 2. Save students data
const saveStudentData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students, 0, 2));
};

// 3. Add student
const addStudent = (newStudentData) => {
  const students = getStudents();
  const newStudent = {
    id: uuidv4(),
    ...newStudentData, // ova za da gi sodrzi site podatoci plus id za noviot korisnik
  };
  const updatedStudents = [...students, newStudent]; // ova e isto kako so push da se praj ama poke profesionalno
  saveStudentData(updatedStudents);
  return newStudent;
};

const getStudentsById = (studentId) => {
  const students = getStudents();
  const foundStudent = students.find((student) => student.id === studentId);
  if (!foundStudent) {
    throw new Error("student not found!");
  }
  return foundStudent;
};

const deleteStudent = (studentId) => {
  const student = getStudents();
  const updatedStudents = student.filter((student) => student.id !== studentId);
  if (student.length === updatedStudents.length) {
    throw new Error("student to delete not found!");
  }
  saveStudentData(updatedStudents);
};
// 6. update student
const updateStudent = (studentId, studentUpdateData) => {
  const students = getStudents();
  const foundStudentIndex = students.findIndex(
    (student) => student.id === studentId
  );
  console.log(foundStudentIndex);
  if (foundStudentIndex < 0) throw new Error("Student not found");

  const updatedStudentData = {
    ...students[foundStudentIndex],
    ...studentUpdateData, // na mestoto na founstudentIndex da go zapisi updatejtiranio student
  };
  console.log(updatedStudentData);
  students[foundStudentIndex] = updatedStudentData;
  console.log(students);
  saveStudentData(students);
  return updatedStudentData;
};

export {
  getStudents,
  getStudentsById,
  addStudent,
  deleteStudent,
  updateStudent,
};
