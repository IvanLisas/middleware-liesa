import { MarketPlace } from '../types/MarketPlace'
import createProduct, { Product } from '../types/Product'
import attributeStub from './AttributeStub'
import brandStub from './BrandStub'
import categortStub from './CategotyStub'
import markerStub from './MarketStub'

class ProductStub {
  stockLimit = 1000

  lastId = 0

  products = [
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    ),
    createProduct(
      this.calculeId(),
      this.lastId,
      'Producto ' + this.lastId,
      brandStub.getRandomBrand(),
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath,
      Math.trunc(Math.random() * this.stockLimit)
    )
  ]

  calculeId() {
    this.lastId++
    return this.lastId
  }
}

const productStub = new ProductStub()

export default productStub
