import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    fontSize: '1rem',
    width: 400
  },
  dialog: {}
}))

interface DialogProps {
  open: boolean
  setOpen: (value: boolean) => void
  children: React.ReactNode
}

const MyDialog: React.FC<DialogProps> = (props) => {
  const classes = useStyles()

  const { setOpen, open, children } = props

  return (
    <Dialog className={classes.dialog} onClose={() => setOpen(false)} open={open}>
      <div className={classes.root}>{children}</div>
    </Dialog>
  )
}

export default MyDialog
