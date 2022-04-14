import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainStyled } from './Styling/MainStyled';
import { theme } from './Styling/theme';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';
import Story from './Pages/Story/Story';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
