var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String },
    preview: { type: String, required: true},
    playlistId: { type: Number, required: true},
    vote: { type: Number, required: true, default: 0}
})

module.exports = mongoose.model('Song', schema)