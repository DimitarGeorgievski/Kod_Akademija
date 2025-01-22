let fnc = () => {
    let result = 5;
    console.log(result);
}
// fnc();

(function () {
    // console.log("Self Invoked");
})
();

(function(a,b){
    let result = a * b;
    console.log(result);
})
// (5,5);
let getNextId = (function(){
    let idCounter = 1;
    return function() {
        idCounter += 1;
        return idCounter;
    }
})
();
// idCounter = 100000;
// console.log(getNextId);
// for(let i=0;i < 5; i++){
//     console.log(getNextId());
// }
// console.log(idCounter);

let calculator = (() => {
    let sum = (a,b) => a+b;
    let substract = (c,d) => c -d;
    return {
        sum,
        substract
    }
})();
// console.log(calculator.substract(12,5));

let sum = 0;
for(let i=0;i <= 100;i++){
    sum += i;
}
// console.log(sum);

function sumTo(num){
    if(num === 0){
        return 0;
    }
    return num + sumTo(num - 1);
}
let result = sumTo(100);
// console.log(result);
let sumToArrow = (n) => n === 0 ? 0 : num + sumToArrow(--num);
function fibonacci(n){
    let a = 1;
    let b = 0;
    let temp;
    while(n >= 0){
        temp = a;
        console.log("temp", temp);
        a += b;
        console.log('a', a);
        b = temp;
        console.log("b", b);
        n--;
    }
    return b;
}
// fibonacci(10);

function fibonacciRecursive(n){
    if(n <= 1){
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n -2);
}
console.log(fibonacciRecursive(10));