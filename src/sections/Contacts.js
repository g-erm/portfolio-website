import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contacts() {
  return (
    <Box sx={{p: [4, null, 5]}}>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [14, 32, 32],
          color: '#072B19',
          mb: 3,
        }}
      >
       I would love to connect with you!
      </Typography>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: ['flex-start', 'center', 'center'],
          flexFlow: 'wrap',
          gap: [1, 3, 3],
        }}
      >
        <Button
          href='mailto:tanyuting.gt@gmail.com'
          sx={{
            color: '#412300',
            textTransform: 'none',
            fontFamily: 'Krub',
            fontWeight: 500,
            fontSize: [12, 24, 24],
          }}
        >
          <MailOutlineSharpIcon sx={{ mr: [1, 2, 2], fontSize: [24, 50, 50] }} />
          tanyuting.gt@gmail.com
        </Button>
        <Button
          href='https://www.linkedin.com/in/g-erm/'
          sx={{
            color: '#412300',
            textTransform: 'none',
            fontFamily: 'Krub',
            fontWeight: 500,
            fontSize: [12, 24, 24],
          }}
        >
          <LinkedInIcon sx={{ mr: [1, 2, 2], fontSize: [24, 50, 50] }} />
          https://www.linkedin.com/in/g-erm/
        </Button>
        <Button
          href='https://github.com/g-erm'
          sx={{
            color: '#412300',
            textTransform: 'none',
            fontFamily: 'Krub',
            fontWeight: 500,
            fontSize: [12, 24, 24],
          }}
        >
          <GitHubIcon sx={{ mr: [1, 2, 2], fontSize: [24, 50, 50] }} />
          https://github.com/g-erm
        </Button>
      </Grid>
    </Box>
  )
}

export default Contacts;