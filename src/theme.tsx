import { createMuiTheme } from '@material-ui/core';

const primary = {
  light: '#7986cb',
  main: '#3f51b5',
  dark: '#303f9f',
  contrastText: '#FFFFFF',
};

const secondary = {
  light: '#ff4081',
  main: '#f50057',
  dark: '#c51162',
  contrastText: '#FFFFFF',
};

export default createMuiTheme({
  palette: {
    primary: primary,
    secondary: secondary,
  },
  typography: {
    fontWeightMedium: 'normal',
    h1: {
      fontWeight: 300,
      fontSize: '1.875rem',
      lineHeight: '2.5rem',
      marginTop: '1.5rem',
      marginBottom: '1rem',
    },
    h2: {
      fontWeight: 400,
      color: '#949FA3',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
    },
    h3: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: '1.1875rem',
      marginRight: '0.5rem',
      minWidth: '5rem',
    },
    h5: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 'normal',
      lineHeight: '0.9375rem',
    },
    button: {
      textTransform: 'initial',
    },
  },
  overrides: {
    MuiAccordion: {
      root: {
        width: '100%'
      }
    },
    MuiSelect: {
      select: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '15rem'
      }
    },
    MuiListItemText: {
      primary: {
        display: 'flex',
        flexDirection: 'row'
      }
    }
  }
});
