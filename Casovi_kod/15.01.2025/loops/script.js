let counter = 0;
while(counter <=10){
    // console.log(counter);
    counter++;
} // se koristi za da pronajdime nekoj element vo nekoja niza ili slicno so uslov nesto taka
let arrOfNumber = [1,2,3,4,5,6,7,8,9,0];
let hasNumberDivisableBySeven = false;
let index = 0;
while(!hasNumberDivisableBySeven){
    let element = arrOfNumber[index];
    // console.log(element);
    if(element % 7 ===0){
        hasNumberDivisableBySeven = true;
    }
    index++;
}
// let input = '';
// while(input !== "y"){
//     input = prompt("Enter y to exit the loop");
// }
// do{
//     input = prompt("Enter y to exit the loop");
// } while(input !== "y");
for(let i=0;i<=10;i++){
    console.log(i);
}
for(let i=10;i>=0;i--){
    console.log(i);
}
let numbers = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(let number of numbers){
    sum += number;
}
let average = sum / numbers.length;
console.log(sum,average);