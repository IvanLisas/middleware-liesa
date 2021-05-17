import { Attribute } from './Attribute'

export type Category = {
  id: number
  parentID: number
  name: string
  description: string
  /*   categoryPath: Category[]
  attributes: Attribute[] */
}

export default function createCategoty(
  id: number,
  parentID: number,
  name: string,
  description: string
  /*   categoryPath: Category[],
  attributes: Attribute[] */
): Category {
  return { id, parentID, name, description }
}
