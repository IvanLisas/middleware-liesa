export type MarketPlace = {
  id: number
  name: string
}

export default function createMarketPlace(id: number, name: string): MarketPlace {
  return { id, name }
}
