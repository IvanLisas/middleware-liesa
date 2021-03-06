import React from 'react'
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const MyCircularProgress: React.FC<CircularProgressProps & { value: number }> = (props) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        color={props.value == 100 ? 'primary' : 'secondary'}
        variant="determinate"
        size={40}
        thickness={2}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default MyCircularProgress
