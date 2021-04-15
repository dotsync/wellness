import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import { Grid } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  accountAvatarIconButton: {
    flexGrow: 1,
    marginRight: 20
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
<div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={9} />
            <Grid item xs={1}>
              <IconButton edge="start" color="inherit" aria-label="account">
                <AccountCircleIcon />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="Calendar">
                <CalendarTodayIcon />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="Settings">
                <SettingsIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Typography variant='h1' style={{ marginLeft: 50 }}>proDOJO</Typography>
        <Typography style={{ marginLeft: 70, padding: 50 }}>A fitness app</Typography>
      </AppBar>
      </div>
  );
}
