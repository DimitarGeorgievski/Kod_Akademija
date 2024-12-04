// funkcija koja sto zema input i parsiraj go vo broj i vrati go parsiraniot broj(nova promenliva), probaj da go hendlas losoto scentario i ako gresen input e vnesen da se vrati -infinity.
// zadaca 1
function vezba1(poraka){
    let user = prompt(poraka)
    let broj1 = parseInt(user);
    if(typeof(broj1) === "number"){
        return broj1;
    }
    else{
        return NaN;
    }
}
console.log(vezba1("Vnesi eden broj:"));

// za proverka na dali odredena promenliva e broj se praj typeof(promenliva) === number.ova e vaka bidejki typeof vadi rezultat 'number' i posle se proverva dali ova levo e isto so "number" mora da e se so mali i da pisi number.

// zadaca 2
function sum(num,num1){
    let result = num + num1;
    return result;
}
function subtract(num,num1){
    let result = num - num1;
    return result;
}
function multiply(num,num1){
    return num*num1;
}
function divide(num,num1){
    if(num && num1){
        return num / num1;
    }
    else{
        return -1;
    }
}
function advCalculator(num,num1,operation){
    if(operation === "+"){
        let suma = sum(num,num1);
        return suma;
    }
    else if(operation === "-"){
        let subs = subtract(num,num1);
        return subs;
    }
    else if(operation === "*"){
        let mlp = multiply(num,num1);
        return mlp;
    }
    else if(operation === "/"){
        let div = divide(num,num1);
        return div;
    }
    else{
        return null;
    }
}
console.log(advCalculator(5,10, "+"));
console.log(advCalculator(5,10, "-"));
console.log(advCalculator(5,10, "*"));
console.log(advCalculator(5,10, "/"));