import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Title(props) {
  return (
    <Typography color="rgb(45, 59, 69)">
      <Box fontSize={28} m={1}>
        {props.children}
      </Box>
    </Typography>
  );
}
