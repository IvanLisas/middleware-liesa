import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Icon } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import { useEffect } from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    itemLogo: {
      width: '25px',
      height: '25px',
      marginRight: '5px'
    },
    marketsContainer: {
      display: 'flex',
      gap: 4
    }
  })
)

interface MarketsProps {
  markets: string[]
}

const Markets: React.FC<MarketsProps> = ({ markets }) => {
  const classes = useStyles()
  if (!markets) return null
  return (
    <div className={classes.marketsContainer}>
      <img
        className={classes.itemLogo}
        src={markets.includes('GoogleShops') ? '/googleshopping-logo.png' : '/googleshopping-logo-bn.png'}
      />
      <img
        className={classes.itemLogo}
        src={markets.includes('Mercadolibre') ? '/mercadolibre-logo.png' : '/mercadolibre-logo-bn.png'}
      />
      <img
        className={classes.itemLogo}
        src={markets.includes('Tiendanube') ? '/tiendanube-logo.png' : '/tiendanube-logo-bn.png'}
      />

      <img
        className={classes.itemLogo}
        src={markets.includes('Magento') ? '/magento-logo.png' : '/magento-logo-bn.png'}
      />
    </div>
  )
}

export default Markets

const marketMap = new Map([
  ['Mercadolibre', '/mercadolibre-logo.png'],
  ['Magento', '/magento-logo.png'],
  ['GoogleShops', '/googleshopping-logo.png'],
  ['Tiendanube', '/tiendanube-logo.png']
])
