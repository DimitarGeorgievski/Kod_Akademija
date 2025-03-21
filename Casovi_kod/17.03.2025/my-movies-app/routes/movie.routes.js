import { movieRouter } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = movieRouter();
const movieController = new MovieController(); // statickite klasi ziveat duri e ziva aplikacijata i zato e poarno so klasi na ovaj nacin
movieRouter.get("/", (req,res) => movieController.getAllMovies(req,res));
movieRouter.get("/:id", (req,res) => movieController.getMovieById(req,res));
movieRouter.post("/", (req,res) => movieController.createMovie(req,res));
movieRouter.put("/:id", (req,res) => movieController.updateMovie(req,res));
movieRouter.delete("/:id", (req,res) => movieController.deleteMovie(req,res));

export default movieRouter;