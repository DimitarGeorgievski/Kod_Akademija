// let counter = 0;
// while(counter < 10){
//     console.log(counter);
//     counter+= 1;
// }
// let names = ["Dimitar", "Petar", "Marija"];
// let index = 0;
// while(index < names.length){
//     console.log(names[index]);
//     index += 1;
// }

// let numberOfValues = 10;
// let counter = 0;
// let values = [];
// while(counter < numberOfValues){
//     let input = prompt("Vnesi Vrednost");
//     values.push(input);
//     counter =+ 1;
// }
// console.log("Outside of the array");
// counter = 0;
// while(counter < values.length){
//     console.log(values[counter]);
//     counter =+ 1;
// }

let counter = 0;
let sum = 0;
let beginingNumber = 101;
let FinishingNumber = 150;
while(beginingNumber <= FinishingNumber){
    counter += Math.pow(beginingNumber, 2);
    beginingNumber += 1;
} 
console.log(counter);

function digitsInNumber(num){
    console.log(`Input number is: ${num}`)
    while(num > 0){
        let cifra = num % 10;
        console.log(cifra);
        num = parseInt(num / 10);
        console.log(`Input: ${num}`);
    }
}
digitsInNumber(123456789);