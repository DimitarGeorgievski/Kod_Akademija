import Event from "../models/event.schema.js";

export default class EventService {
  async getAll(filter = {}) {
    const events = await Event.find(filter).collation({locale: "en",strength: 2,});
    return events;
  }
//   async getById(id){
//     const event = await Event.find(_id: ObjectId)
//   }
  async create(body){
    const event = await Event.create(body);
    return event;
  }
  async deleteById(id){
    return await Event.findByIdAndDelete(id);
  }
}
