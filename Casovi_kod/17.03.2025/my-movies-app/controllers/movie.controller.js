import MovieService from "../services/movie.service.js";

export default class MovieController{
    constructor(){
        this.MovieService = new MovieService();
    }
    async getAllMovies(req,res){
        try {
            const movies = await this.MovieService.getAll();
            res.json(movies);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
    async getMovieById(req,res){
        try {
            const movie = await this.MovieService.getById(req.params.id);
            if(!movie){
                res.status(404).json({message: "Movie not found"})
            }
            res.json(movie);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    }
}