import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    padding: '25px 100px',
    color: '#ddd',
    maxWidth: 750,
  },
  heading: {
    fontWeight: 400,
  },
  util: {
    marginTop: 50,
  },
  name: {
    color: theme.palette.secondary.main,
    paddingRight: 8,
    fontWeight: 600,
  },
  code: {
    fontWeight: 100,
    color: theme.palette.grey.secondary,
    margin: '20px 0 35px 0',
    padding: '20px',
    backgroundColor: theme.palette.foreground.main,
    borderRadius: theme.structural.borderRadius[0],
  },
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    <h3 className={classes.heading}>
      <span className={classes.name}>Foldr</span>
      is a utility library written for all modern and legacy JavaScript environments.
    </h3>
    <p>
      Foldr is a more performant alternative to other utility libraries. Roughly 30% faster to be exact.
    </p>
    <h3 className={classes.util}>
      Utilization
    </h3>
    <div>
      <p>
        Foldr will be treeshaken by default,
        so we advise you install all packages and use the ones needed.
      </p>
      <div className={classes.code}>npm install --save @foldr/all</div>
    </div>
  </div>
);

export default withStyles(styles)(Home);
