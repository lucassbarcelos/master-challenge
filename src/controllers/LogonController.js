const express = require('express')
const { create, logon } = require('../services/logonService')

const routes = express.Router()

routes.post('/register', create)

routes.post('/logon', logon)

module.exports = (app) => app.use('/', routes)
