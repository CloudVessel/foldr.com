import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    transition: 'background-color .1s ease',
    display: 'flex',
    padding: 10,
    minHeight: 30,
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.main,
    border: 'none',
    width: '100%',
    borderLeft: `1px solid ${theme.palette.grey.secondary}`,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.hovers[0],
    },
  },
});

const Function = (props) => {
  const { classes, name, onSelectedFunction, func } = props;

  return (
    <div>
      <button
        onClick={onSelectedFunction(func)}
        tabIndex={0}
        className={classes.root}
      >
        {name}
      </button>
    </div>
  );
};

export default withStyles(styles)(Function);
