import React from 'react';
import Banner from '../Banner/Banner';
import Block from '../Block/Block';
import Collage from '../Collage/Collage';
import { HeroStyled } from './HeroStyled';
import { OuterLayout } from '../../Styling/Layout/Layout';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const Hero = () => {
  return (
    <HeroStyled className="hero-container">
      <OuterLayout>
        <Banner />
        <div className="hero-media">
          <Block />
          <Collage />
        </div>
        <Bottom />
        <Footer />
      </OuterLayout>
    </HeroStyled>
  );
};

export default Hero;
