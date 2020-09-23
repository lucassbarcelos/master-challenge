const connection = require('../database/connection')

module.exports = {
  async getByEmail (email) {
    return await connection('users').select('*').where('email', email)
  },
  create (payload) {
    return connection('users')
      .insert(payload)
  }
}
