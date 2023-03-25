import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
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
                  fontSize: [20, 40, 40],
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
              Associate UX Developer <br/> at Indeed.com
            </Typography>
            <Typography 
              sx={{
                fontFamily: 'Krub',
                fontWeight: 400,
                fontSize: [10, 20, 20],
                color: '#412300',
              }}
            >
              Feb 2023 - Mar 2023 <br />
              Job Seeker Content - Company Pages <br />
              Improved the webpage's front-end performance by reducing bundle size by removing unnecessary packages. <br />
              Implement UI experiments supporting UX initiatives on making informed, user-centric changes to the product. <br />
              Worked closely with other UX functions like designers and researchers to develop user-centric products and initiatives. <br />
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
                  fontSize: [20, 40, 40],
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
              May 2022 - Jul 2022 <br />
              Job Seeker Content - Education Team <br />
              Interned for both Design and Development roles with responsibilities split between the two disciplines <br />
              Develop accessible and reusable frontend React components <br />
              Create high-fidelity Figma designs that define the user experience and user interface
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
                  fontSize: [20, 40, 40],
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
              May 2021 - Aug 2021 <br />
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
                  fontSize: [20, 40, 40],
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
              Graduated Jan 2023 <br />
              Bachelor of Computing (Computer Science) with Honours (Distinction) <br />
              Computer Games and Graphics Focus Area (Distinction)
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  )
}

export default Experiences;
