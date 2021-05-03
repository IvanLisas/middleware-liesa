export type Brand = {
  id: number
  name: string
}

export default function createBrand(id: number, name: string): Brand {
  return { id, name }
}
