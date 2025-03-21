import MovieService from "../services/movie.service.js";

export default class MovieController{
    constructor(){
        this.movieService = new MovieService; // dependency injection sto e prasanje za na intervju?
    }
    async getMovies(req,res){
        try {
            const filter = {};
            if(req.query.genre){
                filter.genre = req.query.genre;
            }
            const movies = await this.movieService.getAll(filter);
            res.send(movies)
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
    async getMovie(req,res){
        try {
            const movieId = req.params.id
            const movie = await this.movieService.getById(movieId);
            res.send(movie);
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    }
    async createMovie(req,res){
        try {
            const movieBody = req.body;
            const movie = await this.movieService.create(movieBody);
            res.status(201).send(movie);
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    async updateMovie(req,res){
        try {
            const movieId = req.params.id;
            const movieBody = req.body;
            const movie = await this.movieService.update(movieId,movieBody);
            res.send(movie);
        } catch (error) {
            res.status(404).send({message: error.message});
        }
    }
    async deleteMovie(req,res){
        try {
            const movieId = req.params.id;
            await this.movieService.deleteById(movieId);
            res.status(200).send({message: "Movie successfully deleted"});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
    async deleteMovies(req,res){
        try {
            await this.movieService.deleteAll();
            res.status(200).send({message: "Movies successfully deleted"});
        } catch (error) {
            res.status(404).json({message: error.message});
        }
    }
}