import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import smartglasses from '../assets/smartglasses.PNG';
import website from '../assets/website.PNG';
import upsidedown from '../assets/upsidedown.PNG';
import rng from '../assets/rng.PNG';
import contactapp from '../assets/contactapp.PNG';
import dsta from '../assets/dsta.PNG';

function Projects() {
  return (
    <Box id='projects' sx={{p: [2, null, 5]}}>
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [14, 32, 32],
          color: '#072B19',
          mb: 5,
          textAlign: 'center',
        }}
      >
       Projects
      </Typography>

      <Grid
        sx={{
          display: 'flex',
          gap: 5,
          flexDirection: ['column', null, 'row'],
          justifyContent: 'center',
          flexFlow: 'wrap',
        }}
      >
        <ProjectCard
          bgImg={smartglasses}
          tintColor='#006D75BF'
          projectType='Design Concept'
          title='Virtually Running Together'
          linkName='Portfolio'
          link='https://docs.google.com/presentation/d/1bgYrsZHM_07Qt1Z0NHsBqPk4rOFGHEusB8hKN1R8EpA/edit?usp=sharing'
          relatedSkills='Figma, Balsamiq'
          desc='Awarded First Individual Prize for the Huawei Future Interaction Award,
          Virtually Running Together is an individual project proposing a smart glasses
          application UI to help users have an enjoyable experience running with their
          friends without being physically together.'
        />
        <ProjectCard
          bgImg={website}
          tintColor='#112B39BF'
          projectType='Web Development'
          title='Personal Portfolio Webpage'
          linkName='Repository'
          link='https://www.example.com'
          relatedSkills='HTML, CSS, JS, React'
          desc='This current webpage you are seeing is my first web development project I
          have embarked on! I am slowly updating and improving on it as I gain more experience from here.'
        />
        <ProjectCard
          bgImg={upsidedown}
          tintColor='#811C1CBF'
          projectType='Top-down Platformer Game'
          title='Upside Down'
          linkName='View it on Itch.io'
          link='https://tingalinga.itch.io/upside-down'
          relatedSkills='Unity, C#'
          desc='Worked in a team of 6 developers to develop a 2D top-down platformer game using Unity and C#'
        />
        <ProjectCard
          bgImg={rng}
          tintColor='#000F4380'
          projectType='2D Platformer Game'
          title='RnG'
          linkName='Repository'
          link='https://github.com/g-erm/RnG'
          relatedSkills='Unity, C#'
          desc='Worked in a team of 2 developers to develop a 2D platformer game using Unity and C#'
        />
        <ProjectCard
          bgImg={contactapp}
          tintColor='#7D4B0080'
          projectType='Contact Management App'
          title='CANdidates'
          linkName='Repository'
          link='https://github.com/g-erm/tp'
          relatedSkills='Java, JavaFX'
          desc='Mostly developed using Java with GUI created with JavaFX, CANdidates was
          developed with 4 other developers as part of a software engineering module following standard Git workflow.'
        />
        <ProjectCard
          bgImg={dsta}
          tintColor='#141D3580'
          projectType='Android App Development'
          title='DSTA 2020 Hackathon'
          linkName='Repository'
          link='https://github.com/g-erm/DSTA-CODE_EXP-2020'
          relatedSkills='Java, Android Studio'
          desc='Worked together with 4 other developers to develop an “all-in-one” Android
          application targeted at the elderly amongst the COVID-19 situation.'
        />
      </Grid>
    </Box>
  )
}

export default Projects;
