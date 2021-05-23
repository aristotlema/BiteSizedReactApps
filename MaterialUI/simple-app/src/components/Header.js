import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AcUnit } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    typographyStyles: {
        flex: 1
    }
});

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>A website</Typography>
                <AcUnit />
            </Toolbar>
        </AppBar>
    );
};