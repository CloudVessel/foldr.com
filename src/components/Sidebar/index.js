import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    backgroundColor: theme.palette.foreground.main,
    zIndex: 99,
    width: 300,
  },
});

const Sidebar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      This is the sidebar
    </div>
  );
};

export default withStyles(styles)(Sidebar);
