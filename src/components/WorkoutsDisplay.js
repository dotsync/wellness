import React from 'react';
import WorkoutCard from './WorkoutCard';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function WorkoutsDisplay() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
      <Grid xs={0} sm={2} />
        <Grid item xs={6} sm={3}>
          <WorkoutCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Yoga Triathlete Flow</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Run Endurance Training</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>Swim Speed Training</Paper>
        </Grid>
        <Grid xs={0} sm={2} />
      </Grid>
    </div >
  )
}
