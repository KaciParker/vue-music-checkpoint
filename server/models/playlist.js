var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    playlistId: { type: Number, required: true }
})

module.exports = mongoose.model('Playlist', schema)