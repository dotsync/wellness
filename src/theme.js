import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      light: '#ffcd38',
      main: '#673ab7',
      dark: '#8561c5',
      contrastText: '#fff',
    },
    secondary: {
      light: '#834bff',
      main: '#651ff',
      dark: '#4615b2',
      contrastText: '#000',
    },
  },
  status: {
    danger: 'orange'
  }
});

export default theme;
