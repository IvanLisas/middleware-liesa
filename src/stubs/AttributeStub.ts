import createAttribute from '../types/Attribute'

class AttributeStub {
  attribute1 = createAttribute(1, 'Atributo 1', 'Valor de atributo 1')
  attribute2 = createAttribute(2, 'Atributo 2', 'Valor de atributo 2')
  attribute3 = createAttribute(3, 'Atributo 3', 'Valor de atributo 3')
  attribute4 = createAttribute(4, 'Atributo 4', 'Valor de atributo 4')

  attributeList = [this.attribute1, this.attribute2, this.attribute3, this.attribute4]
}

const attributeStub = new AttributeStub()

export default attributeStub
