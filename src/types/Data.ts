export type Data = {
  id: number
  sku: number
  nombre: string
  marca: string
  tienda: string
  progreso: number
  stock: number
}

export default function createData(
  id: number,
  sku: number,
  nombre: string,
  marca: string,
  tienda: string,
  progreso: number,
  stock: number
): Data {
  return { id, sku, nombre, marca, tienda, progreso, stock }
}
