import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Cat = new Schema({
  name: { type: String, required: true },
  age: { type: String },
  species: { type: String },
  image: { type: String },
});

export default mongoose.model("cats", Cat);
