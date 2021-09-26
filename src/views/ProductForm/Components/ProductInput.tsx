import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: '1rem',
      width: 250
    }
  })
)

interface ProductInputProps {
  label: string
  value: string | number
  setValue?: (value: string) => void
  disabled?: boolean
}

const ProductInput: React.FC<ProductInputProps> = ({ label, value, setValue, disabled }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Icon color="primary">{disabled ? 'noicon' : 'chevron_right'}</Icon>
      <TextField
        label={label}
        variant="outlined"
        disabled={disabled}
        value={value}
        onChange={setValue ? (event) => setValue(event.target.value) : () => null}
      />
    </div>
  )
}

export default ProductInput
