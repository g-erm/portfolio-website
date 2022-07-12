import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function ProjectCard(props) {
  return (
    <Box sx={{
      margin: ['auto', null, 0],
      borderRadius: 4,
      width: [250, 400, 400],
      height: [250, 400, 400],
      backgroundImage: `url(${props.bgImg})`,
      backgroundSize: 'cover',
      backgroundColor: props.tintColor,
      backgroundBlendMode: 'darken',
      textAlign: 'center',
    }}>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [12, 24, 24],
          textShadow: '2px 4px 4px #00000080',
          color: '#ffffff',
          textAlign: 'center',
          pt: [2, null, 3],
        }}
      >
        {props.projectType}
        <br />
        {props.title}
      </Typography>
      <Button
        href={props.link}
        sx={{
          fontFamily: 'Krub',
          fontWeight: 500,
          fontSize: [10, 20, 20],
          backgroundColor: '#E1CCB3',
          color: '#072B19',
          my: 1,
          py: [0, 1, 1],
          textTransform: 'none',
          boxShadow: '2px 4px 4px #00000080',
          '&:hover': {
            backgroundColor: '#072B19',
          color: '#ffffff',
          },
        }}
      >
        {props.linkName}
      </Button>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [10, 20, 20],
          textShadow: '1px 4px 4px #00000080;',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        Related: {props.relatedSkills}
      </Typography>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 500,
          fontSize: [10, 16, 16],
          textShadow: '1px 4px 4px #00000080;',
          color: '#ffffff',
          textAlign: 'center',
          mt: [1, 3, 3],
          px: 3,
          whiteSpace: 'pre-wrap',
        }}
      >
        {props.desc}
      </Typography>
    </Box>
  )
}

export default ProjectCard;
