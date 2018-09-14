'use strict'
require('dotenv').config()
const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    {PORT} = require('./config')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//catches all non-matching routes
app.use('*', (req, res) => {
    return res.status(404).json({
        message: 'Route Not Found'
    })
})

//for error handling
const logErrors = (err, req, res, next) => {
    console.error(err.stack)
    return res.status(500).json({
        error: 'Something went wrong'
    })
}

app.use(logErrors)
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
module.exports = {
    app
}
