import React, { useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import Preloader from '../../Components/Preloader/Preloader';
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
            <Hero />
          </MainStyled>
        </HomeStyled>
      )}
    </>
  );
};

export default Home;
