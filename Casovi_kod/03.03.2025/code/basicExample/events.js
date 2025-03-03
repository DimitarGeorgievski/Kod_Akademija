import { EventEmitter, on} from "node:events";
const emitter = new EventEmitter();
class MyEmitter extends EventEmitter{}
export const myEmitter = new MyEmitter();
emitter.on("order-pizza", function(size){
    console.log("From regular function");
    console.log(`Order received,making a ${size} pizza`); // na primer ako koristime this zborceto vo obicna funkcija se raboti za funkcijat aa pak ako se raboti na arrow funkcii togas se raboti za globalniot skoup,ama na node.js to e terminalot toest serverot i to nema da raboti toest ke izvadi undefined
});
emitter.on("order-pizza-arrow",(size) =>{
    console.log("From arrow function");
    console.log(`Order received,making a ${size} pizza`);
});
// emitter.emit("order-pizza", "large");
// emitter.emit("order-pizza-arrow", "medium");
const function1 = () =>{
    console.log("Message from function 1");
}
const function2 = () =>{
    console.log("Message from function 2");
}
const function3 = () =>{
    console.log("Message from function 3");
}
const function4 = () =>{
    console.log("Message from function 4");
}
const function5 = () =>{
    console.log("Message from function 5");
}
const function6 = () =>{
    console.log("Message from function 6");
}
emitter.on("myEvent", function1);
emitter.on("myEvent", function2);
emitter.addListener("myEvent", function3) //  ne se dodavat zagradi nikogas ovde oti ne sakame da ja povikuvame ovde funkcijata tuku so .emit toa go prajme
emitter.emit("myEvent");

// List all listeners for "myEvent";
console.log(emitter.listeners("myEvent"));

// List total number of listeners for "myEvent"
console.log(emitter.listenerCount("myEvent"));

// Attach a one-time listener using once
emitter.once("myEvent", function4)

// Attach a listner that will be executed before all listeners
emitter.prependListener("myEvent", function5)

// Attach a prepended one-time listner that will be executed only once, no matter how many times emitter.emit("myEvent") is called
emitter.prependOnceListener("myEvent", function6)

// Remove one listener
// If there are multiple listeners from the sam handler function, the removeListener should be called multiple times
emitter.removeListener("myEvent", function1);
emitter.emit("myEvent")

myEmitter.on("anotherEvent", () =>{
    console.log("Event emitted from myEmitter")
})
// myEmitter.emit("anotherEvent");

// // Remove all listeners
// emitter.removeAllListeners("myEvent");
// myEmitter.emit("anotherEvent");
emitter.emit("myEvent")
emitter.emit("myEvent")
