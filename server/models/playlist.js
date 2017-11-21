var mongoose = require('mongoose')

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    id: { type: Number, required: true }
})

module.exports = mongoose.model('Playlist', schema)