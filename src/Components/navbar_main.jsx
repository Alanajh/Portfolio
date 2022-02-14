import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.customColor}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              A. J. H A R M O N
            </Typography>
            <Button color="inherit">Login</Button>
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
        backgroundColor: '#373F27',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
  
  ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  
  export default withStyles(styles)(ButtonAppBar);