let myApp = document.getElementById("app");
let titleDiv = myApp.firstElementChild;
let contentDiv = document.querySelector("#content");
let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A","B","C","A"];

function printGrades(subject,grades,element){
    element.innerHTML = "";
    let content = "<ul>";
    for(let i=0;i<subject.length;i++){
        content += `<li>${subject[i]}: ${grades[i]}</li>`
    }
    content += "</ul>";
    // console.log(content);
    element.innerHTML = content;
}
printGrades(subjects,grades,contentDiv);

function printStudents(students, element){
    element.innerHTML = "";
    let content = '<ol>';
    for(let student of students){
        content += `<li>${student}</li>`
    }
    content += "</ol>";
    element.innerHTML = content;
}
// printStudents(students,contentDiv);

function academyPanel(person,name){
    if(person === 'student' && name.length >=2){
        titleDiv.innerHTML = `<h1>Hello there ${name}</h1>`;
        titleDiv.innerHTML += `<p>Welcome to you student page</p>`;
        titleDiv.innerHTML += '<h3>Your grades:</h3>';
        printGrades(subjects,grades,contentDiv);
    }
    else if(person === "teacher" && name.length >=2){
        titleDiv.innerHTML = `<h1>Hello ${name}</h1>
        <p>Welcome to teacher page</p>
        <h3>Your students:</h3>`
        printStudents(students,contentDiv);
    }
    else{
        titleDiv.innerHTML = "<h1><b>Your login was unsuccessfull</b></h1>";
        titleDiv.innerHTML += "<p>Please try again</p>";
    }
}
let personType = prompt("Are you a student or Teacher?");
let name = prompt("What is your name");
academyPanel(personType,name);