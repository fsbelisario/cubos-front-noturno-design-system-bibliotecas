import useStyles from './style';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        PokeDex
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;