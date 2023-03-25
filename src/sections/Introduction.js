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
          I am a developer with a strong interest in UIUX and I am passionate in making products that work for users.
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
          I enjoy participating in the design process to understand and contribute to how products are built with the user in mind.
          <br/> I have experience in UX development, UIUX design and full stack software engineering.
        </Typography>
      </Box>
    </Grid>
  )
}

export default Introduction;
