import React, { useState } from 'react';
import WorkoutCard from './WorkoutCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mockExerciseCards from '../MOCK/mockExerciseCards'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
}));

export default function WorkoutsDisplay() {
  const [exerciseCards, setExerciseCards] = useState(mockExerciseCards)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {exerciseCards.map((workout, i) => {
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

/**


    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <WorkoutCard height={415}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard height={415}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard height={415}/>
        </Grid>
        <Grid item xs={6} sm={3}>
          <WorkoutCard height={415}/>
        </Grid>
      </Grid>
    </div >


 */
