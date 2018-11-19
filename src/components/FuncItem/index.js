import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: 10,
  },
});

const FuncItem = ({ name, classes }) => (
  <div className={classes.root}>
    {name}
  </div>
);

export default withStyles(styles)(FuncItem);
