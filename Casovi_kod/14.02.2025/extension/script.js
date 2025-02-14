function Vehicle(id,name){
    this.id = id;
    this.name = name;
    this.color = undefined;
    this.printInformation = function(){
        throw new Error("not Implemented");
    }
}
function Car(id,name,hp){
    Object.setPrototypeOf(this, new Vehicle(id,name));
    this.hp = hp;
    this.printInformation = function(){
        console.log("In Car");
    }
}
let car = new Car(1,"Yugo",150);
car.printInformation();
Vehicle.prototype.changeColor = function(color){
    console.log(this);
    console.log(color);
}
console.log(car);
car.changeColor("red");
console.log("----------------------------------");
String.prototype.firstLetterUpper = function(){ // ova go deli stringot na indekso od sekoja bukva i na primer ako sakam prvata ili treta bukva da e golema mozi da se iskoristi indexo i da se napraj toUpperCase()
    console.log(this);
    let newValue = [];
    for(let letter of this){
        newValue.push(letter.toUpperCase());
    }
    return newValue.toString();
}
let test = "trajan";
let UpperCase = test.firstLetterUpper();
Array.prototype.runAll = function(){ // so ova mozi da se zemat elementite koi ke gi definirame podolu toest da se napraj sekoj value od promenlivata koja ke ja deklrarirme i da rabotime so ovie informacii sto sakame // i ovie se metodi
test.firstLetterUpper();
console.log(UpperCase);
    for(let item of this){
        console.log(item);
    }
}
let numbers = [1,2,3,4,5,6,7,8];
let names = ["Trajan","Filip"];
numbers.runAll();
names.runAll(); 