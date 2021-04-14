import React from 'react';
import Navbar from './components/Navbar'
import Workouts from './pages/Workouts'
import { Grid } from '@material-ui/core';

function App() {
  return (
    <div>
      <Grid container direction='column'>
        <Grid item>
          <Navbar />
        </Grid>
        <Workouts />
      </Grid>
    </div>
  );
}

export default App;
