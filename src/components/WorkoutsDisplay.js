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

export default function WorkoutsDisplay(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {props.exerciseCards.map((workout, i) => {
          return (
            <Grid key={workout.id} item xs={6} sm={3}>
              <WorkoutCard workout={workout} />
            </Grid>
          )
        })}
      </Grid>
    </div >
  )
}
