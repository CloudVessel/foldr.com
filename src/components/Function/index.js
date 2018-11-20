import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    transition: 'background-color .1s ease',
    display: 'flex',
    padding: '5px 10px 5px 10px',
    minHeight: 30,
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.main,
    borderLeft: `1px solid ${theme.palette.grey.secondary}`,
    '&:hover': {
      backgroundColor: theme.hovers[0],
    },
  },
});

const Function = (props) => {
  const { classes, name } = props;

  return (
    <div className={classes.root}>
      {name}
    </div>
  );
};

export default withStyles(styles)(Function);
