import React from 'react';
import Styles from '../../styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Error(){
    const classes = Styles();
    return(
        <div className={classes.root}>
            <Container>
            <Typography component="div">
                <Box fontWeight="fontWeightLight" fontSize={90} textAlign="center" m={1}>
                    404
                </Box>
                <Box textAlign="center" fontWeight="fontWeightMedium" m={1}>
                    Esta página não foi encontrada.
                </Box>
                </Typography>
            </Container>
        </div>
    );
}