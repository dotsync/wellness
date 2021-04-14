import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WorkoutsDisplay from '../components/WorkoutsDisplay'
import Searchbar from '../components/Searchbar'
import QuickFilter from '../components/QuickFilter'
import { Grid } from '@material-ui/core';
import mockExerciseCards from '../MOCK/mockExerciseCards'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '0px 20px'
  },
  root: {
    flexGrow: 1,
    // border: '3px solid black'
    margin: 15,
    alignItems: 'center'
  },
}));

function Workouts() {
  const classes = useStyles();

  const [exerciseCards, setExerciseCards] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setExerciseCards(mockExerciseCards)
    setIsLoaded(true)
  }, [])

  function handleSearch(e) {
    setSearchString(e.target.value)
  }

  function handleClick(e) {
    if (!e.target.value) {
      console.log(`Uhoh e.target.value is undefined for some reason ${e.target.value}

      exercise cards state is: ${searchString}`)
      // force reload state?
      console.log()
    } else {
      if (e.target.value === 'All') {
        console.log('you picked all')
        setSearchString('')
      } else {
        setSearchString(e.target.value)
        console.log(`you picked ${e.target.value}`)
      }
    }
  }

  return isLoaded === false ?
    <div>loading....</div> :
    (
      <div className={classes.container}>
        <Grid item container className={classes.root}>
          {/* Search */}
          <Grid item xs={12} sm={6}>
            <Searchbar
              searchString={searchString}
              handleSearch={handleSearch}
            />
          </Grid>
          <Grid className={classes.quickFilter} item xs={12} sm={6}>
            <QuickFilter isLoaded={isLoaded} handleClick={handleClick} />
          </Grid>
        </Grid>
        {/* Workout Cards */}
        <WorkoutsDisplay exerciseCards={exerciseCards} searchString={searchString} />
      </div>
    );
}

export default Workouts;
