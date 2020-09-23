
exports.up = function (knex) {
  return knex.schema.createTable('product_type', function (t) {
    t.string('id').primary()
    t.dateTime('createdAt').notNull()
    t.string('description').notNull()
    t.string('mark').notNull()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('product_type')
}
