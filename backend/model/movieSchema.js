import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  overview: String,
  release_date: String,
  vote_average: Number,


});

const movieModel = new mongoose.model("movieSchema", movieSchema);

export default movieModel;
