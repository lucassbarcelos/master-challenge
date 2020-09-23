
exports.up = function (knex) {
  return knex.schema.createTable('stock', function (t) {
    t.string('id').primary()
    t.dateTime('createdAt').notNull()
    t.string('product_type_id').notNull()
    t.string('mark').notNull()
    t.foreign('product_type_id').references('id').inTable('product_type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stock')
}
