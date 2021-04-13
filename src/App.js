import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloWorldStyle: {
    fontSize: '200px'
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className={classes.helloWorldStyle}>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
