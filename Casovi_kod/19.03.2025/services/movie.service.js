import Movie from "../schemas/movies.schema.js";
import "../schemas/director.schema.js"; // ako imame vo movie shemata nesto so koristi od drug fajl mora i drugiot fajl da se povrzi tuka

export default class MovieService {
  async getAll(filter = {}) {
    const data = Movie.find(filter)
      .collation({ locale: "en", strength: 2 })
      .populate("director"); // nemozi poke populate tuku treba .populate() poke pati i collation se koristi za lowercase i takvi raboti i najcesto se koristi 2 ama ima do 3 value
    return data;
  }
  async getById(id) {
    const movie = Movie.findById(id).populate("director");
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
  async deleteAll() {
    return Movie.deleteMany({});
  }
}
