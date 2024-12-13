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
let counter =0;
do {
    // console.log(counter)
    counter++;
}
while (counter < 10); //ke izbroi od 1-10
let index = 0;
while (index<10){
    index++;
}
for (let i=0; i>10; i++){
    // console.log(i)
}
let days = ["monday", "tuesday", "Wednesday", "thursday", "friday" , "saturday", "sunday"];
for (let i = 0; i < days.length; i++){
    let elements =days[i];
    // console.log(elements);
}
for(let i = days.length - 1; i>= 10; i--){
    let elements =days[i]
    // console.log(elements)
}
let days1 = ["monday", "tuesday", "Wednesday", "thursday", "friday" , "saturday", "sunday"];
for(let day of days1){
    // console.log(day+ " for of")
}
for (let i = 0; i < 20; i++){
    if(i >10){
        break;
    }
}
let index1 = 0;
while(index1 < 30){
    if(index1 % 3 === 0){
        index1++;
        continue;
    }
    // console.log(index);
    index1++;
}
for(let index =0; index< 30; index++){
    if (index% 3 === 0){
        continue;
    }
    // console.log(index)
}
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(let number of number){
    if(number ===12){
        break};
        // console.log(number)
}
