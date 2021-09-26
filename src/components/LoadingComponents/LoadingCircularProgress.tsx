import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'

const useStyles = makeStyles(() => ({
  root: {}
}))

const LoadingCircularProgress: React.FC = () => {
  const classes = useStyles()
  const { promiseInProgress } = usePromiseTracker()

  return <div className={classes.root}>{promiseInProgress && <CircularProgress />}</div>
}

export default LoadingCircularProgress
