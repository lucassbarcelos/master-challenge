const express = require('express')
const auth = require('../middleware/auth')
const { create, index, kill, update } = require('../services/productsService')

const routes = express.Router()

routes.get('/products', auth, index)
routes.post('/products', auth, create)
routes.delete('/products', auth, kill)
routes.put('/products', auth, update)

module.exports = (app) => app.use('/', routes)
