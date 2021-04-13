import Navbar from './components/Navbar'
import WorkoutsDisplay from './components/WorkoutsDisplay'
import Searchbar from './components/Searchbar'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        {/* Search */}
        <Grid item xs={12} sm={6}>
          <Searchbar />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>Catagory filter carosel</Paper>
        </Grid>

        {/* Workout Cards */}
        </Grid>
        <WorkoutsDisplay />
    </div>
  );
}

export default App;
