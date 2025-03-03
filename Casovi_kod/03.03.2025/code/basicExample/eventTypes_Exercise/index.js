import emitter from "./myEvents.js";
import EventTypes from "./eventTypes.js";


// Emit the error events
emitter.emit(EventTypes.error);
emitter.emit(EventTypes.info);
emitter.emit(EventTypes.warning);