import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core'
import MySelecter from './MySelecter'
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      fontSize: '1rem',
      width: 250
    },
    volumenContainer: {}
  })
)

interface ProductInputWithAdormentProps extends OutlinedInputProps {
  label: string
  value: string | number
  setValue?: (value: string) => void
  disabled?: boolean
}

const ProductInputWithAdorment: React.FC<ProductInputWithAdormentProps> = ({
  label,
  value,
  setValue,
  disabled,
  type
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Icon color="primary">{disabled ? 'noicon' : 'chevron_right'}</Icon>

      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          disabled={disabled}
          type={type}
          value={value}
          onChange={setValue ? (event) => setValue(event.target.value) : () => null}
          endAdornment={
            <InputAdornment position="end">
              <FormControl variant="standard">
                <MySelecter />
              </FormControl>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </div>
  )
}

export default ProductInputWithAdorment
