import { LinearProgress } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'

const useStyles = makeStyles(() => ({
  root: {
    paddingRight: 9
  }
}))

const LoadingLinearProgress: React.FC = () => {
  const classes = useStyles()
  const { promiseInProgress } = usePromiseTracker()

  return <div className={classes.root}>{promiseInProgress && <LinearProgress />}</div>
}

export default LoadingLinearProgress
