import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainStyled } from './Styling/MainStyled';
import { theme } from './Styling/theme';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </MainStyled>
    </ThemeProvider>
  );
}

export default App;
