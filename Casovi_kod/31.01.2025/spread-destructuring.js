// destructuring

let numbers = [1,2,3,4,5,6];

// using indexes
// let first = numbers[0];
// let seconds = numbers[1];

// using function shift
// let first = numbers.shift();
// let second = numbers.shift();
// let rest = numbers;
// console.log(first,second, rest);

let [first,second, q, ...rest] =  numbers; // destructuring for array
// console.log(first,second,q,rest);
let w = numbers.shift();
let obj = {
    firstName: "Trajan",
    lastName: "Stevkovski",
    age: 23
};
// let firstName = obj.firstName;
// let lastName = obj.lastName;
// let age = obj.age;

// destructuring using property names
let {firstName, lastName,age} = obj;
// destructuring using new variables property: <variable name>
let {firstName: ime, lastName: prezime, age: godini} = obj; // destructuring for object
// console.log(ime,prezime,godini);

function returnAritmeticOperations(){
    let operations = [
        (num,num1) => num + num1,
        (num,num1) => num - num1,
    ];
    return operations;
}
let result = returnAritmeticOperations();
let sum1 = result[0];
let substract1 = result[1];
let [sum,substract] = returnAritmeticOperations();
// console.log(sum,substract);
let numbers1 = [1,2,3,4,5,6,7,8,9,0];
let  [a,b,c,d,e,f,g,h,i,j] = numbers1;
// console.log(a,b,c,d,e,f,g,h,i,j);

// for merging 2 arrays
let arrA = [1,2,3,4,5];
let arrB = [6,7,8,9,0];
let arrC = arrA.concat(arrB);
// console.log(arrC);
let arrD = [...arrA, ...arrB];
// console.log(arrD);

let arrE = [];
arrE.push(...arrB);
// console.log(arrE)

function recursiveSumOfArray(numbers){
    if(numbers.length === 0){
        return 0;
    }
    let [first,...rest] = numbers;
    return first + recursiveSumOfArray(rest)
}
let result1 = recursiveSumOfArray(numbers);
// console.log(result1)

let person = {
    firstName: "Dimitar",
    lastName: "Georgievski",
}
let address = {
    street: "Matija",
    number: "3a",
    town: "Bitola"
}

// for combining 2 objects
let combined = {
    ...person,
    ...address
}
// console.log(combined);
let combinedChanged = {
    ...person,
    ...address,
    firstName: "Petar",
    town: "Skopje",
}
// console.log(combinedChanged);

let matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

function flatMatrixToArray(array,currentElement){
    array.push(...currentElement);
    return array;
}
let flatArray = matrix.reduce(flatMatrixToArray, []);
// console.log(flatArray);


// null coalescing operator
let z = 15;
// without null coalesing operator
let x = z
if(x === null){
    x = 5;
}
// console.log(x);
// with
let y = z ?? 3; // ako e y ima vrednost se zema z ako e null se zema 3
// if null gets the right size od ?? if not left side
// console.log(y);