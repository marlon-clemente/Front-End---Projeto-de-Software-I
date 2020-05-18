import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Title(props) {
  return (
    <Typography component="div">
      <Box fontSize={28} m={1}>
        {props.children}
      </Box>
    </Typography>
  );
}
