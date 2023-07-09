import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

let Kingdom = new Schema({
  title: String,
  extract: String,
});

export default mongoose.model("kingdoms", Kingdom);