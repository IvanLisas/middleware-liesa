export type Data = {
  sku: number
  nombre: string
  marca: string
  tienda: string
  progreso: number
  stock: number
}

export default function createData(
  sku: number,
  nombre: string,
  marca: string,
  tienda: string,
  progreso: number,
  stock: number
): Data {
  return { sku, nombre, marca, tienda, progreso, stock }
}
