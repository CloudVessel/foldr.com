import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Accordion from '../Accordion';

const styles = () => ({
  root: {
    padding: 10,
  },
});

const FuncItem = (props) => {
  const { name, classes, innerText } = props;

  console.log(props.innerText);

  return (
    <div className={classes.root}>
      <Accordion title={name} />
    </div>
  );
};

export default withStyles(styles)(FuncItem);
