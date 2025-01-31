import { useState } from 'react';

import { ThemeProvider, CssBaseline, Container, Box } from '@mui/material';

import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  return (
    // <div>Hello</div>
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container maxWidth="lg">
        <Box my={4}>
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;