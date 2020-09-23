const connection = require('../database/connection')

module.exports = {
  async kill (id) {
    await connection('product_type').delete().where('id', id)
    await connection('stock').delete().where('product_type_id', id)
  },
  async getStockByProduct (item) {
    return await connection('stock').select('*').where('product_type_id', item.id || 0)
  },
  async getAllProducs () {
    return await connection('product_type').select('*')
  },
  async insertStockByProduct (id, item) {
    await connection('stock').insert({ product_type_id: id, quantity: item.quantity, size: item.size })
  },
  async insertProduct (payload) {
    await connection('product_type').insert(payload)
  },
  async updateProduct (id, payload) {
    await connection('product_type').update(payload).where('id', id)
  },
  async updateStockByProduct (item) {
    await connection('stock').update({ quantity: item.quantity, size: item.size }).where('id', item.id)
  }
}
