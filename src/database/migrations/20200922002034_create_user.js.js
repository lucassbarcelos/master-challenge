exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (t) {
    t.string('id').primary()
    t.string('name').notNull()
    t.string('email').unique().notNull()
    t.string('password').notNull()
    t.string('role').notNull()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
