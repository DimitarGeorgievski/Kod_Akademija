import {EventEmitter} from "node:events";
import {myEmitter} from "./events.js";

const emitter = new EventEmitter();
emitter.emit("order-pizza", "small");
myEmitter.emit("anotherEvent");