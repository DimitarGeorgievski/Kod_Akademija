function windowSize(){
    let height = this.innerHeight;
    let width = this.innerWidth;
    console.log("In Function");
    console.log(this);
    return [height,width];
};
let result = windowSize();
// console.log(result);
let shape = {
    width: 600,
    height: 400,
    getArea: function(){
        console.log(this);
        return this.width * this.height;
    }
};
// console.log(shape.getArea());
let width = 600;
let screen = {width:400};
function showWidth(){
    console.log(this);
    console.log(this.width);
}
// showWidth();
// screen.showWidth = showWidth;
// screen.showWidthExecuted = showWidth();
screen.showWidth = showWidth;
screen.showWidth();

function Car(model,color,year,fuel,fuelConsumption){
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = fuelConsumption;
    this.fuelCalculator = function(distance){
        return distance *(this.fuelConsumption/100);
    }
}
let car1 = new Car("Q3","Black",2012,50,5);
console.log(car1);
console.log(car1.fuelCalculator(1000));