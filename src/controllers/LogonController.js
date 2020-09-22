const express = require('express')
// const LogonService = require('../services/LogonService')

const routes = express.Router()

routes.post('/register', (req, res) => {
  return res.status(200).send('goHorse')
})

routes.post('/logon', (req, res) => {
  return res.status(200).send('goHorse')
})

module.exports = (app) => app.use('/', routes)
