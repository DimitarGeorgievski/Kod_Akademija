import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const router = Router();
const movieController = new MovieController(); // statickite klasi ziveat duri e ziva aplikacijata i zato e poarno so klasi na ovaj nacin
router.get("/", (req,res) => movieController.getAllMovies(req,res));
router.get("/:id", (req,res) => movieController.getMovieById(req,res));
router.post("/", (req,res) => movieController.createMovie(req,res));
router.put("/:id", (req,res) => movieController.updateMovie(req,res));
router.delete("/:id", (req,res) => movieController.deleteMovie(req,res));

export default router;