import createBrand, { Brand } from '../types/Brand'

class BrandStub {
  morotora = createBrand(1, 'Motorola')
  apple = createBrand(2, 'Apple')
  microsoft = createBrand(3, 'Microsoft')
  astro = createBrand(4, 'Astro')
  samsung = createBrand(5, 'Samsung')

  brands: Brand[] = [
    this.morotora,
    this.apple,
    this.microsoft,
    this.astro,
    this.morotora,
    this.apple,
    this.microsoft,
    this.astro
  ]

  getRandomBrand() {
    return this.brands[Math.trunc(Math.random() * this.brands.length)]
  }
}

const brandStub = new BrandStub()

export default brandStub
