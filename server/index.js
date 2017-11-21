var express = require('express')
var server = express()
var bp = require('body-parser')
var DBConnect = require('./config/mlab/mlab-config')
var cors = require('cors')
var port = 3000

//route variables
var playlistRoutes = require('./routes/playlist-routes')
var songRoutes = require('./routes/song-routes')


//Middleware
server.use(cors({}))
server.use(bp.json())
server.use(bp.urlencoded({extended: true}))

//register routes
server.use(playlistRoutes)
server.use(songRoutes)

server.listen(port, function(){
    console.log('Groovy Tunes on port', port)
})