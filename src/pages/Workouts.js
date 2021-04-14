import React, { useState } from 'react';
import WorkoutsDisplay from '../components/WorkoutsDisplay'
import Searchbar from '../components/Searchbar'
import { Grid, Typography } from '@material-ui/core';
import mockExerciseCards from '../MOCK/mockExerciseCards'

function Workouts() {
  // TODO: Implement useEffect
  const [exerciseCards, setExerciseCards] = useState(mockExerciseCards)
  const [searchString, setSearchString] = useState('')

  function handleSearch(e) {
    setSearchString(e.target.value)
  }

  return (
    <div>
      <Grid item container>
        {/* Search */}
        <Grid item xs={12} sm={6}>
          <Searchbar
            searchString={searchString}
            handleSearch={handleSearch}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5'>Bike | Yoga | Run | Swim | ect..</Typography>
        </Grid>
      </Grid>
      {/* Workout Cards */}
      <WorkoutsDisplay exerciseCards={exerciseCards} searchString={searchString} />
    </div>
  );
}

export default Workouts;
