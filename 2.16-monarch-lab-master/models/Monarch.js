import mongoose from "../db/connection.js";
const Schema = mongoose.Schema;

let Monarch = new Schema({
  name: String,
  house: String,
  start: String,
  end: String,
  endReason: String,
  kingdom: Object,
});

export default mongoose.model("monarchs", Monarch);