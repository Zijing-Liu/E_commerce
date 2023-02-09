import React from 'react';
// import  to make the navbar responsive
import { AppBar, Toolbar, IconButton,Badge, MenuItem, Menu, Typography} from '@material-ui/core';

import {ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/Lululemon_Athletica_logo.svg.png';
import useStyles from '../Products/styles.js';


const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Commerce.js" height="25pt" className={classes.image} />
                    Commerce.js
                </Typography>
                <dive className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div> 
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar