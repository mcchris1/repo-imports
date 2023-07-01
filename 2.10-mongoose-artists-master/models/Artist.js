import mongoose from "../db/connection.js"

const ArtistSchema = new mongoose.Schema({
    "name": {
        type: String,
        minLength: 2, 
        required: true,
        unique: true},
    "genre": {
        type: String,
        enum: [Pop, Rock, Blues, Dicks, Hip Hop, Jazz, Folk, Country, Classical, Rap]},
    "songs": [{
        "title": {
            type: String,
            required: true,
            unique: true},
        "album": String,
        "length": {
            type: Number,
            min: 2}
        }]
})

const Artist = mongoose.model("Artist", ArtistSchema)

export default Artist