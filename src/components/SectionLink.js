import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';

function SectionLink(props) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -64; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <HashLink smooth
      to={props.sectionLink}
      style={{ textDecoration:'none' }}
      scroll={el => scrollWithOffset(el)}
    >
      <Button
        sx={{
          mt: 1,
          mx: 2,
          color: '#072B19',
          display: 'block',
          fontFamily: 'Krub',
          fontWeight: 500,
          fontSize: 24,
        }}
      >
        {props.sectionName}
      </Button>
    </HashLink>
  )
}

export default SectionLink;
