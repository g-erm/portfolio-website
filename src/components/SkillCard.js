import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function SkillCard(props) {
  return (
    <Box sx={{
      margin: ['auto', null, 0],
      backgroundColor: '#E1CCB3',
      borderRadius: 4,
      width: [144, 284, 284], 
    }}>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 500,
          fontSize: [10, 20, 20],
          color: '#412300',
          textAlign: 'center',
          pt: [2, null, 4],
        }}
      >
        {props.title}
      </Typography>
      <Grid
        sx={{
          margin: 'auto',
          display: 'flex',
          width: '75%',
          flexFlow: 'wrap',
          justifyContent: 'space-between',
          py: [0, null, 2],
        }}
      >
        {props.children}
      </Grid>
    </Box>
  )
}

export default SkillCard;
