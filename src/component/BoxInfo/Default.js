import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function BoxDefault(props) {
  return(
    <div>
      <Typography component="div"><Box
        fontFamily="Roboto" textAlign="center"
        fontSize="18px" color="#636466">
        { props.title }
      </Box></Typography>
    </div>
  );
}
