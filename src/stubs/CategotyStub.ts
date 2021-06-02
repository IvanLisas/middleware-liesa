import createCategory, { Category } from '../types/Category'
import attributeStub from './AttributeStub'

class CategoryStub {
  celulares = createCategory(1, 2, 'Celulares', 'asd')

  categotyPath = [this.celulares]
}

const categoryStub = new CategoryStub()

export default categoryStub
