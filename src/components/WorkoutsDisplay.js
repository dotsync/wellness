import React from 'react';
import WorkoutCard from './WorkoutCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
}));



export default function WorkoutsDisplay() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <WorkoutCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard />
        </Grid>
      </Grid>
    </div >
  )
}
