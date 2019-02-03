const overrides = {
  MuiInput: {
    input: {
      '&:hover:after': {
        backgroundColor: 'transparent',
        borderBottom: 'none',
      },
    },
  },
  MuiExpansionPanelSummary: {
    expandIcon: {
      color: '#8E8E8E !important',
    },
    expanded: {
      color: '#8E8E8E !important',
    },
  },
};

export const light = {
  palette: {
    primary: {
      main: '#6FC292',
      secondary: '#EFF9F4',
    },
    secondary: {
      main: '#fff',
    },
    tertiary: {
      main: '#ffb86c',
    },
    quaternary: {
      main: '#8e85e5',
    },
    foreground: {
      main: '#282a36',
      secondary: '#363842',
      tertiary: '#44475a',
    },
    code: {
      main: '#EFF9F4',
    },
    grey: {
      main: '#5C6975',
      secondary: '#ddd',
      tertiary: '#999',
    },
    text: {
      main: '#000',
      secondary: '#9DA8A3',
      tertiary: '#fff',
    },
    white: {
      main: '#fff',
    },
  },
  structural: {
    borderRadius: [2],
  },
  shadow: {
    box: {
      main: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
    },
  },
  hovers: ['rgba(54, 56, 66, .8)'],
  overrides,
};

export const dark = {
  palette: {
    primary: {
      main: '#282A35',
      secondary: '#EFF9F4',
    },
    secondary: {
      main: '#52DE9E',
    },
    tertiary: {
      main: '#ffb86c',
    },
    quaternary: {
      main: '#8e85e5',
    },
    foreground: {
      main: '#282a36',
      secondary: '#363842',
      tertiary: '#44475a',
    },
    code: {
      main: '#EFF9F4',
    },
    grey: {
      main: '#5C6975',
      secondary: '#ddd',
      tertiary: '#999',
    },
    text: {
      main: '#fff',
      secondary: '#8E8E8E',
      tertiary: '#ddd',
    },
    white: {
      main: '#fff',
    },
  },
  structural: {
    borderRadius: [2],
  },
  shadow: {
    box: {
      main: '0 1px 1px 0 rgba(116, 129, 141, 0.1)',
    },
  },
  hovers: ['rgba(54, 56, 66, .8)'],
  overrides,
};
