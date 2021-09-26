export type Attribute = {
  id: number
  name: string
  value: string
}

export default function createAttribute(id: number, name: string, value: string): Attribute {
  return { id, name, value }
}
