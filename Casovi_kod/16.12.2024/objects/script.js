let hotel = {
    name: "Quay",
    rooms: 30,
    booked: 25,
    hasGym: true,
    roomTypes: ["single", "double","suite"],
    checkAvailability: function(){
        console.log("sorry we are booked");
    }
}
hotel.checkAvailability();
console.log(hotel.name);

let name = hotel.name;
let rooms = hotel["rooms"];
console.log(rooms);
hotel["checkAvailability"]();

let propertiesForReview = ["name", "hasGym", "roomTypes"];
for (let prop of propertiesForReview){
    console.log(hotel[prop]);
}
// so ova se citat site raboti od objekto toest tie raboti so gi imame zapisano kako string

let describe = {
    nameStudent: "Dimitar",
    surnameStudent: "Georgievski",
    yearsStudent: 19,
    student: true,
    studentChecker: function(input){
        input = prompt("Vnesi dali si student? Y/N")
        if(input === "Y"){
            return "Student sum"
        }
        else if(input === "N"){
            return "ne sum student"
        }
        else{
            return "Vnesi tocna vrednost"
        }
    }
}
let informaciiStudent = ["nameStudent","surnameStudent","yearsStudent","student"];

// za da povikas funkcija mora da ima edinstvena promenliva inace nema da raboti 

// let studentStatus = describe["studentChecker"]();
// for (let i of informaciiStudent){
//     console.log(describe[i]);
// }
// console.log(studentStatus);

let hotel1 = new Object();
hotel1.name = "Quay";
hotel1.rooms = 50;
hotel1.hasGym = false;
hotel1.checkAvailability = function(){
    console.log("Only single rooms available")
};
hotel1["pricePerNight"] = 100;
hotel1.propertyForDelete =true;
delete hotel1.propertyForDelete;
hotel1.roomTypes = ["single"];
console.log(hotel1)

let person ={
    firstName: "Dimitar",
    lastName: "Georgievski"
};
person.firstName = "Marija";
person["lastName"] = "Bogeska";
person.age = 23;

describe["nameStudent"] = "Marija";
describe["surnameStudent"] = "Bogeska";
describe.yearsStudent = 19.5;
describe.student = false;
console.log(describe);

let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "SEDC",
    lecture: "Objects"
}
delete trainer.lecture;
trainer.age = 19;
trainer.getFullName = function(){
    return `${trainer.name} ${trainer.lastName}`
}
let functionExercise = trainer["getFullName"]();
console.log(trainer);
console.log(functionExercise);

function Hotel(name,rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}
let hotel3 = new Hotel("holiday Inn",100, 89);
console.log(hotel3);
let hotel4 = new Hotel("Meriot",200,200);
let hotel5 = new Hotel("Park", 20,10);
console.log(hotel4);
console.log(hotel5);
console.log(hotel3.checkAvailability());
console.log(hotel4.checkAvailability());
console.log(hotel5.checkAvailability());
