import React from 'react'
import { Button as MuiButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  userButton: {
    width: 400,
    height: 400
  }
})

export default function Button() {
  const classes = useStyles()
  return (
    <div>
      <MuiButton
        className={classes.userButton}
        color='primary'
        variant='outlined'
      >dd</MuiButton>
    </div>
  )
}
