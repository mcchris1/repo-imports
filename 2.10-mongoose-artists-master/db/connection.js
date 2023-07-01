const mongoose = require('mongoose')

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://127.0.0.1:27017/artist', mongooseConfig)

module.exports = mongoose