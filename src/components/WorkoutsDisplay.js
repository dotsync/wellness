/* eslint-disable array-callback-return */
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
        {props.exerciseCards.filter((exerciseCard) => {
          // return this card and therfor all exercise cards if searchString is empty
          if (props.searchString === '') return exerciseCard
          // else if sport matches return it
          else if (exerciseCard.sport.toLowerCase().includes(props.searchString.toLowerCase())) return exerciseCard
        }).map((workout, i) => { // create exercise grid
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
