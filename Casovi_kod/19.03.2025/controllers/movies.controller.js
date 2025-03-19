import MovieService from "../services/movie.service.js";

export default class MovieController{
    constructor(){
        this.movieService = new MovieService; // dependency injection sto e prasanje za na intervju?
    }
    async getMovies(req,res){
        try {
            const movies = await this.movieService.getAll();
            res.send(movies)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    async getById(req,res){
        try {
            const movie = await this.movieService.getById(req.params.id);
            res.send(movie);
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}