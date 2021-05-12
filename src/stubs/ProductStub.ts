import createProduct, { Product } from '../types/Product'
import attributeStub from './AttributeStub'
import brandStub from './BrandStub'
import categortStub from './CategotyStub'

class ProductStub {
  googleShops = 'GoogleShops'

  mercadolibre = 'Mercadolibre'

  magento = 'Magento'

  tiendanube = 'Tiendanube'

  markets = [this.googleShops, this.mercadolibre, this.magento, this.tiendanube]

  stockLimit = 1000

  lastId = 0

  products = [
    createProduct(
      this.calculeId(),
      this.lastId,
      'Termica',
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Kuka',
      brandStub.getRandomBrand(),
      0,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Termonoseque',
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Iphone',
      brandStub.getRandomBrand(),
      100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      this.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    )
  ]

  calculeId() {
    this.lastId++
    return this.lastId
  }

  randomMarkets() {
    const activeMarkets: string[] = []
    this.markets.forEach((market) => {
      if (Math.random() > 0.5) {
        activeMarkets.push(market)
      }
    })
    return activeMarkets
  }
}

const productStub = new ProductStub()

export default productStub
