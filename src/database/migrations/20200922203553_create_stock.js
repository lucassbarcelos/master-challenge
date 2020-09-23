
exports.up = function (knex) {
  return knex.schema.createTable('stock', function (t) {
    t.increments('id').primary().notNull()
    t.int('product_type_id').notNull()
    t.int('quantity').notNull()
    t.string('size').notNull()

    t.foreign('product_type_id').references('id').inTable('product_type')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('stock')
}
