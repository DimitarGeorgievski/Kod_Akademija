function Academy(name, students, subjects) {
    this.name = name;
    this.subjects = subjects.map(x => new AcademySubjects(x));
    this.students = students.map(x => new AcademyStudents(x));
    this.start = new Date();
    this.end = new Date();
    this.numberOfClasses = subjects.length * 10;
    this.printStudents = function(){
        this.students.forEach(student => console.log(student));
    };
    this.printSubjects = function(){
        this.subjects.forEach(subject => console.log(subject));
    };
}

function AcademySubjects(subject){
    this.subject = subject;
}

function AcademyStudents(student){
    this.student = student;
}

let Qinshift = new Academy("Qinshift",["Petar", "Trajko"],["math", "english"]);
console.log(Qinshift);
Qinshift.printSubjects();
Qinshift.printStudents();

// -------------------------------------------------------------

function Subject(title,isElective,academy,students) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overrideClasses = function(num){
        if(num >= 3){
            this.numberOfClasses = num;
        }
        console.log(this.numberOfClasses);
    };
}
let predmet = new Subject("Math",true,"Qinshift",["Trajko", "Petko"]);
console.log(predmet);
predmet.overrideClasses(5);

// -------------------------------------------------------------

function Students(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){
        this.academy = academy;
        this.academy.students.push(`${this.firstName} ${this.lastName}`)
    };
    this.startSubject = function(subjectObject){
        if(this.academy){
            for(let subject of this.academy.subjects){
                if(subject.subject.toLowerCase() === subjectObject.title.toLowerCase()){
                    if(this.currentSubject){
                        this.completedSubjects.push(this.currentSubject);
                    }
                        this.currentSubject = subjectObject.title;
                        subjectObject.students.push(`${this.firstName} ${this.lastName}`);
                    console.log(`You have successfully added ${this.currentSubject} to your schedule`);
                }
            }
        }
    if(!this.currentSubject){
        console.log("error");
    }
    };
}

let student1 = new Students("Petar", "Trajkovski", 19);
let math = new Subject("Math", true, "Qinshift", ["Trajko", "Petko"]);
student1.startAcademy(Qinshift);
student1.startSubject(math);