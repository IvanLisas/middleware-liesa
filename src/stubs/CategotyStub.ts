import createCategory, { Category } from '../types/Category'
import attributeStub from './AttributeStub'

class CategoryStub {
  celulares = createCategory(1, 'Celulares', [], attributeStub.attributeList)
  altaGama = createCategory(2, 'Alta gama', [this.celulares], [])
  touchScreen = createCategory(3, 'Touch screen', [this.celulares, this.altaGama], attributeStub.attributeList)

  categotyPath = [this.celulares, this.altaGama, this.touchScreen]
}

const categoryStub = new CategoryStub()

export default categoryStub
