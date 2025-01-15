let arr = [];
let arr1 = [1,"Trajan", [1,2,3,4],{firstname: "Dimitar"}];
let result = ["Trajan", "Stevkovski", 23];
let firstName = result[0];
let lastName = result[1];
let age = result[2];
let arrayOfNumbers = [1,2,3,4,5,7,9];
let arrayOfStudentGrades = [
    {
        name: "trajan",
        grades: [1,2,3,4,5,6]
    },
    {
        name: "trajan",
        grades: [1,2,3,4,5,3]
    },
    {
        name: "trajan",
        grades: [1,2,3,4,5,6]
    },
]

function getStudent(){
    let name = "Filip";
    let age = 20;
    let address = "N/A";
    return [name,age,address];
}
// get value
let secondElement = arrayOfStudentGrades[1];
console.log(secondElement);
// set value
arrayOfStudentGrades[3] = {
    name: "Filip",
    grades: [1,2,3,4,5,6,7,8,9,9]
}
arrayOfStudentGrades[arrayOfStudentGrades.length] = {
    name: "bob",
    grades: [1,3,2,4,5,6,7,8,6]
};
console.log(arrayOfStudentGrades);
// add element at the end using push
arrayOfStudentGrades.push({
    name: "Jill",
    grades: [1,2,3]
},)
arrayOfStudentGrades.push({
    name: "Jill2",
    grades: [1,3,2]
},)
arrayOfStudentGrades.push({
    name: "Jill3",
    grades: [3,2,1]
},)

// adding elements in front of array using shift
arrayOfStudentGrades.unshift({name: "bob1", grades: [4,5,6]});

// removing element from the end of the array using pop
let lastElement = arrayOfStudentGrades.pop();

// removing element from the start of the array using shift 
let firstElement = arrayOfStudentGrades.shift();