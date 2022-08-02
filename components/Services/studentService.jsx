const KEYS = {
  student: "student",
  studentId: "studentId",
};
export const getReligionCollection = () => [
  { id: "hindu", title: "Hindu" },
  { id: "muslim", title: "Muslim" },
  { id: "christian", title: "Christian" },
  { id: "sikh", title: "Sikh" },
];
export function insertStudent(data) {
  let student = getAllStudent();
  data["id"] = generateStudentId();
  student.push(data);
  localStorage.setItem(KEYS.student, JSON.stringify(student));
}
export function updateStudent(data) {
  let student = getAllStudent();
  let recordIndex = student.findIndex((x) => x.id == data.id);
  student[recordIndex] = { ...data };
  localStorage.setItem(KEYS.student, JSON.stringify(student));
}
export function deleteStudent(id) {
  let student = getAllStudents();
  student = student.filter((x) => x.id != id);
  localStorage.setItem(KEYS.student, JSON.stringify(student));
}

export function generateStudentId() {
  if (localStorage.getItem(KEYS.studentId) == null)
    localStorage.setItem(KEYS.studentId, "0");
  var id = parseInt(localStorage.getItem(KEYS.studentId));
  localStorage.setItem(KEYS.studentId, (++id).toString());
  return id;
}
export function getAllStudent() {
  if (localStorage.getItem(KEYS.student) == null)
    localStorage.setItem(KEYS.student, JSON.stringify([]));
  let student = JSON.parse(localStorage.getItem(KEYS.student));
  let departments = getDepartmentCollection();
  return student.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}
