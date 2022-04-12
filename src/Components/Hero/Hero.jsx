import React, { useRef, useEffect } from 'react';
import Banner from '../Banner/Banner';
import Block from '../Block/Block';
import Collage from '../Collage/Collage';
import { HeroStyled } from './HeroStyled';
import { gsap } from 'gsap';
import { OuterLayout } from '../../Styling/Layout/Layout';
import Bottom from '../Bottom/Bottom';
import Footer from '../Footer/Footer';

const Hero = () => {
  let containerRef = useRef(null);
  useEffect(() => {
    gsap.to(containerRef, { duration: 0.1, opacity: 1 });
  });
  return (
    <HeroStyled ref={(el) => (containerRef = el)} className="hero-container">
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
