const express = require('express')

const app = express()

app.use(express.json())

require('./controllers/index')(app)

module.exports = app
