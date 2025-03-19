import { Router } from "express";
import MovieController from "../controllers/movies.controller.js";

const router = Router();
const movieController = new MovieController(); // statickite klasi ziveat duri e ziva aplikacijata i zato e poarno so klasi na ovaj nacin
router.get("/", (req,res) => movieController.getMovies(req,res));
router.get("/:id", (req,res) => movieController.getById(req,res));
// router.post("/", (req,res) => movieController.createMovie(req,res));
// router.put("/:id", (req,res) => movieController.updateMovie(req,res));
// router.delete("/:id", (req,res) => movieController.deleteMovie(req,res));

export default router;