import Navbar from './components/Navbar'
import WorkoutsDisplay from './components/WorkoutsDisplay'
import Searchbar from './components/Searchbar'
import { Grid, Typography } from '@material-ui/core';
import React from 'react';

function App() {
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          {/* Search */}
          <Grid item xs={12} sm={6}>
            <Searchbar />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5'>Bike | Yoga | Run | Swim | ect..</Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Workout Cards */}
      <WorkoutsDisplay />
    </div>
  );
}

export default App;
