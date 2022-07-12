import React from 'react';
import { HashLink } from 'react-router-hash-link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Container from '@mui/material/Container';
import SectionLink from '../components/SectionLink';
import MobileSectionLink from '../components/MobileSectionLink';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <AppBar position="sticky" sx={{ bgcolor: '#FFF7EDBF', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <HashLink smooth to='#' style={{ textDecoration:'none' }}>
            <Typography
              noWrap
              sx={{
                fontFamily: 'Krub',
                fontWeight: 700,
                fontSize: [20, 40, 40],
                color: '#072B19',
                textDecoration: 'none',
                mr: [1, 4, 4],
              }}
            >
              g-erm
            </Typography>
          </HashLink>
          
          <Box 
            component="a"
            href="https://www.linkedin.com/in/g-erm/"
            sx={{ mt: [0, 1, 1], mx: [0, 1, 1] }}
          >
            <LinkedInIcon sx={{ fontSize: [20, 32, 32], color: "#072B19" }} />
          </Box>
          <Box 
            component="a"
            href="https://github.com/g-erm"
            sx={{ mt: [0, 1, 1], mx: [1, 2, 2], flexGrow: 1 }}
          >
            <GitHubIcon sx={{ fontSize: [20, 32, 32], color: "#072B19" }} />
          </Box>

          <Box 
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'none' },
              mt: 0,
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MobileSectionLink onClick={handleCloseNavMenu} sectionName='Skills' sectionLink='#skills' />
              <MobileSectionLink onClick={handleCloseNavMenu} sectionName='Experiences' sectionLink='#experiences' />
              <MobileSectionLink onClick={handleCloseNavMenu} sectionName='Projects' sectionLink='#projects' />
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <SectionLink sectionName='Skills' sectionLink='#skills' />
            <SectionLink sectionName='Experiences' sectionLink='#experiences' />
            <SectionLink sectionName='Projects' sectionLink='#projects' />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  );
};

export default ResponsiveAppBar;
