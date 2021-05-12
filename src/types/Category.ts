import { Attribute } from './Attribute'

export type Category = {
  id: number
  name: string
  categoryPath: Category[]
  attributes: Attribute[]
}

export default function createCategoty(
  id: number,
  name: string,
  categoryPath: Category[],
  attributes: Attribute[]
): Category {
  return { id, name, categoryPath, attributes }
}
