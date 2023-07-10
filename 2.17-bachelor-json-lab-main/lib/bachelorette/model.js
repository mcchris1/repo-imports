const mongoose = require('../connection.js')

const Schema = mongoose.Schema

const Bachelorette = new Schema({
  name: String,
  year: Number,
  winner: String,
  stillTogether: Boolean
})

module.exports = mongoose.model("Bachelorette", Bachelorette)
