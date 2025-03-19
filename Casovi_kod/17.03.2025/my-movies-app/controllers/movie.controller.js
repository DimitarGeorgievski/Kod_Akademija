import MovieService from "../services/movie.service.js";

export default class MovieController {
  constructor() {
    this.MovieService = new MovieService();
  }
  async getAllMovies(req, res) {
    try {
      const movies = await this.MovieService.getAll();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getMovieById(req, res) {
    try {
      const movie = await this.MovieService.getById(req.params.id);
      if (!movie) {
        res.status(404).json({ message: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async createMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;
      const movieData = {
        name,
        description,
        genre,
        director,
        year,
        createdAt: new Date().toISOString(),
      };
      const id = await this.MovieService.create(movieData);
      res.status(201).json({ id, ...movieData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async updateMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;
      //   const movieData = {};
      //   if(name){
      //       movieData.name = name;
      //   }
      //   if(description){
      //       movieData.description = description
      //   }
      //   if(genre){
      //       movieData.genre = genre
      //   }
      //   if(director){
      //       movieData.director = director
      //   }
      //   if(year){
      //       movieData.year = year
      //   }
      //   movieData.updatedAt = new Date().toISOString();

    //   const movieData = {
    //     ...(name && { name }),
    //     ...(description && { description }),
    //     ...(genre && { genre }),
    //     ...(director && { director }),
    //     ...(year && { year }),
    //     updatedAt: new Date().toISOString(),
    //   };
      const movieData = { updatedAt: new Date().toISOString() };
      for (const [key, value] of Object.entries({
        name,
        description,
        genre,
        director,
        year,
      })) {
        if (value) {
          movieData[key] = value;
        }
      }
      const success = await this.MovieService.update(req.params.id, movieData);
      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async deleteMovie(req, res) {
    try {
      const success = await this.MovieService.delete(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
