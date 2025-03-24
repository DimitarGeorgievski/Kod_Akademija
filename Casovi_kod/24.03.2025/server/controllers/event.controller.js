import EventService from "../services/event.service.js";

export default class EventController{
    constructor(){
        this.eventService = new EventService;
    }
    async getAll(req,res){
        try {
            const filter = {};
            if(req.query.artist){
                filter.artist = req.query.artist;
            }
            if(req.query.location){
                filter.location = req.query.location;
            }
            const events = await this.eventService.getAll(filter);
            res.send(events);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
    async deleteById(req,res){
        try {
            await this.eventService.deleteById(req.params.id);
            res.status(200).json({message: "Event successfully deleted"})
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    async create(req,res){
        try {
        const body = req.body;
        const event = await this.eventService.create(body);
        res.status(201).send(event);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}