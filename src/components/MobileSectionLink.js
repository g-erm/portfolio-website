import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@mui/material';

function MobileSectionLink(props) {
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
        onClick={props.onClick}
        sx={{
          mx: 1,
          color: '#072B19',
          display: 'block',
          fontFamily: 'Krub',
          fontWeight: 600,
          fontSize: 16,
        }}
      >
        {props.sectionName}
      </Button>
    </HashLink>
  )
}

export default MobileSectionLink;
