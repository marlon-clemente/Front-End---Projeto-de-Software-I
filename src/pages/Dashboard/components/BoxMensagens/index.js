import React from 'react';
import Style from './styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function BoxMensages(){
    const classes = Style();
    return (
        <div>
            <div className={classes.root}>
                <Typography component="div">
                    <Box
                        fontSize={16} 
                        m={1}
                        fontFamily="Lato"
                        fontWeight={700}>
                        Últimas mensagens
                    </Box>
                    <Divider />
                    <Box
                        fontSize={14}
                        fontWeight={400}
                        fontFamily="Lato"
                        m={1}
                        >
                        Nada de mensagens no momento
                    </Box>
                </Typography>
                
                <Typography component="div">
                    <Box
                        fontSize={16} 
                        m={1}
                        fontFamily="Lato"
                        fontWeight={700}>
                        Últimas observações
                    </Box>
                    <Divider />
                    <Box
                        fontSize={14}
                        fontWeight={400}
                        fontFamily="Lato"
                        m={1}
                        >
                        Nada no momento
                    </Box>
                </Typography>

            </div>
        </div>
    );
}