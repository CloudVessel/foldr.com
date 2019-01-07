import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    padding: 25,
    color: '#ddd',
  },
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    Home
  </div>
);

export default withStyles(styles)(Home);
