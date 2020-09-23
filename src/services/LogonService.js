const bcrypt = require('bcryptjs')
const generateId = require('../utils/generateId')
const generateToken = require('../utils/generateToken')
const { getByEmail, create } = require('../repository/userRepository')

module.exports =
{
  async create (req, res) {
    const { name, role, email } = req.body
    try {
      const id = await generateId()

      const token = await generateToken({ id: id })

      const teste = await getByEmail(email)

      if (email === teste[0].email) { return res.send(400, { error: 'deu ruim' }) }

      const password = await bcrypt.hash(req.body.password, 10)

      await create({ id, name, role, password, email })

      const newUser = await getByEmail(email)

      newUser[0].password = undefined

      return res.send(200, { newUser, token })
    } catch (error) {
      return res.send(400, { error })
    }
  },

  async logon (req, res) {
    const { email, password } = req.body
    try {
      const user = await getByEmail(email)

      if (!user) return res.send(400, { error: 'User not found' })

      if (!(await bcrypt.compare(password, user[0].password))) { return res.send(400, { error: 'Invalid password' }) }

      if (user[0].role !== 'admin') { return res.send(400, { error: 'You have no power here' }) }

      user[0].password = undefined

      return res.send(200, { user, token: generateToken({ id: user.id }) })
    } catch (error) {
      return res.send(400, 'Authentication failed ' + error)
    }
  }
}
