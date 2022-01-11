// BUILD YOUR SERVER HERE
const express = require('express')
const User = require('./users/model') //this is going into the model.js and pulling out all the functions that are in module.exports
const server = express()

server.get('/api/users', (req, res) => {
    User.find()
    .then(users => {
        console.log(users)
    })
    .catch(err => {
        res.status(500).json({
            message: 'error getting users',
            err: err.message,
            stack: err.stack,
        })
    })
})

server.get('/api/users/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        res.json(user)
    })
    .catch(err => {
        res.status(500).json({
            message: 'error getting user',
            err: err.message,
            stack: err.stack,
        })
    })
})


server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
