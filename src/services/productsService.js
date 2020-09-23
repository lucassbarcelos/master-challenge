const { updateStockByProduct, kill, getStockByProduct, getAllProducs, insertStockByProduct, insertProduct, updateProduct } = require('../repository/productsRepository')

module.exports =
{
  async create (req, res) {
    try {
      const { description, mark, stock } = (req.body)

      const productTypeId = await insertProduct({ description, mark })

      const promise = stock.map(async (item) => {
        await insertStockByProduct(productTypeId, item)
      })

      await Promise.all(promise)
      return res.send(200, { productTypeId })
    } catch (error) {
      return res.send(400, { error })
    }
  },
  async index (req, res) {
    try {
      const products = await getAllProducs()
      const promise = products.map(async (item) => {
        item.stock = await getStockByProduct(item)
      })
      await Promise.all(promise)

      return res.send(200, products)
    } catch (error) {
      return res.send(400, { error })
    }
  },
  async kill (req, res) {
    const { id } = req.body
    try {
      await kill(id)
      return res.send(200, 'boa man')
    } catch (error) {
      return res.send(400, { error })
    }
  },
  async update (req, res) {
    const { description, mark, stock, id } = (req.body)

    await updateProduct({ description, mark }, id)

    const promise = stock.map(async (item) => {
      await updateStockByProduct(item)
    })

    await Promise.all(promise)
    return res.send(200, 'boa man')
  }
}
