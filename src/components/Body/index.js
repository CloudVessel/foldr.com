import React from 'react';
import RunKit from 'react-runkit';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

const styles = theme => ({
  root: {
    paddingTop: 100,
    marginLeft: 300,
    width: '100%',
    padding: '25px 100px',
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
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
    flex: 1,
    fontWeight: 100,
    color: theme.palette.grey.secondary,
    margin: '20px 0 35px 0',
    padding: '20px',
    backgroundColor: theme.palette.foreground.main,
    borderRadius: theme.structural.borderRadius[0],
  },
  divider: {
    marginTop: 45,
    border: '1px solid',
    borderColor: theme.palette.foreground.tertiary,
  },
  since: {
    fontSize: 12,
    marginLeft: 35,
    color: theme.palette.grey.secondary,
  },
  version: {
    marginLeft: 3,
    fontSize: 12,
    color: theme.palette.grey.secondary,
  },
});

/**
 * Component to render function / home information
 * @returns {React.Component} - Body component
 */
class Body extends React.Component {
  static propTypes = {
    classes: PropTypes.shape({}).isRequired,
    selectedFunction: PropTypes.shape({
      name: PropTypes.string,
      since: PropTypes.string,
      description: PropTypes.string,
      examples: PropTypes.array,
    }),
  }

  static defaultProps = {
    selectedFunction: {},
  }

  state = {};

  /**
   * @inheritDoc
   */
  render() {
    const { classes, selectedFunction } = this.props;

    return (
      <div className={classes.root}>
        <CSSTransition
          in={Boolean(selectedFunction)}
          timeout={200}
          classNames="fade"
          unmountOnExit
        >
          <React.Fragment>
            {selectedFunction ? (
              <div className={classes.description}>
                <h2 className={classes.title}>
                  {selectedFunction.name}
                  <span className={classes.since}>
                    Since:
                  </span>
                  <span className={classes.version}>v{selectedFunction.since}</span>
                </h2>
                <hr className={classes.divider} />
                <div className={classes.main}>
                  <div
                    className={classes.code}
                    dangerouslySetInnerHTML={{ __html: selectedFunction.description }}
                  />
                </div>
                <RunKit source={selectedFunction.examples[0]} />
              </div>
            ) : (
              <div>
                Home page information rendered here
              </div>
            )}
          </React.Fragment>
        </CSSTransition>
      </div>
    );
  }
}

export default withStyles(styles)(Body);
