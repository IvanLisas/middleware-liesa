import { makeStyles } from '@material-ui/core/styles'

const useGlobalStyle = makeStyles((theme) => ({
  scrollbarStyles: {
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      width: 8
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
      borderRadius: 7
    }
  },
  endButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '12px'
  }
}))

export default useGlobalStyle
