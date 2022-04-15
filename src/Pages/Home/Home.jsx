import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import Navbar from '../../Components/Navbar/Navbar';
import Preloader from '../../Components/Preloader/Preloader';
import ScrollToTop from '../../Components/ScrollToTop/ScrollToTop';
import { MainStyled } from '../../Styling/MainStyled';
import { HomeStyled } from './HomeStyled';

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <HomeStyled className="home-container">
          <MainStyled>
            <Navbar />
            <ScrollToTop />
            <Hero />
          </MainStyled>
        </HomeStyled>
      )}
    </>
  );
};

export default Home;
