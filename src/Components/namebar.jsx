import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function NameBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.customColor}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              A. J. H A R M O N
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  const styles = {
    root: {
      flexGrow: 1,
    },
    customColor:{
        backgroundColor: 'red',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
  NameBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
  export default withStyles(styles)(NameBar);