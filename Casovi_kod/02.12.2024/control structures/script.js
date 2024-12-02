// // let score = 100;
// // let scoreToPass = 60;
// // if (score > scoreToPass){
// //     alert("You have passed the exam");
// // }
// // else{
// //     alert("You have failed the exam");
// // }

// // let score = 100;
// // let scoreToPass = 60;
// // if (score > scoreToPass){
// //     alert("You have passed the exam");
// // }
// // else{
// //     alert("You have failed the exam");
// // }
// // let fridayCash = 51;
// // if(fridayCash >= 50){
// //     alert("you should go out to a dinner and a movie");
// // }
// // else if(fridayCash >= 35){
// //     alert("You should go out to a fine meal.");
// // }
// // else if(fridayCash >= 12){
// //     alert("You should go and see a movie.");
// // }
// // else{
// //     alert("Looks like you'll be watching TV");
// // }
// // za da imame input se pisi prompt("vnesi broj")

// let input = prompt("vnesi go tvoeto ime:");
// console.log(input);
// console.log(typeof input);
// alert(`tvoeto ime e ${input}`)

let input = prompt("Enter number");
let number = parseInt(input);
if(Number.isNaN(number)){
    alert("wrong input, try enter a valid number");
}
else{
    alert("Good you have successfully entered an number from screen")
}
console.log(number);
console.log(typeof number);