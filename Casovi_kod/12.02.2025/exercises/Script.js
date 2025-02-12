function Person(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
function Student(firstName,lastName,age,academyName,studentId){
    Object.setPrototypeOf(this, new Person(firstName,lastName,age))
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
        console.log(`The student ${this.firstName} is studying in the ${academyName}`)
    }
}
let student1 = new Student("Petar","Stoevski",19,"Qinshift", 19);
let student2 = new Student("Trajko","Gjoreski",21,"Seavus", 20);
console.log(student1)
student1.study();
console.log(student2)
student2.study();

Person.prototype.getAcademy = function(student){
    return student.academyName;
}

// -----------------------------------------------------------

function DesignStudent(firstName,lastName,age,academyName,studentId,isStudentOfTheMonth){
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.academyName = "Design Academy"
    this.attendAdobeExam = function(){
        console.log(`The student ${this.firstName} is doing an adobe exam!`)
    }
}
function codeStudent(firstName,lastName,age,academyName,studentId){
    Object.setPrototypeOf(this,new Student(firstName,lastName,age,academyName,studentId));
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.academyName = "Code Academy"
    this.doProject = function(type){
        if(type === "individual"){
            this.hasIndividualProject = true;
            this.hasGroupProject = false;
            console.log("Student is working on a Individual Project")
        }
        else if(type === "group"){
            this.hasGroupProject = true;
            this.hasIndividualProject = false;
            console.log("Student is working on a Group Project")
        }
    }
}
function NetworkStudent(firstName,lastName,age,academyName,studentId,academyPart){
    Object.setPrototypeOf(this, new Student(firstName,lastName,age,academyName,studentId));
    this.academyName = "Network Academy";
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`the student ${this.firstName} is doing a cisco exam!`)
    }
}
let codeStudent1 = new codeStudent("Dimitar","Georgievski",19,"qinshift",5);
console.log(codeStudent1)
let NetworkStudent1 = new NetworkStudent("Petar","Trajkovski",22,"Qinshift",6,5);
console.log(NetworkStudent1);
let DesignStudent1 = new DesignStudent("Trajko","Petkoski",21,"Qinshift",5,true)
console.log(DesignStudent1);