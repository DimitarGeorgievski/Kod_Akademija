let arr = []; // prazna niza
let arr1 = [1,2,3,4,5]; // niza so broevi
let names = ["Dimiar", "Marija"];
// za da procitas informacii
let element = arr1[1];
console.log(element);
// za  da dodades vrednost
arr1[1] = 101;
console.log(arr1[1]);

let lengthOfArray = arr1.length;
console.log(lengthOfArray);
// dodavanje elementi vo niza so length
let numbers = [1,2,3,4,5];
numbers[numbers.length] = 6;
numbers[numbers.length] = 10;
console.log(numbers);
// dodavanje elementi so push funkcija
numbers.push(101);
numbers.push(1,2,3);
console.log(numbers);

// dodavanje na elementi na poceotok od niza so unshift funkcija

numbers.unshift(1234);
console.log(numbers);
numbers.unshift(200,201,202);
console.log(numbers);

//brisenje na elementi na krajot na nizata so pomos na pop funkcijata
let lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);

//brisenje na elementi na pocetokot na nizata so pomos na
let firstElement = numbers.shift();
console.log(firstElement);
console.log(numbers);