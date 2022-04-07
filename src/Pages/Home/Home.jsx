import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Preloader from '../../Components/Preloader/Preloader';
import { MainStyled } from '../../Styling/MainStyled';
import { HomeStyled } from './HomeStyled';

const Home = ({}) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <HomeStyled>
          <MainStyled>
            <Banner />
          </MainStyled>
        </HomeStyled>
      )}
    </>
  );
};

export default Home;
