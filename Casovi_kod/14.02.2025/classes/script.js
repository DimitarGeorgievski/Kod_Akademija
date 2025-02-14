// ------------------- old way -----------
// function Vehicle(id,name,batch,price){
    //     this.id = id;
    //     this.name = name;
    //     this.batch = batch;
    //     this.price = price;
    // }
    // function WheeledVehicle(id,name,batch,price,wheels){
        //     Object.setPrototypeOf(this,new Vehicle(id,name,batch,price));
        //     this.wheels = wheels;
        // }
        // let car = new WheeledVehicle(1,"Yugo",123, 1000, 4);
        // console.log(car);
        
// ------------------- new way -----------
class Vehicle{
    constructor(id,name,batch,price,showLog = false){
        this.id = id;
        this.name = name;
        this.batch = batch;
        this.price = price;
        this.company = "move.inc";
        if(showLog){
            console.log("Im the constructor of vehicle");
        }
    }
    printVehicle(){
        console.log(`${this.id}, ${this.name}`);
    }
}
let vehicle = new Vehicle(1,"Yugo",123,4000);
console.log(vehicle);
vehicle.printVehicle();

// ---------------------------------------updating new way---------------------------------------------

console.log("----------------------------------");
class WheeledVehicle extends Vehicle{ // ova sluzi ako sakame da gi zemime propertinjata od vehicle i mozi da se nasledi samo od 1 klasa
    constructor(id,name,batch,price,wheels){
        super(id,name,batch,price,true);
        console.log("Im the constructor of wheeled Vehicle")
        this.wheels= wheels;
    }
}
let wheeledVehicle = new WheeledVehicle(1,"Mazda",1234,12345, 4);
console.log(wheeledVehicle);
console.log("----------------------------------");
class Car extends WheeledVehicle{
    constructor(id,name,batch,price,wheels,doors,ac){
        super(id,name,batch,price,wheels);
        console.log("im the constructor of Car");
        this.doors = doors;
        this.ac = ac;
        if(ac){ // mozi da se koristi prosta logika ama ne da ima for i slicno so zema bagji memorija
            this.price += 400;
        }
    }
}
let car = new Car(1,"Yugisha", 123,600,4,5,true);
console.log(car);
console.log("----------------------------------");
class BaseService{
    constructor(){
        
    }
    printArray(arr){
        arr.forEach(element => {
            console.log(element); 
        });
    }
}
class BookService extends BaseService{
    constructor(){
        super();
    }
    showNames(arr){
        this.printArray(arr);
    }
    // get books method 
    // update books method
    // ...
}
let bookService = new BookService();
bookService.showNames(["trajan","Filip"]);

// ---------------------------------------Static methods---------------------------------------------

class ElectricVehicle extends Car{
    constructor(id,name,batch,price,wheels,doors,ac,owner){
        super(id,name,batch,price,wheels,doors,ac);
        this.owner = owner;
    }
    static addAC(car){
        if(!car.ac){
            car.ac = true;
            car.price += 400;
            console.log(`the car has AC now and it costs ${car.price}$`)
        }
        else{
            console.log("The car already has AC");
        }
    }
}
let electricVehicle = new ElectricVehicle(1,"Yugoo",412,300,4,5,false,null);
console.log(electricVehicle);
ElectricVehicle.addAC(electricVehicle); // e vaka se vika staticka metoda,prven se povikuva imeto na klasata,posle funkcijata i posle varijablata vo zagrada
console.log("----------------------------------");
class Helpers{ // sekogas se staticni metodite vo helpers,statickite metodi se koristat za da ne se instancirat objekti
    static printArray(arr){
        arr.forEach(x => {
            console.log(x);
        })
    }
    static printString(string){
        console.log(string);
    }
    static countAllVoewlsInString(string){
        let stringArr = string.split("");
        let vowels = ["a","e","i","o","u"];
        return stringArr.filter(char => vowels.includes(char.toLowerCase())).length;
    }
}
Helpers.printArray([1,2,3,4,5]);
Helpers.printString("Trajan");
console.log(Helpers.countAllVoewlsInString("Hello from Mars"));

// ---------------------------------------Getters and Setters(not mandatory)---------------------------------------------
class Airplane{
    constructor(id,name,color,seats){
        this.seats =seats;
        this.id = id;
        this.name = name;
        this.color = color;
    }
    get color(){
        return this._color;
    }
    set color(value){
        this._color = value;
    }
    get name(){
        console.log("We are getting the name of the plane. Please wait...");
        return "This plane name is " + this._name;
    }
    set name(value){
        console.log("we are setting the name of the plane. Please wait...");
        value.length > 1 ? this._name= value : this._name = "Boeing";
    }
}
let plane = new Airplane(1,"trajan", "White", 230);
console.log(plane);
let plane1 = new Airplane(1,"", "White", 230);
console.log(plane1);
console.log("CALLING GET");
console.log(plane.name);
console.log("CALLING SET");
plane.name = "Airbus";
console.log("----------------------------------");
// ---------------------------------------Checking type of object---------------------------------------------
let electric = new ElectricVehicle(1, "yugo", 123,400,4,5,false,null);
let isElectricCar = electric instanceof ElectricVehicle;
console.log(isElectricCar);
let isElectric = electric instanceof Helpers;
console.log(isElectric);
console.log(electric instanceof Car);