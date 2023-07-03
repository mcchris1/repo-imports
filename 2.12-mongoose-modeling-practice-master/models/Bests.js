const mongoose = require('../connection')

const Best = new mongoose.Schema({
    year: Number,
    sports: {
        superBowl: String,
        worldSeries: String,
        stanleyCup: String,
        NBAchampionship: String
    },
    music: {
        bestSong: {
            title: String,
            artist: String
        }
    },
    movies: {
        bestMovie: String,
        bestActress: String,
        bestActor: String
    }
})

module.exports = mongoose.model("Best", Best) 