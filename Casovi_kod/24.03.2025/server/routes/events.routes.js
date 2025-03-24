import EventController from "../controllers/event.controller.js";
import { Router } from "express";

const eventRouter = Router();
const eventController = new EventController();

eventRouter.get("/", (req,res) => eventController.getAll(req,res));
eventRouter.post("/", (req,res) => eventController.create(req,res));
eventRouter.delete("/:id", (req,res) => eventController.deleteById(req,res));

export default eventRouter;