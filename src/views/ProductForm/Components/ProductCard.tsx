import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import MyBox from '../../../components/MyStyledComponents/MyBox'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      gap: 16
    },
    titleContainer: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: '1rem',
      width: 250
    },

    title: {
      fontSize: '24px'
    }
  })
)

interface ProductCardProps {
  icon: string
  title: string
}

const ProductCard: React.FC<ProductCardProps> = ({ icon, title, children }) => {
  const classes = useStyles()

  return (
    <MyBox className={classes.root}>
      <div className={classes.titleContainer}>
        <Icon color="primary">{icon}</Icon>
        <a className={classes.title}>{title}</a>
      </div>
      {children}
    </MyBox>
  )
}

export default ProductCard
