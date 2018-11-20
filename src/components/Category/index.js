import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SubFunction from '../Function';
import Accordion from '../Accordion';

const styles = theme => ({
  root: {
    padding: 10,
    display: 'block',
  },
});

const mapFunctionsToComponents = props => (funcs = []) => funcs.map(func => (
  <SubFunction name={func.name} />
));

const Category = (props) => {
  const { name, classes, functions } = props;

  console.log(functions);

  const mapFunctionsWithProps = mapFunctionsToComponents(props);

  return (
    <div className={classes.root}>
      <Accordion
        title={name}
        innerText={mapFunctionsWithProps(functions)}
      />
    </div>
  );
};

export default withStyles(styles)(Category);
