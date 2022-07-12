import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';
import Introduction from './sections/Introduction';
import Skills from './sections/Skills';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Contacts from './sections/Contacts';
import ResponsiveAppBar from './sections/AppBar.tsx';

function App() {
  return (
    <BrowserRouter>
      <Box 
        sx={{
          margin: 'auto',
          width: 1200,
          maxWidth: '100%',
        }}
      >
        <ResponsiveAppBar />
        <Introduction />
        <Skills />
        <Experiences />
        <Projects />
        <Contacts />
      </Box>
    </BrowserRouter>
    
  );
}

export default App;
