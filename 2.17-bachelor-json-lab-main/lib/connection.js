const mongoose = require("mongoose")
const mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('mongodb://localhost/bachelor_nation', mongooseConfig)

module.exports = mongoose
