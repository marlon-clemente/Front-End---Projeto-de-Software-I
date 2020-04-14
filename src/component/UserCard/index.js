import React from 'react'
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';

export default function UserCard() {
    const classes = Styles();
    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Avatar aria-label="recipe" alignItems="center" className={classes.avatar}>
                    R
                </Avatar>   
                
                <CardContent>
                    <Typography color="secondary">
                        <Box    textAlign="center"
                                fontStyle="normal"
                                fontWeight="fontWeightMedium"
                                fontSize="h6.fontSize"
                                m={1}
                        >Nome do Usuario</Box>
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                        <Box textAlign="center" m={1}>
                            email@usuario
                        </Box>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Box textAlign="center" m={1}>
                            Conectado com Google
                        </Box>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
