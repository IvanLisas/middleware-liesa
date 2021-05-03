import { Attribute } from './attribute'
import { Path } from './Path'

export type Category = {
  id: number
  name: string
  categoryPath: Path[]
  attributes: Attribute[]
}
