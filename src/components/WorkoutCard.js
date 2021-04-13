import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 15,
  },
  media: {
    height: 250,
    margin: 10,
    borderRadius: '25px'
  },
  content: {
    color: '#20e32',
  },
  addFavBtn: {
    border: '2px solid black',
    borderRadius: 5
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  console.log('props.height', props.height)
  return (
    <Card
      className={classes.root}
      style={{
        height: props.height
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/bike-endurance2.jpg"
          title="Bike Endurance"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Bike Endurance
          </Typography>
          <Typography>
            Short optional description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.addFavBtn} size="small" color="primary">
          <AddIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
