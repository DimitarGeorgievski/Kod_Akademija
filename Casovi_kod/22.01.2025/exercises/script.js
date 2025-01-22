let digitsInNumber = (num) => {
    let cifri = 0;
    while(num!== 0){
        cifri++;
        num = Math.floor(num/10);
    }
    return cifri;
}
let evenOrOddNumber = (num) => num % 2 === 0;
let positiveOrNegativeNumber = (num) => {
    if(num < 0){
        return "Negative"
    }
    else{
        return "Positive"
    }
}
let getNumberStats = (num) => {
    return `${digitsInNumber(num)}, ${evenOrOddNumber(num) ? "Even" : "Odd"}, ${positiveOrNegativeNumber(num)}`
}
console.log(getNumberStats(14));


let arrowFnc = (element,color) => {
    let color = document.getElementById(element).value;
    let header = document.getElementById("header");
    header.style.color = `${input}`;
}
let arrowFnc1 = (element, textSize) => {
    let input = document.getElementById(element).value;
    let header = document.getElementById("header");
    header.style.fontSize = `${input}px`
}
document.getElementById("btn").addEventListener("click",{

})