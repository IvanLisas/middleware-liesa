import createMarketPlace, { MarketPlace } from '../types/MarketPlace'

class MarketStub {
  googleShops = createMarketPlace(1, 'Mercadolibre')

  mercadolibre = createMarketPlace(1, 'Magento')

  magento = createMarketPlace(1, 'Googleshops')

  tiendanube = createMarketPlace(1, 'Tiendanube')

  markets = [this.googleShops, this.mercadolibre, this.magento, this.tiendanube]

  randomMarkets() {
    const activeMarkets: MarketPlace[] = []
    this.markets.forEach((market) => {
      if (Math.random() > 0.5) {
        activeMarkets.push(market)
      }
    })
    return activeMarkets
  }
}

const marketStub = new MarketStub()

export default marketStub
