//definiton
function fnc(a,b){
    return;
}
//call
fnc(1,2);

// definition of anonymous function
let anonymousFnc = function(a,b){

}
// call
anonymousFnc(1,2);

function calculator(num,num1, operation){
    let result = operation(num,num1);
    return result;
}
let result = calculator(2,2, function(num,num1){
    return num + num1;
})
let result1 = calculator(5,5,function(a,b){
    let body = document.getElementsByTagName("body");
    // body[0].innerText = "Nekakov tekst";
    let result = a * b;
    return result; 
});
let substract = function(c,d){
    return c - d;
}
console.log(calculator(4,2, substract));

//normal function declaration
function fnc1(a,b){
    return a+b;
}
//anonymous fnc declaration
let abc = function(a,b){
    return a+b;
}
// arrow functions
let arrowFnc = (a,b) => a+b;
let arrowFnc1 = (a,b) => console.log(a+b);
 

console.log(calculator(5,5,(a,b) => a*b));
let multipleLineArrowFnc = () => {
    let a = 10;
    let obj = {
        name: "trajan"
    }
    return a;
}