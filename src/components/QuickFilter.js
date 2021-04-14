import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  gridList: {
    flexWrap: 'nowrap',
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  tileBtn: {
    marginTop: 20,
    width: '100%',
    height: '80%'
  },
}));

export default function QuickFilter(props) {
  const classes = useStyles();
  const [tiles, setTiles] = useState(['All', 'Run', 'Bike', 'Swim', 'Yoga']);

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {['All', 'Run', 'Bike', 'Swim', 'Yoga'].map((tile) => (
          <GridListTile style={{ margin: 20 }}>
            <Button
              disabled={props.buttonIsDisabled}
              value={tile}
              onClick={props.handleClick}
              color='secondary'
              variant='contained'
              className={classes.tileBtn}>
              {tile}
            </Button>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
