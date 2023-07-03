const mongoose = require('../connection')

const Bev = new mongoose.Schema({
    beverageName: String,
    brand: String,
    beverageType: String,
    containsSugar: Boolean,
    carbonated: Boolean,
    container: String
})

module.exports = mongoose.model("Bev", Bev) 
