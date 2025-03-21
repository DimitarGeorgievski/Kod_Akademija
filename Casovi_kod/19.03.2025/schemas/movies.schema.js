import { Schema, model } from "mongoose";
import { genres } from "../util/constants.js";

const movieSchema = new Schema({
  name: {
    type: String,
    minLength: 5,
    maxLength: 50,
    required: [true, "Name is required"],
    unique: true,
  },
  genre: {
    type: [String],
    enum: genres,
    required: [true, "Genre is required"],
  },
//   director: {
//     type: String,
//     minLength: 5,
//     maxLength: 50,
//     required: [true, "Director is required"],
//   },
  director:{
    type: Schema.Types.ObjectId,
    ref: "director", // imeto na modelot od drugata schema so e prvoto vo stringot
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
  },
  description: {
    type: String,
    minLength: 20,
    maxLength: 300,
    required: [true, "description is required"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    required: [true, "rating is required"],
  },
});

const Movie = model("movie", movieSchema, "movies");
export default Movie;
