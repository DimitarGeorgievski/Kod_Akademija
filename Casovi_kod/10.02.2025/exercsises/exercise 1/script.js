function Academy(name,student,subjects){
    this.name = name;
    this.students = [new AcademySubjects(student)];
    this.subjects = [new AcademySubjects(subjects)];
    this.start = new Date();
    this.end = new Date();
    this.numberOfClasses = subjects.length * 10;
    this.printStudents = function(){
        this.students.forEach(student => {
            console.log(student);
        });
    }
    this.printSubjects = function(){
        this.subjects.forEach(subjects => {
            console.log(subjects);
        })
    }
    }
function AcademySubjects(subject){
    this.subject = subject
}
function AcademyStudents(student){
    this.subject = student;
}
let Qinshift = new Academy("Qinshift",["Petar","Trajko"],["C#","node.js"]);
console.log(Qinshift);
Qinshift.printSubjects();
Qinshift.printStudents();
// -------------------------------------------------------------

function Students(title,numberOfClasses = 10,isElective,academy,students){
    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
}

// ---------------------------------------------------------------

function Subject(){

}