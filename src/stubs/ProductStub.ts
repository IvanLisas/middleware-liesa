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
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    ),
    createProduct(
      'Producto ' + this.calculeId(),
      this.lastId + 10000,
      'Codigo del producto',
      'Codigo alfa',
      this.lastId,
      this.lastId,
      brandStub.getRandomBrand(),
      categortStub.celulares,
      this.lastId,
      Math.random() * 100,
      markerStub.randomMarkets(),
      categortStub.categotyPath
    )
  ]

  calculeId() {
    this.lastId++
    return this.lastId
  }
}

const productStub = new ProductStub()

export default productStub
