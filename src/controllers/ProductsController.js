const express = require('express')

const routes = express.Router()

module.exports = (app) => app.use('/', routes)