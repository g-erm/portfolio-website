import React from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import avatar from '../assets/squarepic.jpg';

function Introduction() {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: ['column', null, 'row'],
      }}
    >
      <Avatar
        src={avatar}
        alt="Profile"
        sx={{ 
          width: [120, 295, 295], 
          height: [120, 295, 295],
          margin: 'auto',
          mx: [null, null, 5],
        }}
      />
      <Box 
        sx={{ 
          py: [2, null, 5],
          margin: 'auto',
          px: [3, null, 5], 
        }}
      >
        <Typography 
          sx={{
            fontFamily: 'Krub',
            fontWeight: 500,
            fontSize: [10, 20, 20],
            color: '#412300',
            pb: 1,
            textAlign: ['center', null, 'left'],
          }}
        >
          Hi there! I am Germaine, and I am happy to have you here! 
        </Typography>
        <Typography 
          sx={{
            fontFamily: 'Krub',
            fontWeight: 600,
            fontSize: [14, 24, 24],
            color: '#072B19',
            pb: 1,
            textAlign: ['center', null, 'left'],
          }}
        >
          I am a final year Computer Science undergraduate with an interest in front-end development and UIUX.
        </Typography>
        <Typography 
          sx={{
            fontFamily: 'Krub',
            fontWeight: 500,
            fontSize: [10, 20, 20],
            color: '#412300',
            textAlign: ['center', null, 'left'],
          }}
        >
          I have experience in full stack software engineering, front-end development and UIUX design.
          <br/> In my free time, I like to play with my cats and crochet things!
        </Typography>
      </Box>
    </Grid>
  )
}

export default Introduction;
