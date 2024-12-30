// JS object
let obj = {
    namee: "Dimitar",
    age: 19,
    showName: function(){
        // console.log(this.name);
    }
};

// json Object
let json = {
    "name": "Diimitar",
    "age" : 20
}
json.name;
let namee = json.name;
let age = json["name"];
// ovie dvete se ista rabota samo polesno e prvoto
console.log(name,age);

let academy = {
    academyName : "Qinshift Academy",
    trainer : "Trajan Stevkovski",
    assistant : "Filip Zlatanovski",
    students: [
        "ana", "marija", "Dragan"
    ]
}
console.log(academy);
let jsonContent = JSON.stringify(academy);
console.log(jsonContent);
let parsedJson = JSON.parse(jsonContent);
console.log(parsedJson);