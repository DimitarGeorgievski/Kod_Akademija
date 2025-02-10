let dog = {
    name: "barky",
    isHappy: true,
    bark: function(){
        console.log("bark");
    }
}
let dog1 = Object.create(dog);
dog1.isHappy = false;
dog1.name = "Sparky";
console.log(dog1);
dog1.bark();

let dog2 = {
    ...dog
}
dog2.name = "jaky";
dog2.bark();

// ------------------------------------------------------------------

let person = {
    name: "Trajan"
}
let address = {
    street: "Street one",
    number: 12,
    contactPerson: "Trajan"
}
let personWithAdress = Object.assign(person,address);
console.log(personWithAdress);
let otherAddress = {
    street: "Street Two",
    number: 15,
    contactPerson: "Filip"
}
let updatedAdress = Object.assign(personWithAdress,otherAddress);
console.log(updatedAdress);

let personWithAddressSpread = {
    ...person,
    ...address,
}
console.log(personWithAddressSpread)
let updatedAdressSpread = {
    ...personWithAddressSpread,
    ...otherAddress
}
console.log(updatedAdressSpread);

// --------------------------------------------------------

let apiSecrets = {
    apiKey: "some value",
    userToken: "",
    userSecrets: "",
    encoding: "",
    font: "",
};
Object.freeze(apiSecrets);
apiSecrets.apiKey = "new value";
delete apiSecrets.font;
apiSecrets.url = "some url";
console.log(apiSecrets);
console.log(Object.isFrozen(apiSecrets));

// ----------------------------------------------------------

let apiSecrets1 = {
    apiKey: "some value",
    userToken: "",
    userSecrets: "",
    encoding: "",
    font: "",
};
Object.seal(apiSecrets1);
apiSecrets1.font = "new font";
apiSecrets1.url = "new url";
console.log(apiSecrets1);

// ----------------------------------------------------------

let obj = {
    firstName: "Trajan",
    lastName: "Stevkovski",
    age: 33,
    academy: "Web Development",
    courses: ["Javascript", "C#", ".Net", "Node.js"]
}

for(let course of obj.courses){
    console.log(course);
}
console.log("");
for(let key in obj){
    console.log(key);
}
let keysArray = Object.keys(obj);
console.log(keysArray);
let valuesArray = Object.values(obj)
console.log(valuesArray);
for(let key in obj){
    console.log(obj[key]);
}
console.log("");
for(let keyValue of Object.entries(obj)){
    console.log(keyValue);
}
console.log("");
for(let [key,value] of Object.entries(obj)){
    console.log(key);
    console.log(value);
}
console.log("");
function fibonacci(number){
    if(number <= 1){
        return 1
    }
    return fibonacci(number -1) + fibonacci(number - 2);
}
console.log(new Date);
let firstResult = fibonacci(5);
console.log(firstResult);
console.log(new Date());
console.log("");
let results = {
    0:1,
    1:1
}
function fibonacciImproved(n){
    if(results[n]){
        return results[n];
    }
    let result = fibonacciImproved(n -1) + fibonacciImproved(n - 2);
    results[n] = result;
    return result;
}
console.log(new Date);
let secondResult = fibonacciImproved(45);
console.log(secondResult);
console.log(results);
console.log(new Date);
// za pogolemi presmetki ako prajme vo proekti poarno da naprajme objekt i vo toj objekt da gi cuvame rezultatite na primer kako sto e fibonaci listata
