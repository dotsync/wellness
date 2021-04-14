import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkoutsDisplay from '../components/WorkoutsDisplay'
import Searchbar from '../components/Searchbar'
import QuickFilter from '../components/QuickFilter'
import { Grid } from '@material-ui/core';
import mockExerciseCards from '../MOCK/mockExerciseCards'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // border: '3px solid black'
    margin: 15,
    alignItems: 'center'
  },
}));

function Workouts() {
  const classes = useStyles();
  // TODO: Implement useEffect
  const [exerciseCards, setExerciseCards] = useState(mockExerciseCards)
  const [searchString, setSearchString] = useState('')
  const [quickFilter, setQuickFilter] = useState('')

  function handleSearch(e) {
    setSearchString(e.target.value)
  }
  function handleFilter(e) {
    setQuickFilter(e.target.value)
    console.log('quickFilter', e.target.value)
  }

  return (
    <div>
      <Grid item container className={classes.root}>
        {/* Search */}
        <Grid item xs={12} sm={6}>
          <Searchbar
            searchString={searchString}
            handleSearch={handleSearch}
          />
        </Grid>
        <Grid className={classes.quickFilter} item xs={12} sm={6}>
          <QuickFilter handleFilter={handleFilter}/>
        </Grid>
      </Grid>
      {/* Workout Cards */}
      <WorkoutsDisplay exerciseCards={exerciseCards} searchString={searchString} />
    </div>
  );
}

export default Workouts;
