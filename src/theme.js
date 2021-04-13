import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme ({
  palette: {
    primary: {
      light: '#ffcd38',
      main: '#ffc107',
      dark: '#b28704',
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
