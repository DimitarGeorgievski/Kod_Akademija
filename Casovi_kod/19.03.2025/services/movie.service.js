import Movie from "../schemas/movies.schema.js";
import "../schemas/director.schema.js"; // ako imame vo movie shemata nesto so koristi od drug fajl mora i drugiot fajl da se povrzi tuka

export default class MovieService {
  async getAll() {
    const data = Movie.find({}).populate("director");
    return data;
  }
  async getById(id) {
    const movie = Movie.findById({ id });
    return Movie;
  }
  async create(body) {
    return await Movie.create(body);
  }
  async update(id, body) {
    let movie = await Movie.findById(id);
    const updateData = { ...movie, ...body };
    movie.set(updateData);
    await movie.save();
    return movie;
  }
  async deleteById(id) {
    return Movie.findByIdAndDelete(id);
  }
}
