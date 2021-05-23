import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: 'oblique',
        color: 'red',
        fontSize: '30px'
    },
    buttonStyles: {
        color: 'green'
    }
});

export default function App() {
    const classes = useStyles();

    return (
        <div className="App">
            <Typography 
                className={classes.helloThereStyle} 
                variant="h2" 
                color="primary"
            >
                Hello There
            </Typography>
            <Button 
                className={classes.buttonStyles} 
                variant="outlined" 
                color="secondary"
            >
                This is our first button
            </Button>
        </div>
    );
};