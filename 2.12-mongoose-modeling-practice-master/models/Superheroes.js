const mongoose = require('../connection')

//hint heeded -- anything preceding an array gets modeled
//nest away  

const Condpiece = new mongoose.Schema({
    name: String,
    alias: Boolean,
    actor: String
})

const NotCinema = new mongoose.Schema({
    title: String,
    year: Number,
    characters: [Codpiece]
}) 
const Superhero = new mongoose.Schema({
    universe: String,
    movies: [NotCinema]
})

module.exports = mongoose.model("Superhero", Superhero)

/*        {
            title: String,
            year: Number,
            characters: [
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                },
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                }
            ]
        },
        {
            title: String,
            year: Number,
            characters: [
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                },
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                }
            ]
        }
    ]
},
{
    universe: String,
    movies: [
        {
            title: String,
            year: Number,
            characters: [
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                },
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                }
            ]
        },
        {
            title: String,
            year: Number,
            characters: [
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                },
                {
                    name: String,
                    alias: Boolean,
                    actor: String
                }
            ]
        }
    ]
})
*/