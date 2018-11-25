import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingTop: 100,
    marginLeft: 300,
    width: '100%',
    padding: '25px 100px',
  },
  description: {
    width: 700,
    maxWidth: 700,
  },
  title: {
    color: theme.palette.secondary.main,
    padding: '10px 25px',
    borderLeft: `2px solid ${theme.palette.secondary.main}`,
  },
  code: {
    fontWeight: 100,
    color: theme.palette.text.secondary,
    marginTop: 50,
    padding: '20px',
    backgroundColor: theme.palette.foreground.tertiary,
    borderRadius: theme.structural.borderRadius[0],
  },
  divider: {
    borderColor: theme.palette.foreground.tertiary,
  },
});

class Body extends React.Component {
  render() {
    const { classes, selectedFunction = {} } = this.props;

    return (
      <div className={classes.root}>
        {selectedFunction && (
          <div className={classes.description}>
            <h2 className={classes.title}>{selectedFunction.name}</h2>
            <hr className={classes.divider} />
            <div className={classes.code}>
              const foo = 'bar'
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(Body);
