import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { Box, Typography } from '@mui/material';

function Experiences() {
  return (
    <Box
      id='experiences'
      sx={{
        px: [4, null, 5],
        alignContent: 'left',
      }}
    >
      <Typography 
        sx={{
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: [14, 32, 32],
          color: '#072B19',
          mb: 3,
        }}
      >
       Experiences
      </Typography>
      <Timeline
        sx={{
          pl: 0,
          "& .MuiTimelineItem-root:before": {
            flex: 0,
            pl: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: '#072B19',
                padding: [1, 3, 3],
              }}
            >
              <WorkOutlineSharpIcon
                sx={{
                  fontSize: [20, 50, 50],
                  color: '#FFF7EE',
                }}
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: [3, 6, 6], backgroundColor: '#072B19' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 500,
                fontSize: [12, 24, 24],
                color: '#412300',
                my: 2,
              }}
            >
              UX Developer/Designer Intern <br/> at Indeed.com
            </Typography>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 400,
                fontSize: [10, 20, 20],
                color: '#412300',
              }}
            >
              May 2022 - July 2022 <br />
              Develop accessible and reusable frontend React components <br />
              Create high-fidelity Figma designs that define the user experience
              and user interface
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: '#072B19',
                padding: [1, 3, 3],
              }}
            >
              <MenuBookSharpIcon
                sx={{
                  fontSize: [20, 50, 50],
                  color: '#FFF7EE',
                }}
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: [3, 6, 6], backgroundColor: '#072B19' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 500,
                fontSize: [12, 24, 24],
                color: '#412300',
                my: 2,
              }}
            >
              Undergraduate Teaching Assistant <br/> at NUS School of Computing
            </Typography>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 400,
                fontSize: [10, 20, 20],
                color: '#412300',
              }}
            >
              August 2021 - May 2022 <br/>
              Facilitate lab sessions for the module CS2100 Computer Organisation
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: '#072B19',
                padding: [1, 3, 3],
              }}
            >
              <WorkOutlineSharpIcon
                sx={{
                  fontSize: [20, 50, 50],
                  color: '#FFF7EE',
                }}
              />
            </TimelineDot>
            <TimelineConnector sx={{ width: [3, 6, 6], backgroundColor: '#072B19' }} />
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 500,
                fontSize: [12, 24, 24],
                color: '#412300',
                my: 2,
              }}
            >
              Fullstack Software Engineer Intern <br/> at MatcHub.co
            </Typography>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 400,
                fontSize: [10, 20, 20],
                color: '#412300',
              }}
            >
              May 2021 - August 2021 <br />
              Frontend development in React and backend development in Django<br/>
              Assist with development of new features as well as updating of existing dashboards<br/>
              Involved in the UI designing for new features using Figma
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: '#072B19',
                padding: [1, 3, 3],
              }}
            >
              <SchoolOutlinedIcon
                sx={{
                  fontSize: [20, 50, 50],
                  color: '#FFF7EE',
                }}
              />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 500,
                fontSize: [12, 24, 24],
                color: '#412300',
                my: [2, 4, 4],
              }}
            >
              NUS Computer Science Undergraduate
            </Typography>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 400,
                fontSize: [10, 20, 20],
                color: '#412300',
              }}
            >
              Expected Graduation: Summer 2023 <br />
              Pursuing a Bachelor's Degree in Computing (Computer Science)
              with focus area in Games and Graphics
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  )
}

export default Experiences;
