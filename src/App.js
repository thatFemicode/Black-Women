import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { MainStyled } from './Styling/MainStyled';
import { theme } from './Styling/theme';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Story from './Pages/Story/Story';
import Preloader from './Components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <MainStyled>
          <Routes>
            <Route path="/" element={<Home loading={loading} />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </MainStyled>
      )}
    </ThemeProvider>
  );
}

export default App;
