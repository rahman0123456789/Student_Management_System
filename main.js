// //  // Student Management System......
class Student {
    name;
    studentID;
    enrolledCourses;
    balance;
    constructor(name) {
        this.name = name;
        // Generate a unique 5-digit student ID
        this.studentID = this.generateStudentID();
        this.enrolledCourses = [];
        this.balance = 0;
    }
    generateStudentID() {
        // Generate a random 5-digit number
        return Math.floor(10000 + Math.random() * 90000).toString();
    }
    enrollCourse(course) {
        this.enrolledCourses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name}: $${this.balance}`);
    }
    payTuition(amount) {
        this.balance -= amount;
        console.log(`Payment of $${amount} received from ${this.name}`);
        this.viewBalance();
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Enrolled Courses: ${this.enrolledCourses.join(', ')}`);
        this.viewBalance();
    }
}
class StudentManagementSystem {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log(`${name} added to the system with Student ID: ${newStudent.studentID}`);
    }
    enrollStudent(studentID, course) {
        const student = this.findStudent(studentID);
        if (student) {
            student.enrollCourse(course);
            console.log(`${student.name} enrolled in ${course}`);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    findStudent(studentID) {
        return this.students.find(student => student.studentID === studentID);
    }
    payTuition(studentID, amount) {
        const student = this.findStudent(studentID);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    showStudentStatus(studentID) {
        const student = this.findStudent(studentID);
        if (student) {
            student.showStatus();
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
}
const studentSystem = new StudentManagementSystem();
studentSystem.addStudent("Abdul Rahman");
studentSystem.addStudent("Sajjad Ahmed");
studentSystem.enrollStudent("87654", "Java");
studentSystem.enrollStudent("34567", "Python");
studentSystem.payTuition("87654", 500);
studentSystem.payTuition("43567", 700);
studentSystem.showStudentStatus("87654");
studentSystem.showStudentStatus("34567");
export {};
