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

const MOCKDATA = [
  {
    'sport': 'Bike',
    'type': 'Endurance',
    'description': 'A long ride to develop endurance',
    'image': '/static/images/cards/bike-endurance2.jpg'
  },
  {
    'sport': 'Bike',
    'type': 'Speed',
    'description': 'Interval sprints to develop speed',
    'image': '/static/images/cards/bike-endurance.jpg'
  },
  {
    'sport': 'Bike',
    'type': 'Speed',
    'description': 'Interval sprints to develop speed',
    'image': '/static/images/cards/bike-endurance.jpg'
  },
    {
    'sport': 'Bike',
    'type': 'Speed',
    'description': 'Interval sprints to develop speed',
    'image': '/static/images/cards/bike-endurance2.jpg'
  },
]

export default function WorkoutsDisplay() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {MOCKDATA.map((workout, i) => {
          return (
            <Grid item xs={6} sm={3}>
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
