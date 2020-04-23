import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function CardVazio() {
    return (
        <div>
            <Typography color="secondary">
                <Box fontSize="h6.fontSize" fontWeight="fontWeightRegular" m={1}>
                    Você ainda não enviou mensagem a direção de sua escola.
                </Box>
            </Typography>
        </div>
    )
}
