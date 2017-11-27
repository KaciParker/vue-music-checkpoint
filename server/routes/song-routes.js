var Song = require('../models/songs')
var router = require('express').Router()

router.post('/songs', (req, res, next) => {
    Song.create(req.body)
     .then(song=>{
         res.send(song)
     })
     .catch(err =>{
         res.status(400).send({Error: err})
     })
 })

 router.get('/songs', (req, res, next)=>{
    Song.find({})
    .then(song =>{
        res.send(song)
    })
    .catch(err =>{
        res.status(400).send({Error: err})
    })
})

router.delete('/songs/:_id', (req, res, next)=>{
    Song.findByIdAndRemove(req.params._id)
        .then(()=>{
            res.send({message: 'So much for that song'})
        })
        .catch(err =>{
            res.status(400).send({Error: err})
        })
})

module.exports = router

