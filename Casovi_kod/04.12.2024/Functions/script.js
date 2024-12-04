function greeting(message){
    console.log("Greetings " + message + " from function")
}
greeting("Dimitar");
function welcomeMessage(firstName, lastName){
    console.log(`welcome ${firstName} ${lastName}`)
}
let name= "Dimitar";
let surname = "Georgievski"
welcomeMessage(name, surname);
function Identitet(name,surname,year,message){
    console.log(`My name is ${name} ${surname} also i am ${year} years old, this is my message: ${message}`);
}
Identitet("Dimitar", "Georgievski", 18, "im a chill guy");
function sum(num,num1){
    let result = num + num1;
    return result;
}
function subtract(num,num1){
    let result = num - num1;
    return result;
}
function multiplies(num,num1){
    let result = num * num1;
    return result;
}
function divide(num,num1){
    if(num && num1){
        return num / num1;
    }
    else{
        return -1;
    }
}
let sumOfTwoNumbers = sum(2,3);
let subtractOfTwoNumbers = subtract(3,2);
let multiplieOfTwoNumbers = multiplies(2,3);
let divideOfTwoNumbers = divide(5,0);
console.log(sumOfTwoNumbers);
console.log(subtractOfTwoNumbers);
console.log(multiplieOfTwoNumbers);
console.log(divideOfTwoNumbers);

function calculateLoan(amount,months,interest,name){
    console.log(amount);
    console.log(months);
    console.log(interest);
    console.log(name);
}
calculateLoan();
calculateLoan(1,12, "Dimitar", "Georgievski", 14);

function calculator(num,num1,operation = "+"){
    switch(operation){
        case "+":
            return num + num1;
        case "-":
            return num - num1;
            default:
                return null;
    }
}
console.log(calculator(1,2));
console.log(calculator(12,2, "-"));
console.log("------------")

