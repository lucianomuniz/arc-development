import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    body1: {
      color: arcGrey,
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    estimate: {
      color: 'white',
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
    learnButton: {
      borderColor: arcBlue,
      borderRadius: 50,
      borderWidth: 2,
      color: arcBlue,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      textTransform: 'none',
    },
    h2: {
      color: arcBlue,
      fontFamily: 'Raleway',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.5,
      marginBottom: '1rem',
    },
    h3: {
      color: arcBlue,
      fontFamily: 'Pacifico',
      fontSize: '2.5rem',
    },
    h4: {
      color: arcBlue,
      fontFamily: 'Raleway',
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    subtitle1: {
      color: arcGrey,
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    subtitle2: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    tab: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'none',
    },
  },
});
