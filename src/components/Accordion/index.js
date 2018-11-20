import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const styles = theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: theme.palette.foreground.main,
  },
  details: {
    display: 'block',
    overflow: 'auto',
  },
  panel: {
    '&:hover': {
      backgroundColor: theme.hovers[0],
    },
  },
  panelExpanded: {
    backgroundColor: theme.palette.foreground.secondary,
  },
});

/**
 *
 */
class Accordion extends React.Component {
  state = { isExpanded: false };

  /**
   * 
   */
  handleToggleExpansion = () =>
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));

  /**
   * 
   */
  render() {
    const { isExpanded } = this.state;
    const { classes, innerText, title } = this.props;

    return (
      <div>
        <ExpansionPanel
          onChange={this.handleToggleExpansion}
          expanded={isExpanded}
          className={classes.root}
        >
          <ExpansionPanelSummary
            className={isExpanded ? classes.panelExpanded : classes.panel}
            expandIcon={<ExpandMoreIcon />}
          >
            {title}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {innerText}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(Accordion);
