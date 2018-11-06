import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {},
});

const Home = (props) => {
  const { classes } = props;

  return (
    <div>
      This is home
      <Link to="docs" path="/docs">Docs</Link>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(Home);
