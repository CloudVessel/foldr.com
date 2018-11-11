import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const styles = (theme) => {
  console.log('here', theme);

  return {
    root: {
      height: '100vh',
      backgroundColor: theme.palette.primary.main,
    },
  };
};

const Docs = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      This is docs
    </div>
  );
};

export default withStyles(styles)(withRouter(Docs));
