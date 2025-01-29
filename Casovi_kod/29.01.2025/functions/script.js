// storing fnc in variable

let sayHello = function() {
    console.log('Hello');
}

// sayHello();

function sayBye() {
    console.log('Bye');
}

let sayByeV = sayBye;

// sayByeV();

// storing fnc in arrays

function isDivisableBy4(number) {
    return number % 4 === 0 ? 'Yes' : 'No';
}

let isPositive = number => number >= 0 ? 'Positive' : 'Negative';
let isEven = number => number % 2 === 0 ? 'Even' : 'Odd';
let countDigits = number => number >= 0 ? number.toString().length : number.toString().length - 1;

let numberFncs = [
    isPositive,
    isEven,
    countDigits,
    number => number % 3 === 0 ? 'Is divisable by 3' : 'It is not divisable by 3',
    isDivisableBy4
];

// console.log(numberFncs[0](2));
// console.log(numberFncs[0](-2));

for(let fnc of numberFncs) {
    // console.log(fnc);
    // console.log(typeof fnc);
    //console.log(fnc(-12));
}

// using fnc as argument

let calculator = function (num, num1, calculateFnc) {
    console.log('Argument one: ' + num);
    console.log('Argument two: ' + num1);
    console.log('Argument three: ' + calculateFnc);
    return calculateFnc(num, num1);
}

function sum(a, b) {
    return a + b;
}

// let result = calculator(5, 7, sum);
// console.log(result);

// let result1 = calculator(100, 15, function(a, b) {
//     if(a <= 0) {
//         return 0;
//     } else if (b <= 0) {
//         return 0;
//     }

//     return a - b;
// });

// console.log(result1);

// let result2 = calculator(5, 5, (num, c) => num * c);
// console.log(result2);

// let substract = (num, num1) => num - num1;
// console.log(calculator(5, 2, substract));

// returning fnc as result from another fnc

function calculationFnc(operator) {
    if(operator === '+') {
        return function (a, b) {
            return a + b;
        };
    } else if (operator === '-') {
        return (a, b) => a - b;
    } else {
        console.log('Error');
        return null;
    }
}

// let sumOperation = calculationFnc('+');
// console.log(sumOperation);
// console.log(typeof sumOperation);
// let substractOperation = calculationFnc('-');
// console.log(substractOperation);
// console.log(typeof substractOperation);

// console.log(sumOperation(2, 3));

// let result = calculationFnc('+')(10, 7);
// console.log(result);

function sumNumbers(num) {
    let sum = num;
    return function(num) {
        sum += num;
        return function(a) {
            sum += a;
            return function(b) {
                sum += b;
                return function(c) {
                    sum += c;
                    return function(d) {
                        sum += d;
                        return sum;
                    }
                }
            }
        }
    }
}

let a = sumNumbers(10);
let b = a(5);
let c = b(15);
let d = c(20);
let e = d(27);
let f = e(23);
// console.log(f);
let result = sumNumbers(5)(10)(15)(20)(25)(30);
// console.log(result);

let apiCallsObj = (function () {
    let baseUrl = 'www.example.com';

    return {
        getAll: () => console.log('gettingAll ' + baseUrl),
        getOne: (id) => console.log('getOne ' + id + baseUrl) 
    };
})();

// apiCallsObj.getAll();
// apiCallsObj.getOne(5);

let apiCallsArr = (function () {
    let baseUrl = 'www.example.com';

    return [
        () => console.log('gettingAll ' + baseUrl),
        (id) => console.log('getOne ' + id + baseUrl) 
    ];
})();

// apiCallsArr[0]();
// apiCallsArr[1](1222);

// function with properties and methods

function greet(name) {
    return `Hello ${name}`;
}

greet.defaultName = 'Trajan';
greet.description = 'Some desc';

// console.log(greet(greet.defaultName));

greet.sayGoodBye = function(name) {
    console.log(`Goodbye ${name}`);
}

// greet.sayGoodBye(greet.defaultName);

// function arguments

function testArguments() {
    console.log(arguments);
}

// testArguments('Trajan', 5, 'Filip', { name: 'Bob' }, [1, 2, 3], null, () => 0);

function addToArray(arr) {
    for(let arg of arguments) {
        arr.push(arg);
    }
    return arr;
}

// let result3 = addToArray([], 1, 2, 3, 4, 5, 'Trajan', 'Filip', [12, 32], { age: 15 });
// console.log(result3);

//Pure function
function sumPure(a,b){
    return a + b;
}

// impure function 
let num = 5;
let num1 = 10;
function sumImpure(){
    return num + num1;
}
