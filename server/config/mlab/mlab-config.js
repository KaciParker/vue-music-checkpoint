var mongoose = require('mongoose')
var connectionString = 'mongodb://test:test@ds064198.mlab.com:64198/first-db'
var connection = mongoose.connection

mongoose.connect(connectionString, {
    useMongoClient: true,
    keepAlive: { socketOptions: { keepAlive: 30000, connectionTimeoutMS: 30000 } }
})

connection.on('error', console.error.bind(console, 'connection error: '))

connection.once('open', ()=> {
    console.log('Connected to Music Database')
})