export type Category = {
  id: number
  name: string
}

export default function createCategory(id: number, name: string): Category {
  return { id, name }
}
