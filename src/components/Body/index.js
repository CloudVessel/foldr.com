import React from 'react';
import RunKit from 'react-runkit';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';

import Home from '../Home';

const styles = theme => ({
  root: {
    paddingTop: 100,
    marginLeft: 300,
    width: 'calc(100% - 300px)',
    maxWidth: 'calc(100% - 300px)',
  },
  main: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  description: {
    padding: '25px 100px 150px 100px',
    maxWidth: 700,
  },
  params: {
    flexBasis: 500,
    marginBottom: 15,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.secondary.main,
    padding: '10px 0',
  },
  paramsTitle: {
    width: '100%',
    color: theme.palette.secondary.main,
  },
  summary: {
    color: theme.palette.grey.secondary,
  },
  code: {
    flex: 1,
    flexBasis: 500,
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
  sinceWrapper: {
    marginLeft: 25,
    borderRadius: 10,
    padding: '7px 10px',
    display: 'inline-flex',
    backgroundColor: theme.palette.primary.main,
  },
  since: {
    fontSize: 12,
    color: theme.palette.white.main,
  },
  version: {
    marginLeft: 3,
    fontSize: 12,
    color: theme.palette.white.main,
  },
  paramIndex: {
    marginRight: 5,
    display: 'inline-block',
    paddingBottom: 10,
    fontWeight: 600,
  },
  paramName: {
    color: theme.palette.quaternary.main,
  },
  demoTitle: {
    color: theme.palette.secondary.main,
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
    const { classes, selectedFunction = {} } = this.props;

    console.log(selectedFunction);

    return (
      <div className={classes.root}>
        <React.Fragment>
          <CSSTransition
            in={Boolean(selectedFunction)}
            timeout={200}
            classNames="fade"
            unmountOnExit
          >
            <React.Fragment>
              {
                selectedFunction && (
                  <div className={classes.description}>
                    <h2 className={classes.title}>
                      {selectedFunction.name}
                      {selectedFunction.params
                        && `(${selectedFunction.params.map((param, i) => `${i === 0 ? '' : ' '}${param.name}`)})`
                      }
                      <span className={classes.sinceWrapper}>
                        <span className={classes.since}>
                          Since
                        </span>
                        <span className={classes.version}>
                          {selectedFunction.since}
                        </span>
                      </span>
                    </h2>
                    <div
                      className={classes.summary}
                      dangerouslySetInnerHTML={{ __html: selectedFunction.description }}
                    />
                    <div className={classes.main}>
                      {selectedFunction.params
                        && selectedFunction.params.length && (
                        <div className={classes.paramsTitle}>
                          <h3>Params</h3>
                          <div className={classes.code}>
                            {selectedFunction
                              && selectedFunction.params
                              && selectedFunction.params.map(param => (
                                <div>
                                  <span className={classes.paramIndex}>
                                    {typeof param.type.names === 'array' ? `{${param.type.names.join('  ')}}` : `{${param.type.names}}`}
                                  </span>
                                  <div className={classes.params}>
                                    <span dangerouslySetInnerHTML={{ __html: param.description }} />
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <h3 className={classes.demoTitle}>Returns</h3>
                    <div className={classes.code}>
                      <div dangerouslySetInnerHTML={{ __html: selectedFunction.returns[0].description }} />
                    </div>
                    <div>
                      <h3 className={classes.demoTitle}>Example</h3>
                      <RunKit source={selectedFunction.examples[0]} />
                    </div>
                  </div>
                )
              }
            </React.Fragment>
          </CSSTransition>
          {!selectedFunction && <Home />}
        </React.Fragment>
      </div>
    );
  }
}

export default withStyles(styles)(Body);
