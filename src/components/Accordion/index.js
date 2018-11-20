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
});

const Accordion = (props) => {
  const { classes, innerText, title } = props;

  return (
    <div>
      <ExpansionPanel className={classes.root}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {innerText}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(Accordion);
