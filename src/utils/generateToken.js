const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = function generateToken (params = {}) {
  try {
    return jwt.sign(params, authConfig.secrect, {
      expiresIn: 86400
    })
  } catch (err) {
    console.log(err)
  }
}
