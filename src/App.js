import React from 'react';
import Navbar from './components/Navbar'
import Workouts from './pages/Workouts'
import Signup from './pages/Signup'
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div style={{
      overflowX: 'hidden'
    }}>
      <Router>
        <Grid container direction='column'>
          <Grid item>
            <Navbar />
          </Grid>
          <Route path='/workouts' component={Workouts} />
          <Route path='/signup' component={Signup} />
        </Grid>
      </Router>
    </div>
  );
}

export default App;
