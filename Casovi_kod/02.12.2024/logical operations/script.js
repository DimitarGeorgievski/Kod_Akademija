let expr1 = 4 < 7;
let expr2 = 5 != 8;
console.log(expr1);
console.log(expr2);

let a = 10;
let b = 12;
let expr3 = a > b;
let expressionaAnd = expr1 && expr2 && expr3;
let expressionOr = expr1 || expr2 || expr3;
let complexExpr = (5 > 2) && (3 <= 7) && (5 != 6);
let sumCheck = ((5+2) >= (10 -7)) && (5 > 5);


let num = 5;
let num2 = "5";
console.log(num == num2);
console.log(num === num2);
console.log(num !== num2);