import React, { useState, useContext, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import {
  IconButton,
  Icon,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Radio,
  RadioGroup,
  Input,
  ButtonGroup
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MyDialog from '../../../components/MyDialog'
import MyInput from '../../../components/MyInput'
import brandStub from '../../../stubs/BrandStub'
import MyButton from '../../../components/MyButton'

export const useStylesLocal = makeStyles((theme) => ({
  searhBarContainer: {
    display: 'flex'
  }
}))

interface ChangeCategoryDialogProps {
  open: boolean
  setOpen: (value: boolean) => void
}

const ChangeCategoryDialog: React.FC<ChangeCategoryDialogProps> = (props) => {
  const classesLocal = useStylesLocal()

  const radioGroupRef = React.useRef(null)

  const [value, setValue] = React.useState(brandStub.getRandomBrand.name)

  const { setOpen, open } = props

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <div>
      <MyDialog setOpen={setOpen} open={open}>
        <DialogTitle style={{ padding: '16px 16px 0px 16px' }} id="confirmation-dialog-title">
          Cambiar categoria
        </DialogTitle>
        <DialogContent style={{ maxHeight: 350 }} dividers>
          {/*   <MyInput></MyInput> */}
          {/*           <RadioGroup ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
            {brandStub.brands.map((brand, index) => (
              <FormControlLabel
                value={brand.name + index} //ver
                key={brand.name}
                control={<Radio color="primary" />}
                label={brand.name}
              />
            ))}
          </RadioGroup> */}
          <ButtonGroup
            orientation="vertical"
            color="primary"
            aria-label="vertical contained primary button group"
            variant="outlined"
            style={{ width: '100%' }}
          >
            {brandStub.brands.map((brand, index) => (
              <Button
                key={brand.name + index}
                color="default"
                style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontWeight: 500 }}
              >
                <div></div>
                {brand.name}

                <Icon>chevron_right</Icon>
              </Button>
            ))}
          </ButtonGroup>
        </DialogContent>
        <DialogActions style={{ padding: '0px 16px 16px 16px' }}>
          <MyButton variant="contained" color="primary" autoFocus onClick={handleCancel}>
            Confirmar
          </MyButton>
          <MyButton onClick={handleCancel}>Cancelar</MyButton>
        </DialogActions>
      </MyDialog>
    </div>
  )
}

export default ChangeCategoryDialog
