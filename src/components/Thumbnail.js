import React from 'react';
import { Avatar, Box } from '@mui/material';

function Thumbnail(props) {
  return (
    <Box sx={{ my: 1 }}>
      <Avatar 
        src={props.src}
        alt={props.alt}
        sx={{
          backgroundColor: 'white',
          p: ['4px', 1, 1],
          boxSizing: 'border-box',
          width: [40, 80, 80], 
          height: [40, 80, 80],
        }}
      />
    </Box>
  )
}

export default Thumbnail;