function sayHello(name){
    console.log(`Hello ${name}`);
}
// sayHello("Dimitar");
// console.log(document);
// console.log(window);
const say = require("./say");
console.log(say.sayHello("Dimitar"));
console.log(say.sayBye("Dimitar"));
const {sum, substract, multiply} = require("./calculator");
console.log(sum(2,1));
console.log(substract(2,1));
console.log(multiply(2,1));
console.log("-------------------------------------")

// working with file system

const textService = require("./textService");
textService.addText("Hello from Qinshift Academy Group 1");
textService.appendText("We are node.js")
let textFileContect = textService.readText();
console.log(textFileContect);
console.log("--------------------------------------------");
const jsonService = require("./jsonReaderService")
let students = {
    students:[
        {
            firstName: "trajan",
            lastName: "Stevkovski"
        },
        {
            firstName: "Filip",
            lastName: "Zlatanovski"
        },
    ]
};
jsonService.addData(students);
let grades = [1,2,3,4,5,6];
jsonService.addData({grades});