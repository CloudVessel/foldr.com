import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SubFunction from '../Function';
import Accordion from '../Accordion';

const styles = theme => ({
  root: {
    padding: 10,
    display: 'block',
    fontWeight: 400,
  },
});

const mapFunctionsToComponents = ({ onSelectedFunction }) => (funcs = []) => funcs.map(func => (
  <SubFunction
    name={func.name}
    func={func}
    onSelectedFunction={onSelectedFunction}
  />
));

const Category = (props) => {
  const { name, classes, functions, isSearching } = props;

  const mapFunctionsWithProps = mapFunctionsToComponents(props);

  return (
    <div className={classes.root}>
      <Accordion
        title={name}
        isSearching={isSearching}
        innerText={mapFunctionsWithProps(functions)}
      />
    </div>
  );
};

export default withStyles(styles)(Category);
