const mongoose = require('../connection')

const Penpal = new mongoose.Schema ({
    to: String,
    from: String,
    message: String,
    sentOn: Date
})

module.exports = mongoose.model("Penpal", Penpal)
