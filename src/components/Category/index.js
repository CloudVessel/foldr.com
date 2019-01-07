import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import SubFunction from '../Function';
import Accordion from '../Accordion';

const styles = () => ({
  root: {
    padding: 10,
    display: 'block',
    fontWeight: 400,
  },
});

const mapFunctionsToComponents = ({ onSelectedFunction, selectedFunction }) =>
  (funcs = []) => funcs.map(func => (
    <SubFunction
      key={func.name}
      name={func.name}
      func={func}
      onSelectedFunction={onSelectedFunction}
      selectedFunction={selectedFunction}
    />
  ));

const Category = (props) => {
  const {
    name,
    classes,
    functions,
    isSearching,
  } = props;

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
