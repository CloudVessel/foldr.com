import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: 15,
    cursor: 'pointer',
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
