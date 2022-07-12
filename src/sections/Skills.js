import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Thumbnail from '../components/Thumbnail';
import SkillCard from '../components/SkillCard';
import java from '../assets/java-logo.png';
import js from '../assets/js-logo.png';
import c from '../assets/c-logo.png';
import cpp from '../assets/cpp-logo.png';
import csharp from '../assets/csharp-logo.png';
import react from '../assets/react-logo.png';
import figma from '../assets/figma-logo.png';
import html from '../assets/html-logo.png';
import css from '../assets/css-logo.png';
import git from '../assets/git-logo.png';
import gitlab from '../assets/gitlab-logo.png';
import github from '../assets/github-logo.png';

function Skills() {
  return (
    <Box id='skills' sx={{p: [4, null, 5]}}>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [14, 32, 32],
          color: '#072B19',
          mb: 3,
        }}
      >
       Skills
      </Typography>

      <Grid
        sx={{
          display: 'flex',
          gap: 2,
          flexDirection: ['column', null, 'row'],
          justifyContent: 'space-between',
        }}
      >
        <SkillCard title="Programming languages">
          <Thumbnail src={java} alt="Java" />
          <Thumbnail src={js} alt="Javascript" />
          <Thumbnail src={c} alt="C" />
          <Thumbnail src={cpp} alt="C++" />
          <Thumbnail src={csharp} alt="C sharp" />
        </SkillCard>
        
        <SkillCard title="Front-end development">
          <Thumbnail src={react} alt="React" />
          <Thumbnail src={figma} alt="Figma" />
          <Thumbnail src={html} alt="HTML" />
          <Thumbnail src={css} alt="CSS" />
        </SkillCard>
      
        <SkillCard title="Version control">
          <Thumbnail src={github} alt="Git Hub" />
          <Thumbnail src={git} alt="Git" />
          <Thumbnail src={gitlab} alt="Git Lab" />
        </SkillCard>
        
      </Grid>
    </Box>
  )
}

export default Skills;
