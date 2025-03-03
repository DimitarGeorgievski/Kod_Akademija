import { EventEmitter} from "node:events";
import EventTypes from "./eventTypes.js";

const emitter = new EventEmitter();

// Register all events
emitter.on(EventTypes.warning, () =>{
    console.log("warning Event Trigerred!");
})
emitter.on(EventTypes.info, () =>{
    console.log("Info Event Trigerred!");
})
emitter.on(EventTypes.error, () =>{
    console.log("Error Event Trigerred!");
})
export default emitter;