let simpleArray = [1,2,3,4,5,6,[1,2,3]];
let students = new Map();
console.log(students);
students.set("Trajan","Stevkovski");
students.set("Trajan", "Nesto drugo");
students.set("Filip", "Something");
students.set("Bob", "Bobski");
let student1 = students.get("Filip");
console.log(student1);
// check if KEY exists
let exists = students.has("Bob");
console.log(exists);
let exists1 = students.has("Bob1");
console.log(exists1);
// checking length for maps
console.log(students.size);
// delete record
// students.delete("Trajan");
//clear map 
// students.clear();
for(let [key,Value] of students){
    console.log("Key: ",key);
    console.log("Value: ",Value);
}
class Employee{
    constructor(id,name,position,salary){
        this.id = id;
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}
let john = new Employee(1,"John", "Developer", 100);
let Jane = new Employee(2,"Jane", "Developer", 200);
let Bob = new Employee(3,"Bob", "Developer", 300);
let Jill = new Employee(4,"Jill", "Developer", 400);
let Jake = new Employee(5,"Jake", "Tester", 500);
let Itan = new Employee(6,"Itan", "Tester", 600);
let Employee1 = new Employee(7,"Employee1", "Tester", 700);
let Empolyee2 = new Employee(8,"Empolyee2", "Design", 800);
let Employee3 = new Employee(9,"Employee3", "Design", 900);

let employees = [
    john,
    Jane,
    Bob ,
    Jill,
    Jake,
    Itan,
    Employee1,
    Empolyee2,
    Employee3,
]
let mappedEmployees = new Map()
for(let employee of employees){
    if(mappedEmployees.has(employee.position)){
        let employess = mappedEmployees.get(employee.position);
        mappedEmployees.set(employee.position, [...employess,employee]);
    }
    else{
        mappedEmployees.set(employee.position, [employee])
    }
}
let developers = mappedEmployees.get("Tester");
for(let empl of developers){
    console.log(empl);
}

// SET
// creating set
let mySet =  new Set();
// adding values
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);
mySet.add(2); // adds the 2 but we only have unique values
// check if value exists
console.log(mySet.has(2));
console.log(mySet.has(7));

console.log("--------------------------------")
// check size/length
console.log(mySet.size);
// remove value
mySet.delete(2);
// clear set
// mySet.clear();

//return array of key value pairs
let a = mySet.entries();
console.log(a);
let values = mySet.values();
console.log(values);
let numbers = [1,2,3,4,4,4,4,4,4,4,4,4,5,1,2,3,5,10,12,11,10,1,2,3,4,5];

let numbersSet = new Set(numbers); 
console.log(numbersSet);