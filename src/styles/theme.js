import { createMuiTheme } from '@material-ui/core/styles';

const overrides = {
  MuiInput: {
    input: {
      '&:hover:after': {
        backgroundColor: 'transparent',
        borderBottom: 'none',
      },
    },
  },
};

export default createMuiTheme({
  palette: {
    primary: {
      main: '#44475a',
      secondary: '#6272a4',
    },
    secondary: {
      main: '#52DE9E',
    },
    tertiary: {
      main: '#ffb86c',
    },
    foreground: {
      main: '#F5F7F9',
      secondary: '#fff',
    },
    grey: {
      main: '#5C6975',
      secondary: '#ddd',
      tertiary: '#999',
    },
    text: {
      main: '#666',
    },
  },
  shadow: {
    box: {
      main: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
    },
  },
  hovers: ['rgba(98, 114, 164, .2)'],
  ...overrides,
});
