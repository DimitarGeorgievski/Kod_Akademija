// function Vehicle(id,name,batchNo,price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "move.inc";
//     this.printVehicle = () => {
//         console.log(`${this.id}. ${this.name}, Batch: ${this.batchNo}, Price ${this.price}$`);
//     }
// }
// let vehicle = new Vehicle(1, "yugo", 123, 100);
// console.log(vehicle);
// let wheeledVehicle = Object.create(new Vehicle(1,"yugo", 12345, 200));
// console.log(wheeledVehicle);
// wheeledVehicle.drive = function(){
//     console.log("Wroomm!");
// }
// let car1 = Object.create(wheeledVehicle);
// car1.fuelTank = 32;
// console.log(car1);
// console.log(`---- ${car1.name} -----`);
// // so ova se nasleduvat od objekt vo objekt propertinjata od prvoto
// car1.drive();
// car1.printVehicle();
// console.log("----------------------------------------------------------")

// // -----------------------------------------------------------------------------------

// let wheeledVehicle1 = {};
// wheeledVehicle1.__proto__ = new Vehicle(15,"Mazda" ,"331s", 1000);
// console.log(wheeledVehicle1);
// console.log(wheeledVehicle1.name);
// wheeledVehicle1.__proto__.printVehicle();
// wheeledVehicle1.name = "Toyota";
// wheeledVehicle1.__proto__.printVehicle();
// wheeledVehicle1.printVehicle = function() {
//     console.log("toyota");
// }
// wheeledVehicle1.printVehicle();
// wheeledVehicle1.__proto__.printVehicle();
// console.log("----------------------------------------------------------")
// // -----------------------------------------------------------------------------------
// function Vehicle(id,name,batchNo,price){
//     this.id = id;
//     this.name = name;
//     this.batchNo = batchNo;
//     this.price = price;
//     this.company = "Move.inc";
//     this.printVehicle = function(){
//         console.log(`${this.id},${this.name}, ${this.batchNo}, ${this.price}`);
//     }
// }
// function WheeledVehicle(wheels,name){
//     this.wheels = wheels;
//     this.name = name;
//     this.drive = () =>{
//         console.log(`Driving on ${this.wheels} wheels`);
//     }
// }
// WheeledVehicle.prototype = new Vehicle();
// let car = new WheeledVehicle(4,"Yugo");
// car.price = 1000;
// car.id = 1;
// car.batchNo = "111a";
// car.printVehicle();
// console.log(car);

// WheeledVehicle.prototype.stop = function(){
//     console.log(`The vehicle ${this.name} stopped`)
// }
// car.stop();
// ----------------------------------------------------------------------------
function Vehicle(id,name,batchNo,price){
    this.id = id;
    this.name = name;
    this.batchNo = batchNo;
    this.price = price;
    this.company = "Move.inc";
    this.printVehicle = function(){
        console.log(`${this.id},${this.name}, ${this.batchNo}, ${this.price}`);
    }
}

function WheeledVehicle(id,name,batchNo,price,wheels){
    this.__proto__ = new Vehicle(id,name,batchNo,price);
    this.wheels = wheels;
    this.drive = function(){
        console.log(`Driving on ${this.wheels} wheels`);
    }
}
function Motorcycle(id,name,batchNo,price,wheels,color){
    Object.setPrototypeOf(this, new Vehicle(id,name,batchNo,price));
    this.wheels = wheels;
    this.color = color;
    this.driveOnOneWheel = function(){
        console.log("Zoom");
    }
}
function Tractor(id,name,batchNo,price,wheels,hasEquipment,fuelType){
    Object.setPrototypeOf(this, new WheeledVehicle(id,name,batchNo,price,wheels));
    this.hasEquipment = hasEquipment;
    this.fuelType = fuelType === 1 ? "Diesel" : "petrol";
    this.color = "red";
    this.brand = "John Deere"
}
let wheeledVehicle2 = new WheeledVehicle(1,"yugo", 113, 1000,4)
console.log(wheeledVehicle2);
let motorcycle = new Motorcycle(1,"Yamaha", "Z23", 1000,2, "red");
console.log(motorcycle);
let johnDeere = new Tractor(1,"John Deere",250, 15000,4,true,1);
console.log(johnDeere);
function Airplane(id,price,wheels,color){
    Object.setPrototypeOf(this,new Vehicle(id,"Airbus","No123",price));
    this.wheels =wheels;
    this.color = color;
}
console.log(new Airplane(1,12300,3, 'White'));

let serviceConstants = {
    apiToken: "",
    userSecrets: {
        secret1: "",
        secret2: "",
        secret3: "",
    }
}
let service = {
    getUsers: function(){
        console.log("GetUsers");
    },
    getUserById: function(id){
        console.log(id);
    }
}
Object.setPrototypeOf(service,serviceConstants);
console.log(service);
let productsService = {
    getProduct: function(){
        
    },
    getProducts: function(){

    },
}
Object.setPrototypeOf(productsService,serviceConstants);
console.log(productsService);